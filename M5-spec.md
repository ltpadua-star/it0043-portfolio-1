# Navigation Toggle

##  Trigger
user clicks the navigation button

## DOM change
show or hide the navigation links

## Edge cases
user clicks the button repeatedly
links should not appear twice

## Pseudocode
START
    DISPLAY menu_button

    WHEN menu_button is clicked:

        IF navigation menu is currently HIDDEN THEN
            SHOW navigation menu

        ELSE
            HIDE navigation menu

        END IF

END

# Dark mode

##  Trigger
click the dark mode button

## DOM change
change page to dark colors

## Edge cases
click again to turn it off
keep texts readable

## Pseudocode
START
    DISPLAY dark_mode_button

    WHEN dark_mode_button is clicked:

        IF page background is currently LIGHT THEN
            CHANGE page background to DARK
            CHANGE text color to LIGHT

        ELSE
            CHANGE page background to LIGHT
            CHANGE text color to DARK

        END IF

END

# Dynamic content

##  Trigger
page loads

## DOM change
the array items shows on the page

## Edge cases
array is empty
do not repeat the items


START
    DISPLAY project_section

    FOR EACH project in the project list:
        DISPLAY project title
        DISPLAY project description
        DISPLAY project image
    END FOR

    IF project list is empty THEN
        DISPLAY "No projects available"
    END IF

# Contact Form

##  Trigger
submit the contact form

## DOM change
show an error or success message

## Edge cases
a field is empty
the email is wrong


## Pseudocode
START
    DISPLAY contact_form

    WHEN contact_form is submitted:

        CHECK name field
        CHECK email field
        CHECK message field

        IF name field is empty THEN
            DISPLAY "Please enter your name" beside the name field
        END IF

        IF email field is empty or incorrect THEN
            DISPLAY "Please enter a valid email" beside the email field
        END IF

        IF message field is empty THEN
            DISPLAY "Please " beside the message field
        END IF

END