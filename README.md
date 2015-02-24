## Website Performance Optimization portfolio project

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

1. You'll need to install [gulp](http://gulpjs.com/) globally using npm

  ```bash
  $> npm install --global gulp
  ```

1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080/index-critical.html
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Keep in mind the webpage you should be analysing is index-critical.html, not index.html. [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

#####Outline:

I used Gulp to automatize a few tasks, namely: minification, compression and inlining. 
I commanded the script tags to behave as async.
I created a file named index-critical.html with all the optimizations included. 


####Part 3: Optimize Frames per Second in pizza.html

The main issues with views/pizza.html were unecessary computations inside some of the for loops. Once that was fixed everything started working properly.
