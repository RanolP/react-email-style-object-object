# tailwind-style-repro

when use combination of following stuff

- react-email
- responsive mail body
- tailwindcss
- custom style tag

it makes weird style bug.

Run `yarn dev` and see `[object Object]` in `<style>` tag inside `<head>`.
If you comment out `<style>` tag, the `[object Object]` will disappear.
