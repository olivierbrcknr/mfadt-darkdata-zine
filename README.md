# MFADT Dark Data — Zine

This is the zine repository for the Spring 2021 class "Dark Data" by [David Carroll](https://twitter.com/profcarroll) and [Melanie Crean](http://www.melaniecrean.com/) in the program [MFA Design & Technology](https://www.newschool.edu/parsons/mfa-design-technology/) at Parsons School of Design.

## Articles and Contributors

* [I Have Nothing to Hide](_posts/2021-04-28-I-Have-Nothing-to-Hide.md) by Salil Parekh

## Adding an article

### Text

Please add your articles in a [markdown](https://kramdown.gettalong.org/quickref.html) format to the [_posts](_posts/) folder or send them to us.

Naming convention: PublishingDate-Title.md\
Example: `2021-04-23-My-Article.md`\
This is important, as the document name becomes the URL of the article.

Each file contains a specific head, enclosed by `---` breaks. It looks similarly to this:

```md
title: Example Article
desc: A test description
author: Raymond Holt
categories: A
```

Please fill this out according to your article.
* `title` : The title of your article. This can be more extensive than the one in the file name. This will be shown on the website.
* `desc` (optional) : One sentence to describe what your article is about.
* `author` : Your name.
* `categories` : The category in which the article should be listed in. Please refer to the editors.

Add notes to your articles, where we should add imagery, videos, or any other content that is not text. More info below.

### Images / Media

Please send any media that should be added to [this](https://drive.google.com/drive/u/1/folders/1KHaBLT8nj9Xuky0CErDFeoablLKt9qsI) folder (a New School account is required). We will adapt them and add them to your article. 

### Special content, e.g., interactive components

If you have specific requests to add to your website, please contact us directly or [add an issue](https://github.com/olivierbrcknr/mfadt-darkdata-zine/issues/new) to this repository, so that we know what you want to do and how to best make it possible together with you.

## Development

This website works with [Jekyll](https://jekyllrb.com/).
To test it locally download the folder, open it in the terminal and run Jekyll:

```sh
jekyll serve --watch
```
You should now be able to test it in [http://localhost:4000](http://localhost:4000).

### Install Jekyll

If you do not have Jekyll installed, use [ruby](https://www.ruby-lang.org/) to install it:

```sh
gem install github-pages
```
