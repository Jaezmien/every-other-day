<script>
	import dayjs from 'dayjs';
	import { onMount } from 'svelte';

	let is_inverse = false;
	let text = '';

	onMount(() => {
		is_inverse = !!localStorage.getItem('every-other-day');

		update_state();
	});

	function update_state() {
		const unix_seconds = dayjs().unix();
		const current_day = Math.floor(unix_seconds / 60 / 24);
		const other = current_day % 2 === (is_inverse ? 1 : 0);

		text = other ? 'It is the other day!' : 'It is not the other day...';

		if (other) document.querySelector('body').classList.remove('bg-red');
		else document.querySelector('body').classList.add('bg-red');
	}

	function check_inverse() {
		if (localStorage.getItem('every-other-day')) localStorage.removeItem('every-other-day');
		else localStorage.setItem('every-other-day', 'true');

		is_inverse = !!localStorage.getItem('every-other-day');
		update_state();
	}
</script>

<main>
	<div>
		<h1>{text}</h1>
		<form>
			<input type="checkbox" name="inverse" id="inverse" bind:checked={is_inverse} on:change={check_inverse} />
			<label for="inverse">Check for the inverse</label>
		</form>
	</div>
</main>
