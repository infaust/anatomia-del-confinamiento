# Anatomía del confinamiento

Static site for the artistic photography project [Anatomía del confinamiento](http://anatomiadelconfinamiento.com/), lead by [Andrea Ruiz](https://www.drearuiz.com/).

The site is powered by [Hugo](https://gohugo.io/).


## Build

Build Hugo's docker image:

```
docker build -t hugo .
```

## Run

Run the container with `docker run`:

```
docker run --rm -it -v $PWD:/src -p 1313:1313 -u hugo jguyomard/hugo-builder hugo server -w --bind=0.0.0.0
```

And open the browser at <http://localhost:1313/> to access the site.

Hugo's container hot reloads changes in real-time without the need to restart the container.


## Deploy

Run:

```
docker run --rm -it -v $PWD:/src -v $PWD/public:/usr/share/blog/public -e AWS_REGION=<aws-region> -e AWS_ACCESS_KEY_ID=<key-id> -e AWS_SECRET_ACCESS_KEY=<secret-access-key> hugo hugo deploy --verbose
```
