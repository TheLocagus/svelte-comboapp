<script lang="ts">
import StartDateIcon from "../../components/StartDateIcon.svelte";
export let time;
</script>

<div class="time">
    <StartDateIcon height="16px"/>
    <span>{time}</span>
</div>

<style>
    .time {
        display: flex;
        align-items: center;
        margin-right: 0.8rem;
    }

    .time span {
        margin-left: 3px;
    }
</style>