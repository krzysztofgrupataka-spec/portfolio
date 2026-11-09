<?php
error_reporting(E_ALL);
$issues = [];
set_error_handler(function ($severity, $message, $file, $line) use (&$issues) {
    $issues[$message . " ($file:$line)"] = $severity;
    return true;
});
function add_action(...$args) {}
function add_filter(...$args) {}
function is_admin() { return false; }
require 'D:/dev/php8/volumeMonit/vendor/autoload.php';
$system = VolumeMonit\System::getInstance();
$system->boot();
if ($system !== VolumeMonit\System::getInstance()) throw new Exception('Singleton failed');
$setup = $system->getContainer()->get(VolumeMonit\Theme\Setup::class);
unset($_SERVER['HTTP_USER_AGENT']);
if ($setup->deferScripts('<script src="app.js"></script>') !== '<script defer src="app.js"></script>') throw new Exception('Defer failed');
$system->getContainer()->get(VolumeMonit\Theme\Options::class)->addPages();
echo "PASS: autoload, DI boot, singleton, missing User-Agent, absent ACF options API\n";
try {
    unserialize(serialize($system));
    throw new Exception('Unserialize should fail');
} catch (LogicException $expected) {
    echo "PASS: singleton rejects unserialization\n";
}
$compiler = new Illuminate\View\Compilers\BladeCompiler(new Illuminate\Filesystem\Filesystem(), sys_get_temp_dir());
$count = 0;
foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator('D:/dev/php8/volumeMonit/resources/views')) as $file) {
    if ($file->getExtension() !== 'php') continue;
    $compiled = $compiler->compileString(file_get_contents($file->getPathname()));
    token_get_all($compiled, TOKEN_PARSE);
    $count++;
}
echo "PASS: syntax of $count compiled Blade templates\n";
foreach ($issues as $message => $severity) echo "$severity: $message\n";
