#Questions

How do we build and run it?

## Requirements

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`

## Quickstart

```bash
git clone git@github.com:zurb/foundation-libsass-template.git
npm install && bower install
```

While you're working on your project, run:

`grunt`

And you're set!

## Directory Structure

  * `scss/_settings.scss`: Foundation configuration settings go in here
  * `scss/app.scss`: Application styles go here
  * `scss/app.scss`: All Custom Scss files here




#Questions

What tools did you use? 

For this project I used the following tools

1) Angular js
2) Scss for generating css
3) Grunt for project bulding
4) Bower for components management
5) Sublime Editor for development

Why did you use them?

I used the zurb foundation framework for responsive design and use scss for custom syling. 
I used Angular because its mvc and required less code to achieve the result. 
I used grunt as a task runner and have different benefits e.g compress your CSS and minify your JavaScript, Optimize your images, using scss.
I used bower for front-end package manager have lot of benefits.

Did you intentionally leave stuff out? 

I had the busy schedule on last weekend but somehow I managed to complete the application.

In that case, what and why?

I just found one problem.

In Angular JS  its very easy to get data from API but I get the problem with trailer API.

They haven’t implemented the Cross-origin resource sharing (CORS) on server so I get the CORS error.
So for now I used the Php file traileraddict.php to get the data from trailleradict and then angular service to get the trailer id from my php function.

we can also resolve this error by using proxy server if needed and want to stuck only with front-end framework.