<script lang="ts">
	import HostContainer from '$lib/components/hostContainer.svelte';
	import Button2 from '$lib/components/button2.svelte';
	
	import PlusIcon from '$lib/icons/plusIcon.svelte';

	import { Api, hosts } from '$lib/api';
	import { onMount } from 'svelte';

	onMount(Api.getHosts);
</script>

<div class="flex justify-center">
	<div class="flex justify-between items-center w-[38rem] py-5">
		<p class="text-2xl font-bold">Clients:</p>
		<div class="flex space-x-2">
			<Button2 onClick={Api.getHosts}>Refresh</Button2>
			<Button2 onClick={Api.getHosts}>
				<p>New<p>
			</Button2>
		</div>
	</div>
</div>

<div class="flex justify-center p-2">
	<ul>
		{#each $hosts as host}
			<HostContainer
				hostName={host.name}
				hostId={host.id}
				hostIp={host.ip_address}
				hostMac={host.mac_address}
			></HostContainer>
		{/each}
	</ul>
</div>

<style lang="css">
	:global(html) {
		background-color: #0a0a0a;
		color: #ffffff;
	}
</style>
