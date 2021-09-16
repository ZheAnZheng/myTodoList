<template>

    <div  :id="id" class=" modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title ">
                        <slot name="title"></slot>
                    </h5>
                    <button class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <h5>
                        <slot name="content"></slot>
                    </h5>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                    <button type="button" class="btn btn-primary">TODO</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["id"]
}
</script>