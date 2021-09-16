
// baseCard應用兩種樣式，都是給任務UI及新增任務UI
<template>
<!-- TODO 這格template有view跟邏輯耦合問題 -->
  <div v-if="addMode" class="row my-2 justify-content-center">
    <div class="col-12 col-sm-8 col-md-6 d-grid mx-auto">
      <button
        class="
          btn
          d-flex
          justify-content-center
          btn-outline-secondary
          border-5
          shadow-lg
        "
        tabindex="-1"
        data-bs-toggle="modal"
        data-bs-target="#modalTarget"
      >
        <svg
          width="55"
          height="55"
          viewBox="0 -5 63 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M43.4085 21.0681C40.6241 21.0681 38.3762 18.7936 38.4088 16.0095L38.5358 5.17755C38.5682 2.41631 36.356 0.151652 33.5948 0.119283L30.0147 0.0773161C27.2535 0.0449473 24.9888 2.25713 24.9565 5.01836L24.8263 16.1267C24.7942 18.8651 22.5652 21.0681 19.8266 21.0681H9C6.23858 21.0681 4 23.3067 4 26.0681V29.6483C4 32.4098 6.23858 34.6483 9 34.6483H19.5502C22.3345 34.6483 24.5825 36.9228 24.5498 39.7069L24.429 50.0153C24.3966 52.7765 26.6088 55.0412 29.37 55.0735L32.95 55.1155C35.7113 55.1479 37.9759 52.9357 38.0083 50.1745L38.1324 39.5897C38.1645 36.8514 40.3935 34.6483 43.132 34.6483H54C56.7614 34.6483 59 32.4098 59 29.6483V26.0681C59 23.3067 56.7614 21.0681 54 21.0681H43.4085Z"
              fill="#404040"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0"
              y="0.0769653"
              width="63"
              height="63.0389"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <span class="fs-1 fw-bold p-0 align-self-center">新增TODO</span>
      </button>
    </div>
  </div>
  <div v-else class="row my-2 justify-content-center">
    <div class="col-12 col-sm-8 col-md-6 d-grid mx-auto align-self-center">
      <button
        class="
          btn
          d-flex
          justify-content-center
          btn-outline-secondary
          border-5
          shadow-lg
        "
        tabindex="-1"
        data-bs-toggle="modal"
        :data-bs-target="'#a' + todo.id"
      >
        <p class="fw-bold fs-2 align-self-center my-auto">
          <!-- modal標題 -->
          {{todo.title}}
        </p>
      </button>
    </div>
  </div>
  <modal-item v-if="addMode" addMode id="modalTarget"></modal-item>
  <modal-item v-else :id="'a'+todo.id" :title="todo.title" :content="todo.content"></modal-item>
</template>

<script>
import modalItem from "../components/modalItem.vue";
export default {
  components: {
    modalItem,
  },
  
  props: {
    addMode: {
      type: Boolean,
      required: false,
      default: false,
    },
    id: String,
    todo:Object
  },
};
</script>