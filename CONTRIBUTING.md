# INTRODUCTION

conference-api project is a [Sailscast community](https://sailscasts.com/chat) open source project and we are stoked to see you want to contribute to the project.

There are various ways you can contribute, from:

- submitting a new conference
- correcting typo/grammatical errors,
- submitting bug issues,
- new feature suggestions,
- new idea implementation which can be added to the conference-api project.

# Getting Started

## Opening an issue

If you have ideas or experiencing any issue with the conference-API, please feel free to oen an issue.

We kindly recommend you search for your problem on our discord community to avoid having duplicates.

Also we will implore you in a bug report to provide full/relevant information.

Provide descriptions to the best of your ability and you can also include screenshots of error if applicable.

## Contributing to the code

We follow the [GitFlow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

If you are new to the concept you can reach out to the [community](https://sailscasts.com/chat) - in the `conference-api` channel and either a maintainer or community member will be there to help.

## Here is how to get started

1. fork this repo, and then clone it

```sh
git clone https://github.com/{YOUR_USERNAME}/conference-api.git
```

```sh
cd conference-api
```

````sh
git remote add upstream https://github.com/sailscasts/conference-api.git```
````

2. Install the project dependencies with the below command

```sh
npm install
```

Then you install the sails CLI with `npm i -g sails`, lift the development server with the `sails lift` command.

3. Create a new branch

```sh
git checkout -b feature/REPLACE_WITH_THE_FEATURE_OR_FIX_YOUR_ARE_ADDING
```

4. Make your changes

5. Commit the changes following the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) spec, with a very descriptive message and push to your fork

```sh
git add .
git commit -s -m "feat: my very description message"
git push -u origin feature/REPLACE_WITH_THE_FEATURE_OR_FIX_YOUR_ARE_ADDING
```

6. Submit a pull request.

At this stage a maintainer will definitely review your P.R and proceed to approve it or give feedbacks if needed.

## Contributing a conference

We currently aggregage conferences every year in the `conferences.json` file at the root of this project.
To contribute a project, simply add a new entry in the array matching the key of the current year.
For example to contribute a conference happening in **2023**, add a new entry of the below form

```json
{
  "name": "Sailsconf 2023",
  "city": "Port Harcourt",
  "country": "Nigeria",
  "date": "June 14 - 16, 2023",
  "location": "https://youtube.com/@sailscasts",
  "twitterUrl": "https://twitter.com/sails_conf",
  "cfpUrl": "",
  "website": "https://sailsconf.com"
}
```

to the array matching the year 2023:

```json
{
  "2023": [
    {
      "name": "Sailsconf 2023",
      "city": "Port Harcourt",
      "country": "Nigeria",
      "date": "June 14 - 16, 2023",
      "location": "https://youtube.com/@sailscasts",
      "twitterUrl": "https://twitter.com/sails_conf",
      "website": "https://sailsconf.com"
    }
  ]
}
```

Once you are done adding the conference(s), open a PR against the `develop` branch.
