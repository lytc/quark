require 'sass'
require 'yui/compressor'

task :build do
  system "echo - building css"
  # compile scss
  css = File.read('src/scss/quark.scss')
  css = Sass::Engine.new(css, {:syntax => :scss, :load_paths => ['src/scss']}).render
  css_file = File.new('build/css/quark.css', 'w')
  css_file.write(css)
  
  # compress css
  compressor = YUI::CssCompressor.new
  css_min = compressor.compress(File.read('build/css/quark.css'))
  css_min_file = File.new('build/css/quark.min.css', 'w')
  css_min_file.write(css_min)
  css_min_file.close()
  
  system "echo - copy css to docs"
  system "cp build/css/quark.css docs/source/stylesheets/quark.css"
  system "cp build/css/quark.min.css docs/source/stylesheets/quark.min.css"
  system "echo - done!"
end

task :docs do
  system "echo - build docs"
  Dir.chdir('docs') do
    system "middleman build"
  end
  
  # copy to quark-gh-pages
  system "echo - copy docs to gh-pages"
  system "cp -r docs/build/ ../quark-gh-pages/"
  
  # push gh-pages
  system "echo - push gh-pages"
  Dir.chdir('../quark-gh-pages') do
    system "git add -A"
    system "git commit -m 'update'"
    system "git push origin gh-pages"
  end
  
  system "echo - done!"
    
end

task :default => :build