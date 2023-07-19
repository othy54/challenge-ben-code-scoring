<template>
    <div :class="props.identifier">
        <h2> {{ props.title }} </h2>
        <svg v-for="(star, i) in 5" :key="'star-' + i" height="80px" width="80px" version="1.1"
            viewBox="-5.27 -5.27 58.48 58.48" xml:space="preserve" @click="[starActive(i), $emit('update:value', i + 1)]"
            class="star-inactive">
            <g>
                <path
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z">
                </path>
            </g>
        </svg>
    </div>
</template>

<script setup>
const props = defineProps({
    color: {
        type: String,
        default: "#333333"
    },
    value: {
        type: Number,
        default: 0,
    },
    identifier: {
        type: String,
        default: "",
    },
    title: {
        type: String,
        default: ""
    }
})


const starActive = (range) => {
    const stars = Array.from(document.querySelectorAll(`.${props.identifier} .star-inactive`));

    stars.forEach((star) => {
        star.classList.remove('star-active');
    });

    for (let j = 0; j < range + 1; j++) {
        stars[j].classList.add('star-active');
    };

}

</script>
<style lang="postcss" scoped>
svg {
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);

    }
}


.star-inactive {
    fill: transparent;
    stroke: #333333
}


.star-active {
    fill: #FBBB00;
    stroke: #FBBB00
}

h2 {
    text-align: center;
    font-weight: 800;
    letter-spacing: 0.05em;
}
</style>