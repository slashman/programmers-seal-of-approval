# programmers-seal-of-approval

Are you tired of QA inventing bugs on non-development environments, just to screw up your life? 

Add this simple widget for them to know your software is not prone to bugs.

## Sample
![Sample of the Seal](http://slashman.github.io/programmers-seal-of-approval/psoa.png "Sample of the Seal")

## Usage

For quick use, just point the QA team to this page, including the URL of your working software in the "u" param:

http://slashman.github.io/programmers-seal-of-approval/?u=http://slashie.net

(Note that this will not work for all websites, because of iFrame origin rules.)

For persistent use (because your code always works), include this script tag before your opening body tag:

```html
<script src = "http://slashman.github.io/programmers-seal-of-approval/psoa.js"></script>
```

Make sure your content security policy for scripts allows http://slashman.github.io/.

Alternatively, you may just want to download the script and apply it on your own project.

## Credits
Original seal image from http://blog.codinghorror.com/the-works-on-my-machine-certification-program/
