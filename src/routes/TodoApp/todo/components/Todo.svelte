<script lang="ts">

    import Button from "../../components/Button.svelte";
    import {TodoTypeEnum} from "../../types/todo.js";
    import {mode, todos} from "../../store.js";
    import { fade, fly, blur, slide, crossfade
    } from 'svelte/transition';
    import BottomArrowIcon from "./BottomArrowIcon.svelte";
    import IconContainer from "../../components/IconContainer.svelte";
    import DoneIconContainer from "../../components/DoneIconContainer.svelte";
    import {quintOut} from "svelte/easing";

    export let todo;
    export let setColorPrio;
    export let showDetails;
    export let showEdit;
    export let showRemove
    export let toggleFinished;

    let expanded = false;

    const toggleExpandDetails = () => {
      expanded = !expanded;
    }
    $: console.log($todos.map(i=> i))
</script>

<div class="todo" >
<!--    <div class="todo__prio">-->
<!--        <div class={setColorPrio(todo.prio)}></div>-->
<!--    </div>-->
<!--    {#if !todo.isFailed}-->
    <div class="todo__confirm" on:click={() => toggleFinished(todo.id)}>
        <IconContainer fill={$todos.find(item => item.id === todo.id).isFinished} notVisible={todo.isFailed}>
            <DoneIconContainer isFinished={$todos.find(item => item.id === todo.id).isFinished}/>
        </IconContainer>
    </div>
        <!--{/if}-->
    <div class="todo__content">
        <div class="upper-content">
            <div class="todo__title">
                <div class="title">{todo.title}</div>
            </div>
        </div>
        <div class="bottom-content">
            <div class="{setColorPrio(todo.prio)} todo-prio">
                <div class="prio-icon">
                    <div>!</div>
                </div>
                <div class="prio-value">{todo.prio}</div>
            </div>
            <div class="todo__time">
                <div class="time-icon"></div>
                <div class="time">{todo.finishTime}</div>
            </div>
        </div>

<!--        <div class="todo__buttons">-->
<!--            <Button type="button" onClick="{() => showDetails(todo.id)}" text="Details" className="todo-button"/>-->
<!--            {#if $mode === TodoTypeEnum.inProgress}-->
<!--                <Button type="button" onClick="{() => showEdit(todo.id)}" text="Edit" className="todo-button"/>-->
<!--            {/if}-->
<!--            <Button type="button" onClick="{() => showRemove(todo.id)}" text="Remove" className="todo-button"/>-->

<!--        </div>-->
    </div>
    <div class="expand-arrow-content">
        <div class="expand-arrow"><span class:rotate={expanded} on:click={toggleExpandDetails}>
            <BottomArrowIcon height="15px"/>
        </span></div>
    </div>
</div>

<div class="expanded-content" class:expanded>
    <div class="expanded-details">
        <div class="description">{todo.description}</div>
    </div>
</div>

<style>

    .todo {
        margin: 2px 0;
        display: flex;
        align-items: center;
        padding: 15px 0;
        background-color: #444;
        border-radius: 20px;
        color: #ded9d9;
    }

    .todo__confirm {
        flex-basis: 10%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }



    .todo__content{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .bottom-content {
        display: flex;
        align-items: center;
        margin-top: 5px;
        font-size: 0.8em;
        color: #aaa;
    }

    .prio-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        margin-right: 5px;
    }

    .prio-value::first-letter {
        text-transform: uppercase;
    }

    .todo-prio {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
    }

    .todo-prio::after {
        content: '|';
        margin-left: 10px;
        color: #aaa;
    }

    .todo__prio {
        flex-basis: 5%;
        display: flex;
        justify-content: center;
    }

    .todo__title {
    }

    .todo__time {
        flex-basis: 45%;
    }

    .todo__buttons {
        flex-basis: 10%;
        display: flex;
        flex-direction: column;
    }

    .prio {
        font-weight: bold;
        margin-left: 2px;
    }

    .low-prio {
        color: #78b006;
    }

    .low-prio > .prio-icon {
        background-color: #78b006;
        color: white;
    }

    .medium-prio {
        color: yellow;
    }

    .medium-prio > .prio-icon {
        background-color: yellow;
        color: white;
    }

    .hard-prio {
        color: #ea0606;
    }

    .hard-prio > .prio-icon {
        background-color: #ea0606;
        color: white;
    }

    .extreme-prio {
        color: black;
    }

    .extreme-prio > .prio-icon {
        background-color: black;
        color: white;
    }

    .expand-arrow-content {
        flex-basis: 10%;
    }

    .expand-arrow span {
        display: inline-block;
        cursor: pointer;
        transition: 0.2s;
    }

    .expanded-content {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.3s;
        background-color: #444;
        border-radius: 20px;
        width: 98%;
        margin: 0 auto;
    }

    .expanded-content.expanded {
        max-height: 200px;
    }

    .expanded-content .expanded-details {
        height: 200px;
        margin: 1px 0;
        display: flex;
        padding: 15px 0;
        background-color: #444;
        color: #ded9d9;
    }

    .rotate {
        transform: rotate(-180deg);
    }

    /*.notExpanded {*/
    /*    overflow: hidden;*/
    /*    max-height: 0;*/
    /*    transition: max-height 2s;*/
    /*}*/
</style>