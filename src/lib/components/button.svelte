<script lang="ts">
	export let onClick: () => void;
</script>

<button
	class="bg-base font-medium rounded-lg text-sm px-3.5 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
	on:click={onClick}
>
	<slot />
</button>
