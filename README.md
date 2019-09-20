# T2Bootstrap4

![Bootstrap](assets/readme_1.png?classes=pull-right&col-3)

T2Bootstrap4 theme is a [Grav](http://github.com/getgrav/grav) theme that is based on the default [Bootstrap4](https://github.com/getgrav/grav-theme-bootstrap4) theme provided by Trilby media. It includes numerous customisation options, such as navbar styles and web-app settings, as well as comprehensive favicon support.

# Installation

## Terminal

The easiest way to install the theme is via the terminal. Simply clone this repository by doing the following:

	git clone https://github.com/stom66/grav-ts-bootstrap /path/to/grav/user/themes/t2bootstrap

## Zip method

To install this theme via FTP or file brwoser, just download the zip version of the [GitHub repository](https://github.com/stom66/grav-ts-bootstrap) and unzip it under `/path/to/grav/user/themes`. Then, rename the folder to `t2bootstrap4`.

You should now have all the theme files under

    /path/to/grav/user/themes/t2bootstrap4

## Dependencies

The t2bootstrap4 theme depends on the following plugins to provide the appropriate CSS and JS. If you install via GPM, you should be prompted to also install these plugins. 

* [Grav](http://github.com/getgrav/grav)
* [Error](https://github.com/getgrav/grav-theme-error) 
* [Problems](https://github.com/getgrav/grav-plugin-problems)
* [Bootstrapper](https://github.com/getgrav/grav-plugin-bootstrapper) 
* [Sitemap](https://github.com/getgrav/grav-plugin-sitemap)

If you were not prompted to install these automatically you can install them via the terminal with the following commands:

    bin/gpm install error
    bin/gpm install problems
    bin/gpm install bootstrapper
    bin/gpm install sitemap

# Setup

If you want to set t2bootstrap4 as the default theme, you can do so by following these steps:

* Navigate to `/your/site/grav/user/config`.
* Open the **system.yaml** file.
* Change the `theme:` setting to `theme: t2bootstrap4`.
* Change the `absolute_urls:` setting to `absolute_urls: true`.
* Save your changes.
* Clear the Grav cache. The simplest way to do this is by going to the root Grav directory in Terminal and typing `bin/grav clear-cache`.

Once this is done, you should be able to see the new theme on the frontend. Keep in mind any customizations made to the previous theme will not be reflected as all of the theme and templating information is now being pulled from the **bootstrap4** folder.



# Updating

Manually updating T2Bootstrap4 is pretty simple:

* Delete the `user/themes/t2bootstrap4` directory.
* Download the new version of the T2Bootstrap4 theme from [this repository](https://github.com/stom66/grav-ts-bootstrap).
* Unzip the zip file in `user/themes` and rename the resulting folder to `t2bootstrap4`.
* Clear the Grav cache. The simplest way to do this is by going to the root Grav directory in terminal and typing `bin/grav clear-cache`.

> Note: Any changes you have made to any of the files listed under this directory will also be removed and replaced by the new set. Any files located elsewhere (for example a YAML settings file placed in `user/config/themes`) will remain intact.