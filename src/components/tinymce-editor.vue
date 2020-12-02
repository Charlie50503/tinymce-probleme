<template>
    <div>
        <editor v-model="my_value" :init="init"></editor>
    </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
import tinymce from "tinymce/tinymce";
import "tinymce/themes/silver/theme";
import "tinymce/icons/default";
//is bug plugin
import "tinymce/plugins/paste";

export default {
    name: "App",
    components: {
        editor: Editor,
    },
    props: {
        value: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            my_value: "",
            init: {
                inline: false,
                skin_url: "./tinymce/skins/ui/oxide",
                content_css: "./tinymce/skins/content/default/content.css", //入力欄のデサント
                plugins: ["paste"],
                importcss_append: true,
                forced_root_block: "",
                paste_as_text: true,
                paste_enable_default_filters: false,
            },
        };
    },
    methods: {
        changeValue(key) {
            this.select_lang = key;
            this.my_value = this.data[key];
        },
    },
    watch: {
        //テキスト内容変換するため
        value(val) {
            console.log("watch value--------------");
            this.my_value = val;
        },
        my_value(val, oldVal) {
            console.log("watch my_value--------------");
            console.log("my_value val", val, "old", oldVal);
            this.$emit("input", val);
        },
    },
};
</script>

<style></style>
