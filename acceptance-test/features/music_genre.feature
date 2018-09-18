@music
Feature: Music genre
  As a music fan
  I would like to know which genre the bands are in
  So the bands matches my type of music genre

    Scenario: Music genre band
      Given I am using the music app
      When I open the Music Genre Rock
      Then I should see MUSE displayed
