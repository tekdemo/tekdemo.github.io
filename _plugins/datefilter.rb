module Jekyll
  module MyFilters
    def file_date(input)
      File.mtime(input)
    end
  end
end

Liquid::Template.register_filter(Jekyll::MyFilters)

# To get the last modified date, use this liquid string
# {{ page.path | file_date | date_to_string }}
