---
title: Technical Implementation in SpaCy.
tags: [Persuaide, engineering]
style: fill
color: primary
description: Technical Implementation in SpaCy.
---

# Implementation in SpaCy, Inference as DNN

In order to implement the four strategies, it is important to translate the presented strategies into code, respectively the cleaned dataset that we compiled earlier. By now, we expect the ardent reader to ask whether it is actually important to apply the changes to any dataset, and why a deep neural net is even needed. We believe it is a good choice for the following reasons:
Firstly, can correct easily for grammar aspects which is harder ‘on the fly’ (those mentioned before by cleaning the dataset again).
Secondly, retraining and continuous improvement via a flywheel can be easier integrated with deep neural net, as it fits also in a wider architectural scope.
Thirdly, language is inherently complex, and a deep neural net proves to better generalize than everything written down in grammar. While we can use thresholding with the CoLA corpus for instance in order to check the quality independently, which would cost a lot of extra time in inference. 
In the following, we introduce how we use SpaCy the industry standard for NLP to implement the linguistic concepts presented earlier. We could have chosen NLTK, StanfordNLP (earlier CoreNLP), and like to admit that it was an arbitrary choice. However the authors are aware of SpaCy’s internal hashing logic, which allows to transform a vast number of sentences in parallel and with high processing speed.

# Implementing the Dataset with SpaCy

In the following, we explain how we sketch the core algorithms to implement the strategies to transition from extroverted to introverted and vice versa. We will highlight how SpaCy helps at this journey.
SpaCy provides a plethora of features that are imminent important to text manipulation (I want to recommend the book Mastering SpaCy by Duygu Altinok) of which we will only highlight the applied ones. It also serves as the base of further useful concepts such as verb inflection.
Token type identification will help us to identify certain terms at two granularity levels (tag_, and pos_). We will use them in different situations for which we need different granularity when we replace certain words. 
Dependency parsing allows us to identify the depency between different token types which we in turn can use to infill certain words at the right spot.
On the right, you can find a sentence, with it’s tag_ & pos_ titles and the dependencies between them.

![Screenshot-2021-09-12-at-22-15-53.png](https://postimg.cc/wtzvyVKk)

# Implementation of Extra-Intro Transformation Strategies

To conclude the changes, we used SpaCy to analyze changes by Moon (2002) on the tag_, pos_ and dep_ level. This way, we identified the word_types and nuances that need to be altered in order to change extroverted to introverted statements.
## Subjunctivation (e.g., This problem can be resolved. => This problem could be resolved.)

- Identify root verb of a sentence via (dep_=’ROOT’).
- Identify auxiliary modal verbs (tag_=’MD’) before the root with (dep_=’aux’).
- Shift these auxiliary modal verbs  by replacing them as defined in a designated dictionary.
- Inflect the auxiliary modal verbs to fit it into the context.

## Intensification

- Identify root verb (dep_=’ROOT’) of a sentence (replacement if modal verb) on _tag granularity.
- Add adverbs (tag_=’RB’) before verb (dep_=’ROOT’) from designated amplifier or downtoner dict, if no RB present.
- Remove adverbs (tag_=’RB’) before verb (dep_=’ROOT’) from designated amplifier or downtoner dict, if RB present.
- Change adverbs (tag_=’RB’) before verb (dep_=’ROOT’) from designated amplifier or downtoner dict, if RB present.

## Questionification

- Turn existing questions in dataset into statements by replacing question mark with comma, changing word order, and minding casing. 
- Turn statements into questions through verb-subject-switches.
Use tag questions to increase uncertainty writing style of introverts by adding, e.g. negations.

## Vocabulary

- Using WordNet to identify Hypernyms for words that are in the vocabulary of introversion extroversion terms.
- Match for words from dict (types: verb, noun, adjective on _pos level).
- Replace if match, and inflect correctly by minding person and number.

# Transformation Sugar & Helpers

We implemented additional functions and subfunctions to increase the diversity in language and to remove repetitiveness. 

- Use different replacements with different probabilities.
- Randomize the use of replacements with random number and then thresh values.
- Have multiple different replacements over multiple sentences based on random number.
- Only use for present tense or future sentences. Identify future with phrase matcher.

Also, we need some helper functions to correct / reduce complexity of the underlying code.

- ‘Join_punctuation’ to ensure that the punctuation is correctly done.
- Replacement function, to account for casing in replacements.
Verb_inflector to inflect verbs dependent on the person & number in the present statement.
- Missing: Person_Number_inflector to account for plurals with nouns and adjectives.

# Quality Gates: Round 2

In order to ensure that all features such as casing, brackets, and grammatical structures are still working correctly, we run some features again in order to clean up the data. Mind that now, we run everything twice.
This involves running again the inference of CoLA on the data (for semantic and syntactic correctness), and also send all sentences to GingerIt again, to account for grammatical correctness.
After, we have a fully cleaned and correct dataset that is able to write extroverted or introverted statements, and to switch in between them.
