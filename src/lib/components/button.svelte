<script lang="ts">
	export let onClick: () => void;
</script>

<button
	class="bg-base font-medium rounded-lg text-sm px-3.5 py-3.5 me-2 mb-2"
	on:click={onClick}
>
	<slot />
</button>
