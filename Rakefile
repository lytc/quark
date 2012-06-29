task :build do
  system "echo - building css"
  system "scss src/scss/ui5.scss build/css/ui5.css"
  
  system "echo - copy css to docs"
  system "cp build/css/ui5.css docs/source/stylesheets/ui5.css"
  
  # system "echo - build docs"
  #   Dir.chdir('docs') do
  #     system "middleman build"
  #   end
end