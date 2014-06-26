<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">

    <link rel="stylesheet" type="text/css" href="stylesheets/stylesheet.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="stylesheets/pygment_trac.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="stylesheets/print.css" media="print" />

    <title>tekdemo.github.io by tekdemo</title>
  </head>

  <body>

    <header>
      <div class="container">
        <h1>tekdemo.github.io</h1>
        <h2>Warning: Rambling ahead</h2>

        <section id="downloads">
          <a href="https://github.com/tekdemo" class="btn btn-github"><span class="icon"></span>View on GitHub</a>
        </section>
      </div>
    </header>

    <div class="container">
      <section id="main_content">
        <h3>
<a name="welcome-to-my-project-log" class="anchor" href="#welcome-to-my-project-log"><span class="octicon octicon-link"></span></a>Welcome to My project log!</h3>

<p>Since I eventually have to start documenting things, I figured this might be a good way to do it. So, here goes! </p>

<p>Currently my only really active project is my arduino-powered servo controller. The current "stable" data for this is located at <a href="tekdemo.github.com/project-sir-vo">tekdemo.github.com/project-sir-vo</a> , and I'll keep the log in <a href="projects">projects</a>.</p>
      </section>
    </div>

    <!-- This loops through the paginated posts -->
{% for post in paginator.posts %}
  <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
  <p class="author">
    <span class="date">{{ post.date }}</span>
  </p>
  <div class="content">
    {{ post.content }}
  </div>
{% endfor %}

    
  </body>
</html>
