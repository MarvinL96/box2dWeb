#!/usr/bin/env python

import os
from _tools.Closure import Closure
from _tools import HtmlPost
from _tools.HtmlCompressor import HtmlCompressor

js_path = "js"

closure_path = os.path.join(js_path, 'closure-library','closure')

js_dirs = map(lambda dir: os.path.join(js_path, dir), ['box2d','demo','pixelLab'])
application_js_path = os.path.join(js_path, 'application.js')
deps_js_path = os.path.join(js_path, "deps.js")
compiled_js_path = os.path.join(js_path, "compiled.js")

jquery_extern = os.path.join(js_path, 'externs', 'jquery.js')

Closure(
  closure_path = closure_path,
  application_js_path = application_js_path,
  closure_dependencies = js_dirs + [application_js_path],
  deps_js_path = deps_js_path,
  compiled_js_path = compiled_js_path,
  extern_files = [jquery_extern]
).build_and_process('index_source.html', 'index.html', debug = False, skip_build = False)
