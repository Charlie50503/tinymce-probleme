<template>
    <div>
        <div>
            <button type="button" @click="changeValue('jp')">JP</button>
            <button type="button" @click="changeValue('en')">EN</button>
        </div>
        <editor v-model="value"></editor>
        <p>JP CONTENT:{{ data.jp }}</p>
        <p>EN CONTENT:{{ data.en }}</p>
    </div>
</template>

<script>
import tinymce from "@/components/tinymce-editor.vue";
export default {
    name: "Home",
    components: {
        editor: tinymce,
    },
    data() {
        return {
            value: "",
            select_lang: "jp",
            data: {
                jp: "",
                en: "",
            },
        };
    },
    methods: {
        changeValue(key) {
            this.select_lang = key;
            this.value = this.data[key];
        },
    },
    watch: {
        //テキスト内容変換するため
        value(val, oldVal) {
            console.log("my_value val", val, "old", oldVal);
            this.data[this.select_lang] = val;
        },
    },
};
</script>

<style></style>
