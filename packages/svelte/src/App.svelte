<script lang="ts">
  import Button from './lib/Button.svelte'
  import Input from './lib/Input.svelte'
  import InputLabel from './lib/InputLabel.svelte'
  import Select from './lib/Select.svelte'
  import TextArea from './lib/TextArea.svelte'
  import Table from './lib/Table.svelte'
  import BodyText from './lib/BodyText.svelte'
  import BodyTextSmall from './lib/BodyTextSmall.svelte'
  import type { ISelectOptions } from './lib/Select.svelte'

  const selectOptions: ISelectOptions[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]

  let inputValue = $state('')
  let textareaValue = $state('')
  let selectValue = $state('')
</script>

<main>
  <h1>@bios-ui/svelte Components</h1>

  <section>
    <h2>Button Component</h2>
    <Button size="small">Small Button</Button>
    <Button size="medium">Medium Button</Button>
    <Button size="large">Large Button</Button>
  </section>

  <section>
    <h2>Input Components</h2>
    <InputLabel>Input Label:</InputLabel>
    <Input type="text" placeholder="Enter text..." bind:value={inputValue} />
    <BodyTextSmall>Input value: {inputValue}</BodyTextSmall>
  </section>

  <section>
    <h2>Select Component</h2>
    <Select options={selectOptions} bind:value={selectValue} />
    <BodyTextSmall>Selected: {selectValue}</BodyTextSmall>
  </section>

  <section>
    <h2>TextArea Component</h2>
    <TextArea placeholder="Enter multi-line text..." bind:value={textareaValue} rows="4" />
    <BodyTextSmall>TextArea value: {textareaValue}</BodyTextSmall>
  </section>

  <section>
    <h2>Typography Components</h2>
    <BodyText>This is body text with normal size.</BodyText>
    <BodyTextSmall>This is small body text.</BodyTextSmall>
  </section>

  <section>
    <h2>Table Component</h2>
    <Table>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
        </tr>
        <tr>
          <td>Cell 4</td>
          <td>Cell 5</td>
          <td>Cell 6</td>
        </tr>
      </tbody>
    </Table>
  </section>
</main>

<style>
  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  section {
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid var(--color-fg-dark);
  }

  section h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  section > * {
    margin-bottom: 0.5rem;
  }

  section > *:last-child {
    margin-bottom: 0;
  }

  :global(body) {
    background-color: var(--color-bg-light);
    color: var(--color-fg-dark);
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
