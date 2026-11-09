<?php
$root = 'D:/dev/php8/volumeMonit';
chdir($root);
$backup = $root . '/repair-backup-' . date('Ymd-His');
mkdir($backup);
function saveFile($path, $text) {
    global $backup;
    $old = file_get_contents($path);
    if ($old === $text) return;
    $target = $backup . '/' . $path;
    if (!is_dir(dirname($target))) mkdir(dirname($target), 0777, true);
    copy($path, $target);
    file_put_contents($path, $text);
    echo "Updated $path\n";
}
foreach (['Zapamet', 'app'] as $dir) {
    foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir)) as $file) {
        if ($file->getExtension() !== 'php') continue;
        $path = str_replace('\\', '/', $file->getPathname());
        $text = file_get_contents($path);
        $text = str_replace(['Zapamet', 'zapamet'], ['VolumeMonit', 'volumemonit'], $text);
        if ($path === 'Zapamet/Core/Singleton.php') {
            $text = str_replace('private function __wakeup()', 'public function __wakeup(): void', $text);
            $text = str_replace("public function __wakeup(): void\r\n    {\r\n    }", "public function __wakeup(): void\r\n    {\r\n        throw new \\LogicException('Cannot unserialize a singleton.');\r\n    }", $text);
        }
        if ($path === 'Zapamet/Theme/Setup.php') {
            $text = str_replace("\$_SERVER['HTTP_USER_AGENT']", "(\$_SERVER['HTTP_USER_AGENT'] ?? '')", $text);
            $text = preg_replace('/^.*wp_enqueue_script\(\'polyfill\'.*\R/m', '', $text);
            $text = str_replace("->uri(), false", "->uri(), []", $text);
        }
        if ($path === 'Zapamet/Theme/Options.php') {
            $text = str_replace("        acf_add_options_page", "        if (!function_exists('acf_add_options_page')) {\n            return;\n        }\n\n        acf_add_options_page", $text);
        }
        saveFile($path, $text);
    }
}
$data = json_decode(file_get_contents('composer.json'), true, 512, JSON_THROW_ON_ERROR);
unset($data['autoload']['psr-4']['Zapamet\\'], $data['autoload']['psr-4']['Monit\\']);
$data['autoload']['psr-4']['VolumeMonit\\'] = 'VolumeMonit/';
$json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . "\n";
saveFile('composer.json', $json);
if (is_dir('VolumeMonit')) throw new RuntimeException('Destination already exists');
rename('Zapamet', 'VolumeMonit');
echo "Backup: $backup\n";
