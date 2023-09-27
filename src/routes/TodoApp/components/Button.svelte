<script lang="ts">
	export let url: string | null = null;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let onClick: null | (() => void) = null;
	export let text: string;
	export let className = 'basic-button-style';
	export let toGlow = false;
	export let disabled = false;
	export let id: string;
</script>

{#if !url && onClick}
	<button {id} {type} class={className} on:click={onClick} {disabled}>{text}</button>
{:else}
	<a {id} class={className} class:active={toGlow} href={url}>{text}</a>
{/if}

<style>
	.basic-button-style {
		color: black;
		background-color: #ccc;
		border: 1px solid black;
		padding: 5px 20px;
		margin-left: 10px;
		cursor: pointer;
	}
	.basic-button-style:hover {
		background-color: #eee;
	}

	a {
		text-decoration: none;
	}

	.todo-button {
		width: 70px;
		margin: 1px 0;
		padding: 2px 5px;
		font-size: 12px;
		background-color: #de7249;
		border: 1px solid black;
		border-radius: 5px;
		color: #444;
		cursor: pointer;
	}

	.todo-button:hover {
		background-color: orangered;
		border: 1px solid black;
	}

	.add-todo {
		padding: 15px 70px;
		background-color: orangered;
		border: 1px solid orangered;
		color: #030303;
		font-weight: bold;
		border-radius: 5px;
		cursor: pointer;
	}

	.add-todo:hover {
		background-color: #de7249;
		border: 1px solid orangered;
	}

	.footer-modal-button,
	.disabled {
		height: 2.5rem;
		width: 5.5rem;
		margin: 0 0 0 10px;
		background-color: white;
		border: 1px solid black;
		border-radius: 5px;
		cursor: pointer;
	}

	.footer-modal-button:hover {
		background-color: black;
		color: white;
	}

	.disabled:hover {
		cursor: not-allowed;
	}

	.todo-views-button {
		display: block;
		margin: 50px 30px;
		background-color: transparent;
		color: whitesmoke;
		font-family: Verdana, sans-serif;
		font-size: 40px;
		letter-spacing: 2px;
		cursor: pointer;
		text-shadow: -1px 0 deeppink, 0 1px deeppink, 1px 0 deeppink, 0 -1px deeppink;
	}

	.todo-views-button.active {
		text-shadow: 0 0 7px deeppink, 0 0 10px deeppink, 0 0 21px deeppink, 0 0 42px #f877f8,
			0 0 82px #e85ee8, 0 0 92px #ef7eef, 0 0 102px #ec5aec, 0 0 151px #ec21ec;
	}
</style>
