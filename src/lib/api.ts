import { writable } from "svelte/store";

export let hosts = writable<{ id: string; name: string; ip_address: string; mac_address: string }[]>([]);

export namespace Api {
    export async function getHosts() {
        try {
            const res = await fetch('http://127.0.0.1:8000/list_hosts');
            if (!res.ok) {
                throw new Error(`${res.status}`);
            }
            let data = await res.json();

            hosts.set(data);
        } catch (error) {
            console.error(error);
            hosts.set([]);
        }
    }

    export async function sendWolRequest(hostId: string) {
        try {
            const res = await fetch(`http://127.0.0.1:8000/send_wol?host=${hostId}`, {
                method: 'POST'
            });

            if (!res.ok) {
                throw new Error(`${res.status}`);
            }

            const json = await res.json();
        } catch (error) {
            console.error(error);
        }
    }

    export let name: string = '';
    export let ip_address: string = '';
    export let mac_address: string = '';

    export async function addHost() {
        try {
            const res = await fetch(
                `http://127.0.0.1:8000/add_host?name=${name}ip_addr=${ip_address}&mac_addr=${mac_address}`,
                {
                    method: 'POST'
                }
            );

            if (!res.ok) {
                throw new Error(`${res.status}`);
            }

            getHosts();

            const json = await res.json();
        } catch (error) {
            console.error(error);
        }
    }

    export async function deleteHost(hostId: string) {
        try {
            const res = await fetch(`http://127.0.0.1:8000/delete_host?host=${hostId}`, {
                method: 'POST'
            });

            if (!res.ok) {
                throw new Error(`${res.status}`);
            }

            getHosts();

            const json = await res.json();
        } catch (error) {
            console.error(error);
        }
    }
}