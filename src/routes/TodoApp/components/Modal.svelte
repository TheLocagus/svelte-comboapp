<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();
</script>

<div class="modal-background"></div>
<div class="modal">
    <div class="modal-title">Add todo</div>
    <div class="modal-content">
        <slot name="modal-content"></slot>
    </div>
    <div class="footer">
        <slot name="modal-footer"></slot>
    </div>
</div>

<style>
    .modal-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.75);
        z-index: 10;
    }
    .modal {
        position: fixed;
        top: 10vh;
        left: 50%;
        transform: translateX(-50%);
        width: 50%;
        max-height: 80vh;
        background: hotpink;
        border-radius: 5px;
        z-index: 100;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        overflow: auto;
    }
    .modal::-webkit-scrollbar {
        width: 0.5rem;
    }
    .modal::-webkit-scrollbar-track {
        background-color: #e0805b;
        border-radius: 10px;
    }
    .modal::-webkit-scrollbar-thumb {
        background-color: #791111;
        border-radius: 10px;
    }

    .modal-title {
        text-align: center;
        padding: 20px 0;
        font-size: 20px;
        letter-spacing: 1px;
    }


</style>