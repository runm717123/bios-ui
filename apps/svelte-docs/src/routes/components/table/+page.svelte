<script lang="ts">
	import { Table } from '@bios-ui/svelte';
	
	const users = [
		{ id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
		{ id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
		{ id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Moderator' },
		{ id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User' }
	];
	
	const products = [
		{ name: 'Laptop', price: 999, category: 'Electronics', stock: 15 },
		{ name: 'Desk Chair', price: 299, category: 'Furniture', stock: 8 },
		{ name: 'Coffee Maker', price: 149, category: 'Appliances', stock: 23 },
		{ name: 'Notebook', price: 12, category: 'Stationery', stock: 150 }
	];
</script>

<div class="bDocs-component">
	<h1 class="bDocs-component-title">Table</h1>
	<p class="bDocs-component-description">
		A flexible table component that provides consistent styling for tabular data.
		Supports all standard HTML table features while maintaining design system consistency.
	</p>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Basic Table</h2>
		<div class="bDocs-story-canvas">
			<Table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Role</th>
					</tr>
				</thead>
				<tbody>
					{#each users as user}
						<tr>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.role}</td>
						</tr>
					{/each}
				</tbody>
			</Table>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;Table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Name&lt;/th&gt;
      &lt;th&gt;Email&lt;/th&gt;
      &lt;th&gt;Role&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    {#each users as user}
      &lt;tr&gt;
        &lt;td&gt;{user.name}&lt;/td&gt;
        &lt;td&gt;{user.email}&lt;/td&gt;
        &lt;td&gt;{user.role}&lt;/td&gt;
      &lt;/tr&gt;
    {/each}
  &lt;/tbody&gt;
&lt;/Table&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Product Inventory Table</h2>
		<div class="bDocs-story-canvas">
			<Table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Price</th>
						<th>Category</th>
						<th>Stock</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{#each products as product}
						<tr>
							<td>{product.name}</td>
							<td>${product.price}</td>
							<td>{product.category}</td>
							<td>{product.stock}</td>
							<td>
								<span class="status" class:low-stock={product.stock < 20} class:in-stock={product.stock >= 20}>
									{product.stock < 20 ? 'Low Stock' : 'In Stock'}
								</span>
							</td>
						</tr>
					{/each}
				</tbody>
			</Table>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;Table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Product&lt;/th&gt;
      &lt;th&gt;Price&lt;/th&gt;
      &lt;th&gt;Category&lt;/th&gt;
      &lt;th&gt;Stock&lt;/th&gt;
      &lt;th&gt;Status&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    {#each products as product}
      &lt;tr&gt;
        &lt;td&gt;{product.name}&lt;/td&gt;
        &lt;td&gt;${product.price}&lt;/td&gt;
        &lt;td&gt;{product.category}&lt;/td&gt;
        &lt;td&gt;{product.stock}&lt;/td&gt;
        &lt;td&gt;Status Badge&lt;/td&gt;
      &lt;/tr&gt;
    {/each}
  &lt;/tbody&gt;
&lt;/Table&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Simple Data Table</h2>
		<div class="bDocs-story-canvas">
			<Table>
				<tbody>
					<tr>
						<td><strong>Name</strong></td>
						<td>John Doe</td>
					</tr>
					<tr>
						<td><strong>Email</strong></td>
						<td>john@example.com</td>
					</tr>
					<tr>
						<td><strong>Phone</strong></td>
						<td>+1 (555) 123-4567</td>
					</tr>
					<tr>
						<td><strong>Location</strong></td>
						<td>New York, NY</td>
					</tr>
				</tbody>
			</Table>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;Table&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;strong&gt;Name&lt;/strong&gt;&lt;/td&gt;
      &lt;td&gt;John Doe&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;strong&gt;Email&lt;/strong&gt;&lt;/td&gt;
      &lt;td&gt;john@example.com&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/Table&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Styled Table</h2>
		<div class="bDocs-story-canvas">
			<Table class="custom-table">
				<thead>
					<tr>
						<th>Feature</th>
						<th>Basic</th>
						<th>Pro</th>
						<th>Enterprise</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Users</td>
						<td>5</td>
						<td>25</td>
						<td>Unlimited</td>
					</tr>
					<tr>
						<td>Storage</td>
						<td>10GB</td>
						<td>100GB</td>
						<td>1TB</td>
					</tr>
					<tr>
						<td>Support</td>
						<td>Email</td>
						<td>Priority</td>
						<td>24/7 Phone</td>
					</tr>
				</tbody>
			</Table>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;Table class="custom-table"&gt;
  &lt;!-- table content --&gt;
&lt;/Table&gt;</code></pre>
		</div>
	</div>

	<table class="bDocs-props-table">
		<thead>
			<tr>
				<th>Prop</th>
				<th>Type</th>
				<th>Default</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><code>class</code></td>
				<td><code>string</code></td>
				<td><code>''</code></td>
				<td>Additional CSS classes to apply</td>
			</tr>
			<tr>
				<td><code>children</code></td>
				<td><code>Snippet</code></td>
				<td><code>undefined</code></td>
				<td>Table content (thead, tbody, tfoot, etc.)</td>
			</tr>
		</tbody>
	</table>
</div>

<style>
	.status {
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	
	.status.in-stock {
		background-color: #d4edda;
		color: #155724;
	}
	
	.status.low-stock {
		background-color: #fff3cd;
		color: #856404;
	}
	
	:global(.custom-table) {
		border: 2px solid #007bff !important;
	}
	
	:global(.custom-table thead th) {
		background-color: #007bff !important;
		color: white !important;
	}
	
	:global(.custom-table tbody tr:nth-child(even)) {
		background-color: #f8f9fa !important;
	}
</style>
