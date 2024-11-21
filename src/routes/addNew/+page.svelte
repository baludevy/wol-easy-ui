<script lang="ts">
	import TextField from '$lib/components/textField.svelte';
	import Button2 from '$lib/components/button2.svelte';
	import Button3 from '$lib/components/button3.svelte';

	import { Api } from '$lib/api';
	import { goto } from '$app/navigation';

	let name: string;
	let ip_address: string;
	let mac_address: string;

	function addHost() {
		try {
			Api.addHost(name, ip_address, mac_address);

			goto('/');
		} catch {}
		console.error();
	}
</script>

<div class="flex justify-center p-5">
	<div class="border-2 border-gray bg-background text-white rounded-xl w-[38rem] h-[20rem]">
		<h1 class="p-4 text-xl font-bold">Add New Host</h1>

		<div class="py-2">
			<TextField bind:value={name} width="30rem" name="Host Name" placeholder="PC"></TextField>
			<div class="py-4 flex">
				<TextField
					bind:value={ip_address}
					width="14.5rem"
					name="IP Address"
					placeholder="192.168.0.10"
				></TextField>
				<TextField
					bind:value={mac_address}
					width="14.5rem"
					name="MAC Address"
					placeholder="XX:XX:XX:XX:XX:XX"
				></TextField>
			</div>
		</div>

		<div class="flex justify-end gap-3 mr-3 mt-3">
			<Button2 onClick={() => goto('/')}>Back</Button2>
			<Button3 onClick={addHost}>Add</Button3>
		</div>
	</div>
</div>

<style lang="css">
	:global(html) {
		background-color: #0a0a0a;
		color: #ffffff;
	}
</style>
