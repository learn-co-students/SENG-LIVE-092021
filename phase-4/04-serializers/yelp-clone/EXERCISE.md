# Lecture 4 Exercise

If receiving the following error:

```
Your Ruby version is 2.6.1, but your Gemfile specified 2.7.4
```

run the command `rvm use 2.7.4`

### Business

Create a `BusinessSerializer` with the command `rails g serializer business`

A business should be serialized with the following:

- [ ] `name` and `category`: These are the attributes that belong to a business object.
- [ ] The `city`, `state` and `zip_code` should be returned as `location` in the following format: `"Los Angeles, CA 90810"`: The best method to format and return customized data is by using instance methods inside the serializer. Don't forget to add the method to the list of attributes for invoction.
- [ ] Return a list of reviews including `content`: Consider if this should be added as `:reviews` to the list of attributes, or if a separate serializer concerning review objects should be created.

### Review

Create a `ReviewSerializer` with the command `rails g serializer review`

A review should be serialized with the following:

- [ ] `content` which is an attribute that belongs to a review.
- [ ] Return the date the review was created by using the `created_at` attribute in the following format as `post_date`:

Use the following method to format the date. We need to call the following piece of code on the instance that is being serialized. How do we gain access to the instance inside of a serializer instance method?

```rb
 created_at.strftime("%m/%e/%Y %l:%M%p %Z")
```

[For a good strftime](https://foragoodstrftime.com/)

# Testing BusinessSerializer

Expected outcome:

```json
[
  {
    "id": 1,
    "name": "Starbucks",
    "category": "cafe",
    "location": "north pole, california 100099",
    "reviews": [
      {
        "id": 2,
        "content": "this is a great place!",
        "post_date": "11/24/2021 9:20PM UTC"
      }
    ]
  },
  {
    "id": 2,
    "name": "McDonalds",
    "category": "fast-food",
    "location": "south pole, california 100099",
    "reviews": []
  },
  {
    "id": 3,
    "name": "Dennys",
    "category": "diner",
    "location": "los angeles, california 100099",
    "reviews": []
  }
]
```

Navigate to `http://localhost:3000/businesses` in the browser. What is the response? Why is the collection of businesses not being serialized? HINT: `each_serializer`

Refresh the page to confirm that data serialization is correct. 

BONUS: Think about how to also serialize and return author's `username` of each review.