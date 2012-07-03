require 'sass'
require 'yui/compressor'

task :build do
  system "echo - building css"
  # compile scss
  css = File.read('src/scss/ui5.scss')
  css = Sass::Engine.new(css, {:syntax => :scss, :load_paths => ['src/scss']}).render
  css_file = File.new('build/css/ui5.css', 'w')
  css_file.write(css)
  
  # compress css
  compressor = YUI::CssCompressor.new
  css_min = compressor.compress(File.read('build/css/ui5.css'))
  css_min_file = File.new('build/css/ui5.min.css', 'w')
  css_min_file.write(css_min)
  css_min_file.close()
  
  system "echo - copy css to docs"
  system "cp build/css/ui5.min.css docs/source/stylesheets/ui5.min.css"
  
  system "echo - build docs"
     Dir.chdir('docs') do
       system "middleman build"
     end
     # copy to ui5-gh-pages
     system "cp -r docs/build/ ../ui5-gh-pages/"
end

task :default => :build