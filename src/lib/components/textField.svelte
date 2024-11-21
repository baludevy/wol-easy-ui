<script lang="ts">
	export let value: string;
	export let name: string;
	export let placeholder: string;
	export let width: string;
</script>

<div class="ml-4">
	<label for="header" class="block mb-2 text-sm font-medium text-white">{name}</label>
	<input
		type="text"
		id="text"
		class="bg-base border border-base text-white text-sm rounded-lg block p-2.5"
		style="width: {width}"
		bind:value
		{placeholder}
		required
	/>
</div>
