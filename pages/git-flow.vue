<script setup>
const issue = ref([
  'Use one of prepared Issue templates [Feature, Bug, Tech Debt]',
  'Better skip template fields, but don\'t delete them. We can fill them later before implementation',
  'Try to think forward and fill subtasks. Can be  thoughts of different kinds',
  'Describe what is not obvious from a visual prototype - eg UX features',
  'Describe what should NOT be implemented. Typically what is separated in a followup issue.',
  'When start working on Issue -> move it to In Progress column',
])

const pullRequest = ref([
  'Be as most helpful to reviewer as possible. Use Markdown, links, lists, ...',
  'Prove that the changes are working by screen capture or pair of screenshots.',
  '1 PR should solve 1 issue ideally. Tag the initial issue Fixes #99.',
  'Move ticket to Review In Progress column',
  'Validate with initial issue. All checkboxes need to be checked.',
  'Describe previous and new status.',
  'Double-check code diff for unwanted changes.',
  'Comment important part of code per line.',
  'Rebase and resolve conflicts.',
  'Assign the prepared changes to the reviewer.',
  'Ideal count of reviewers is 2.',
  'Commit message - When I apply this comment it will: (e.g. remove unnecessary dependency)',
  'As an author don\'t Resolve comments. Leave resolving on Reviewer after checking the fixed comment',
  'When reviewers are assigned move the card to In Review column',
])

const codeReview = ref([
  'Think of how would you personally solve it first',
  'Validate if PR fully solves initial issue',
  'Validate if PR is not missing anything. Unresolved parts could be moved to another issue.',
  'Go through the code and comment your contradictions per line',
  'Use \'Make Suggestion\' feature to move things forward',
  'Checkout branch and run the scenario as you were user',
  'Watch for console logs',
  'Run with empty values',
  'Run with invalid values',
  'Think about edge cases, try to break it',
  'Try it on more devices',
  'Reviewer sends a request for change or approves changes',
])
</script>

<template>
  <NuxtLayout name="slug">
    <article>
      <slug-title
        title="Git Flow"
        description="
      No worry if our company does not have solid workflow yet. After working for different companies, I can see what's
       ultimately working now.
      I wrote down these rules to make collaboration aligned, so we can iterate from here.
      In the case of missing dev lead or to instruct junior developers, we may use these basics."/>

      <title-section class="git-flow__title">
        Issues
      </title-section>
      <app-checklist
        :list="issue"
        name="issue"/>

      <title-section class="git-flow__title">
        Pull Request
      </title-section>
      <app-checklist
        :list="pullRequest"
        name="pull-request"/>

      <title-section class="git-flow__title">
        Code Review
      </title-section>
      <app-checklist
        :list="codeReview"
        name="code-review"/>
    </article>
  </NuxtLayout>
</template>

<style scoped>
.git-flow__title {
  margin-top: var(--space-xl);
  font-family: var(--font-serif);
  font-size: var(--text-2xl);
}
</style>
