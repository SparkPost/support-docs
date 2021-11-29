---
lastUpdated: "02/08/2020"
title: "Why Can't I Store Images?"
description: "SparkPost doesn't store images for you If you are not using a front end application such as On Gage where you can store your images we recommend the following Upload images to a publicly accessible server or a reputable image hosting service Then link to the image URL in..."
---

SparkPost doesn't store images for you. If you are not using a front end application such as OnGage where you can store your images, we recommend the following:

Upload images to a publicly-accessible server or a reputable image hosting service. Then, link to the image URL in your message HTML or template:
`<img src="http://photosite.com/image.jpg" alt="My image" />`
You can also use merge tags to insert image names dynamically:
`<img src="http://photosite.com/*|IMAGENAME|*" alt="My image" />`
In general, hosting images on your own site is preferable to using general sharing services. File and photo hosting sites could have any number of users' content on them and are more likely to be flagged by spam filters, or be on blacklists.

Include images as inline attachments with your API calls using the images parameter. You'll need to provide the image name (Content-ID), the content (as a base64 encoded string), and the image MIME type. Reference the image name in the 'src' in your HTML content:
`<img src="cid:image_name">`
For most SMTP libraries, including inline images is handled automatically. For example, if you insert an image inline, an img tag is added which then references the Content-ID of the image that's attached. How to add inline images will depend on the SMTP library being used.

Now, in terms of which CDN (Content Delivery Network) to use, it depends if you require high-availability and fast load times for your email static-file/binary content (especially in cases where your recipients are geographically distributed). Using a CDN can help improve your end-recipient experience with the added benefit of reducing load on your operational web servers when using in conjunction with a solid content caching strategy.

Some reputable CDNs we can recommend are: AWS, CloudFlare, and Akamai. We would suggest looking into each and seeing which is most suitable for your needs.
