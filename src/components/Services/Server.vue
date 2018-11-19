<template>
  <div class="row">
    <div class="col-12">
      <card>
        <div class="server-view-container">
          <div class="view">
            <iframe id="iframe" src="http://127.0.0.1/" frameborder="0"></iframe>
          </div>
          <div class="editor-container">
            <div id="html-editor"></div>
            <div id="css-editor"></div>
            <div id="js-editor"></div>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import http from "../../api/http";
import webSrcDB from "../../lib/webserver";
export default {
  mounted() {
    this.generateEditors();
    document.addEventListener("keydown", this.save, false);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.save, false);
  },
  data() {
    const src = webSrcDB.getSrc();
    return {
      editors: {
        html: null,
        css: null,
        js: null
      },
      code: src
    }
  },
  methods: {
    generateEditors() {
      const html_editor = ace.edit("html-editor");
      html_editor.setTheme("ace/theme/monokai");
      html_editor.getSession().setMode("ace/mode/html");
      html_editor.setValue(this.code.html, -1);
      this.editors.html = html_editor;
      const css_editor = ace.edit("css-editor");
      css_editor.setTheme("ace/theme/monokai");
      css_editor.getSession().setMode("ace/mode/css");
      css_editor.setValue(this.code.css, -1);
      this.editors.css = css_editor;
      const js_editor = ace.edit("js-editor");
      js_editor.setTheme("ace/theme/monokai");
      js_editor.getSession().setMode("ace/mode/javascript");
      js_editor.setValue(this.code.js, -1);
      this.editors.js = js_editor;
    },
    async save(e) {
      if ((e.ctrlKey || e.metaKey) && e.which === 83) {
        e.preventDefault();
        const html = this.editors.html.getValue();
        const css = this.editors.css.getValue();
        const js = this.editors.js.getValue();
        await http.webUpdate({ html, css, js });
        webSrcDB.setSrc({ html, css, js })
        document.getElementById("iframe").contentWindow.location.replace("http://127.0.0.1");
        return false;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.server-view-container {
  .view {
    width: 100%;
    height: 270px;
    background-color: #fff;
    margin-bottom: 20px;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
  .editor-container {
    display: flex;
    #html-editor,
    #css-editor,
    #js-editor {
      width: 33%;
      height: 200px;
    }
  }  
}
</style>
