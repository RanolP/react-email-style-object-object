# react-email-style-object-object

This repository is repro for [react-email #637](https://github.com/resendlabs/react-email/issues/637)

See output [here](https://ranolp.github.io/react-email-style-object-object/).

when use combination of following stuff

- react-email
- responsive mail body
- tailwindcss
- style tag in head

it makes weird style bug.

Run `yarn dev` and see `[object Object]` in `<style>` tag inside `<head>`.
If you comment out `<style>` tag, the `[object Object]` will disappear.
