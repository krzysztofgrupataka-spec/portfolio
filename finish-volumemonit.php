<?php
chdir('D:/dev/php8/volumeMonit');
$backup = 'repair-backup-final-' . date('Ymd-His');
mkdir($backup);
function update($path, $text) {
    global $backup;
    if ($text === file_get_contents($path)) return;
    $destination = "$backup/$path";
    if (!is_dir(dirname($destination))) mkdir(dirname($destination), 0777, true);
    copy($path, $destination);
    file_put_contents($path, $text);
    echo "$path\n";
}
$path = 'VolumeMonit/Theme/Options.php';
$text = file_get_contents($path);
$guard = "        if (!function_exists('acf_add_options_page')) {\n            return;\n        }\n\n";
update($path, str_replace($guard . $guard, $guard, $text));
$path = 'VolumeMonit/Theme/Setup.php';
update($path, str_replace("((\$_SERVER['HTTP_USER_AGENT'] ?? '') ?? '')", "(\$_SERVER['HTTP_USER_AGENT'] ?? '')", file_get_contents($path)));
$path = 'VolumeMonit/Core/Singleton.php';
$text = file_get_contents($path);
$text = preg_replace('/public function __wakeup\(\): void\s*\{\s*\}/', "public function __wakeup(): void\n    {\n        throw new \\LogicException('Cannot unserialize a singleton.');\n    }", $text);
update($path, $text);
// Only the seven entry templates: skip absent ACF groups instead of passing
// false to Illuminate View Factory's array_merge (TypeError in PHP 8).
foreach (['home', 'single-service', 'template-about', 'template-contact', 'template-funding', 'template-service'] as $name) {
    $path = "resources/views/$name.blade.php";
    $text = file_get_contents($path);
    $text = preg_replace_callback('/@include\((\'[^\']+\'), (\$\w+)\)/', function ($m) {
        return '@if (is_array(' . $m[2] . ' ?? null) && ' . $m[2] . ")\n  " . $m[0] . "\n  @endif";
    }, $text);
    update($path, $text);
}
