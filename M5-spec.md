# Navigation Toggle

##  Trigger
user clicks the navigation button

## DOM change
show or hide the navigation links

## Edge cases
user clicks the button repeatedly
links should not appear twice

## Pseudocode
1. find menu button
2. find navigation links
3. wait for a click
4. show or hide links

# Dark mode

##  Trigger
click the dark mode button

## DOM change
change page to dark colors

## Edge cases
click again to turn it off
keep texts readable

## Pseudocode
1. find dark mode button
2. wait for a click
3. check if dark mode is on
4. turn it on or off

# Dynamic content

##  Trigger
page loads

## DOM change
the array items shows on the page

## Edge cases
array is empty
do not repeat the items

## Pseudocode
1. make an array
2. find the content area
3. read each item
4. show each item
5. show a message if there are no items

# Contact Form

##  Trigger
submit the contact form

## DOM change
show an error or success message

## Edge cases
a field is empty
the email is wrong


## Pseudocode
1. find contact form
2. find the input fields
3. wait for the form submission
4. check the fields
5. show error if something is wrong
6. show success if everything is correct