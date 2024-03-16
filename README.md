## jekyll-picture-tag

The jekyll-picture-tag plugin was used to reduce the site page loading time.

This plugin generates images of different sizes for different screen sizes and converts to webp format.

### configuration file

Settings for the plugin are specified in the **/_data/picture.yml file**

**This file describes:**

#### breaking points for media queries

``` yaml
media_queries:
    mobile: 'max-width: 480px'
    tablet: 'max-width: 768'
    laptop: 'max-width: 1024px'
    desktop: 'max-width: 1200'
    wide: 'min-width: 1201'
```

#### quality of generated images for different formats

``` yaml
format_quality:
    jpg: 100
    png: 100
    webp: 80
```

#### Presets for different images collections of generated images

``` yaml
presets:
  # This entry is purely an example. It is not the default JPT preset, nor is it available as a
  # built-in.
  default:
    formats: [webp, original] # Order matters!
    widths: [336, 476, 738, 910] # Image widths, in pixels.
  gallery: 
    widths: [375, 500, 640]
    formats: [webp, original]
```

### Using Jekyll Picture Tag (JPT)

The HTML tag `<img>` is replaced by the **JPT** tag, which specifies the parameters of the generated image

- preset properties 
- any other properties - class, ID, title, alt, etc.

``` liquid
    {% picture 
      testimonials # preset
      /assets/images/unsorted/Ivory-Stacked-Stone-Wall-Testimonial-Optimized.jpg # source image URL
    --img # other image properties
      class="orbit-image"
      width="440" height="259" 
      title="Norstone Ivory Quartz" 
    --alt Norstone Ivory Quartz Stone Veneer Feature Wall
    %}
```

More detailed information is here

https://rbuchberger.github.io/jekyll_picture_tag/
