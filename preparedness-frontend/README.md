# Preparedness Assessment
Frontend Styling Acceptance Criteria
[x]The application has a title of Preparedness Assessment
[x]The application has an input field
[x]The input field has a label that says Enter your name
[x]Below the input field there are two buttons
[x]The first button says Click Me
[x]The second button says Reset
[x]The user can enter their name in the input field
[x]When the Click Me button is selected a modal appears


[x]The modal has a header that greets the user with their name
[x]The modal has a body with lorem ipsum filler text
[x]The modal has a close button
[x]The close button in modal closes the modal


[x]The Reset button clears the input field
[x]Frontend Styling Acceptance Criteria
[x]The background is this image
[x]The header text color is white and is 50px
[x]The header is centered on the page
[x]The input label text color is white and is 35px
[x]The input label is centered on the page
[x]The input field text is 18px
[x]The input field should take up 50% of the width of the page
[x]The input field is centered on the page
[x]There is 12px of padding on the left and the right of the input field
[x]There is 6px of padding on the top and the bottom of the input field
[x]The buttons are centered under the input field
[x]The background color of the buttons are #0dcaf0
[x]The color of the text on the buttons is white
[x]Button width is set to 100px
[x]There is 10px of padding on all sides of the button
[x]There is 20px between the two buttons
[x]There is 20px between the bottom of the input and the top of the buttons


Backend Assessment 
[x]Go to dbdiagram and create a free personal account
[x]Start a new diagram
[x]Enter the following code into the left side bar to create the base structure for three models
[x]A free account will allow you to create 10 diagrams so explore different options

[x]Add foreign keys to create relationships between models
[x]Use the following example from the syllabus section for creating relationships between a model called owner and a model called credit_card
[x]The foreign key and the ref will create a visual connection between models

Table person {
  id integer
  created_at timestamp
  updated_at timestamp
}
Table owner {
  id integer
  created_at timestamp
  updated_at timestamp
}

Table credit_cards {
  id integer [primary key]
  owner_id integer [ref: > owner.id]
  created_at timestamp
  updated_at timestamp
}

Table car {
  id integer [primary key]
  owner_id integer [ref: > person.id]
  created_at timestamp
  updated_at timestamp
}

Table house {
  id integer [primary key]
  owner_id integer [ref: > person.id]
  created_at timestamp
  updated_at timestamp
}