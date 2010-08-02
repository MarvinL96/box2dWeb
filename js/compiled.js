// Input 0
function $JSCompiler_emptyFn$$() {
  return function() {
  }
}
function $JSCompiler_get$$($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
}
function $JSCompiler_returnArg$$($JSCompiler_returnArg_value$$) {
  return function() {
    return $JSCompiler_returnArg_value$$
  }
}
var $a$$, $goog$global$$ = this;
function $goog$exportPath_$$($name$$39_parts$$, $opt_object$$, $cur_opt_objectToExportTo$$) {
  $name$$39_parts$$ = $name$$39_parts$$.split(".");
  $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$ || $goog$global$$;
  !($name$$39_parts$$[0] in $cur_opt_objectToExportTo$$) && $cur_opt_objectToExportTo$$.execScript && $cur_opt_objectToExportTo$$.execScript("var " + $name$$39_parts$$[0]);
  for(var $part$$;$name$$39_parts$$.length && ($part$$ = $name$$39_parts$$.shift());) {
    if(!$name$$39_parts$$.length && $opt_object$$ !== undefined) {
      $cur_opt_objectToExportTo$$[$part$$] = $opt_object$$
    }else {
      $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$[$part$$] ? $cur_opt_objectToExportTo$$[$part$$] : $cur_opt_objectToExportTo$$[$part$$] = {}
    }
  }
}
function $goog$nullFunction$$() {
}
function $goog$addSingletonGetter$$($ctor$$) {
  $ctor$$.$getInstance$ = function $$ctor$$$$getInstance$$() {
    return $ctor$$.$instance_$ || ($ctor$$.$instance_$ = new $ctor$$)
  }
}
function $goog$typeOf$$($value$$10$$) {
  var $s$$1$$ = typeof $value$$10$$;
  if($s$$1$$ == "object") {
    if($value$$10$$) {
      if($value$$10$$ instanceof Array || !($value$$10$$ instanceof Object) && Object.prototype.toString.call($value$$10$$) == "[object Array]" || typeof $value$$10$$.length == "number" && typeof $value$$10$$.splice != "undefined" && typeof $value$$10$$.propertyIsEnumerable != "undefined" && !$value$$10$$.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(!($value$$10$$ instanceof Object) && (Object.prototype.toString.call($value$$10$$) == "[object Function]" || typeof $value$$10$$.call != "undefined" && typeof $value$$10$$.propertyIsEnumerable != "undefined" && !$value$$10$$.propertyIsEnumerable("call"))) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if($s$$1$$ == "function" && typeof $value$$10$$.call == "undefined") {
      return"object"
    }
  }
  return $s$$1$$
}
function $goog$isArray$$($val$$3$$) {
  return $goog$typeOf$$($val$$3$$) == "array"
}
function $goog$isArrayLike$$($val$$4$$) {
  var $type$$26$$ = $goog$typeOf$$($val$$4$$);
  return $type$$26$$ == "array" || $type$$26$$ == "object" && typeof $val$$4$$.length == "number"
}
function $goog$isString$$($val$$6$$) {
  return typeof $val$$6$$ == "string"
}
function $goog$isFunction$$($val$$9$$) {
  return $goog$typeOf$$($val$$9$$) == "function"
}
function $goog$isObject$$($type$$27_val$$10$$) {
  $type$$27_val$$10$$ = $goog$typeOf$$($type$$27_val$$10$$);
  return $type$$27_val$$10$$ == "object" || $type$$27_val$$10$$ == "array" || $type$$27_val$$10$$ == "function"
}
function $goog$getUid$$($obj$$5$$) {
  if($obj$$5$$.hasOwnProperty && $obj$$5$$.hasOwnProperty($goog$UID_PROPERTY_$$)) {
    return $obj$$5$$[$goog$UID_PROPERTY_$$]
  }
  $obj$$5$$[$goog$UID_PROPERTY_$$] || ($obj$$5$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$);
  return $obj$$5$$[$goog$UID_PROPERTY_$$]
}
var $goog$UID_PROPERTY_$$ = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), $goog$uidCounter_$$ = 0;
function $goog$bind$$($fn$$, $selfObj$$) {
  var $context$$ = $selfObj$$ || $goog$global$$;
  if(arguments.length > 2) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$$.apply($context$$, $newArgs$$)
    }
  }else {
    return function() {
      return $fn$$.apply($context$$, arguments)
    }
  }
}
function $goog$partial$$($fn$$1$$) {
  var $args$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $newArgs$$1$$ = Array.prototype.slice.call(arguments);
    $newArgs$$1$$.unshift.apply($newArgs$$1$$, $args$$);
    return $fn$$1$$.apply(this, $newArgs$$1$$)
  }
}
var $goog$now$$ = Date.now || function() {
  return+new Date
};
function $goog$inherits$$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$;
  $childCtor$$.prototype.constructor = $childCtor$$
}
;
// Input 1
function $goog$debug$Error$$($opt_msg$$) {
  this.stack = Error().stack || "";
  if($opt_msg$$) {
    this.message = String($opt_msg$$)
  }
}
$goog$inherits$$($goog$debug$Error$$, Error);
$goog$debug$Error$$.prototype.name = "CustomError";
// Input 2
// Input 3
// Input 4
function $goog$Disposable$$() {
}
$goog$Disposable$$.prototype.$disposed_$ = false;
$goog$Disposable$$.prototype.$dispose$ = function $$goog$Disposable$$$$$dispose$$() {
  if(!this.$disposed_$) {
    this.$disposed_$ = true;
    this.$disposeInternal$()
  }
};
$goog$Disposable$$.prototype.$disposeInternal$ = $JSCompiler_emptyFn$$();
// Input 5
var $goog$dom$defaultDomHelper_$$;
// Input 6
var $goog$events$requiresSyntheticEventPropagation_$$;
function $goog$events$Event$$($type$$29$$, $opt_target$$) {
  this.type = $type$$29$$;
  this.currentTarget = this.target = $opt_target$$
}
$goog$inherits$$($goog$events$Event$$, $goog$Disposable$$);
$a$$ = $goog$events$Event$$.prototype;
$a$$.$disposeInternal$ = function $$a$$$$disposeInternal$$() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
$a$$.$propagationStopped_$ = false;
$a$$.$returnValue_$ = true;
$a$$.stopPropagation = function $$a$$$stopPropagation$() {
  this.$propagationStopped_$ = true
};
$a$$.preventDefault = function $$a$$$preventDefault$() {
  this.$returnValue_$ = false
};
// Input 7
// Input 8
function $goog$events$Listener$$() {
}
var $goog$events$Listener$counter_$$ = 0;
$a$$ = $goog$events$Listener$$.prototype;
$a$$.key = 0;
$a$$.$removed$ = false;
$a$$.$callOnce$ = false;
$a$$.$init$ = function $$a$$$$init$$($listener$$20$$, $proxy$$, $src$$5$$, $type$$30$$, $capture$$, $opt_handler$$) {
  if($goog$isFunction$$($listener$$20$$)) {
    this.$isFunctionListener_$ = true
  }else {
    if($listener$$20$$ && $listener$$20$$.handleEvent && $goog$isFunction$$($listener$$20$$.handleEvent)) {
      this.$isFunctionListener_$ = false
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.$listener$ = $listener$$20$$;
  this.$proxy$ = $proxy$$;
  this.src = $src$$5$$;
  this.type = $type$$30$$;
  this.capture = !!$capture$$;
  this.$handler$ = $opt_handler$$;
  this.$callOnce$ = false;
  this.key = ++$goog$events$Listener$counter_$$;
  this.$removed$ = false
};
$a$$.handleEvent = function $$a$$$handleEvent$($eventObject$$) {
  if(this.$isFunctionListener_$) {
    return this.$listener$.call(this.$handler$ || this.src, $eventObject$$)
  }
  return this.$listener$.handleEvent.call(this.$listener$, $eventObject$$)
};
// Input 9
function $goog$math$Coordinate$$($opt_x$$, $opt_y$$) {
  this.x = $opt_x$$ !== undefined ? $opt_x$$ : 0;
  this.y = $opt_y$$ !== undefined ? $opt_y$$ : 0
}
$goog$math$Coordinate$$.prototype.$clone$ = function $$goog$math$Coordinate$$$$$clone$$() {
  return new $goog$math$Coordinate$$(this.x, this.y)
};
$goog$math$Coordinate$$.prototype.toString = function $$goog$math$Coordinate$$$$toString$() {
  return"(" + this.x + ", " + this.y + ")"
};
function $goog$math$Coordinate$difference$$($a$$3$$, $b$$3$$) {
  return new $goog$math$Coordinate$$($a$$3$$.x - $b$$3$$.x, $a$$3$$.y - $b$$3$$.y)
}
;
// Input 10
function $goog$math$Box$$($top$$2$$, $right$$1$$, $bottom$$1$$, $left$$1$$) {
  this.top = $top$$2$$;
  this.right = $right$$1$$;
  this.bottom = $bottom$$1$$;
  this.left = $left$$1$$
}
$goog$math$Box$$.prototype.$clone$ = function $$goog$math$Box$$$$$clone$$() {
  return new $goog$math$Box$$(this.top, this.right, this.bottom, this.left)
};
$goog$math$Box$$.prototype.toString = function $$goog$math$Box$$$$toString$() {
  return"(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
$goog$math$Box$$.prototype.contains = function $$goog$math$Box$$$$contains$($other$$4$$) {
  return!this || !$other$$4$$ ? false : $other$$4$$ instanceof $goog$math$Box$$ ? $other$$4$$.left >= this.left && $other$$4$$.right <= this.right && $other$$4$$.top >= this.top && $other$$4$$.bottom <= this.bottom : $other$$4$$.x >= this.left && $other$$4$$.x <= this.right && $other$$4$$.y >= this.top && $other$$4$$.y <= this.bottom
};
// Input 11
function $goog$math$Size$$($width$$3$$, $height$$3$$) {
  this.width = $width$$3$$;
  this.height = $height$$3$$
}
$goog$math$Size$$.prototype.$clone$ = function $$goog$math$Size$$$$$clone$$() {
  return new $goog$math$Size$$(this.width, this.height)
};
$goog$math$Size$$.prototype.toString = function $$goog$math$Size$$$$toString$() {
  return"(" + this.width + " x " + this.height + ")"
};
$goog$math$Size$$.prototype.floor = function $$goog$math$Size$$$$floor$() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
$goog$math$Size$$.prototype.round = function $$goog$math$Size$$$$round$() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
// Input 12
function $goog$math$Rect$$($x$$41$$, $y$$23$$, $w$$4$$, $h$$4$$) {
  this.left = $x$$41$$;
  this.top = $y$$23$$;
  this.width = $w$$4$$;
  this.height = $h$$4$$
}
$goog$math$Rect$$.prototype.$clone$ = function $$goog$math$Rect$$$$$clone$$() {
  return new $goog$math$Rect$$(this.left, this.top, this.width, this.height)
};
$goog$math$Rect$$.prototype.toString = function $$goog$math$Rect$$$$toString$() {
  return"(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
$goog$math$Rect$$.prototype.contains = function $$goog$math$Rect$$$$contains$($another$$) {
  return $another$$ instanceof $goog$math$Rect$$ ? this.left <= $another$$.left && this.left + this.width >= $another$$.left + $another$$.width && this.top <= $another$$.top && this.top + this.height >= $another$$.top + $another$$.height : $another$$.x >= this.left && $another$$.x <= this.left + this.width && $another$$.y >= this.top && $another$$.y <= this.top + this.height
};
// Input 13
function $goog$object$forEach$$($obj$$9$$, $f$$, $opt_obj$$1$$) {
  for(var $key$$9$$ in $obj$$9$$) {
    $f$$.call($opt_obj$$1$$, $obj$$9$$[$key$$9$$], $key$$9$$, $obj$$9$$)
  }
}
function $goog$object$getValues$$($obj$$18$$) {
  var $res$$2$$ = [], $i$$5$$ = 0;
  for(var $key$$17$$ in $obj$$18$$) {
    $res$$2$$[$i$$5$$++] = $obj$$18$$[$key$$17$$]
  }
  return $res$$2$$
}
function $goog$object$remove$$($obj$$26$$, $key$$24$$) {
  var $rv$$1$$;
  if($rv$$1$$ = $key$$24$$ in $obj$$26$$) {
    delete $obj$$26$$[$key$$24$$]
  }
  return $rv$$1$$
}
var $goog$object$PROTOTYPE_FIELDS_$$ = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
function $goog$object$extend$$($target$$15$$) {
  for(var $key$$31$$, $source$$1$$, $i$$8$$ = 1;$i$$8$$ < arguments.length;$i$$8$$++) {
    $source$$1$$ = arguments[$i$$8$$];
    for($key$$31$$ in $source$$1$$) {
      $target$$15$$[$key$$31$$] = $source$$1$$[$key$$31$$]
    }
    for(var $j$$1$$ = 0;$j$$1$$ < $goog$object$PROTOTYPE_FIELDS_$$.length;$j$$1$$++) {
      $key$$31$$ = $goog$object$PROTOTYPE_FIELDS_$$[$j$$1$$];
      if(Object.prototype.hasOwnProperty.call($source$$1$$, $key$$31$$)) {
        $target$$15$$[$key$$31$$] = $source$$1$$[$key$$31$$]
      }
    }
  }
}
function $goog$object$create$$() {
  var $argLength$$ = arguments.length;
  if($argLength$$ == 1 && $goog$isArray$$(arguments[0])) {
    return $goog$object$create$$.apply(null, arguments[0])
  }
  if($argLength$$ % 2) {
    throw Error("Uneven number of arguments");
  }
  for(var $rv$$2$$ = {}, $i$$9$$ = 0;$i$$9$$ < $argLength$$;$i$$9$$ += 2) {
    $rv$$2$$[arguments[$i$$9$$]] = arguments[$i$$9$$ + 1]
  }
  return $rv$$2$$
}
;
// Input 14
function $goog$string$subs$$($str$$11$$) {
  for(var $i$$11$$ = 1;$i$$11$$ < arguments.length;$i$$11$$++) {
    var $replacement$$ = String(arguments[$i$$11$$]).replace(/\$/g, "$$$$");
    $str$$11$$ = $str$$11$$.replace(/\%s/, $replacement$$)
  }
  return $str$$11$$
}
function $goog$string$trim$$($str$$23$$) {
  return $str$$23$$.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function $goog$string$htmlEscape$$($str$$29$$, $opt_isLikelyToContainHtmlChars$$) {
  if($opt_isLikelyToContainHtmlChars$$) {
    return $str$$29$$.replace($goog$string$amperRe_$$, "&amp;").replace($goog$string$ltRe_$$, "&lt;").replace($goog$string$gtRe_$$, "&gt;").replace($goog$string$quotRe_$$, "&quot;")
  }else {
    if(!$goog$string$allRe_$$.test($str$$29$$)) {
      return $str$$29$$
    }
    if($str$$29$$.indexOf("&") != -1) {
      $str$$29$$ = $str$$29$$.replace($goog$string$amperRe_$$, "&amp;")
    }
    if($str$$29$$.indexOf("<") != -1) {
      $str$$29$$ = $str$$29$$.replace($goog$string$ltRe_$$, "&lt;")
    }
    if($str$$29$$.indexOf(">") != -1) {
      $str$$29$$ = $str$$29$$.replace($goog$string$gtRe_$$, "&gt;")
    }
    if($str$$29$$.indexOf('"') != -1) {
      $str$$29$$ = $str$$29$$.replace($goog$string$quotRe_$$, "&quot;")
    }
    return $str$$29$$
  }
}
var $goog$string$amperRe_$$ = /&/g, $goog$string$ltRe_$$ = /</g, $goog$string$gtRe_$$ = />/g, $goog$string$quotRe_$$ = /\"/g, $goog$string$allRe_$$ = /[&<>\"]/;
function $goog$string$compareVersions$$($version1$$, $version2$$) {
  for(var $order$$ = 0, $v1Subs$$ = $goog$string$trim$$(String($version1$$)).split("."), $v2Subs$$ = $goog$string$trim$$(String($version2$$)).split("."), $subCount$$ = Math.max($v1Subs$$.length, $v2Subs$$.length), $subIdx$$ = 0;$order$$ == 0 && $subIdx$$ < $subCount$$;$subIdx$$++) {
    var $v1Sub$$ = $v1Subs$$[$subIdx$$] || "", $v2Sub$$ = $v2Subs$$[$subIdx$$] || "", $v1CompParser$$ = RegExp("(\\d*)(\\D*)", "g"), $v2CompParser$$ = RegExp("(\\d*)(\\D*)", "g");
    do {
      var $v1Comp$$ = $v1CompParser$$.exec($v1Sub$$) || ["", "", ""], $v2Comp$$ = $v2CompParser$$.exec($v2Sub$$) || ["", "", ""];
      if($v1Comp$$[0].length == 0 && $v2Comp$$[0].length == 0) {
        break
      }
      $order$$ = $goog$string$compareElements_$$($v1Comp$$[1].length == 0 ? 0 : parseInt($v1Comp$$[1], 10), $v2Comp$$[1].length == 0 ? 0 : parseInt($v2Comp$$[1], 10)) || $goog$string$compareElements_$$($v1Comp$$[2].length == 0, $v2Comp$$[2].length == 0) || $goog$string$compareElements_$$($v1Comp$$[2], $v2Comp$$[2])
    }while($order$$ == 0)
  }
  return $order$$
}
function $goog$string$compareElements_$$($left$$2$$, $right$$4$$) {
  if($left$$2$$ < $right$$4$$) {
    return-1
  }else {
    if($left$$2$$ > $right$$4$$) {
      return 1
    }
  }
  return 0
}
;
// Input 15
function $goog$asserts$AssertionError$$($messagePattern$$, $messageArgs$$) {
  $messageArgs$$.unshift($messagePattern$$);
  $goog$debug$Error$$.call(this, $goog$string$subs$$.apply(null, $messageArgs$$));
  $messageArgs$$.shift();
  this.$messagePattern$ = $messagePattern$$
}
$goog$inherits$$($goog$asserts$AssertionError$$, $goog$debug$Error$$);
$goog$asserts$AssertionError$$.prototype.name = "AssertionError";
function $goog$asserts$doAssertFailure_$$($defaultMessage$$, $defaultArgs$$, $givenMessage$$, $givenArgs$$) {
  var $message$$8$$ = "Assertion failed";
  if($givenMessage$$) {
    $message$$8$$ += ": " + $givenMessage$$;
    var $args$$2$$ = $givenArgs$$
  }else {
    if($defaultMessage$$) {
      $message$$8$$ += ": " + $defaultMessage$$;
      $args$$2$$ = $defaultArgs$$
    }
  }
  throw new $goog$asserts$AssertionError$$("" + $message$$8$$, $args$$2$$ || []);
}
function $goog$asserts$assert$$($condition$$, $opt_message$$7$$) {
  !$condition$$ && $goog$asserts$doAssertFailure_$$("", null, $opt_message$$7$$, Array.prototype.slice.call(arguments, 2))
}
function $goog$asserts$assertNumber$$($value$$14$$, $opt_message$$9$$) {
  typeof $value$$14$$ != "number" && $goog$asserts$doAssertFailure_$$("Expected number but got %s.", [$value$$14$$], $opt_message$$9$$, Array.prototype.slice.call(arguments, 2));
  return $value$$14$$
}
;
// Input 16
var $goog$array$ARRAY_PROTOTYPE_$$ = Array.prototype, $goog$array$indexOf$$ = $goog$array$ARRAY_PROTOTYPE_$$.indexOf ? function($arr$$9$$, $obj$$34$$, $opt_fromIndex$$6$$) {
  $goog$asserts$assert$$($arr$$9$$ || $goog$isString$$($arr$$9$$));
  $goog$asserts$assertNumber$$($arr$$9$$.length);
  return $goog$array$ARRAY_PROTOTYPE_$$.indexOf.call($arr$$9$$, $obj$$34$$, $opt_fromIndex$$6$$)
} : function($arr$$10$$, $obj$$35$$, $fromIndex_i$$18_opt_fromIndex$$7$$) {
  $fromIndex_i$$18_opt_fromIndex$$7$$ = $fromIndex_i$$18_opt_fromIndex$$7$$ == null ? 0 : $fromIndex_i$$18_opt_fromIndex$$7$$ < 0 ? Math.max(0, $arr$$10$$.length + $fromIndex_i$$18_opt_fromIndex$$7$$) : $fromIndex_i$$18_opt_fromIndex$$7$$;
  if($goog$isString$$($arr$$10$$)) {
    if(!$goog$isString$$($obj$$35$$) || $obj$$35$$.length != 1) {
      return-1
    }
    return $arr$$10$$.indexOf($obj$$35$$, $fromIndex_i$$18_opt_fromIndex$$7$$)
  }
  for($fromIndex_i$$18_opt_fromIndex$$7$$ = $fromIndex_i$$18_opt_fromIndex$$7$$;$fromIndex_i$$18_opt_fromIndex$$7$$ < $arr$$10$$.length;$fromIndex_i$$18_opt_fromIndex$$7$$++) {
    if($fromIndex_i$$18_opt_fromIndex$$7$$ in $arr$$10$$ && $arr$$10$$[$fromIndex_i$$18_opt_fromIndex$$7$$] === $obj$$35$$) {
      return $fromIndex_i$$18_opt_fromIndex$$7$$
    }
  }
  return-1
}, $goog$array$forEach$$ = $goog$array$ARRAY_PROTOTYPE_$$.forEach ? function($arr$$13$$, $f$$7$$, $opt_obj$$6$$) {
  $goog$asserts$assert$$($arr$$13$$ || $goog$isString$$($arr$$13$$));
  $goog$asserts$assertNumber$$($arr$$13$$.length);
  $goog$array$ARRAY_PROTOTYPE_$$.forEach.call($arr$$13$$, $f$$7$$, $opt_obj$$6$$)
} : function($arr$$14$$, $f$$8$$, $opt_obj$$7$$) {
  for(var $l$$2$$ = $arr$$14$$.length, $arr2$$ = $goog$isString$$($arr$$14$$) ? $arr$$14$$.split("") : $arr$$14$$, $i$$20$$ = 0;$i$$20$$ < $l$$2$$;$i$$20$$++) {
    $i$$20$$ in $arr2$$ && $f$$8$$.call($opt_obj$$7$$, $arr2$$[$i$$20$$], $i$$20$$, $arr$$14$$)
  }
}, $goog$array$map$$ = $goog$array$ARRAY_PROTOTYPE_$$.map ? function($arr$$18$$, $f$$12$$, $opt_obj$$11$$) {
  $goog$asserts$assert$$($arr$$18$$ || $goog$isString$$($arr$$18$$));
  $goog$asserts$assertNumber$$($arr$$18$$.length);
  return $goog$array$ARRAY_PROTOTYPE_$$.map.call($arr$$18$$, $f$$12$$, $opt_obj$$11$$)
} : function($arr$$19$$, $f$$13$$, $opt_obj$$12$$) {
  for(var $l$$5$$ = $arr$$19$$.length, $res$$6$$ = Array($l$$5$$), $arr2$$3$$ = $goog$isString$$($arr$$19$$) ? $arr$$19$$.split("") : $arr$$19$$, $i$$23$$ = 0;$i$$23$$ < $l$$5$$;$i$$23$$++) {
    if($i$$23$$ in $arr2$$3$$) {
      $res$$6$$[$i$$23$$] = $f$$13$$.call($opt_obj$$12$$, $arr2$$3$$[$i$$23$$], $i$$23$$, $arr$$19$$)
    }
  }
  return $res$$6$$
}, $goog$array$every$$ = $goog$array$ARRAY_PROTOTYPE_$$.every ? function($arr$$24$$, $f$$18$$, $opt_obj$$17$$) {
  $goog$asserts$assert$$($arr$$24$$ || $goog$isString$$($arr$$24$$));
  $goog$asserts$assertNumber$$($arr$$24$$.length);
  return $goog$array$ARRAY_PROTOTYPE_$$.every.call($arr$$24$$, $f$$18$$, $opt_obj$$17$$)
} : function($arr$$25$$, $f$$19$$, $opt_obj$$18$$) {
  for(var $l$$7$$ = $arr$$25$$.length, $arr2$$5$$ = $goog$isString$$($arr$$25$$) ? $arr$$25$$.split("") : $arr$$25$$, $i$$25$$ = 0;$i$$25$$ < $l$$7$$;$i$$25$$++) {
    if($i$$25$$ in $arr2$$5$$ && !$f$$19$$.call($opt_obj$$18$$, $arr2$$5$$[$i$$25$$], $i$$25$$, $arr$$25$$)) {
      return false
    }
  }
  return true
};
function $goog$array$contains$$($arr$$30$$, $obj$$38$$) {
  return $goog$array$indexOf$$($arr$$30$$, $obj$$38$$) >= 0
}
function $goog$array$remove$$($arr$$37$$, $obj$$42$$) {
  var $i$$32$$ = $goog$array$indexOf$$($arr$$37$$, $obj$$42$$), $rv$$6$$;
  if($rv$$6$$ = $i$$32$$ >= 0) {
    $goog$asserts$assert$$($arr$$37$$ || $goog$isString$$($arr$$37$$));
    $goog$asserts$assertNumber$$($arr$$37$$.length);
    $goog$array$ARRAY_PROTOTYPE_$$.splice.call($arr$$37$$, $i$$32$$, 1)
  }
  return $rv$$6$$
}
function $goog$array$concat$$() {
  return $goog$array$ARRAY_PROTOTYPE_$$.concat.apply($goog$array$ARRAY_PROTOTYPE_$$, arguments)
}
function $goog$array$clone$$($arr$$40$$) {
  if($goog$isArray$$($arr$$40$$)) {
    return $goog$array$concat$$($arr$$40$$)
  }else {
    for(var $rv$$7$$ = [], $i$$35$$ = 0, $len$$ = $arr$$40$$.length;$i$$35$$ < $len$$;$i$$35$$++) {
      $rv$$7$$[$i$$35$$] = $arr$$40$$[$i$$35$$]
    }
    return $rv$$7$$
  }
}
function $goog$array$extend$$($arr1$$) {
  for(var $i$$36$$ = 1;$i$$36$$ < arguments.length;$i$$36$$++) {
    var $arr2$$8$$ = arguments[$i$$36$$], $isArrayLike$$;
    if($goog$isArray$$($arr2$$8$$) || ($isArrayLike$$ = $goog$isArrayLike$$($arr2$$8$$)) && $arr2$$8$$.hasOwnProperty("callee")) {
      $arr1$$.push.apply($arr1$$, $arr2$$8$$)
    }else {
      if($isArrayLike$$) {
        for(var $len1$$ = $arr1$$.length, $len2$$ = $arr2$$8$$.length, $j$$2$$ = 0;$j$$2$$ < $len2$$;$j$$2$$++) {
          $arr1$$[$len1$$ + $j$$2$$] = $arr2$$8$$[$j$$2$$]
        }
      }else {
        $arr1$$.push($arr2$$8$$)
      }
    }
  }
}
function $goog$array$splice$$($arr$$41$$) {
  $goog$asserts$assert$$($arr$$41$$ || $goog$isString$$($arr$$41$$));
  $goog$asserts$assertNumber$$($arr$$41$$.length);
  return $goog$array$ARRAY_PROTOTYPE_$$.splice.apply($arr$$41$$, $goog$array$slice$$(arguments, 1))
}
function $goog$array$slice$$($arr$$42$$, $start$$3$$, $opt_end$$3$$) {
  $goog$asserts$assert$$($arr$$42$$ || $goog$isString$$($arr$$42$$));
  $goog$asserts$assertNumber$$($arr$$42$$.length);
  return arguments.length <= 2 ? $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$42$$, $start$$3$$) : $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$42$$, $start$$3$$, $opt_end$$3$$)
}
;
// Input 17
function $goog$dom$classes$get$$($className$$3_element$$6$$) {
  return($className$$3_element$$6$$ = $className$$3_element$$6$$.className) && typeof $className$$3_element$$6$$.split == "function" ? $className$$3_element$$6$$.split(/\s+/) : []
}
function $goog$dom$classes$add$$($element$$7$$) {
  var $classes$$ = $goog$dom$classes$get$$($element$$7$$), $args$$inline_41_b$$17$$;
  $args$$inline_41_b$$17$$ = $goog$array$slice$$(arguments, 1);
  for(var $rv$$inline_42$$ = 0, $i$$inline_43$$ = 0;$i$$inline_43$$ < $args$$inline_41_b$$17$$.length;$i$$inline_43$$++) {
    if(!$goog$array$contains$$($classes$$, $args$$inline_41_b$$17$$[$i$$inline_43$$])) {
      $classes$$.push($args$$inline_41_b$$17$$[$i$$inline_43$$]);
      $rv$$inline_42$$++
    }
  }
  $args$$inline_41_b$$17$$ = $rv$$inline_42$$ == $args$$inline_41_b$$17$$.length;
  $element$$7$$.className = $classes$$.join(" ");
  return $args$$inline_41_b$$17$$
}
function $goog$dom$classes$remove$$($element$$8$$) {
  var $classes$$1$$ = $goog$dom$classes$get$$($element$$8$$), $args$$inline_50_b$$18$$;
  $args$$inline_50_b$$18$$ = $goog$array$slice$$(arguments, 1);
  for(var $rv$$inline_51$$ = 0, $i$$inline_52$$ = 0;$i$$inline_52$$ < $classes$$1$$.length;$i$$inline_52$$++) {
    if($goog$array$contains$$($args$$inline_50_b$$18$$, $classes$$1$$[$i$$inline_52$$])) {
      $goog$array$splice$$($classes$$1$$, $i$$inline_52$$--, 1);
      $rv$$inline_51$$++
    }
  }
  $args$$inline_50_b$$18$$ = $rv$$inline_51$$ == $args$$inline_50_b$$18$$.length;
  $element$$8$$.className = $classes$$1$$.join(" ");
  return $args$$inline_50_b$$18$$
}
;
// Input 18
function $goog$structs$SimplePool$$($initialCount$$, $maxCount$$) {
  this.$maxCount_$ = $maxCount$$;
  this.$freeQueue_$ = [];
  if($initialCount$$ > this.$maxCount_$) {
    throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  }
  for(var $i$$inline_59$$ = 0;$i$$inline_59$$ < $initialCount$$;$i$$inline_59$$++) {
    this.$freeQueue_$.push(this.$createObjectFn_$ ? this.$createObjectFn_$() : {})
  }
}
$goog$inherits$$($goog$structs$SimplePool$$, $goog$Disposable$$);
$goog$structs$SimplePool$$.prototype.$createObjectFn_$ = null;
$goog$structs$SimplePool$$.prototype.$disposeObjectFn_$ = null;
function $JSCompiler_StaticMethods_getObject$$($JSCompiler_StaticMethods_getObject$self$$) {
  if($JSCompiler_StaticMethods_getObject$self$$.$freeQueue_$.length) {
    return $JSCompiler_StaticMethods_getObject$self$$.$freeQueue_$.pop()
  }
  return $JSCompiler_StaticMethods_getObject$self$$.$createObjectFn_$ ? $JSCompiler_StaticMethods_getObject$self$$.$createObjectFn_$() : {}
}
function $JSCompiler_StaticMethods_releaseObject$$($JSCompiler_StaticMethods_releaseObject$self$$, $obj$$43$$) {
  $JSCompiler_StaticMethods_releaseObject$self$$.$freeQueue_$.length < $JSCompiler_StaticMethods_releaseObject$self$$.$maxCount_$ ? $JSCompiler_StaticMethods_releaseObject$self$$.$freeQueue_$.push($obj$$43$$) : $JSCompiler_StaticMethods_disposeObject$$($JSCompiler_StaticMethods_releaseObject$self$$, $obj$$43$$)
}
function $JSCompiler_StaticMethods_disposeObject$$($JSCompiler_StaticMethods_disposeObject$self$$, $obj$$44$$) {
  if($JSCompiler_StaticMethods_disposeObject$self$$.$disposeObjectFn_$) {
    $JSCompiler_StaticMethods_disposeObject$self$$.$disposeObjectFn_$($obj$$44$$)
  }else {
    if($goog$isObject$$($obj$$44$$)) {
      if($goog$isFunction$$($obj$$44$$.$dispose$)) {
        $obj$$44$$.$dispose$()
      }else {
        for(var $i$$47$$ in $obj$$44$$) {
          delete $obj$$44$$[$i$$47$$]
        }
      }
    }
  }
}
$goog$structs$SimplePool$$.prototype.$disposeInternal$ = function $$goog$structs$SimplePool$$$$$disposeInternal$$() {
  $goog$structs$SimplePool$$.$superClass_$.$disposeInternal$.call(this);
  for(var $freeQueue$$ = this.$freeQueue_$;$freeQueue$$.length;) {
    $JSCompiler_StaticMethods_disposeObject$$(this, $freeQueue$$.pop())
  }
  delete this.$freeQueue_$
};
// Input 19
// Input 20
// Input 21
function $goog$ui$IdGenerator$$() {
}
$goog$addSingletonGetter$$($goog$ui$IdGenerator$$);
$goog$ui$IdGenerator$$.prototype.$nextId_$ = 0;
$goog$ui$IdGenerator$$.$getInstance$();
// Input 22
function $goog$ui$registry$setDecoratorByClassName$$($className$$8$$, $decoratorFn$$) {
  if(!$className$$8$$) {
    throw Error("Invalid class name " + $className$$8$$);
  }
  if(!$goog$isFunction$$($decoratorFn$$)) {
    throw Error("Invalid decorator function " + $decoratorFn$$);
  }
  $goog$ui$registry$decoratorFunctions_$$[$className$$8$$] = $decoratorFn$$
}
var $goog$ui$registry$defaultRenderers_$$ = {}, $goog$ui$registry$decoratorFunctions_$$ = {};
// Input 23
// Input 24
var $goog$userAgent$detectedOpera_$$, $goog$userAgent$detectedIe_$$, $goog$userAgent$detectedWebkit_$$, $goog$userAgent$detectedMobile_$$, $goog$userAgent$detectedGecko_$$, $goog$userAgent$detectedMac_$$, $goog$userAgent$jscript$DETECTED_HAS_JSCRIPT_$$, $goog$userAgent$jscript$VERSION$$ = ($goog$userAgent$jscript$DETECTED_HAS_JSCRIPT_$$ = "ScriptEngine" in $goog$global$$ && $goog$global$$.ScriptEngine() == "JScript") ? $goog$global$$.ScriptEngineMajorVersion() + "." + $goog$global$$.ScriptEngineMinorVersion() + 
"." + $goog$global$$.ScriptEngineBuildVersion() : "0";
// Input 25
function $goog$userAgent$getUserAgentString$$() {
  return $goog$global$$.navigator ? $goog$global$$.navigator.userAgent : null
}
function $goog$userAgent$getNavigator$$() {
  return $goog$global$$.navigator
}
$goog$userAgent$detectedGecko_$$ = $goog$userAgent$detectedMobile_$$ = $goog$userAgent$detectedWebkit_$$ = $goog$userAgent$detectedIe_$$ = $goog$userAgent$detectedOpera_$$ = false;
var $ua$$inline_64$$;
if($ua$$inline_64$$ = $goog$userAgent$getUserAgentString$$()) {
  var $navigator$$inline_65$$ = $goog$userAgent$getNavigator$$();
  $goog$userAgent$detectedOpera_$$ = $ua$$inline_64$$.indexOf("Opera") == 0;
  $goog$userAgent$detectedIe_$$ = !$goog$userAgent$detectedOpera_$$ && $ua$$inline_64$$.indexOf("MSIE") != -1;
  $goog$userAgent$detectedMobile_$$ = ($goog$userAgent$detectedWebkit_$$ = !$goog$userAgent$detectedOpera_$$ && $ua$$inline_64$$.indexOf("WebKit") != -1) && $ua$$inline_64$$.indexOf("Mobile") != -1;
  $goog$userAgent$detectedGecko_$$ = !$goog$userAgent$detectedOpera_$$ && !$goog$userAgent$detectedWebkit_$$ && $navigator$$inline_65$$.product == "Gecko"
}
var $goog$userAgent$OPERA$$ = $goog$userAgent$detectedOpera_$$, $goog$userAgent$IE$$ = $goog$userAgent$detectedIe_$$, $goog$userAgent$GECKO$$ = $goog$userAgent$detectedGecko_$$, $goog$userAgent$WEBKIT$$ = $goog$userAgent$detectedWebkit_$$, $goog$userAgent$MOBILE$$ = $goog$userAgent$detectedMobile_$$, $navigator$$inline_68$$ = $goog$userAgent$getNavigator$$();
$goog$userAgent$detectedMac_$$ = ($navigator$$inline_68$$ && $navigator$$inline_68$$.platform || "").indexOf("Mac") != -1;
var $goog$userAgent$X11$$ = !!$goog$userAgent$getNavigator$$() && ($goog$userAgent$getNavigator$$().appVersion || "").indexOf("X11") != -1, $goog$userAgent$VERSION$$, $version$$inline_75$$ = "", $re$$inline_76$$;
if($goog$userAgent$OPERA$$ && $goog$global$$.opera) {
  var $operaVersion$$inline_77$$ = $goog$global$$.opera.version;
  $version$$inline_75$$ = typeof $operaVersion$$inline_77$$ == "function" ? $operaVersion$$inline_77$$() : $operaVersion$$inline_77$$
}else {
  if($goog$userAgent$GECKO$$) {
    $re$$inline_76$$ = /rv\:([^\);]+)(\)|;)/
  }else {
    if($goog$userAgent$IE$$) {
      $re$$inline_76$$ = /MSIE\s+([^\);]+)(\)|;)/
    }else {
      if($goog$userAgent$WEBKIT$$) {
        $re$$inline_76$$ = /WebKit\/(\S+)/
      }
    }
  }
  if($re$$inline_76$$) {
    var $arr$$inline_78$$ = $re$$inline_76$$.exec($goog$userAgent$getUserAgentString$$());
    $version$$inline_75$$ = $arr$$inline_78$$ ? $arr$$inline_78$$[1] : ""
  }
}
$goog$userAgent$VERSION$$ = $version$$inline_75$$;
var $goog$userAgent$isVersionCache_$$ = {};
function $goog$userAgent$isVersion$$($version$$8$$) {
  return $goog$userAgent$isVersionCache_$$[$version$$8$$] || ($goog$userAgent$isVersionCache_$$[$version$$8$$] = $goog$string$compareVersions$$($goog$userAgent$VERSION$$, $version$$8$$) >= 0)
}
;
// Input 26
function $goog$dom$getDomHelper$$($opt_element$$) {
  return $opt_element$$ ? new $goog$dom$DomHelper$$($goog$dom$getOwnerDocument$$($opt_element$$)) : $goog$dom$defaultDomHelper_$$ || ($goog$dom$defaultDomHelper_$$ = new $goog$dom$DomHelper$$)
}
function $goog$dom$setProperties$$($element$$17$$, $properties$$) {
  $goog$object$forEach$$($properties$$, function($val$$19$$, $key$$36$$) {
    if($key$$36$$ == "style") {
      $element$$17$$.style.cssText = $val$$19$$
    }else {
      if($key$$36$$ == "class") {
        $element$$17$$.className = $val$$19$$
      }else {
        if($key$$36$$ == "for") {
          $element$$17$$.htmlFor = $val$$19$$
        }else {
          if($key$$36$$ in $goog$dom$DIRECT_ATTRIBUTE_MAP_$$) {
            $element$$17$$.setAttribute($goog$dom$DIRECT_ATTRIBUTE_MAP_$$[$key$$36$$], $val$$19$$)
          }else {
            $element$$17$$[$key$$36$$] = $val$$19$$
          }
        }
      }
    }
  })
}
var $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", type:"type"};
function $goog$dom$append_$$($doc$$11$$, $parent$$4$$, $args$$8$$, $i$$50_startIndex$$) {
  function $childHandler$$($child$$1$$) {
    if($child$$1$$) {
      $parent$$4$$.appendChild($goog$isString$$($child$$1$$) ? $doc$$11$$.createTextNode($child$$1$$) : $child$$1$$)
    }
  }
  for($i$$50_startIndex$$ = $i$$50_startIndex$$;$i$$50_startIndex$$ < $args$$8$$.length;$i$$50_startIndex$$++) {
    var $arg$$5$$ = $args$$8$$[$i$$50_startIndex$$];
    $goog$isArrayLike$$($arg$$5$$) && !($goog$isObject$$($arg$$5$$) && $arg$$5$$.nodeType > 0) ? $goog$array$forEach$$($goog$dom$isNodeList$$($arg$$5$$) ? $goog$array$clone$$($arg$$5$$) : $arg$$5$$, $childHandler$$) : $childHandler$$($arg$$5$$)
  }
}
function $goog$dom$removeChildren$$($node$$3$$) {
  for(var $child$$3$$;$child$$3$$ = $node$$3$$.firstChild;) {
    $node$$3$$.removeChild($child$$3$$)
  }
}
function $goog$dom$removeNode$$($node$$4$$) {
  return $node$$4$$ && $node$$4$$.parentNode ? $node$$4$$.parentNode.removeChild($node$$4$$) : null
}
function $goog$dom$contains$$($parent$$9$$, $descendant$$) {
  if($parent$$9$$.contains && $descendant$$.nodeType == 1) {
    return $parent$$9$$ == $descendant$$ || $parent$$9$$.contains($descendant$$)
  }
  if(typeof $parent$$9$$.compareDocumentPosition != "undefined") {
    return $parent$$9$$ == $descendant$$ || Boolean($parent$$9$$.compareDocumentPosition($descendant$$) & 16)
  }
  for(;$descendant$$ && $parent$$9$$ != $descendant$$;) {
    $descendant$$ = $descendant$$.parentNode
  }
  return $descendant$$ == $parent$$9$$
}
function $goog$dom$getOwnerDocument$$($node$$14$$) {
  return $node$$14$$.nodeType == 9 ? $node$$14$$ : $node$$14$$.ownerDocument || $node$$14$$.document
}
function $goog$dom$setTextContent$$($element$$20$$, $text$$6$$) {
  if("textContent" in $element$$20$$) {
    $element$$20$$.textContent = $text$$6$$
  }else {
    if($element$$20$$.firstChild && $element$$20$$.firstChild.nodeType == 3) {
      for(;$element$$20$$.lastChild != $element$$20$$.firstChild;) {
        $element$$20$$.removeChild($element$$20$$.lastChild)
      }
      $element$$20$$.firstChild.data = $text$$6$$
    }else {
      $goog$dom$removeChildren$$($element$$20$$);
      $element$$20$$.appendChild($goog$dom$getOwnerDocument$$($element$$20$$).createTextNode($text$$6$$))
    }
  }
}
var $goog$dom$TAGS_TO_IGNORE_$$ = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, $goog$dom$PREDEFINED_TAG_VALUES_$$ = {IMG:" ", BR:"\n"};
function $goog$dom$isFocusableTabIndex$$($element$$22_index$$41$$) {
  var $attrNode$$ = $element$$22_index$$41$$.getAttributeNode("tabindex");
  if($attrNode$$ && $attrNode$$.specified) {
    $element$$22_index$$41$$ = $element$$22_index$$41$$.tabIndex;
    return typeof $element$$22_index$$41$$ == "number" && $element$$22_index$$41$$ >= 0
  }
  return false
}
function $goog$dom$getTextContent$$($node$$15_textContent$$) {
  if($goog$userAgent$IE$$ && "innerText" in $node$$15_textContent$$) {
    $node$$15_textContent$$ = $node$$15_textContent$$.innerText.replace(/(\r\n|\r|\n)/g, "\n")
  }else {
    var $buf$$ = [];
    $goog$dom$getTextContent_$$($node$$15_textContent$$, $buf$$, true);
    $node$$15_textContent$$ = $buf$$.join("")
  }
  $node$$15_textContent$$ = $node$$15_textContent$$.replace(/\xAD/g, "");
  $node$$15_textContent$$ = $node$$15_textContent$$.replace(/ +/g, " ");
  if($node$$15_textContent$$ != " ") {
    $node$$15_textContent$$ = $node$$15_textContent$$.replace(/^\s*/, "")
  }
  return $node$$15_textContent$$
}
function $goog$dom$getTextContent_$$($child$$6_node$$17$$, $buf$$2$$, $normalizeWhitespace$$) {
  if(!($child$$6_node$$17$$.nodeName in $goog$dom$TAGS_TO_IGNORE_$$)) {
    if($child$$6_node$$17$$.nodeType == 3) {
      $normalizeWhitespace$$ ? $buf$$2$$.push(String($child$$6_node$$17$$.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : $buf$$2$$.push($child$$6_node$$17$$.nodeValue)
    }else {
      if($child$$6_node$$17$$.nodeName in $goog$dom$PREDEFINED_TAG_VALUES_$$) {
        $buf$$2$$.push($goog$dom$PREDEFINED_TAG_VALUES_$$[$child$$6_node$$17$$.nodeName])
      }else {
        for($child$$6_node$$17$$ = $child$$6_node$$17$$.firstChild;$child$$6_node$$17$$;) {
          $goog$dom$getTextContent_$$($child$$6_node$$17$$, $buf$$2$$, $normalizeWhitespace$$);
          $child$$6_node$$17$$ = $child$$6_node$$17$$.nextSibling
        }
      }
    }
  }
}
function $goog$dom$isNodeList$$($val$$20$$) {
  if($val$$20$$ && typeof $val$$20$$.length == "number") {
    if($goog$isObject$$($val$$20$$)) {
      return typeof $val$$20$$.item == "function" || typeof $val$$20$$.item == "string"
    }else {
      if($goog$isFunction$$($val$$20$$)) {
        return typeof $val$$20$$.item == "function"
      }
    }
  }
  return false
}
function $goog$dom$DomHelper$$($opt_document$$) {
  this.$document_$ = $opt_document$$ || $goog$global$$.document || document
}
$a$$ = $goog$dom$DomHelper$$.prototype;
$a$$.$getDomHelper$ = $goog$dom$getDomHelper$$;
function $JSCompiler_StaticMethods_getDocument$$($JSCompiler_StaticMethods_getDocument$self$$) {
  return $JSCompiler_StaticMethods_getDocument$self$$.$document_$
}
$a$$.$getElement$ = function $$a$$$$getElement$$($element$$26$$) {
  return $goog$isString$$($element$$26$$) ? this.$document_$.getElementById($element$$26$$) : $element$$26$$
};
$a$$.$createDom$ = function $$a$$$$createDom$$() {
  var $doc$$inline_88$$ = this.$document_$, $args$$inline_89$$ = arguments, $element$$inline_94_tagName$$inline_90_tagNameArr$$inline_92$$ = $args$$inline_89$$[0], $attributes$$inline_91$$ = $args$$inline_89$$[1];
  if($goog$userAgent$IE$$ && $attributes$$inline_91$$ && ($attributes$$inline_91$$.name || $attributes$$inline_91$$.type)) {
    $element$$inline_94_tagName$$inline_90_tagNameArr$$inline_92$$ = ["<", $element$$inline_94_tagName$$inline_90_tagNameArr$$inline_92$$];
    $attributes$$inline_91$$.name && $element$$inline_94_tagName$$inline_90_tagNameArr$$inline_92$$.push(' name="', $goog$string$htmlEscape$$($attributes$$inline_91$$.name), '"');
    if($attributes$$inline_91$$.type) {
      $element$$inline_94_tagName$$inline_90_tagNameArr$$inline_92$$.push(' type="', $goog$string$htmlEscape$$($attributes$$inline_91$$.type), '"');
      var $clone$$inline_93$$ = {};
      $goog$object$extend$$($clone$$inline_93$$, $attributes$$inline_91$$);
      $attributes$$inline_91$$ = $clone$$inline_93$$;
      delete $attributes$$inline_91$$.type
    }
    $element$$inline_94_tagName$$inline_90_tagNameArr$$inline_92$$.push(">");
    $element$$inline_94_tagName$$inline_90_tagNameArr$$inline_92$$ = $element$$inline_94_tagName$$inline_90_tagNameArr$$inline_92$$.join("")
  }
  $element$$inline_94_tagName$$inline_90_tagNameArr$$inline_92$$ = $doc$$inline_88$$.createElement($element$$inline_94_tagName$$inline_90_tagNameArr$$inline_92$$);
  if($attributes$$inline_91$$) {
    if($goog$isString$$($attributes$$inline_91$$)) {
      $element$$inline_94_tagName$$inline_90_tagNameArr$$inline_92$$.className = $attributes$$inline_91$$
    }else {
      $goog$isArray$$($attributes$$inline_91$$) ? $goog$dom$classes$add$$.apply(null, [$element$$inline_94_tagName$$inline_90_tagNameArr$$inline_92$$].concat($attributes$$inline_91$$)) : $goog$dom$setProperties$$($element$$inline_94_tagName$$inline_90_tagNameArr$$inline_92$$, $attributes$$inline_91$$)
    }
  }
  $args$$inline_89$$.length > 2 && $goog$dom$append_$$($doc$$inline_88$$, $element$$inline_94_tagName$$inline_90_tagNameArr$$inline_92$$, $args$$inline_89$$, 2);
  return $element$$inline_94_tagName$$inline_90_tagNameArr$$inline_92$$
};
$a$$.createElement = function $$a$$$createElement$($name$$42$$) {
  return this.$document_$.createElement($name$$42$$)
};
$a$$.createTextNode = function $$a$$$createTextNode$($content$$1$$) {
  return this.$document_$.createTextNode($content$$1$$)
};
function $JSCompiler_StaticMethods_getDocumentScroll$$($JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_100$$) {
  $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_100$$ = !$goog$userAgent$WEBKIT$$ && $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_100$$.$document_$.compatMode == "CSS1Compat" ? $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_100$$.$document_$.documentElement : $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_100$$.$document_$.body;
  return new $goog$math$Coordinate$$($JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_100$$.scrollLeft, $JSCompiler_StaticMethods_getDocumentScroll$self_el$$inline_100$$.scrollTop)
}
$a$$.appendChild = function $$a$$$appendChild$($parent$$5$$, $child$$2$$) {
  $parent$$5$$.appendChild($child$$2$$)
};
$a$$.contains = $goog$dom$contains$$;
// Input 27
function $goog$dom$a11y$setRole$$($element$$27$$, $roleName$$) {
  if($goog$userAgent$GECKO$$) {
    $element$$27$$.setAttribute("role", $roleName$$);
    $element$$27$$.$roleName$ = $roleName$$
  }
}
function $goog$dom$a11y$setState$$($element$$29$$, $state$$, $value$$25$$) {
  $goog$userAgent$GECKO$$ && $element$$29$$.setAttribute("aria-" + $state$$, $value$$25$$)
}
;
// Input 28
function $goog$events$BrowserEvent$$($opt_e$$, $opt_currentTarget$$) {
  $opt_e$$ && this.$init$($opt_e$$, $opt_currentTarget$$)
}
$goog$inherits$$($goog$events$BrowserEvent$$, $goog$events$Event$$);
var $goog$events$BrowserEvent$IEButtonMap_$$ = [1, 4, 2];
$a$$ = $goog$events$BrowserEvent$$.prototype;
$a$$.target = null;
$a$$.relatedTarget = null;
$a$$.offsetX = 0;
$a$$.offsetY = 0;
$a$$.clientX = 0;
$a$$.clientY = 0;
$a$$.screenX = 0;
$a$$.screenY = 0;
$a$$.button = 0;
$a$$.keyCode = 0;
$a$$.charCode = 0;
$a$$.ctrlKey = false;
$a$$.altKey = false;
$a$$.shiftKey = false;
$a$$.metaKey = false;
$a$$.$platformModifierKey$ = false;
$a$$.$event_$ = null;
$a$$.$init$ = function $$a$$$$init$$($e$$2$$, $opt_currentTarget$$1$$) {
  var $type$$32$$ = this.type = $e$$2$$.type;
  this.target = $e$$2$$.target || $e$$2$$.srcElement;
  this.currentTarget = $opt_currentTarget$$1$$;
  var $relatedTarget$$ = $e$$2$$.relatedTarget;
  if($relatedTarget$$) {
    if($goog$userAgent$GECKO$$) {
      try {
        $relatedTarget$$ = $relatedTarget$$.nodeName && $relatedTarget$$
      }catch($err$$) {
        $relatedTarget$$ = null
      }
    }
  }else {
    if($type$$32$$ == "mouseover") {
      $relatedTarget$$ = $e$$2$$.fromElement
    }else {
      if($type$$32$$ == "mouseout") {
        $relatedTarget$$ = $e$$2$$.toElement
      }
    }
  }
  this.relatedTarget = $relatedTarget$$;
  this.offsetX = $e$$2$$.offsetX !== undefined ? $e$$2$$.offsetX : $e$$2$$.layerX;
  this.offsetY = $e$$2$$.offsetY !== undefined ? $e$$2$$.offsetY : $e$$2$$.layerY;
  this.clientX = $e$$2$$.clientX !== undefined ? $e$$2$$.clientX : $e$$2$$.pageX;
  this.clientY = $e$$2$$.clientY !== undefined ? $e$$2$$.clientY : $e$$2$$.pageY;
  this.screenX = $e$$2$$.screenX || 0;
  this.screenY = $e$$2$$.screenY || 0;
  this.button = $e$$2$$.button;
  this.keyCode = $e$$2$$.keyCode || 0;
  this.charCode = $e$$2$$.charCode || ($type$$32$$ == "keypress" ? $e$$2$$.keyCode : 0);
  this.ctrlKey = $e$$2$$.ctrlKey;
  this.altKey = $e$$2$$.altKey;
  this.shiftKey = $e$$2$$.shiftKey;
  this.metaKey = $e$$2$$.metaKey;
  this.$platformModifierKey$ = $goog$userAgent$detectedMac_$$ ? $e$$2$$.metaKey : $e$$2$$.ctrlKey;
  this.$event_$ = $e$$2$$;
  delete this.$returnValue_$;
  delete this.$propagationStopped_$
};
function $JSCompiler_StaticMethods_isButton$$($JSCompiler_StaticMethods_isButton$self$$, $button$$) {
  return $goog$userAgent$IE$$ ? $JSCompiler_StaticMethods_isButton$self$$.type == "click" ? $button$$ == 0 : !!($JSCompiler_StaticMethods_isButton$self$$.$event_$.button & $goog$events$BrowserEvent$IEButtonMap_$$[$button$$]) : $JSCompiler_StaticMethods_isButton$self$$.$event_$.button == $button$$
}
$a$$.stopPropagation = function $$a$$$stopPropagation$() {
  $goog$events$BrowserEvent$$.$superClass_$.stopPropagation.call(this);
  if(this.$event_$.stopPropagation) {
    this.$event_$.stopPropagation()
  }else {
    this.$event_$.cancelBubble = true
  }
};
var $goog$events$BrowserEvent$IE7_SET_KEY_CODE_TO_PREVENT_DEFAULT_$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("8");
$goog$events$BrowserEvent$$.prototype.preventDefault = function $$goog$events$BrowserEvent$$$$preventDefault$() {
  $goog$events$BrowserEvent$$.$superClass_$.preventDefault.call(this);
  var $be$$ = this.$event_$;
  if($be$$.preventDefault) {
    $be$$.preventDefault()
  }else {
    $be$$.returnValue = false;
    if($goog$events$BrowserEvent$IE7_SET_KEY_CODE_TO_PREVENT_DEFAULT_$$) {
      try {
        if($be$$.ctrlKey || $be$$.keyCode >= 112 && $be$$.keyCode <= 123) {
          $be$$.keyCode = -1
        }
      }catch($ex$$1$$) {
      }
    }
  }
};
$goog$events$BrowserEvent$$.prototype.$disposeInternal$ = function $$goog$events$BrowserEvent$$$$$disposeInternal$$() {
  $goog$events$BrowserEvent$$.$superClass_$.$disposeInternal$.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.$event_$ = null
};
// Input 29
function $goog$events$KeyCodes$firesKeyPressEvent$$($keyCode$$, $opt_heldKeyCode$$, $opt_shiftKey$$, $opt_ctrlKey$$, $opt_altKey$$) {
  if(!$goog$userAgent$IE$$ && !($goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("525"))) {
    return true
  }
  if($goog$userAgent$detectedMac_$$ && $opt_altKey$$) {
    return $goog$events$KeyCodes$isCharacterKey$$($keyCode$$)
  }
  if($opt_altKey$$ && !$opt_ctrlKey$$) {
    return false
  }
  if(!$opt_shiftKey$$ && ($opt_heldKeyCode$$ == 17 || $opt_heldKeyCode$$ == 18)) {
    return false
  }
  if($goog$userAgent$IE$$ && $opt_ctrlKey$$ && $opt_heldKeyCode$$ == $keyCode$$) {
    return false
  }
  switch($keyCode$$) {
    case 13:
      return true;
    case 27:
      return!$goog$userAgent$WEBKIT$$
  }
  return $goog$events$KeyCodes$isCharacterKey$$($keyCode$$)
}
function $goog$events$KeyCodes$isCharacterKey$$($keyCode$$1$$) {
  if($keyCode$$1$$ >= 48 && $keyCode$$1$$ <= 57) {
    return true
  }
  if($keyCode$$1$$ >= 96 && $keyCode$$1$$ <= 106) {
    return true
  }
  if($keyCode$$1$$ >= 65 && $keyCode$$1$$ <= 90) {
    return true
  }
  if($goog$userAgent$WEBKIT$$ && $keyCode$$1$$ == 0) {
    return true
  }
  switch($keyCode$$1$$) {
    case 32:
    ;
    case 63:
    ;
    case 107:
    ;
    case 109:
    ;
    case 110:
    ;
    case 111:
    ;
    case 186:
    ;
    case 189:
    ;
    case 187:
    ;
    case 188:
    ;
    case 190:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return true;
    default:
      return false
  }
}
;
// Input 30
var $goog$events$pools$getObject$$, $goog$events$pools$releaseObject$$, $goog$events$pools$getArray$$, $goog$events$pools$releaseArray$$, $goog$events$pools$getProxy$$, $goog$events$pools$setProxyCallbackFunction$$, $goog$events$pools$releaseProxy$$, $goog$events$pools$getListener$$, $goog$events$pools$releaseListener$$, $goog$events$pools$getEvent$$, $goog$events$pools$releaseEvent$$;
(function() {
  function $getObject$$() {
    return{$count_$:0, $remaining_$:0}
  }
  function $getArray$$() {
    return[]
  }
  function $getProxy$$() {
    function $f$$25$$($eventObject$$1$$) {
      return $proxyCallbackFunction$$.call($f$$25$$.src, $f$$25$$.key, $eventObject$$1$$)
    }
    return $f$$25$$
  }
  function $getListener$$() {
    return new $goog$events$Listener$$
  }
  function $getEvent$$() {
    return new $goog$events$BrowserEvent$$
  }
  var $BAD_GC$$ = $goog$userAgent$jscript$DETECTED_HAS_JSCRIPT_$$ && !($goog$string$compareVersions$$($goog$userAgent$jscript$VERSION$$, "5.7") >= 0), $proxyCallbackFunction$$;
  $goog$events$pools$setProxyCallbackFunction$$ = function $$goog$events$pools$setProxyCallbackFunction$$$($cb$$) {
    $proxyCallbackFunction$$ = $cb$$
  };
  if($BAD_GC$$) {
    $goog$events$pools$getObject$$ = function $$goog$events$pools$getObject$$$() {
      return $JSCompiler_StaticMethods_getObject$$($objectPool$$)
    };
    $goog$events$pools$releaseObject$$ = function $$goog$events$pools$releaseObject$$$($obj$$46$$) {
      $JSCompiler_StaticMethods_releaseObject$$($objectPool$$, $obj$$46$$)
    };
    $goog$events$pools$getArray$$ = function $$goog$events$pools$getArray$$$() {
      return $JSCompiler_StaticMethods_getObject$$($arrayPool$$)
    };
    $goog$events$pools$releaseArray$$ = function $$goog$events$pools$releaseArray$$$($obj$$47$$) {
      $JSCompiler_StaticMethods_releaseObject$$($arrayPool$$, $obj$$47$$)
    };
    $goog$events$pools$getProxy$$ = function $$goog$events$pools$getProxy$$$() {
      return $JSCompiler_StaticMethods_getObject$$($proxyPool$$)
    };
    $goog$events$pools$releaseProxy$$ = function $$goog$events$pools$releaseProxy$$$() {
      $JSCompiler_StaticMethods_releaseObject$$($proxyPool$$, $getProxy$$())
    };
    $goog$events$pools$getListener$$ = function $$goog$events$pools$getListener$$$() {
      return $JSCompiler_StaticMethods_getObject$$($listenerPool$$)
    };
    $goog$events$pools$releaseListener$$ = function $$goog$events$pools$releaseListener$$$($obj$$49$$) {
      $JSCompiler_StaticMethods_releaseObject$$($listenerPool$$, $obj$$49$$)
    };
    $goog$events$pools$getEvent$$ = function $$goog$events$pools$getEvent$$$() {
      return $JSCompiler_StaticMethods_getObject$$($eventPool$$)
    };
    $goog$events$pools$releaseEvent$$ = function $$goog$events$pools$releaseEvent$$$($obj$$50$$) {
      $JSCompiler_StaticMethods_releaseObject$$($eventPool$$, $obj$$50$$)
    };
    var $objectPool$$ = new $goog$structs$SimplePool$$(0, 600);
    $objectPool$$.$createObjectFn_$ = $getObject$$;
    var $arrayPool$$ = new $goog$structs$SimplePool$$(0, 600);
    $arrayPool$$.$createObjectFn_$ = $getArray$$;
    var $proxyPool$$ = new $goog$structs$SimplePool$$(0, 600);
    $proxyPool$$.$createObjectFn_$ = $getProxy$$;
    var $listenerPool$$ = new $goog$structs$SimplePool$$(0, 600);
    $listenerPool$$.$createObjectFn_$ = $getListener$$;
    var $eventPool$$ = new $goog$structs$SimplePool$$(0, 600);
    $eventPool$$.$createObjectFn_$ = $getEvent$$
  }else {
    $goog$events$pools$getObject$$ = $getObject$$;
    $goog$events$pools$releaseObject$$ = $goog$nullFunction$$;
    $goog$events$pools$getArray$$ = $getArray$$;
    $goog$events$pools$releaseArray$$ = $goog$nullFunction$$;
    $goog$events$pools$getProxy$$ = $getProxy$$;
    $goog$events$pools$releaseProxy$$ = $goog$nullFunction$$;
    $goog$events$pools$getListener$$ = $getListener$$;
    $goog$events$pools$releaseListener$$ = $goog$nullFunction$$;
    $goog$events$pools$getEvent$$ = $getEvent$$;
    $goog$events$pools$releaseEvent$$ = $goog$nullFunction$$
  }
})();
// Input 31
var $goog$events$listeners_$$ = {}, $goog$events$listenerTree_$$ = {}, $goog$events$sources_$$ = {}, $goog$events$onStringMap_$$ = {};
function $goog$events$listen$$($src$$6$$, $type$$33$$, $key$$37_listener$$21$$, $capture$$1_opt_capt$$2$$, $opt_handler$$1$$) {
  if($type$$33$$) {
    if($goog$isArray$$($type$$33$$)) {
      for(var $i$$55_proxy$$1$$ = 0;$i$$55_proxy$$1$$ < $type$$33$$.length;$i$$55_proxy$$1$$++) {
        $goog$events$listen$$($src$$6$$, $type$$33$$[$i$$55_proxy$$1$$], $key$$37_listener$$21$$, $capture$$1_opt_capt$$2$$, $opt_handler$$1$$)
      }
      return null
    }else {
      $capture$$1_opt_capt$$2$$ = !!$capture$$1_opt_capt$$2$$;
      var $listenerObj_map$$ = $goog$events$listenerTree_$$;
      $type$$33$$ in $listenerObj_map$$ || ($listenerObj_map$$[$type$$33$$] = $goog$events$pools$getObject$$());
      $listenerObj_map$$ = $listenerObj_map$$[$type$$33$$];
      if(!($capture$$1_opt_capt$$2$$ in $listenerObj_map$$)) {
        $listenerObj_map$$[$capture$$1_opt_capt$$2$$] = $goog$events$pools$getObject$$();
        $listenerObj_map$$.$count_$++
      }
      $listenerObj_map$$ = $listenerObj_map$$[$capture$$1_opt_capt$$2$$];
      var $srcUid$$ = $goog$getUid$$($src$$6$$), $listenerArray$$;
      $listenerObj_map$$.$remaining_$++;
      if($listenerObj_map$$[$srcUid$$]) {
        $listenerArray$$ = $listenerObj_map$$[$srcUid$$];
        for($i$$55_proxy$$1$$ = 0;$i$$55_proxy$$1$$ < $listenerArray$$.length;$i$$55_proxy$$1$$++) {
          $listenerObj_map$$ = $listenerArray$$[$i$$55_proxy$$1$$];
          if($listenerObj_map$$.$listener$ == $key$$37_listener$$21$$ && $listenerObj_map$$.$handler$ == $opt_handler$$1$$) {
            if($listenerObj_map$$.$removed$) {
              break
            }
            return $listenerArray$$[$i$$55_proxy$$1$$].key
          }
        }
      }else {
        $listenerArray$$ = $listenerObj_map$$[$srcUid$$] = $goog$events$pools$getArray$$();
        $listenerObj_map$$.$count_$++
      }
      $i$$55_proxy$$1$$ = $goog$events$pools$getProxy$$();
      $i$$55_proxy$$1$$.src = $src$$6$$;
      $listenerObj_map$$ = $goog$events$pools$getListener$$();
      $listenerObj_map$$.$init$($key$$37_listener$$21$$, $i$$55_proxy$$1$$, $src$$6$$, $type$$33$$, $capture$$1_opt_capt$$2$$, $opt_handler$$1$$);
      $key$$37_listener$$21$$ = $listenerObj_map$$.key;
      $i$$55_proxy$$1$$.key = $key$$37_listener$$21$$;
      $listenerArray$$.push($listenerObj_map$$);
      $goog$events$listeners_$$[$key$$37_listener$$21$$] = $listenerObj_map$$;
      $goog$events$sources_$$[$srcUid$$] || ($goog$events$sources_$$[$srcUid$$] = $goog$events$pools$getArray$$());
      $goog$events$sources_$$[$srcUid$$].push($listenerObj_map$$);
      if($src$$6$$.addEventListener) {
        if($src$$6$$ == $goog$global$$ || !$src$$6$$.$customEvent_$) {
          $src$$6$$.addEventListener($type$$33$$, $i$$55_proxy$$1$$, $capture$$1_opt_capt$$2$$)
        }
      }else {
        $src$$6$$.attachEvent($goog$events$getOnString_$$($type$$33$$), $i$$55_proxy$$1$$)
      }
      return $key$$37_listener$$21$$
    }
  }else {
    throw Error("Invalid event type");
  }
}
function $goog$events$unlisten$$($listenerArray$$1_src$$9$$, $type$$35$$, $listener$$24$$, $capture$$2_opt_capt$$5$$, $opt_handler$$4$$) {
  if($goog$isArray$$($type$$35$$)) {
    for(var $i$$57$$ = 0;$i$$57$$ < $type$$35$$.length;$i$$57$$++) {
      $goog$events$unlisten$$($listenerArray$$1_src$$9$$, $type$$35$$[$i$$57$$], $listener$$24$$, $capture$$2_opt_capt$$5$$, $opt_handler$$4$$)
    }
    return null
  }
  $capture$$2_opt_capt$$5$$ = !!$capture$$2_opt_capt$$5$$;
  $listenerArray$$1_src$$9$$ = $goog$events$getListeners_$$($listenerArray$$1_src$$9$$, $type$$35$$, $capture$$2_opt_capt$$5$$);
  if(!$listenerArray$$1_src$$9$$) {
    return false
  }
  for($i$$57$$ = 0;$i$$57$$ < $listenerArray$$1_src$$9$$.length;$i$$57$$++) {
    if($listenerArray$$1_src$$9$$[$i$$57$$].$listener$ == $listener$$24$$ && $listenerArray$$1_src$$9$$[$i$$57$$].capture == $capture$$2_opt_capt$$5$$ && $listenerArray$$1_src$$9$$[$i$$57$$].$handler$ == $opt_handler$$4$$) {
      return $goog$events$unlistenByKey$$($listenerArray$$1_src$$9$$[$i$$57$$].key)
    }
  }
  return false
}
function $goog$events$unlistenByKey$$($key$$39$$) {
  if(!$goog$events$listeners_$$[$key$$39$$]) {
    return false
  }
  var $listener$$25$$ = $goog$events$listeners_$$[$key$$39$$];
  if($listener$$25$$.$removed$) {
    return false
  }
  var $src$$10_srcUid$$1$$ = $listener$$25$$.src, $type$$36$$ = $listener$$25$$.type, $listenerArray$$2_proxy$$2$$ = $listener$$25$$.$proxy$, $capture$$3$$ = $listener$$25$$.capture;
  if($src$$10_srcUid$$1$$.removeEventListener) {
    if($src$$10_srcUid$$1$$ == $goog$global$$ || !$src$$10_srcUid$$1$$.$customEvent_$) {
      $src$$10_srcUid$$1$$.removeEventListener($type$$36$$, $listenerArray$$2_proxy$$2$$, $capture$$3$$)
    }
  }else {
    $src$$10_srcUid$$1$$.detachEvent && $src$$10_srcUid$$1$$.detachEvent($goog$events$getOnString_$$($type$$36$$), $listenerArray$$2_proxy$$2$$)
  }
  $src$$10_srcUid$$1$$ = $goog$getUid$$($src$$10_srcUid$$1$$);
  $listenerArray$$2_proxy$$2$$ = $goog$events$listenerTree_$$[$type$$36$$][$capture$$3$$][$src$$10_srcUid$$1$$];
  if($goog$events$sources_$$[$src$$10_srcUid$$1$$]) {
    var $sourcesArray$$ = $goog$events$sources_$$[$src$$10_srcUid$$1$$];
    $goog$array$remove$$($sourcesArray$$, $listener$$25$$);
    $sourcesArray$$.length == 0 && delete $goog$events$sources_$$[$src$$10_srcUid$$1$$]
  }
  $listener$$25$$.$removed$ = true;
  $listenerArray$$2_proxy$$2$$.$needsCleanup_$ = true;
  $goog$events$cleanUp_$$($type$$36$$, $capture$$3$$, $src$$10_srcUid$$1$$, $listenerArray$$2_proxy$$2$$);
  delete $goog$events$listeners_$$[$key$$39$$];
  return true
}
function $goog$events$cleanUp_$$($type$$37$$, $capture$$4$$, $srcUid$$2$$, $listenerArray$$3$$) {
  if(!$listenerArray$$3$$.$locked_$) {
    if($listenerArray$$3$$.$needsCleanup_$) {
      for(var $oldIndex$$ = 0, $newIndex$$ = 0;$oldIndex$$ < $listenerArray$$3$$.length;$oldIndex$$++) {
        if($listenerArray$$3$$[$oldIndex$$].$removed$) {
          var $proxy$$3$$ = $listenerArray$$3$$[$oldIndex$$].$proxy$;
          $proxy$$3$$.src = null;
          $goog$events$pools$releaseProxy$$($proxy$$3$$);
          $goog$events$pools$releaseListener$$($listenerArray$$3$$[$oldIndex$$])
        }else {
          if($oldIndex$$ != $newIndex$$) {
            $listenerArray$$3$$[$newIndex$$] = $listenerArray$$3$$[$oldIndex$$]
          }
          $newIndex$$++
        }
      }
      $listenerArray$$3$$.length = $newIndex$$;
      $listenerArray$$3$$.$needsCleanup_$ = false;
      if($newIndex$$ == 0) {
        $goog$events$pools$releaseArray$$($listenerArray$$3$$);
        delete $goog$events$listenerTree_$$[$type$$37$$][$capture$$4$$][$srcUid$$2$$];
        $goog$events$listenerTree_$$[$type$$37$$][$capture$$4$$].$count_$--;
        if($goog$events$listenerTree_$$[$type$$37$$][$capture$$4$$].$count_$ == 0) {
          $goog$events$pools$releaseObject$$($goog$events$listenerTree_$$[$type$$37$$][$capture$$4$$]);
          delete $goog$events$listenerTree_$$[$type$$37$$][$capture$$4$$];
          $goog$events$listenerTree_$$[$type$$37$$].$count_$--
        }
        if($goog$events$listenerTree_$$[$type$$37$$].$count_$ == 0) {
          $goog$events$pools$releaseObject$$($goog$events$listenerTree_$$[$type$$37$$]);
          delete $goog$events$listenerTree_$$[$type$$37$$]
        }
      }
    }
  }
}
function $goog$events$removeAll$$($opt_obj$$25_sourcesArray$$1_srcUid$$3$$, $opt_type$$3$$, $opt_capt$$7$$) {
  var $count$$5$$ = 0, $i$$58_noObj$$ = $opt_obj$$25_sourcesArray$$1_srcUid$$3$$ == null, $noType$$ = $opt_type$$3$$ == null, $noCapt$$ = $opt_capt$$7$$ == null;
  $opt_capt$$7$$ = !!$opt_capt$$7$$;
  if($i$$58_noObj$$) {
    $goog$object$forEach$$($goog$events$sources_$$, function($listeners$$) {
      for(var $i$$59$$ = $listeners$$.length - 1;$i$$59$$ >= 0;$i$$59$$--) {
        var $listener$$28$$ = $listeners$$[$i$$59$$];
        if(($noType$$ || $opt_type$$3$$ == $listener$$28$$.type) && ($noCapt$$ || $opt_capt$$7$$ == $listener$$28$$.capture)) {
          $goog$events$unlistenByKey$$($listener$$28$$.key);
          $count$$5$$++
        }
      }
    })
  }else {
    $opt_obj$$25_sourcesArray$$1_srcUid$$3$$ = $goog$getUid$$($opt_obj$$25_sourcesArray$$1_srcUid$$3$$);
    if($goog$events$sources_$$[$opt_obj$$25_sourcesArray$$1_srcUid$$3$$]) {
      $opt_obj$$25_sourcesArray$$1_srcUid$$3$$ = $goog$events$sources_$$[$opt_obj$$25_sourcesArray$$1_srcUid$$3$$];
      for($i$$58_noObj$$ = $opt_obj$$25_sourcesArray$$1_srcUid$$3$$.length - 1;$i$$58_noObj$$ >= 0;$i$$58_noObj$$--) {
        var $listener$$27$$ = $opt_obj$$25_sourcesArray$$1_srcUid$$3$$[$i$$58_noObj$$];
        if(($noType$$ || $opt_type$$3$$ == $listener$$27$$.type) && ($noCapt$$ || $opt_capt$$7$$ == $listener$$27$$.capture)) {
          $goog$events$unlistenByKey$$($listener$$27$$.key);
          $count$$5$$++
        }
      }
    }
  }
  return $count$$5$$
}
function $goog$events$getListeners_$$($obj$$52_objUid$$, $type$$39$$, $capture$$6$$) {
  var $map$$1$$ = $goog$events$listenerTree_$$;
  if($type$$39$$ in $map$$1$$) {
    $map$$1$$ = $map$$1$$[$type$$39$$];
    if($capture$$6$$ in $map$$1$$) {
      $map$$1$$ = $map$$1$$[$capture$$6$$];
      $obj$$52_objUid$$ = $goog$getUid$$($obj$$52_objUid$$);
      if($map$$1$$[$obj$$52_objUid$$]) {
        return $map$$1$$[$obj$$52_objUid$$]
      }
    }
  }
  return null
}
function $goog$events$getOnString_$$($type$$41$$) {
  if($type$$41$$ in $goog$events$onStringMap_$$) {
    return $goog$events$onStringMap_$$[$type$$41$$]
  }
  return $goog$events$onStringMap_$$[$type$$41$$] = "on" + $type$$41$$
}
function $goog$events$fireListeners_$$($listenerArray$$5_map$$4$$, $obj$$55_objUid$$2$$, $type$$43$$, $capture$$9$$, $eventObject$$3$$) {
  var $retval$$ = 1;
  $obj$$55_objUid$$2$$ = $goog$getUid$$($obj$$55_objUid$$2$$);
  if($listenerArray$$5_map$$4$$[$obj$$55_objUid$$2$$]) {
    $listenerArray$$5_map$$4$$.$remaining_$--;
    $listenerArray$$5_map$$4$$ = $listenerArray$$5_map$$4$$[$obj$$55_objUid$$2$$];
    if($listenerArray$$5_map$$4$$.$locked_$) {
      $listenerArray$$5_map$$4$$.$locked_$++
    }else {
      $listenerArray$$5_map$$4$$.$locked_$ = 1
    }
    try {
      for(var $length$$5$$ = $listenerArray$$5_map$$4$$.length, $i$$61$$ = 0;$i$$61$$ < $length$$5$$;$i$$61$$++) {
        var $listener$$31$$ = $listenerArray$$5_map$$4$$[$i$$61$$];
        if($listener$$31$$ && !$listener$$31$$.$removed$) {
          $retval$$ &= $goog$events$fireListener$$($listener$$31$$, $eventObject$$3$$) !== false
        }
      }
    }finally {
      $listenerArray$$5_map$$4$$.$locked_$--;
      $goog$events$cleanUp_$$($type$$43$$, $capture$$9$$, $obj$$55_objUid$$2$$, $listenerArray$$5_map$$4$$)
    }
  }
  return Boolean($retval$$)
}
function $goog$events$fireListener$$($listener$$32$$, $eventObject$$4$$) {
  var $rv$$14$$ = $listener$$32$$.handleEvent($eventObject$$4$$);
  $listener$$32$$.$callOnce$ && $goog$events$unlistenByKey$$($listener$$32$$.key);
  return $rv$$14$$
}
$goog$events$pools$setProxyCallbackFunction$$(function($key$$41$$, $opt_evt$$) {
  if(!$goog$events$listeners_$$[$key$$41$$]) {
    return true
  }
  var $listener$$33$$ = $goog$events$listeners_$$[$key$$41$$], $be$$1_type$$45$$ = $listener$$33$$.type, $map$$6$$ = $goog$events$listenerTree_$$;
  if(!($be$$1_type$$45$$ in $map$$6$$)) {
    return true
  }
  $map$$6$$ = $map$$6$$[$be$$1_type$$45$$];
  var $ieEvent_part$$inline_138_retval$$1$$, $targetsMap$$1$$;
  if($goog$events$requiresSyntheticEventPropagation_$$ === undefined) {
    $goog$events$requiresSyntheticEventPropagation_$$ = $goog$userAgent$IE$$ && !$goog$global$$.addEventListener
  }
  if($goog$events$requiresSyntheticEventPropagation_$$) {
    var $JSCompiler_temp$$8_hasCapture$$2_parts$$inline_136$$;
    if(!($JSCompiler_temp$$8_hasCapture$$2_parts$$inline_136$$ = $opt_evt$$)) {
      a: {
        $JSCompiler_temp$$8_hasCapture$$2_parts$$inline_136$$ = "window.event".split(".");
        for(var $cur$$inline_137_hasBubble$$1$$ = $goog$global$$;$ieEvent_part$$inline_138_retval$$1$$ = $JSCompiler_temp$$8_hasCapture$$2_parts$$inline_136$$.shift();) {
          if($cur$$inline_137_hasBubble$$1$$[$ieEvent_part$$inline_138_retval$$1$$]) {
            $cur$$inline_137_hasBubble$$1$$ = $cur$$inline_137_hasBubble$$1$$[$ieEvent_part$$inline_138_retval$$1$$]
          }else {
            $JSCompiler_temp$$8_hasCapture$$2_parts$$inline_136$$ = null;
            break a
          }
        }
        $JSCompiler_temp$$8_hasCapture$$2_parts$$inline_136$$ = $cur$$inline_137_hasBubble$$1$$
      }
    }
    $ieEvent_part$$inline_138_retval$$1$$ = $JSCompiler_temp$$8_hasCapture$$2_parts$$inline_136$$;
    $JSCompiler_temp$$8_hasCapture$$2_parts$$inline_136$$ = true in $map$$6$$;
    $cur$$inline_137_hasBubble$$1$$ = false in $map$$6$$;
    if($JSCompiler_temp$$8_hasCapture$$2_parts$$inline_136$$) {
      if($ieEvent_part$$inline_138_retval$$1$$.keyCode < 0 || $ieEvent_part$$inline_138_retval$$1$$.returnValue != undefined) {
        return true
      }
      a: {
        var $evt$$10_useReturnValue$$inline_143$$ = false;
        if($ieEvent_part$$inline_138_retval$$1$$.keyCode == 0) {
          try {
            $ieEvent_part$$inline_138_retval$$1$$.keyCode = -1;
            break a
          }catch($ex$$inline_144$$) {
            $evt$$10_useReturnValue$$inline_143$$ = true
          }
        }
        if($evt$$10_useReturnValue$$inline_143$$ || $ieEvent_part$$inline_138_retval$$1$$.returnValue == undefined) {
          $ieEvent_part$$inline_138_retval$$1$$.returnValue = true
        }
      }
    }
    $evt$$10_useReturnValue$$inline_143$$ = $goog$events$pools$getEvent$$();
    $evt$$10_useReturnValue$$inline_143$$.$init$($ieEvent_part$$inline_138_retval$$1$$, this);
    $ieEvent_part$$inline_138_retval$$1$$ = true;
    try {
      if($JSCompiler_temp$$8_hasCapture$$2_parts$$inline_136$$) {
        for(var $ancestors$$2$$ = $goog$events$pools$getArray$$(), $parent$$13$$ = $evt$$10_useReturnValue$$inline_143$$.currentTarget;$parent$$13$$;$parent$$13$$ = $parent$$13$$.parentNode) {
          $ancestors$$2$$.push($parent$$13$$)
        }
        $targetsMap$$1$$ = $map$$6$$[true];
        $targetsMap$$1$$.$remaining_$ = $targetsMap$$1$$.$count_$;
        for(var $i$$63$$ = $ancestors$$2$$.length - 1;!$evt$$10_useReturnValue$$inline_143$$.$propagationStopped_$ && $i$$63$$ >= 0 && $targetsMap$$1$$.$remaining_$;$i$$63$$--) {
          $evt$$10_useReturnValue$$inline_143$$.currentTarget = $ancestors$$2$$[$i$$63$$];
          $ieEvent_part$$inline_138_retval$$1$$ &= $goog$events$fireListeners_$$($targetsMap$$1$$, $ancestors$$2$$[$i$$63$$], $be$$1_type$$45$$, true, $evt$$10_useReturnValue$$inline_143$$)
        }
        if($cur$$inline_137_hasBubble$$1$$) {
          $targetsMap$$1$$ = $map$$6$$[false];
          $targetsMap$$1$$.$remaining_$ = $targetsMap$$1$$.$count_$;
          for($i$$63$$ = 0;!$evt$$10_useReturnValue$$inline_143$$.$propagationStopped_$ && $i$$63$$ < $ancestors$$2$$.length && $targetsMap$$1$$.$remaining_$;$i$$63$$++) {
            $evt$$10_useReturnValue$$inline_143$$.currentTarget = $ancestors$$2$$[$i$$63$$];
            $ieEvent_part$$inline_138_retval$$1$$ &= $goog$events$fireListeners_$$($targetsMap$$1$$, $ancestors$$2$$[$i$$63$$], $be$$1_type$$45$$, false, $evt$$10_useReturnValue$$inline_143$$)
          }
        }
      }else {
        $ieEvent_part$$inline_138_retval$$1$$ = $goog$events$fireListener$$($listener$$33$$, $evt$$10_useReturnValue$$inline_143$$)
      }
    }finally {
      if($ancestors$$2$$) {
        $ancestors$$2$$.length = 0;
        $goog$events$pools$releaseArray$$($ancestors$$2$$)
      }
      $evt$$10_useReturnValue$$inline_143$$.$dispose$();
      $goog$events$pools$releaseEvent$$($evt$$10_useReturnValue$$inline_143$$)
    }
    return $ieEvent_part$$inline_138_retval$$1$$
  }
  $be$$1_type$$45$$ = new $goog$events$BrowserEvent$$($opt_evt$$, this);
  try {
    $ieEvent_part$$inline_138_retval$$1$$ = $goog$events$fireListener$$($listener$$33$$, $be$$1_type$$45$$)
  }finally {
    $be$$1_type$$45$$.$dispose$()
  }
  return $ieEvent_part$$inline_138_retval$$1$$
});
// Input 32
function $goog$events$EventHandler$$($opt_handler$$7$$) {
  this.$handler_$ = $opt_handler$$7$$
}
$goog$inherits$$($goog$events$EventHandler$$, $goog$Disposable$$);
var $goog$events$EventHandler$keyPool_$$ = new $goog$structs$SimplePool$$(0, 100);
$goog$events$EventHandler$$.prototype.$listen$ = function $$goog$events$EventHandler$$$$$listen$$($key$$inline_149_src$$14$$, $type$$46$$, $opt_fn$$, $opt_capture$$1$$, $opt_handler$$8$$) {
  if($goog$isArray$$($type$$46$$)) {
    for(var $i$$64$$ = 0;$i$$64$$ < $type$$46$$.length;$i$$64$$++) {
      this.$listen$($key$$inline_149_src$$14$$, $type$$46$$[$i$$64$$], $opt_fn$$, $opt_capture$$1$$, $opt_handler$$8$$)
    }
  }else {
    $key$$inline_149_src$$14$$ = $goog$events$listen$$($key$$inline_149_src$$14$$, $type$$46$$, $opt_fn$$ || this, $opt_capture$$1$$ || false, $opt_handler$$8$$ || this.$handler_$ || this);
    if(this.$keys_$) {
      this.$keys_$[$key$$inline_149_src$$14$$] = true
    }else {
      if(this.$key_$) {
        this.$keys_$ = $JSCompiler_StaticMethods_getObject$$($goog$events$EventHandler$keyPool_$$);
        this.$keys_$[this.$key_$] = true;
        this.$key_$ = null;
        this.$keys_$[$key$$inline_149_src$$14$$] = true
      }else {
        this.$key_$ = $key$$inline_149_src$$14$$
      }
    }
  }
  return this
};
$goog$events$EventHandler$$.prototype.$unlisten$ = function $$goog$events$EventHandler$$$$$unlisten$$($key$$45_listener$$35_listenerArray$$inline_165_src$$17$$, $i$$inline_166_type$$48$$, $listener$$inline_161_opt_fn$$2$$, $capture$$inline_164_opt_capture$$3$$, $opt_handler$$11_opt_handler$$inline_163$$) {
  if(this.$key_$ || this.$keys_$) {
    if($goog$isArray$$($i$$inline_166_type$$48$$)) {
      for(var $i$$66$$ = 0;$i$$66$$ < $i$$inline_166_type$$48$$.length;$i$$66$$++) {
        this.$unlisten$($key$$45_listener$$35_listenerArray$$inline_165_src$$17$$, $i$$inline_166_type$$48$$[$i$$66$$], $listener$$inline_161_opt_fn$$2$$, $capture$$inline_164_opt_capture$$3$$, $opt_handler$$11_opt_handler$$inline_163$$)
      }
    }else {
      a: {
        $listener$$inline_161_opt_fn$$2$$ = $listener$$inline_161_opt_fn$$2$$ || this;
        $opt_handler$$11_opt_handler$$inline_163$$ = $opt_handler$$11_opt_handler$$inline_163$$ || this.$handler_$ || this;
        $capture$$inline_164_opt_capture$$3$$ = !!($capture$$inline_164_opt_capture$$3$$ || false);
        if($key$$45_listener$$35_listenerArray$$inline_165_src$$17$$ = $goog$events$getListeners_$$($key$$45_listener$$35_listenerArray$$inline_165_src$$17$$, $i$$inline_166_type$$48$$, $capture$$inline_164_opt_capture$$3$$)) {
          for($i$$inline_166_type$$48$$ = 0;$i$$inline_166_type$$48$$ < $key$$45_listener$$35_listenerArray$$inline_165_src$$17$$.length;$i$$inline_166_type$$48$$++) {
            if($key$$45_listener$$35_listenerArray$$inline_165_src$$17$$[$i$$inline_166_type$$48$$].$listener$ == $listener$$inline_161_opt_fn$$2$$ && $key$$45_listener$$35_listenerArray$$inline_165_src$$17$$[$i$$inline_166_type$$48$$].capture == $capture$$inline_164_opt_capture$$3$$ && $key$$45_listener$$35_listenerArray$$inline_165_src$$17$$[$i$$inline_166_type$$48$$].$handler$ == $opt_handler$$11_opt_handler$$inline_163$$) {
              $key$$45_listener$$35_listenerArray$$inline_165_src$$17$$ = $key$$45_listener$$35_listenerArray$$inline_165_src$$17$$[$i$$inline_166_type$$48$$];
              break a
            }
          }
        }
        $key$$45_listener$$35_listenerArray$$inline_165_src$$17$$ = null
      }
      if($key$$45_listener$$35_listenerArray$$inline_165_src$$17$$) {
        $key$$45_listener$$35_listenerArray$$inline_165_src$$17$$ = $key$$45_listener$$35_listenerArray$$inline_165_src$$17$$.key;
        $goog$events$unlistenByKey$$($key$$45_listener$$35_listenerArray$$inline_165_src$$17$$);
        if(this.$keys_$) {
          $goog$object$remove$$(this.$keys_$, $key$$45_listener$$35_listenerArray$$inline_165_src$$17$$)
        }else {
          if(this.$key_$ == $key$$45_listener$$35_listenerArray$$inline_165_src$$17$$) {
            this.$key_$ = null
          }
        }
      }
    }
  }
  return this
};
function $JSCompiler_StaticMethods_removeAll$$($JSCompiler_StaticMethods_removeAll$self$$) {
  if($JSCompiler_StaticMethods_removeAll$self$$.$keys_$) {
    for(var $key$$46$$ in $JSCompiler_StaticMethods_removeAll$self$$.$keys_$) {
      $goog$events$unlistenByKey$$($key$$46$$);
      delete $JSCompiler_StaticMethods_removeAll$self$$.$keys_$[$key$$46$$]
    }
    $JSCompiler_StaticMethods_releaseObject$$($goog$events$EventHandler$keyPool_$$, $JSCompiler_StaticMethods_removeAll$self$$.$keys_$);
    $JSCompiler_StaticMethods_removeAll$self$$.$keys_$ = null
  }else {
    $JSCompiler_StaticMethods_removeAll$self$$.$key_$ && $goog$events$unlistenByKey$$($JSCompiler_StaticMethods_removeAll$self$$.$key_$)
  }
}
$goog$events$EventHandler$$.prototype.$disposeInternal$ = function $$goog$events$EventHandler$$$$$disposeInternal$$() {
  $goog$events$EventHandler$$.$superClass_$.$disposeInternal$.call(this);
  $JSCompiler_StaticMethods_removeAll$$(this)
};
$goog$events$EventHandler$$.prototype.handleEvent = function $$goog$events$EventHandler$$$$handleEvent$() {
  throw Error("EventHandler.handleEvent not implemented");
};
// Input 33
function $goog$events$EventTarget$$() {
}
$goog$inherits$$($goog$events$EventTarget$$, $goog$Disposable$$);
$a$$ = $goog$events$EventTarget$$.prototype;
$a$$.$customEvent_$ = true;
$a$$.$parentEventTarget_$ = null;
$a$$.$setParentEventTarget$ = function $$a$$$$setParentEventTarget$$($parent$$14$$) {
  this.$parentEventTarget_$ = $parent$$14$$
};
$a$$.addEventListener = function $$a$$$addEventListener$($type$$49$$, $handler$$3$$, $opt_capture$$4$$, $opt_handlerScope$$) {
  $goog$events$listen$$(this, $type$$49$$, $handler$$3$$, $opt_capture$$4$$, $opt_handlerScope$$)
};
$a$$.removeEventListener = function $$a$$$removeEventListener$($type$$50$$, $handler$$4$$, $opt_capture$$5$$, $opt_handlerScope$$1$$) {
  $goog$events$unlisten$$(this, $type$$50$$, $handler$$4$$, $opt_capture$$5$$, $opt_handlerScope$$1$$)
};
$a$$.dispatchEvent = function $$a$$$dispatchEvent$($JSCompiler_inline_result$$168_e$$9_e$$inline_182$$) {
  $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$ = $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$;
  if($goog$isString$$($JSCompiler_inline_result$$168_e$$9_e$$inline_182$$)) {
    $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$ = new $goog$events$Event$$($JSCompiler_inline_result$$168_e$$9_e$$inline_182$$, this)
  }else {
    if($JSCompiler_inline_result$$168_e$$9_e$$inline_182$$ instanceof $goog$events$Event$$) {
      $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$.target = $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$.target || this
    }else {
      var $oldEvent$$inline_183_rv$$inline_184$$ = $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$;
      $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$ = new $goog$events$Event$$($JSCompiler_inline_result$$168_e$$9_e$$inline_182$$.type, this);
      $goog$object$extend$$($JSCompiler_inline_result$$168_e$$9_e$$inline_182$$, $oldEvent$$inline_183_rv$$inline_184$$)
    }
  }
  $oldEvent$$inline_183_rv$$inline_184$$ = 1;
  var $ancestors$$inline_185_current$$inline_192$$, $hasCapture$$inline_188_type$$inline_186$$ = $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$.type, $map$$inline_187$$ = $goog$events$listenerTree_$$;
  if($hasCapture$$inline_188_type$$inline_186$$ in $map$$inline_187$$) {
    $map$$inline_187$$ = $map$$inline_187$$[$hasCapture$$inline_188_type$$inline_186$$];
    $hasCapture$$inline_188_type$$inline_186$$ = true in $map$$inline_187$$;
    var $parent$$inline_190_targetsMap$$inline_189$$;
    if($hasCapture$$inline_188_type$$inline_186$$) {
      $ancestors$$inline_185_current$$inline_192$$ = [];
      for($parent$$inline_190_targetsMap$$inline_189$$ = this;$parent$$inline_190_targetsMap$$inline_189$$;$parent$$inline_190_targetsMap$$inline_189$$ = $parent$$inline_190_targetsMap$$inline_189$$.$parentEventTarget_$) {
        $ancestors$$inline_185_current$$inline_192$$.push($parent$$inline_190_targetsMap$$inline_189$$)
      }
      $parent$$inline_190_targetsMap$$inline_189$$ = $map$$inline_187$$[true];
      $parent$$inline_190_targetsMap$$inline_189$$.$remaining_$ = $parent$$inline_190_targetsMap$$inline_189$$.$count_$;
      for(var $i$$inline_191$$ = $ancestors$$inline_185_current$$inline_192$$.length - 1;!$JSCompiler_inline_result$$168_e$$9_e$$inline_182$$.$propagationStopped_$ && $i$$inline_191$$ >= 0 && $parent$$inline_190_targetsMap$$inline_189$$.$remaining_$;$i$$inline_191$$--) {
        $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$.currentTarget = $ancestors$$inline_185_current$$inline_192$$[$i$$inline_191$$];
        $oldEvent$$inline_183_rv$$inline_184$$ &= $goog$events$fireListeners_$$($parent$$inline_190_targetsMap$$inline_189$$, $ancestors$$inline_185_current$$inline_192$$[$i$$inline_191$$], $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$.type, true, $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$) && $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$.$returnValue_$ != false
      }
    }
    if(false in $map$$inline_187$$) {
      $parent$$inline_190_targetsMap$$inline_189$$ = $map$$inline_187$$[false];
      $parent$$inline_190_targetsMap$$inline_189$$.$remaining_$ = $parent$$inline_190_targetsMap$$inline_189$$.$count_$;
      if($hasCapture$$inline_188_type$$inline_186$$) {
        for($i$$inline_191$$ = 0;!$JSCompiler_inline_result$$168_e$$9_e$$inline_182$$.$propagationStopped_$ && $i$$inline_191$$ < $ancestors$$inline_185_current$$inline_192$$.length && $parent$$inline_190_targetsMap$$inline_189$$.$remaining_$;$i$$inline_191$$++) {
          $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$.currentTarget = $ancestors$$inline_185_current$$inline_192$$[$i$$inline_191$$];
          $oldEvent$$inline_183_rv$$inline_184$$ &= $goog$events$fireListeners_$$($parent$$inline_190_targetsMap$$inline_189$$, $ancestors$$inline_185_current$$inline_192$$[$i$$inline_191$$], $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$.type, false, $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$) && $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$.$returnValue_$ != false
        }
      }else {
        for($ancestors$$inline_185_current$$inline_192$$ = this;!$JSCompiler_inline_result$$168_e$$9_e$$inline_182$$.$propagationStopped_$ && $ancestors$$inline_185_current$$inline_192$$ && $parent$$inline_190_targetsMap$$inline_189$$.$remaining_$;$ancestors$$inline_185_current$$inline_192$$ = $ancestors$$inline_185_current$$inline_192$$.$parentEventTarget_$) {
          $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$.currentTarget = $ancestors$$inline_185_current$$inline_192$$;
          $oldEvent$$inline_183_rv$$inline_184$$ &= $goog$events$fireListeners_$$($parent$$inline_190_targetsMap$$inline_189$$, $ancestors$$inline_185_current$$inline_192$$, $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$.type, false, $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$) && $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$.$returnValue_$ != false
        }
      }
    }
    $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$ = Boolean($oldEvent$$inline_183_rv$$inline_184$$)
  }else {
    $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$ = true
  }
  return $JSCompiler_inline_result$$168_e$$9_e$$inline_182$$
};
$a$$.$disposeInternal$ = function $$a$$$$disposeInternal$$() {
  $goog$events$EventTarget$$.$superClass_$.$disposeInternal$.call(this);
  $goog$events$removeAll$$(this);
  this.$parentEventTarget_$ = null
};
// Input 34
function $goog$events$KeyHandler$$($opt_element$$1$$) {
  $opt_element$$1$$ && $JSCompiler_StaticMethods_attach$$(this, $opt_element$$1$$)
}
$goog$inherits$$($goog$events$KeyHandler$$, $goog$events$EventTarget$$);
$a$$ = $goog$events$KeyHandler$$.prototype;
$a$$.$element_$ = null;
$a$$.$keyPressKey_$ = null;
$a$$.$keyDownKey_$ = null;
$a$$.$keyUpKey_$ = null;
$a$$.$lastKey_$ = -1;
$a$$.$keyCode_$ = -1;
var $goog$events$KeyHandler$safariKey_$$ = {"3":13, "12":144, "63232":38, "63233":40, "63234":37, "63235":39, "63236":112, "63237":113, "63238":114, "63239":115, "63240":116, "63241":117, "63242":118, "63243":119, "63244":120, "63245":121, "63246":122, "63247":123, "63248":44, "63272":46, "63273":36, "63275":35, "63276":33, "63277":34, "63289":144, "63302":45}, $goog$events$KeyHandler$keyIdentifier_$$ = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, 
F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, $goog$events$KeyHandler$mozKeyCodeToKeyCodeMap_$$ = {61:187, 59:186}, $goog$events$KeyHandler$USES_KEYDOWN_$$ = $goog$userAgent$IE$$ || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("525");
$a$$ = $goog$events$KeyHandler$$.prototype;
$a$$.$handleKeyDown_$ = function $$a$$$$handleKeyDown_$$($e$$10$$) {
  if($goog$events$KeyHandler$USES_KEYDOWN_$$ && !$goog$events$KeyCodes$firesKeyPressEvent$$($e$$10$$.keyCode, this.$lastKey_$, $e$$10$$.shiftKey, $e$$10$$.ctrlKey, $e$$10$$.altKey)) {
    this.handleEvent($e$$10$$)
  }else {
    this.$keyCode_$ = $goog$userAgent$GECKO$$ && $e$$10$$.keyCode in $goog$events$KeyHandler$mozKeyCodeToKeyCodeMap_$$ ? $goog$events$KeyHandler$mozKeyCodeToKeyCodeMap_$$[$e$$10$$.keyCode] : $e$$10$$.keyCode
  }
};
$a$$.$handleKeyup_$ = function $$a$$$$handleKeyup_$$() {
  this.$keyCode_$ = this.$lastKey_$ = -1
};
$a$$.handleEvent = function $$a$$$handleEvent$($e$$12_repeat$$) {
  var $be$$2_event$$3$$ = $e$$12_repeat$$.$event_$, $keyCode$$2$$, $charCode$$;
  if($goog$userAgent$IE$$ && $e$$12_repeat$$.type == "keypress") {
    $keyCode$$2$$ = this.$keyCode_$;
    $charCode$$ = $keyCode$$2$$ != 13 && $keyCode$$2$$ != 27 ? $be$$2_event$$3$$.keyCode : 0
  }else {
    if($goog$userAgent$WEBKIT$$ && $e$$12_repeat$$.type == "keypress") {
      $keyCode$$2$$ = this.$keyCode_$;
      $charCode$$ = $be$$2_event$$3$$.charCode >= 0 && $be$$2_event$$3$$.charCode < 63232 && $goog$events$KeyCodes$isCharacterKey$$($keyCode$$2$$) ? $be$$2_event$$3$$.charCode : 0
    }else {
      if($goog$userAgent$OPERA$$) {
        $keyCode$$2$$ = this.$keyCode_$;
        $charCode$$ = $goog$events$KeyCodes$isCharacterKey$$($keyCode$$2$$) ? $be$$2_event$$3$$.keyCode : 0
      }else {
        $keyCode$$2$$ = $be$$2_event$$3$$.keyCode || this.$keyCode_$;
        $charCode$$ = $be$$2_event$$3$$.charCode || 0;
        if($goog$userAgent$detectedMac_$$ && $charCode$$ == 63 && !$keyCode$$2$$) {
          $keyCode$$2$$ = 191
        }
      }
    }
  }
  var $key$$47$$ = $keyCode$$2$$, $keyIdentifier$$ = $be$$2_event$$3$$.keyIdentifier;
  if($keyCode$$2$$) {
    if($keyCode$$2$$ >= 63232 && $keyCode$$2$$ in $goog$events$KeyHandler$safariKey_$$) {
      $key$$47$$ = $goog$events$KeyHandler$safariKey_$$[$keyCode$$2$$]
    }else {
      if($keyCode$$2$$ == 25 && $e$$12_repeat$$.shiftKey) {
        $key$$47$$ = 9
      }
    }
  }else {
    if($keyIdentifier$$ && $keyIdentifier$$ in $goog$events$KeyHandler$keyIdentifier_$$) {
      $key$$47$$ = $goog$events$KeyHandler$keyIdentifier_$$[$keyIdentifier$$]
    }
  }
  $e$$12_repeat$$ = $key$$47$$ == this.$lastKey_$;
  this.$lastKey_$ = $key$$47$$;
  $be$$2_event$$3$$ = new $goog$events$KeyEvent$$($key$$47$$, $charCode$$, $e$$12_repeat$$, $be$$2_event$$3$$);
  try {
    this.dispatchEvent($be$$2_event$$3$$)
  }finally {
    $be$$2_event$$3$$.$dispose$()
  }
};
$a$$.$getElement$ = $JSCompiler_get$$("$element_$");
function $JSCompiler_StaticMethods_attach$$($JSCompiler_StaticMethods_attach$self$$, $element$$33$$) {
  $JSCompiler_StaticMethods_attach$self$$.$keyUpKey_$ && $JSCompiler_StaticMethods_attach$self$$.detach();
  $JSCompiler_StaticMethods_attach$self$$.$element_$ = $element$$33$$;
  $JSCompiler_StaticMethods_attach$self$$.$keyPressKey_$ = $goog$events$listen$$($JSCompiler_StaticMethods_attach$self$$.$element_$, "keypress", $JSCompiler_StaticMethods_attach$self$$);
  $JSCompiler_StaticMethods_attach$self$$.$keyDownKey_$ = $goog$events$listen$$($JSCompiler_StaticMethods_attach$self$$.$element_$, "keydown", $JSCompiler_StaticMethods_attach$self$$.$handleKeyDown_$, false, $JSCompiler_StaticMethods_attach$self$$);
  $JSCompiler_StaticMethods_attach$self$$.$keyUpKey_$ = $goog$events$listen$$($JSCompiler_StaticMethods_attach$self$$.$element_$, "keyup", $JSCompiler_StaticMethods_attach$self$$.$handleKeyup_$, false, $JSCompiler_StaticMethods_attach$self$$)
}
$a$$.detach = function $$a$$$detach$() {
  if(this.$keyPressKey_$) {
    $goog$events$unlistenByKey$$(this.$keyPressKey_$);
    $goog$events$unlistenByKey$$(this.$keyDownKey_$);
    $goog$events$unlistenByKey$$(this.$keyUpKey_$);
    this.$keyUpKey_$ = this.$keyDownKey_$ = this.$keyPressKey_$ = null
  }
  this.$element_$ = null;
  this.$keyCode_$ = this.$lastKey_$ = -1
};
$a$$.$disposeInternal$ = function $$a$$$$disposeInternal$$() {
  $goog$events$KeyHandler$$.$superClass_$.$disposeInternal$.call(this);
  this.detach()
};
function $goog$events$KeyEvent$$($keyCode$$3$$, $charCode$$1$$, $repeat$$1$$, $browserEvent$$) {
  $browserEvent$$ && this.$init$($browserEvent$$, void 0);
  this.type = "key";
  this.keyCode = $keyCode$$3$$;
  this.charCode = $charCode$$1$$;
  this.repeat = $repeat$$1$$
}
$goog$inherits$$($goog$events$KeyEvent$$, $goog$events$BrowserEvent$$);
// Input 35
function $goog$style$getComputedStyle$$($element$$37$$, $style$$3$$) {
  var $doc$$21_styles$$ = $goog$dom$getOwnerDocument$$($element$$37$$);
  if($doc$$21_styles$$.defaultView && $doc$$21_styles$$.defaultView.getComputedStyle) {
    if($doc$$21_styles$$ = $doc$$21_styles$$.defaultView.getComputedStyle($element$$37$$, "")) {
      return $doc$$21_styles$$[$style$$3$$]
    }
  }
  return null
}
function $goog$style$getStyle_$$($element$$39$$, $style$$5$$) {
  return $goog$style$getComputedStyle$$($element$$39$$, $style$$5$$) || ($element$$39$$.currentStyle ? $element$$39$$.currentStyle[$style$$5$$] : null) || $element$$39$$.style[$style$$5$$]
}
function $goog$style$getBoundingClientRect_$$($doc$$23_el$$6$$) {
  var $rect$$4$$ = $doc$$23_el$$6$$.getBoundingClientRect();
  if($goog$userAgent$IE$$) {
    $doc$$23_el$$6$$ = $doc$$23_el$$6$$.ownerDocument;
    $rect$$4$$.left -= $doc$$23_el$$6$$.documentElement.clientLeft + $doc$$23_el$$6$$.body.clientLeft;
    $rect$$4$$.top -= $doc$$23_el$$6$$.documentElement.clientTop + $doc$$23_el$$6$$.body.clientTop
  }
  return $rect$$4$$
}
function $goog$style$getOffsetParent$$($element$$48_parent$$15$$) {
  if($goog$userAgent$IE$$) {
    return $element$$48_parent$$15$$.offsetParent
  }
  var $doc$$24$$ = $goog$dom$getOwnerDocument$$($element$$48_parent$$15$$), $positionStyle$$ = $goog$style$getStyle_$$($element$$48_parent$$15$$, "position"), $skipStatic$$ = $positionStyle$$ == "fixed" || $positionStyle$$ == "absolute";
  for($element$$48_parent$$15$$ = $element$$48_parent$$15$$.parentNode;$element$$48_parent$$15$$ && $element$$48_parent$$15$$ != $doc$$24$$;$element$$48_parent$$15$$ = $element$$48_parent$$15$$.parentNode) {
    $positionStyle$$ = $goog$style$getStyle_$$($element$$48_parent$$15$$, "position");
    $skipStatic$$ = $skipStatic$$ && $positionStyle$$ == "static" && $element$$48_parent$$15$$ != $doc$$24$$.documentElement && $element$$48_parent$$15$$ != $doc$$24$$.body;
    if(!$skipStatic$$ && ($element$$48_parent$$15$$.scrollWidth > $element$$48_parent$$15$$.clientWidth || $element$$48_parent$$15$$.scrollHeight > $element$$48_parent$$15$$.clientHeight || $positionStyle$$ == "fixed" || $positionStyle$$ == "absolute")) {
      return $element$$48_parent$$15$$
    }
  }
  return null
}
function $goog$style$getVisibleRectForElement$$($el$$7_element$$49_scrollHeight$$inline_1189$$) {
  var $visibleRect$$ = new $goog$math$Box$$(0, Infinity, Infinity, 0), $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$ = $goog$dom$getDomHelper$$($el$$7_element$$49_scrollHeight$$inline_1189$$), $body$$2_scrollX$$ = $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$.$document_$.body, $scrollEl_scrollY$$ = !$goog$userAgent$WEBKIT$$ && $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$.$document_$.compatMode == 
  "CSS1Compat" ? $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$.$document_$.documentElement : $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$.$document_$.body, $doc$$inline_1187_inContainer_innerHeight$$inline_1188$$;
  for($el$$7_element$$49_scrollHeight$$inline_1189$$ = $el$$7_element$$49_scrollHeight$$inline_1189$$;$el$$7_element$$49_scrollHeight$$inline_1189$$ = $goog$style$getOffsetParent$$($el$$7_element$$49_scrollHeight$$inline_1189$$);) {
    if((!$goog$userAgent$IE$$ || $el$$7_element$$49_scrollHeight$$inline_1189$$.clientWidth != 0) && (!$goog$userAgent$WEBKIT$$ || $el$$7_element$$49_scrollHeight$$inline_1189$$.clientHeight != 0 || $el$$7_element$$49_scrollHeight$$inline_1189$$ != $body$$2_scrollX$$) && ($el$$7_element$$49_scrollHeight$$inline_1189$$.scrollWidth != $el$$7_element$$49_scrollHeight$$inline_1189$$.clientWidth || $el$$7_element$$49_scrollHeight$$inline_1189$$.scrollHeight != $el$$7_element$$49_scrollHeight$$inline_1189$$.clientHeight) && 
    $goog$style$getStyle_$$($el$$7_element$$49_scrollHeight$$inline_1189$$, "overflow") != "visible") {
      var $pos$$1$$ = $goog$style$getPageOffset$$($el$$7_element$$49_scrollHeight$$inline_1189$$), $client_el$$inline_202$$;
      $client_el$$inline_202$$ = $el$$7_element$$49_scrollHeight$$inline_1189$$;
      if($goog$userAgent$GECKO$$ && !$goog$userAgent$isVersion$$("1.9")) {
        var $left$$inline_203$$ = parseFloat($goog$style$getComputedStyle$$($client_el$$inline_202$$, "borderLeftWidth"));
        if($goog$style$isRightToLeft$$($client_el$$inline_202$$)) {
          var $scrollbarWidth$$inline_204$$ = $client_el$$inline_202$$.offsetWidth - $client_el$$inline_202$$.clientWidth - $left$$inline_203$$ - parseFloat($goog$style$getComputedStyle$$($client_el$$inline_202$$, "borderRightWidth"));
          $left$$inline_203$$ += $scrollbarWidth$$inline_204$$
        }
        $client_el$$inline_202$$ = new $goog$math$Coordinate$$($left$$inline_203$$, parseFloat($goog$style$getComputedStyle$$($client_el$$inline_202$$, "borderTopWidth")))
      }else {
        $client_el$$inline_202$$ = new $goog$math$Coordinate$$($client_el$$inline_202$$.clientLeft, $client_el$$inline_202$$.clientTop)
      }
      $pos$$1$$.x += $client_el$$inline_202$$.x;
      $pos$$1$$.y += $client_el$$inline_202$$.y;
      $visibleRect$$.top = Math.max($visibleRect$$.top, $pos$$1$$.y);
      $visibleRect$$.right = Math.min($visibleRect$$.right, $pos$$1$$.x + $el$$7_element$$49_scrollHeight$$inline_1189$$.clientWidth);
      $visibleRect$$.bottom = Math.min($visibleRect$$.bottom, $pos$$1$$.y + $el$$7_element$$49_scrollHeight$$inline_1189$$.clientHeight);
      $visibleRect$$.left = Math.max($visibleRect$$.left, $pos$$1$$.x);
      $doc$$inline_1187_inContainer_innerHeight$$inline_1188$$ = $doc$$inline_1187_inContainer_innerHeight$$inline_1188$$ || $el$$7_element$$49_scrollHeight$$inline_1189$$ != $scrollEl_scrollY$$
    }
  }
  $body$$2_scrollX$$ = $scrollEl_scrollY$$.scrollLeft;
  $scrollEl_scrollY$$ = $scrollEl_scrollY$$.scrollTop;
  if($goog$userAgent$WEBKIT$$) {
    $visibleRect$$.left += $body$$2_scrollX$$;
    $visibleRect$$.top += $scrollEl_scrollY$$
  }else {
    $visibleRect$$.left = Math.max($visibleRect$$.left, $body$$2_scrollX$$);
    $visibleRect$$.top = Math.max($visibleRect$$.top, $scrollEl_scrollY$$)
  }
  if(!$doc$$inline_1187_inContainer_innerHeight$$inline_1188$$ || $goog$userAgent$WEBKIT$$) {
    $visibleRect$$.right += $body$$2_scrollX$$;
    $visibleRect$$.bottom += $scrollEl_scrollY$$
  }
  $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$ = $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$.$document_$.parentWindow || $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$.$document_$.defaultView || window;
  $doc$$inline_1187_inContainer_innerHeight$$inline_1188$$ = $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$.document;
  if($goog$userAgent$WEBKIT$$ && !$goog$userAgent$isVersion$$("500") && !$goog$userAgent$MOBILE$$) {
    if(typeof $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$.innerHeight == "undefined") {
      $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$ = window
    }
    $doc$$inline_1187_inContainer_innerHeight$$inline_1188$$ = $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$.innerHeight;
    $el$$7_element$$49_scrollHeight$$inline_1189$$ = $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$.document.documentElement.scrollHeight;
    if($dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$ == $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$.top) {
      if($el$$7_element$$49_scrollHeight$$inline_1189$$ < $doc$$inline_1187_inContainer_innerHeight$$inline_1188$$) {
        $doc$$inline_1187_inContainer_innerHeight$$inline_1188$$ -= 15
      }
    }
    $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$ = new $goog$math$Size$$($dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$.innerWidth, $doc$$inline_1187_inContainer_innerHeight$$inline_1188$$)
  }else {
    $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$ = $doc$$inline_1187_inContainer_innerHeight$$inline_1188$$.compatMode == "CSS1Compat";
    if($goog$userAgent$OPERA$$ && !$goog$userAgent$isVersion$$("9.50")) {
      $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$ = false
    }
    $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$ = $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$ ? $doc$$inline_1187_inContainer_innerHeight$$inline_1188$$.documentElement : $doc$$inline_1187_inContainer_innerHeight$$inline_1188$$.body;
    $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$ = new $goog$math$Size$$($dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$.clientWidth, $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$.clientHeight)
  }
  $visibleRect$$.right = Math.min($visibleRect$$.right, $body$$2_scrollX$$ + $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$.width);
  $visibleRect$$.bottom = Math.min($visibleRect$$.bottom, $scrollEl_scrollY$$ + $dom_el$$inline_1191_readsFromDocumentElement$$inline_1190_win$$inline_1186_winSize$$.height);
  return $visibleRect$$.top >= 0 && $visibleRect$$.left >= 0 && $visibleRect$$.bottom > $visibleRect$$.top && $visibleRect$$.right > $visibleRect$$.left ? $visibleRect$$ : null
}
function $goog$style$getPageOffset$$($el$$9_scrollCoord_vpBox$$) {
  var $box$$5_doc$$inline_209_parent$$16$$, $doc$$25$$ = $goog$dom$getOwnerDocument$$($el$$9_scrollCoord_vpBox$$), $positionStyle$$1$$ = $goog$style$getStyle_$$($el$$9_scrollCoord_vpBox$$, "position"), $BUGGY_GECKO_BOX_OBJECT$$ = $goog$userAgent$GECKO$$ && $doc$$25$$.getBoxObjectFor && !$el$$9_scrollCoord_vpBox$$.getBoundingClientRect && $positionStyle$$1$$ == "absolute" && ($box$$5_doc$$inline_209_parent$$16$$ = $doc$$25$$.getBoxObjectFor($el$$9_scrollCoord_vpBox$$)) && ($box$$5_doc$$inline_209_parent$$16$$.screenX < 
  0 || $box$$5_doc$$inline_209_parent$$16$$.screenY < 0), $pos$$2$$ = new $goog$math$Coordinate$$(0, 0), $JSCompiler_temp$$932_viewportElement$$;
  $box$$5_doc$$inline_209_parent$$16$$ = $doc$$25$$ ? $doc$$25$$.nodeType == 9 ? $doc$$25$$ : $goog$dom$getOwnerDocument$$($doc$$25$$) : document;
  if($JSCompiler_temp$$932_viewportElement$$ = $goog$userAgent$IE$$) {
    $JSCompiler_temp$$932_viewportElement$$ = $goog$dom$getDomHelper$$($box$$5_doc$$inline_209_parent$$16$$).$document_$.compatMode != "CSS1Compat"
  }
  $JSCompiler_temp$$932_viewportElement$$ = $JSCompiler_temp$$932_viewportElement$$ ? $box$$5_doc$$inline_209_parent$$16$$.body : $box$$5_doc$$inline_209_parent$$16$$.documentElement;
  if($el$$9_scrollCoord_vpBox$$ == $JSCompiler_temp$$932_viewportElement$$) {
    return $pos$$2$$
  }
  if($el$$9_scrollCoord_vpBox$$.getBoundingClientRect) {
    $box$$5_doc$$inline_209_parent$$16$$ = $goog$style$getBoundingClientRect_$$($el$$9_scrollCoord_vpBox$$);
    $el$$9_scrollCoord_vpBox$$ = $JSCompiler_StaticMethods_getDocumentScroll$$($goog$dom$getDomHelper$$($doc$$25$$));
    $pos$$2$$.x = $box$$5_doc$$inline_209_parent$$16$$.left + $el$$9_scrollCoord_vpBox$$.x;
    $pos$$2$$.y = $box$$5_doc$$inline_209_parent$$16$$.top + $el$$9_scrollCoord_vpBox$$.y
  }else {
    if($doc$$25$$.getBoxObjectFor && !$BUGGY_GECKO_BOX_OBJECT$$) {
      $box$$5_doc$$inline_209_parent$$16$$ = $doc$$25$$.getBoxObjectFor($el$$9_scrollCoord_vpBox$$);
      $el$$9_scrollCoord_vpBox$$ = $doc$$25$$.getBoxObjectFor($JSCompiler_temp$$932_viewportElement$$);
      $pos$$2$$.x = $box$$5_doc$$inline_209_parent$$16$$.screenX - $el$$9_scrollCoord_vpBox$$.screenX;
      $pos$$2$$.y = $box$$5_doc$$inline_209_parent$$16$$.screenY - $el$$9_scrollCoord_vpBox$$.screenY
    }else {
      $box$$5_doc$$inline_209_parent$$16$$ = $el$$9_scrollCoord_vpBox$$;
      do {
        $pos$$2$$.x += $box$$5_doc$$inline_209_parent$$16$$.offsetLeft;
        $pos$$2$$.y += $box$$5_doc$$inline_209_parent$$16$$.offsetTop;
        if($box$$5_doc$$inline_209_parent$$16$$ != $el$$9_scrollCoord_vpBox$$) {
          $pos$$2$$.x += $box$$5_doc$$inline_209_parent$$16$$.clientLeft || 0;
          $pos$$2$$.y += $box$$5_doc$$inline_209_parent$$16$$.clientTop || 0
        }
        if($goog$userAgent$WEBKIT$$ && $goog$style$getStyle_$$($box$$5_doc$$inline_209_parent$$16$$, "position") == "fixed") {
          $pos$$2$$.x += $doc$$25$$.body.scrollLeft;
          $pos$$2$$.y += $doc$$25$$.body.scrollTop;
          break
        }
        $box$$5_doc$$inline_209_parent$$16$$ = $box$$5_doc$$inline_209_parent$$16$$.offsetParent
      }while($box$$5_doc$$inline_209_parent$$16$$ && $box$$5_doc$$inline_209_parent$$16$$ != $el$$9_scrollCoord_vpBox$$);
      if($goog$userAgent$OPERA$$ || $goog$userAgent$WEBKIT$$ && $positionStyle$$1$$ == "absolute") {
        $pos$$2$$.y -= $doc$$25$$.body.offsetTop
      }
      for($box$$5_doc$$inline_209_parent$$16$$ = $el$$9_scrollCoord_vpBox$$;($box$$5_doc$$inline_209_parent$$16$$ = $goog$style$getOffsetParent$$($box$$5_doc$$inline_209_parent$$16$$)) && $box$$5_doc$$inline_209_parent$$16$$ != $doc$$25$$.body && $box$$5_doc$$inline_209_parent$$16$$ != $JSCompiler_temp$$932_viewportElement$$;) {
        $pos$$2$$.x -= $box$$5_doc$$inline_209_parent$$16$$.scrollLeft;
        if(!$goog$userAgent$OPERA$$ || $box$$5_doc$$inline_209_parent$$16$$.tagName != "TR") {
          $pos$$2$$.y -= $box$$5_doc$$inline_209_parent$$16$$.scrollTop
        }
      }
    }
  }
  return $pos$$2$$
}
function $goog$style$setSize$$($element$$51$$, $w$$5$$, $h$$5_opt_h$$) {
  if($w$$5$$ instanceof $goog$math$Size$$) {
    $h$$5_opt_h$$ = $w$$5$$.height;
    $w$$5$$ = $w$$5$$.width
  }else {
    if($h$$5_opt_h$$ == undefined) {
      throw Error("missing height argument");
    }
    $h$$5_opt_h$$ = $h$$5_opt_h$$
  }
  $goog$style$setWidth$$($element$$51$$, $w$$5$$);
  $goog$style$setHeight$$($element$$51$$, $h$$5_opt_h$$)
}
function $goog$style$setPixelStyleProperty_$$($property$$3$$, $round$$, $element$$52$$, $value$$27$$) {
  if(typeof $value$$27$$ == "number") {
    $value$$27$$ = ($round$$ ? Math.round($value$$27$$) : $value$$27$$) + "px"
  }
  $element$$52$$.style[$property$$3$$] = $value$$27$$
}
var $goog$style$setHeight$$ = $goog$partial$$($goog$style$setPixelStyleProperty_$$, "height", true), $goog$style$setWidth$$ = $goog$partial$$($goog$style$setPixelStyleProperty_$$, "width", true);
function $goog$style$getSize$$($element$$53_originalHeight$$) {
  var $hasOperaBug_originalWidth$$ = $goog$userAgent$OPERA$$ && !$goog$userAgent$isVersion$$("10");
  if($goog$style$getStyle_$$($element$$53_originalHeight$$, "display") != "none") {
    return $hasOperaBug_originalWidth$$ ? new $goog$math$Size$$($element$$53_originalHeight$$.offsetWidth || $element$$53_originalHeight$$.clientWidth, $element$$53_originalHeight$$.offsetHeight || $element$$53_originalHeight$$.clientHeight) : new $goog$math$Size$$($element$$53_originalHeight$$.offsetWidth, $element$$53_originalHeight$$.offsetHeight)
  }
  var $style$$6$$ = $element$$53_originalHeight$$.style, $originalDisplay$$ = $style$$6$$.display, $originalVisibility$$ = $style$$6$$.visibility, $originalPosition$$ = $style$$6$$.position;
  $style$$6$$.visibility = "hidden";
  $style$$6$$.position = "absolute";
  $style$$6$$.display = "inline";
  if($hasOperaBug_originalWidth$$) {
    $hasOperaBug_originalWidth$$ = $element$$53_originalHeight$$.offsetWidth || $element$$53_originalHeight$$.clientWidth;
    $element$$53_originalHeight$$ = $element$$53_originalHeight$$.offsetHeight || $element$$53_originalHeight$$.clientHeight
  }else {
    $hasOperaBug_originalWidth$$ = $element$$53_originalHeight$$.offsetWidth;
    $element$$53_originalHeight$$ = $element$$53_originalHeight$$.offsetHeight
  }
  $style$$6$$.display = $originalDisplay$$;
  $style$$6$$.position = $originalPosition$$;
  $style$$6$$.visibility = $originalVisibility$$;
  return new $goog$math$Size$$($hasOperaBug_originalWidth$$, $element$$53_originalHeight$$)
}
function $goog$style$getBounds$$($element$$54_s$$14$$) {
  var $o$$ = $goog$style$getPageOffset$$($element$$54_s$$14$$);
  $element$$54_s$$14$$ = $goog$style$getSize$$($element$$54_s$$14$$);
  return new $goog$math$Rect$$($o$$.x, $o$$.y, $element$$54_s$$14$$.width, $element$$54_s$$14$$.height)
}
function $goog$style$showElement$$($el$$19$$, $display$$) {
  $el$$19$$.style.display = $display$$ ? "" : "none"
}
function $goog$style$isRightToLeft$$($el$$23$$) {
  return"rtl" == $goog$style$getStyle_$$($el$$23$$, "direction")
}
var $goog$style$unselectableStyle_$$ = $goog$userAgent$GECKO$$ ? "MozUserSelect" : $goog$userAgent$WEBKIT$$ ? "WebkitUserSelect" : null;
function $goog$style$setUnselectable$$($el$$25_i$$67$$, $unselectable_value$$28$$, $descendants_opt_noRecurse$$) {
  $descendants_opt_noRecurse$$ = !$descendants_opt_noRecurse$$ ? $el$$25_i$$67$$.getElementsByTagName("*") : null;
  if($goog$style$unselectableStyle_$$) {
    $unselectable_value$$28$$ = $unselectable_value$$28$$ ? "none" : "";
    $el$$25_i$$67$$.style[$goog$style$unselectableStyle_$$] = $unselectable_value$$28$$;
    if($descendants_opt_noRecurse$$) {
      $el$$25_i$$67$$ = 0;
      for(var $descendant$$1$$;$descendant$$1$$ = $descendants_opt_noRecurse$$[$el$$25_i$$67$$];$el$$25_i$$67$$++) {
        $descendant$$1$$.style[$goog$style$unselectableStyle_$$] = $unselectable_value$$28$$
      }
    }
  }else {
    if($goog$userAgent$IE$$ || $goog$userAgent$OPERA$$) {
      $unselectable_value$$28$$ = $unselectable_value$$28$$ ? "on" : "";
      $el$$25_i$$67$$.setAttribute("unselectable", $unselectable_value$$28$$);
      if($descendants_opt_noRecurse$$) {
        for($el$$25_i$$67$$ = 0;$descendant$$1$$ = $descendants_opt_noRecurse$$[$el$$25_i$$67$$];$el$$25_i$$67$$++) {
          $descendant$$1$$.setAttribute("unselectable", $unselectable_value$$28$$)
        }
      }
    }
  }
}
;
// Input 36
function $goog$positioning$positionAtAnchor$$($anchorElement_corner_corner$$inline_249$$, $absolutePos_anchorElementCorner$$, $JSCompiler_inline_result$$229_movableElement$$, $elementSize$$inline_250_movableElementCorner$$, $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$, $buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$, $JSCompiler_temp$$931_opt_overflow_x$$inline_983$$, $opt_preferredSize_size$$inline_251$$) {
  var $moveableParentTopLeft_opt_viewport$$inline_245$$, $parent$$17_rect$$inline_215$$ = $JSCompiler_inline_result$$229_movableElement$$.offsetParent;
  if($parent$$17_rect$$inline_215$$) {
    var $isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$ = $parent$$17_rect$$inline_215$$.tagName == "HTML" || $parent$$17_rect$$inline_215$$.tagName == "BODY";
    if(!$isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$ || $goog$style$getStyle_$$($parent$$17_rect$$inline_215$$, "position") != "static") {
      $moveableParentTopLeft_opt_viewport$$inline_245$$ = $goog$style$getPageOffset$$($parent$$17_rect$$inline_215$$);
      $isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$ || ($moveableParentTopLeft_opt_viewport$$inline_245$$ = $goog$math$Coordinate$difference$$($moveableParentTopLeft_opt_viewport$$inline_245$$, new $goog$math$Coordinate$$($parent$$17_rect$$inline_215$$.scrollLeft, $parent$$17_rect$$inline_215$$.scrollTop)))
    }
  }
  $parent$$17_rect$$inline_215$$ = $goog$style$getBounds$$($anchorElement_corner_corner$$inline_249$$);
  if($isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$ = $goog$style$getVisibleRectForElement$$($anchorElement_corner_corner$$inline_249$$)) {
    var $position$$inline_958_rect$$inline_944_y1$$inline_948$$ = new $goog$math$Rect$$($isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$.left, $isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$.top, $isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$.right - $isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$.left, $isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$.bottom - $isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$.top);
    $isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$ = Math.max($parent$$17_rect$$inline_215$$.left, $position$$inline_958_rect$$inline_944_y1$$inline_948$$.left);
    var $body$$inline_226_x1$$inline_946$$ = Math.min($parent$$17_rect$$inline_215$$.left + $parent$$17_rect$$inline_215$$.width, $position$$inline_958_rect$$inline_944_y1$$inline_948$$.left + $position$$inline_958_rect$$inline_944_y1$$inline_948$$.width);
    if($isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$ <= $body$$inline_226_x1$$inline_946$$) {
      var $newBase$$inline_225_pos$$inline_227_relativeWin$$inline_957_y0$$inline_947$$ = Math.max($parent$$17_rect$$inline_215$$.top, $position$$inline_958_rect$$inline_944_y1$$inline_948$$.top);
      $position$$inline_958_rect$$inline_944_y1$$inline_948$$ = Math.min($parent$$17_rect$$inline_215$$.top + $parent$$17_rect$$inline_215$$.height, $position$$inline_958_rect$$inline_944_y1$$inline_948$$.top + $position$$inline_958_rect$$inline_944_y1$$inline_948$$.height);
      if($newBase$$inline_225_pos$$inline_227_relativeWin$$inline_957_y0$$inline_947$$ <= $position$$inline_958_rect$$inline_944_y1$$inline_948$$) {
        $parent$$17_rect$$inline_215$$.left = $isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$;
        $parent$$17_rect$$inline_215$$.top = $newBase$$inline_225_pos$$inline_227_relativeWin$$inline_957_y0$$inline_947$$;
        $parent$$17_rect$$inline_215$$.width = $body$$inline_226_x1$$inline_946$$ - $isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$;
        $parent$$17_rect$$inline_215$$.height = $position$$inline_958_rect$$inline_944_y1$$inline_948$$ - $newBase$$inline_225_pos$$inline_227_relativeWin$$inline_957_y0$$inline_947$$
      }
    }
  }
  $isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$ = $goog$dom$getDomHelper$$($anchorElement_corner_corner$$inline_249$$);
  $newBase$$inline_225_pos$$inline_227_relativeWin$$inline_957_y0$$inline_947$$ = $goog$dom$getDomHelper$$($JSCompiler_inline_result$$229_movableElement$$);
  if($isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$.$document_$ != $newBase$$inline_225_pos$$inline_227_relativeWin$$inline_957_y0$$inline_947$$.$document_$) {
    $body$$inline_226_x1$$inline_946$$ = $isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$.$document_$.body;
    $newBase$$inline_225_pos$$inline_227_relativeWin$$inline_957_y0$$inline_947$$ = $newBase$$inline_225_pos$$inline_227_relativeWin$$inline_957_y0$$inline_947$$.$document_$.parentWindow || $newBase$$inline_225_pos$$inline_227_relativeWin$$inline_957_y0$$inline_947$$.$document_$.defaultView;
    $position$$inline_958_rect$$inline_944_y1$$inline_948$$ = new $goog$math$Coordinate$$(0, 0);
    var $currentWin$$inline_959$$ = $goog$dom$getOwnerDocument$$($body$$inline_226_x1$$inline_946$$) ? $goog$dom$getOwnerDocument$$($body$$inline_226_x1$$inline_946$$).parentWindow || $goog$dom$getOwnerDocument$$($body$$inline_226_x1$$inline_946$$).defaultView : window, $currentEl$$inline_960$$ = $body$$inline_226_x1$$inline_946$$;
    do {
      var $JSCompiler_temp$$1179_offset$$inline_961_pos$$inline_1199$$;
      if($currentWin$$inline_959$$ == $newBase$$inline_225_pos$$inline_227_relativeWin$$inline_957_y0$$inline_947$$) {
        $JSCompiler_temp$$1179_offset$$inline_961_pos$$inline_1199$$ = $goog$style$getPageOffset$$($currentEl$$inline_960$$)
      }else {
        var $el$$inline_1198_pageCoord$$inline_1202$$ = $currentEl$$inline_960$$;
        $JSCompiler_temp$$1179_offset$$inline_961_pos$$inline_1199$$ = new $goog$math$Coordinate$$;
        if($el$$inline_1198_pageCoord$$inline_1202$$.nodeType == 1) {
          if($el$$inline_1198_pageCoord$$inline_1202$$.getBoundingClientRect) {
            var $box$$inline_1200_scrollCoord$$inline_1201$$ = $goog$style$getBoundingClientRect_$$($el$$inline_1198_pageCoord$$inline_1202$$);
            $JSCompiler_temp$$1179_offset$$inline_961_pos$$inline_1199$$.x = $box$$inline_1200_scrollCoord$$inline_1201$$.left;
            $JSCompiler_temp$$1179_offset$$inline_961_pos$$inline_1199$$.y = $box$$inline_1200_scrollCoord$$inline_1201$$.top
          }else {
            $box$$inline_1200_scrollCoord$$inline_1201$$ = $JSCompiler_StaticMethods_getDocumentScroll$$($goog$dom$getDomHelper$$($el$$inline_1198_pageCoord$$inline_1202$$));
            $el$$inline_1198_pageCoord$$inline_1202$$ = $goog$style$getPageOffset$$($el$$inline_1198_pageCoord$$inline_1202$$);
            $JSCompiler_temp$$1179_offset$$inline_961_pos$$inline_1199$$.x = $el$$inline_1198_pageCoord$$inline_1202$$.x - $box$$inline_1200_scrollCoord$$inline_1201$$.x;
            $JSCompiler_temp$$1179_offset$$inline_961_pos$$inline_1199$$.y = $el$$inline_1198_pageCoord$$inline_1202$$.y - $box$$inline_1200_scrollCoord$$inline_1201$$.y
          }
        }else {
          $JSCompiler_temp$$1179_offset$$inline_961_pos$$inline_1199$$.x = $el$$inline_1198_pageCoord$$inline_1202$$.clientX;
          $JSCompiler_temp$$1179_offset$$inline_961_pos$$inline_1199$$.y = $el$$inline_1198_pageCoord$$inline_1202$$.clientY
        }
        $JSCompiler_temp$$1179_offset$$inline_961_pos$$inline_1199$$ = $JSCompiler_temp$$1179_offset$$inline_961_pos$$inline_1199$$
      }
      $JSCompiler_temp$$1179_offset$$inline_961_pos$$inline_1199$$ = $JSCompiler_temp$$1179_offset$$inline_961_pos$$inline_1199$$;
      $position$$inline_958_rect$$inline_944_y1$$inline_948$$.x += $JSCompiler_temp$$1179_offset$$inline_961_pos$$inline_1199$$.x;
      $position$$inline_958_rect$$inline_944_y1$$inline_948$$.y += $JSCompiler_temp$$1179_offset$$inline_961_pos$$inline_1199$$.y
    }while($currentWin$$inline_959$$ && $currentWin$$inline_959$$ != $newBase$$inline_225_pos$$inline_227_relativeWin$$inline_957_y0$$inline_947$$ && ($currentEl$$inline_960$$ = $currentWin$$inline_959$$.frameElement) && ($currentWin$$inline_959$$ = $currentWin$$inline_959$$.parent));
    $newBase$$inline_225_pos$$inline_227_relativeWin$$inline_957_y0$$inline_947$$ = $position$$inline_958_rect$$inline_944_y1$$inline_948$$;
    $newBase$$inline_225_pos$$inline_227_relativeWin$$inline_957_y0$$inline_947$$ = $goog$math$Coordinate$difference$$($newBase$$inline_225_pos$$inline_227_relativeWin$$inline_957_y0$$inline_947$$, $goog$style$getPageOffset$$($body$$inline_226_x1$$inline_946$$));
    if($goog$userAgent$IE$$ && $isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$.$document_$.compatMode != "CSS1Compat") {
      $newBase$$inline_225_pos$$inline_227_relativeWin$$inline_957_y0$$inline_947$$ = $goog$math$Coordinate$difference$$($newBase$$inline_225_pos$$inline_227_relativeWin$$inline_957_y0$$inline_947$$, $JSCompiler_StaticMethods_getDocumentScroll$$($isBody_origBase$$inline_224_visibleBox$$inline_216_x0$$inline_945$$))
    }
    $parent$$17_rect$$inline_215$$.left += $newBase$$inline_225_pos$$inline_227_relativeWin$$inline_957_y0$$inline_947$$.x;
    $parent$$17_rect$$inline_215$$.top += $newBase$$inline_225_pos$$inline_227_relativeWin$$inline_957_y0$$inline_947$$.y
  }
  $anchorElement_corner_corner$$inline_249$$ = ($absolutePos_anchorElementCorner$$ & 4 && $goog$style$isRightToLeft$$($anchorElement_corner_corner$$inline_249$$) ? $absolutePos_anchorElementCorner$$ ^ 2 : $absolutePos_anchorElementCorner$$) & -5;
  $absolutePos_anchorElementCorner$$ = new $goog$math$Coordinate$$($anchorElement_corner_corner$$inline_249$$ & 2 ? $parent$$17_rect$$inline_215$$.left + $parent$$17_rect$$inline_215$$.width : $parent$$17_rect$$inline_215$$.left, $anchorElement_corner_corner$$inline_249$$ & 1 ? $parent$$17_rect$$inline_215$$.top + $parent$$17_rect$$inline_215$$.height : $parent$$17_rect$$inline_215$$.top);
  if($moveableParentTopLeft_opt_viewport$$inline_245$$) {
    $absolutePos_anchorElementCorner$$ = $goog$math$Coordinate$difference$$($absolutePos_anchorElementCorner$$, $moveableParentTopLeft_opt_viewport$$inline_245$$)
  }
  if($absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$) {
    $absolutePos_anchorElementCorner$$.x += ($anchorElement_corner_corner$$inline_249$$ & 2 ? -1 : 1) * $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$.x;
    $absolutePos_anchorElementCorner$$.y += ($anchorElement_corner_corner$$inline_249$$ & 1 ? -1 : 1) * $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$.y
  }
  var $status$$inline_248_status$$inline_972_viewport$$;
  if($JSCompiler_temp$$931_opt_overflow_x$$inline_983$$) {
    if(($status$$inline_248_status$$inline_972_viewport$$ = $goog$style$getVisibleRectForElement$$($JSCompiler_inline_result$$229_movableElement$$)) && $moveableParentTopLeft_opt_viewport$$inline_245$$) {
      $status$$inline_248_status$$inline_972_viewport$$.top = Math.max(0, $status$$inline_248_status$$inline_972_viewport$$.top - $moveableParentTopLeft_opt_viewport$$inline_245$$.y);
      $status$$inline_248_status$$inline_972_viewport$$.right -= $moveableParentTopLeft_opt_viewport$$inline_245$$.x;
      $status$$inline_248_status$$inline_972_viewport$$.bottom -= $moveableParentTopLeft_opt_viewport$$inline_245$$.y;
      $status$$inline_248_status$$inline_972_viewport$$.left = Math.max(0, $status$$inline_248_status$$inline_972_viewport$$.left - $moveableParentTopLeft_opt_viewport$$inline_245$$.x)
    }
  }
  a: {
    $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$ = $absolutePos_anchorElementCorner$$;
    $moveableParentTopLeft_opt_viewport$$inline_245$$ = $status$$inline_248_status$$inline_972_viewport$$;
    $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$ = $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$.$clone$();
    $status$$inline_248_status$$inline_972_viewport$$ = 0;
    $anchorElement_corner_corner$$inline_249$$ = ($elementSize$$inline_250_movableElementCorner$$ & 4 && $goog$style$isRightToLeft$$($JSCompiler_inline_result$$229_movableElement$$) ? $elementSize$$inline_250_movableElementCorner$$ ^ 2 : $elementSize$$inline_250_movableElementCorner$$) & -5;
    $elementSize$$inline_250_movableElementCorner$$ = $goog$style$getSize$$($JSCompiler_inline_result$$229_movableElement$$);
    $opt_preferredSize_size$$inline_251$$ = $opt_preferredSize_size$$inline_251$$ ? $opt_preferredSize_size$$inline_251$$.$clone$() : $elementSize$$inline_250_movableElementCorner$$;
    if($buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$ || $anchorElement_corner_corner$$inline_249$$ != 0) {
      if($anchorElement_corner_corner$$inline_249$$ & 2) {
        $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$.x -= $opt_preferredSize_size$$inline_251$$.width + ($buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$ ? $buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.right : 0)
      }else {
        if($buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$) {
          $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$.x += $buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.left
        }
      }
      if($anchorElement_corner_corner$$inline_249$$ & 1) {
        $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$.y -= $opt_preferredSize_size$$inline_251$$.height + ($buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$ ? $buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.bottom : 0)
      }else {
        if($buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$) {
          $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$.y += $buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.top
        }
      }
    }
    if($JSCompiler_temp$$931_opt_overflow_x$$inline_983$$) {
      if($moveableParentTopLeft_opt_viewport$$inline_245$$) {
        $buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$ = $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$;
        $status$$inline_248_status$$inline_972_viewport$$ = 0;
        if($buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.x < $moveableParentTopLeft_opt_viewport$$inline_245$$.left && $JSCompiler_temp$$931_opt_overflow_x$$inline_983$$ & 1) {
          $buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.x = $moveableParentTopLeft_opt_viewport$$inline_245$$.left;
          $status$$inline_248_status$$inline_972_viewport$$ |= 1
        }
        if($buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.x < $moveableParentTopLeft_opt_viewport$$inline_245$$.left && $buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.x + $opt_preferredSize_size$$inline_251$$.width > $moveableParentTopLeft_opt_viewport$$inline_245$$.right && $JSCompiler_temp$$931_opt_overflow_x$$inline_983$$ & 16) {
          $opt_preferredSize_size$$inline_251$$.width -= $buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.x + $opt_preferredSize_size$$inline_251$$.width - $moveableParentTopLeft_opt_viewport$$inline_245$$.right;
          $status$$inline_248_status$$inline_972_viewport$$ |= 4
        }
        if($buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.x + $opt_preferredSize_size$$inline_251$$.width > $moveableParentTopLeft_opt_viewport$$inline_245$$.right && $JSCompiler_temp$$931_opt_overflow_x$$inline_983$$ & 1) {
          $buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.x = Math.max($moveableParentTopLeft_opt_viewport$$inline_245$$.right - $opt_preferredSize_size$$inline_251$$.width, $moveableParentTopLeft_opt_viewport$$inline_245$$.left);
          $status$$inline_248_status$$inline_972_viewport$$ |= 1
        }
        if($JSCompiler_temp$$931_opt_overflow_x$$inline_983$$ & 2) {
          $status$$inline_248_status$$inline_972_viewport$$ |= ($buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.x < $moveableParentTopLeft_opt_viewport$$inline_245$$.left ? 16 : 0) | ($buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.x + $opt_preferredSize_size$$inline_251$$.width > $moveableParentTopLeft_opt_viewport$$inline_245$$.right ? 32 : 0)
        }
        if($buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.y < $moveableParentTopLeft_opt_viewport$$inline_245$$.top && $JSCompiler_temp$$931_opt_overflow_x$$inline_983$$ & 4) {
          $buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.y = $moveableParentTopLeft_opt_viewport$$inline_245$$.top;
          $status$$inline_248_status$$inline_972_viewport$$ |= 2
        }
        if($buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.y >= $moveableParentTopLeft_opt_viewport$$inline_245$$.top && $buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.y + $opt_preferredSize_size$$inline_251$$.height > $moveableParentTopLeft_opt_viewport$$inline_245$$.bottom && $JSCompiler_temp$$931_opt_overflow_x$$inline_983$$ & 32) {
          $opt_preferredSize_size$$inline_251$$.height -= $buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.y + $opt_preferredSize_size$$inline_251$$.height - $moveableParentTopLeft_opt_viewport$$inline_245$$.bottom;
          $status$$inline_248_status$$inline_972_viewport$$ |= 8
        }
        if($buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.y + $opt_preferredSize_size$$inline_251$$.height > $moveableParentTopLeft_opt_viewport$$inline_245$$.bottom && $JSCompiler_temp$$931_opt_overflow_x$$inline_983$$ & 4) {
          $buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.y = Math.max($moveableParentTopLeft_opt_viewport$$inline_245$$.bottom - $opt_preferredSize_size$$inline_251$$.height, $moveableParentTopLeft_opt_viewport$$inline_245$$.top);
          $status$$inline_248_status$$inline_972_viewport$$ |= 2
        }
        if($JSCompiler_temp$$931_opt_overflow_x$$inline_983$$ & 8) {
          $status$$inline_248_status$$inline_972_viewport$$ |= ($buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.y < $moveableParentTopLeft_opt_viewport$$inline_245$$.top ? 64 : 0) | ($buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$.y + $opt_preferredSize_size$$inline_251$$.height > $moveableParentTopLeft_opt_viewport$$inline_245$$.bottom ? 128 : 0)
        }
        $JSCompiler_temp$$931_opt_overflow_x$$inline_983$$ = $status$$inline_248_status$$inline_972_viewport$$
      }else {
        $JSCompiler_temp$$931_opt_overflow_x$$inline_983$$ = 256
      }
      $status$$inline_248_status$$inline_972_viewport$$ = $JSCompiler_temp$$931_opt_overflow_x$$inline_983$$;
      if($status$$inline_248_status$$inline_972_viewport$$ & 496) {
        $JSCompiler_inline_result$$229_movableElement$$ = $status$$inline_248_status$$inline_972_viewport$$;
        break a
      }
    }
    $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$ = $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$;
    $buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$ = $goog$userAgent$GECKO$$ && ($goog$userAgent$detectedMac_$$ || $goog$userAgent$X11$$) && $goog$userAgent$isVersion$$("1.9");
    if($absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$ instanceof $goog$math$Coordinate$$) {
      $JSCompiler_temp$$931_opt_overflow_x$$inline_983$$ = $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$.x;
      $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$ = $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$.y
    }else {
      $JSCompiler_temp$$931_opt_overflow_x$$inline_983$$ = $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$;
      $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$ = void 0
    }
    $goog$style$setPixelStyleProperty_$$("left", $buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$, $JSCompiler_inline_result$$229_movableElement$$, $JSCompiler_temp$$931_opt_overflow_x$$inline_983$$);
    $goog$style$setPixelStyleProperty_$$("top", $buggyGeckoSubPixelPos$$inline_985_opt_margin_pos$$inline_968$$, $JSCompiler_inline_result$$229_movableElement$$, $absolutePos$$inline_241_arg1$$inline_981_opt_offset_y$$inline_984$$);
    ($elementSize$$inline_250_movableElementCorner$$ == $opt_preferredSize_size$$inline_251$$ ? true : !$elementSize$$inline_250_movableElementCorner$$ || !$opt_preferredSize_size$$inline_251$$ ? false : $elementSize$$inline_250_movableElementCorner$$.width == $opt_preferredSize_size$$inline_251$$.width && $elementSize$$inline_250_movableElementCorner$$.height == $opt_preferredSize_size$$inline_251$$.height) || $goog$style$setSize$$($JSCompiler_inline_result$$229_movableElement$$, $opt_preferredSize_size$$inline_251$$);
    $JSCompiler_inline_result$$229_movableElement$$ = $status$$inline_248_status$$inline_972_viewport$$
  }
  return $JSCompiler_inline_result$$229_movableElement$$
}
;
// Input 37
function $goog$positioning$AbstractPosition$$() {
}
$goog$positioning$AbstractPosition$$.prototype.$reposition$ = $JSCompiler_emptyFn$$();
// Input 38
function $goog$positioning$AnchoredPosition$$($anchorElement$$1$$, $corner$$7$$) {
  this.element = $anchorElement$$1$$;
  this.$corner$ = $corner$$7$$
}
$goog$inherits$$($goog$positioning$AnchoredPosition$$, $goog$positioning$AbstractPosition$$);
$goog$positioning$AnchoredPosition$$.prototype.$reposition$ = function $$goog$positioning$AnchoredPosition$$$$$reposition$$($movableElement$$3$$, $movableCorner$$, $opt_margin$$3$$) {
  $goog$positioning$positionAtAnchor$$(this.element, this.$corner$, $movableElement$$3$$, $movableCorner$$, undefined, $opt_margin$$3$$)
};
// Input 39
function $goog$positioning$AnchoredViewportPosition$$($anchorElement$$2$$, $corner$$8$$, $opt_adjust$$) {
  $goog$positioning$AnchoredPosition$$.call(this, $anchorElement$$2$$, $corner$$8$$);
  this.$adjust_$ = $opt_adjust$$
}
$goog$inherits$$($goog$positioning$AnchoredViewportPosition$$, $goog$positioning$AnchoredPosition$$);
$goog$positioning$AnchoredViewportPosition$$.prototype.$reposition$ = function $$goog$positioning$AnchoredViewportPosition$$$$$reposition$$($movableElement$$4$$, $movableCorner$$1$$, $opt_margin$$4$$, $opt_preferredSize$$4$$) {
  var $status$$2$$ = $goog$positioning$positionAtAnchor$$(this.element, this.$corner$, $movableElement$$4$$, $movableCorner$$1$$, null, $opt_margin$$4$$, 10, $opt_preferredSize$$4$$);
  if($status$$2$$ & 496) {
    var $cornerFallback$$ = this.$corner$, $movableCornerFallback$$ = $movableCorner$$1$$;
    if($status$$2$$ & 48) {
      $cornerFallback$$ ^= 2;
      $movableCornerFallback$$ ^= 2
    }
    if($status$$2$$ & 192) {
      $cornerFallback$$ ^= 1;
      $movableCornerFallback$$ ^= 1
    }
    $status$$2$$ = $goog$positioning$positionAtAnchor$$(this.element, $cornerFallback$$, $movableElement$$4$$, $movableCornerFallback$$, null, $opt_margin$$4$$, 10, $opt_preferredSize$$4$$);
    if($status$$2$$ & 496) {
      this.$adjust_$ ? $goog$positioning$positionAtAnchor$$(this.element, this.$corner$, $movableElement$$4$$, $movableCorner$$1$$, null, $opt_margin$$4$$, 5, $opt_preferredSize$$4$$) : $goog$positioning$positionAtAnchor$$(this.element, this.$corner$, $movableElement$$4$$, $movableCorner$$1$$, null, $opt_margin$$4$$, 0, $opt_preferredSize$$4$$)
    }
  }
};
// Input 40
function $goog$positioning$MenuAnchoredPosition$$($anchorElement$$3$$, $corner$$9$$, $opt_adjust$$1$$, $opt_resize$$) {
  $goog$positioning$AnchoredViewportPosition$$.call(this, $anchorElement$$3$$, $corner$$9$$, $opt_adjust$$1$$);
  this.$resize_$ = $opt_resize$$
}
$goog$inherits$$($goog$positioning$MenuAnchoredPosition$$, $goog$positioning$AnchoredViewportPosition$$);
$goog$positioning$MenuAnchoredPosition$$.prototype.$reposition$ = function $$goog$positioning$MenuAnchoredPosition$$$$$reposition$$($movableElement$$5$$, $movableCorner$$2$$, $opt_margin$$5$$, $opt_preferredSize$$5$$) {
  this.$resize_$ ? $goog$positioning$positionAtAnchor$$(this.element, this.$corner$, $movableElement$$5$$, $movableCorner$$2$$, null, $opt_margin$$5$$, 33, $opt_preferredSize$$5$$) : $goog$positioning$MenuAnchoredPosition$$.$superClass_$.$reposition$.call(this, $movableElement$$5$$, $movableCorner$$2$$, $opt_margin$$5$$, $opt_preferredSize$$5$$)
};
// Input 41
function $goog$Timer$$($opt_interval$$, $opt_timerObject$$) {
  this.$interval_$ = $opt_interval$$ || 1;
  this.$timerObject_$ = $opt_timerObject$$ || $goog$Timer$defaultTimerObject$$;
  this.$boundTick_$ = $goog$bind$$(this.$tick_$, this);
  this.$last_$ = $goog$now$$()
}
$goog$inherits$$($goog$Timer$$, $goog$events$EventTarget$$);
$goog$Timer$$.prototype.enabled = false;
var $goog$Timer$defaultTimerObject$$ = $goog$global$$.window;
$a$$ = $goog$Timer$$.prototype;
$a$$.$timer_$ = null;
$a$$.$tick_$ = function $$a$$$$tick_$$() {
  if(this.enabled) {
    var $elapsed$$ = $goog$now$$() - this.$last_$;
    if($elapsed$$ > 0 && $elapsed$$ < this.$interval_$ * 0.8) {
      this.$timer_$ = this.$timerObject_$.setTimeout(this.$boundTick_$, this.$interval_$ - $elapsed$$)
    }else {
      this.dispatchEvent($goog$Timer$TICK$$);
      if(this.enabled) {
        this.$timer_$ = this.$timerObject_$.setTimeout(this.$boundTick_$, this.$interval_$);
        this.$last_$ = $goog$now$$()
      }
    }
  }
};
$a$$.start = function $$a$$$start$() {
  this.enabled = true;
  if(!this.$timer_$) {
    this.$timer_$ = this.$timerObject_$.setTimeout(this.$boundTick_$, this.$interval_$);
    this.$last_$ = $goog$now$$()
  }
};
$a$$.stop = function $$a$$$stop$() {
  this.enabled = false;
  if(this.$timer_$) {
    this.$timerObject_$.clearTimeout(this.$timer_$);
    this.$timer_$ = null
  }
};
$a$$.$disposeInternal$ = function $$a$$$$disposeInternal$$() {
  $goog$Timer$$.$superClass_$.$disposeInternal$.call(this);
  this.stop();
  delete this.$timerObject_$
};
var $goog$Timer$TICK$$ = "tick";
// Input 42
function $goog$ui$Component$$($opt_domHelper$$) {
  this.$dom_$ = $opt_domHelper$$ || $goog$dom$getDomHelper$$();
  this.$rightToLeft_$ = $goog$ui$Component$defaultRightToLeft_$$
}
$goog$inherits$$($goog$ui$Component$$, $goog$events$EventTarget$$);
$goog$ui$Component$$.prototype.$idGenerator_$ = $goog$ui$IdGenerator$$.$getInstance$();
var $goog$ui$Component$defaultRightToLeft_$$ = null, $goog$ui$Component$EventType$$ = {$BEFORE_SHOW$:"beforeshow", $SHOW$:"show", $HIDE$:"hide", $DISABLE$:"disable", $ENABLE$:"enable", $HIGHLIGHT$:"highlight", $UNHIGHLIGHT$:"unhighlight", $ACTIVATE$:"activate", $DEACTIVATE$:"deactivate", $SELECT$:"select", $UNSELECT$:"unselect", $CHECK$:"check", $UNCHECK$:"uncheck", $FOCUS$:"focus", $BLUR$:"blur", OPEN:"open", $CLOSE$:"close", $ENTER$:"enter", $LEAVE$:"leave", $ACTION$:"action", $CHANGE$:"change"};
function $goog$ui$Component$getStateTransitionEvent$$($state$$1$$, $isEntering$$) {
  switch($state$$1$$) {
    case 1:
      return $isEntering$$ ? "disable" : "enable";
    case 2:
      return $isEntering$$ ? "highlight" : "unhighlight";
    case 4:
      return $isEntering$$ ? "activate" : "deactivate";
    case 8:
      return $isEntering$$ ? "select" : "unselect";
    case 16:
      return $isEntering$$ ? "check" : "uncheck";
    case 32:
      return $isEntering$$ ? "focus" : "blur";
    case 64:
      return $isEntering$$ ? "open" : "close";
    default:
  }
  throw Error("Invalid component state");
}
$a$$ = $goog$ui$Component$$.prototype;
$a$$.$id_$ = null;
$a$$.$dom_$ = null;
$a$$.$inDocument_$ = false;
$a$$.$element_$ = null;
$a$$.$rightToLeft_$ = null;
$a$$.$model_$ = null;
$a$$.$parent_$ = null;
$a$$.$children_$ = null;
$a$$.$childIndex_$ = null;
$a$$.$wasDecorated_$ = false;
function $JSCompiler_StaticMethods_getId$$($JSCompiler_StaticMethods_getId$self$$) {
  return $JSCompiler_StaticMethods_getId$self$$.$id_$ || ($JSCompiler_StaticMethods_getId$self$$.$id_$ = ":" + ($JSCompiler_StaticMethods_getId$self$$.$idGenerator_$.$nextId_$++).toString(36))
}
$a$$.$getElement$ = $JSCompiler_get$$("$element_$");
function $JSCompiler_StaticMethods_getHandler$$($JSCompiler_StaticMethods_getHandler$self$$) {
  return $JSCompiler_StaticMethods_getHandler$self$$.$googUiComponentHandler_$ || ($JSCompiler_StaticMethods_getHandler$self$$.$googUiComponentHandler_$ = new $goog$events$EventHandler$$($JSCompiler_StaticMethods_getHandler$self$$))
}
function $JSCompiler_StaticMethods_setParent$$($JSCompiler_StaticMethods_setParent$self$$, $parent$$18$$) {
  if($JSCompiler_StaticMethods_setParent$self$$ == $parent$$18$$) {
    throw Error("Unable to set parent component");
  }
  if($parent$$18$$ && $JSCompiler_StaticMethods_setParent$self$$.$parent_$ && $JSCompiler_StaticMethods_setParent$self$$.$id_$ && $JSCompiler_StaticMethods_getChild$$($JSCompiler_StaticMethods_setParent$self$$.$parent_$, $JSCompiler_StaticMethods_setParent$self$$.$id_$) && $JSCompiler_StaticMethods_setParent$self$$.$parent_$ != $parent$$18$$) {
    throw Error("Unable to set parent component");
  }
  $JSCompiler_StaticMethods_setParent$self$$.$parent_$ = $parent$$18$$;
  $goog$ui$Component$$.$superClass_$.$setParentEventTarget$.call($JSCompiler_StaticMethods_setParent$self$$, $parent$$18$$)
}
$a$$.$setParentEventTarget$ = function $$a$$$$setParentEventTarget$$($parent$$19$$) {
  if(this.$parent_$ && this.$parent_$ != $parent$$19$$) {
    throw Error("Method not supported");
  }
  $goog$ui$Component$$.$superClass_$.$setParentEventTarget$.call(this, $parent$$19$$)
};
$a$$.$getDomHelper$ = $JSCompiler_get$$("$dom_$");
$a$$.$createDom$ = function $$a$$$$createDom$$() {
  this.$element_$ = this.$dom_$.createElement("div")
};
function $JSCompiler_StaticMethods_render$$($JSCompiler_StaticMethods_render$self$$, $opt_parentElement$$) {
  $JSCompiler_StaticMethods_render_$$($JSCompiler_StaticMethods_render$self$$, $opt_parentElement$$)
}
function $JSCompiler_StaticMethods_render_$$($JSCompiler_StaticMethods_render_$self$$, $opt_parentElement$$1$$, $opt_beforeElement$$) {
  if($JSCompiler_StaticMethods_render_$self$$.$inDocument_$) {
    throw Error("Component already rendered");
  }
  $JSCompiler_StaticMethods_render_$self$$.$element_$ || $JSCompiler_StaticMethods_render_$self$$.$createDom$();
  $opt_parentElement$$1$$ ? $opt_parentElement$$1$$.insertBefore($JSCompiler_StaticMethods_render_$self$$.$element_$, $opt_beforeElement$$ || null) : $JSCompiler_StaticMethods_render_$self$$.$dom_$.$document_$.body.appendChild($JSCompiler_StaticMethods_render_$self$$.$element_$);
  if(!$JSCompiler_StaticMethods_render_$self$$.$parent_$ || $JSCompiler_StaticMethods_render_$self$$.$parent_$.$inDocument_$) {
    $JSCompiler_StaticMethods_render_$self$$.$enterDocument$()
  }
}
$a$$.$enterDocument$ = function $$a$$$$enterDocument$$() {
  this.$inDocument_$ = true;
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$7$$) {
    !$child$$7$$.$inDocument_$ && $child$$7$$.$getElement$() && $child$$7$$.$enterDocument$()
  })
};
$a$$.$exitDocument$ = function $$a$$$$exitDocument$$() {
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$8$$) {
    $child$$8$$.$inDocument_$ && $child$$8$$.$exitDocument$()
  });
  this.$googUiComponentHandler_$ && $JSCompiler_StaticMethods_removeAll$$(this.$googUiComponentHandler_$);
  this.$inDocument_$ = false
};
$a$$.$disposeInternal$ = function $$a$$$$disposeInternal$$() {
  $goog$ui$Component$$.$superClass_$.$disposeInternal$.call(this);
  this.$inDocument_$ && this.$exitDocument$();
  if(this.$googUiComponentHandler_$) {
    this.$googUiComponentHandler_$.$dispose$();
    delete this.$googUiComponentHandler_$
  }
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$9$$) {
    $child$$9$$.$dispose$()
  });
  !this.$wasDecorated_$ && this.$element_$ && $goog$dom$removeNode$$(this.$element_$);
  this.$parent_$ = this.$model_$ = this.$element_$ = this.$childIndex_$ = this.$children_$ = null
};
$a$$.$addChild$ = function $$a$$$$addChild$$($child$$10$$, $opt_render$$) {
  this.$addChildAt$($child$$10$$, $JSCompiler_StaticMethods_getChildCount$$(this), $opt_render$$)
};
$a$$.$addChildAt$ = function $$a$$$$addChildAt$$($child$$11$$, $index$$42_sibling$$1$$, $contentElement_opt_render$$1$$) {
  if($child$$11$$.$inDocument_$ && ($contentElement_opt_render$$1$$ || !this.$inDocument_$)) {
    throw Error("Component already rendered");
  }
  if($index$$42_sibling$$1$$ < 0 || $index$$42_sibling$$1$$ > $JSCompiler_StaticMethods_getChildCount$$(this)) {
    throw Error("Child component index out of bounds");
  }
  if(!this.$childIndex_$ || !this.$children_$) {
    this.$childIndex_$ = {};
    this.$children_$ = []
  }
  if($child$$11$$.$parent_$ == this) {
    this.$childIndex_$[$JSCompiler_StaticMethods_getId$$($child$$11$$)] = $child$$11$$;
    $goog$array$remove$$(this.$children_$, $child$$11$$)
  }else {
    var $obj$$inline_266$$ = this.$childIndex_$, $key$$inline_267$$ = $JSCompiler_StaticMethods_getId$$($child$$11$$);
    if($key$$inline_267$$ in $obj$$inline_266$$) {
      throw Error('The object already contains the key "' + $key$$inline_267$$ + '"');
    }
    $obj$$inline_266$$[$key$$inline_267$$] = $child$$11$$
  }
  $JSCompiler_StaticMethods_setParent$$($child$$11$$, this);
  $goog$array$splice$$(this.$children_$, $index$$42_sibling$$1$$, 0, $child$$11$$);
  if($child$$11$$.$inDocument_$ && this.$inDocument_$ && $child$$11$$.$parent_$ == this) {
    $contentElement_opt_render$$1$$ = this.$getContentElement$();
    $contentElement_opt_render$$1$$.insertBefore($child$$11$$.$getElement$(), $contentElement_opt_render$$1$$.childNodes[$index$$42_sibling$$1$$] || null)
  }else {
    if($contentElement_opt_render$$1$$) {
      this.$element_$ || this.$createDom$();
      $index$$42_sibling$$1$$ = $JSCompiler_StaticMethods_getChildAt$$(this, $index$$42_sibling$$1$$ + 1);
      $JSCompiler_StaticMethods_render_$$($child$$11$$, this.$getContentElement$(), $index$$42_sibling$$1$$ ? $index$$42_sibling$$1$$.$element_$ : null)
    }else {
      this.$inDocument_$ && !$child$$11$$.$inDocument_$ && $child$$11$$.$element_$ && $child$$11$$.$enterDocument$()
    }
  }
};
$a$$.$getContentElement$ = $JSCompiler_get$$("$element_$");
function $JSCompiler_StaticMethods_isRightToLeft$$($JSCompiler_StaticMethods_isRightToLeft$self$$) {
  if($JSCompiler_StaticMethods_isRightToLeft$self$$.$rightToLeft_$ == null) {
    $JSCompiler_StaticMethods_isRightToLeft$self$$.$rightToLeft_$ = $goog$style$isRightToLeft$$($JSCompiler_StaticMethods_isRightToLeft$self$$.$inDocument_$ ? $JSCompiler_StaticMethods_isRightToLeft$self$$.$element_$ : $JSCompiler_StaticMethods_isRightToLeft$self$$.$dom_$.$document_$.body)
  }
  return $JSCompiler_StaticMethods_isRightToLeft$self$$.$rightToLeft_$
}
$a$$.$setRightToLeft$ = function $$a$$$$setRightToLeft$$($rightToLeft$$1$$) {
  if(this.$inDocument_$) {
    throw Error("Component already rendered");
  }
  this.$rightToLeft_$ = $rightToLeft$$1$$
};
function $JSCompiler_StaticMethods_getChildCount$$($JSCompiler_StaticMethods_getChildCount$self$$) {
  return $JSCompiler_StaticMethods_getChildCount$self$$.$children_$ ? $JSCompiler_StaticMethods_getChildCount$self$$.$children_$.length : 0
}
function $JSCompiler_StaticMethods_getChild$$($JSCompiler_StaticMethods_getChild$self$$, $id$$4$$) {
  var $JSCompiler_inline_result$$277_JSCompiler_temp$$17_obj$$inline_281$$;
  if($JSCompiler_StaticMethods_getChild$self$$.$childIndex_$ && $id$$4$$) {
    $JSCompiler_inline_result$$277_JSCompiler_temp$$17_obj$$inline_281$$ = $JSCompiler_StaticMethods_getChild$self$$.$childIndex_$;
    $JSCompiler_inline_result$$277_JSCompiler_temp$$17_obj$$inline_281$$ = $id$$4$$ in $JSCompiler_inline_result$$277_JSCompiler_temp$$17_obj$$inline_281$$ ? $JSCompiler_inline_result$$277_JSCompiler_temp$$17_obj$$inline_281$$[$id$$4$$] : void 0;
    $JSCompiler_inline_result$$277_JSCompiler_temp$$17_obj$$inline_281$$ = $JSCompiler_inline_result$$277_JSCompiler_temp$$17_obj$$inline_281$$ || null
  }else {
    $JSCompiler_inline_result$$277_JSCompiler_temp$$17_obj$$inline_281$$ = null
  }
  return $JSCompiler_inline_result$$277_JSCompiler_temp$$17_obj$$inline_281$$
}
function $JSCompiler_StaticMethods_getChildAt$$($JSCompiler_StaticMethods_getChildAt$self$$, $index$$43$$) {
  return $JSCompiler_StaticMethods_getChildAt$self$$.$children_$ ? $JSCompiler_StaticMethods_getChildAt$self$$.$children_$[$index$$43$$] || null : null
}
function $JSCompiler_StaticMethods_forEachChild$$($JSCompiler_StaticMethods_forEachChild$self$$, $f$$26$$, $opt_obj$$26$$) {
  $JSCompiler_StaticMethods_forEachChild$self$$.$children_$ && $goog$array$forEach$$($JSCompiler_StaticMethods_forEachChild$self$$.$children_$, $f$$26$$, $opt_obj$$26$$)
}
function $JSCompiler_StaticMethods_indexOfChild$$($JSCompiler_StaticMethods_indexOfChild$self$$, $child$$13$$) {
  return $JSCompiler_StaticMethods_indexOfChild$self$$.$children_$ && $child$$13$$ ? $goog$array$indexOf$$($JSCompiler_StaticMethods_indexOfChild$self$$.$children_$, $child$$13$$) : -1
}
$a$$.removeChild = function $$a$$$removeChild$($child$$14$$, $opt_unrender$$) {
  if($child$$14$$) {
    var $id$$5$$ = $goog$isString$$($child$$14$$) ? $child$$14$$ : $JSCompiler_StaticMethods_getId$$($child$$14$$);
    $child$$14$$ = $JSCompiler_StaticMethods_getChild$$(this, $id$$5$$);
    if($id$$5$$ && $child$$14$$) {
      $goog$object$remove$$(this.$childIndex_$, $id$$5$$);
      $goog$array$remove$$(this.$children_$, $child$$14$$);
      if($opt_unrender$$) {
        $child$$14$$.$exitDocument$();
        $child$$14$$.$element_$ && $goog$dom$removeNode$$($child$$14$$.$element_$)
      }
      $JSCompiler_StaticMethods_setParent$$($child$$14$$, null)
    }
  }
  if(!$child$$14$$) {
    throw Error("Child is not in parent component");
  }
  return $child$$14$$
};
// Input 43
function $goog$ui$ControlRenderer$$() {
}
var $goog$ui$ControlRenderer$ARIA_STATE_MAP_$$;
$goog$addSingletonGetter$$($goog$ui$ControlRenderer$$);
$a$$ = $goog$ui$ControlRenderer$$.prototype;
$a$$.$getAriaRole$ = $JSCompiler_emptyFn$$();
$a$$.$createDom$ = function $$a$$$$createDom$$($control$$) {
  return $control$$.$getDomHelper$().$createDom$("div", this.$getClassNames$($control$$).join(" "), $control$$.$content_$)
};
$a$$.$getContentElement$ = function $$a$$$$getContentElement$$($element$$73$$) {
  return $element$$73$$
};
$a$$.$enableClassName$ = function $$a$$$$enableClassName$$($control$$1_element$$74$$, $className$$14$$, $enable$$1$$) {
  if($control$$1_element$$74$$ = $control$$1_element$$74$$.$getElement$ ? $control$$1_element$$74$$.$getElement$() : $control$$1_element$$74$$) {
    if($goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("7")) {
      var $combinedClasses$$ = $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$(this, $goog$dom$classes$get$$($control$$1_element$$74$$), $className$$14$$);
      $combinedClasses$$.push($className$$14$$);
      $goog$partial$$($enable$$1$$ ? $goog$dom$classes$add$$ : $goog$dom$classes$remove$$, $control$$1_element$$74$$).apply(null, $combinedClasses$$)
    }else {
      $enable$$1$$ ? $goog$dom$classes$add$$($control$$1_element$$74$$, $className$$14$$) : $goog$dom$classes$remove$$($control$$1_element$$74$$, $className$$14$$)
    }
  }
};
$a$$.$initializeDom$ = function $$a$$$$initializeDom$$($control$$4$$) {
  $JSCompiler_StaticMethods_isRightToLeft$$($control$$4$$) && this.$setRightToLeft$($control$$4$$.$getElement$(), true);
  $control$$4$$.$isEnabled$() && this.$setFocusable$($control$$4$$, $control$$4$$.$visible_$)
};
$a$$.$setAllowTextSelection$ = function $$a$$$$setAllowTextSelection$$($element$$78$$, $allow$$) {
  $goog$style$setUnselectable$$($element$$78$$, !$allow$$, !$goog$userAgent$IE$$ && !$goog$userAgent$OPERA$$)
};
$a$$.$setRightToLeft$ = function $$a$$$$setRightToLeft$$($element$$79$$, $rightToLeft$$2$$) {
  this.$enableClassName$($element$$79$$, this.$getCssClass$() + "-rtl", $rightToLeft$$2$$)
};
$a$$.$isFocusable$ = function $$a$$$$isFocusable$$($control$$5$$) {
  var $keyTarget$$;
  if($control$$5$$.$supportedStates_$ & 32 && ($keyTarget$$ = $control$$5$$.$getKeyEventTarget$())) {
    return $goog$dom$isFocusableTabIndex$$($keyTarget$$)
  }
  return false
};
$a$$.$setFocusable$ = function $$a$$$$setFocusable$$($control$$6$$, $focusable$$) {
  var $element$$inline_294_keyTarget$$1$$;
  if($control$$6$$.$supportedStates_$ & 32 && ($element$$inline_294_keyTarget$$1$$ = $control$$6$$.$getKeyEventTarget$())) {
    if(!$focusable$$ && $control$$6$$.$state_$ & 32) {
      try {
        $element$$inline_294_keyTarget$$1$$.blur()
      }catch($e$$13$$) {
      }
      $control$$6$$.$state_$ & 32 && $control$$6$$.$handleBlur$(null)
    }
    if($goog$dom$isFocusableTabIndex$$($element$$inline_294_keyTarget$$1$$) != $focusable$$) {
      $element$$inline_294_keyTarget$$1$$ = $element$$inline_294_keyTarget$$1$$;
      if($focusable$$) {
        $element$$inline_294_keyTarget$$1$$.tabIndex = 0
      }else {
        $element$$inline_294_keyTarget$$1$$.removeAttribute("tabIndex")
      }
    }
  }
};
$a$$.$setVisible$ = function $$a$$$$setVisible$$($element$$80$$, $visible$$) {
  $goog$style$showElement$$($element$$80$$, $visible$$)
};
$a$$.$setState$ = function $$a$$$$setState$$($control$$7$$, $state$$3$$, $enable$$3$$) {
  var $element$$81$$ = $control$$7$$.$getElement$();
  if($element$$81$$) {
    var $className$$17$$ = this.$getClassForState$($state$$3$$);
    $className$$17$$ && this.$enableClassName$($control$$7$$, $className$$17$$, $enable$$3$$);
    this.$updateAriaState$($element$$81$$, $state$$3$$, $enable$$3$$)
  }
};
$a$$.$updateAriaState$ = function $$a$$$$updateAriaState$$($element$$82$$, $ariaState_state$$4$$, $enable$$4$$) {
  if($goog$userAgent$GECKO$$) {
    $goog$ui$ControlRenderer$ARIA_STATE_MAP_$$ || ($goog$ui$ControlRenderer$ARIA_STATE_MAP_$$ = $goog$object$create$$(1, "disabled", 4, "pressed", 8, "selected", 16, "checked", 64, "expanded"));
    ($ariaState_state$$4$$ = $goog$ui$ControlRenderer$ARIA_STATE_MAP_$$[$ariaState_state$$4$$]) && $goog$dom$a11y$setState$$($element$$82$$, $ariaState_state$$4$$, $enable$$4$$)
  }
};
$a$$.$setContent$ = function $$a$$$$setContent$$($element$$83$$, $content$$2$$) {
  var $contentElem$$1$$ = this.$getContentElement$($element$$83$$);
  if($contentElem$$1$$) {
    $goog$dom$removeChildren$$($contentElem$$1$$);
    if($content$$2$$) {
      if($goog$isString$$($content$$2$$)) {
        $goog$dom$setTextContent$$($contentElem$$1$$, $content$$2$$)
      }else {
        var $childHandler$$1$$ = function $$childHandler$$1$$$($child$$15$$) {
          if($child$$15$$) {
            var $doc$$30$$ = $goog$dom$getOwnerDocument$$($contentElem$$1$$);
            $contentElem$$1$$.appendChild($goog$isString$$($child$$15$$) ? $doc$$30$$.createTextNode($child$$15$$) : $child$$15$$)
          }
        };
        if($goog$isArray$$($content$$2$$)) {
          $goog$array$forEach$$($content$$2$$, $childHandler$$1$$)
        }else {
          $goog$isArrayLike$$($content$$2$$) && !("nodeType" in $content$$2$$) ? $goog$array$forEach$$($goog$array$clone$$($content$$2$$), $childHandler$$1$$) : $childHandler$$1$$($content$$2$$)
        }
      }
    }
  }
};
$a$$.$getKeyEventTarget$ = function $$a$$$$getKeyEventTarget$$($control$$8$$) {
  return $control$$8$$.$getElement$()
};
$a$$.$getCssClass$ = $JSCompiler_returnArg$$("goog-control");
$a$$.$getClassNames$ = function $$a$$$$getClassNames$$($control$$9_extraClassNames$$1$$) {
  var $cssClass_state$$inline_302$$ = this.$getCssClass$(), $classNames$$2$$ = [$cssClass_state$$inline_302$$], $classNames$$inline_303_structuralCssClass$$ = this.$getCssClass$();
  $classNames$$inline_303_structuralCssClass$$ != $cssClass_state$$inline_302$$ && $classNames$$2$$.push($classNames$$inline_303_structuralCssClass$$);
  $cssClass_state$$inline_302$$ = $control$$9_extraClassNames$$1$$.$state_$;
  for($classNames$$inline_303_structuralCssClass$$ = [];$cssClass_state$$inline_302$$;) {
    var $mask$$inline_304$$ = $cssClass_state$$inline_302$$ & -$cssClass_state$$inline_302$$;
    $classNames$$inline_303_structuralCssClass$$.push(this.$getClassForState$($mask$$inline_304$$));
    $cssClass_state$$inline_302$$ &= ~$mask$$inline_304$$
  }
  $classNames$$2$$.push.apply($classNames$$2$$, $classNames$$inline_303_structuralCssClass$$);
  ($control$$9_extraClassNames$$1$$ = $control$$9_extraClassNames$$1$$.$extraClassNames_$) && $classNames$$2$$.push.apply($classNames$$2$$, $control$$9_extraClassNames$$1$$);
  $goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("7") && $classNames$$2$$.push.apply($classNames$$2$$, $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$(this, $classNames$$2$$));
  return $classNames$$2$$
};
function $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$($JSCompiler_StaticMethods_getAppliedCombinedClassNames_$self$$, $classes$$6$$, $opt_includedClass$$) {
  var $toAdd$$ = [];
  if($opt_includedClass$$) {
    $classes$$6$$ = $classes$$6$$.concat([$opt_includedClass$$])
  }
  $goog$array$forEach$$([], function($combo$$) {
    if($goog$array$every$$($combo$$, $goog$partial$$($goog$array$contains$$, $classes$$6$$)) && (!$opt_includedClass$$ || $goog$array$contains$$($combo$$, $opt_includedClass$$))) {
      $toAdd$$.push($combo$$.join("_"))
    }
  });
  return $toAdd$$
}
$a$$.$getClassForState$ = function $$a$$$$getClassForState$$($state$$6$$) {
  if(!this.$classByState_$) {
    var $baseClass$$inline_310$$ = this.$getCssClass$();
    this.$classByState_$ = $goog$object$create$$(1, $baseClass$$inline_310$$ + "-disabled", 2, $baseClass$$inline_310$$ + "-hover", 4, $baseClass$$inline_310$$ + "-active", 8, $baseClass$$inline_310$$ + "-selected", 16, $baseClass$$inline_310$$ + "-checked", 32, $baseClass$$inline_310$$ + "-focused", 64, $baseClass$$inline_310$$ + "-open")
  }
  return this.$classByState_$[$state$$6$$]
};
// Input 44
function $goog$ui$ButtonRenderer$$() {
}
$goog$inherits$$($goog$ui$ButtonRenderer$$, $goog$ui$ControlRenderer$$);
$goog$addSingletonGetter$$($goog$ui$ButtonRenderer$$);
$a$$ = $goog$ui$ButtonRenderer$$.prototype;
$a$$.$getAriaRole$ = $JSCompiler_returnArg$$("button");
$a$$.$updateAriaState$ = function $$a$$$$updateAriaState$$($element$$84$$, $state$$8$$, $enable$$5$$) {
  if($goog$userAgent$GECKO$$) {
    $state$$8$$ == 16 ? $goog$dom$a11y$setState$$($element$$84$$, "pressed", $enable$$5$$) : $goog$ui$ButtonRenderer$$.$superClass_$.$updateAriaState$.call(this, $element$$84$$, $state$$8$$, $enable$$5$$)
  }
};
$a$$.$createDom$ = function $$a$$$$createDom$$($button$$1$$) {
  var $element$$85$$ = $goog$ui$ButtonRenderer$$.$superClass_$.$createDom$.call(this, $button$$1$$), $tooltip_value$$34$$ = $button$$1$$.$getTooltip$();
  $tooltip_value$$34$$ && this.$setTooltip$($element$$85$$, $tooltip_value$$34$$);
  ($tooltip_value$$34$$ = $button$$1$$.$getValue$()) && this.$setValue$($element$$85$$, $tooltip_value$$34$$);
  $button$$1$$.$supportedStates_$ & 16 && this.$updateAriaState$($element$$85$$, 16, false);
  return $element$$85$$
};
$a$$.$getValue$ = $goog$nullFunction$$;
$a$$.$setValue$ = $goog$nullFunction$$;
$a$$.$getTooltip$ = function $$a$$$$getTooltip$$($element$$87$$) {
  return $element$$87$$.title
};
$a$$.$setTooltip$ = function $$a$$$$setTooltip$$($element$$88$$, $tooltip$$1$$) {
  if($element$$88$$) {
    $element$$88$$.title = $tooltip$$1$$ || ""
  }
};
$a$$.$setCollapsed$ = function $$a$$$$setCollapsed$$($button$$3$$, $sides$$) {
  var $isRtl$$ = $JSCompiler_StaticMethods_isRightToLeft$$($button$$3$$), $collapseLeftClassName$$ = this.$getCssClass$() + "-collapse-left", $collapseRightClassName$$ = this.$getCssClass$() + "-collapse-right";
  $button$$3$$.$enableClassName$($isRtl$$ ? $collapseRightClassName$$ : $collapseLeftClassName$$, !!($sides$$ & $goog$ui$Button$Side$START$$));
  $button$$3$$.$enableClassName$($isRtl$$ ? $collapseLeftClassName$$ : $collapseRightClassName$$, !!($sides$$ & $goog$ui$Button$Side$END$$))
};
$a$$.$getCssClass$ = $JSCompiler_returnArg$$("goog-button");
// Input 45
function $goog$ui$Control$$($content$$3$$, $JSCompiler_temp$$15_componentCtor$$inline_315_opt_renderer$$, $opt_domHelper$$1$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$1$$);
  if(!($JSCompiler_temp$$15_componentCtor$$inline_315_opt_renderer$$ = $JSCompiler_temp$$15_componentCtor$$inline_315_opt_renderer$$)) {
    $JSCompiler_temp$$15_componentCtor$$inline_315_opt_renderer$$ = this.constructor;
    for(var $key$$inline_316_rendererCtor$$inline_317$$;$JSCompiler_temp$$15_componentCtor$$inline_315_opt_renderer$$;) {
      $key$$inline_316_rendererCtor$$inline_317$$ = $goog$getUid$$($JSCompiler_temp$$15_componentCtor$$inline_315_opt_renderer$$);
      if($key$$inline_316_rendererCtor$$inline_317$$ = $goog$ui$registry$defaultRenderers_$$[$key$$inline_316_rendererCtor$$inline_317$$]) {
        break
      }
      $JSCompiler_temp$$15_componentCtor$$inline_315_opt_renderer$$ = $JSCompiler_temp$$15_componentCtor$$inline_315_opt_renderer$$.$superClass_$ ? $JSCompiler_temp$$15_componentCtor$$inline_315_opt_renderer$$.$superClass_$.constructor : null
    }
    $JSCompiler_temp$$15_componentCtor$$inline_315_opt_renderer$$ = $key$$inline_316_rendererCtor$$inline_317$$ ? $goog$isFunction$$($key$$inline_316_rendererCtor$$inline_317$$.$getInstance$) ? $key$$inline_316_rendererCtor$$inline_317$$.$getInstance$() : new $key$$inline_316_rendererCtor$$inline_317$$ : null
  }
  this.$renderer_$ = $JSCompiler_temp$$15_componentCtor$$inline_315_opt_renderer$$;
  this.$content_$ = $content$$3$$
}
$goog$inherits$$($goog$ui$Control$$, $goog$ui$Component$$);
$a$$ = $goog$ui$Control$$.prototype;
$a$$.$content_$ = null;
$a$$.$state_$ = 0;
$a$$.$supportedStates_$ = 39;
$a$$.$autoStates_$ = 255;
$a$$.$statesWithTransitionEvents_$ = 0;
$a$$.$visible_$ = true;
$a$$.$extraClassNames_$ = null;
$a$$.$handleMouseEvents_$ = true;
$a$$.$allowTextSelection_$ = false;
function $JSCompiler_StaticMethods_setHandleMouseEvents$$($JSCompiler_StaticMethods_setHandleMouseEvents$self$$, $enable$$6$$) {
  $JSCompiler_StaticMethods_setHandleMouseEvents$self$$.$inDocument_$ && $enable$$6$$ != $JSCompiler_StaticMethods_setHandleMouseEvents$self$$.$handleMouseEvents_$ && $JSCompiler_StaticMethods_enableMouseEventHandling_$$($JSCompiler_StaticMethods_setHandleMouseEvents$self$$, $enable$$6$$);
  $JSCompiler_StaticMethods_setHandleMouseEvents$self$$.$handleMouseEvents_$ = $enable$$6$$
}
$a$$.$getKeyEventTarget$ = function $$a$$$$getKeyEventTarget$$() {
  return this.$renderer_$.$getKeyEventTarget$(this)
};
$a$$.$getKeyHandler$ = function $$a$$$$getKeyHandler$$() {
  return this.$keyHandler_$ || (this.$keyHandler_$ = new $goog$events$KeyHandler$$)
};
$a$$.$enableClassName$ = function $$a$$$$enableClassName$$($className$$21$$, $enable$$7$$) {
  if($enable$$7$$) {
    if($className$$21$$) {
      if(this.$extraClassNames_$) {
        $goog$array$contains$$(this.$extraClassNames_$, $className$$21$$) || this.$extraClassNames_$.push($className$$21$$)
      }else {
        this.$extraClassNames_$ = [$className$$21$$]
      }
      this.$renderer_$.$enableClassName$(this, $className$$21$$, true)
    }
  }else {
    if($className$$21$$ && this.$extraClassNames_$) {
      $goog$array$remove$$(this.$extraClassNames_$, $className$$21$$);
      if(this.$extraClassNames_$.length == 0) {
        this.$extraClassNames_$ = null
      }
      this.$renderer_$.$enableClassName$(this, $className$$21$$, false)
    }
  }
};
$a$$.$createDom$ = function $$a$$$$createDom$$() {
  var $element$$89$$ = this.$renderer_$.$createDom$(this);
  this.$element_$ = $element$$89$$;
  if($goog$userAgent$GECKO$$) {
    var $ariaRole$$inline_362$$ = this.$renderer_$.$getAriaRole$();
    $ariaRole$$inline_362$$ && $goog$dom$a11y$setRole$$($element$$89$$, $ariaRole$$inline_362$$)
  }
  this.$allowTextSelection_$ || this.$renderer_$.$setAllowTextSelection$($element$$89$$, false);
  this.$visible_$ || this.$renderer_$.$setVisible$($element$$89$$, false)
};
$a$$.$getContentElement$ = function $$a$$$$getContentElement$$() {
  return this.$renderer_$.$getContentElement$(this.$getElement$())
};
$a$$.$enterDocument$ = function $$a$$$$enterDocument$$() {
  $goog$ui$Control$$.$superClass_$.$enterDocument$.call(this);
  this.$renderer_$.$initializeDom$(this);
  if(this.$supportedStates_$ & -2) {
    this.$handleMouseEvents_$ && $JSCompiler_StaticMethods_enableMouseEventHandling_$$(this, true);
    if(this.$supportedStates_$ & 32) {
      var $keyTarget$$2$$ = this.$getKeyEventTarget$();
      if($keyTarget$$2$$) {
        var $keyHandler$$ = this.$getKeyHandler$();
        $JSCompiler_StaticMethods_attach$$($keyHandler$$, $keyTarget$$2$$);
        $JSCompiler_StaticMethods_getHandler$$(this).$listen$($keyHandler$$, "key", this.$handleKeyEvent$).$listen$($keyTarget$$2$$, "focus", this.$handleFocus$).$listen$($keyTarget$$2$$, "blur", this.$handleBlur$)
      }
    }
  }
};
function $JSCompiler_StaticMethods_enableMouseEventHandling_$$($JSCompiler_StaticMethods_enableMouseEventHandling_$self$$, $enable$$8$$) {
  var $handler$$5$$ = $JSCompiler_StaticMethods_getHandler$$($JSCompiler_StaticMethods_enableMouseEventHandling_$self$$), $element$$92$$ = $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$getElement$();
  if($enable$$8$$) {
    $handler$$5$$.$listen$($element$$92$$, "mouseover", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseOver$).$listen$($element$$92$$, "mousedown", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseDown$).$listen$($element$$92$$, "mouseup", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseUp$).$listen$($element$$92$$, "mouseout", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseOut$);
    $goog$userAgent$IE$$ && $handler$$5$$.$listen$($element$$92$$, "dblclick", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleDblClick$)
  }else {
    $handler$$5$$.$unlisten$($element$$92$$, "mouseover", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseOver$).$unlisten$($element$$92$$, "mousedown", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseDown$).$unlisten$($element$$92$$, "mouseup", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseUp$).$unlisten$($element$$92$$, "mouseout", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseOut$);
    $goog$userAgent$IE$$ && $handler$$5$$.$unlisten$($element$$92$$, "dblclick", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleDblClick$)
  }
}
$a$$.$exitDocument$ = function $$a$$$$exitDocument$$() {
  $goog$ui$Control$$.$superClass_$.$exitDocument$.call(this);
  this.$keyHandler_$ && this.$keyHandler_$.detach();
  this.$visible_$ && this.$isEnabled$() && this.$renderer_$.$setFocusable$(this, false)
};
$a$$.$disposeInternal$ = function $$a$$$$disposeInternal$$() {
  $goog$ui$Control$$.$superClass_$.$disposeInternal$.call(this);
  if(this.$keyHandler_$) {
    this.$keyHandler_$.$dispose$();
    delete this.$keyHandler_$
  }
  delete this.$renderer_$;
  this.$extraClassNames_$ = this.$content_$ = null
};
$a$$.$setContent$ = function $$a$$$$setContent$$($content$$4$$) {
  this.$renderer_$.$setContent$(this.$getElement$(), $content$$4$$);
  this.$content_$ = $content$$4$$
};
function $JSCompiler_StaticMethods_getCaptionInternal$$($JSCompiler_StaticMethods_getCaptionInternal$self$$, $getChildElementContent$$) {
  var $caption_content$$6$$ = $JSCompiler_StaticMethods_getCaptionInternal$self$$.$content_$;
  if(!$caption_content$$6$$ || $goog$isString$$($caption_content$$6$$)) {
    return $caption_content$$6$$
  }
  return($caption_content$$6$$ = $goog$isArray$$($caption_content$$6$$) ? $goog$array$map$$($caption_content$$6$$, $getChildElementContent$$).join("") : $goog$dom$getTextContent$$($caption_content$$6$$)) && $goog$string$trim$$($caption_content$$6$$)
}
$a$$.$getCaption$ = function $$a$$$$getCaption$$() {
  return $JSCompiler_StaticMethods_getCaptionInternal$$(this, $goog$dom$getTextContent$$)
};
$a$$.$setRightToLeft$ = function $$a$$$$setRightToLeft$$($rightToLeft$$3$$) {
  $goog$ui$Control$$.$superClass_$.$setRightToLeft$.call(this, $rightToLeft$$3$$);
  var $element$$93$$ = this.$getElement$();
  $element$$93$$ && this.$renderer_$.$setRightToLeft$($element$$93$$, $rightToLeft$$3$$)
};
$a$$.$setAllowTextSelection$ = function $$a$$$$setAllowTextSelection$$($allow$$1$$) {
  this.$allowTextSelection_$ = $allow$$1$$;
  var $element$$94$$ = this.$getElement$();
  $element$$94$$ && this.$renderer_$.$setAllowTextSelection$($element$$94$$, $allow$$1$$)
};
$a$$.$setVisible$ = function $$a$$$$setVisible$$($visible$$1$$, $opt_force$$) {
  if($opt_force$$ || this.$visible_$ != $visible$$1$$ && this.dispatchEvent($visible$$1$$ ? "show" : "hide")) {
    var $element$$95$$ = this.$getElement$();
    $element$$95$$ && this.$renderer_$.$setVisible$($element$$95$$, $visible$$1$$);
    this.$isEnabled$() && this.$renderer_$.$setFocusable$(this, $visible$$1$$);
    this.$visible_$ = $visible$$1$$;
    return true
  }
  return false
};
$a$$.$isEnabled$ = function $$a$$$$isEnabled$$() {
  return!!!(this.$state_$ & 1)
};
$a$$.$setEnabled$ = function $$a$$$$setEnabled$$($enable$$9$$) {
  var $parent$$inline_373$$ = this.$parent_$;
  if(!($parent$$inline_373$$ && typeof $parent$$inline_373$$.$isEnabled$ == "function" && !$parent$$inline_373$$.$isEnabled$()) && $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 1, !$enable$$9$$)) {
    if(!$enable$$9$$) {
      this.setActive(false);
      this.$setHighlighted$(false)
    }
    this.$visible_$ && this.$renderer_$.$setFocusable$(this, $enable$$9$$);
    this.$setState$(1, !$enable$$9$$)
  }
};
$a$$.$setHighlighted$ = function $$a$$$$setHighlighted$$($highlight$$) {
  $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 2, $highlight$$) && this.$setState$(2, $highlight$$)
};
$a$$.setActive = function $$a$$$setActive$($active$$) {
  $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 4, $active$$) && this.$setState$(4, $active$$)
};
$a$$.$setSelected$ = function $$a$$$$setSelected$$($select$$) {
  $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 8, $select$$) && this.$setState$(8, $select$$)
};
$a$$.$setOpen$ = function $$a$$$$setOpen$$($open$$) {
  $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 64, $open$$) && this.$setState$(64, $open$$)
};
$a$$.$setState$ = function $$a$$$$setState$$($state$$10$$, $enable$$10$$) {
  if(this.$supportedStates_$ & $state$$10$$ && $enable$$10$$ != !!(this.$state_$ & $state$$10$$)) {
    this.$renderer_$.$setState$(this, $state$$10$$, $enable$$10$$);
    this.$state_$ = $enable$$10$$ ? this.$state_$ | $state$$10$$ : this.$state_$ & ~$state$$10$$
  }
};
function $JSCompiler_StaticMethods_setSupportedState$$($JSCompiler_StaticMethods_setSupportedState$self$$, $state$$13$$, $support$$) {
  if($JSCompiler_StaticMethods_setSupportedState$self$$.$inDocument_$ && $JSCompiler_StaticMethods_setSupportedState$self$$.$state_$ & $state$$13$$ && !$support$$) {
    throw Error("Component already rendered");
  }
  !$support$$ && $JSCompiler_StaticMethods_setSupportedState$self$$.$state_$ & $state$$13$$ && $JSCompiler_StaticMethods_setSupportedState$self$$.$setState$($state$$13$$, false);
  $JSCompiler_StaticMethods_setSupportedState$self$$.$supportedStates_$ = $support$$ ? $JSCompiler_StaticMethods_setSupportedState$self$$.$supportedStates_$ | $state$$13$$ : $JSCompiler_StaticMethods_setSupportedState$self$$.$supportedStates_$ & ~$state$$13$$
}
function $JSCompiler_StaticMethods_isAutoState$$($JSCompiler_StaticMethods_isAutoState$self$$, $state$$14$$) {
  return!!($JSCompiler_StaticMethods_isAutoState$self$$.$autoStates_$ & $state$$14$$) && !!($JSCompiler_StaticMethods_isAutoState$self$$.$supportedStates_$ & $state$$14$$)
}
function $JSCompiler_StaticMethods_isTransitionAllowed$$($JSCompiler_StaticMethods_isTransitionAllowed$self$$, $state$$16$$, $enable$$13$$) {
  return!!($JSCompiler_StaticMethods_isTransitionAllowed$self$$.$supportedStates_$ & $state$$16$$) && !!($JSCompiler_StaticMethods_isTransitionAllowed$self$$.$state_$ & $state$$16$$) != $enable$$13$$ && (!($JSCompiler_StaticMethods_isTransitionAllowed$self$$.$statesWithTransitionEvents_$ & $state$$16$$) || $JSCompiler_StaticMethods_isTransitionAllowed$self$$.dispatchEvent($goog$ui$Component$getStateTransitionEvent$$($state$$16$$, $enable$$13$$))) && !$JSCompiler_StaticMethods_isTransitionAllowed$self$$.$disposed_$
}
$a$$.$handleMouseOver$ = function $$a$$$$handleMouseOver$$($e$$14$$) {
  !$goog$ui$Control$isMouseEventWithinElement_$$($e$$14$$, this.$getElement$()) && this.dispatchEvent("enter") && this.$isEnabled$() && $JSCompiler_StaticMethods_isAutoState$$(this, 2) && this.$setHighlighted$(true)
};
$a$$.$handleMouseOut$ = function $$a$$$$handleMouseOut$$($e$$15$$) {
  if(!$goog$ui$Control$isMouseEventWithinElement_$$($e$$15$$, this.$getElement$()) && this.dispatchEvent("leave")) {
    $JSCompiler_StaticMethods_isAutoState$$(this, 4) && this.setActive(false);
    $JSCompiler_StaticMethods_isAutoState$$(this, 2) && this.$setHighlighted$(false)
  }
};
function $goog$ui$Control$isMouseEventWithinElement_$$($e$$16$$, $elem$$1$$) {
  return!!$e$$16$$.relatedTarget && $goog$dom$contains$$($elem$$1$$, $e$$16$$.relatedTarget)
}
$a$$.$handleMouseDown$ = function $$a$$$$handleMouseDown$$($e$$17$$) {
  if(this.$isEnabled$()) {
    $JSCompiler_StaticMethods_isAutoState$$(this, 2) && this.$setHighlighted$(true);
    if($JSCompiler_StaticMethods_isButton$$($e$$17$$, 0)) {
      $JSCompiler_StaticMethods_isAutoState$$(this, 4) && this.setActive(true);
      this.$renderer_$.$isFocusable$(this) && this.$getKeyEventTarget$().focus()
    }
  }
  !this.$allowTextSelection_$ && $JSCompiler_StaticMethods_isButton$$($e$$17$$, 0) && $e$$17$$.preventDefault()
};
$a$$.$handleMouseUp$ = function $$a$$$$handleMouseUp$$($e$$18$$) {
  if(this.$isEnabled$()) {
    $JSCompiler_StaticMethods_isAutoState$$(this, 2) && this.$setHighlighted$(true);
    this.$state_$ & 4 && this.$performActionInternal$($e$$18$$) && $JSCompiler_StaticMethods_isAutoState$$(this, 4) && this.setActive(false)
  }
};
$a$$.$handleDblClick$ = function $$a$$$$handleDblClick$$($e$$19$$) {
  this.$isEnabled$() && this.$performActionInternal$($e$$19$$)
};
$a$$.$performActionInternal$ = function $$a$$$$performActionInternal$$($e$$20$$) {
  if($JSCompiler_StaticMethods_isAutoState$$(this, 16)) {
    var $actionEvent_check$$inline_378$$ = !!!(this.$state_$ & 16);
    $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 16, $actionEvent_check$$inline_378$$) && this.$setState$(16, $actionEvent_check$$inline_378$$)
  }
  $JSCompiler_StaticMethods_isAutoState$$(this, 8) && this.$setSelected$(true);
  $JSCompiler_StaticMethods_isAutoState$$(this, 64) && this.$setOpen$(!!!(this.$state_$ & 64));
  $actionEvent_check$$inline_378$$ = new $goog$events$Event$$("action", this);
  if($e$$20$$) {
    for(var $properties$$1$$ = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], $property$$4$$, $i$$68$$ = 0;$property$$4$$ = $properties$$1$$[$i$$68$$];$i$$68$$++) {
      $actionEvent_check$$inline_378$$[$property$$4$$] = $e$$20$$[$property$$4$$]
    }
  }
  return this.dispatchEvent($actionEvent_check$$inline_378$$)
};
$a$$.$handleFocus$ = function $$a$$$$handleFocus$$() {
  $JSCompiler_StaticMethods_isAutoState$$(this, 32) && $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 32, true) && this.$setState$(32, true)
};
$a$$.$handleBlur$ = function $$a$$$$handleBlur$$() {
  $JSCompiler_StaticMethods_isAutoState$$(this, 4) && this.setActive(false);
  $JSCompiler_StaticMethods_isAutoState$$(this, 32) && $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 32, false) && this.$setState$(32, false)
};
$a$$.$handleKeyEvent$ = function $$a$$$$handleKeyEvent$$($e$$23$$) {
  if(this.$visible_$ && this.$isEnabled$() && this.$handleKeyEventInternal$($e$$23$$)) {
    $e$$23$$.preventDefault();
    $e$$23$$.stopPropagation();
    return true
  }
  return false
};
$a$$.$handleKeyEventInternal$ = function $$a$$$$handleKeyEventInternal$$($e$$24$$) {
  return $e$$24$$.keyCode == 13 && this.$performActionInternal$($e$$24$$)
};
if(!$goog$isFunction$$($goog$ui$Control$$)) {
  throw Error("Invalid component class " + $goog$ui$Control$$);
}
if(!$goog$isFunction$$($goog$ui$ControlRenderer$$)) {
  throw Error("Invalid renderer class " + $goog$ui$ControlRenderer$$);
}
var $key$$inline_395$$ = $goog$getUid$$($goog$ui$Control$$);
$goog$ui$registry$defaultRenderers_$$[$key$$inline_395$$] = $goog$ui$ControlRenderer$$;
$goog$ui$registry$setDecoratorByClassName$$("goog-control", function() {
  return new $goog$ui$Control$$(null)
});
// Input 46
function $goog$ui$CustomButtonRenderer$$() {
}
$goog$inherits$$($goog$ui$CustomButtonRenderer$$, $goog$ui$ButtonRenderer$$);
$goog$addSingletonGetter$$($goog$ui$CustomButtonRenderer$$);
$goog$ui$CustomButtonRenderer$$.prototype.$createDom$ = function $$goog$ui$CustomButtonRenderer$$$$$createDom$$($button$$4$$) {
  var $attributes$$1$$ = {"class":"goog-inline-block " + this.$getClassNames$($button$$4$$).join(" "), title:$button$$4$$.$getTooltip$() || ""};
  return $button$$4$$.$getDomHelper$().$createDom$("div", $attributes$$1$$, this.$createButton$($button$$4$$.$content_$, $button$$4$$.$getDomHelper$()))
};
$goog$ui$CustomButtonRenderer$$.prototype.$getContentElement$ = function $$goog$ui$CustomButtonRenderer$$$$$getContentElement$$($element$$96$$) {
  return $element$$96$$ && $element$$96$$.firstChild.firstChild
};
$goog$ui$CustomButtonRenderer$$.prototype.$createButton$ = function $$goog$ui$CustomButtonRenderer$$$$$createButton$$($content$$7$$, $dom$$1$$) {
  return $dom$$1$$.$createDom$("div", "goog-inline-block " + (this.$getCssClass$() + "-outer-box"), $dom$$1$$.$createDom$("div", "goog-inline-block " + (this.$getCssClass$() + "-inner-box"), $content$$7$$))
};
$goog$ui$CustomButtonRenderer$$.prototype.$getCssClass$ = $JSCompiler_returnArg$$("goog-custom-button");
// Input 47
function $goog$ui$MenuItemRenderer$$() {
  this.$classNameCache_$ = []
}
$goog$inherits$$($goog$ui$MenuItemRenderer$$, $goog$ui$ControlRenderer$$);
$goog$addSingletonGetter$$($goog$ui$MenuItemRenderer$$);
function $JSCompiler_StaticMethods_getCompositeCssClass_$$($JSCompiler_StaticMethods_getCompositeCssClass_$self$$, $index$$45$$) {
  var $result$$6$$ = $JSCompiler_StaticMethods_getCompositeCssClass_$self$$.$classNameCache_$[$index$$45$$];
  if(!$result$$6$$) {
    switch($index$$45$$) {
      case 0:
        $result$$6$$ = $JSCompiler_StaticMethods_getCompositeCssClass_$self$$.$getCssClass$() + "-highlight";
        break;
      case 1:
        $result$$6$$ = $JSCompiler_StaticMethods_getCompositeCssClass_$self$$.$getCssClass$() + "-checkbox";
        break;
      case 2:
        $result$$6$$ = $JSCompiler_StaticMethods_getCompositeCssClass_$self$$.$getCssClass$() + "-content";
        break
    }
    $JSCompiler_StaticMethods_getCompositeCssClass_$self$$.$classNameCache_$[$index$$45$$] = $result$$6$$
  }
  return $result$$6$$
}
$a$$ = $goog$ui$MenuItemRenderer$$.prototype;
$a$$.$getAriaRole$ = $JSCompiler_returnArg$$("menuitem");
$a$$.$createDom$ = function $$a$$$$createDom$$($item$$) {
  var $element$$101$$ = $item$$.$getDomHelper$().$createDom$("div", this.$getClassNames$($item$$).join(" "), $JSCompiler_StaticMethods_createContent$$(this, $item$$.$content_$, $item$$.$getDomHelper$()));
  $JSCompiler_StaticMethods_setEnableCheckBoxStructure$$(this, $item$$, $element$$101$$, !!($item$$.$supportedStates_$ & 8) || !!($item$$.$supportedStates_$ & 16));
  return $element$$101$$
};
$a$$.$getContentElement$ = function $$a$$$$getContentElement$$($element$$102$$) {
  return $element$$102$$ && $element$$102$$.firstChild
};
$a$$.$setContent$ = function $$a$$$$setContent$$($element$$104$$, $content$$8$$) {
  var $contentElement$$1$$ = this.$getContentElement$($element$$104$$), $checkBoxElement$$ = $JSCompiler_StaticMethods_hasCheckBoxStructure$$(this, $element$$104$$) ? $contentElement$$1$$.firstChild : null;
  $goog$ui$MenuItemRenderer$$.$superClass_$.$setContent$.call(this, $element$$104$$, $content$$8$$);
  if($checkBoxElement$$ && !$JSCompiler_StaticMethods_hasCheckBoxStructure$$(this, $element$$104$$)) {
    $contentElement$$1$$.insertBefore($checkBoxElement$$, $contentElement$$1$$.firstChild || null)
  }
};
function $JSCompiler_StaticMethods_createContent$$($JSCompiler_StaticMethods_createContent$self_contentClassName$$1$$, $content$$9$$, $dom$$2$$) {
  $JSCompiler_StaticMethods_createContent$self_contentClassName$$1$$ = $JSCompiler_StaticMethods_getCompositeCssClass_$$($JSCompiler_StaticMethods_createContent$self_contentClassName$$1$$, 2);
  return $dom$$2$$.$createDom$("div", $JSCompiler_StaticMethods_createContent$self_contentClassName$$1$$, $content$$9$$)
}
$a$$.$setSelectable$ = function $$a$$$$setSelectable$$($item$$2$$, $element$$106$$, $selectable$$) {
  if($element$$106$$) {
    $goog$dom$a11y$setRole$$($element$$106$$, $selectable$$ ? "menuitemradio" : this.$getAriaRole$());
    $JSCompiler_StaticMethods_setEnableCheckBoxStructure$$(this, $item$$2$$, $element$$106$$, $selectable$$)
  }
};
function $JSCompiler_StaticMethods_hasCheckBoxStructure$$($JSCompiler_StaticMethods_hasCheckBoxStructure$self$$, $element$$108$$) {
  var $child$$17_contentElement$$2$$ = $JSCompiler_StaticMethods_hasCheckBoxStructure$self$$.$getContentElement$($element$$108$$);
  if($child$$17_contentElement$$2$$) {
    $child$$17_contentElement$$2$$ = $child$$17_contentElement$$2$$.firstChild;
    var $checkboxClassName$$ = $JSCompiler_StaticMethods_getCompositeCssClass_$$($JSCompiler_StaticMethods_hasCheckBoxStructure$self$$, 1);
    return!!$child$$17_contentElement$$2$$ && !!$child$$17_contentElement$$2$$.className && $child$$17_contentElement$$2$$.className.indexOf($checkboxClassName$$) != -1
  }
  return false
}
function $JSCompiler_StaticMethods_setEnableCheckBoxStructure$$($JSCompiler_StaticMethods_setEnableCheckBoxStructure$self_checkboxClassName$$1$$, $item$$4$$, $contentElement$$3_element$$109$$, $enable$$14$$) {
  if($enable$$14$$ != $JSCompiler_StaticMethods_hasCheckBoxStructure$$($JSCompiler_StaticMethods_setEnableCheckBoxStructure$self_checkboxClassName$$1$$, $contentElement$$3_element$$109$$)) {
    $enable$$14$$ ? $goog$dom$classes$add$$($contentElement$$3_element$$109$$, "goog-option") : $goog$dom$classes$remove$$($contentElement$$3_element$$109$$, "goog-option");
    $contentElement$$3_element$$109$$ = $JSCompiler_StaticMethods_setEnableCheckBoxStructure$self_checkboxClassName$$1$$.$getContentElement$($contentElement$$3_element$$109$$);
    if($enable$$14$$) {
      $JSCompiler_StaticMethods_setEnableCheckBoxStructure$self_checkboxClassName$$1$$ = $JSCompiler_StaticMethods_getCompositeCssClass_$$($JSCompiler_StaticMethods_setEnableCheckBoxStructure$self_checkboxClassName$$1$$, 1);
      $contentElement$$3_element$$109$$.insertBefore($item$$4$$.$getDomHelper$().$createDom$("div", $JSCompiler_StaticMethods_setEnableCheckBoxStructure$self_checkboxClassName$$1$$), $contentElement$$3_element$$109$$.firstChild || null)
    }else {
      $contentElement$$3_element$$109$$.removeChild($contentElement$$3_element$$109$$.firstChild)
    }
  }
}
$a$$.$getClassForState$ = function $$a$$$$getClassForState$$($state$$17$$) {
  switch($state$$17$$) {
    case 2:
      return $JSCompiler_StaticMethods_getCompositeCssClass_$$(this, 0);
    case 16:
    ;
    case 8:
      return"goog-option-selected";
    default:
      return $goog$ui$MenuItemRenderer$$.$superClass_$.$getClassForState$.call(this, $state$$17$$)
  }
};
$a$$.$getCssClass$ = $JSCompiler_returnArg$$("goog-menuitem");
// Input 48
function $goog$ui$MenuItem$$($content$$10$$, $opt_model$$, $opt_domHelper$$2$$, $opt_renderer$$1$$) {
  $goog$ui$Control$$.call(this, $content$$10$$, $opt_renderer$$1$$ || $goog$ui$MenuItemRenderer$$.$getInstance$(), $opt_domHelper$$2$$);
  this.$setValue$($opt_model$$)
}
$goog$inherits$$($goog$ui$MenuItem$$, $goog$ui$Control$$);
$goog$ui$MenuItem$$.prototype.$getValue$ = function $$goog$ui$MenuItem$$$$$getValue$$() {
  var $model$$ = this.$model_$;
  return $model$$ != null ? $model$$ : this.$getCaption$()
};
$goog$ui$MenuItem$$.prototype.$setValue$ = function $$goog$ui$MenuItem$$$$$setValue$$($value$$35$$) {
  this.$model_$ = $value$$35$$
};
$goog$ui$MenuItem$$.prototype.$setSelectable$ = function $$goog$ui$MenuItem$$$$$setSelectable$$($selectable$$1$$) {
  $JSCompiler_StaticMethods_setSupportedState$$(this, 8, $selectable$$1$$);
  this.$state_$ & 16 && !$selectable$$1$$ && $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 16, false) && this.$setState$(16, false);
  var $element$$110$$ = this.$getElement$();
  $element$$110$$ && this.$renderer_$.$setSelectable$(this, $element$$110$$, $selectable$$1$$)
};
$goog$ui$MenuItem$$.prototype.$getCaption$ = function $$goog$ui$MenuItem$$$$$getCaption$$() {
  return $JSCompiler_StaticMethods_getCaptionInternal$$(this, function($element$$112$$) {
    return $goog$array$contains$$($goog$dom$classes$get$$($element$$112$$), "goog-menuitem-accel") ? "" : $goog$dom$getTextContent$$($element$$112$$)
  })
};
$goog$ui$registry$setDecoratorByClassName$$("goog-menuitem", function() {
  return new $goog$ui$MenuItem$$(null)
});
// Input 49
function $goog$ui$MenuSeparatorRenderer$$() {
}
$goog$inherits$$($goog$ui$MenuSeparatorRenderer$$, $goog$ui$ControlRenderer$$);
$goog$addSingletonGetter$$($goog$ui$MenuSeparatorRenderer$$);
$goog$ui$MenuSeparatorRenderer$$.prototype.$createDom$ = function $$goog$ui$MenuSeparatorRenderer$$$$$createDom$$($separator$$) {
  return $separator$$.$getDomHelper$().$createDom$("div", this.$getCssClass$())
};
$goog$ui$MenuSeparatorRenderer$$.prototype.$setContent$ = $JSCompiler_emptyFn$$();
$goog$ui$MenuSeparatorRenderer$$.prototype.$getCssClass$ = $JSCompiler_returnArg$$("goog-menuseparator");
// Input 50
function $goog$ui$NativeButtonRenderer$$() {
}
$goog$inherits$$($goog$ui$NativeButtonRenderer$$, $goog$ui$ButtonRenderer$$);
$goog$addSingletonGetter$$($goog$ui$NativeButtonRenderer$$);
$a$$ = $goog$ui$NativeButtonRenderer$$.prototype;
$a$$.$getAriaRole$ = $JSCompiler_emptyFn$$();
$a$$.$createDom$ = function $$a$$$$createDom$$($button$$7$$) {
  $JSCompiler_StaticMethods_setHandleMouseEvents$$($button$$7$$, false);
  $button$$7$$.$autoStates_$ &= -256;
  $JSCompiler_StaticMethods_setSupportedState$$($button$$7$$, 32, false);
  return $button$$7$$.$getDomHelper$().$createDom$("button", {"class":this.$getClassNames$($button$$7$$).join(" "), disabled:!$button$$7$$.$isEnabled$(), title:$button$$7$$.$getTooltip$() || "", value:$button$$7$$.$getValue$() || ""}, $button$$7$$.$getCaption$() || "")
};
$a$$.$initializeDom$ = function $$a$$$$initializeDom$$($button$$9$$) {
  $JSCompiler_StaticMethods_getHandler$$($button$$9$$).$listen$($button$$9$$.$getElement$(), "click", $button$$9$$.$performActionInternal$)
};
$a$$.$setAllowTextSelection$ = $goog$nullFunction$$;
$a$$.$setRightToLeft$ = $goog$nullFunction$$;
$a$$.$isFocusable$ = function $$a$$$$isFocusable$$($button$$10$$) {
  return $button$$10$$.$isEnabled$()
};
$a$$.$setFocusable$ = $goog$nullFunction$$;
$a$$.$setState$ = function $$a$$$$setState$$($button$$11_element$$116$$, $state$$18$$, $enable$$15$$) {
  $goog$ui$NativeButtonRenderer$$.$superClass_$.$setState$.call(this, $button$$11_element$$116$$, $state$$18$$, $enable$$15$$);
  if(($button$$11_element$$116$$ = $button$$11_element$$116$$.$getElement$()) && $state$$18$$ == 1) {
    $button$$11_element$$116$$.disabled = $enable$$15$$
  }
};
$a$$.$getValue$ = function $$a$$$$getValue$$($element$$117$$) {
  return $element$$117$$.value
};
$a$$.$setValue$ = function $$a$$$$setValue$$($element$$118$$, $value$$36$$) {
  if($element$$118$$) {
    $element$$118$$.value = $value$$36$$
  }
};
$a$$.$updateAriaState$ = $goog$nullFunction$$;
// Input 51
function $goog$ui$Button$$($content$$12$$, $opt_renderer$$2$$, $opt_domHelper$$3$$) {
  $goog$ui$Control$$.call(this, $content$$12$$, $opt_renderer$$2$$ || $goog$ui$NativeButtonRenderer$$.$getInstance$(), $opt_domHelper$$3$$)
}
$goog$inherits$$($goog$ui$Button$$, $goog$ui$Control$$);
var $goog$ui$Button$Side$START$$ = 1, $goog$ui$Button$Side$END$$ = 2;
$a$$ = $goog$ui$Button$$.prototype;
$a$$.$getValue$ = $JSCompiler_get$$("$value_$");
$a$$.$setValue$ = function $$a$$$$setValue$$($value$$37$$) {
  this.$value_$ = $value$$37$$;
  this.$renderer_$.$setValue$(this.$getElement$(), $value$$37$$)
};
$a$$.$getTooltip$ = $JSCompiler_get$$("$tooltip_$");
$a$$.$setTooltip$ = function $$a$$$$setTooltip$$($tooltip$$2$$) {
  this.$tooltip_$ = $tooltip$$2$$;
  this.$renderer_$.$setTooltip$(this.$getElement$(), $tooltip$$2$$)
};
$a$$.$setCollapsed$ = function $$a$$$$setCollapsed$$($sides$$1$$) {
  this.$renderer_$.$setCollapsed$(this, $sides$$1$$)
};
$a$$.$disposeInternal$ = function $$a$$$$disposeInternal$$() {
  $goog$ui$Button$$.$superClass_$.$disposeInternal$.call(this);
  delete this.$value_$;
  delete this.$tooltip_$
};
$a$$.$enterDocument$ = function $$a$$$$enterDocument$$() {
  $goog$ui$Button$$.$superClass_$.$enterDocument$.call(this);
  if(this.$supportedStates_$ & 32) {
    var $keyTarget$$3$$ = this.$getKeyEventTarget$();
    $keyTarget$$3$$ && $JSCompiler_StaticMethods_getHandler$$(this).$listen$($keyTarget$$3$$, "keyup", this.$handleKeyEventInternal$)
  }
};
$a$$.$handleKeyEventInternal$ = function $$a$$$$handleKeyEventInternal$$($e$$25$$) {
  if($e$$25$$.keyCode == 13 && $e$$25$$.type == "key" || $e$$25$$.keyCode == 32 && $e$$25$$.type == "keyup") {
    return this.$performActionInternal$($e$$25$$)
  }
  return $e$$25$$.keyCode == 32
};
$goog$ui$registry$setDecoratorByClassName$$("goog-button", function() {
  return new $goog$ui$Button$$(null)
});
// Input 52
function $goog$ui$CustomButton$$($content$$13$$, $opt_renderer$$3$$, $opt_domHelper$$4$$) {
  $goog$ui$Button$$.call(this, $content$$13$$, $opt_renderer$$3$$ || $goog$ui$CustomButtonRenderer$$.$getInstance$(), $opt_domHelper$$4$$)
}
$goog$inherits$$($goog$ui$CustomButton$$, $goog$ui$Button$$);
$goog$ui$registry$setDecoratorByClassName$$("goog-custom-button", function() {
  return new $goog$ui$CustomButton$$(null)
});
// Input 53
$goog$exportPath_$$("drawButtons", function drawButtons() {
  function $logEvent$$() {
  }
  var $b1_disabledButton$$ = new $goog$ui$Button$$("Hello!");
  $JSCompiler_StaticMethods_render$$($b1_disabledButton$$, $goog$isString$$("b1") ? document.getElementById("b1") : "b1");
  $b1_disabledButton$$.$setTooltip$("I changed the tooltip.");
  $goog$events$listen$$($b1_disabledButton$$, "action", $logEvent$$);
  var $leftButton$$, $centerButton$$, $rightButton$$, $customButtons$$ = [new $goog$ui$CustomButton$$("Button"), new $goog$ui$CustomButton$$("Another Button"), $b1_disabledButton$$ = new $goog$ui$CustomButton$$("Disabled Button"), new $goog$ui$CustomButton$$("Yet Another Button"), $leftButton$$ = new $goog$ui$CustomButton$$("Left"), $centerButton$$ = new $goog$ui$CustomButton$$("Center"), $rightButton$$ = new $goog$ui$CustomButton$$("Right")];
  $b1_disabledButton$$.$setEnabled$(false);
  $leftButton$$.$setCollapsed$($goog$ui$Button$Side$END$$);
  $centerButton$$.$setCollapsed$(3);
  $rightButton$$.$setCollapsed$($goog$ui$Button$Side$START$$);
  $goog$array$forEach$$($customButtons$$, function($b$$20$$) {
    var $opt_parentElement$$inline_422$$ = $goog$isString$$("cb1") ? document.getElementById("cb1") : "cb1";
    $JSCompiler_StaticMethods_render_$$($b$$20$$, $opt_parentElement$$inline_422$$);
    $goog$events$listen$$($b$$20$$, "action", $logEvent$$)
  })
}, void 0);
// Input 54
function $goog$ui$Option$$($content$$14$$, $opt_model$$1$$, $opt_domHelper$$5$$) {
  $goog$ui$MenuItem$$.call(this, $content$$14$$, $opt_model$$1$$, $opt_domHelper$$5$$);
  this.$setSelectable$(true)
}
$goog$inherits$$($goog$ui$Option$$, $goog$ui$MenuItem$$);
$goog$ui$Option$$.prototype.$performActionInternal$ = function $$goog$ui$Option$$$$$performActionInternal$$() {
  return this.dispatchEvent("action")
};
$goog$ui$registry$setDecoratorByClassName$$("goog-option", function() {
  return new $goog$ui$Option$$(null)
});
// Input 55
function $goog$ui$SelectionModel$$($opt_items$$) {
  this.$items_$ = [];
  $JSCompiler_StaticMethods_addItems$$(this, $opt_items$$)
}
$goog$inherits$$($goog$ui$SelectionModel$$, $goog$events$EventTarget$$);
$a$$ = $goog$ui$SelectionModel$$.prototype;
$a$$.$selectedItem_$ = null;
$a$$.$selectionHandler_$ = null;
$a$$.$getItemCount$ = function $$a$$$$getItemCount$$() {
  return this.$items_$.length
};
$a$$.$getItemAt$ = function $$a$$$$getItemAt$$($index$$46$$) {
  return this.$items_$[$index$$46$$] || null
};
function $JSCompiler_StaticMethods_addItems$$($JSCompiler_StaticMethods_addItems$self$$, $items$$) {
  if($items$$) {
    $goog$array$forEach$$($items$$, function($item$$6$$) {
      $JSCompiler_StaticMethods_selectItem_$$(this, $item$$6$$, false)
    }, $JSCompiler_StaticMethods_addItems$self$$);
    $goog$array$extend$$($JSCompiler_StaticMethods_addItems$self$$.$items_$, $items$$)
  }
}
$a$$.$addItem$ = function $$a$$$$addItem$$($item$$7$$) {
  this.$addItemAt$($item$$7$$, this.$getItemCount$())
};
$a$$.$addItemAt$ = function $$a$$$$addItemAt$$($item$$8$$, $index$$47$$) {
  if($item$$8$$) {
    $JSCompiler_StaticMethods_selectItem_$$(this, $item$$8$$, false);
    $goog$array$splice$$(this.$items_$, $index$$47$$, 0, $item$$8$$)
  }
};
$a$$.$getSelectedItem$ = $JSCompiler_get$$("$selectedItem_$");
$a$$.$setSelectedItem$ = function $$a$$$$setSelectedItem$$($item$$10$$) {
  if($item$$10$$ != this.$selectedItem_$) {
    $JSCompiler_StaticMethods_selectItem_$$(this, this.$selectedItem_$, false);
    this.$selectedItem_$ = $item$$10$$;
    $JSCompiler_StaticMethods_selectItem_$$(this, $item$$10$$, true)
  }
  this.dispatchEvent("select")
};
$a$$.$getSelectedIndex$ = function $$a$$$$getSelectedIndex$$() {
  return this.$selectedItem_$ ? $goog$array$indexOf$$(this.$items_$, this.$selectedItem_$) : -1
};
$a$$.clear = function $$a$$$clear$() {
  var $arr$$inline_440$$ = this.$items_$;
  if(!$goog$isArray$$($arr$$inline_440$$)) {
    for(var $i$$inline_441$$ = $arr$$inline_440$$.length - 1;$i$$inline_441$$ >= 0;$i$$inline_441$$--) {
      delete $arr$$inline_440$$[$i$$inline_441$$]
    }
  }
  $arr$$inline_440$$.length = 0;
  this.$selectedItem_$ = null
};
$a$$.$disposeInternal$ = function $$a$$$$disposeInternal$$() {
  $goog$ui$SelectionModel$$.$superClass_$.$disposeInternal$.call(this);
  delete this.$items_$;
  this.$selectedItem_$ = null
};
function $JSCompiler_StaticMethods_selectItem_$$($JSCompiler_StaticMethods_selectItem_$self$$, $item$$11$$, $select$$1$$) {
  if($item$$11$$) {
    if(typeof $JSCompiler_StaticMethods_selectItem_$self$$.$selectionHandler_$ == "function") {
      $JSCompiler_StaticMethods_selectItem_$self$$.$selectionHandler_$($item$$11$$, $select$$1$$)
    }else {
      typeof $item$$11$$.$setSelected$ == "function" && $item$$11$$.$setSelected$($select$$1$$)
    }
  }
}
;
// Input 56
function $goog$ui$Separator$$($opt_renderer$$4$$, $opt_domHelper$$6$$) {
  $goog$ui$Control$$.call(this, null, $opt_renderer$$4$$ || $goog$ui$MenuSeparatorRenderer$$.$getInstance$(), $opt_domHelper$$6$$);
  $JSCompiler_StaticMethods_setSupportedState$$(this, 1, false);
  $JSCompiler_StaticMethods_setSupportedState$$(this, 2, false);
  $JSCompiler_StaticMethods_setSupportedState$$(this, 4, false);
  $JSCompiler_StaticMethods_setSupportedState$$(this, 32, false);
  this.$state_$ = 1
}
$goog$inherits$$($goog$ui$Separator$$, $goog$ui$Control$$);
$goog$ui$Separator$$.prototype.$enterDocument$ = function $$goog$ui$Separator$$$$$enterDocument$$() {
  $goog$ui$Separator$$.$superClass_$.$enterDocument$.call(this);
  $goog$dom$a11y$setRole$$(this.$getElement$(), "separator")
};
$goog$ui$registry$setDecoratorByClassName$$("goog-menuseparator", function() {
  return new $goog$ui$Separator$$
});
// Input 57
function $goog$ui$ContainerRenderer$$() {
}
$goog$addSingletonGetter$$($goog$ui$ContainerRenderer$$);
$a$$ = $goog$ui$ContainerRenderer$$.prototype;
$a$$.$getAriaRole$ = $JSCompiler_emptyFn$$();
function $JSCompiler_StaticMethods_enableTabIndex$$($JSCompiler_StaticMethods_enableTabIndex$self$$, $element$$120$$, $enable$$16$$) {
  if($element$$120$$) {
    $element$$120$$.tabIndex = $enable$$16$$ ? 0 : -1
  }
}
$a$$.$createDom$ = function $$a$$$$createDom$$($container$$1$$) {
  return $container$$1$$.$getDomHelper$().$createDom$("div", this.$getClassNames$($container$$1$$).join(" "))
};
$a$$.$getContentElement$ = function $$a$$$$getContentElement$$($element$$121$$) {
  return $element$$121$$
};
$a$$.$initializeDom$ = function $$a$$$$initializeDom$$($container$$5_elem$$2$$) {
  $container$$5_elem$$2$$ = $container$$5_elem$$2$$.$getElement$();
  $goog$style$setUnselectable$$($container$$5_elem$$2$$, true, $goog$userAgent$GECKO$$);
  if($goog$userAgent$IE$$) {
    $container$$5_elem$$2$$.hideFocus = true
  }
  var $ariaRole$$1$$ = this.$getAriaRole$();
  $ariaRole$$1$$ && $goog$dom$a11y$setRole$$($container$$5_elem$$2$$, $ariaRole$$1$$)
};
$a$$.$getKeyEventTarget$ = function $$a$$$$getKeyEventTarget$$($container$$6$$) {
  return $container$$6$$.$getElement$()
};
$a$$.$getCssClass$ = $JSCompiler_returnArg$$("goog-container");
$a$$.$getClassNames$ = function $$a$$$$getClassNames$$($container$$7$$) {
  var $baseClass$$3$$ = this.$getCssClass$(), $classNames$$6$$ = [$baseClass$$3$$, $container$$7$$.$orientation_$ == $goog$ui$Container$Orientation$HORIZONTAL$$ ? $baseClass$$3$$ + "-horizontal" : $baseClass$$3$$ + "-vertical"];
  $container$$7$$.$isEnabled$() || $classNames$$6$$.push($baseClass$$3$$ + "-disabled");
  return $classNames$$6$$
};
$a$$.$getDefaultOrientation$ = function $$a$$$$getDefaultOrientation$$() {
  return $goog$ui$Container$Orientation$VERTICAL$$
};
// Input 58
function $goog$ui$Container$$($opt_orientation$$, $opt_renderer$$5$$, $opt_domHelper$$7$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$7$$);
  this.$renderer_$ = $opt_renderer$$5$$ || $goog$ui$ContainerRenderer$$.$getInstance$();
  this.$orientation_$ = $opt_orientation$$ || this.$renderer_$.$getDefaultOrientation$()
}
$goog$inherits$$($goog$ui$Container$$, $goog$ui$Component$$);
var $goog$ui$Container$Orientation$HORIZONTAL$$ = "horizontal", $goog$ui$Container$Orientation$VERTICAL$$ = "vertical";
$a$$ = $goog$ui$Container$$.prototype;
$a$$.$keyEventTarget_$ = null;
$a$$.$keyHandler_$ = null;
$a$$.$renderer_$ = null;
$a$$.$orientation_$ = null;
$a$$.$visible_$ = true;
$a$$.$enabled_$ = true;
$a$$.$focusable_$ = true;
$a$$.$highlightedIndex_$ = -1;
$a$$.$openItem_$ = null;
$a$$.$mouseButtonPressed_$ = false;
$a$$.$allowFocusableChildren_$ = false;
$a$$.$openFollowsHighlight_$ = true;
$a$$.$childElementIdMap_$ = null;
$a$$.$getKeyEventTarget$ = function $$a$$$$getKeyEventTarget$$() {
  return this.$keyEventTarget_$ || this.$renderer_$.$getKeyEventTarget$(this)
};
$a$$.$getKeyHandler$ = function $$a$$$$getKeyHandler$$() {
  return this.$keyHandler_$ || (this.$keyHandler_$ = new $goog$events$KeyHandler$$(this.$getKeyEventTarget$()))
};
$a$$.$createDom$ = function $$a$$$$createDom$$() {
  this.$element_$ = this.$renderer_$.$createDom$(this)
};
$a$$.$getContentElement$ = function $$a$$$$getContentElement$$() {
  return this.$renderer_$.$getContentElement$(this.$getElement$())
};
$a$$.$enterDocument$ = function $$a$$$$enterDocument$$() {
  $goog$ui$Container$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$19$$) {
    $child$$19$$.$inDocument_$ && $JSCompiler_StaticMethods_registerChildId_$$(this, $child$$19$$)
  }, this);
  var $elem$$3$$ = this.$getElement$();
  this.$renderer_$.$initializeDom$(this);
  this.$setVisible$(this.$visible_$, true);
  $JSCompiler_StaticMethods_getHandler$$(this).$listen$(this, "enter", this.$handleEnterItem$).$listen$(this, "highlight", this.$handleHighlightItem$).$listen$(this, "unhighlight", this.$handleUnHighlightItem$).$listen$(this, "open", this.$handleOpenItem$).$listen$(this, "close", this.$handleCloseItem$).$listen$($elem$$3$$, "mousedown", this.$handleMouseDown$).$listen$($goog$dom$getOwnerDocument$$($elem$$3$$), "mouseup", this.$handleDocumentMouseUp$).$listen$($elem$$3$$, ["mousedown", "mouseup", 
  "mouseover", "mouseout"], this.$handleChildMouseEvents$);
  this.$isFocusable$() && $JSCompiler_StaticMethods_enableFocusHandling_$$(this, true)
};
function $JSCompiler_StaticMethods_enableFocusHandling_$$($JSCompiler_StaticMethods_enableFocusHandling_$self$$, $enable$$17$$) {
  var $handler$$7$$ = $JSCompiler_StaticMethods_getHandler$$($JSCompiler_StaticMethods_enableFocusHandling_$self$$), $keyTarget$$4$$ = $JSCompiler_StaticMethods_enableFocusHandling_$self$$.$getKeyEventTarget$();
  $enable$$17$$ ? $handler$$7$$.$listen$($keyTarget$$4$$, "focus", $JSCompiler_StaticMethods_enableFocusHandling_$self$$.$handleFocus$).$listen$($keyTarget$$4$$, "blur", $JSCompiler_StaticMethods_enableFocusHandling_$self$$.$handleBlur$).$listen$($JSCompiler_StaticMethods_enableFocusHandling_$self$$.$getKeyHandler$(), "key", $JSCompiler_StaticMethods_enableFocusHandling_$self$$.$handleKeyEvent$) : $handler$$7$$.$unlisten$($keyTarget$$4$$, "focus", $JSCompiler_StaticMethods_enableFocusHandling_$self$$.$handleFocus$).$unlisten$($keyTarget$$4$$, 
  "blur", $JSCompiler_StaticMethods_enableFocusHandling_$self$$.$handleBlur$).$unlisten$($JSCompiler_StaticMethods_enableFocusHandling_$self$$.$getKeyHandler$(), "key", $JSCompiler_StaticMethods_enableFocusHandling_$self$$.$handleKeyEvent$)
}
$a$$.$exitDocument$ = function $$a$$$$exitDocument$$() {
  $JSCompiler_StaticMethods_setHighlightedIndex$$(this, -1);
  this.$openItem_$ && this.$openItem_$.$setOpen$(false);
  this.$mouseButtonPressed_$ = false;
  $goog$ui$Container$$.$superClass_$.$exitDocument$.call(this)
};
$a$$.$disposeInternal$ = function $$a$$$$disposeInternal$$() {
  $goog$ui$Container$$.$superClass_$.$disposeInternal$.call(this);
  if(this.$keyHandler_$) {
    this.$keyHandler_$.$dispose$();
    this.$keyHandler_$ = null
  }
  this.$renderer_$ = this.$openItem_$ = this.$childElementIdMap_$ = null
};
$a$$.$handleEnterItem$ = $JSCompiler_returnArg$$(true);
$a$$.$handleHighlightItem$ = function $$a$$$$handleHighlightItem$$($e$$29$$) {
  var $index$$51$$ = $JSCompiler_StaticMethods_indexOfChild$$(this, $e$$29$$.target);
  if($index$$51$$ > -1 && $index$$51$$ != this.$highlightedIndex_$) {
    var $item$$12$$ = $JSCompiler_StaticMethods_getChildAt$$(this, this.$highlightedIndex_$);
    $item$$12$$ && $item$$12$$.$setHighlighted$(false);
    this.$highlightedIndex_$ = $index$$51$$;
    $item$$12$$ = $JSCompiler_StaticMethods_getChildAt$$(this, this.$highlightedIndex_$);
    this.$mouseButtonPressed_$ && $item$$12$$.setActive(true);
    if(this.$openFollowsHighlight_$ && this.$openItem_$ && $item$$12$$ != this.$openItem_$) {
      $item$$12$$.$supportedStates_$ & 64 ? $item$$12$$.$setOpen$(true) : this.$openItem_$.$setOpen$(false)
    }
  }
  $goog$dom$a11y$setState$$(this.$getElement$(), "activedescendant", $e$$29$$.target.$getElement$().id)
};
$a$$.$handleUnHighlightItem$ = function $$a$$$$handleUnHighlightItem$$($e$$30$$) {
  if($e$$30$$.target == $JSCompiler_StaticMethods_getChildAt$$(this, this.$highlightedIndex_$)) {
    this.$highlightedIndex_$ = -1
  }
  $goog$dom$a11y$setState$$(this.$getElement$(), "activedescendant", "")
};
$a$$.$handleOpenItem$ = function $$a$$$$handleOpenItem$$($e$$31_item$$13$$) {
  if(($e$$31_item$$13$$ = $e$$31_item$$13$$.target) && $e$$31_item$$13$$ != this.$openItem_$ && $e$$31_item$$13$$.$parent_$ == this) {
    this.$openItem_$ && this.$openItem_$.$setOpen$(false);
    this.$openItem_$ = $e$$31_item$$13$$
  }
};
$a$$.$handleCloseItem$ = function $$a$$$$handleCloseItem$$($e$$32$$) {
  if($e$$32$$.target == this.$openItem_$) {
    this.$openItem_$ = null
  }
};
$a$$.$handleMouseDown$ = function $$a$$$$handleMouseDown$$($e$$33$$) {
  if(this.$enabled_$) {
    this.$mouseButtonPressed_$ = true
  }
  var $keyTarget$$5$$ = this.$getKeyEventTarget$(), $JSCompiler_inline_result$$458_attrNode$$inline_465_index$$inline_466$$;
  a: {
    if($keyTarget$$5$$) {
      if(($JSCompiler_inline_result$$458_attrNode$$inline_465_index$$inline_466$$ = $keyTarget$$5$$.getAttributeNode("tabindex")) && $JSCompiler_inline_result$$458_attrNode$$inline_465_index$$inline_466$$.specified) {
        $JSCompiler_inline_result$$458_attrNode$$inline_465_index$$inline_466$$ = $keyTarget$$5$$.tabIndex;
        $JSCompiler_inline_result$$458_attrNode$$inline_465_index$$inline_466$$ = typeof $JSCompiler_inline_result$$458_attrNode$$inline_465_index$$inline_466$$ == "number" && $JSCompiler_inline_result$$458_attrNode$$inline_465_index$$inline_466$$ >= 0;
        break a
      }
    }
    $JSCompiler_inline_result$$458_attrNode$$inline_465_index$$inline_466$$ = false
  }
  $JSCompiler_inline_result$$458_attrNode$$inline_465_index$$inline_466$$ ? $keyTarget$$5$$.focus() : $e$$33$$.preventDefault()
};
$a$$.$handleDocumentMouseUp$ = function $$a$$$$handleDocumentMouseUp$$() {
  this.$mouseButtonPressed_$ = false
};
$a$$.$handleChildMouseEvents$ = function $$a$$$$handleChildMouseEvents$$($e$$35$$) {
  var $control$$10_node$$inline_478$$;
  a: {
    $control$$10_node$$inline_478$$ = $e$$35$$.target;
    if(this.$childElementIdMap_$) {
      for(var $elem$$inline_479$$ = this.$getElement$();$control$$10_node$$inline_478$$ && $control$$10_node$$inline_478$$.parentNode && $control$$10_node$$inline_478$$ != $elem$$inline_479$$;) {
        var $id$$inline_480$$ = $control$$10_node$$inline_478$$.id;
        if($id$$inline_480$$ in this.$childElementIdMap_$) {
          $control$$10_node$$inline_478$$ = this.$childElementIdMap_$[$id$$inline_480$$];
          break a
        }
        $control$$10_node$$inline_478$$ = $control$$10_node$$inline_478$$.parentNode
      }
    }
    $control$$10_node$$inline_478$$ = null
  }
  if($control$$10_node$$inline_478$$) {
    switch($e$$35$$.type) {
      case "mousedown":
        $control$$10_node$$inline_478$$.$handleMouseDown$($e$$35$$);
        break;
      case "mouseup":
        $control$$10_node$$inline_478$$.$handleMouseUp$($e$$35$$);
        break;
      case "mouseover":
        $control$$10_node$$inline_478$$.$handleMouseOver$($e$$35$$);
        break;
      case "mouseout":
        $control$$10_node$$inline_478$$.$handleMouseOut$($e$$35$$);
        break
    }
  }
};
$a$$.$handleFocus$ = $JSCompiler_emptyFn$$();
$a$$.$handleBlur$ = function $$a$$$$handleBlur$$() {
  $JSCompiler_StaticMethods_setHighlightedIndex$$(this, -1);
  this.$mouseButtonPressed_$ = false;
  this.$openItem_$ && this.$openItem_$.$setOpen$(false)
};
$a$$.$handleKeyEvent$ = function $$a$$$$handleKeyEvent$$($e$$38$$) {
  if(this.$isEnabled$() && this.$visible_$ && ($JSCompiler_StaticMethods_getChildCount$$(this) != 0 || this.$keyEventTarget_$) && this.$handleKeyEventInternal$($e$$38$$)) {
    $e$$38$$.preventDefault();
    $e$$38$$.stopPropagation();
    return true
  }
  return false
};
$a$$.$handleKeyEventInternal$ = function $$a$$$$handleKeyEventInternal$$($e$$39$$) {
  var $highlighted$$ = $JSCompiler_StaticMethods_getChildAt$$(this, this.$highlightedIndex_$);
  if($highlighted$$ && typeof $highlighted$$.$handleKeyEvent$ == "function" && $highlighted$$.$handleKeyEvent$($e$$39$$)) {
    return true
  }
  if(this.$openItem_$ && this.$openItem_$ != $highlighted$$ && typeof this.$openItem_$.$handleKeyEvent$ == "function" && this.$openItem_$.$handleKeyEvent$($e$$39$$)) {
    return true
  }
  switch($e$$39$$.keyCode) {
    case 27:
      if(this.$isFocusable$()) {
        this.$getKeyEventTarget$().blur()
      }else {
        return false
      }
      break;
    case 36:
      $JSCompiler_StaticMethods_highlightFirst$$(this);
      break;
    case 35:
      $JSCompiler_StaticMethods_highlightLast$$(this);
      break;
    case 38:
      if(this.$orientation_$ == $goog$ui$Container$Orientation$VERTICAL$$) {
        $JSCompiler_StaticMethods_highlightPrevious$$(this)
      }else {
        return false
      }
      break;
    case 37:
      if(this.$orientation_$ == $goog$ui$Container$Orientation$HORIZONTAL$$) {
        $JSCompiler_StaticMethods_isRightToLeft$$(this) ? $JSCompiler_StaticMethods_highlightNext$$(this) : $JSCompiler_StaticMethods_highlightPrevious$$(this)
      }else {
        return false
      }
      break;
    case 40:
      if(this.$orientation_$ == $goog$ui$Container$Orientation$VERTICAL$$) {
        $JSCompiler_StaticMethods_highlightNext$$(this)
      }else {
        return false
      }
      break;
    case 39:
      if(this.$orientation_$ == $goog$ui$Container$Orientation$HORIZONTAL$$) {
        $JSCompiler_StaticMethods_isRightToLeft$$(this) ? $JSCompiler_StaticMethods_highlightPrevious$$(this) : $JSCompiler_StaticMethods_highlightNext$$(this)
      }else {
        return false
      }
      break;
    default:
      return false
  }
  return true
};
function $JSCompiler_StaticMethods_registerChildId_$$($JSCompiler_StaticMethods_registerChildId_$self$$, $child$$20$$) {
  var $childElem_id$$7$$ = $child$$20$$.$getElement$();
  $childElem_id$$7$$ = $childElem_id$$7$$.id || ($childElem_id$$7$$.id = $JSCompiler_StaticMethods_getId$$($child$$20$$));
  if(!$JSCompiler_StaticMethods_registerChildId_$self$$.$childElementIdMap_$) {
    $JSCompiler_StaticMethods_registerChildId_$self$$.$childElementIdMap_$ = {}
  }
  $JSCompiler_StaticMethods_registerChildId_$self$$.$childElementIdMap_$[$childElem_id$$7$$] = $child$$20$$
}
$a$$.$addChild$ = function $$a$$$$addChild$$($child$$21$$, $opt_render$$2$$) {
  $goog$ui$Container$$.$superClass_$.$addChild$.call(this, $child$$21$$, $opt_render$$2$$)
};
$a$$.$addChildAt$ = function $$a$$$$addChildAt$$($control$$11$$, $index$$52$$, $opt_render$$3$$) {
  $control$$11$$.$statesWithTransitionEvents_$ |= 2;
  $control$$11$$.$statesWithTransitionEvents_$ |= 64;
  if(this.$isFocusable$() || !this.$allowFocusableChildren_$) {
    $JSCompiler_StaticMethods_setSupportedState$$($control$$11$$, 32, false)
  }
  $JSCompiler_StaticMethods_setHandleMouseEvents$$($control$$11$$, false);
  $goog$ui$Container$$.$superClass_$.$addChildAt$.call(this, $control$$11$$, $index$$52$$, $opt_render$$3$$);
  $opt_render$$3$$ && this.$inDocument_$ && $JSCompiler_StaticMethods_registerChildId_$$(this, $control$$11$$);
  $index$$52$$ <= this.$highlightedIndex_$ && this.$highlightedIndex_$++
};
$a$$.removeChild = function $$a$$$removeChild$($control$$12$$, $opt_unrender$$3$$) {
  if($control$$12$$ = $goog$isString$$($control$$12$$) ? $JSCompiler_StaticMethods_getChild$$(this, $control$$12$$) : $control$$12$$) {
    var $childElem$$1_index$$53$$ = $JSCompiler_StaticMethods_indexOfChild$$(this, $control$$12$$);
    if($childElem$$1_index$$53$$ != -1) {
      if($childElem$$1_index$$53$$ == this.$highlightedIndex_$) {
        $control$$12$$.$setHighlighted$(false)
      }else {
        $childElem$$1_index$$53$$ < this.$highlightedIndex_$ && this.$highlightedIndex_$--
      }
    }
    ($childElem$$1_index$$53$$ = $control$$12$$.$getElement$()) && $childElem$$1_index$$53$$.id && $goog$object$remove$$(this.$childElementIdMap_$, $childElem$$1_index$$53$$.id)
  }
  $control$$12$$ = $goog$ui$Container$$.$superClass_$.removeChild.call(this, $control$$12$$, $opt_unrender$$3$$);
  $JSCompiler_StaticMethods_setHandleMouseEvents$$($control$$12$$, true);
  return $control$$12$$
};
$a$$.$setVisible$ = function $$a$$$$setVisible$$($visible$$2$$, $opt_force$$1$$) {
  if($opt_force$$1$$ || this.$visible_$ != $visible$$2$$ && this.dispatchEvent($visible$$2$$ ? "show" : "hide")) {
    this.$visible_$ = $visible$$2$$;
    var $elem$$5$$ = this.$getElement$();
    if($elem$$5$$) {
      $goog$style$showElement$$($elem$$5$$, $visible$$2$$);
      this.$isFocusable$() && $JSCompiler_StaticMethods_enableTabIndex$$(this.$renderer_$, this.$getKeyEventTarget$(), this.$enabled_$ && this.$visible_$);
      $opt_force$$1$$ || this.dispatchEvent(this.$visible_$ ? "aftershow" : "afterhide")
    }
    return true
  }
  return false
};
$a$$.$isEnabled$ = $JSCompiler_get$$("$enabled_$");
$a$$.$setEnabled$ = function $$a$$$$setEnabled$$($enable$$18$$) {
  if(this.$enabled_$ != $enable$$18$$ && this.dispatchEvent($enable$$18$$ ? "enable" : "disable")) {
    if($enable$$18$$) {
      this.$enabled_$ = true;
      $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$22$$) {
        if($child$$22$$.$wasDisabled$) {
          delete $child$$22$$.$wasDisabled$
        }else {
          $child$$22$$.$setEnabled$(true)
        }
      })
    }else {
      $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$23$$) {
        if($child$$23$$.$isEnabled$()) {
          $child$$23$$.$setEnabled$(false)
        }else {
          $child$$23$$.$wasDisabled$ = true
        }
      });
      this.$mouseButtonPressed_$ = this.$enabled_$ = false
    }
    this.$isFocusable$() && $JSCompiler_StaticMethods_enableTabIndex$$(this.$renderer_$, this.$getKeyEventTarget$(), $enable$$18$$ && this.$visible_$)
  }
};
$a$$.$isFocusable$ = $JSCompiler_get$$("$focusable_$");
$a$$.$setFocusable$ = function $$a$$$$setFocusable$$($focusable$$1$$) {
  $focusable$$1$$ != this.$focusable_$ && this.$inDocument_$ && $JSCompiler_StaticMethods_enableFocusHandling_$$(this, $focusable$$1$$);
  this.$focusable_$ = $focusable$$1$$;
  this.$enabled_$ && this.$visible_$ && $JSCompiler_StaticMethods_enableTabIndex$$(this.$renderer_$, this.$getKeyEventTarget$(), $focusable$$1$$)
};
function $JSCompiler_StaticMethods_setHighlightedIndex$$($JSCompiler_StaticMethods_setHighlightedIndex$self$$, $index$$54$$) {
  var $child$$24$$ = $JSCompiler_StaticMethods_getChildAt$$($JSCompiler_StaticMethods_setHighlightedIndex$self$$, $index$$54$$);
  if($child$$24$$) {
    $child$$24$$.$setHighlighted$(true)
  }else {
    $JSCompiler_StaticMethods_setHighlightedIndex$self$$.$highlightedIndex_$ > -1 && $JSCompiler_StaticMethods_getChildAt$$($JSCompiler_StaticMethods_setHighlightedIndex$self$$, $JSCompiler_StaticMethods_setHighlightedIndex$self$$.$highlightedIndex_$).$setHighlighted$(false)
  }
}
$a$$.$setHighlighted$ = function $$a$$$$setHighlighted$$($item$$14$$) {
  $JSCompiler_StaticMethods_setHighlightedIndex$$(this, $JSCompiler_StaticMethods_indexOfChild$$(this, $item$$14$$))
};
function $JSCompiler_StaticMethods_highlightFirst$$($JSCompiler_StaticMethods_highlightFirst$self$$) {
  $JSCompiler_StaticMethods_highlightHelper$$($JSCompiler_StaticMethods_highlightFirst$self$$, function($index$$55$$, $max$$) {
    return($index$$55$$ + 1) % $max$$
  }, $JSCompiler_StaticMethods_getChildCount$$($JSCompiler_StaticMethods_highlightFirst$self$$) - 1)
}
function $JSCompiler_StaticMethods_highlightLast$$($JSCompiler_StaticMethods_highlightLast$self$$) {
  $JSCompiler_StaticMethods_highlightHelper$$($JSCompiler_StaticMethods_highlightLast$self$$, function($index$$56$$, $max$$1$$) {
    $index$$56$$--;
    return $index$$56$$ < 0 ? $max$$1$$ - 1 : $index$$56$$
  }, 0)
}
function $JSCompiler_StaticMethods_highlightNext$$($JSCompiler_StaticMethods_highlightNext$self$$) {
  $JSCompiler_StaticMethods_highlightHelper$$($JSCompiler_StaticMethods_highlightNext$self$$, function($index$$57$$, $max$$2$$) {
    return($index$$57$$ + 1) % $max$$2$$
  }, $JSCompiler_StaticMethods_highlightNext$self$$.$highlightedIndex_$)
}
function $JSCompiler_StaticMethods_highlightPrevious$$($JSCompiler_StaticMethods_highlightPrevious$self$$) {
  $JSCompiler_StaticMethods_highlightHelper$$($JSCompiler_StaticMethods_highlightPrevious$self$$, function($index$$58$$, $max$$3$$) {
    $index$$58$$--;
    return $index$$58$$ < 0 ? $max$$3$$ - 1 : $index$$58$$
  }, $JSCompiler_StaticMethods_highlightPrevious$self$$.$highlightedIndex_$)
}
function $JSCompiler_StaticMethods_highlightHelper$$($JSCompiler_StaticMethods_highlightHelper$self$$, $fn$$4$$, $curIndex_startIndex$$1$$) {
  $curIndex_startIndex$$1$$ = $curIndex_startIndex$$1$$ < 0 ? $JSCompiler_StaticMethods_indexOfChild$$($JSCompiler_StaticMethods_highlightHelper$self$$, $JSCompiler_StaticMethods_highlightHelper$self$$.$openItem_$) : $curIndex_startIndex$$1$$;
  var $numItems$$ = $JSCompiler_StaticMethods_getChildCount$$($JSCompiler_StaticMethods_highlightHelper$self$$);
  $curIndex_startIndex$$1$$ = $fn$$4$$.call($JSCompiler_StaticMethods_highlightHelper$self$$, $curIndex_startIndex$$1$$, $numItems$$);
  for(var $visited$$ = 0;$visited$$ <= $numItems$$;) {
    var $control$$13$$ = $JSCompiler_StaticMethods_getChildAt$$($JSCompiler_StaticMethods_highlightHelper$self$$, $curIndex_startIndex$$1$$);
    if($control$$13$$ && $JSCompiler_StaticMethods_highlightHelper$self$$.$canHighlightItem$($control$$13$$)) {
      $JSCompiler_StaticMethods_setHighlightedIndex$$($JSCompiler_StaticMethods_highlightHelper$self$$, $curIndex_startIndex$$1$$);
      return true
    }
    $visited$$++;
    $curIndex_startIndex$$1$$ = $fn$$4$$.call($JSCompiler_StaticMethods_highlightHelper$self$$, $curIndex_startIndex$$1$$, $numItems$$)
  }
  return false
}
$a$$.$canHighlightItem$ = function $$a$$$$canHighlightItem$$($item$$15$$) {
  return $item$$15$$.$visible_$ && $item$$15$$.$isEnabled$() && !!($item$$15$$.$supportedStates_$ & 2)
};
// Input 59
function $goog$ui$MenuRenderer$$() {
}
$goog$inherits$$($goog$ui$MenuRenderer$$, $goog$ui$ContainerRenderer$$);
$goog$addSingletonGetter$$($goog$ui$MenuRenderer$$);
$goog$ui$MenuRenderer$$.prototype.$getAriaRole$ = $JSCompiler_returnArg$$("menu");
$goog$ui$MenuRenderer$$.prototype.$containsElement$ = function $$goog$ui$MenuRenderer$$$$$containsElement$$($menu$$, $element$$131$$) {
  return $goog$dom$contains$$($menu$$.$getElement$(), $element$$131$$)
};
$goog$ui$MenuRenderer$$.prototype.$getCssClass$ = $JSCompiler_returnArg$$("goog-menu");
$goog$ui$MenuRenderer$$.prototype.$initializeDom$ = function $$goog$ui$MenuRenderer$$$$$initializeDom$$($container$$8_element$$132$$) {
  $goog$ui$MenuRenderer$$.$superClass_$.$initializeDom$.call(this, $container$$8_element$$132$$);
  $container$$8_element$$132$$ = $container$$8_element$$132$$.$getElement$();
  $goog$dom$a11y$setState$$($container$$8_element$$132$$, "haspopup", "true")
};
// Input 60
$goog$ui$registry$setDecoratorByClassName$$("goog-menuseparator", function() {
  return new $goog$ui$Separator$$
});
// Input 61
function $goog$ui$Menu$$($opt_domHelper$$9$$, $opt_renderer$$6$$) {
  $goog$ui$Container$$.call(this, $goog$ui$Container$Orientation$VERTICAL$$, $opt_renderer$$6$$ || $goog$ui$MenuRenderer$$.$getInstance$(), $opt_domHelper$$9$$);
  this.$setFocusable$(false)
}
$goog$inherits$$($goog$ui$Menu$$, $goog$ui$Container$$);
$a$$ = $goog$ui$Menu$$.prototype;
$a$$.$allowAutoFocus_$ = true;
$a$$.$allowHighlightDisabled_$ = false;
$a$$.$getCssClass$ = function $$a$$$$getCssClass$$() {
  return this.$renderer_$.$getCssClass$()
};
$a$$.$containsElement$ = function $$a$$$$containsElement$$($element$$133$$) {
  if(this.$renderer_$.$containsElement$(this, $element$$133$$)) {
    return true
  }
  for(var $i$$69$$ = 0, $count$$6$$ = $JSCompiler_StaticMethods_getChildCount$$(this);$i$$69$$ < $count$$6$$;$i$$69$$++) {
    var $child$$25$$ = $JSCompiler_StaticMethods_getChildAt$$(this, $i$$69$$);
    if(typeof $child$$25$$.$containsElement$ == "function" && $child$$25$$.$containsElement$($element$$133$$)) {
      return true
    }
  }
  return false
};
$a$$.$addItem$ = function $$a$$$$addItem$$($item$$16$$) {
  this.$addChild$($item$$16$$, true)
};
$a$$.$addItemAt$ = function $$a$$$$addItemAt$$($item$$17$$, $n$$3$$) {
  this.$addChildAt$($item$$17$$, $n$$3$$, true)
};
$a$$.$getItemAt$ = function $$a$$$$getItemAt$$($n$$5$$) {
  return $JSCompiler_StaticMethods_getChildAt$$(this, $n$$5$$)
};
$a$$.$getItemCount$ = function $$a$$$$getItemCount$$() {
  return $JSCompiler_StaticMethods_getChildCount$$(this)
};
$a$$.$setVisible$ = function $$a$$$$setVisible$$($show$$, $opt_force$$2$$) {
  var $visibilityChanged$$ = $goog$ui$Menu$$.$superClass_$.$setVisible$.call(this, $show$$, $opt_force$$2$$);
  $visibilityChanged$$ && $show$$ && this.$inDocument_$ && this.$allowAutoFocus_$ && this.$getKeyEventTarget$().focus();
  return $visibilityChanged$$
};
$a$$.$handleEnterItem$ = function $$a$$$$handleEnterItem$$($e$$40$$) {
  this.$allowAutoFocus_$ && this.$getKeyEventTarget$().focus();
  return $goog$ui$Menu$$.$superClass_$.$handleEnterItem$.call(this, $e$$40$$)
};
$a$$.$canHighlightItem$ = function $$a$$$$canHighlightItem$$($item$$19$$) {
  return(this.$allowHighlightDisabled_$ || $item$$19$$.$isEnabled$()) && $item$$19$$.$visible_$ && !!($item$$19$$.$supportedStates_$ & 2)
};
// Input 62
function $goog$ui$MenuButtonRenderer$$() {
}
$goog$inherits$$($goog$ui$MenuButtonRenderer$$, $goog$ui$CustomButtonRenderer$$);
$goog$addSingletonGetter$$($goog$ui$MenuButtonRenderer$$);
if($goog$userAgent$GECKO$$) {
  $goog$ui$MenuButtonRenderer$$.prototype.$setContent$ = function $$goog$ui$MenuButtonRenderer$$$$$setContent$$($element$$136$$, $content$$15$$) {
    var $caption$$2$$ = $goog$ui$MenuButtonRenderer$$.$superClass_$.$getContentElement$.call(this, $element$$136$$ && $element$$136$$.firstChild);
    if($caption$$2$$) {
      var $newNode$$inline_514$$ = this.createCaption($content$$15$$, $goog$dom$getDomHelper$$($element$$136$$)), $parent$$inline_516$$ = $caption$$2$$.parentNode;
      $parent$$inline_516$$ && $parent$$inline_516$$.replaceChild($newNode$$inline_514$$, $caption$$2$$)
    }
  }
}
$goog$ui$MenuButtonRenderer$$.prototype.$getContentElement$ = function $$goog$ui$MenuButtonRenderer$$$$$getContentElement$$($content$$16_element$$137$$) {
  $content$$16_element$$137$$ = $goog$ui$MenuButtonRenderer$$.$superClass_$.$getContentElement$.call(this, $content$$16_element$$137$$ && $content$$16_element$$137$$.firstChild);
  if($goog$userAgent$GECKO$$ && $content$$16_element$$137$$ && $content$$16_element$$137$$.__goog_wrapper_div) {
    $content$$16_element$$137$$ = $content$$16_element$$137$$.firstChild
  }
  return $content$$16_element$$137$$
};
$goog$ui$MenuButtonRenderer$$.prototype.$createButton$ = function $$goog$ui$MenuButtonRenderer$$$$$createButton$$($content$$17$$, $dom$$3$$) {
  return $goog$ui$MenuButtonRenderer$$.$superClass_$.$createButton$.call(this, [this.createCaption($content$$17$$, $dom$$3$$), $dom$$3$$.$createDom$("div", "goog-inline-block " + (this.$getCssClass$() + "-dropdown"), "\u00a0")], $dom$$3$$)
};
$goog$ui$MenuButtonRenderer$$.prototype.createCaption = function $$goog$ui$MenuButtonRenderer$$$$createCaption$($content$$18$$, $dom$$4$$) {
  return $dom$$4$$.$createDom$("div", "goog-inline-block " + (this.$getCssClass$() + "-caption"), $content$$18$$)
};
$goog$ui$MenuButtonRenderer$$.prototype.$getCssClass$ = $JSCompiler_returnArg$$("goog-menu-button");
// Input 63
function $goog$ui$MenuButton$$($content$$20$$, $opt_menu$$, $opt_renderer$$7$$, $opt_domHelper$$10$$) {
  $goog$ui$Button$$.call(this, $content$$20$$, $opt_renderer$$7$$ || $goog$ui$MenuButtonRenderer$$.$getInstance$(), $opt_domHelper$$10$$);
  $JSCompiler_StaticMethods_setSupportedState$$(this, 64, true);
  $opt_menu$$ && this.$setMenu$($opt_menu$$);
  this.$timer_$ = new $goog$Timer$$(500)
}
$goog$inherits$$($goog$ui$MenuButton$$, $goog$ui$Button$$);
$a$$ = $goog$ui$MenuButton$$.prototype;
$a$$.$alignToStart_$ = true;
$a$$.$scrollOnOverflow_$ = false;
$a$$.$isFocusablePopupMenu_$ = false;
$a$$.$enterDocument$ = function $$a$$$$enterDocument$$() {
  $goog$ui$MenuButton$$.$superClass_$.$enterDocument$.call(this);
  this.$menu_$ && $JSCompiler_StaticMethods_attachMenuEventListeners_$$(this, this.$menu_$, true);
  $goog$dom$a11y$setState$$(this.$getElement$(), "haspopup", "true")
};
$a$$.$exitDocument$ = function $$a$$$$exitDocument$$() {
  $goog$ui$MenuButton$$.$superClass_$.$exitDocument$.call(this);
  if(this.$menu_$) {
    this.$setOpen$(false);
    this.$menu_$.$exitDocument$();
    $JSCompiler_StaticMethods_attachMenuEventListeners_$$(this, this.$menu_$, false);
    var $menuElement$$ = this.$menu_$.$getElement$();
    $menuElement$$ && $goog$dom$removeNode$$($menuElement$$)
  }
};
$a$$.$disposeInternal$ = function $$a$$$$disposeInternal$$() {
  $goog$ui$MenuButton$$.$superClass_$.$disposeInternal$.call(this);
  if(this.$menu_$) {
    this.$menu_$.$dispose$();
    delete this.$menu_$
  }
  this.$timer_$.$dispose$()
};
$a$$.$handleMouseDown$ = function $$a$$$$handleMouseDown$$($e$$41$$) {
  $goog$ui$MenuButton$$.$superClass_$.$handleMouseDown$.call(this, $e$$41$$);
  if(this.$state_$ & 4) {
    this.$setOpen$(!!!(this.$state_$ & 64));
    if(this.$menu_$) {
      this.$menu_$.$mouseButtonPressed_$ = !!(this.$state_$ & 64)
    }
  }
};
$a$$.$handleMouseUp$ = function $$a$$$$handleMouseUp$$($e$$42$$) {
  $goog$ui$MenuButton$$.$superClass_$.$handleMouseUp$.call(this, $e$$42$$);
  if(this.$menu_$ && !(this.$state_$ & 4)) {
    this.$menu_$.$mouseButtonPressed_$ = false
  }
};
$a$$.$performActionInternal$ = function $$a$$$$performActionInternal$$() {
  this.setActive(false);
  return true
};
$a$$.$handleDocumentMouseDown$ = function $$a$$$$handleDocumentMouseDown$$($e$$44$$) {
  this.$menu_$ && this.$menu_$.$visible_$ && !this.$containsElement$($e$$44$$.target) && this.$setOpen$(false)
};
$a$$.$containsElement$ = function $$a$$$$containsElement$$($element$$139$$) {
  return $element$$139$$ && $goog$dom$contains$$(this.$getElement$(), $element$$139$$) || this.$menu_$ && this.$menu_$.$containsElement$($element$$139$$) || false
};
$a$$.$handleKeyEventInternal$ = function $$a$$$$handleKeyEventInternal$$($e$$45$$) {
  if($e$$45$$.keyCode == 32) {
    $e$$45$$.preventDefault();
    if($e$$45$$.type != "keyup") {
      return false
    }
  }else {
    if($e$$45$$.type != "key") {
      return false
    }
  }
  if(this.$menu_$ && this.$menu_$.$visible_$) {
    var $handledByMenu$$ = this.$menu_$.$handleKeyEvent$($e$$45$$);
    if($e$$45$$.keyCode == 27) {
      this.$setOpen$(false);
      return true
    }
    return $handledByMenu$$
  }
  if($e$$45$$.keyCode == 40 || $e$$45$$.keyCode == 38 || $e$$45$$.keyCode == 32) {
    this.$setOpen$(true);
    return true
  }
  return false
};
$a$$.$handleMenuAction$ = function $$a$$$$handleMenuAction$$() {
  this.$setOpen$(false)
};
$a$$.$handleMenuBlur$ = function $$a$$$$handleMenuBlur$$() {
  this.$state_$ & 4 || this.$setOpen$(false)
};
$a$$.$handleBlur$ = function $$a$$$$handleBlur$$($e$$48$$) {
  this.$isFocusablePopupMenu_$ || this.$setOpen$(false);
  $goog$ui$MenuButton$$.$superClass_$.$handleBlur$.call(this, $e$$48$$)
};
function $JSCompiler_StaticMethods_getMenu$$($JSCompiler_StaticMethods_getMenu$self$$) {
  $JSCompiler_StaticMethods_getMenu$self$$.$menu_$ || $JSCompiler_StaticMethods_getMenu$self$$.$setMenu$(new $goog$ui$Menu$$($JSCompiler_StaticMethods_getMenu$self$$.$getDomHelper$()));
  return $JSCompiler_StaticMethods_getMenu$self$$.$menu_$ || null
}
$a$$.$setMenu$ = function $$a$$$$setMenu$$($menu$$2$$) {
  var $oldMenu$$ = this.$menu_$;
  if($menu$$2$$ != $oldMenu$$) {
    if($oldMenu$$) {
      this.$setOpen$(false);
      this.$inDocument_$ && $JSCompiler_StaticMethods_attachMenuEventListeners_$$(this, $oldMenu$$, false);
      delete this.$menu_$
    }
    if($menu$$2$$) {
      this.$menu_$ = $menu$$2$$;
      $JSCompiler_StaticMethods_setParent$$($menu$$2$$, this);
      $menu$$2$$.$setVisible$(false);
      var $allow$$inline_531$$ = this.$isFocusablePopupMenu_$;
      ($menu$$2$$.$allowAutoFocus_$ = $allow$$inline_531$$) && $menu$$2$$.$setFocusable$(true);
      this.$inDocument_$ && $JSCompiler_StaticMethods_attachMenuEventListeners_$$(this, $menu$$2$$, true)
    }
  }
  return $oldMenu$$
};
$a$$.$addItem$ = function $$a$$$$addItem$$($item$$20$$) {
  $JSCompiler_StaticMethods_getMenu$$(this).$addChild$($item$$20$$, true)
};
$a$$.$addItemAt$ = function $$a$$$$addItemAt$$($item$$21$$, $index$$61$$) {
  $JSCompiler_StaticMethods_getMenu$$(this).$addChildAt$($item$$21$$, $index$$61$$, true)
};
$a$$.$getItemAt$ = function $$a$$$$getItemAt$$($index$$63$$) {
  return this.$menu_$ ? $JSCompiler_StaticMethods_getChildAt$$(this.$menu_$, $index$$63$$) : null
};
$a$$.$getItemCount$ = function $$a$$$$getItemCount$$() {
  return this.$menu_$ ? $JSCompiler_StaticMethods_getChildCount$$(this.$menu_$) : 0
};
$a$$.$setVisible$ = function $$a$$$$setVisible$$($visible$$4$$, $opt_force$$3$$) {
  var $visibilityChanged$$1$$ = $goog$ui$MenuButton$$.$superClass_$.$setVisible$.call(this, $visible$$4$$, $opt_force$$3$$);
  $visibilityChanged$$1$$ && !this.$visible_$ && this.$setOpen$(false);
  return $visibilityChanged$$1$$
};
$a$$.$setEnabled$ = function $$a$$$$setEnabled$$($enable$$19$$) {
  $goog$ui$MenuButton$$.$superClass_$.$setEnabled$.call(this, $enable$$19$$);
  this.$isEnabled$() || this.$setOpen$(false)
};
$a$$.$setOpen$ = function $$a$$$$setOpen$$($open$$1$$) {
  $goog$ui$MenuButton$$.$superClass_$.$setOpen$.call(this, $open$$1$$);
  if(this.$menu_$ && !!(this.$state_$ & 64) == $open$$1$$) {
    if($open$$1$$) {
      this.$menu_$.$inDocument_$ || $JSCompiler_StaticMethods_render_$$(this.$menu_$, void 0);
      this.$viewportBox_$ = $goog$style$getVisibleRectForElement$$(this.$getElement$());
      this.$buttonRect_$ = $goog$style$getBounds$$(this.$getElement$());
      $JSCompiler_StaticMethods_positionMenu$$(this);
      $JSCompiler_StaticMethods_setHighlightedIndex$$(this.$menu_$, -1)
    }else {
      this.setActive(false);
      this.$menu_$.$mouseButtonPressed_$ = false;
      if(this.$originalSize_$ != null) {
        this.$originalSize_$ = undefined;
        var $elem$$6_handler$$inline_549$$ = this.$menu_$.$getElement$();
        $elem$$6_handler$$inline_549$$ && $goog$style$setSize$$($elem$$6_handler$$inline_549$$, "", "")
      }
    }
    this.$menu_$.$setVisible$($open$$1$$);
    $elem$$6_handler$$inline_549$$ = $JSCompiler_StaticMethods_getHandler$$(this);
    var $method$$inline_550$$ = $open$$1$$ ? $elem$$6_handler$$inline_549$$.$listen$ : $elem$$6_handler$$inline_549$$.$unlisten$;
    $method$$inline_550$$.call($elem$$6_handler$$inline_549$$, $JSCompiler_StaticMethods_getDocument$$(this.$getDomHelper$()), "mousedown", this.$handleDocumentMouseDown$, true);
    this.$isFocusablePopupMenu_$ && $method$$inline_550$$.call($elem$$6_handler$$inline_549$$, this.$menu_$, "blur", this.$handleMenuBlur$);
    $method$$inline_550$$.call($elem$$6_handler$$inline_549$$, this.$timer_$, $goog$Timer$TICK$$, this.$onTick_$);
    $open$$1$$ ? this.$timer_$.start() : this.$timer_$.stop()
  }
};
function $JSCompiler_StaticMethods_positionMenu$$($JSCompiler_StaticMethods_positionMenu$self$$) {
  if($JSCompiler_StaticMethods_positionMenu$self$$.$menu_$.$inDocument_$) {
    var $anchorCorner_position$$1$$ = $JSCompiler_StaticMethods_positionMenu$self$$.$alignToStart_$ ? 5 : 7;
    $anchorCorner_position$$1$$ = new $goog$positioning$MenuAnchoredPosition$$($JSCompiler_StaticMethods_positionMenu$self$$.$getElement$(), $anchorCorner_position$$1$$, !$JSCompiler_StaticMethods_positionMenu$self$$.$scrollOnOverflow_$, $JSCompiler_StaticMethods_positionMenu$self$$.$scrollOnOverflow_$);
    var $elem$$7$$ = $JSCompiler_StaticMethods_positionMenu$self$$.$menu_$.$getElement$();
    if(!$JSCompiler_StaticMethods_positionMenu$self$$.$menu_$.$visible_$) {
      $elem$$7$$.style.visibility = "hidden";
      $goog$style$showElement$$($elem$$7$$, true)
    }
    if(!$JSCompiler_StaticMethods_positionMenu$self$$.$originalSize_$ && $JSCompiler_StaticMethods_positionMenu$self$$.$scrollOnOverflow_$) {
      $JSCompiler_StaticMethods_positionMenu$self$$.$originalSize_$ = $goog$style$getSize$$($elem$$7$$)
    }
    $anchorCorner_position$$1$$.$reposition$($elem$$7$$, $JSCompiler_StaticMethods_positionMenu$self$$.$alignToStart_$ ? 4 : 6, null, $JSCompiler_StaticMethods_positionMenu$self$$.$originalSize_$);
    if(!$JSCompiler_StaticMethods_positionMenu$self$$.$menu_$.$visible_$) {
      $goog$style$showElement$$($elem$$7$$, false);
      $elem$$7$$.style.visibility = "visible"
    }
  }
}
$a$$.$onTick_$ = function $$a$$$$onTick_$$() {
  var $currentButtonRect$$ = $goog$style$getBounds$$(this.$getElement$()), $currentViewport$$ = $goog$style$getVisibleRectForElement$$(this.$getElement$()), $JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$;
  $JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$ = this.$buttonRect_$;
  $JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$ = $JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$ == $currentButtonRect$$ ? true : !$JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$ || !$currentButtonRect$$ ? false : $JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$.left == 
  $currentButtonRect$$.left && $JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$.width == $currentButtonRect$$.width && $JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$.top == $currentButtonRect$$.top && $JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$.height == $currentButtonRect$$.height;
  if(!($JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$ = !$JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$)) {
    $JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$ = this.$viewportBox_$;
    $JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$ = $JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$ == $currentViewport$$ ? true : !$JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$ || !$currentViewport$$ ? false : $JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$.top == 
    $currentViewport$$.top && $JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$.right == $currentViewport$$.right && $JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$.bottom == $currentViewport$$.bottom && $JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$.left == $currentViewport$$.left;
    $JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$ = !$JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$
  }
  if($JSCompiler_inline_result$$552_JSCompiler_inline_result$$558_JSCompiler_temp$$0_a$$inline_555_a$$inline_561$$) {
    this.$buttonRect_$ = $currentButtonRect$$;
    this.$viewportBox_$ = $currentViewport$$;
    $JSCompiler_StaticMethods_positionMenu$$(this)
  }
};
function $JSCompiler_StaticMethods_attachMenuEventListeners_$$($JSCompiler_StaticMethods_attachMenuEventListeners_$self$$, $menu$$3$$, $attach_method$$2$$) {
  var $handler$$8$$ = $JSCompiler_StaticMethods_getHandler$$($JSCompiler_StaticMethods_attachMenuEventListeners_$self$$);
  $attach_method$$2$$ = $attach_method$$2$$ ? $handler$$8$$.$listen$ : $handler$$8$$.$unlisten$;
  $attach_method$$2$$.call($handler$$8$$, $menu$$3$$, "action", $JSCompiler_StaticMethods_attachMenuEventListeners_$self$$.$handleMenuAction$);
  $attach_method$$2$$.call($handler$$8$$, $menu$$3$$, "highlight", $JSCompiler_StaticMethods_attachMenuEventListeners_$self$$.$handleHighlightItem$);
  $attach_method$$2$$.call($handler$$8$$, $menu$$3$$, "unhighlight", $JSCompiler_StaticMethods_attachMenuEventListeners_$self$$.$handleUnHighlightItem$)
}
$a$$.$handleHighlightItem$ = function $$a$$$$handleHighlightItem$$($e$$50$$) {
  $goog$dom$a11y$setState$$(this.$getElement$(), "activedescendant", $e$$50$$.target.$getElement$().id)
};
$a$$.$handleUnHighlightItem$ = function $$a$$$$handleUnHighlightItem$$() {
  $JSCompiler_StaticMethods_getChildAt$$(this.$menu_$, this.$menu_$.$highlightedIndex_$) || $goog$dom$a11y$setState$$(this.$getElement$(), "activedescendant", "")
};
$goog$ui$registry$setDecoratorByClassName$$("goog-menu-button", function() {
  return new $goog$ui$MenuButton$$(null)
});
// Input 64
function $goog$ui$Select$$($caption$$3$$, $opt_menu$$1$$, $opt_renderer$$8$$, $opt_domHelper$$11$$) {
  $goog$ui$MenuButton$$.call(this, $caption$$3$$, $opt_menu$$1$$, $opt_renderer$$8$$, $opt_domHelper$$11$$);
  this.$defaultCaption_$ = $caption$$3$$;
  $JSCompiler_StaticMethods_updateCaption_$$(this)
}
$goog$inherits$$($goog$ui$Select$$, $goog$ui$MenuButton$$);
$a$$ = $goog$ui$Select$$.prototype;
$a$$.$selectionModel_$ = null;
$a$$.$defaultCaption_$ = null;
$a$$.$enterDocument$ = function $$a$$$$enterDocument$$() {
  $goog$ui$Select$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_updateCaption_$$(this)
};
$a$$.$disposeInternal$ = function $$a$$$$disposeInternal$$() {
  $goog$ui$Select$$.$superClass_$.$disposeInternal$.call(this);
  if(this.$selectionModel_$) {
    this.$selectionModel_$.$dispose$();
    this.$selectionModel_$ = null
  }
  this.$defaultCaption_$ = null
};
$a$$.$handleMenuAction$ = function $$a$$$$handleMenuAction$$($e$$52$$) {
  this.$setSelectedItem$($e$$52$$.target);
  $goog$ui$Select$$.$superClass_$.$handleMenuAction$.call(this, $e$$52$$);
  $e$$52$$.stopPropagation();
  this.dispatchEvent("action")
};
$a$$.$handleSelectionChange$ = function $$a$$$$handleSelectionChange$$() {
  var $item$$23$$ = this.$getSelectedItem$();
  $goog$ui$Select$$.$superClass_$.$setValue$.call(this, $item$$23$$ && $item$$23$$.$getValue$());
  $JSCompiler_StaticMethods_updateCaption_$$(this)
};
$a$$.$setMenu$ = function $$a$$$$setMenu$$($menu$$4$$) {
  var $oldMenu$$1$$ = $goog$ui$Select$$.$superClass_$.$setMenu$.call(this, $menu$$4$$);
  if($menu$$4$$ != $oldMenu$$1$$) {
    this.$selectionModel_$ && this.$selectionModel_$.clear();
    if($menu$$4$$) {
      this.$selectionModel_$ ? $JSCompiler_StaticMethods_forEachChild$$($menu$$4$$, function($child$$28$$) {
        this.$selectionModel_$.$addItem$($child$$28$$)
      }, this) : $JSCompiler_StaticMethods_createSelectionModel_$$(this, $menu$$4$$)
    }
  }
  return $oldMenu$$1$$
};
$a$$.$addItem$ = function $$a$$$$addItem$$($item$$24$$) {
  $goog$ui$Select$$.$superClass_$.$addItem$.call(this, $item$$24$$);
  this.$selectionModel_$ ? this.$selectionModel_$.$addItem$($item$$24$$) : $JSCompiler_StaticMethods_createSelectionModel_$$(this, $JSCompiler_StaticMethods_getMenu$$(this))
};
$a$$.$addItemAt$ = function $$a$$$$addItemAt$$($item$$25$$, $index$$65$$) {
  $goog$ui$Select$$.$superClass_$.$addItemAt$.call(this, $item$$25$$, $index$$65$$);
  this.$selectionModel_$ ? this.$selectionModel_$.$addItemAt$($item$$25$$, $index$$65$$) : $JSCompiler_StaticMethods_createSelectionModel_$$(this, $JSCompiler_StaticMethods_getMenu$$(this))
};
$a$$.$setSelectedItem$ = function $$a$$$$setSelectedItem$$($item$$27$$) {
  this.$selectionModel_$ && this.$selectionModel_$.$setSelectedItem$($item$$27$$)
};
$a$$.$setValue$ = function $$a$$$$setValue$$($value$$39$$) {
  if($value$$39$$ != null && this.$selectionModel_$) {
    for(var $i$$71$$ = 0, $item$$28$$;$item$$28$$ = this.$selectionModel_$.$getItemAt$($i$$71$$);$i$$71$$++) {
      if($item$$28$$ && typeof $item$$28$$.$getValue$ == "function" && $item$$28$$.$getValue$() == $value$$39$$) {
        this.$setSelectedItem$($item$$28$$);
        return
      }
    }
  }
  this.$setSelectedItem$(null)
};
$a$$.$getSelectedItem$ = function $$a$$$$getSelectedItem$$() {
  return this.$selectionModel_$ ? this.$selectionModel_$.$getSelectedItem$() : null
};
$a$$.$getSelectedIndex$ = function $$a$$$$getSelectedIndex$$() {
  return this.$selectionModel_$ ? this.$selectionModel_$.$getSelectedIndex$() : -1
};
function $JSCompiler_StaticMethods_createSelectionModel_$$($JSCompiler_StaticMethods_createSelectionModel_$self$$, $opt_component$$) {
  $JSCompiler_StaticMethods_createSelectionModel_$self$$.$selectionModel_$ = new $goog$ui$SelectionModel$$;
  $opt_component$$ && $JSCompiler_StaticMethods_forEachChild$$($opt_component$$, function($child$$29$$) {
    this.$selectionModel_$.$addItem$($child$$29$$)
  }, $JSCompiler_StaticMethods_createSelectionModel_$self$$);
  $JSCompiler_StaticMethods_getHandler$$($JSCompiler_StaticMethods_createSelectionModel_$self$$).$listen$($JSCompiler_StaticMethods_createSelectionModel_$self$$.$selectionModel_$, "select", $JSCompiler_StaticMethods_createSelectionModel_$self$$.$handleSelectionChange$)
}
function $JSCompiler_StaticMethods_updateCaption_$$($JSCompiler_StaticMethods_updateCaption_$self$$) {
  var $item$$29$$ = $JSCompiler_StaticMethods_updateCaption_$self$$.$getSelectedItem$();
  $JSCompiler_StaticMethods_updateCaption_$self$$.$setContent$($item$$29$$ ? $item$$29$$.$getCaption$() : $JSCompiler_StaticMethods_updateCaption_$self$$.$defaultCaption_$)
}
$a$$.$setOpen$ = function $$a$$$$setOpen$$($open$$2$$) {
  $goog$ui$Select$$.$superClass_$.$setOpen$.call(this, $open$$2$$);
  this.$state_$ & 64 && $JSCompiler_StaticMethods_setHighlightedIndex$$($JSCompiler_StaticMethods_getMenu$$(this), this.$getSelectedIndex$())
};
$goog$ui$registry$setDecoratorByClassName$$("goog-select", function() {
  return new $goog$ui$Select$$(null)
});
// Input 65
function $goog$ui$ToolbarButtonRenderer$$() {
}
$goog$inherits$$($goog$ui$ToolbarButtonRenderer$$, $goog$ui$CustomButtonRenderer$$);
$goog$addSingletonGetter$$($goog$ui$ToolbarButtonRenderer$$);
$goog$ui$ToolbarButtonRenderer$$.prototype.$getCssClass$ = $JSCompiler_returnArg$$("goog-toolbar-button");
// Input 66
function $goog$ui$ToolbarButton$$($content$$21$$, $opt_renderer$$9$$, $opt_domHelper$$12$$) {
  $goog$ui$Button$$.call(this, $content$$21$$, $opt_renderer$$9$$ || $goog$ui$ToolbarButtonRenderer$$.$getInstance$(), $opt_domHelper$$12$$)
}
$goog$inherits$$($goog$ui$ToolbarButton$$, $goog$ui$Button$$);
$goog$ui$registry$setDecoratorByClassName$$("goog-toolbar-button", function() {
  return new $goog$ui$ToolbarButton$$(null)
});
// Input 67
function $goog$ui$ToolbarMenuButtonRenderer$$() {
}
$goog$inherits$$($goog$ui$ToolbarMenuButtonRenderer$$, $goog$ui$MenuButtonRenderer$$);
$goog$addSingletonGetter$$($goog$ui$ToolbarMenuButtonRenderer$$);
$goog$ui$ToolbarMenuButtonRenderer$$.prototype.$getCssClass$ = $JSCompiler_returnArg$$("goog-toolbar-menu-button");
// Input 68
function $goog$ui$ToolbarSelect$$($caption$$6$$, $opt_menu$$2$$, $opt_renderer$$10$$, $opt_domHelper$$13$$) {
  $goog$ui$Select$$.call(this, $caption$$6$$, $opt_menu$$2$$, $opt_renderer$$10$$ || $goog$ui$ToolbarMenuButtonRenderer$$.$getInstance$(), $opt_domHelper$$13$$)
}
$goog$inherits$$($goog$ui$ToolbarSelect$$, $goog$ui$Select$$);
$goog$ui$registry$setDecoratorByClassName$$("goog-toolbar-select", function() {
  return new $goog$ui$ToolbarSelect$$(null)
});
// Input 69
function $goog$ui$ToolbarSeparatorRenderer$$() {
}
$goog$inherits$$($goog$ui$ToolbarSeparatorRenderer$$, $goog$ui$MenuSeparatorRenderer$$);
$goog$addSingletonGetter$$($goog$ui$ToolbarSeparatorRenderer$$);
$goog$ui$ToolbarSeparatorRenderer$$.prototype.$createDom$ = function $$goog$ui$ToolbarSeparatorRenderer$$$$$createDom$$($separator$$3$$) {
  return $separator$$3$$.$getDomHelper$().$createDom$("div", this.$getCssClass$() + " goog-inline-block", "\u00a0")
};
$goog$ui$ToolbarSeparatorRenderer$$.prototype.$getCssClass$ = $JSCompiler_returnArg$$("goog-toolbar-separator");
// Input 70
function $goog$ui$ToolbarRenderer$$() {
}
$goog$inherits$$($goog$ui$ToolbarRenderer$$, $goog$ui$ContainerRenderer$$);
$goog$addSingletonGetter$$($goog$ui$ToolbarRenderer$$);
$goog$ui$ToolbarRenderer$$.prototype.$getAriaRole$ = $JSCompiler_returnArg$$("toolbar");
$goog$ui$ToolbarRenderer$$.prototype.$getCssClass$ = $JSCompiler_returnArg$$("goog-toolbar");
$goog$ui$ToolbarRenderer$$.prototype.$getDefaultOrientation$ = function $$goog$ui$ToolbarRenderer$$$$$getDefaultOrientation$$() {
  return $goog$ui$Container$Orientation$HORIZONTAL$$
};
// Input 71
function $goog$ui$Toolbar$$($opt_renderer$$11$$, $opt_orientation$$1$$, $opt_domHelper$$14$$) {
  $goog$ui$Container$$.call(this, $opt_orientation$$1$$, $opt_renderer$$11$$ || $goog$ui$ToolbarRenderer$$.$getInstance$(), $opt_domHelper$$14$$)
}
$goog$inherits$$($goog$ui$Toolbar$$, $goog$ui$Container$$);
// Input 72
function $goog$ui$ToolbarSeparator$$($opt_renderer$$12$$, $opt_domHelper$$15$$) {
  $goog$ui$Separator$$.call(this, $opt_renderer$$12$$ || $goog$ui$ToolbarSeparatorRenderer$$.$getInstance$(), $opt_domHelper$$15$$)
}
$goog$inherits$$($goog$ui$ToolbarSeparator$$, $goog$ui$Separator$$);
$goog$ui$registry$setDecoratorByClassName$$("goog-toolbar-separator", function() {
  return new $goog$ui$ToolbarSeparator$$
});
// Input 73
$goog$exportPath_$$("drawToolbar", function drawToolbar() {
  var $EVENTS$$ = $goog$object$getValues$$($goog$ui$Component$EventType$$), $t1$$ = new $goog$ui$Toolbar$$;
  $t1$$.$addChild$(new $goog$ui$ToolbarButton$$("Button"), true);
  $JSCompiler_StaticMethods_getChildAt$$($t1$$, 0).$setTooltip$("This is a tooltip for a button");
  $t1$$.$addChild$(new $goog$ui$ToolbarSeparator$$, true);
  var $s1$$ = new $goog$ui$ToolbarSelect$$("Select font");
  $goog$array$forEach$$(["Normal", "Times", "Courier New", "Georgia", "Trebuchet", "Verdana"], function($item$$30_label$$2$$) {
    $item$$30_label$$2$$ = new $goog$ui$Option$$($item$$30_label$$2$$);
    $s1$$.$addItem$($item$$30_label$$2$$)
  });
  $s1$$.$setTooltip$("Font");
  $t1$$.$addChild$($s1$$, true);
  $goog$events$listen$$($t1$$, $EVENTS$$, $JSCompiler_emptyFn$$());
  $JSCompiler_StaticMethods_render$$($t1$$, $goog$isString$$("toolbar") ? document.getElementById("toolbar") : "toolbar")
}, void 0);
// Input 74
function $b2Bound$$() {
}
$b2Bound$$.prototype = {$IsLower$:function $$b2Bound$$$$$IsLower$$() {
  return(this.value & 1) == 0
}, $IsUpper$:function $$b2Bound$$$$$IsUpper$$() {
  return(this.value & 1) == 1
}, $Swap$:function $$b2Bound$$$$$Swap$$($b$$21$$) {
  var $tempValue$$ = this.value, $tempProxyId$$ = this.$proxyId$, $tempStabbingCount$$ = this.$stabbingCount$;
  this.value = $b$$21$$.value;
  this.$proxyId$ = $b$$21$$.$proxyId$;
  this.$stabbingCount$ = $b$$21$$.$stabbingCount$;
  $b$$21$$.value = $tempValue$$;
  $b$$21$$.$proxyId$ = $tempProxyId$$;
  $b$$21$$.$stabbingCount$ = $tempStabbingCount$$
}, value:0, $proxyId$:0, $stabbingCount$:0};
// Input 75
function $b2BoundValues$$() {
  this.$lowerValues$ = [0, 0];
  this.$upperValues$ = [0, 0]
}
;
// Input 76
function $b2BufferedPair$$() {
}
$b2BufferedPair$$.prototype = {$proxyId1$:0, $proxyId2$:0};
// Input 77
function $b2PairCallback$$() {
}
$b2PairCallback$$.prototype.$PairAdded$ = $JSCompiler_returnArg$$(null);
$b2PairCallback$$.prototype.$PairRemoved$ = $JSCompiler_emptyFn$$();
// Input 78
function $Features$$() {
}
$Features$$.prototype = {$_referenceFace$:0, $_incidentEdge$:0, $_incidentVertex$:0, $_flip$:0, $_m_id$:null};
// Input 79
function $b2ContactID$$() {
  this.$features$ = new $Features$$;
  this.$features$.$_m_id$ = this
}
$b2ContactID$$.prototype = {$Set$:function $$b2ContactID$$$$$Set$$($id$$8$$) {
  this.$set_key$($id$$8$$.$_key$)
}, $Copy$:function $$b2ContactID$$$$$Copy$$() {
  var $id$$9$$ = new $b2ContactID$$;
  $id$$9$$.$set_key$(this.$_key$);
  return $id$$9$$
}, $set_key$:function $$b2ContactID$$$$$set_key$$($value$$44$$) {
  this.$_key$ = $value$$44$$;
  this.$features$.$_referenceFace$ = this.$_key$ & 255;
  this.$features$.$_incidentEdge$ = (this.$_key$ & 65280) >> 8 & 255;
  this.$features$.$_incidentVertex$ = (this.$_key$ & 16711680) >> 16 & 255;
  this.$features$.$_flip$ = (this.$_key$ & 4278190080) >> 24 & 255
}, $features$:new $Features$$, $_key$:0};
// Input 80
function $b2ShapeDef$$() {
  this.type = $b2Shape$e_unknownShape$$;
  this.$userData$ = null;
  this.$localPosition$ = new $b2Vec2$$(0, 0);
  this.$localRotation$ = 0;
  this.$friction$ = 0.2;
  this.$density$ = this.$restitution$ = 0;
  this.$categoryBits$ = 1;
  this.$maskBits$ = 65535;
  this.$groupIndex$ = 0
}
$a$$ = $b2ShapeDef$$.prototype;
$a$$.type = 0;
$a$$.$userData$ = null;
$a$$.$localPosition$ = null;
$a$$.$localRotation$ = null;
$a$$.$friction$ = null;
$a$$.$restitution$ = null;
$a$$.$density$ = null;
$a$$.$categoryBits$ = 0;
$a$$.$maskBits$ = 0;
$a$$.$groupIndex$ = 0;
// Input 81
var $b2Settings$b2_pi$$ = Math.PI, $b2Settings$b2_angularSlop$$ = 2 / 180 * $b2Settings$b2_pi$$, $b2Settings$b2_maxAngularCorrection$$ = 8 / 180 * $b2Settings$b2_pi$$, $b2Settings$b2_angularSleepTolerance$$ = 2 / 180 / 1;
// Input 82
function $b2Pair$$() {
}
$b2Pair$$.prototype = {$SetBuffered$:function $$b2Pair$$$$$SetBuffered$$() {
  this.status |= $b2Pair$e_pairBuffered$$
}, $ClearBuffered$:function $$b2Pair$$$$$ClearBuffered$$() {
  this.status &= ~$b2Pair$e_pairBuffered$$
}, $IsBuffered$:function $$b2Pair$$$$$IsBuffered$$() {
  return(this.status & $b2Pair$e_pairBuffered$$) == $b2Pair$e_pairBuffered$$
}, $SetRemoved$:function $$b2Pair$$$$$SetRemoved$$() {
  this.status |= $b2Pair$e_pairRemoved$$
}, $ClearRemoved$:function $$b2Pair$$$$$ClearRemoved$$() {
  this.status &= ~$b2Pair$e_pairRemoved$$
}, $IsRemoved$:function $$b2Pair$$$$$IsRemoved$$() {
  return(this.status & $b2Pair$e_pairRemoved$$) == $b2Pair$e_pairRemoved$$
}, $SetFinal$:function $$b2Pair$$$$$SetFinal$$() {
  this.status |= $b2Pair$e_pairFinal$$
}, $IsFinal$:function $$b2Pair$$$$$IsFinal$$() {
  return(this.status & $b2Pair$e_pairFinal$$) == $b2Pair$e_pairFinal$$
}, $userData$:null, $proxyId1$:0, $proxyId2$:0, next:0, status:0};
var $b2Pair$e_pairBuffered$$ = 1, $b2Pair$e_pairRemoved$$ = 2, $b2Pair$e_pairFinal$$ = 4;
// Input 83
function $b2PairManager$$() {
  var $i$$72$$ = 0;
  this.$m_hashTable$ = Array(8192);
  for($i$$72$$ = 0;$i$$72$$ < 8192;++$i$$72$$) {
    this.$m_hashTable$[$i$$72$$] = 65535
  }
  this.$m_pairs$ = Array(8192);
  for($i$$72$$ = 0;$i$$72$$ < 8192;++$i$$72$$) {
    this.$m_pairs$[$i$$72$$] = new $b2Pair$$
  }
  this.$m_pairBuffer$ = Array(8192);
  for($i$$72$$ = 0;$i$$72$$ < 8192;++$i$$72$$) {
    this.$m_pairBuffer$[$i$$72$$] = new $b2BufferedPair$$
  }
  for($i$$72$$ = 0;$i$$72$$ < 8192;++$i$$72$$) {
    this.$m_pairs$[$i$$72$$].$proxyId1$ = 65535;
    this.$m_pairs$[$i$$72$$].$proxyId2$ = 65535;
    this.$m_pairs$[$i$$72$$].$userData$ = null;
    this.$m_pairs$[$i$$72$$].status = 0;
    this.$m_pairs$[$i$$72$$].next = $i$$72$$ + 1
  }
  this.$m_pairs$[8191].next = 65535;
  this.$m_pairCount$ = 0
}
$b2PairManager$$.prototype = {$Initialize$:function $$b2PairManager$$$$$Initialize$$($broadPhase$$, $callback$$22$$) {
  this.$m_broadPhase$ = $broadPhase$$;
  this.$m_callback$ = $callback$$22$$
}, $AddBufferedPair$:function $$b2PairManager$$$$$AddBufferedPair$$($proxyId1$$, $proxyId2$$) {
  var $pair$$1$$ = this.$AddPair$($proxyId1$$, $proxyId2$$);
  if($pair$$1$$.$IsBuffered$() == false) {
    $pair$$1$$.$SetBuffered$();
    this.$m_pairBuffer$[this.$m_pairBufferCount$].$proxyId1$ = $pair$$1$$.$proxyId1$;
    this.$m_pairBuffer$[this.$m_pairBufferCount$].$proxyId2$ = $pair$$1$$.$proxyId2$;
    ++this.$m_pairBufferCount$
  }
  $pair$$1$$.$ClearRemoved$()
}, $RemoveBufferedPair$:function $$b2PairManager$$$$$RemoveBufferedPair$$($proxyId1$$1$$, $proxyId2$$1$$) {
  var $pair$$2$$ = this.$Find$($proxyId1$$1$$, $proxyId2$$1$$);
  if($pair$$2$$ != null) {
    if($pair$$2$$.$IsBuffered$() == false) {
      $pair$$2$$.$SetBuffered$();
      this.$m_pairBuffer$[this.$m_pairBufferCount$].$proxyId1$ = $pair$$2$$.$proxyId1$;
      this.$m_pairBuffer$[this.$m_pairBufferCount$].$proxyId2$ = $pair$$2$$.$proxyId2$;
      ++this.$m_pairBufferCount$
    }
    $pair$$2$$.$SetRemoved$()
  }
}, $Commit$:function $$b2PairManager$$$$$Commit$$() {
  var $i$$73$$ = 0, $removeCount$$ = 0, $proxies$$ = this.$m_broadPhase$.$m_proxyPool$;
  for($i$$73$$ = 0;$i$$73$$ < this.$m_pairBufferCount$;++$i$$73$$) {
    var $pair$$3$$ = this.$Find$(this.$m_pairBuffer$[$i$$73$$].$proxyId1$, this.$m_pairBuffer$[$i$$73$$].$proxyId2$);
    $pair$$3$$.$ClearBuffered$();
    var $proxy1$$ = $proxies$$[$pair$$3$$.$proxyId1$], $proxy2$$ = $proxies$$[$pair$$3$$.$proxyId2$];
    if($pair$$3$$.$IsRemoved$()) {
      $pair$$3$$.$IsFinal$() == true && this.$m_callback$.$PairRemoved$($proxy1$$.$userData$, $proxy2$$.$userData$, $pair$$3$$.$userData$);
      this.$m_pairBuffer$[$removeCount$$].$proxyId1$ = $pair$$3$$.$proxyId1$;
      this.$m_pairBuffer$[$removeCount$$].$proxyId2$ = $pair$$3$$.$proxyId2$;
      ++$removeCount$$
    }else {
      if($pair$$3$$.$IsFinal$() == false) {
        $pair$$3$$.$userData$ = this.$m_callback$.$PairAdded$($proxy1$$.$userData$, $proxy2$$.$userData$);
        $pair$$3$$.$SetFinal$()
      }
    }
  }
  for($i$$73$$ = 0;$i$$73$$ < $removeCount$$;++$i$$73$$) {
    this.$RemovePair$(this.$m_pairBuffer$[$i$$73$$].$proxyId1$, this.$m_pairBuffer$[$i$$73$$].$proxyId2$)
  }
  this.$m_pairBufferCount$ = 0
}, $AddPair$:function $$b2PairManager$$$$$AddPair$$($proxyId1$$2$$, $proxyId2$$2$$) {
  if($proxyId1$$2$$ > $proxyId2$$2$$) {
    var $hash_temp$$ = $proxyId1$$2$$;
    $proxyId1$$2$$ = $proxyId2$$2$$;
    $proxyId2$$2$$ = $hash_temp$$
  }
  $hash_temp$$ = $b2PairManager$Hash$$($proxyId1$$2$$, $proxyId2$$2$$) & 8191;
  var $pair$$4$$ = $pair$$4$$ = this.$FindHash$($proxyId1$$2$$, $proxyId2$$2$$, $hash_temp$$);
  if($pair$$4$$ != null) {
    return $pair$$4$$
  }
  var $pIndex$$ = this.$m_freePair$;
  $pair$$4$$ = this.$m_pairs$[$pIndex$$];
  this.$m_freePair$ = $pair$$4$$.next;
  $pair$$4$$.$proxyId1$ = $proxyId1$$2$$;
  $pair$$4$$.$proxyId2$ = $proxyId2$$2$$;
  $pair$$4$$.status = 0;
  $pair$$4$$.$userData$ = null;
  $pair$$4$$.next = this.$m_hashTable$[$hash_temp$$];
  this.$m_hashTable$[$hash_temp$$] = $pIndex$$;
  ++this.$m_pairCount$;
  return $pair$$4$$
}, $RemovePair$:function $$b2PairManager$$$$$RemovePair$$($proxyId1$$3$$, $proxyId2$$3$$) {
  if($proxyId1$$3$$ > $proxyId2$$3$$) {
    var $index$$69_temp$$1$$ = $proxyId1$$3$$;
    $proxyId1$$3$$ = $proxyId2$$3$$;
    $proxyId2$$3$$ = $index$$69_temp$$1$$
  }
  for(var $hash$$1_pair$$5$$ = $b2PairManager$Hash$$($proxyId1$$3$$, $proxyId2$$3$$) & 8191, $node$$25_userData$$ = this.$m_hashTable$[$hash$$1_pair$$5$$], $pNode$$ = null;$node$$25_userData$$ != 65535;) {
    if(this.$m_pairs$[$node$$25_userData$$].$proxyId1$ == $proxyId1$$3$$ && this.$m_pairs$[$node$$25_userData$$].$proxyId2$ == $proxyId2$$3$$) {
      $index$$69_temp$$1$$ = $node$$25_userData$$;
      if($pNode$$) {
        $pNode$$.next = this.$m_pairs$[$node$$25_userData$$].next
      }else {
        this.$m_hashTable$[$hash$$1_pair$$5$$] = this.$m_pairs$[$node$$25_userData$$].next
      }
      $hash$$1_pair$$5$$ = this.$m_pairs$[$index$$69_temp$$1$$];
      $node$$25_userData$$ = $hash$$1_pair$$5$$.$userData$;
      $hash$$1_pair$$5$$.next = this.$m_freePair$;
      $hash$$1_pair$$5$$.$proxyId1$ = 65535;
      $hash$$1_pair$$5$$.$proxyId2$ = 65535;
      $hash$$1_pair$$5$$.$userData$ = null;
      $hash$$1_pair$$5$$.status = 0;
      this.$m_freePair$ = $index$$69_temp$$1$$;
      --this.$m_pairCount$;
      return $node$$25_userData$$
    }else {
      $pNode$$ = this.$m_pairs$[$node$$25_userData$$];
      $node$$25_userData$$ = $pNode$$.next
    }
  }
  return null
}, $Find$:function $$b2PairManager$$$$$Find$$($proxyId1$$4$$, $proxyId2$$4$$) {
  if($proxyId1$$4$$ > $proxyId2$$4$$) {
    var $temp$$2$$ = $proxyId1$$4$$;
    $proxyId1$$4$$ = $proxyId2$$4$$;
    $proxyId2$$4$$ = $temp$$2$$
  }
  return this.$FindHash$($proxyId1$$4$$, $proxyId2$$4$$, $b2PairManager$Hash$$($proxyId1$$4$$, $proxyId2$$4$$) & 8191)
}, $FindHash$:function $$b2PairManager$$$$$FindHash$$($proxyId1$$5$$, $proxyId2$$5$$, $hash$$3_index$$70$$) {
  for($hash$$3_index$$70$$ = this.$m_hashTable$[$hash$$3_index$$70$$];$hash$$3_index$$70$$ != 65535 && (this.$m_pairs$[$hash$$3_index$$70$$].$proxyId1$ == $proxyId1$$5$$ && this.$m_pairs$[$hash$$3_index$$70$$].$proxyId2$ == $proxyId2$$5$$) == false;) {
    $hash$$3_index$$70$$ = this.$m_pairs$[$hash$$3_index$$70$$].next
  }
  if($hash$$3_index$$70$$ == 65535) {
    return null
  }
  return this.$m_pairs$[$hash$$3_index$$70$$]
}, $m_broadPhase$:null, $m_callback$:null, $m_pairs$:null, $m_freePair$:0, $m_pairCount$:0, $m_pairBuffer$:null, $m_pairBufferCount$:0, $m_hashTable$:null};
function $b2PairManager$Hash$$($proxyId1$$6$$, $proxyId2$$6$$) {
  var $key$$49$$ = $proxyId2$$6$$ << 16 & 4294901760 | $proxyId1$$6$$;
  $key$$49$$ = ~$key$$49$$ + ($key$$49$$ << 15 & 4294934528);
  $key$$49$$ ^= $key$$49$$ >> 12 & 1048575;
  $key$$49$$ += $key$$49$$ << 2 & 4294967292;
  $key$$49$$ ^= $key$$49$$ >> 4 & 268435455;
  $key$$49$$ *= 2057;
  $key$$49$$ ^= $key$$49$$ >> 16 & 65535;
  return $key$$49$$
}
;
// Input 84
function $b2Proxy$$() {
  this.$lowerBounds$ = [0, 0];
  this.$upperBounds$ = [0, 0]
}
$b2Proxy$$.prototype = {$GetNext$:function $$b2Proxy$$$$$GetNext$$() {
  return this.$lowerBounds$[0]
}, $SetNext$:function $$b2Proxy$$$$$SetNext$$($next$$2$$) {
  this.$lowerBounds$[0] = $next$$2$$
}, $IsValid$:function $$b2Proxy$$$$$IsValid$$() {
  return this.$overlapCount$ != 65535
}, $lowerBounds$:[0, 0], $upperBounds$:[0, 0], $overlapCount$:0, timeStamp:0, $userData$:null};
// Input 85
function $b2Mat22$$($angle$$1_s$$15$$, $c$$1_c1$$, $c2$$) {
  if($angle$$1_s$$15$$ == null) {
    $angle$$1_s$$15$$ = 0
  }
  this.$col1$ = new $b2Vec2$$;
  this.$col2$ = new $b2Vec2$$;
  if($c$$1_c1$$ != null && $c2$$ != null) {
    $JSCompiler_StaticMethods_SetV$$(this.$col1$, $c$$1_c1$$);
    $JSCompiler_StaticMethods_SetV$$(this.$col2$, $c2$$)
  }else {
    $c$$1_c1$$ = Math.cos($angle$$1_s$$15$$);
    $angle$$1_s$$15$$ = Math.sin($angle$$1_s$$15$$);
    this.$col1$.x = $c$$1_c1$$;
    this.$col2$.x = -$angle$$1_s$$15$$;
    this.$col1$.y = $angle$$1_s$$15$$;
    this.$col2$.y = $c$$1_c1$$
  }
}
$a$$ = $b2Mat22$$.prototype;
$a$$.$Set$ = function $$a$$$$Set$$($angle$$2_s$$16$$) {
  var $c$$2$$ = Math.cos($angle$$2_s$$16$$);
  $angle$$2_s$$16$$ = Math.sin($angle$$2_s$$16$$);
  this.$col1$.x = $c$$2$$;
  this.$col2$.x = -$angle$$2_s$$16$$;
  this.$col1$.y = $angle$$2_s$$16$$;
  this.$col2$.y = $c$$2$$
};
$a$$.$Copy$ = function $$a$$$$Copy$$() {
  return new $b2Mat22$$(0, this.$col1$, this.$col2$)
};
function $JSCompiler_StaticMethods_SetM$$($JSCompiler_StaticMethods_SetM$self$$, $m$$) {
  $JSCompiler_StaticMethods_SetV$$($JSCompiler_StaticMethods_SetM$self$$.$col1$, $m$$.$col1$);
  $JSCompiler_StaticMethods_SetV$$($JSCompiler_StaticMethods_SetM$self$$.$col2$, $m$$.$col2$)
}
function $JSCompiler_StaticMethods_AddM$$($JSCompiler_StaticMethods_AddM$self$$, $m$$1$$) {
  $JSCompiler_StaticMethods_AddM$self$$.$col1$.x += $m$$1$$.$col1$.x;
  $JSCompiler_StaticMethods_AddM$self$$.$col1$.y += $m$$1$$.$col1$.y;
  $JSCompiler_StaticMethods_AddM$self$$.$col2$.x += $m$$1$$.$col2$.x;
  $JSCompiler_StaticMethods_AddM$self$$.$col2$.y += $m$$1$$.$col2$.y
}
$a$$.$SetZero$ = function $$a$$$$SetZero$$() {
  this.$col1$.x = 0;
  this.$col2$.x = 0;
  this.$col1$.y = 0;
  this.$col2$.y = 0
};
function $JSCompiler_StaticMethods_Invert$$($JSCompiler_StaticMethods_Invert$self$$, $out$$) {
  var $a$$19$$ = $JSCompiler_StaticMethods_Invert$self$$.$col1$.x, $b$$22$$ = $JSCompiler_StaticMethods_Invert$self$$.$col2$.x, $c$$3$$ = $JSCompiler_StaticMethods_Invert$self$$.$col1$.y, $d$$ = $JSCompiler_StaticMethods_Invert$self$$.$col2$.y, $det$$ = $a$$19$$ * $d$$ - $b$$22$$ * $c$$3$$;
  $det$$ = 1 / $det$$;
  $out$$.$col1$.x = $det$$ * $d$$;
  $out$$.$col2$.x = -$det$$ * $b$$22$$;
  $out$$.$col1$.y = -$det$$ * $c$$3$$;
  $out$$.$col2$.y = $det$$ * $a$$19$$;
  return $out$$
}
$a$$.$Solve$ = function $$a$$$$Solve$$($out$$1$$, $bX$$, $bY$$) {
  var $a11$$ = this.$col1$.x, $a12$$ = this.$col2$.x, $a21$$ = this.$col1$.y, $a22$$ = this.$col2$.y, $det$$1$$ = $a11$$ * $a22$$ - $a12$$ * $a21$$;
  $det$$1$$ = 1 / $det$$1$$;
  $out$$1$$.x = $det$$1$$ * ($a22$$ * $bX$$ - $a12$$ * $bY$$);
  $out$$1$$.y = $det$$1$$ * ($a11$$ * $bY$$ - $a21$$ * $bX$$);
  return $out$$1$$
};
$a$$.$Abs$ = function $$a$$$$Abs$$() {
  this.$col1$.$Abs$();
  this.$col2$.$Abs$()
};
// Input 86
function $b2Math$b2Dot$$($a$$20$$, $b$$23$$) {
  return $a$$20$$.x * $b$$23$$.x + $a$$20$$.y * $b$$23$$.y
}
function $b2Math$b2MulMV$$($A$$, $v$$) {
  return new $b2Vec2$$($A$$.$col1$.x * $v$$.x + $A$$.$col2$.x * $v$$.y, $A$$.$col1$.y * $v$$.x + $A$$.$col2$.y * $v$$.y)
}
function $b2Math$AddVV$$($a$$24$$, $b$$25$$) {
  return new $b2Vec2$$($a$$24$$.x + $b$$25$$.x, $a$$24$$.y + $b$$25$$.y)
}
function $b2Math$SubtractVV$$($a$$25$$, $b$$26$$) {
  return new $b2Vec2$$($a$$25$$.x - $b$$26$$.x, $a$$25$$.y - $b$$26$$.y)
}
function $b2Math$b2Abs$$($a$$27$$) {
  return $a$$27$$ > 0 ? $a$$27$$ : -$a$$27$$
}
function $b2Math$b2Max$$($a$$31$$, $b$$30$$) {
  return $a$$31$$ > $b$$30$$ ? $a$$31$$ : $b$$30$$
}
function $b2Math$b2Clamp$$($a$$33$$, $low$$, $high$$) {
  return $b2Math$b2Max$$($low$$, $a$$33$$ < $high$$ ? $a$$33$$ : $high$$)
}
;
// Input 87
function $b2Vec2$$($x_$$, $y_$$) {
  if($x_$$ === undefined) {
    $x_$$ = 0
  }
  this.x = $x_$$;
  if($y_$$ === undefined) {
    $y_$$ = 0
  }
  this.y = $y_$$
}
$a$$ = $b2Vec2$$.prototype;
$a$$.$SetZero$ = function $$a$$$$SetZero$$() {
  this.y = this.x = 0
};
$a$$.$Set$ = function $$a$$$$Set$$($x_$$1$$, $y_$$1$$) {
  this.x = $x_$$1$$;
  this.y = $y_$$1$$
};
function $JSCompiler_StaticMethods_SetV$$($JSCompiler_StaticMethods_SetV$self$$, $v$$2$$) {
  $JSCompiler_StaticMethods_SetV$self$$.x = $v$$2$$.x;
  $JSCompiler_StaticMethods_SetV$self$$.y = $v$$2$$.y
}
$a$$.$Copy$ = function $$a$$$$Copy$$() {
  return new $b2Vec2$$(this.x, this.y)
};
function $JSCompiler_StaticMethods_Add$$($JSCompiler_StaticMethods_Add$self$$, $v$$3$$) {
  $JSCompiler_StaticMethods_Add$self$$.x += $v$$3$$.x;
  $JSCompiler_StaticMethods_Add$self$$.y += $v$$3$$.y
}
function $JSCompiler_StaticMethods_Multiply$$($JSCompiler_StaticMethods_Multiply$self$$, $a$$36$$) {
  $JSCompiler_StaticMethods_Multiply$self$$.x *= $a$$36$$;
  $JSCompiler_StaticMethods_Multiply$self$$.y *= $a$$36$$
}
function $JSCompiler_StaticMethods_MulM$$($JSCompiler_StaticMethods_MulM$self$$, $A$$6$$) {
  var $tX$$ = $JSCompiler_StaticMethods_MulM$self$$.x;
  $JSCompiler_StaticMethods_MulM$self$$.x = $A$$6$$.$col1$.x * $tX$$ + $A$$6$$.$col2$.x * $JSCompiler_StaticMethods_MulM$self$$.y;
  $JSCompiler_StaticMethods_MulM$self$$.y = $A$$6$$.$col1$.y * $tX$$ + $A$$6$$.$col2$.y * $JSCompiler_StaticMethods_MulM$self$$.y
}
$a$$.$Abs$ = function $$a$$$$Abs$$() {
  this.x = Math.abs(this.x);
  this.y = Math.abs(this.y)
};
function $JSCompiler_StaticMethods_Length$$($JSCompiler_StaticMethods_Length$self$$) {
  return Math.sqrt($JSCompiler_StaticMethods_Length$self$$.x * $JSCompiler_StaticMethods_Length$self$$.x + $JSCompiler_StaticMethods_Length$self$$.y * $JSCompiler_StaticMethods_Length$self$$.y)
}
$a$$.$IsValid$ = function $$a$$$$IsValid$$() {
  return isFinite(this.x) && isFinite(this.y)
};
// Input 88
function $b2AABB$$() {
  this.$minVertex$ = new $b2Vec2$$;
  this.$maxVertex$ = new $b2Vec2$$
}
$b2AABB$$.prototype.$IsValid$ = function $$b2AABB$$$$$IsValid$$() {
  var $dX_valid$$ = this.$maxVertex$.x, $dY$$ = this.$maxVertex$.y;
  $dX_valid$$ = this.$maxVertex$.x;
  $dY$$ = this.$maxVertex$.y;
  $dX_valid$$ -= this.$minVertex$.x;
  $dY$$ -= this.$minVertex$.y;
  return $dX_valid$$ = ($dX_valid$$ = $dX_valid$$ >= 0 && $dY$$ >= 0) && this.$minVertex$.$IsValid$() && this.$maxVertex$.$IsValid$()
};
// Input 89
function $b2BroadPhase$$($worldAABB$$, $callback$$23$$) {
  this.$m_pairManager$ = new $b2PairManager$$;
  this.$m_proxyPool$ = Array(8192);
  this.$m_bounds$ = Array(2048);
  this.$m_queryResults$ = Array(1024);
  this.$m_quantizationFactor$ = new $b2Vec2$$;
  var $dX$$1_i$$74$$ = 0;
  this.$m_pairManager$.$Initialize$(this, $callback$$23$$);
  this.$m_worldAABB$ = $worldAABB$$;
  for($dX$$1_i$$74$$ = this.$m_proxyCount$ = 0;$dX$$1_i$$74$$ < 1024;$dX$$1_i$$74$$++) {
    this.$m_queryResults$[$dX$$1_i$$74$$] = 0
  }
  this.$m_bounds$ = Array(2);
  for($dX$$1_i$$74$$ = 0;$dX$$1_i$$74$$ < 2;$dX$$1_i$$74$$++) {
    this.$m_bounds$[$dX$$1_i$$74$$] = Array(2048);
    for(var $dY$$1_j$$5_tProxy$$ = 0;$dY$$1_j$$5_tProxy$$ < 2048;$dY$$1_j$$5_tProxy$$++) {
      this.$m_bounds$[$dX$$1_i$$74$$][$dY$$1_j$$5_tProxy$$] = new $b2Bound$$
    }
  }
  $dX$$1_i$$74$$ = $worldAABB$$.$maxVertex$.x;
  $dY$$1_j$$5_tProxy$$ = $worldAABB$$.$maxVertex$.y;
  $dX$$1_i$$74$$ -= $worldAABB$$.$minVertex$.x;
  $dY$$1_j$$5_tProxy$$ -= $worldAABB$$.$minVertex$.y;
  this.$m_quantizationFactor$.x = 65535 / $dX$$1_i$$74$$;
  this.$m_quantizationFactor$.y = 65535 / $dY$$1_j$$5_tProxy$$;
  for($dX$$1_i$$74$$ = 0;$dX$$1_i$$74$$ < 1023;++$dX$$1_i$$74$$) {
    $dY$$1_j$$5_tProxy$$ = new $b2Proxy$$;
    this.$m_proxyPool$[$dX$$1_i$$74$$] = $dY$$1_j$$5_tProxy$$;
    $dY$$1_j$$5_tProxy$$.$SetNext$($dX$$1_i$$74$$ + 1);
    $dY$$1_j$$5_tProxy$$.timeStamp = 0;
    $dY$$1_j$$5_tProxy$$.$overlapCount$ = 65535;
    $dY$$1_j$$5_tProxy$$.$userData$ = null
  }
  $dY$$1_j$$5_tProxy$$ = new $b2Proxy$$;
  this.$m_proxyPool$[1023] = $dY$$1_j$$5_tProxy$$;
  $dY$$1_j$$5_tProxy$$.$SetNext$(65535);
  $dY$$1_j$$5_tProxy$$.timeStamp = 0;
  $dY$$1_j$$5_tProxy$$.$overlapCount$ = 65535;
  $dY$$1_j$$5_tProxy$$.$userData$ = null;
  this.$m_freeProxy$ = 0;
  this.$m_timeStamp$ = 1;
  this.$m_queryResultCount$ = 0
}
$b2BroadPhase$$.prototype = {$InRange$:function $$b2BroadPhase$$$$$InRange$$($aabb$$) {
  var $dX$$2$$, $dY$$2$$, $d2X$$, $d2Y$$;
  $dX$$2$$ = $aabb$$.$minVertex$.x;
  $dY$$2$$ = $aabb$$.$minVertex$.y;
  $dX$$2$$ -= this.$m_worldAABB$.$maxVertex$.x;
  $dY$$2$$ -= this.$m_worldAABB$.$maxVertex$.y;
  $d2X$$ = this.$m_worldAABB$.$minVertex$.x;
  $d2Y$$ = this.$m_worldAABB$.$minVertex$.y;
  $d2X$$ -= $aabb$$.$maxVertex$.x;
  $d2Y$$ -= $aabb$$.$maxVertex$.y;
  $dX$$2$$ = $b2Math$b2Max$$($dX$$2$$, $d2X$$);
  $dY$$2$$ = $b2Math$b2Max$$($dY$$2$$, $d2Y$$);
  return $b2Math$b2Max$$($dX$$2$$, $dY$$2$$) < 0
}, $CreateProxy$:function $$b2BroadPhase$$$$$CreateProxy$$($aabb$$1$$, $userData$$1$$) {
  var $index$$71_tArr$$ = 0, $boundCount_i$$75_proxy$$4$$, $proxyId$$1$$ = this.$m_freeProxy$;
  $boundCount_i$$75_proxy$$4$$ = this.$m_proxyPool$[$proxyId$$1$$];
  this.$m_freeProxy$ = $boundCount_i$$75_proxy$$4$$.$GetNext$();
  $boundCount_i$$75_proxy$$4$$.$overlapCount$ = 0;
  $boundCount_i$$75_proxy$$4$$.$userData$ = $userData$$1$$;
  $boundCount_i$$75_proxy$$4$$ = 2 * this.$m_proxyCount$;
  var $lowerValues$$ = [], $upperValues$$ = [];
  this.$ComputeBounds$($lowerValues$$, $upperValues$$, $aabb$$1$$);
  for(var $axis$$ = 0;$axis$$ < 2;++$axis$$) {
    var $bounds$$ = this.$m_bounds$[$axis$$], $lowerIndex_lowerIndexOut_proxy2$$1$$ = 0, $upperIndex_upperIndexOut$$ = 0;
    $lowerIndex_lowerIndexOut_proxy2$$1$$ = [$lowerIndex_lowerIndexOut_proxy2$$1$$];
    $upperIndex_upperIndexOut$$ = [$upperIndex_upperIndexOut$$];
    this.$Query$($lowerIndex_lowerIndexOut_proxy2$$1$$, $upperIndex_upperIndexOut$$, $lowerValues$$[$axis$$], $upperValues$$[$axis$$], $bounds$$, $boundCount_i$$75_proxy$$4$$, $axis$$);
    $lowerIndex_lowerIndexOut_proxy2$$1$$ = $lowerIndex_lowerIndexOut_proxy2$$1$$[0];
    $upperIndex_upperIndexOut$$ = $upperIndex_upperIndexOut$$[0];
    $index$$71_tArr$$ = [];
    var $j$$6$$ = 0, $tEnd$$ = $boundCount_i$$75_proxy$$4$$ - $upperIndex_upperIndexOut$$, $tBound1$$, $tBound2$$;
    for($j$$6$$ = 0;$j$$6$$ < $tEnd$$;$j$$6$$++) {
      $index$$71_tArr$$[$j$$6$$] = new $b2Bound$$;
      $tBound1$$ = $index$$71_tArr$$[$j$$6$$];
      $tBound2$$ = $bounds$$[$upperIndex_upperIndexOut$$ + $j$$6$$];
      $tBound1$$.value = $tBound2$$.value;
      $tBound1$$.$proxyId$ = $tBound2$$.$proxyId$;
      $tBound1$$.$stabbingCount$ = $tBound2$$.$stabbingCount$
    }
    $tEnd$$ = $index$$71_tArr$$.length;
    var $tIndex$$ = $upperIndex_upperIndexOut$$ + 2;
    for($j$$6$$ = 0;$j$$6$$ < $tEnd$$;$j$$6$$++) {
      $tBound2$$ = $index$$71_tArr$$[$j$$6$$];
      $tBound1$$ = $bounds$$[$tIndex$$ + $j$$6$$];
      $tBound1$$.value = $tBound2$$.value;
      $tBound1$$.$proxyId$ = $tBound2$$.$proxyId$;
      $tBound1$$.$stabbingCount$ = $tBound2$$.$stabbingCount$
    }
    $index$$71_tArr$$ = [];
    $tEnd$$ = $upperIndex_upperIndexOut$$ - $lowerIndex_lowerIndexOut_proxy2$$1$$;
    for($j$$6$$ = 0;$j$$6$$ < $tEnd$$;$j$$6$$++) {
      $index$$71_tArr$$[$j$$6$$] = new $b2Bound$$;
      $tBound1$$ = $index$$71_tArr$$[$j$$6$$];
      $tBound2$$ = $bounds$$[$lowerIndex_lowerIndexOut_proxy2$$1$$ + $j$$6$$];
      $tBound1$$.value = $tBound2$$.value;
      $tBound1$$.$proxyId$ = $tBound2$$.$proxyId$;
      $tBound1$$.$stabbingCount$ = $tBound2$$.$stabbingCount$
    }
    $tEnd$$ = $index$$71_tArr$$.length;
    $tIndex$$ = $lowerIndex_lowerIndexOut_proxy2$$1$$ + 1;
    for($j$$6$$ = 0;$j$$6$$ < $tEnd$$;$j$$6$$++) {
      $tBound2$$ = $index$$71_tArr$$[$j$$6$$];
      $tBound1$$ = $bounds$$[$tIndex$$ + $j$$6$$];
      $tBound1$$.value = $tBound2$$.value;
      $tBound1$$.$proxyId$ = $tBound2$$.$proxyId$;
      $tBound1$$.$stabbingCount$ = $tBound2$$.$stabbingCount$
    }
    ++$upperIndex_upperIndexOut$$;
    $bounds$$[$lowerIndex_lowerIndexOut_proxy2$$1$$].value = $lowerValues$$[$axis$$];
    $bounds$$[$lowerIndex_lowerIndexOut_proxy2$$1$$].$proxyId$ = $proxyId$$1$$;
    $bounds$$[$upperIndex_upperIndexOut$$].value = $upperValues$$[$axis$$];
    $bounds$$[$upperIndex_upperIndexOut$$].$proxyId$ = $proxyId$$1$$;
    $bounds$$[$lowerIndex_lowerIndexOut_proxy2$$1$$].$stabbingCount$ = $lowerIndex_lowerIndexOut_proxy2$$1$$ == 0 ? 0 : $bounds$$[$lowerIndex_lowerIndexOut_proxy2$$1$$ - 1].$stabbingCount$;
    $bounds$$[$upperIndex_upperIndexOut$$].$stabbingCount$ = $bounds$$[$upperIndex_upperIndexOut$$ - 1].$stabbingCount$;
    for($index$$71_tArr$$ = $lowerIndex_lowerIndexOut_proxy2$$1$$;$index$$71_tArr$$ < $upperIndex_upperIndexOut$$;++$index$$71_tArr$$) {
      $bounds$$[$index$$71_tArr$$].$stabbingCount$++
    }
    for($index$$71_tArr$$ = $lowerIndex_lowerIndexOut_proxy2$$1$$;$index$$71_tArr$$ < $boundCount_i$$75_proxy$$4$$ + 2;++$index$$71_tArr$$) {
      $lowerIndex_lowerIndexOut_proxy2$$1$$ = this.$m_proxyPool$[$bounds$$[$index$$71_tArr$$].$proxyId$];
      if($bounds$$[$index$$71_tArr$$].$IsLower$()) {
        $lowerIndex_lowerIndexOut_proxy2$$1$$.$lowerBounds$[$axis$$] = $index$$71_tArr$$
      }else {
        $lowerIndex_lowerIndexOut_proxy2$$1$$.$upperBounds$[$axis$$] = $index$$71_tArr$$
      }
    }
  }
  ++this.$m_proxyCount$;
  for($boundCount_i$$75_proxy$$4$$ = 0;$boundCount_i$$75_proxy$$4$$ < this.$m_queryResultCount$;++$boundCount_i$$75_proxy$$4$$) {
    this.$m_pairManager$.$AddBufferedPair$($proxyId$$1$$, this.$m_queryResults$[$boundCount_i$$75_proxy$$4$$])
  }
  this.$m_pairManager$.$Commit$();
  this.$m_queryResultCount$ = 0;
  this.$IncrementTimeStamp$();
  return $proxyId$$1$$
}, $DestroyProxy$:function $$b2BroadPhase$$$$$DestroyProxy$$($proxyId$$2$$) {
  for(var $proxy$$5$$ = this.$m_proxyPool$[$proxyId$$2$$], $boundCount$$1_i$$76$$ = 2 * this.$m_proxyCount$, $axis$$1$$ = 0;$axis$$1$$ < 2;++$axis$$1$$) {
    var $bounds$$1$$ = this.$m_bounds$[$axis$$1$$], $index2_lowerIndex$$1$$ = $proxy$$5$$.$lowerBounds$[$axis$$1$$], $upperIndex$$1$$ = $proxy$$5$$.$upperBounds$[$axis$$1$$], $lowerValue$$ = $bounds$$1$$[$index2_lowerIndex$$1$$].value, $upperValue$$ = $bounds$$1$$[$upperIndex$$1$$].value, $index$$72_tArr$$1$$ = [], $j$$7_proxy2$$2$$ = 0, $tEnd$$1$$ = $upperIndex$$1$$ - $index2_lowerIndex$$1$$ - 1, $tBound1$$1$$, $tBound2$$1$$;
    for($j$$7_proxy2$$2$$ = 0;$j$$7_proxy2$$2$$ < $tEnd$$1$$;$j$$7_proxy2$$2$$++) {
      $index$$72_tArr$$1$$[$j$$7_proxy2$$2$$] = new $b2Bound$$;
      $tBound1$$1$$ = $index$$72_tArr$$1$$[$j$$7_proxy2$$2$$];
      $tBound2$$1$$ = $bounds$$1$$[$index2_lowerIndex$$1$$ + 1 + $j$$7_proxy2$$2$$];
      $tBound1$$1$$.value = $tBound2$$1$$.value;
      $tBound1$$1$$.$proxyId$ = $tBound2$$1$$.$proxyId$;
      $tBound1$$1$$.$stabbingCount$ = $tBound2$$1$$.$stabbingCount$
    }
    $tEnd$$1$$ = $index$$72_tArr$$1$$.length;
    var $tIndex$$1$$ = $index2_lowerIndex$$1$$;
    for($j$$7_proxy2$$2$$ = 0;$j$$7_proxy2$$2$$ < $tEnd$$1$$;$j$$7_proxy2$$2$$++) {
      $tBound2$$1$$ = $index$$72_tArr$$1$$[$j$$7_proxy2$$2$$];
      $tBound1$$1$$ = $bounds$$1$$[$tIndex$$1$$ + $j$$7_proxy2$$2$$];
      $tBound1$$1$$.value = $tBound2$$1$$.value;
      $tBound1$$1$$.$proxyId$ = $tBound2$$1$$.$proxyId$;
      $tBound1$$1$$.$stabbingCount$ = $tBound2$$1$$.$stabbingCount$
    }
    $index$$72_tArr$$1$$ = [];
    $tEnd$$1$$ = $boundCount$$1_i$$76$$ - $upperIndex$$1$$ - 1;
    for($j$$7_proxy2$$2$$ = 0;$j$$7_proxy2$$2$$ < $tEnd$$1$$;$j$$7_proxy2$$2$$++) {
      $index$$72_tArr$$1$$[$j$$7_proxy2$$2$$] = new $b2Bound$$;
      $tBound1$$1$$ = $index$$72_tArr$$1$$[$j$$7_proxy2$$2$$];
      $tBound2$$1$$ = $bounds$$1$$[$upperIndex$$1$$ + 1 + $j$$7_proxy2$$2$$];
      $tBound1$$1$$.value = $tBound2$$1$$.value;
      $tBound1$$1$$.$proxyId$ = $tBound2$$1$$.$proxyId$;
      $tBound1$$1$$.$stabbingCount$ = $tBound2$$1$$.$stabbingCount$
    }
    $tEnd$$1$$ = $index$$72_tArr$$1$$.length;
    $tIndex$$1$$ = $upperIndex$$1$$ - 1;
    for($j$$7_proxy2$$2$$ = 0;$j$$7_proxy2$$2$$ < $tEnd$$1$$;$j$$7_proxy2$$2$$++) {
      $tBound2$$1$$ = $index$$72_tArr$$1$$[$j$$7_proxy2$$2$$];
      $tBound1$$1$$ = $bounds$$1$$[$tIndex$$1$$ + $j$$7_proxy2$$2$$];
      $tBound1$$1$$.value = $tBound2$$1$$.value;
      $tBound1$$1$$.$proxyId$ = $tBound2$$1$$.$proxyId$;
      $tBound1$$1$$.$stabbingCount$ = $tBound2$$1$$.$stabbingCount$
    }
    $tEnd$$1$$ = $boundCount$$1_i$$76$$ - 2;
    for($index$$72_tArr$$1$$ = $index2_lowerIndex$$1$$;$index$$72_tArr$$1$$ < $tEnd$$1$$;++$index$$72_tArr$$1$$) {
      $j$$7_proxy2$$2$$ = this.$m_proxyPool$[$bounds$$1$$[$index$$72_tArr$$1$$].$proxyId$];
      if($bounds$$1$$[$index$$72_tArr$$1$$].$IsLower$()) {
        $j$$7_proxy2$$2$$.$lowerBounds$[$axis$$1$$] = $index$$72_tArr$$1$$
      }else {
        $j$$7_proxy2$$2$$.$upperBounds$[$axis$$1$$] = $index$$72_tArr$$1$$
      }
    }
    $tEnd$$1$$ = $upperIndex$$1$$ - 1;
    for($index2_lowerIndex$$1$$ = $index2_lowerIndex$$1$$;$index2_lowerIndex$$1$$ < $tEnd$$1$$;++$index2_lowerIndex$$1$$) {
      $bounds$$1$$[$index2_lowerIndex$$1$$].$stabbingCount$--
    }
    this.$Query$([0], [0], $lowerValue$$, $upperValue$$, $bounds$$1$$, $boundCount$$1_i$$76$$ - 2, $axis$$1$$)
  }
  for($boundCount$$1_i$$76$$ = 0;$boundCount$$1_i$$76$$ < this.$m_queryResultCount$;++$boundCount$$1_i$$76$$) {
    this.$m_pairManager$.$RemoveBufferedPair$($proxyId$$2$$, this.$m_queryResults$[$boundCount$$1_i$$76$$])
  }
  this.$m_pairManager$.$Commit$();
  this.$m_queryResultCount$ = 0;
  this.$IncrementTimeStamp$();
  $proxy$$5$$.$userData$ = null;
  $proxy$$5$$.$overlapCount$ = 65535;
  $proxy$$5$$.$lowerBounds$[0] = 65535;
  $proxy$$5$$.$lowerBounds$[1] = 65535;
  $proxy$$5$$.$upperBounds$[0] = 65535;
  $proxy$$5$$.$upperBounds$[1] = 65535;
  $proxy$$5$$.$SetNext$(this.$m_freeProxy$);
  this.$m_freeProxy$ = $proxyId$$2$$;
  --this.$m_proxyCount$
}, $MoveProxy$:function $$b2BroadPhase$$$$$MoveProxy$$($proxyId$$3$$, $aabb$$2$$) {
  var $axis$$2$$ = 0, $index$$73$$ = 0, $bound$$, $nextBound_prevBound$$, $nextProxyId_prevProxyId$$ = 0, $nextProxy_prevProxy$$;
  if(!($proxyId$$3$$ == 65535 || 1024 <= $proxyId$$3$$)) {
    if($aabb$$2$$.$IsValid$() != false) {
      var $boundCount$$2$$ = 2 * this.$m_proxyCount$, $proxy$$6$$ = this.$m_proxyPool$[$proxyId$$3$$], $newValues$$ = new $b2BoundValues$$;
      this.$ComputeBounds$($newValues$$.$lowerValues$, $newValues$$.$upperValues$, $aabb$$2$$);
      var $oldValues$$ = new $b2BoundValues$$;
      for($axis$$2$$ = 0;$axis$$2$$ < 2;++$axis$$2$$) {
        $oldValues$$.$lowerValues$[$axis$$2$$] = this.$m_bounds$[$axis$$2$$][$proxy$$6$$.$lowerBounds$[$axis$$2$$]].value;
        $oldValues$$.$upperValues$[$axis$$2$$] = this.$m_bounds$[$axis$$2$$][$proxy$$6$$.$upperBounds$[$axis$$2$$]].value
      }
      for($axis$$2$$ = 0;$axis$$2$$ < 2;++$axis$$2$$) {
        var $bounds$$2$$ = this.$m_bounds$[$axis$$2$$], $lowerIndex$$2$$ = $proxy$$6$$.$lowerBounds$[$axis$$2$$], $upperIndex$$2$$ = $proxy$$6$$.$upperBounds$[$axis$$2$$], $lowerValue$$1$$ = $newValues$$.$lowerValues$[$axis$$2$$], $upperValue$$1$$ = $newValues$$.$upperValues$[$axis$$2$$], $deltaLower$$ = $lowerValue$$1$$ - $bounds$$2$$[$lowerIndex$$2$$].value, $deltaUpper$$ = $upperValue$$1$$ - $bounds$$2$$[$upperIndex$$2$$].value;
        $bounds$$2$$[$lowerIndex$$2$$].value = $lowerValue$$1$$;
        $bounds$$2$$[$upperIndex$$2$$].value = $upperValue$$1$$;
        if($deltaLower$$ < 0) {
          for($index$$73$$ = $lowerIndex$$2$$;$index$$73$$ > 0 && $lowerValue$$1$$ < $bounds$$2$$[$index$$73$$ - 1].value;) {
            $bound$$ = $bounds$$2$$[$index$$73$$];
            $nextBound_prevBound$$ = $bounds$$2$$[$index$$73$$ - 1];
            $nextProxyId_prevProxyId$$ = $nextBound_prevBound$$.$proxyId$;
            $nextProxy_prevProxy$$ = this.$m_proxyPool$[$nextBound_prevBound$$.$proxyId$];
            $nextBound_prevBound$$.$stabbingCount$++;
            if($nextBound_prevBound$$.$IsUpper$() == true) {
              this.$TestOverlap$($newValues$$, $nextProxy_prevProxy$$) && this.$m_pairManager$.$AddBufferedPair$($proxyId$$3$$, $nextProxyId_prevProxyId$$);
              $nextProxy_prevProxy$$.$upperBounds$[$axis$$2$$]++;
              $bound$$.$stabbingCount$++
            }else {
              $nextProxy_prevProxy$$.$lowerBounds$[$axis$$2$$]++;
              $bound$$.$stabbingCount$--
            }
            $proxy$$6$$.$lowerBounds$[$axis$$2$$]--;
            $bound$$.$Swap$($nextBound_prevBound$$);
            --$index$$73$$
          }
        }
        if($deltaUpper$$ > 0) {
          for($index$$73$$ = $upperIndex$$2$$;$index$$73$$ < $boundCount$$2$$ - 1 && $bounds$$2$$[$index$$73$$ + 1].value <= $upperValue$$1$$;) {
            $bound$$ = $bounds$$2$$[$index$$73$$];
            $nextBound_prevBound$$ = $bounds$$2$$[$index$$73$$ + 1];
            $nextProxyId_prevProxyId$$ = $nextBound_prevBound$$.$proxyId$;
            $nextProxy_prevProxy$$ = this.$m_proxyPool$[$nextProxyId_prevProxyId$$];
            $nextBound_prevBound$$.$stabbingCount$++;
            if($nextBound_prevBound$$.$IsLower$() == true) {
              this.$TestOverlap$($newValues$$, $nextProxy_prevProxy$$) && this.$m_pairManager$.$AddBufferedPair$($proxyId$$3$$, $nextProxyId_prevProxyId$$);
              $nextProxy_prevProxy$$.$lowerBounds$[$axis$$2$$]--;
              $bound$$.$stabbingCount$++
            }else {
              $nextProxy_prevProxy$$.$upperBounds$[$axis$$2$$]--;
              $bound$$.$stabbingCount$--
            }
            $proxy$$6$$.$upperBounds$[$axis$$2$$]++;
            $bound$$.$Swap$($nextBound_prevBound$$);
            $index$$73$$++
          }
        }
        if($deltaLower$$ > 0) {
          for($index$$73$$ = $lowerIndex$$2$$;$index$$73$$ < $boundCount$$2$$ - 1 && $bounds$$2$$[$index$$73$$ + 1].value <= $lowerValue$$1$$;) {
            $bound$$ = $bounds$$2$$[$index$$73$$];
            $nextBound_prevBound$$ = $bounds$$2$$[$index$$73$$ + 1];
            $nextProxyId_prevProxyId$$ = $nextBound_prevBound$$.$proxyId$;
            $nextProxy_prevProxy$$ = this.$m_proxyPool$[$nextProxyId_prevProxyId$$];
            $nextBound_prevBound$$.$stabbingCount$--;
            if($nextBound_prevBound$$.$IsUpper$()) {
              this.$TestOverlap$($oldValues$$, $nextProxy_prevProxy$$) && this.$m_pairManager$.$RemoveBufferedPair$($proxyId$$3$$, $nextProxyId_prevProxyId$$);
              $nextProxy_prevProxy$$.$upperBounds$[$axis$$2$$]--;
              $bound$$.$stabbingCount$--
            }else {
              $nextProxy_prevProxy$$.$lowerBounds$[$axis$$2$$]--;
              $bound$$.$stabbingCount$++
            }
            $proxy$$6$$.$lowerBounds$[$axis$$2$$]++;
            $bound$$.$Swap$($nextBound_prevBound$$);
            $index$$73$$++
          }
        }
        if($deltaUpper$$ < 0) {
          for($index$$73$$ = $upperIndex$$2$$;$index$$73$$ > 0 && $upperValue$$1$$ < $bounds$$2$$[$index$$73$$ - 1].value;) {
            $bound$$ = $bounds$$2$$[$index$$73$$];
            $nextBound_prevBound$$ = $bounds$$2$$[$index$$73$$ - 1];
            $nextProxyId_prevProxyId$$ = $nextBound_prevBound$$.$proxyId$;
            $nextProxy_prevProxy$$ = this.$m_proxyPool$[$nextProxyId_prevProxyId$$];
            $nextBound_prevBound$$.$stabbingCount$--;
            if($nextBound_prevBound$$.$IsLower$() == true) {
              this.$TestOverlap$($oldValues$$, $nextProxy_prevProxy$$) && this.$m_pairManager$.$RemoveBufferedPair$($proxyId$$3$$, $nextProxyId_prevProxyId$$);
              $nextProxy_prevProxy$$.$lowerBounds$[$axis$$2$$]++;
              $bound$$.$stabbingCount$--
            }else {
              $nextProxy_prevProxy$$.$upperBounds$[$axis$$2$$]++;
              $bound$$.$stabbingCount$++
            }
            $proxy$$6$$.$upperBounds$[$axis$$2$$]--;
            $bound$$.$Swap$($nextBound_prevBound$$);
            $index$$73$$--
          }
        }
      }
    }
  }
}, $Commit$:function $$b2BroadPhase$$$$$Commit$$() {
  this.$m_pairManager$.$Commit$()
}, $QueryAABB$:function $$b2BroadPhase$$$$$QueryAABB$$($aabb$$3_lowerIndexOut$$1$$, $userData$$2$$, $maxCount$$1$$) {
  var $count$$7_lowerValues$$1$$ = [], $i$$77_upperValues$$1$$ = [];
  this.$ComputeBounds$($count$$7_lowerValues$$1$$, $i$$77_upperValues$$1$$, $aabb$$3_lowerIndexOut$$1$$);
  $aabb$$3_lowerIndexOut$$1$$ = [0];
  var $upperIndexOut$$1$$ = [0];
  this.$Query$($aabb$$3_lowerIndexOut$$1$$, $upperIndexOut$$1$$, $count$$7_lowerValues$$1$$[0], $i$$77_upperValues$$1$$[0], this.$m_bounds$[0], 2 * this.$m_proxyCount$, 0);
  this.$Query$($aabb$$3_lowerIndexOut$$1$$, $upperIndexOut$$1$$, $count$$7_lowerValues$$1$$[1], $i$$77_upperValues$$1$$[1], this.$m_bounds$[1], 2 * this.$m_proxyCount$, 1);
  for($i$$77_upperValues$$1$$ = $count$$7_lowerValues$$1$$ = 0;$i$$77_upperValues$$1$$ < this.$m_queryResultCount$ && $count$$7_lowerValues$$1$$ < $maxCount$$1$$;++$i$$77_upperValues$$1$$, ++$count$$7_lowerValues$$1$$) {
    $userData$$2$$[$i$$77_upperValues$$1$$] = this.$m_proxyPool$[this.$m_queryResults$[$i$$77_upperValues$$1$$]].$userData$
  }
  this.$m_queryResultCount$ = 0;
  this.$IncrementTimeStamp$();
  return $count$$7_lowerValues$$1$$
}, $ComputeBounds$:function $$b2BroadPhase$$$$$ComputeBounds$$($lowerValues$$2$$, $upperValues$$2$$, $aabb$$4_maxVertexY$$) {
  var $minVertexX$$ = $aabb$$4_maxVertexY$$.$minVertex$.x, $minVertexY$$ = $aabb$$4_maxVertexY$$.$minVertex$.y;
  $minVertexX$$ = $minVertexX$$ < this.$m_worldAABB$.$maxVertex$.x ? $minVertexX$$ : this.$m_worldAABB$.$maxVertex$.x;
  $minVertexY$$ = $minVertexY$$ < this.$m_worldAABB$.$maxVertex$.y ? $minVertexY$$ : this.$m_worldAABB$.$maxVertex$.y;
  $minVertexX$$ = $b2Math$b2Max$$($minVertexX$$, this.$m_worldAABB$.$minVertex$.x);
  $minVertexY$$ = $b2Math$b2Max$$($minVertexY$$, this.$m_worldAABB$.$minVertex$.y);
  var $maxVertexX$$ = $aabb$$4_maxVertexY$$.$maxVertex$.x;
  $aabb$$4_maxVertexY$$ = $aabb$$4_maxVertexY$$.$maxVertex$.y;
  $maxVertexX$$ = $maxVertexX$$ < this.$m_worldAABB$.$maxVertex$.x ? $maxVertexX$$ : this.$m_worldAABB$.$maxVertex$.x;
  $aabb$$4_maxVertexY$$ = $aabb$$4_maxVertexY$$ < this.$m_worldAABB$.$maxVertex$.y ? $aabb$$4_maxVertexY$$ : this.$m_worldAABB$.$maxVertex$.y;
  $maxVertexX$$ = $b2Math$b2Max$$($maxVertexX$$, this.$m_worldAABB$.$minVertex$.x);
  $aabb$$4_maxVertexY$$ = $b2Math$b2Max$$($aabb$$4_maxVertexY$$, this.$m_worldAABB$.$minVertex$.y);
  $lowerValues$$2$$[0] = this.$m_quantizationFactor$.x * ($minVertexX$$ - this.$m_worldAABB$.$minVertex$.x) & 65534;
  $upperValues$$2$$[0] = this.$m_quantizationFactor$.x * ($maxVertexX$$ - this.$m_worldAABB$.$minVertex$.x) & 65535 | 1;
  $lowerValues$$2$$[1] = this.$m_quantizationFactor$.y * ($minVertexY$$ - this.$m_worldAABB$.$minVertex$.y) & 65534;
  $upperValues$$2$$[1] = this.$m_quantizationFactor$.y * ($aabb$$4_maxVertexY$$ - this.$m_worldAABB$.$minVertex$.y) & 65535 | 1
}, $TestOverlap$:function $$b2BroadPhase$$$$$TestOverlap$$($b$$35$$, $p$$3$$) {
  for(var $axis$$5$$ = 0;$axis$$5$$ < 2;++$axis$$5$$) {
    var $bounds$$5$$ = this.$m_bounds$[$axis$$5$$];
    if($b$$35$$.$lowerValues$[$axis$$5$$] > $bounds$$5$$[$p$$3$$.$upperBounds$[$axis$$5$$]].value) {
      return false
    }
    if($b$$35$$.$upperValues$[$axis$$5$$] < $bounds$$5$$[$p$$3$$.$lowerBounds$[$axis$$5$$]].value) {
      return false
    }
  }
  return true
}, $Query$:function $$b2BroadPhase$$$$$Query$$($lowerQueryOut$$, $upperQueryOut$$, $lowerQuery_lowerValue$$2$$, $upperQuery_upperValue$$2$$, $bounds$$6$$, $boundCount$$4_i$$79_j$$8$$, $axis$$6$$) {
  $lowerQuery_lowerValue$$2$$ = $b2BroadPhase$BinarySearch$$($bounds$$6$$, $boundCount$$4_i$$79_j$$8$$, $lowerQuery_lowerValue$$2$$);
  $upperQuery_upperValue$$2$$ = $b2BroadPhase$BinarySearch$$($bounds$$6$$, $boundCount$$4_i$$79_j$$8$$, $upperQuery_upperValue$$2$$);
  for($boundCount$$4_i$$79_j$$8$$ = $lowerQuery_lowerValue$$2$$;$boundCount$$4_i$$79_j$$8$$ < $upperQuery_upperValue$$2$$;++$boundCount$$4_i$$79_j$$8$$) {
    $bounds$$6$$[$boundCount$$4_i$$79_j$$8$$].$IsLower$() && this.$IncrementOverlapCount$($bounds$$6$$[$boundCount$$4_i$$79_j$$8$$].$proxyId$)
  }
  if($lowerQuery_lowerValue$$2$$ > 0) {
    $boundCount$$4_i$$79_j$$8$$ = $lowerQuery_lowerValue$$2$$ - 1;
    for(var $s$$22$$ = $bounds$$6$$[$boundCount$$4_i$$79_j$$8$$].$stabbingCount$;$s$$22$$;) {
      if($bounds$$6$$[$boundCount$$4_i$$79_j$$8$$].$IsLower$()) {
        if($lowerQuery_lowerValue$$2$$ <= this.$m_proxyPool$[$bounds$$6$$[$boundCount$$4_i$$79_j$$8$$].$proxyId$].$upperBounds$[$axis$$6$$]) {
          this.$IncrementOverlapCount$($bounds$$6$$[$boundCount$$4_i$$79_j$$8$$].$proxyId$);
          --$s$$22$$
        }
      }
      --$boundCount$$4_i$$79_j$$8$$
    }
  }
  $lowerQueryOut$$[0] = $lowerQuery_lowerValue$$2$$;
  $upperQueryOut$$[0] = $upperQuery_upperValue$$2$$
}, $IncrementOverlapCount$:function $$b2BroadPhase$$$$$IncrementOverlapCount$$($proxyId$$4$$) {
  var $proxy$$9$$ = this.$m_proxyPool$[$proxyId$$4$$];
  if($proxy$$9$$.timeStamp < this.$m_timeStamp$) {
    $proxy$$9$$.timeStamp = this.$m_timeStamp$;
    $proxy$$9$$.$overlapCount$ = 1
  }else {
    $proxy$$9$$.$overlapCount$ = 2;
    this.$m_queryResults$[this.$m_queryResultCount$] = $proxyId$$4$$;
    ++this.$m_queryResultCount$
  }
}, $IncrementTimeStamp$:function $$b2BroadPhase$$$$$IncrementTimeStamp$$() {
  if(this.$m_timeStamp$ == 65535) {
    for(var $i$$80$$ = 0;$i$$80$$ < 1024;++$i$$80$$) {
      this.$m_proxyPool$[$i$$80$$].timeStamp = 0
    }
    this.$m_timeStamp$ = 1
  }else {
    ++this.$m_timeStamp$
  }
}, $m_pairManager$:new $b2PairManager$$, $m_proxyPool$:Array(8192), $m_freeProxy$:0, $m_bounds$:Array(2048), $m_queryResults$:Array(1024), $m_queryResultCount$:0, $m_worldAABB$:null, $m_quantizationFactor$:new $b2Vec2$$, $m_proxyCount$:0, $m_timeStamp$:0};
function $b2BroadPhase$BinarySearch$$($bounds$$7$$, $count$$8_high$$2$$, $value$$45$$) {
  var $low$$2$$ = 0;
  for($count$$8_high$$2$$ = $count$$8_high$$2$$ - 1;$low$$2$$ <= $count$$8_high$$2$$;) {
    var $mid$$ = Math.floor(($low$$2$$ + $count$$8_high$$2$$) / 2);
    if($bounds$$7$$[$mid$$].value > $value$$45$$) {
      $count$$8_high$$2$$ = $mid$$ - 1
    }else {
      if($bounds$$7$$[$mid$$].value < $value$$45$$) {
        $low$$2$$ = $mid$$ + 1
      }else {
        return $mid$$
      }
    }
  }
  return $low$$2$$
}
;
// Input 90
function $b2ContactPoint$$() {
  this.position = new $b2Vec2$$;
  this.id = new $b2ContactID$$
}
$b2ContactPoint$$.prototype = {$separation$:null, $normalImpulse$:null, $tangentImpulse$:null};
// Input 91
function $b2Manifold$$() {
  this.$points$ = Array(2);
  for(var $i$$81$$ = 0;$i$$81$$ < 2;$i$$81$$++) {
    this.$points$[$i$$81$$] = new $b2ContactPoint$$
  }
  this.$normal$ = new $b2Vec2$$
}
$b2Manifold$$.prototype = {$points$:null, $normal$:null, $pointCount$:0};
// Input 92
function $b2OBB$$() {
  this.$R$ = new $b2Mat22$$;
  this.$center$ = new $b2Vec2$$;
  this.$extents$ = new $b2Vec2$$
}
;
// Input 93
function $ClipVertex$$() {
  this.$v$ = new $b2Vec2$$;
  this.id = new $b2ContactID$$
}
;
// Input 94
function $b2Collision$ClipSegmentToLine$$($vOut$$, $vIn$$, $distance1_interp_normal$$, $offset$$12_tVec$$) {
  var $numOut$$ = 0, $vIn0$$ = $vIn$$[0].$v$, $vIn1$$ = $vIn$$[1].$v$, $distance0$$ = $b2Math$b2Dot$$($distance1_interp_normal$$, $vIn$$[0].$v$) - $offset$$12_tVec$$;
  $distance1_interp_normal$$ = $b2Math$b2Dot$$($distance1_interp_normal$$, $vIn$$[1].$v$) - $offset$$12_tVec$$;
  if($distance0$$ <= 0) {
    $vOut$$[$numOut$$++] = $vIn$$[0]
  }
  if($distance1_interp_normal$$ <= 0) {
    $vOut$$[$numOut$$++] = $vIn$$[1]
  }
  if($distance0$$ * $distance1_interp_normal$$ < 0) {
    $distance1_interp_normal$$ = $distance0$$ / ($distance0$$ - $distance1_interp_normal$$);
    $offset$$12_tVec$$ = $vOut$$[$numOut$$].$v$;
    $offset$$12_tVec$$.x = $vIn0$$.x + $distance1_interp_normal$$ * ($vIn1$$.x - $vIn0$$.x);
    $offset$$12_tVec$$.y = $vIn0$$.y + $distance1_interp_normal$$ * ($vIn1$$.y - $vIn0$$.y);
    $vOut$$[$numOut$$].id = $distance0$$ > 0 ? $vIn$$[0].id : $vIn$$[1].id;
    ++$numOut$$
  }
  return $numOut$$
}
function $b2Collision$EdgeSeparation$$($poly1_v1Y$$, $edge1_v2X$$, $poly2_v2Y$$) {
  var $vert1s$$ = $poly1_v1Y$$.$m_vertices$, $count2_v1X$$ = $poly2_v2Y$$.$m_vertexCount$, $vert2s$$ = $poly2_v2Y$$.$m_vertices$, $normalX$$ = $poly1_v1Y$$.$m_normals$[$edge1_v2X$$].x, $normalY$$ = $poly1_v1Y$$.$m_normals$[$edge1_v2X$$].y, $tX$$4_vertexIndex2$$ = $normalX$$, $minDot_tMat$$ = $poly1_v1Y$$.$m_R$;
  $normalX$$ = $minDot_tMat$$.$col1$.x * $tX$$4_vertexIndex2$$ + $minDot_tMat$$.$col2$.x * $normalY$$;
  $normalY$$ = $minDot_tMat$$.$col1$.y * $tX$$4_vertexIndex2$$ + $minDot_tMat$$.$col2$.y * $normalY$$;
  var $normalLocal2X$$ = $normalX$$, $normalLocal2Y$$ = $normalY$$;
  $minDot_tMat$$ = $poly2_v2Y$$.$m_R$;
  $tX$$4_vertexIndex2$$ = $normalLocal2X$$ * $minDot_tMat$$.$col1$.x + $normalLocal2Y$$ * $minDot_tMat$$.$col1$.y;
  $normalLocal2Y$$ = $normalLocal2X$$ * $minDot_tMat$$.$col2$.x + $normalLocal2Y$$ * $minDot_tMat$$.$col2$.y;
  $normalLocal2X$$ = $tX$$4_vertexIndex2$$;
  $tX$$4_vertexIndex2$$ = 0;
  $minDot_tMat$$ = Number.MAX_VALUE;
  for(var $i$$82$$ = 0;$i$$82$$ < $count2_v1X$$;++$i$$82$$) {
    var $dot_tVec$$1$$ = $vert2s$$[$i$$82$$];
    $dot_tVec$$1$$ = $dot_tVec$$1$$.x * $normalLocal2X$$ + $dot_tVec$$1$$.y * $normalLocal2Y$$;
    if($dot_tVec$$1$$ < $minDot_tMat$$) {
      $minDot_tMat$$ = $dot_tVec$$1$$;
      $tX$$4_vertexIndex2$$ = $i$$82$$
    }
  }
  $minDot_tMat$$ = $poly1_v1Y$$.$m_R$;
  $count2_v1X$$ = $poly1_v1Y$$.$m_position$.x + ($minDot_tMat$$.$col1$.x * $vert1s$$[$edge1_v2X$$].x + $minDot_tMat$$.$col2$.x * $vert1s$$[$edge1_v2X$$].y);
  $poly1_v1Y$$ = $poly1_v1Y$$.$m_position$.y + ($minDot_tMat$$.$col1$.y * $vert1s$$[$edge1_v2X$$].x + $minDot_tMat$$.$col2$.y * $vert1s$$[$edge1_v2X$$].y);
  $minDot_tMat$$ = $poly2_v2Y$$.$m_R$;
  $edge1_v2X$$ = $poly2_v2Y$$.$m_position$.x + ($minDot_tMat$$.$col1$.x * $vert2s$$[$tX$$4_vertexIndex2$$].x + $minDot_tMat$$.$col2$.x * $vert2s$$[$tX$$4_vertexIndex2$$].y);
  $poly2_v2Y$$ = $poly2_v2Y$$.$m_position$.y + ($minDot_tMat$$.$col1$.y * $vert2s$$[$tX$$4_vertexIndex2$$].x + $minDot_tMat$$.$col2$.y * $vert2s$$[$tX$$4_vertexIndex2$$].y);
  $edge1_v2X$$ -= $count2_v1X$$;
  $poly2_v2Y$$ -= $poly1_v1Y$$;
  return $edge1_v2X$$ * $normalX$$ + $poly2_v2Y$$ * $normalY$$
}
function $b2Collision$FindMaxSeparation$$($edgeIndex$$, $poly1$$1$$, $poly2$$1$$, $conservative$$) {
  var $count1$$ = $poly1$$1$$.$m_vertexCount$, $dX$$3_edge$$ = $poly2$$1$$.$m_position$.x - $poly1$$1$$.$m_position$.x, $bestEdge_dLocal1Y_dY$$3$$ = $poly2$$1$$.$m_position$.y - $poly1$$1$$.$m_position$.y, $dLocal1X_s$$23$$ = $dX$$3_edge$$ * $poly1$$1$$.$m_R$.$col1$.x + $bestEdge_dLocal1Y_dY$$3$$ * $poly1$$1$$.$m_R$.$col1$.y;
  $bestEdge_dLocal1Y_dY$$3$$ = $dX$$3_edge$$ * $poly1$$1$$.$m_R$.$col2$.x + $bestEdge_dLocal1Y_dY$$3$$ * $poly1$$1$$.$m_R$.$col2$.y;
  $dX$$3_edge$$ = 0;
  for(var $increment_maxDot$$ = -Number.MAX_VALUE, $bestSeparation_i$$83_prevEdge$$ = 0;$bestSeparation_i$$83_prevEdge$$ < $count1$$;++$bestSeparation_i$$83_prevEdge$$) {
    var $dot$$1_sPrev$$ = $poly1$$1$$.$m_normals$[$bestSeparation_i$$83_prevEdge$$].x * $dLocal1X_s$$23$$ + $poly1$$1$$.$m_normals$[$bestSeparation_i$$83_prevEdge$$].y * $bestEdge_dLocal1Y_dY$$3$$;
    if($dot$$1_sPrev$$ > $increment_maxDot$$) {
      $increment_maxDot$$ = $dot$$1_sPrev$$;
      $dX$$3_edge$$ = $bestSeparation_i$$83_prevEdge$$
    }
  }
  $dLocal1X_s$$23$$ = $b2Collision$EdgeSeparation$$($poly1$$1$$, $dX$$3_edge$$, $poly2$$1$$);
  if($dLocal1X_s$$23$$ > 0 && $conservative$$ == false) {
    return $dLocal1X_s$$23$$
  }
  $bestSeparation_i$$83_prevEdge$$ = $dX$$3_edge$$ - 1 >= 0 ? $dX$$3_edge$$ - 1 : $count1$$ - 1;
  $dot$$1_sPrev$$ = $b2Collision$EdgeSeparation$$($poly1$$1$$, $bestSeparation_i$$83_prevEdge$$, $poly2$$1$$);
  if($dot$$1_sPrev$$ > 0 && $conservative$$ == false) {
    return $dot$$1_sPrev$$
  }
  var $nextEdge$$ = $dX$$3_edge$$ + 1 < $count1$$ ? $dX$$3_edge$$ + 1 : 0, $sNext$$ = $b2Collision$EdgeSeparation$$($poly1$$1$$, $nextEdge$$, $poly2$$1$$);
  if($sNext$$ > 0 && $conservative$$ == false) {
    return $sNext$$
  }
  $increment_maxDot$$ = $bestEdge_dLocal1Y_dY$$3$$ = 0;
  if($dot$$1_sPrev$$ > $dLocal1X_s$$23$$ && $dot$$1_sPrev$$ > $sNext$$) {
    $increment_maxDot$$ = -1;
    $bestEdge_dLocal1Y_dY$$3$$ = $bestSeparation_i$$83_prevEdge$$;
    $bestSeparation_i$$83_prevEdge$$ = $dot$$1_sPrev$$
  }else {
    if($sNext$$ > $dLocal1X_s$$23$$) {
      $increment_maxDot$$ = 1;
      $bestEdge_dLocal1Y_dY$$3$$ = $nextEdge$$;
      $bestSeparation_i$$83_prevEdge$$ = $sNext$$
    }else {
      $edgeIndex$$[0] = $dX$$3_edge$$;
      return $dLocal1X_s$$23$$
    }
  }
  for(;;) {
    $dX$$3_edge$$ = $increment_maxDot$$ == -1 ? $bestEdge_dLocal1Y_dY$$3$$ - 1 >= 0 ? $bestEdge_dLocal1Y_dY$$3$$ - 1 : $count1$$ - 1 : $bestEdge_dLocal1Y_dY$$3$$ + 1 < $count1$$ ? $bestEdge_dLocal1Y_dY$$3$$ + 1 : 0;
    $dLocal1X_s$$23$$ = $b2Collision$EdgeSeparation$$($poly1$$1$$, $dX$$3_edge$$, $poly2$$1$$);
    if($dLocal1X_s$$23$$ > 0 && $conservative$$ == false) {
      return $dLocal1X_s$$23$$
    }
    if($dLocal1X_s$$23$$ > $bestSeparation_i$$83_prevEdge$$) {
      $bestEdge_dLocal1Y_dY$$3$$ = $dX$$3_edge$$;
      $bestSeparation_i$$83_prevEdge$$ = $dLocal1X_s$$23$$
    }else {
      break
    }
  }
  $edgeIndex$$[0] = $bestEdge_dLocal1Y_dY$$3$$;
  return $bestSeparation_i$$83_prevEdge$$
}
var $b2Collision$b2CollidePolyTempVec$$ = new $b2Vec2$$;
// Input 95
function $b2BoxDef$$() {
  this.type = $b2Shape$e_unknownShape$$;
  this.$userData$ = null;
  this.$localPosition$ = new $b2Vec2$$(0, 0);
  this.$localRotation$ = 0;
  this.$friction$ = 0.2;
  this.$density$ = this.$restitution$ = 0;
  this.$categoryBits$ = 1;
  this.$maskBits$ = 65535;
  this.$groupIndex$ = 0;
  this.type = $b2Shape$e_boxShape$$;
  this.$extents$ = new $b2Vec2$$(1, 1)
}
$goog$inherits$$($b2BoxDef$$, $b2ShapeDef$$);
// Input 96
function $b2MassData$$() {
  this.$center$ = new $b2Vec2$$(0, 0)
}
$b2MassData$$.prototype = {$mass$:0, $center$:new $b2Vec2$$(0, 0), $I$:0};
// Input 97
function $b2Shape$$($def$$, $body$$5$$) {
  this.$m_R$ = new $b2Mat22$$;
  this.$m_position$ = new $b2Vec2$$;
  this.$m_userData$ = $def$$.$userData$;
  this.$m_friction$ = $def$$.$friction$;
  this.$m_restitution$ = $def$$.$restitution$;
  this.$m_body$ = $body$$5$$;
  this.$m_proxyId$ = 65535;
  this.$m_maxRadius$ = 0;
  this.$m_categoryBits$ = $def$$.$categoryBits$;
  this.$m_maskBits$ = $def$$.$maskBits$;
  this.$m_groupIndex$ = $def$$.$groupIndex$
}
$b2Shape$$.prototype = {$ResetProxy$:$JSCompiler_emptyFn$$(), $GetNext$:$JSCompiler_get$$("$m_next$"), $DestroyProxy$:function $$b2Shape$$$$$DestroyProxy$$() {
  if(this.$m_proxyId$ != 65535) {
    this.$m_body$.$m_world$.$m_broadPhase$.$DestroyProxy$(this.$m_proxyId$);
    this.$m_proxyId$ = 65535
  }
}, $Synchronize$:$JSCompiler_emptyFn$$(), $m_next$:null, $m_R$:new $b2Mat22$$, $m_position$:new $b2Vec2$$, $m_type$:0, $m_userData$:null, $m_body$:null, $m_friction$:null, $m_restitution$:null, $m_maxRadius$:null, $m_proxyId$:0, $m_categoryBits$:0, $m_maskBits$:0, $m_groupIndex$:0};
var $b2Shape$e_unknownShape$$ = -1, $b2Shape$e_boxShape$$ = 1;
// Input 98
function $b2CircleDef$$() {
  this.type = $b2Shape$e_unknownShape$$;
  this.$userData$ = null;
  this.$localPosition$ = new $b2Vec2$$(0, 0);
  this.$localRotation$ = 0;
  this.$friction$ = 0.2;
  this.$density$ = this.$restitution$ = 0;
  this.$categoryBits$ = 1;
  this.$maskBits$ = 65535;
  this.type = this.$groupIndex$ = 0;
  this.$radius$ = 1
}
$goog$inherits$$($b2CircleDef$$, $b2ShapeDef$$);
// Input 99
function $b2CircleShape$$($aabb$$5_def$$1_rX$$, $body$$6_broadPhase$$2_rY$$, $localCenter$$) {
  this.$m_R$ = new $b2Mat22$$;
  this.$m_position$ = new $b2Vec2$$;
  this.$m_userData$ = $aabb$$5_def$$1_rX$$.$userData$;
  this.$m_friction$ = $aabb$$5_def$$1_rX$$.$friction$;
  this.$m_restitution$ = $aabb$$5_def$$1_rX$$.$restitution$;
  this.$m_body$ = $body$$6_broadPhase$$2_rY$$;
  this.$m_proxyId$ = 65535;
  this.$m_maxRadius$ = 0;
  this.$m_categoryBits$ = $aabb$$5_def$$1_rX$$.$categoryBits$;
  this.$m_maskBits$ = $aabb$$5_def$$1_rX$$.$maskBits$;
  this.$m_groupIndex$ = $aabb$$5_def$$1_rX$$.$groupIndex$;
  this.$m_localPosition$ = new $b2Vec2$$;
  this.$m_localPosition$.$Set$($aabb$$5_def$$1_rX$$.$localPosition$.x - $localCenter$$.x, $aabb$$5_def$$1_rX$$.$localPosition$.y - $localCenter$$.y);
  this.$m_type$ = 0;
  this.$m_radius$ = $aabb$$5_def$$1_rX$$.$radius$;
  $JSCompiler_StaticMethods_SetM$$(this.$m_R$, this.$m_body$.$m_R$);
  $aabb$$5_def$$1_rX$$ = this.$m_R$.$col1$.x * this.$m_localPosition$.x + this.$m_R$.$col2$.x * this.$m_localPosition$.y;
  $body$$6_broadPhase$$2_rY$$ = this.$m_R$.$col1$.y * this.$m_localPosition$.x + this.$m_R$.$col2$.y * this.$m_localPosition$.y;
  this.$m_position$.x = this.$m_body$.$m_position$.x + $aabb$$5_def$$1_rX$$;
  this.$m_position$.y = this.$m_body$.$m_position$.y + $body$$6_broadPhase$$2_rY$$;
  this.$m_maxRadius$ = Math.sqrt($aabb$$5_def$$1_rX$$ * $aabb$$5_def$$1_rX$$ + $body$$6_broadPhase$$2_rY$$ * $body$$6_broadPhase$$2_rY$$) + this.$m_radius$;
  $aabb$$5_def$$1_rX$$ = new $b2AABB$$;
  $aabb$$5_def$$1_rX$$.$minVertex$.$Set$(this.$m_position$.x - this.$m_radius$, this.$m_position$.y - this.$m_radius$);
  $aabb$$5_def$$1_rX$$.$maxVertex$.$Set$(this.$m_position$.x + this.$m_radius$, this.$m_position$.y + this.$m_radius$);
  $body$$6_broadPhase$$2_rY$$ = this.$m_body$.$m_world$.$m_broadPhase$;
  this.$m_proxyId$ = $body$$6_broadPhase$$2_rY$$.$InRange$($aabb$$5_def$$1_rX$$) ? $body$$6_broadPhase$$2_rY$$.$CreateProxy$($aabb$$5_def$$1_rX$$, this) : 65535;
  this.$m_proxyId$ == 65535 && this.$m_body$.$Freeze$()
}
$goog$inherits$$($b2CircleShape$$, $b2Shape$$);
$b2CircleShape$$.prototype.$Synchronize$ = function $$b2CircleShape$$$$$Synchronize$$($broadPhase$$3_lowerX_position1$$1$$, $R1$$1_lowerY$$, $p1X$$1_position2$$1_upperX$$, $R2$$1_aabb$$6_p1Y$$1$$) {
  $JSCompiler_StaticMethods_SetM$$(this.$m_R$, $R2$$1_aabb$$6_p1Y$$1$$);
  this.$m_position$.x = $R2$$1_aabb$$6_p1Y$$1$$.$col1$.x * this.$m_localPosition$.x + $R2$$1_aabb$$6_p1Y$$1$$.$col2$.x * this.$m_localPosition$.y + $p1X$$1_position2$$1_upperX$$.x;
  this.$m_position$.y = $R2$$1_aabb$$6_p1Y$$1$$.$col1$.y * this.$m_localPosition$.x + $R2$$1_aabb$$6_p1Y$$1$$.$col2$.y * this.$m_localPosition$.y + $p1X$$1_position2$$1_upperX$$.y;
  if(this.$m_proxyId$ != 65535) {
    $p1X$$1_position2$$1_upperX$$ = $broadPhase$$3_lowerX_position1$$1$$.x + ($R1$$1_lowerY$$.$col1$.x * this.$m_localPosition$.x + $R1$$1_lowerY$$.$col2$.x * this.$m_localPosition$.y);
    $R2$$1_aabb$$6_p1Y$$1$$ = $broadPhase$$3_lowerX_position1$$1$$.y + ($R1$$1_lowerY$$.$col1$.y * this.$m_localPosition$.x + $R1$$1_lowerY$$.$col2$.y * this.$m_localPosition$.y);
    $broadPhase$$3_lowerX_position1$$1$$ = Math.min($p1X$$1_position2$$1_upperX$$, this.$m_position$.x);
    $R1$$1_lowerY$$ = Math.min($R2$$1_aabb$$6_p1Y$$1$$, this.$m_position$.y);
    $p1X$$1_position2$$1_upperX$$ = Math.max($p1X$$1_position2$$1_upperX$$, this.$m_position$.x);
    var $upperY$$ = Math.max($R2$$1_aabb$$6_p1Y$$1$$, this.$m_position$.y);
    $R2$$1_aabb$$6_p1Y$$1$$ = new $b2AABB$$;
    $R2$$1_aabb$$6_p1Y$$1$$.$minVertex$.$Set$($broadPhase$$3_lowerX_position1$$1$$ - this.$m_radius$, $R1$$1_lowerY$$ - this.$m_radius$);
    $R2$$1_aabb$$6_p1Y$$1$$.$maxVertex$.$Set$($p1X$$1_position2$$1_upperX$$ + this.$m_radius$, $upperY$$ + this.$m_radius$);
    $broadPhase$$3_lowerX_position1$$1$$ = this.$m_body$.$m_world$.$m_broadPhase$;
    $broadPhase$$3_lowerX_position1$$1$$.$InRange$($R2$$1_aabb$$6_p1Y$$1$$) ? $broadPhase$$3_lowerX_position1$$1$$.$MoveProxy$(this.$m_proxyId$, $R2$$1_aabb$$6_p1Y$$1$$) : this.$m_body$.$Freeze$()
  }
};
$b2CircleShape$$.prototype.$ResetProxy$ = function $$b2CircleShape$$$$$ResetProxy$$($broadPhase$$4$$) {
  if(this.$m_proxyId$ != 65535) {
    $broadPhase$$4$$.$DestroyProxy$(this.$m_proxyId$);
    var $aabb$$7$$ = new $b2AABB$$;
    $aabb$$7$$.$minVertex$.$Set$(this.$m_position$.x - this.$m_radius$, this.$m_position$.y - this.$m_radius$);
    $aabb$$7$$.$maxVertex$.$Set$(this.$m_position$.x + this.$m_radius$, this.$m_position$.y + this.$m_radius$);
    this.$m_proxyId$ = $broadPhase$$4$$.$InRange$($aabb$$7$$) ? $broadPhase$$4$$.$CreateProxy$($aabb$$7$$, this) : 65535;
    this.$m_proxyId$ == 65535 && this.$m_body$.$Freeze$()
  }
};
// Input 100
function $b2PolyDef$$() {
  this.type = $b2Shape$e_unknownShape$$;
  this.$userData$ = null;
  this.$localPosition$ = new $b2Vec2$$(0, 0);
  this.$localRotation$ = 0;
  this.$friction$ = 0.2;
  this.$density$ = this.$restitution$ = 0;
  this.$categoryBits$ = 1;
  this.$maskBits$ = 65535;
  this.$groupIndex$ = 0;
  this.$vertices$ = Array(8);
  this.type = 2;
  for(var $i$$89$$ = this.$vertexCount$ = 0;$i$$89$$ < 8;$i$$89$$++) {
    this.$vertices$[$i$$89$$] = new $b2Vec2$$
  }
}
$goog$inherits$$($b2PolyDef$$, $b2ShapeDef$$);
// Input 101
function $b2PolyShape$$($def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$, $aabb$$8_body$$7$$, $hX_maxVertexX$$1_newOrigin_uX$$) {
  this.$m_R$ = new $b2Mat22$$;
  this.$m_position$ = new $b2Vec2$$;
  this.$m_userData$ = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.$userData$;
  this.$m_friction$ = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.$friction$;
  this.$m_restitution$ = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.$restitution$;
  this.$m_body$ = $aabb$$8_body$$7$$;
  this.$m_proxyId$ = 65535;
  this.$m_maxRadius$ = 0;
  this.$m_categoryBits$ = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.$categoryBits$;
  this.$m_maskBits$ = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.$maskBits$;
  this.$m_groupIndex$ = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.$groupIndex$;
  this.$syncAABB$ = new $b2AABB$$;
  this.$syncMat$ = new $b2Mat22$$;
  this.$m_localCentroid$ = new $b2Vec2$$;
  this.$m_localOBB$ = new $b2OBB$$;
  var $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ = 0, $count$$inline_590_hY_maxVertexY$$1_uY$$;
  $aabb$$8_body$$7$$ = new $b2AABB$$;
  this.$m_vertices$ = Array(8);
  this.$m_coreVertices$ = Array(8);
  this.$m_normals$ = Array(8);
  this.$m_type$ = 2;
  var $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ = new $b2Mat22$$($def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.$localRotation$);
  if($def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.type == $b2Shape$e_boxShape$$) {
    this.$m_localCentroid$.x = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.$localPosition$.x - $hX_maxVertexX$$1_newOrigin_uX$$.x;
    this.$m_localCentroid$.y = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.$localPosition$.y - $hX_maxVertexX$$1_newOrigin_uX$$.y;
    this.$m_vertexCount$ = 4;
    $hX_maxVertexX$$1_newOrigin_uX$$ = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.$extents$.x;
    $count$$inline_590_hY_maxVertexY$$1_uY$$ = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.$extents$.y;
    $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ = Math.max(0, $hX_maxVertexX$$1_newOrigin_uX$$ - 0.3);
    var $cX$$inline_592_centroidX_hcY_v$$5$$ = Math.max(0, $count$$inline_590_hY_maxVertexY$$1_uY$$ - 0.3);
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ = this.$m_vertices$[0] = new $b2Vec2$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * $hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * $count$$inline_590_hY_maxVertexY$$1_uY$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.y = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * $hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * $count$$inline_590_hY_maxVertexY$$1_uY$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ = this.$m_vertices$[1] = new $b2Vec2$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * -$hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * $count$$inline_590_hY_maxVertexY$$1_uY$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.y = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * -$hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * $count$$inline_590_hY_maxVertexY$$1_uY$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ = this.$m_vertices$[2] = new $b2Vec2$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * -$hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * -$count$$inline_590_hY_maxVertexY$$1_uY$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.y = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * -$hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * -$count$$inline_590_hY_maxVertexY$$1_uY$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ = this.$m_vertices$[3] = new $b2Vec2$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * $hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * -$count$$inline_590_hY_maxVertexY$$1_uY$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.y = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * $hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * -$count$$inline_590_hY_maxVertexY$$1_uY$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ = this.$m_coreVertices$[0] = new $b2Vec2$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * $cX$$inline_592_centroidX_hcY_v$$5$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.y = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * $cX$$inline_592_centroidX_hcY_v$$5$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ = this.$m_coreVertices$[1] = new $b2Vec2$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * -$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * $cX$$inline_592_centroidX_hcY_v$$5$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.y = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * -$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * $cX$$inline_592_centroidX_hcY_v$$5$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ = this.$m_coreVertices$[2] = new $b2Vec2$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * -$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * -$cX$$inline_592_centroidX_hcY_v$$5$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.y = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * -$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * -$cX$$inline_592_centroidX_hcY_v$$5$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ = this.$m_coreVertices$[3] = new $b2Vec2$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * -$cX$$inline_592_centroidX_hcY_v$$5$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.y = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * -$cX$$inline_592_centroidX_hcY_v$$5$$
  }else {
    this.$m_vertexCount$ = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.$vertexCount$;
    $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.$vertices$;
    $count$$inline_590_hY_maxVertexY$$1_uY$$ = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.$vertexCount$;
    for(var $cY$$inline_593_centroidY$$ = $cX$$inline_592_centroidX_hcY_v$$5$$ = 0, $area$$inline_594_length$$8$$ = 0, $inv3$$inline_595$$ = 1 / 3, $i$$inline_596$$ = 0;$i$$inline_596$$ < $count$$inline_590_hY_maxVertexY$$1_uY$$;++$i$$inline_596$$) {
      var $p2X$$inline_597$$ = $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$[$i$$inline_596$$].x, $p2Y$$inline_598$$ = $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$[$i$$inline_596$$].y, $p3X$$inline_599$$ = $i$$inline_596$$ + 1 < $count$$inline_590_hY_maxVertexY$$1_uY$$ ? $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$[$i$$inline_596$$ + 1].x : $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$[0].x, 
      $p3Y$$inline_600$$ = $i$$inline_596$$ + 1 < $count$$inline_590_hY_maxVertexY$$1_uY$$ ? $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$[$i$$inline_596$$ + 1].y : $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$[0].y, $triangleArea$$inline_601$$ = 0.5 * (($p2X$$inline_597$$ - 0) * ($p3Y$$inline_600$$ - 0) - ($p2Y$$inline_598$$ - 0) * ($p3X$$inline_599$$ - 0));
      $area$$inline_594_length$$8$$ += $triangleArea$$inline_601$$;
      $cX$$inline_592_centroidX_hcY_v$$5$$ += $triangleArea$$inline_601$$ * $inv3$$inline_595$$ * (0 + $p2X$$inline_597$$ + $p3X$$inline_599$$);
      $cY$$inline_593_centroidY$$ += $triangleArea$$inline_601$$ * $inv3$$inline_595$$ * (0 + $p2Y$$inline_598$$ + $p3Y$$inline_600$$)
    }
    $cX$$inline_592_centroidX_hcY_v$$5$$ *= 1 / $area$$inline_594_length$$8$$;
    $cY$$inline_593_centroidY$$ *= 1 / $area$$inline_594_length$$8$$;
    $b2PolyShape$tempVec$$.$Set$($cX$$inline_592_centroidX_hcY_v$$5$$, $cY$$inline_593_centroidY$$);
    $cX$$inline_592_centroidX_hcY_v$$5$$ = $b2PolyShape$tempVec$$.x;
    $cY$$inline_593_centroidY$$ = $b2PolyShape$tempVec$$.y;
    this.$m_localCentroid$.x = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.$localPosition$.x + ($JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * $cX$$inline_592_centroidX_hcY_v$$5$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * $cY$$inline_593_centroidY$$) - $hX_maxVertexX$$1_newOrigin_uX$$.x;
    this.$m_localCentroid$.y = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.$localPosition$.y + ($JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * $cX$$inline_592_centroidX_hcY_v$$5$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * $cY$$inline_593_centroidY$$) - $hX_maxVertexX$$1_newOrigin_uX$$.y;
    for($JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ = 0;$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ < this.$m_vertexCount$;++$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$) {
      this.$m_vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$] = new $b2Vec2$$;
      this.$m_coreVertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$] = new $b2Vec2$$;
      $hX_maxVertexX$$1_newOrigin_uX$$ = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.$vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$].x - $cX$$inline_592_centroidX_hcY_v$$5$$;
      $count$$inline_590_hY_maxVertexY$$1_uY$$ = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$.$vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$].y - $cY$$inline_593_centroidY$$;
      this.$m_vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$].x = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * $hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * $count$$inline_590_hY_maxVertexY$$1_uY$$;
      this.$m_vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$].y = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * $hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * $count$$inline_590_hY_maxVertexY$$1_uY$$;
      $hX_maxVertexX$$1_newOrigin_uX$$ = this.$m_vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$].x;
      $count$$inline_590_hY_maxVertexY$$1_uY$$ = this.$m_vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$].y;
      $area$$inline_594_length$$8$$ = Math.sqrt($hX_maxVertexX$$1_newOrigin_uX$$ * $hX_maxVertexX$$1_newOrigin_uX$$ + $count$$inline_590_hY_maxVertexY$$1_uY$$ * $count$$inline_590_hY_maxVertexY$$1_uY$$);
      if($area$$inline_594_length$$8$$ > Number.MIN_VALUE) {
        $hX_maxVertexX$$1_newOrigin_uX$$ *= 1 / $area$$inline_594_length$$8$$;
        $count$$inline_590_hY_maxVertexY$$1_uY$$ *= 1 / $area$$inline_594_length$$8$$
      }
      this.$m_coreVertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$].x = this.$m_vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$].x - 0.3 * $hX_maxVertexX$$1_newOrigin_uX$$;
      this.$m_coreVertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$].y = this.$m_vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$].y - 0.3 * $count$$inline_590_hY_maxVertexY$$1_uY$$
    }
  }
  $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ = Number.MAX_VALUE;
  $hX_maxVertexX$$1_newOrigin_uX$$ = -Number.MAX_VALUE;
  $count$$inline_590_hY_maxVertexY$$1_uY$$ = -Number.MAX_VALUE;
  for($JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ = this.$m_maxRadius$ = 0;$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ < this.$m_vertexCount$;++$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$) {
    $cX$$inline_592_centroidX_hcY_v$$5$$ = this.$m_vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$];
    $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ = Math.min($JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$, $cX$$inline_592_centroidX_hcY_v$$5$$.x);
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ = Math.min($def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$, $cX$$inline_592_centroidX_hcY_v$$5$$.y);
    $hX_maxVertexX$$1_newOrigin_uX$$ = Math.max($hX_maxVertexX$$1_newOrigin_uX$$, $cX$$inline_592_centroidX_hcY_v$$5$$.x);
    $count$$inline_590_hY_maxVertexY$$1_uY$$ = Math.max($count$$inline_590_hY_maxVertexY$$1_uY$$, $cX$$inline_592_centroidX_hcY_v$$5$$.y);
    this.$m_maxRadius$ = Math.max(this.$m_maxRadius$, $JSCompiler_StaticMethods_Length$$($cX$$inline_592_centroidX_hcY_v$$5$$))
  }
  $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ = this.$m_localOBB$.$R$;
  $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$.$col1$.x = 1;
  $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$.$col2$.x = 0;
  $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$.$col1$.y = 0;
  $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$.$col2$.y = 1;
  this.$m_localOBB$.$center$.$Set$(($JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ + $hX_maxVertexX$$1_newOrigin_uX$$) * 0.5, ($def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ + $count$$inline_590_hY_maxVertexY$$1_uY$$) * 0.5);
  this.$m_localOBB$.$extents$.$Set$(($hX_maxVertexX$$1_newOrigin_uX$$ - $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$) * 0.5, ($count$$inline_590_hY_maxVertexY$$1_uY$$ - $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$) * 0.5);
  for($JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ = 0;$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ < this.$m_vertexCount$;++$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$) {
    this.$m_normals$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$] = new $b2Vec2$$;
    $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ = $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$;
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ = $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ + 1 < this.$m_vertexCount$ ? $JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ + 1 : 0;
    this.$m_normals$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$].x = this.$m_vertices$[$def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$].y - this.$m_vertices$[$JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$].y;
    this.$m_normals$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$].y = -(this.$m_vertices$[$def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$].x - this.$m_vertices$[$JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$].x);
    $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ = this.$m_normals$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$];
    $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ = $JSCompiler_StaticMethods_Length$$($JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$);
    if(!($def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ < Number.MIN_VALUE)) {
      $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ = 1 / $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$;
      $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.x *= $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$;
      $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.y *= $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$
    }
  }
  for($JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ = 0;$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$ < this.$m_vertexCount$;++$JSCompiler_StaticMethods_SetIdentity$self$$inline_604_hcX_i$$91_vs$$inline_589$$) {
  }
  $JSCompiler_StaticMethods_SetM$$(this.$m_R$, this.$m_body$.$m_R$);
  this.$m_position$.x = this.$m_body$.$m_position$.x + (this.$m_R$.$col1$.x * this.$m_localCentroid$.x + this.$m_R$.$col2$.x * this.$m_localCentroid$.y);
  this.$m_position$.y = this.$m_body$.$m_position$.y + (this.$m_R$.$col1$.y * this.$m_localCentroid$.x + this.$m_R$.$col2$.y * this.$m_localCentroid$.y);
  $b2PolyShape$tAbsR$$.$col1$.x = this.$m_R$.$col1$.x * this.$m_localOBB$.$R$.$col1$.x + this.$m_R$.$col2$.x * this.$m_localOBB$.$R$.$col1$.y;
  $b2PolyShape$tAbsR$$.$col1$.y = this.$m_R$.$col1$.y * this.$m_localOBB$.$R$.$col1$.x + this.$m_R$.$col2$.y * this.$m_localOBB$.$R$.$col1$.y;
  $b2PolyShape$tAbsR$$.$col2$.x = this.$m_R$.$col1$.x * this.$m_localOBB$.$R$.$col2$.x + this.$m_R$.$col2$.x * this.$m_localOBB$.$R$.$col2$.y;
  $b2PolyShape$tAbsR$$.$col2$.y = this.$m_R$.$col1$.y * this.$m_localOBB$.$R$.$col2$.x + this.$m_R$.$col2$.y * this.$m_localOBB$.$R$.$col2$.y;
  $b2PolyShape$tAbsR$$.$Abs$();
  $hX_maxVertexX$$1_newOrigin_uX$$ = $b2PolyShape$tAbsR$$.$col1$.x * this.$m_localOBB$.$extents$.x + $b2PolyShape$tAbsR$$.$col2$.x * this.$m_localOBB$.$extents$.y;
  $count$$inline_590_hY_maxVertexY$$1_uY$$ = $b2PolyShape$tAbsR$$.$col1$.y * this.$m_localOBB$.$extents$.x + $b2PolyShape$tAbsR$$.$col2$.y * this.$m_localOBB$.$extents$.y;
  $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ = this.$m_position$.x + (this.$m_R$.$col1$.x * this.$m_localOBB$.$center$.x + this.$m_R$.$col2$.x * this.$m_localOBB$.$center$.y);
  $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ = this.$m_position$.y + (this.$m_R$.$col1$.y * this.$m_localOBB$.$center$.x + this.$m_R$.$col2$.y * this.$m_localOBB$.$center$.y);
  $aabb$$8_body$$7$$.$minVertex$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ - $hX_maxVertexX$$1_newOrigin_uX$$;
  $aabb$$8_body$$7$$.$minVertex$.y = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ - $count$$inline_590_hY_maxVertexY$$1_uY$$;
  $aabb$$8_body$$7$$.$maxVertex$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ + $hX_maxVertexX$$1_newOrigin_uX$$;
  $aabb$$8_body$$7$$.$maxVertex$.y = $def$$2_i2$$1_invLength$$inline_611_length$$inline_610_minVertexY$$1_positionY_tVec$$6$$ + $count$$inline_590_hY_maxVertexY$$1_uY$$;
  $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ = this.$m_body$.$m_world$.$m_broadPhase$;
  this.$m_proxyId$ = $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$InRange$($aabb$$8_body$$7$$) ? $JSCompiler_StaticMethods_Normalize$self$$inline_609_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$CreateProxy$($aabb$$8_body$$7$$, this) : 65535;
  this.$m_proxyId$ == 65535 && this.$m_body$.$Freeze$()
}
$goog$inherits$$($b2PolyShape$$, $b2Shape$$);
$b2PolyShape$$.prototype.$syncAABB$ = new $b2AABB$$;
$b2PolyShape$$.prototype.$syncMat$ = new $b2Mat22$$;
$b2PolyShape$$.prototype.$Synchronize$ = function $$b2PolyShape$$$$$Synchronize$$($centerY_position1$$2$$, $R1$$2$$, $broadPhase$$6_position2$$2$$, $R2$$2$$) {
  $JSCompiler_StaticMethods_SetM$$(this.$m_R$, $R2$$2$$);
  this.$m_position$.x = this.$m_body$.$m_position$.x + ($R2$$2$$.$col1$.x * this.$m_localCentroid$.x + $R2$$2$$.$col2$.x * this.$m_localCentroid$.y);
  this.$m_position$.y = this.$m_body$.$m_position$.y + ($R2$$2$$.$col1$.y * this.$m_localCentroid$.x + $R2$$2$$.$col2$.y * this.$m_localCentroid$.y);
  if(this.$m_proxyId$ != 65535) {
    var $hX$$1_v1$$1$$, $hY$$1_v2$$1$$;
    $hX$$1_v1$$1$$ = $R1$$2$$.$col1$;
    $hY$$1_v2$$1$$ = $R1$$2$$.$col2$;
    var $centerX_v3$$ = this.$m_localOBB$.$R$.$col1$, $v4$$ = this.$m_localOBB$.$R$.$col2$;
    this.$syncMat$.$col1$.x = $hX$$1_v1$$1$$.x * $centerX_v3$$.x + $hY$$1_v2$$1$$.x * $centerX_v3$$.y;
    this.$syncMat$.$col1$.y = $hX$$1_v1$$1$$.y * $centerX_v3$$.x + $hY$$1_v2$$1$$.y * $centerX_v3$$.y;
    this.$syncMat$.$col2$.x = $hX$$1_v1$$1$$.x * $v4$$.x + $hY$$1_v2$$1$$.x * $v4$$.y;
    this.$syncMat$.$col2$.y = $hX$$1_v1$$1$$.y * $v4$$.x + $hY$$1_v2$$1$$.y * $v4$$.y;
    this.$syncMat$.$Abs$();
    $hX$$1_v1$$1$$ = this.$m_localCentroid$.x + this.$m_localOBB$.$center$.x;
    $hY$$1_v2$$1$$ = this.$m_localCentroid$.y + this.$m_localOBB$.$center$.y;
    $centerX_v3$$ = $centerY_position1$$2$$.x + ($R1$$2$$.$col1$.x * $hX$$1_v1$$1$$ + $R1$$2$$.$col2$.x * $hY$$1_v2$$1$$);
    $centerY_position1$$2$$ = $centerY_position1$$2$$.y + ($R1$$2$$.$col1$.y * $hX$$1_v1$$1$$ + $R1$$2$$.$col2$.y * $hY$$1_v2$$1$$);
    $hX$$1_v1$$1$$ = this.$syncMat$.$col1$.x * this.$m_localOBB$.$extents$.x + this.$syncMat$.$col2$.x * this.$m_localOBB$.$extents$.y;
    $hY$$1_v2$$1$$ = this.$syncMat$.$col1$.y * this.$m_localOBB$.$extents$.x + this.$syncMat$.$col2$.y * this.$m_localOBB$.$extents$.y;
    this.$syncAABB$.$minVertex$.x = $centerX_v3$$ - $hX$$1_v1$$1$$;
    this.$syncAABB$.$minVertex$.y = $centerY_position1$$2$$ - $hY$$1_v2$$1$$;
    this.$syncAABB$.$maxVertex$.x = $centerX_v3$$ + $hX$$1_v1$$1$$;
    this.$syncAABB$.$maxVertex$.y = $centerY_position1$$2$$ + $hY$$1_v2$$1$$;
    $hX$$1_v1$$1$$ = $R2$$2$$.$col1$;
    $hY$$1_v2$$1$$ = $R2$$2$$.$col2$;
    $centerX_v3$$ = this.$m_localOBB$.$R$.$col1$;
    $v4$$ = this.$m_localOBB$.$R$.$col2$;
    this.$syncMat$.$col1$.x = $hX$$1_v1$$1$$.x * $centerX_v3$$.x + $hY$$1_v2$$1$$.x * $centerX_v3$$.y;
    this.$syncMat$.$col1$.y = $hX$$1_v1$$1$$.y * $centerX_v3$$.x + $hY$$1_v2$$1$$.y * $centerX_v3$$.y;
    this.$syncMat$.$col2$.x = $hX$$1_v1$$1$$.x * $v4$$.x + $hY$$1_v2$$1$$.x * $v4$$.y;
    this.$syncMat$.$col2$.y = $hX$$1_v1$$1$$.y * $v4$$.x + $hY$$1_v2$$1$$.y * $v4$$.y;
    this.$syncMat$.$Abs$();
    $hX$$1_v1$$1$$ = this.$m_localCentroid$.x + this.$m_localOBB$.$center$.x;
    $hY$$1_v2$$1$$ = this.$m_localCentroid$.y + this.$m_localOBB$.$center$.y;
    $centerX_v3$$ = $broadPhase$$6_position2$$2$$.x + ($R2$$2$$.$col1$.x * $hX$$1_v1$$1$$ + $R2$$2$$.$col2$.x * $hY$$1_v2$$1$$);
    $centerY_position1$$2$$ = $broadPhase$$6_position2$$2$$.y + ($R2$$2$$.$col1$.y * $hX$$1_v1$$1$$ + $R2$$2$$.$col2$.y * $hY$$1_v2$$1$$);
    $hX$$1_v1$$1$$ = this.$syncMat$.$col1$.x * this.$m_localOBB$.$extents$.x + this.$syncMat$.$col2$.x * this.$m_localOBB$.$extents$.y;
    $hY$$1_v2$$1$$ = this.$syncMat$.$col1$.y * this.$m_localOBB$.$extents$.x + this.$syncMat$.$col2$.y * this.$m_localOBB$.$extents$.y;
    this.$syncAABB$.$minVertex$.x = Math.min(this.$syncAABB$.$minVertex$.x, $centerX_v3$$ - $hX$$1_v1$$1$$);
    this.$syncAABB$.$minVertex$.y = Math.min(this.$syncAABB$.$minVertex$.y, $centerY_position1$$2$$ - $hY$$1_v2$$1$$);
    this.$syncAABB$.$maxVertex$.x = Math.max(this.$syncAABB$.$maxVertex$.x, $centerX_v3$$ + $hX$$1_v1$$1$$);
    this.$syncAABB$.$maxVertex$.y = Math.max(this.$syncAABB$.$maxVertex$.y, $centerY_position1$$2$$ + $hY$$1_v2$$1$$);
    $broadPhase$$6_position2$$2$$ = this.$m_body$.$m_world$.$m_broadPhase$;
    $broadPhase$$6_position2$$2$$.$InRange$(this.$syncAABB$) ? $broadPhase$$6_position2$$2$$.$MoveProxy$(this.$m_proxyId$, this.$syncAABB$) : this.$m_body$.$Freeze$()
  }
};
$b2PolyShape$$.prototype.$ResetProxy$ = function $$b2PolyShape$$$$$ResetProxy$$($broadPhase$$7$$) {
  if(this.$m_proxyId$ != 65535) {
    $broadPhase$$7$$.$DestroyProxy$(this.$m_proxyId$);
    var $R$$3_absR_h$$6$$ = new $b2Mat22$$(0, $b2Math$b2MulMV$$(this.$m_R$, this.$m_localOBB$.$R$.$col1$), $b2Math$b2MulMV$$(this.$m_R$, this.$m_localOBB$.$R$.$col2$));
    $R$$3_absR_h$$6$$ = new $b2Mat22$$(0, new $b2Vec2$$($b2Math$b2Abs$$($R$$3_absR_h$$6$$.$col1$.x), $b2Math$b2Abs$$($R$$3_absR_h$$6$$.$col1$.y)), new $b2Vec2$$($b2Math$b2Abs$$($R$$3_absR_h$$6$$.$col2$.x), $b2Math$b2Abs$$($R$$3_absR_h$$6$$.$col2$.y)));
    $R$$3_absR_h$$6$$ = $b2Math$b2MulMV$$($R$$3_absR_h$$6$$, this.$m_localOBB$.$extents$);
    var $position$$5$$ = $b2Math$b2MulMV$$(this.$m_R$, this.$m_localOBB$.$center$);
    $JSCompiler_StaticMethods_Add$$($position$$5$$, this.$m_position$);
    var $aabb$$9$$ = new $b2AABB$$;
    $JSCompiler_StaticMethods_SetV$$($aabb$$9$$.$minVertex$, $position$$5$$);
    var $JSCompiler_StaticMethods_Subtract$self$$inline_615$$ = $aabb$$9$$.$minVertex$;
    $JSCompiler_StaticMethods_Subtract$self$$inline_615$$.x -= $R$$3_absR_h$$6$$.x;
    $JSCompiler_StaticMethods_Subtract$self$$inline_615$$.y -= $R$$3_absR_h$$6$$.y;
    $JSCompiler_StaticMethods_SetV$$($aabb$$9$$.$maxVertex$, $position$$5$$);
    $JSCompiler_StaticMethods_Add$$($aabb$$9$$.$maxVertex$, $R$$3_absR_h$$6$$);
    this.$m_proxyId$ = $broadPhase$$7$$.$InRange$($aabb$$9$$) ? $broadPhase$$7$$.$CreateProxy$($aabb$$9$$, this) : 65535;
    this.$m_proxyId$ == 65535 && this.$m_body$.$Freeze$()
  }
};
var $b2PolyShape$tempVec$$ = new $b2Vec2$$, $b2PolyShape$tAbsR$$ = new $b2Mat22$$;
// Input 102
// Input 103
function $b2Body$$($bd$$, $world$$1$$) {
  this.$sMat0$ = new $b2Mat22$$;
  this.$m_position$ = new $b2Vec2$$;
  this.$m_R$ = new $b2Mat22$$(0);
  this.$m_position0$ = new $b2Vec2$$;
  var $i$$94$$ = 0, $r_sd$$, $def$$inline_626_massData$$2_shape$$1$$;
  this.$m_flags$ = 0;
  $JSCompiler_StaticMethods_SetV$$(this.$m_position$, $bd$$.position);
  this.$m_rotation$ = $bd$$.rotation;
  this.$m_R$.$Set$(this.$m_rotation$);
  $JSCompiler_StaticMethods_SetV$$(this.$m_position0$, this.$m_position$);
  this.$m_rotation0$ = this.$m_rotation$;
  this.$m_world$ = $world$$1$$;
  this.$m_linearDamping$ = $b2Math$b2Clamp$$(1 - $bd$$.$linearDamping$, 0, 1);
  this.$m_angularDamping$ = $b2Math$b2Clamp$$(1 - $bd$$.$angularDamping$, 0, 1);
  this.$m_force$ = new $b2Vec2$$(0, 0);
  this.$m_mass$ = this.$m_torque$ = 0;
  var $center$$inline_628_massDatas$$ = Array(64);
  for($i$$94$$ = 0;$i$$94$$ < 64;$i$$94$$++) {
    $center$$inline_628_massDatas$$[$i$$94$$] = new $b2MassData$$
  }
  this.$m_shapeCount$ = 0;
  this.$m_center$ = new $b2Vec2$$(0, 0);
  for($i$$94$$ = 0;$i$$94$$ < 64;++$i$$94$$) {
    $r_sd$$ = $bd$$.$shapes$[$i$$94$$];
    if($r_sd$$ == null) {
      break
    }
    $def$$inline_626_massData$$2_shape$$1$$ = $center$$inline_628_massDatas$$[$i$$94$$];
    var $JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$ = $r_sd$$, $massData$$inline_1049_massData$$inline_621$$ = $def$$inline_626_massData$$2_shape$$1$$;
    $massData$$inline_1049_massData$$inline_621$$.$center$ = new $b2Vec2$$(0, 0);
    if($JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$.$density$ == 0) {
      $massData$$inline_1049_massData$$inline_621$$.$mass$ = 0;
      $massData$$inline_1049_massData$$inline_621$$.$center$.$Set$(0, 0);
      $massData$$inline_1049_massData$$inline_621$$.$I$ = 0
    }
    switch($JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$.type) {
      case 0:
        $massData$$inline_1049_massData$$inline_621$$.$mass$ = $JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$.$density$ * $b2Settings$b2_pi$$ * $JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$.$radius$ * $JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$.$radius$;
        $massData$$inline_1049_massData$$inline_621$$.$center$.$Set$(0, 0);
        $massData$$inline_1049_massData$$inline_621$$.$I$ = 0.5 * $massData$$inline_1049_massData$$inline_621$$.$mass$ * $JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$.$radius$ * $JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$.$radius$;
        break;
      case $b2Shape$e_boxShape$$:
        $massData$$inline_1049_massData$$inline_621$$.$mass$ = 4 * $JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$.$density$ * $JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$.$extents$.x * $JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$.$extents$.y;
        $massData$$inline_1049_massData$$inline_621$$.$center$.$Set$(0, 0);
        $massData$$inline_1049_massData$$inline_621$$.$I$ = $massData$$inline_1049_massData$$inline_621$$.$mass$ / 3 * $b2Math$b2Dot$$($JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$.$extents$, $JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$.$extents$);
        break;
      case 2:
        $massData$$inline_1049_massData$$inline_621$$ = $massData$$inline_1049_massData$$inline_621$$;
        var $vs$$inline_1050$$ = $JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$.$vertices$, $count$$inline_1051$$ = $JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$.$vertexCount$;
        $JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$ = $JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$.$density$;
        var $center$$inline_1053$$ = new $b2Vec2$$;
        $center$$inline_1053$$.$SetZero$();
        for(var $area$$inline_1054$$ = 0, $I$$inline_1055$$ = 0, $pRef$$inline_1056$$ = new $b2Vec2$$(0, 0), $inv3$$inline_1057$$ = 1 / 3, $i$$inline_1058$$ = 0;$i$$inline_1058$$ < $count$$inline_1051$$;++$i$$inline_1058$$) {
          var $p1$$inline_1059_py$$inline_1068$$ = $pRef$$inline_1056$$, $p2$$inline_1060_px$$inline_1067$$ = $vs$$inline_1050$$[$i$$inline_1058$$], $ex1$$inline_1069_p3$$inline_1061$$ = $i$$inline_1058$$ + 1 < $count$$inline_1051$$ ? $vs$$inline_1050$$[$i$$inline_1058$$ + 1] : $vs$$inline_1050$$[0], $e1$$inline_1062_ey1$$inline_1070$$ = $b2Math$SubtractVV$$($p2$$inline_1060_px$$inline_1067$$, $p1$$inline_1059_py$$inline_1068$$), $e2$$inline_1063_ey2$$inline_1072$$ = $b2Math$SubtractVV$$($ex1$$inline_1069_p3$$inline_1061$$, 
          $p1$$inline_1059_py$$inline_1068$$), $D$$inline_1064$$ = $e1$$inline_1062_ey1$$inline_1070$$.x * $e2$$inline_1063_ey2$$inline_1072$$.y - $e1$$inline_1062_ey1$$inline_1070$$.y * $e2$$inline_1063_ey2$$inline_1072$$.x, $ex2$$inline_1071_triangleArea$$inline_1065$$ = 0.5 * $D$$inline_1064$$;
          $area$$inline_1054$$ += $ex2$$inline_1071_triangleArea$$inline_1065$$;
          var $tVec$$inline_1066$$ = new $b2Vec2$$;
          $JSCompiler_StaticMethods_SetV$$($tVec$$inline_1066$$, $p1$$inline_1059_py$$inline_1068$$);
          $JSCompiler_StaticMethods_Add$$($tVec$$inline_1066$$, $p2$$inline_1060_px$$inline_1067$$);
          $JSCompiler_StaticMethods_Add$$($tVec$$inline_1066$$, $ex1$$inline_1069_p3$$inline_1061$$);
          $JSCompiler_StaticMethods_Multiply$$($tVec$$inline_1066$$, $inv3$$inline_1057$$ * $ex2$$inline_1071_triangleArea$$inline_1065$$);
          $JSCompiler_StaticMethods_Add$$($center$$inline_1053$$, $tVec$$inline_1066$$);
          $p2$$inline_1060_px$$inline_1067$$ = $p1$$inline_1059_py$$inline_1068$$.x;
          $p1$$inline_1059_py$$inline_1068$$ = $p1$$inline_1059_py$$inline_1068$$.y;
          $ex1$$inline_1069_p3$$inline_1061$$ = $e1$$inline_1062_ey1$$inline_1070$$.x;
          $e1$$inline_1062_ey1$$inline_1070$$ = $e1$$inline_1062_ey1$$inline_1070$$.y;
          $ex2$$inline_1071_triangleArea$$inline_1065$$ = $e2$$inline_1063_ey2$$inline_1072$$.x;
          $e2$$inline_1063_ey2$$inline_1072$$ = $e2$$inline_1063_ey2$$inline_1072$$.y;
          $I$$inline_1055$$ += $D$$inline_1064$$ * ($inv3$$inline_1057$$ * (0.25 * ($ex1$$inline_1069_p3$$inline_1061$$ * $ex1$$inline_1069_p3$$inline_1061$$ + $ex2$$inline_1071_triangleArea$$inline_1065$$ * $ex1$$inline_1069_p3$$inline_1061$$ + $ex2$$inline_1071_triangleArea$$inline_1065$$ * $ex2$$inline_1071_triangleArea$$inline_1065$$) + ($p2$$inline_1060_px$$inline_1067$$ * $ex1$$inline_1069_p3$$inline_1061$$ + $p2$$inline_1060_px$$inline_1067$$ * $ex2$$inline_1071_triangleArea$$inline_1065$$)) + 
          0.5 * $p2$$inline_1060_px$$inline_1067$$ * $p2$$inline_1060_px$$inline_1067$$ + ($inv3$$inline_1057$$ * (0.25 * ($e1$$inline_1062_ey1$$inline_1070$$ * $e1$$inline_1062_ey1$$inline_1070$$ + $e2$$inline_1063_ey2$$inline_1072$$ * $e1$$inline_1062_ey1$$inline_1070$$ + $e2$$inline_1063_ey2$$inline_1072$$ * $e2$$inline_1063_ey2$$inline_1072$$) + ($p1$$inline_1059_py$$inline_1068$$ * $e1$$inline_1062_ey1$$inline_1070$$ + $p1$$inline_1059_py$$inline_1068$$ * $e2$$inline_1063_ey2$$inline_1072$$)) + 
          0.5 * $p1$$inline_1059_py$$inline_1068$$ * $p1$$inline_1059_py$$inline_1068$$))
        }
        $massData$$inline_1049_massData$$inline_621$$.$mass$ = $JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$ * $area$$inline_1054$$;
        $JSCompiler_StaticMethods_Multiply$$($center$$inline_1053$$, 1 / $area$$inline_1054$$);
        $massData$$inline_1049_massData$$inline_621$$.$center$ = $center$$inline_1053$$;
        $I$$inline_1055$$ = $JSCompiler_StaticMethods_ComputeMass$self$$inline_620_rho$$inline_1052$$ * ($I$$inline_1055$$ - $area$$inline_1054$$ * $b2Math$b2Dot$$($center$$inline_1053$$, $center$$inline_1053$$));
        $massData$$inline_1049_massData$$inline_621$$.$I$ = $I$$inline_1055$$;
        break;
      default:
        $massData$$inline_1049_massData$$inline_621$$.$mass$ = 0;
        $massData$$inline_1049_massData$$inline_621$$.$center$.$Set$(0, 0);
        $massData$$inline_1049_massData$$inline_621$$.$I$ = 0;
        break
    }
    this.$m_mass$ += $def$$inline_626_massData$$2_shape$$1$$.$mass$;
    this.$m_center$.x += $def$$inline_626_massData$$2_shape$$1$$.$mass$ * ($r_sd$$.$localPosition$.x + $def$$inline_626_massData$$2_shape$$1$$.$center$.x);
    this.$m_center$.y += $def$$inline_626_massData$$2_shape$$1$$.$mass$ * ($r_sd$$.$localPosition$.y + $def$$inline_626_massData$$2_shape$$1$$.$center$.y);
    ++this.$m_shapeCount$
  }
  if(this.$m_mass$ > 0) {
    $JSCompiler_StaticMethods_Multiply$$(this.$m_center$, 1 / this.$m_mass$);
    $JSCompiler_StaticMethods_Add$$(this.$m_position$, $b2Math$b2MulMV$$(this.$m_R$, this.$m_center$))
  }else {
    this.$m_flags$ |= $b2Body$e_staticFlag$$
  }
  for($i$$94$$ = this.$m_I$ = 0;$i$$94$$ < this.$m_shapeCount$;++$i$$94$$) {
    $r_sd$$ = $bd$$.$shapes$[$i$$94$$];
    $def$$inline_626_massData$$2_shape$$1$$ = $center$$inline_628_massDatas$$[$i$$94$$];
    this.$m_I$ += $def$$inline_626_massData$$2_shape$$1$$.$I$;
    $r_sd$$ = $b2Math$SubtractVV$$($b2Math$AddVV$$($r_sd$$.$localPosition$, $def$$inline_626_massData$$2_shape$$1$$.$center$), this.$m_center$);
    this.$m_I$ += $def$$inline_626_massData$$2_shape$$1$$.$mass$ * $b2Math$b2Dot$$($r_sd$$, $r_sd$$)
  }
  this.$m_invMass$ = this.$m_mass$ > 0 ? 1 / this.$m_mass$ : 0;
  if(this.$m_I$ > 0 && $bd$$.$preventRotation$ == false) {
    this.$m_invI$ = 1 / this.$m_I$
  }else {
    this.$m_invI$ = this.$m_I$ = 0
  }
  this.$m_linearVelocity$ = $b2Math$AddVV$$($bd$$.$linearVelocity$, new $b2Vec2$$(-$bd$$.$angularVelocity$ * this.$m_center$.y, $bd$$.$angularVelocity$ * this.$m_center$.x));
  this.$m_angularVelocity$ = $bd$$.$angularVelocity$;
  this.$m_shapeList$ = this.$m_next$ = this.$m_prev$ = this.$m_contactList$ = this.$m_jointList$ = null;
  for($i$$94$$ = 0;$i$$94$$ < this.$m_shapeCount$;++$i$$94$$) {
    $r_sd$$ = $bd$$.$shapes$[$i$$94$$];
    a: {
      $def$$inline_626_massData$$2_shape$$1$$ = $r_sd$$;
      $center$$inline_628_massDatas$$ = this.$m_center$;
      switch($def$$inline_626_massData$$2_shape$$1$$.type) {
        case 0:
          $def$$inline_626_massData$$2_shape$$1$$ = new $b2CircleShape$$($def$$inline_626_massData$$2_shape$$1$$, this, $center$$inline_628_massDatas$$);
          break a;
        case $b2Shape$e_boxShape$$:
        ;
        case 2:
          $def$$inline_626_massData$$2_shape$$1$$ = new $b2PolyShape$$($def$$inline_626_massData$$2_shape$$1$$, this, $center$$inline_628_massDatas$$);
          break a
      }
      $def$$inline_626_massData$$2_shape$$1$$ = null
    }
    $def$$inline_626_massData$$2_shape$$1$$.$m_next$ = this.$m_shapeList$;
    this.$m_shapeList$ = $def$$inline_626_massData$$2_shape$$1$$
  }
  this.$m_sleepTime$ = 0;
  if($bd$$.$allowSleep$) {
    this.$m_flags$ |= $b2Body$e_allowSleepFlag$$
  }
  if($bd$$.$isSleeping$) {
    this.$m_flags$ |= $b2Body$e_sleepFlag$$
  }
  if(this.$m_flags$ & $b2Body$e_sleepFlag$$ || this.$m_invMass$ == 0) {
    this.$m_linearVelocity$.$Set$(0, 0);
    this.$m_angularVelocity$ = 0
  }
  this.$m_userData$ = $bd$$.$userData$
}
$b2Body$$.prototype = {$IsStatic$:function $$b2Body$$$$$IsStatic$$() {
  return(this.$m_flags$ & $b2Body$e_staticFlag$$) == $b2Body$e_staticFlag$$
}, $IsFrozen$:function $$b2Body$$$$$IsFrozen$$() {
  return(this.$m_flags$ & $b2Body$e_frozenFlag$$) == $b2Body$e_frozenFlag$$
}, $IsSleeping$:function $$b2Body$$$$$IsSleeping$$() {
  return(this.$m_flags$ & $b2Body$e_sleepFlag$$) == $b2Body$e_sleepFlag$$
}, $WakeUp$:function $$b2Body$$$$$WakeUp$$() {
  this.$m_flags$ &= ~$b2Body$e_sleepFlag$$;
  this.$m_sleepTime$ = 0
}, $GetNext$:$JSCompiler_get$$("$m_next$"), $Destroy$:function $$b2Body$$$$$Destroy$$() {
  for(var $s$$27$$ = this.$m_shapeList$;$s$$27$$;) {
    var $s0$$ = $s$$27$$;
    $s$$27$$ = $s$$27$$.$m_next$;
    $s0$$.$m_proxyId$ != 65535 && $s0$$.$m_body$.$m_world$.$m_broadPhase$.$DestroyProxy$($s0$$.$m_proxyId$)
  }
}, $sMat0$:new $b2Mat22$$, $SynchronizeShapes$:function $$b2Body$$$$$SynchronizeShapes$$() {
  this.$sMat0$.$Set$(this.$m_rotation0$);
  for(var $s$$28$$ = this.$m_shapeList$;$s$$28$$ != null;$s$$28$$ = $s$$28$$.$m_next$) {
    $s$$28$$.$Synchronize$(this.$m_position0$, this.$sMat0$, this.$m_position$, this.$m_R$)
  }
}, $IsConnected$:function $$b2Body$$$$$IsConnected$$($other$$6$$) {
  for(var $jn$$ = this.$m_jointList$;$jn$$ != null;$jn$$ = $jn$$.next) {
    if($jn$$.$other$ == $other$$6$$) {
      return $jn$$.$joint$.$m_collideConnected$ == false
    }
  }
  return false
}, $Freeze$:function $$b2Body$$$$$Freeze$$() {
  this.$m_flags$ |= $b2Body$e_frozenFlag$$;
  this.$m_linearVelocity$.$SetZero$();
  this.$m_angularVelocity$ = 0;
  for(var $s$$30$$ = this.$m_shapeList$;$s$$30$$ != null;$s$$30$$ = $s$$30$$.$m_next$) {
    $s$$30$$.$DestroyProxy$()
  }
}, $m_flags$:0, $m_position$:new $b2Vec2$$, $m_rotation$:null, $m_R$:new $b2Mat22$$(0), $m_position0$:new $b2Vec2$$, $m_rotation0$:null, $m_linearVelocity$:null, $m_angularVelocity$:null, $m_force$:null, $m_torque$:null, $m_center$:null, $m_world$:null, $m_prev$:null, $m_next$:null, $m_shapeList$:null, $m_shapeCount$:0, $m_jointList$:null, $m_contactList$:null, $m_mass$:null, $m_invMass$:null, $m_I$:null, $m_invI$:null, $m_linearDamping$:null, $m_angularDamping$:null, $m_sleepTime$:null, $m_userData$:null};
var $b2Body$e_staticFlag$$ = 1, $b2Body$e_frozenFlag$$ = 2, $b2Body$e_sleepFlag$$ = 8, $b2Body$e_allowSleepFlag$$ = 16;
// Input 104
function $b2BodyDef$$() {
  this.$shapes$ = [];
  this.$userData$ = null;
  for(var $i$$95$$ = 0;$i$$95$$ < 64;$i$$95$$++) {
    this.$shapes$[$i$$95$$] = null
  }
  this.position = new $b2Vec2$$(0, 0);
  this.rotation = 0;
  this.$linearVelocity$ = new $b2Vec2$$(0, 0);
  this.$angularDamping$ = this.$linearDamping$ = this.$angularVelocity$ = 0;
  this.$allowSleep$ = true;
  this.$preventRotation$ = this.$isSleeping$ = false
}
$b2BodyDef$$.prototype = {$userData$:null, $shapes$:[], position:null, rotation:null, $linearVelocity$:null, $angularVelocity$:null, $linearDamping$:null, $angularDamping$:null, $allowSleep$:null, $isSleeping$:null, $preventRotation$:null, $AddShape$:function $$b2BodyDef$$$$$AddShape$$($shape$$2$$) {
  for(var $i$$96$$ = 0;$i$$96$$ < 64;++$i$$96$$) {
    if(this.$shapes$[$i$$96$$] == null) {
      this.$shapes$[$i$$96$$] = $shape$$2$$;
      break
    }
  }
}};
// Input 105
var $b2CollisionFilter$b2_defaultFilter$$ = new ($JSCompiler_emptyFn$$());
// Input 106
function $b2TimeStep$$() {
}
$b2TimeStep$$.prototype = {$dt$:null, $inv_dt$:null, $iterations$:0};
// Input 107
// Input 108
function $b2ContactConstraintPoint$$() {
  this.$localAnchor1$ = new $b2Vec2$$;
  this.$localAnchor2$ = new $b2Vec2$$
}
$b2ContactConstraintPoint$$.prototype = {$normalImpulse$:null, $tangentImpulse$:null, $positionImpulse$:null, $normalMass$:null, $tangentMass$:null, $separation$:null, $velocityBias$:null};
// Input 109
function $b2ContactConstraint$$() {
  this.$normal$ = new $b2Vec2$$;
  this.$points$ = Array(2);
  for(var $i$$97$$ = 0;$i$$97$$ < 2;$i$$97$$++) {
    this.$points$[$i$$97$$] = new $b2ContactConstraintPoint$$
  }
}
$b2ContactConstraint$$.prototype = {$manifold$:null, $body1$:null, $body2$:null, $friction$:null, $restitution$:null, $pointCount$:0};
// Input 110
function $b2ContactNode$$() {
}
$b2ContactNode$$.prototype = {$other$:null, $contact$:null, $prev$:null, next:null};
// Input 111
function $b2ContactRegister$$() {
}
$b2ContactRegister$$.prototype = {$createFcn$:null, $destroyFcn$:null, $primary$:null};
// Input 112
function $b2Contact$$($s1$$1$$, $s2$$) {
  this.$m_node1$ = new $b2ContactNode$$;
  this.$m_node2$ = new $b2ContactNode$$;
  this.$m_flags$ = 0;
  if(!$s1$$1$$ || !$s2$$) {
    this.$m_shape2$ = this.$m_shape1$ = null
  }else {
    this.$m_shape1$ = $s1$$1$$;
    this.$m_shape2$ = $s2$$;
    this.$m_manifoldCount$ = 0;
    this.$m_friction$ = Math.sqrt(this.$m_shape1$.$m_friction$ * this.$m_shape2$.$m_friction$);
    this.$m_restitution$ = $b2Math$b2Max$$(this.$m_shape1$.$m_restitution$, this.$m_shape2$.$m_restitution$);
    this.$m_next$ = this.$m_prev$ = null;
    this.$m_node1$.$contact$ = null;
    this.$m_node1$.$prev$ = null;
    this.$m_node1$.next = null;
    this.$m_node1$.$other$ = null;
    this.$m_node2$.$contact$ = null;
    this.$m_node2$.$prev$ = null;
    this.$m_node2$.next = null;
    this.$m_node2$.$other$ = null
  }
}
$b2Contact$$.prototype = {$GetManifolds$:$JSCompiler_returnArg$$(null), $GetNext$:$JSCompiler_get$$("$m_next$"), $Evaluate$:$JSCompiler_emptyFn$$(), $m_flags$:0, $m_prev$:null, $m_next$:null, $m_node1$:new $b2ContactNode$$, $m_node2$:new $b2ContactNode$$, $m_shape1$:null, $m_shape2$:null, $m_manifoldCount$:0, $m_friction$:null, $m_restitution$:null};
// Input 113
function $b2CircleContact$$($s1$$2$$, $s2$$1$$) {
  this.$m_node1$ = new $b2ContactNode$$;
  this.$m_node2$ = new $b2ContactNode$$;
  this.$m_flags$ = 0;
  if(!$s1$$2$$ || !$s2$$1$$) {
    this.$m_shape2$ = this.$m_shape1$ = null
  }else {
    this.$m_shape1$ = $s1$$2$$;
    this.$m_shape2$ = $s2$$1$$;
    this.$m_manifoldCount$ = 0;
    this.$m_friction$ = Math.sqrt(this.$m_shape1$.$m_friction$ * this.$m_shape2$.$m_friction$);
    this.$m_restitution$ = $b2Math$b2Max$$(this.$m_shape1$.$m_restitution$, this.$m_shape2$.$m_restitution$);
    this.$m_next$ = this.$m_prev$ = null;
    this.$m_node1$.$contact$ = null;
    this.$m_node1$.$prev$ = null;
    this.$m_node1$.next = null;
    this.$m_node1$.$other$ = null;
    this.$m_node2$.$contact$ = null;
    this.$m_node2$.$prev$ = null;
    this.$m_node2$.next = null;
    this.$m_node2$.$other$ = null;
    this.$m_manifold$ = [new $b2Manifold$$];
    this.$m_manifold$[0].$pointCount$ = 0;
    this.$m_manifold$[0].$points$[0].$normalImpulse$ = 0;
    this.$m_manifold$[0].$points$[0].$tangentImpulse$ = 0
  }
}
Object.extend($b2CircleContact$$.prototype, $b2Contact$$.prototype);
Object.extend($b2CircleContact$$.prototype, {$Evaluate$:function() {
  var $manifold$$inline_645$$ = this.$m_manifold$[0], $a$$inline_655_circle1$$inline_646_radiusSum$$inline_652$$ = this.$m_shape1$, $circle2$$inline_647$$ = this.$m_shape2$;
  $manifold$$inline_645$$.$pointCount$ = 0;
  var $dX$$inline_649_tPoint$$inline_656$$ = $circle2$$inline_647$$.$m_position$.x - $a$$inline_655_circle1$$inline_646_radiusSum$$inline_652$$.$m_position$.x, $dY$$inline_650$$ = $circle2$$inline_647$$.$m_position$.y - $a$$inline_655_circle1$$inline_646_radiusSum$$inline_652$$.$m_position$.y, $distSqr$$inline_651_separation$$inline_653$$ = $dX$$inline_649_tPoint$$inline_656$$ * $dX$$inline_649_tPoint$$inline_656$$ + $dY$$inline_650$$ * $dY$$inline_650$$;
  $a$$inline_655_circle1$$inline_646_radiusSum$$inline_652$$ = $a$$inline_655_circle1$$inline_646_radiusSum$$inline_652$$.$m_radius$ + $circle2$$inline_647$$.$m_radius$;
  if(!($distSqr$$inline_651_separation$$inline_653$$ > $a$$inline_655_circle1$$inline_646_radiusSum$$inline_652$$ * $a$$inline_655_circle1$$inline_646_radiusSum$$inline_652$$ && 1)) {
    if($distSqr$$inline_651_separation$$inline_653$$ < Number.MIN_VALUE) {
      $distSqr$$inline_651_separation$$inline_653$$ = -$a$$inline_655_circle1$$inline_646_radiusSum$$inline_652$$;
      $manifold$$inline_645$$.$normal$.$Set$(0, 1)
    }else {
      var $dist$$inline_654$$ = Math.sqrt($distSqr$$inline_651_separation$$inline_653$$);
      $distSqr$$inline_651_separation$$inline_653$$ = $dist$$inline_654$$ - $a$$inline_655_circle1$$inline_646_radiusSum$$inline_652$$;
      $a$$inline_655_circle1$$inline_646_radiusSum$$inline_652$$ = 1 / $dist$$inline_654$$;
      $manifold$$inline_645$$.$normal$.x = $a$$inline_655_circle1$$inline_646_radiusSum$$inline_652$$ * $dX$$inline_649_tPoint$$inline_656$$;
      $manifold$$inline_645$$.$normal$.y = $a$$inline_655_circle1$$inline_646_radiusSum$$inline_652$$ * $dY$$inline_650$$
    }
    $manifold$$inline_645$$.$pointCount$ = 1;
    $dX$$inline_649_tPoint$$inline_656$$ = $manifold$$inline_645$$.$points$[0];
    $dX$$inline_649_tPoint$$inline_656$$.id.$set_key$(0);
    $dX$$inline_649_tPoint$$inline_656$$.$separation$ = $distSqr$$inline_651_separation$$inline_653$$;
    $dX$$inline_649_tPoint$$inline_656$$.position.x = $circle2$$inline_647$$.$m_position$.x - $circle2$$inline_647$$.$m_radius$ * $manifold$$inline_645$$.$normal$.x;
    $dX$$inline_649_tPoint$$inline_656$$.position.y = $circle2$$inline_647$$.$m_position$.y - $circle2$$inline_647$$.$m_radius$ * $manifold$$inline_645$$.$normal$.y
  }
  this.$m_manifoldCount$ = this.$m_manifold$[0].$pointCount$ > 0 ? 1 : 0
}, $GetManifolds$:$JSCompiler_get$$("$m_manifold$"), $m_manifold$:[new $b2Manifold$$]});
function $b2CircleContact$Create$$($shape1$$1$$, $shape2$$1$$) {
  return new $b2CircleContact$$($shape1$$1$$, $shape2$$1$$)
}
function $b2CircleContact$Destroy$$() {
}
;
// Input 114
function $b2ContactSolver$$($contacts$$, $contactCount$$, $allocator$$2_i$$98$$) {
  this.$m_constraints$ = [];
  this.$m_allocator$ = $allocator$$2_i$$98$$;
  $allocator$$2_i$$98$$ = 0;
  var $r1Sqr_tVec$$8$$, $r2Sqr_tMat$$4$$;
  for($allocator$$2_i$$98$$ = this.$m_constraintCount$ = 0;$allocator$$2_i$$98$$ < $contactCount$$;++$allocator$$2_i$$98$$) {
    this.$m_constraintCount$ += $contacts$$[$allocator$$2_i$$98$$].$m_manifoldCount$
  }
  for($allocator$$2_i$$98$$ = 0;$allocator$$2_i$$98$$ < this.$m_constraintCount$;$allocator$$2_i$$98$$++) {
    this.$m_constraints$[$allocator$$2_i$$98$$] = new $b2ContactConstraint$$
  }
  var $count$$11$$ = 0;
  for($allocator$$2_i$$98$$ = 0;$allocator$$2_i$$98$$ < $contactCount$$;++$allocator$$2_i$$98$$) {
    var $contact$$1_restitution$$ = $contacts$$[$allocator$$2_i$$98$$], $b1$$1$$ = $contact$$1_restitution$$.$m_shape1$.$m_body$, $b2$$ = $contact$$1_restitution$$.$m_shape2$.$m_body$, $manifoldCount$$ = $contact$$1_restitution$$.$m_manifoldCount$, $manifolds$$ = $contact$$1_restitution$$.$GetManifolds$(), $friction$$ = $contact$$1_restitution$$.$m_friction$;
    $contact$$1_restitution$$ = $contact$$1_restitution$$.$m_restitution$;
    for(var $v1X$$1$$ = $b1$$1$$.$m_linearVelocity$.x, $v1Y$$1$$ = $b1$$1$$.$m_linearVelocity$.y, $v2X$$1$$ = $b2$$.$m_linearVelocity$.x, $v2Y$$1$$ = $b2$$.$m_linearVelocity$.y, $w1$$ = $b1$$1$$.$m_angularVelocity$, $w2$$ = $b2$$.$m_angularVelocity$, $j$$9$$ = 0;$j$$9$$ < $manifoldCount$$;++$j$$9$$) {
      var $manifold$$3$$ = $manifolds$$[$j$$9$$], $normalX$$1$$ = $manifold$$3$$.$normal$.x, $normalY$$1$$ = $manifold$$3$$.$normal$.y, $c$$7$$ = this.$m_constraints$[$count$$11$$];
      $c$$7$$.$body1$ = $b1$$1$$;
      $c$$7$$.$body2$ = $b2$$;
      $c$$7$$.$manifold$ = $manifold$$3$$;
      $c$$7$$.$normal$.x = $normalX$$1$$;
      $c$$7$$.$normal$.y = $normalY$$1$$;
      $c$$7$$.$pointCount$ = $manifold$$3$$.$pointCount$;
      $c$$7$$.$friction$ = $friction$$;
      $c$$7$$.$restitution$ = $contact$$1_restitution$$;
      for(var $k$$ = 0;$k$$ < $c$$7$$.$pointCount$;++$k$$) {
        var $cp$$1_r2Y$$ = $manifold$$3$$.$points$[$k$$], $ccp$$ = $c$$7$$.$points$[$k$$];
        $ccp$$.$normalImpulse$ = $cp$$1_r2Y$$.$normalImpulse$;
        $ccp$$.$tangentImpulse$ = $cp$$1_r2Y$$.$tangentImpulse$;
        $ccp$$.$separation$ = $cp$$1_r2Y$$.$separation$;
        var $r1X_vRel$$ = $cp$$1_r2Y$$.position.x - $b1$$1$$.$m_position$.x, $r1Y$$ = $cp$$1_r2Y$$.position.y - $b1$$1$$.$m_position$.y, $r2X$$ = $cp$$1_r2Y$$.position.x - $b2$$.$m_position$.x;
        $cp$$1_r2Y$$ = $cp$$1_r2Y$$.position.y - $b2$$.$m_position$.y;
        $r1Sqr_tVec$$8$$ = $ccp$$.$localAnchor1$;
        $r2Sqr_tMat$$4$$ = $b1$$1$$.$m_R$;
        $r1Sqr_tVec$$8$$.x = $r1X_vRel$$ * $r2Sqr_tMat$$4$$.$col1$.x + $r1Y$$ * $r2Sqr_tMat$$4$$.$col1$.y;
        $r1Sqr_tVec$$8$$.y = $r1X_vRel$$ * $r2Sqr_tMat$$4$$.$col2$.x + $r1Y$$ * $r2Sqr_tMat$$4$$.$col2$.y;
        $r1Sqr_tVec$$8$$ = $ccp$$.$localAnchor2$;
        $r2Sqr_tMat$$4$$ = $b2$$.$m_R$;
        $r1Sqr_tVec$$8$$.x = $r2X$$ * $r2Sqr_tMat$$4$$.$col1$.x + $cp$$1_r2Y$$ * $r2Sqr_tMat$$4$$.$col1$.y;
        $r1Sqr_tVec$$8$$.y = $r2X$$ * $r2Sqr_tMat$$4$$.$col2$.x + $cp$$1_r2Y$$ * $r2Sqr_tMat$$4$$.$col2$.y;
        $r1Sqr_tVec$$8$$ = $r1X_vRel$$ * $r1X_vRel$$ + $r1Y$$ * $r1Y$$;
        $r2Sqr_tMat$$4$$ = $r2X$$ * $r2X$$ + $cp$$1_r2Y$$ * $cp$$1_r2Y$$;
        var $rn1_rt1$$ = $r1X_vRel$$ * $normalX$$1$$ + $r1Y$$ * $normalY$$1$$, $rn2_rt2_tangentX$$ = $r2X$$ * $normalX$$1$$ + $cp$$1_r2Y$$ * $normalY$$1$$, $kNormal_kTangent_tangentY$$ = $b1$$1$$.$m_invMass$ + $b2$$.$m_invMass$;
        $kNormal_kTangent_tangentY$$ += $b1$$1$$.$m_invI$ * ($r1Sqr_tVec$$8$$ - $rn1_rt1$$ * $rn1_rt1$$) + $b2$$.$m_invI$ * ($r2Sqr_tMat$$4$$ - $rn2_rt2_tangentX$$ * $rn2_rt2_tangentX$$);
        $ccp$$.$normalMass$ = 1 / $kNormal_kTangent_tangentY$$;
        $rn2_rt2_tangentX$$ = $normalY$$1$$;
        $kNormal_kTangent_tangentY$$ = -$normalX$$1$$;
        $rn1_rt1$$ = $r1X_vRel$$ * $rn2_rt2_tangentX$$ + $r1Y$$ * $kNormal_kTangent_tangentY$$;
        $rn2_rt2_tangentX$$ = $r2X$$ * $rn2_rt2_tangentX$$ + $cp$$1_r2Y$$ * $kNormal_kTangent_tangentY$$;
        $kNormal_kTangent_tangentY$$ = $b1$$1$$.$m_invMass$ + $b2$$.$m_invMass$;
        $kNormal_kTangent_tangentY$$ += $b1$$1$$.$m_invI$ * ($r1Sqr_tVec$$8$$ - $rn1_rt1$$ * $rn1_rt1$$) + $b2$$.$m_invI$ * ($r2Sqr_tMat$$4$$ - $rn2_rt2_tangentX$$ * $rn2_rt2_tangentX$$);
        $ccp$$.$tangentMass$ = 1 / $kNormal_kTangent_tangentY$$;
        $ccp$$.$velocityBias$ = 0;
        if($ccp$$.$separation$ > 0) {
          $ccp$$.$velocityBias$ = -60 * $ccp$$.$separation$
        }
        $r1X_vRel$$ = $c$$7$$.$normal$.x * ($v2X$$1$$ + -$w2$$ * $cp$$1_r2Y$$ - $v1X$$1$$ - -$w1$$ * $r1Y$$) + $c$$7$$.$normal$.y * ($v2Y$$1$$ + $w2$$ * $r2X$$ - $v1Y$$1$$ - $w1$$ * $r1X_vRel$$);
        if($r1X_vRel$$ < -30) {
          $ccp$$.$velocityBias$ += -$c$$7$$.$restitution$ * $r1X_vRel$$
        }
      }
      ++$count$$11$$
    }
  }
}
$b2ContactSolver$$.prototype = {$PreSolve$:function $$b2ContactSolver$$$$$PreSolve$$() {
  for(var $r2Y$$1_tVec$$9$$, $tMat$$5$$, $i$$99$$ = 0;$i$$99$$ < this.$m_constraintCount$;++$i$$99$$) {
    var $c$$8$$ = this.$m_constraints$[$i$$99$$], $b1$$2_ccp2$$ = $c$$8$$.$body1$, $b2$$1$$ = $c$$8$$.$body2$, $invMass1$$ = $b1$$2_ccp2$$.$m_invMass$, $invI1$$ = $b1$$2_ccp2$$.$m_invI$, $invMass2$$ = $b2$$1$$.$m_invMass$, $invI2$$ = $b2$$1$$.$m_invI$, $normalX$$2$$ = $c$$8$$.$normal$.x, $normalY$$2$$ = $c$$8$$.$normal$.y, $tangentX$$1$$ = $normalY$$2$$, $tangentY$$1$$ = -$normalX$$2$$, $j$$10$$ = 0, $tCount$$ = 0;
    if($b2World$s_enableWarmStarting$$) {
      $tCount$$ = $c$$8$$.$pointCount$;
      for($j$$10$$ = 0;$j$$10$$ < $tCount$$;++$j$$10$$) {
        var $ccp$$1$$ = $c$$8$$.$points$[$j$$10$$], $PX$$ = $ccp$$1$$.$normalImpulse$ * $normalX$$2$$ + $ccp$$1$$.$tangentImpulse$ * $tangentX$$1$$, $PY$$ = $ccp$$1$$.$normalImpulse$ * $normalY$$2$$ + $ccp$$1$$.$tangentImpulse$ * $tangentY$$1$$;
        $tMat$$5$$ = $b1$$2_ccp2$$.$m_R$;
        $r2Y$$1_tVec$$9$$ = $ccp$$1$$.$localAnchor1$;
        var $r1X$$1$$ = $tMat$$5$$.$col1$.x * $r2Y$$1_tVec$$9$$.x + $tMat$$5$$.$col2$.x * $r2Y$$1_tVec$$9$$.y, $r1Y$$1$$ = $tMat$$5$$.$col1$.y * $r2Y$$1_tVec$$9$$.x + $tMat$$5$$.$col2$.y * $r2Y$$1_tVec$$9$$.y;
        $tMat$$5$$ = $b2$$1$$.$m_R$;
        $r2Y$$1_tVec$$9$$ = $ccp$$1$$.$localAnchor2$;
        var $r2X$$1$$ = $tMat$$5$$.$col1$.x * $r2Y$$1_tVec$$9$$.x + $tMat$$5$$.$col2$.x * $r2Y$$1_tVec$$9$$.y;
        $r2Y$$1_tVec$$9$$ = $tMat$$5$$.$col1$.y * $r2Y$$1_tVec$$9$$.x + $tMat$$5$$.$col2$.y * $r2Y$$1_tVec$$9$$.y;
        $b1$$2_ccp2$$.$m_angularVelocity$ -= $invI1$$ * ($r1X$$1$$ * $PY$$ - $r1Y$$1$$ * $PX$$);
        $b1$$2_ccp2$$.$m_linearVelocity$.x -= $invMass1$$ * $PX$$;
        $b1$$2_ccp2$$.$m_linearVelocity$.y -= $invMass1$$ * $PY$$;
        $b2$$1$$.$m_angularVelocity$ += $invI2$$ * ($r2X$$1$$ * $PY$$ - $r2Y$$1_tVec$$9$$ * $PX$$);
        $b2$$1$$.$m_linearVelocity$.x += $invMass2$$ * $PX$$;
        $b2$$1$$.$m_linearVelocity$.y += $invMass2$$ * $PY$$;
        $ccp$$1$$.$positionImpulse$ = 0
      }
    }else {
      $tCount$$ = $c$$8$$.$pointCount$;
      for($j$$10$$ = 0;$j$$10$$ < $tCount$$;++$j$$10$$) {
        $b1$$2_ccp2$$ = $c$$8$$.$points$[$j$$10$$];
        $b1$$2_ccp2$$.$normalImpulse$ = 0;
        $b1$$2_ccp2$$.$tangentImpulse$ = 0;
        $b1$$2_ccp2$$.$positionImpulse$ = 0
      }
    }
  }
}, $SolveVelocityConstraints$:function $$b2ContactSolver$$$$$SolveVelocityConstraints$$() {
  for(var $j$$11$$ = 0, $ccp$$2$$, $r1X$$2$$, $r1Y$$2$$, $r2X$$2$$, $r2Y$$2_tMat$$6$$, $PY$$1_dvX$$1_lambda_tVec$$10$$, $dvY$$1_maxFriction_newImpulse$$, $PX$$1$$, $i$$100$$ = 0;$i$$100$$ < this.$m_constraintCount$;++$i$$100$$) {
    var $c$$9$$ = this.$m_constraints$[$i$$100$$], $b1$$3$$ = $c$$9$$.$body1$, $b2$$2$$ = $c$$9$$.$body2$, $b1_angularVelocity$$ = $b1$$3$$.$m_angularVelocity$, $b1_linearVelocity$$ = $b1$$3$$.$m_linearVelocity$, $b2_angularVelocity$$ = $b2$$2$$.$m_angularVelocity$, $b2_linearVelocity$$ = $b2$$2$$.$m_linearVelocity$, $invMass1$$1$$ = $b1$$3$$.$m_invMass$, $invI1$$1$$ = $b1$$3$$.$m_invI$, $invMass2$$1$$ = $b2$$2$$.$m_invMass$, $invI2$$1$$ = $b2$$2$$.$m_invI$, $normalX$$3$$ = $c$$9$$.$normal$.x, $normalY$$3$$ = 
    $c$$9$$.$normal$.y, $tangentX$$2$$ = $normalY$$3$$, $tangentY$$2$$ = -$normalX$$3$$, $tCount$$1$$ = $c$$9$$.$pointCount$;
    for($j$$11$$ = 0;$j$$11$$ < $tCount$$1$$;++$j$$11$$) {
      $ccp$$2$$ = $c$$9$$.$points$[$j$$11$$];
      $r2Y$$2_tMat$$6$$ = $b1$$3$$.$m_R$;
      $PY$$1_dvX$$1_lambda_tVec$$10$$ = $ccp$$2$$.$localAnchor1$;
      $r1X$$2$$ = $r2Y$$2_tMat$$6$$.$col1$.x * $PY$$1_dvX$$1_lambda_tVec$$10$$.x + $r2Y$$2_tMat$$6$$.$col2$.x * $PY$$1_dvX$$1_lambda_tVec$$10$$.y;
      $r1Y$$2$$ = $r2Y$$2_tMat$$6$$.$col1$.y * $PY$$1_dvX$$1_lambda_tVec$$10$$.x + $r2Y$$2_tMat$$6$$.$col2$.y * $PY$$1_dvX$$1_lambda_tVec$$10$$.y;
      $r2Y$$2_tMat$$6$$ = $b2$$2$$.$m_R$;
      $PY$$1_dvX$$1_lambda_tVec$$10$$ = $ccp$$2$$.$localAnchor2$;
      $r2X$$2$$ = $r2Y$$2_tMat$$6$$.$col1$.x * $PY$$1_dvX$$1_lambda_tVec$$10$$.x + $r2Y$$2_tMat$$6$$.$col2$.x * $PY$$1_dvX$$1_lambda_tVec$$10$$.y;
      $r2Y$$2_tMat$$6$$ = $r2Y$$2_tMat$$6$$.$col1$.y * $PY$$1_dvX$$1_lambda_tVec$$10$$.x + $r2Y$$2_tMat$$6$$.$col2$.y * $PY$$1_dvX$$1_lambda_tVec$$10$$.y;
      $PY$$1_dvX$$1_lambda_tVec$$10$$ = $b2_linearVelocity$$.x + -$b2_angularVelocity$$ * $r2Y$$2_tMat$$6$$ - $b1_linearVelocity$$.x - -$b1_angularVelocity$$ * $r1Y$$2$$;
      $dvY$$1_maxFriction_newImpulse$$ = $b2_linearVelocity$$.y + $b2_angularVelocity$$ * $r2X$$2$$ - $b1_linearVelocity$$.y - $b1_angularVelocity$$ * $r1X$$2$$;
      $PY$$1_dvX$$1_lambda_tVec$$10$$ = -$ccp$$2$$.$normalMass$ * ($PY$$1_dvX$$1_lambda_tVec$$10$$ * $normalX$$3$$ + $dvY$$1_maxFriction_newImpulse$$ * $normalY$$3$$ - $ccp$$2$$.$velocityBias$);
      $dvY$$1_maxFriction_newImpulse$$ = $b2Math$b2Max$$($ccp$$2$$.$normalImpulse$ + $PY$$1_dvX$$1_lambda_tVec$$10$$, 0);
      $PY$$1_dvX$$1_lambda_tVec$$10$$ = $dvY$$1_maxFriction_newImpulse$$ - $ccp$$2$$.$normalImpulse$;
      $PX$$1$$ = $PY$$1_dvX$$1_lambda_tVec$$10$$ * $normalX$$3$$;
      $PY$$1_dvX$$1_lambda_tVec$$10$$ = $PY$$1_dvX$$1_lambda_tVec$$10$$ * $normalY$$3$$;
      $b1_linearVelocity$$.x -= $invMass1$$1$$ * $PX$$1$$;
      $b1_linearVelocity$$.y -= $invMass1$$1$$ * $PY$$1_dvX$$1_lambda_tVec$$10$$;
      $b1_angularVelocity$$ -= $invI1$$1$$ * ($r1X$$2$$ * $PY$$1_dvX$$1_lambda_tVec$$10$$ - $r1Y$$2$$ * $PX$$1$$);
      $b2_linearVelocity$$.x += $invMass2$$1$$ * $PX$$1$$;
      $b2_linearVelocity$$.y += $invMass2$$1$$ * $PY$$1_dvX$$1_lambda_tVec$$10$$;
      $b2_angularVelocity$$ += $invI2$$1$$ * ($r2X$$2$$ * $PY$$1_dvX$$1_lambda_tVec$$10$$ - $r2Y$$2_tMat$$6$$ * $PX$$1$$);
      $ccp$$2$$.$normalImpulse$ = $dvY$$1_maxFriction_newImpulse$$;
      $PY$$1_dvX$$1_lambda_tVec$$10$$ = $b2_linearVelocity$$.x + -$b2_angularVelocity$$ * $r2Y$$2_tMat$$6$$ - $b1_linearVelocity$$.x - -$b1_angularVelocity$$ * $r1Y$$2$$;
      $dvY$$1_maxFriction_newImpulse$$ = $b2_linearVelocity$$.y + $b2_angularVelocity$$ * $r2X$$2$$ - $b1_linearVelocity$$.y - $b1_angularVelocity$$ * $r1X$$2$$;
      $PY$$1_dvX$$1_lambda_tVec$$10$$ = $ccp$$2$$.$tangentMass$ * -($PY$$1_dvX$$1_lambda_tVec$$10$$ * $tangentX$$2$$ + $dvY$$1_maxFriction_newImpulse$$ * $tangentY$$2$$);
      $dvY$$1_maxFriction_newImpulse$$ = $c$$9$$.$friction$ * $ccp$$2$$.$normalImpulse$;
      $dvY$$1_maxFriction_newImpulse$$ = $b2Math$b2Clamp$$($ccp$$2$$.$tangentImpulse$ + $PY$$1_dvX$$1_lambda_tVec$$10$$, -$dvY$$1_maxFriction_newImpulse$$, $dvY$$1_maxFriction_newImpulse$$);
      $PY$$1_dvX$$1_lambda_tVec$$10$$ = $dvY$$1_maxFriction_newImpulse$$ - $ccp$$2$$.$tangentImpulse$;
      $PX$$1$$ = $PY$$1_dvX$$1_lambda_tVec$$10$$ * $tangentX$$2$$;
      $PY$$1_dvX$$1_lambda_tVec$$10$$ = $PY$$1_dvX$$1_lambda_tVec$$10$$ * $tangentY$$2$$;
      $b1_linearVelocity$$.x -= $invMass1$$1$$ * $PX$$1$$;
      $b1_linearVelocity$$.y -= $invMass1$$1$$ * $PY$$1_dvX$$1_lambda_tVec$$10$$;
      $b1_angularVelocity$$ -= $invI1$$1$$ * ($r1X$$2$$ * $PY$$1_dvX$$1_lambda_tVec$$10$$ - $r1Y$$2$$ * $PX$$1$$);
      $b2_linearVelocity$$.x += $invMass2$$1$$ * $PX$$1$$;
      $b2_linearVelocity$$.y += $invMass2$$1$$ * $PY$$1_dvX$$1_lambda_tVec$$10$$;
      $b2_angularVelocity$$ += $invI2$$1$$ * ($r2X$$2$$ * $PY$$1_dvX$$1_lambda_tVec$$10$$ - $r2Y$$2_tMat$$6$$ * $PX$$1$$);
      $ccp$$2$$.$tangentImpulse$ = $dvY$$1_maxFriction_newImpulse$$
    }
    $b1$$3$$.$m_angularVelocity$ = $b1_angularVelocity$$;
    $b2$$2$$.$m_angularVelocity$ = $b2_angularVelocity$$
  }
}, $SolvePositionConstraints$:function $$b2ContactSolver$$$$$SolvePositionConstraints$$($beta$$) {
  for(var $minSeparation$$ = 0, $r2Y$$3_tMat$$7$$, $dImpulse_impulseY_separation$$4_tVec$$11$$, $i$$101$$ = 0;$i$$101$$ < this.$m_constraintCount$;++$i$$101$$) {
    for(var $c$$10$$ = this.$m_constraints$[$i$$101$$], $b1$$4$$ = $c$$10$$.$body1$, $b2$$3$$ = $c$$10$$.$body2$, $b1_position$$ = $b1$$4$$.$m_position$, $b1_rotation$$ = $b1$$4$$.$m_rotation$, $b2_position$$ = $b2$$3$$.$m_position$, $b2_rotation$$ = $b2$$3$$.$m_rotation$, $invMass1$$2$$ = $b1$$4$$.$m_invMass$, $invI1$$2$$ = $b1$$4$$.$m_invI$, $invMass2$$2$$ = $b2$$3$$.$m_invMass$, $invI2$$2$$ = $b2$$3$$.$m_invI$, $normalX$$4$$ = $c$$10$$.$normal$.x, $normalY$$4$$ = $c$$10$$.$normal$.y, $tCount$$2$$ = 
    $c$$10$$.$pointCount$, $j$$12$$ = 0;$j$$12$$ < $tCount$$2$$;++$j$$12$$) {
      var $ccp$$3_impulseX$$ = $c$$10$$.$points$[$j$$12$$];
      $r2Y$$3_tMat$$7$$ = $b1$$4$$.$m_R$;
      $dImpulse_impulseY_separation$$4_tVec$$11$$ = $ccp$$3_impulseX$$.$localAnchor1$;
      var $r1X$$3$$ = $r2Y$$3_tMat$$7$$.$col1$.x * $dImpulse_impulseY_separation$$4_tVec$$11$$.x + $r2Y$$3_tMat$$7$$.$col2$.x * $dImpulse_impulseY_separation$$4_tVec$$11$$.y, $r1Y$$3$$ = $r2Y$$3_tMat$$7$$.$col1$.y * $dImpulse_impulseY_separation$$4_tVec$$11$$.x + $r2Y$$3_tMat$$7$$.$col2$.y * $dImpulse_impulseY_separation$$4_tVec$$11$$.y;
      $r2Y$$3_tMat$$7$$ = $b2$$3$$.$m_R$;
      $dImpulse_impulseY_separation$$4_tVec$$11$$ = $ccp$$3_impulseX$$.$localAnchor2$;
      var $r2X$$3$$ = $r2Y$$3_tMat$$7$$.$col1$.x * $dImpulse_impulseY_separation$$4_tVec$$11$$.x + $r2Y$$3_tMat$$7$$.$col2$.x * $dImpulse_impulseY_separation$$4_tVec$$11$$.y;
      $r2Y$$3_tMat$$7$$ = $r2Y$$3_tMat$$7$$.$col1$.y * $dImpulse_impulseY_separation$$4_tVec$$11$$.x + $r2Y$$3_tMat$$7$$.$col2$.y * $dImpulse_impulseY_separation$$4_tVec$$11$$.y;
      $dImpulse_impulseY_separation$$4_tVec$$11$$ = ($b2_position$$.x + $r2X$$3$$ - ($b1_position$$.x + $r1X$$3$$)) * $normalX$$4$$ + ($b2_position$$.y + $r2Y$$3_tMat$$7$$ - ($b1_position$$.y + $r1Y$$3$$)) * $normalY$$4$$ + $ccp$$3_impulseX$$.$separation$;
      $minSeparation$$ = $minSeparation$$ < $dImpulse_impulseY_separation$$4_tVec$$11$$ ? $minSeparation$$ : $dImpulse_impulseY_separation$$4_tVec$$11$$;
      $dImpulse_impulseY_separation$$4_tVec$$11$$ = -$ccp$$3_impulseX$$.$normalMass$ * $beta$$ * $b2Math$b2Clamp$$($dImpulse_impulseY_separation$$4_tVec$$11$$ + 0.15, -6, 0);
      var $impulse0$$ = $ccp$$3_impulseX$$.$positionImpulse$;
      $ccp$$3_impulseX$$.$positionImpulse$ = $b2Math$b2Max$$($impulse0$$ + $dImpulse_impulseY_separation$$4_tVec$$11$$, 0);
      $dImpulse_impulseY_separation$$4_tVec$$11$$ = $ccp$$3_impulseX$$.$positionImpulse$ - $impulse0$$;
      $ccp$$3_impulseX$$ = $dImpulse_impulseY_separation$$4_tVec$$11$$ * $normalX$$4$$;
      $dImpulse_impulseY_separation$$4_tVec$$11$$ = $dImpulse_impulseY_separation$$4_tVec$$11$$ * $normalY$$4$$;
      $b1_position$$.x -= $invMass1$$2$$ * $ccp$$3_impulseX$$;
      $b1_position$$.y -= $invMass1$$2$$ * $dImpulse_impulseY_separation$$4_tVec$$11$$;
      $b1_rotation$$ -= $invI1$$2$$ * ($r1X$$3$$ * $dImpulse_impulseY_separation$$4_tVec$$11$$ - $r1Y$$3$$ * $ccp$$3_impulseX$$);
      $b1$$4$$.$m_R$.$Set$($b1_rotation$$);
      $b2_position$$.x += $invMass2$$2$$ * $ccp$$3_impulseX$$;
      $b2_position$$.y += $invMass2$$2$$ * $dImpulse_impulseY_separation$$4_tVec$$11$$;
      $b2_rotation$$ += $invI2$$2$$ * ($r2X$$3$$ * $dImpulse_impulseY_separation$$4_tVec$$11$$ - $r2Y$$3_tMat$$7$$ * $ccp$$3_impulseX$$);
      $b2$$3$$.$m_R$.$Set$($b2_rotation$$)
    }
    $b1$$4$$.$m_rotation$ = $b1_rotation$$;
    $b2$$3$$.$m_rotation$ = $b2_rotation$$
  }
  return $minSeparation$$ >= -0.15
}, $PostSolve$:function $$b2ContactSolver$$$$$PostSolve$$() {
  for(var $i$$102$$ = 0;$i$$102$$ < this.$m_constraintCount$;++$i$$102$$) {
    for(var $c$$11$$ = this.$m_constraints$[$i$$102$$], $m$$2$$ = $c$$11$$.$manifold$, $j$$13$$ = 0;$j$$13$$ < $c$$11$$.$pointCount$;++$j$$13$$) {
      var $mPoint$$ = $m$$2$$.$points$[$j$$13$$], $cPoint$$ = $c$$11$$.$points$[$j$$13$$];
      $mPoint$$.$normalImpulse$ = $cPoint$$.$normalImpulse$;
      $mPoint$$.$tangentImpulse$ = $cPoint$$.$tangentImpulse$
    }
  }
}, $m_allocator$:null, $m_constraints$:[], $m_constraintCount$:0};
// Input 115
function $b2Island$$($bodyCapacity$$, $contactCapacity$$, $jointCapacity$$, $allocator$$3$$) {
  var $i$$103$$ = 0;
  this.$m_bodyCapacity$ = $bodyCapacity$$;
  this.$m_contactCapacity$ = $contactCapacity$$;
  this.$m_jointCapacity$ = $jointCapacity$$;
  this.$m_jointCount$ = this.$m_contactCount$ = this.$m_bodyCount$ = 0;
  this.$m_bodies$ = Array($bodyCapacity$$);
  for($i$$103$$ = 0;$i$$103$$ < $bodyCapacity$$;$i$$103$$++) {
    this.$m_bodies$[$i$$103$$] = null
  }
  this.$m_contacts$ = Array($contactCapacity$$);
  for($i$$103$$ = 0;$i$$103$$ < $contactCapacity$$;$i$$103$$++) {
    this.$m_contacts$[$i$$103$$] = null
  }
  this.$m_joints$ = Array($jointCapacity$$);
  for($i$$103$$ = 0;$i$$103$$ < $jointCapacity$$;$i$$103$$++) {
    this.$m_joints$[$i$$103$$] = null
  }
  this.$m_allocator$ = $allocator$$3$$
}
$b2Island$$.prototype = {$Clear$:function $$b2Island$$$$$Clear$$() {
  this.$m_jointCount$ = this.$m_contactCount$ = this.$m_bodyCount$ = 0
}, $Solve$:function $$b2Island$$$$$Solve$$($step$$, $gravity$$) {
  var $i$$104$$ = 0, $b$$37_contactsOkay_j$$14$$;
  for($i$$104$$ = 0;$i$$104$$ < this.$m_bodyCount$;++$i$$104$$) {
    $b$$37_contactsOkay_j$$14$$ = this.$m_bodies$[$i$$104$$];
    if($b$$37_contactsOkay_j$$14$$.$m_invMass$ != 0) {
      $JSCompiler_StaticMethods_Add$$($b$$37_contactsOkay_j$$14$$.$m_linearVelocity$, new $b2Vec2$$($step$$.$dt$ * $b2Math$AddVV$$($gravity$$, new $b2Vec2$$($b$$37_contactsOkay_j$$14$$.$m_invMass$ * $b$$37_contactsOkay_j$$14$$.$m_force$.x, $b$$37_contactsOkay_j$$14$$.$m_invMass$ * $b$$37_contactsOkay_j$$14$$.$m_force$.y)).x, $step$$.$dt$ * $b2Math$AddVV$$($gravity$$, new $b2Vec2$$($b$$37_contactsOkay_j$$14$$.$m_invMass$ * $b$$37_contactsOkay_j$$14$$.$m_force$.x, $b$$37_contactsOkay_j$$14$$.$m_invMass$ * 
      $b$$37_contactsOkay_j$$14$$.$m_force$.y)).y));
      $b$$37_contactsOkay_j$$14$$.$m_angularVelocity$ += $step$$.$dt$ * $b$$37_contactsOkay_j$$14$$.$m_invI$ * $b$$37_contactsOkay_j$$14$$.$m_torque$;
      $JSCompiler_StaticMethods_Multiply$$($b$$37_contactsOkay_j$$14$$.$m_linearVelocity$, $b$$37_contactsOkay_j$$14$$.$m_linearDamping$);
      $b$$37_contactsOkay_j$$14$$.$m_angularVelocity$ *= $b$$37_contactsOkay_j$$14$$.$m_angularDamping$;
      $JSCompiler_StaticMethods_SetV$$($b$$37_contactsOkay_j$$14$$.$m_position0$, $b$$37_contactsOkay_j$$14$$.$m_position$);
      $b$$37_contactsOkay_j$$14$$.$m_rotation0$ = $b$$37_contactsOkay_j$$14$$.$m_rotation$
    }
  }
  var $contactSolver$$ = new $b2ContactSolver$$(this.$m_contacts$, this.$m_contactCount$, this.$m_allocator$);
  $contactSolver$$.$PreSolve$();
  for($i$$104$$ = 0;$i$$104$$ < this.$m_jointCount$;++$i$$104$$) {
    this.$m_joints$[$i$$104$$].$PrepareVelocitySolver$()
  }
  for($i$$104$$ = 0;$i$$104$$ < $step$$.$iterations$;++$i$$104$$) {
    $contactSolver$$.$SolveVelocityConstraints$();
    for($b$$37_contactsOkay_j$$14$$ = 0;$b$$37_contactsOkay_j$$14$$ < this.$m_jointCount$;++$b$$37_contactsOkay_j$$14$$) {
      this.$m_joints$[$b$$37_contactsOkay_j$$14$$].$SolveVelocityConstraints$($step$$)
    }
  }
  for($i$$104$$ = 0;$i$$104$$ < this.$m_bodyCount$;++$i$$104$$) {
    $b$$37_contactsOkay_j$$14$$ = this.$m_bodies$[$i$$104$$];
    if($b$$37_contactsOkay_j$$14$$.$m_invMass$ != 0) {
      $b$$37_contactsOkay_j$$14$$.$m_position$.x += $step$$.$dt$ * $b$$37_contactsOkay_j$$14$$.$m_linearVelocity$.x;
      $b$$37_contactsOkay_j$$14$$.$m_position$.y += $step$$.$dt$ * $b$$37_contactsOkay_j$$14$$.$m_linearVelocity$.y;
      $b$$37_contactsOkay_j$$14$$.$m_rotation$ += $step$$.$dt$ * $b$$37_contactsOkay_j$$14$$.$m_angularVelocity$;
      $b$$37_contactsOkay_j$$14$$.$m_R$.$Set$($b$$37_contactsOkay_j$$14$$.$m_rotation$)
    }
  }
  for($i$$104$$ = 0;$i$$104$$ < this.$m_jointCount$;++$i$$104$$) {
  }
  if($b2World$s_enablePositionCorrection$$) {
    for($b2Island$m_positionIterationCount$$ = 0;$b2Island$m_positionIterationCount$$ < $step$$.$iterations$;++$b2Island$m_positionIterationCount$$) {
      $b$$37_contactsOkay_j$$14$$ = $contactSolver$$.$SolvePositionConstraints$(0.2);
      var $jointsOkay$$ = true;
      for($i$$104$$ = 0;$i$$104$$ < this.$m_jointCount$;++$i$$104$$) {
        var $jointOkay$$ = this.$m_joints$[$i$$104$$].$SolvePositionConstraints$();
        $jointsOkay$$ = $jointsOkay$$ && $jointOkay$$
      }
      if($b$$37_contactsOkay_j$$14$$ && $jointsOkay$$) {
        break
      }
    }
  }
  $contactSolver$$.$PostSolve$();
  for($i$$104$$ = 0;$i$$104$$ < this.$m_bodyCount$;++$i$$104$$) {
    $b$$37_contactsOkay_j$$14$$ = this.$m_bodies$[$i$$104$$];
    if($b$$37_contactsOkay_j$$14$$.$m_invMass$ != 0) {
      $b$$37_contactsOkay_j$$14$$.$m_R$.$Set$($b$$37_contactsOkay_j$$14$$.$m_rotation$);
      $b$$37_contactsOkay_j$$14$$.$SynchronizeShapes$();
      $b$$37_contactsOkay_j$$14$$.$m_force$.$Set$(0, 0);
      $b$$37_contactsOkay_j$$14$$.$m_torque$ = 0
    }
  }
}, $UpdateSleep$:function $$b2Island$$$$$UpdateSleep$$($dt$$) {
  var $i$$105$$ = 0, $b$$38$$, $minSleepTime$$ = Number.MAX_VALUE, $angTolSqr$$ = $b2Settings$b2_angularSleepTolerance$$ * $b2Settings$b2_angularSleepTolerance$$;
  for($i$$105$$ = 0;$i$$105$$ < this.$m_bodyCount$;++$i$$105$$) {
    $b$$38$$ = this.$m_bodies$[$i$$105$$];
    if($b$$38$$.$m_invMass$ != 0) {
      if(($b$$38$$.$m_flags$ & $b2Body$e_allowSleepFlag$$) == 0) {
        $minSleepTime$$ = $b$$38$$.$m_sleepTime$ = 0
      }
      if(($b$$38$$.$m_flags$ & $b2Body$e_allowSleepFlag$$) == 0 || $b$$38$$.$m_angularVelocity$ * $b$$38$$.$m_angularVelocity$ > $angTolSqr$$ || $b2Math$b2Dot$$($b$$38$$.$m_linearVelocity$, $b$$38$$.$m_linearVelocity$) > 0.09) {
        $minSleepTime$$ = $b$$38$$.$m_sleepTime$ = 0
      }else {
        $b$$38$$.$m_sleepTime$ += $dt$$;
        $minSleepTime$$ = $minSleepTime$$ < $b$$38$$.$m_sleepTime$ ? $minSleepTime$$ : $b$$38$$.$m_sleepTime$
      }
    }
  }
  if($minSleepTime$$ >= 0.5) {
    for($i$$105$$ = 0;$i$$105$$ < this.$m_bodyCount$;++$i$$105$$) {
      $b$$38$$ = this.$m_bodies$[$i$$105$$];
      $b$$38$$.$m_flags$ |= $b2Body$e_sleepFlag$$
    }
  }
}, $AddBody$:function $$b2Island$$$$$AddBody$$($body$$10$$) {
  this.$m_bodies$[this.$m_bodyCount$++] = $body$$10$$
}, $AddContact$:function $$b2Island$$$$$AddContact$$($contact$$2$$) {
  this.$m_contacts$[this.$m_contactCount$++] = $contact$$2$$
}, $AddJoint$:function $$b2Island$$$$$AddJoint$$($joint$$1$$) {
  this.$m_joints$[this.$m_jointCount$++] = $joint$$1$$
}, $m_allocator$:null, $m_bodies$:null, $m_contacts$:null, $m_joints$:null, $m_bodyCount$:0, $m_jointCount$:0, $m_contactCount$:0, $m_bodyCapacity$:0, $m_contactCapacity$:0, $m_jointCapacity$:0};
var $b2Island$m_positionIterationCount$$ = 0;
// Input 116
function $b2NullContact$$($s1$$3$$, $s2$$2$$) {
  this.$m_node1$ = new $b2ContactNode$$;
  this.$m_node2$ = new $b2ContactNode$$;
  this.$m_flags$ = 0;
  if(!$s1$$3$$ || !$s2$$2$$) {
    this.$m_shape2$ = this.$m_shape1$ = null
  }else {
    this.$m_shape1$ = $s1$$3$$;
    this.$m_shape2$ = $s2$$2$$;
    this.$m_manifoldCount$ = 0;
    this.$m_friction$ = Math.sqrt(this.$m_shape1$.$m_friction$ * this.$m_shape2$.$m_friction$);
    this.$m_restitution$ = $b2Math$b2Max$$(this.$m_shape1$.$m_restitution$, this.$m_shape2$.$m_restitution$);
    this.$m_next$ = this.$m_prev$ = null;
    this.$m_node1$.$contact$ = null;
    this.$m_node1$.$prev$ = null;
    this.$m_node1$.next = null;
    this.$m_node1$.$other$ = null;
    this.$m_node2$.$contact$ = null;
    this.$m_node2$.$prev$ = null;
    this.$m_node2$.next = null;
    this.$m_node2$.$other$ = null
  }
}
Object.extend($b2NullContact$$.prototype, $b2Contact$$.prototype);
Object.extend($b2NullContact$$.prototype, {$Evaluate$:$JSCompiler_emptyFn$$(), $GetManifolds$:$JSCompiler_returnArg$$(null)});
// Input 117
function $b2PolyAndCircleContact$$($s1$$4$$, $s2$$3$$) {
  this.$m_node1$ = new $b2ContactNode$$;
  this.$m_node2$ = new $b2ContactNode$$;
  this.$m_flags$ = 0;
  if(!$s1$$4$$ || !$s2$$3$$) {
    this.$m_shape2$ = this.$m_shape1$ = null
  }else {
    this.$m_shape1$ = $s1$$4$$;
    this.$m_shape2$ = $s2$$3$$;
    this.$m_manifoldCount$ = 0;
    this.$m_friction$ = Math.sqrt(this.$m_shape1$.$m_friction$ * this.$m_shape2$.$m_friction$);
    this.$m_restitution$ = $b2Math$b2Max$$(this.$m_shape1$.$m_restitution$, this.$m_shape2$.$m_restitution$);
    this.$m_next$ = this.$m_prev$ = null;
    this.$m_node1$.$contact$ = null;
    this.$m_node1$.$prev$ = null;
    this.$m_node1$.next = null;
    this.$m_node1$.$other$ = null;
    this.$m_node2$.$contact$ = null;
    this.$m_node2$.$prev$ = null;
    this.$m_node2$.next = null;
    this.$m_node2$.$other$ = null;
    this.$m_manifold$ = [new $b2Manifold$$];
    if(this.$m_shape1$.$m_type$ != 2) {
      throw"Assert Failed!";
    }
    if(this.$m_shape2$.$m_type$ != 0) {
      throw"Assert Failed!";
    }
    this.$m_manifold$[0].$pointCount$ = 0;
    this.$m_manifold$[0].$points$[0].$normalImpulse$ = 0;
    this.$m_manifold$[0].$points$[0].$tangentImpulse$ = 0
  }
}
Object.extend($b2PolyAndCircleContact$$.prototype, $b2Contact$$.prototype);
Object.extend($b2PolyAndCircleContact$$.prototype, {$Evaluate$:function() {
  a: {
    var $manifold$$inline_689$$ = this.$m_manifold$[0], $dist$$inline_699_pY$$inline_713_poly$$inline_690$$ = this.$m_shape1$, $circle$$inline_691$$ = this.$m_shape2$;
    $manifold$$inline_689$$.$pointCount$ = 0;
    var $i$$inline_703_tPoint$$inline_692$$, $dX$$inline_693_xLocalX$$inline_695$$, $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$;
    $dX$$inline_693_xLocalX$$inline_695$$ = $circle$$inline_691$$.$m_position$.x - $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_position$.x;
    $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$ = $circle$$inline_691$$.$m_position$.y - $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_position$.y;
    var $tMat$$inline_697$$ = $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_R$, $radius$$inline_702_tX$$inline_698$$ = $dX$$inline_693_xLocalX$$inline_695$$ * $tMat$$inline_697$$.$col1$.x + $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$ * $tMat$$inline_697$$.$col1$.y;
    $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$ = $dX$$inline_693_xLocalX$$inline_695$$ * $tMat$$inline_697$$.$col2$.x + $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$ * $tMat$$inline_697$$.$col2$.y;
    $dX$$inline_693_xLocalX$$inline_695$$ = $radius$$inline_702_tX$$inline_698$$;
    var $normalIndex$$inline_700_vertIndex1$$inline_706$$ = 0, $separation$$inline_701_vertIndex2$$inline_707$$ = -Number.MAX_VALUE;
    $radius$$inline_702_tX$$inline_698$$ = $circle$$inline_691$$.$m_radius$;
    for($i$$inline_703_tPoint$$inline_692$$ = 0;$i$$inline_703_tPoint$$inline_692$$ < $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_vertexCount$;++$i$$inline_703_tPoint$$inline_692$$) {
      var $eY$$inline_709_s$$inline_704$$ = $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_normals$[$i$$inline_703_tPoint$$inline_692$$].x * ($dX$$inline_693_xLocalX$$inline_695$$ - $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_vertices$[$i$$inline_703_tPoint$$inline_692$$].x) + $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_normals$[$i$$inline_703_tPoint$$inline_692$$].y * ($dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$ - $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_vertices$[$i$$inline_703_tPoint$$inline_692$$].y);
      if($eY$$inline_709_s$$inline_704$$ > $radius$$inline_702_tX$$inline_698$$) {
        break a
      }
      if($eY$$inline_709_s$$inline_704$$ > $separation$$inline_701_vertIndex2$$inline_707$$) {
        $separation$$inline_701_vertIndex2$$inline_707$$ = $eY$$inline_709_s$$inline_704$$;
        $normalIndex$$inline_700_vertIndex1$$inline_706$$ = $i$$inline_703_tPoint$$inline_692$$
      }
    }
    if($separation$$inline_701_vertIndex2$$inline_707$$ < Number.MIN_VALUE) {
      $manifold$$inline_689$$.$pointCount$ = 1;
      $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$ = $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_normals$[$normalIndex$$inline_700_vertIndex1$$inline_706$$];
      $manifold$$inline_689$$.$normal$.x = $tMat$$inline_697$$.$col1$.x * $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$.x + $tMat$$inline_697$$.$col2$.x * $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$.y;
      $manifold$$inline_689$$.$normal$.y = $tMat$$inline_697$$.$col1$.y * $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$.x + $tMat$$inline_697$$.$col2$.y * $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$.y;
      $i$$inline_703_tPoint$$inline_692$$ = $manifold$$inline_689$$.$points$[0];
      $i$$inline_703_tPoint$$inline_692$$.id.$features$.$incidentEdge$ = $normalIndex$$inline_700_vertIndex1$$inline_706$$;
      $i$$inline_703_tPoint$$inline_692$$.id.$features$.$incidentVertex$ = 255;
      $i$$inline_703_tPoint$$inline_692$$.id.$features$.$referenceFace$ = 255;
      $i$$inline_703_tPoint$$inline_692$$.id.$features$.$flip$ = 0;
      $i$$inline_703_tPoint$$inline_692$$.position.x = $circle$$inline_691$$.$m_position$.x - $radius$$inline_702_tX$$inline_698$$ * $manifold$$inline_689$$.$normal$.x;
      $i$$inline_703_tPoint$$inline_692$$.position.y = $circle$$inline_691$$.$m_position$.y - $radius$$inline_702_tX$$inline_698$$ * $manifold$$inline_689$$.$normal$.y;
      $i$$inline_703_tPoint$$inline_692$$.$separation$ = $separation$$inline_701_vertIndex2$$inline_707$$ - $radius$$inline_702_tX$$inline_698$$
    }else {
      $normalIndex$$inline_700_vertIndex1$$inline_706$$ = $normalIndex$$inline_700_vertIndex1$$inline_706$$;
      $separation$$inline_701_vertIndex2$$inline_707$$ = $normalIndex$$inline_700_vertIndex1$$inline_706$$ + 1 < $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_vertexCount$ ? $normalIndex$$inline_700_vertIndex1$$inline_706$$ + 1 : 0;
      var $eX$$inline_708_pX$$inline_712$$ = $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_vertices$[$separation$$inline_701_vertIndex2$$inline_707$$].x - $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_vertices$[$normalIndex$$inline_700_vertIndex1$$inline_706$$].x;
      $eY$$inline_709_s$$inline_704$$ = $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_vertices$[$separation$$inline_701_vertIndex2$$inline_707$$].y - $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_vertices$[$normalIndex$$inline_700_vertIndex1$$inline_706$$].y;
      var $length$$inline_710$$ = Math.sqrt($eX$$inline_708_pX$$inline_712$$ * $eX$$inline_708_pX$$inline_712$$ + $eY$$inline_709_s$$inline_704$$ * $eY$$inline_709_s$$inline_704$$);
      $eX$$inline_708_pX$$inline_712$$ /= $length$$inline_710$$;
      $eY$$inline_709_s$$inline_704$$ /= $length$$inline_710$$;
      if($length$$inline_710$$ < Number.MIN_VALUE) {
        $dX$$inline_693_xLocalX$$inline_695$$ = $dX$$inline_693_xLocalX$$inline_695$$ - $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_vertices$[$normalIndex$$inline_700_vertIndex1$$inline_706$$].x;
        $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$ = $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$ - $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_vertices$[$normalIndex$$inline_700_vertIndex1$$inline_706$$].y;
        $dist$$inline_699_pY$$inline_713_poly$$inline_690$$ = Math.sqrt($dX$$inline_693_xLocalX$$inline_695$$ * $dX$$inline_693_xLocalX$$inline_695$$ + $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$ * $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$);
        $dX$$inline_693_xLocalX$$inline_695$$ /= $dist$$inline_699_pY$$inline_713_poly$$inline_690$$;
        $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$ /= $dist$$inline_699_pY$$inline_713_poly$$inline_690$$;
        if(!($dist$$inline_699_pY$$inline_713_poly$$inline_690$$ > $radius$$inline_702_tX$$inline_698$$)) {
          $manifold$$inline_689$$.$pointCount$ = 1;
          $manifold$$inline_689$$.$normal$.$Set$($tMat$$inline_697$$.$col1$.x * $dX$$inline_693_xLocalX$$inline_695$$ + $tMat$$inline_697$$.$col2$.x * $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$, $tMat$$inline_697$$.$col1$.y * $dX$$inline_693_xLocalX$$inline_695$$ + $tMat$$inline_697$$.$col2$.y * $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$);
          $i$$inline_703_tPoint$$inline_692$$ = $manifold$$inline_689$$.$points$[0];
          $i$$inline_703_tPoint$$inline_692$$.id.$features$.$incidentEdge$ = 255;
          $i$$inline_703_tPoint$$inline_692$$.id.$features$.$incidentVertex$ = $normalIndex$$inline_700_vertIndex1$$inline_706$$;
          $i$$inline_703_tPoint$$inline_692$$.id.$features$.$referenceFace$ = 255;
          $i$$inline_703_tPoint$$inline_692$$.id.$features$.$flip$ = 0;
          $i$$inline_703_tPoint$$inline_692$$.position.x = $circle$$inline_691$$.$m_position$.x - $radius$$inline_702_tX$$inline_698$$ * $manifold$$inline_689$$.$normal$.x;
          $i$$inline_703_tPoint$$inline_692$$.position.y = $circle$$inline_691$$.$m_position$.y - $radius$$inline_702_tX$$inline_698$$ * $manifold$$inline_689$$.$normal$.y;
          $i$$inline_703_tPoint$$inline_692$$.$separation$ = $dist$$inline_699_pY$$inline_713_poly$$inline_690$$ - $radius$$inline_702_tX$$inline_698$$
        }
      }else {
        var $u$$inline_711$$ = ($dX$$inline_693_xLocalX$$inline_695$$ - $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_vertices$[$normalIndex$$inline_700_vertIndex1$$inline_706$$].x) * $eX$$inline_708_pX$$inline_712$$ + ($dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$ - $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_vertices$[$normalIndex$$inline_700_vertIndex1$$inline_706$$].y) * $eY$$inline_709_s$$inline_704$$;
        $i$$inline_703_tPoint$$inline_692$$ = $manifold$$inline_689$$.$points$[0];
        $i$$inline_703_tPoint$$inline_692$$.id.$features$.$incidentEdge$ = 255;
        $i$$inline_703_tPoint$$inline_692$$.id.$features$.$incidentVertex$ = 255;
        $i$$inline_703_tPoint$$inline_692$$.id.$features$.$referenceFace$ = 255;
        $i$$inline_703_tPoint$$inline_692$$.id.$features$.$flip$ = 0;
        if($u$$inline_711$$ <= 0) {
          $eX$$inline_708_pX$$inline_712$$ = $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_vertices$[$normalIndex$$inline_700_vertIndex1$$inline_706$$].x;
          $dist$$inline_699_pY$$inline_713_poly$$inline_690$$ = $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_vertices$[$normalIndex$$inline_700_vertIndex1$$inline_706$$].y;
          $i$$inline_703_tPoint$$inline_692$$.id.$features$.$incidentVertex$ = $normalIndex$$inline_700_vertIndex1$$inline_706$$
        }else {
          if($u$$inline_711$$ >= $length$$inline_710$$) {
            $eX$$inline_708_pX$$inline_712$$ = $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_vertices$[$separation$$inline_701_vertIndex2$$inline_707$$].x;
            $dist$$inline_699_pY$$inline_713_poly$$inline_690$$ = $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_vertices$[$separation$$inline_701_vertIndex2$$inline_707$$].y;
            $i$$inline_703_tPoint$$inline_692$$.id.$features$.$incidentVertex$ = $separation$$inline_701_vertIndex2$$inline_707$$
          }else {
            $eX$$inline_708_pX$$inline_712$$ = $eX$$inline_708_pX$$inline_712$$ * $u$$inline_711$$ + $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_vertices$[$normalIndex$$inline_700_vertIndex1$$inline_706$$].x;
            $dist$$inline_699_pY$$inline_713_poly$$inline_690$$ = $eY$$inline_709_s$$inline_704$$ * $u$$inline_711$$ + $dist$$inline_699_pY$$inline_713_poly$$inline_690$$.$m_vertices$[$normalIndex$$inline_700_vertIndex1$$inline_706$$].y;
            $i$$inline_703_tPoint$$inline_692$$.id.$features$.$incidentEdge$ = $normalIndex$$inline_700_vertIndex1$$inline_706$$
          }
        }
        $dX$$inline_693_xLocalX$$inline_695$$ = $dX$$inline_693_xLocalX$$inline_695$$ - $eX$$inline_708_pX$$inline_712$$;
        $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$ = $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$ - $dist$$inline_699_pY$$inline_713_poly$$inline_690$$;
        $dist$$inline_699_pY$$inline_713_poly$$inline_690$$ = Math.sqrt($dX$$inline_693_xLocalX$$inline_695$$ * $dX$$inline_693_xLocalX$$inline_695$$ + $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$ * $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$);
        $dX$$inline_693_xLocalX$$inline_695$$ /= $dist$$inline_699_pY$$inline_713_poly$$inline_690$$;
        $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$ /= $dist$$inline_699_pY$$inline_713_poly$$inline_690$$;
        if(!($dist$$inline_699_pY$$inline_713_poly$$inline_690$$ > $radius$$inline_702_tX$$inline_698$$)) {
          $manifold$$inline_689$$.$pointCount$ = 1;
          $manifold$$inline_689$$.$normal$.$Set$($tMat$$inline_697$$.$col1$.x * $dX$$inline_693_xLocalX$$inline_695$$ + $tMat$$inline_697$$.$col2$.x * $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$, $tMat$$inline_697$$.$col1$.y * $dX$$inline_693_xLocalX$$inline_695$$ + $tMat$$inline_697$$.$col2$.y * $dY$$inline_694_tVec$$inline_705_xLocalY$$inline_696$$);
          $i$$inline_703_tPoint$$inline_692$$.position.x = $circle$$inline_691$$.$m_position$.x - $radius$$inline_702_tX$$inline_698$$ * $manifold$$inline_689$$.$normal$.x;
          $i$$inline_703_tPoint$$inline_692$$.position.y = $circle$$inline_691$$.$m_position$.y - $radius$$inline_702_tX$$inline_698$$ * $manifold$$inline_689$$.$normal$.y;
          $i$$inline_703_tPoint$$inline_692$$.$separation$ = $dist$$inline_699_pY$$inline_713_poly$$inline_690$$ - $radius$$inline_702_tX$$inline_698$$
        }
      }
    }
  }
  this.$m_manifoldCount$ = this.$m_manifold$[0].$pointCount$ > 0 ? 1 : 0
}, $GetManifolds$:$JSCompiler_get$$("$m_manifold$"), $m_manifold$:[new $b2Manifold$$]});
function $b2PolyAndCircleContact$Create$$($shape1$$2$$, $shape2$$2$$) {
  return new $b2PolyAndCircleContact$$($shape1$$2$$, $shape2$$2$$)
}
function $b2PolyAndCircleContact$Destroy$$() {
}
;
// Input 118
function $b2PolyContact$$($s1$$5$$, $s2$$4$$) {
  this.$m_node1$ = new $b2ContactNode$$;
  this.$m_node2$ = new $b2ContactNode$$;
  this.$m_flags$ = 0;
  if(!$s1$$5$$ || !$s2$$4$$) {
    this.$m_shape2$ = this.$m_shape1$ = null
  }else {
    this.$m_shape1$ = $s1$$5$$;
    this.$m_shape2$ = $s2$$4$$;
    this.$m_manifoldCount$ = 0;
    this.$m_friction$ = Math.sqrt(this.$m_shape1$.$m_friction$ * this.$m_shape2$.$m_friction$);
    this.$m_restitution$ = $b2Math$b2Max$$(this.$m_shape1$.$m_restitution$, this.$m_shape2$.$m_restitution$);
    this.$m_next$ = this.$m_prev$ = null;
    this.$m_node1$.$contact$ = null;
    this.$m_node1$.$prev$ = null;
    this.$m_node1$.next = null;
    this.$m_node1$.$other$ = null;
    this.$m_node2$.$contact$ = null;
    this.$m_node2$.$prev$ = null;
    this.$m_node2$.next = null;
    this.$m_node2$.$other$ = null;
    this.$m0$ = new $b2Manifold$$;
    this.$m_manifold$ = [new $b2Manifold$$];
    this.$m_manifold$[0].$pointCount$ = 0
  }
}
$goog$inherits$$($b2PolyContact$$, $b2Contact$$);
$b2PolyContact$$.prototype.$Evaluate$ = function $$b2PolyContact$$$$$Evaluate$$() {
  for(var $tMani$$ = this.$m_manifold$[0], $edgeAOut$$inline_761_edgeBOut$$inline_764_flip$$inline_769_match$$2_tPoints$$ = this.$m0$.$points$, $i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$ = 0;$i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$ < $tMani$$.$pointCount$;$i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$++) {
    var $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$ = $edgeAOut$$inline_761_edgeBOut$$inline_764_flip$$inline_769_match$$2_tPoints$$[$i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$], $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$ = $tMani$$.$points$[$i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$];
    $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.$normalImpulse$ = $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$.$normalImpulse$;
    $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.$tangentImpulse$ = $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$.$tangentImpulse$;
    $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.id = $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$.id.$Copy$()
  }
  this.$m0$.$pointCount$ = $tMani$$.$pointCount$;
  $i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$ = this.$m_shape1$;
  var $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$ = this.$m_shape2$;
  var $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$ = $tMani$$.$pointCount$ = 0;
  $edgeAOut$$inline_761_edgeBOut$$inline_764_flip$$inline_769_match$$2_tPoints$$ = [$cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$];
  $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$ = $b2Collision$FindMaxSeparation$$($edgeAOut$$inline_761_edgeBOut$$inline_764_flip$$inline_769_match$$2_tPoints$$, $i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$, $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$, false);
  $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$ = $edgeAOut$$inline_761_edgeBOut$$inline_764_flip$$inline_769_match$$2_tPoints$$[0];
  if(!($cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$ > 0 && 1)) {
    var $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$ = 0;
    $edgeAOut$$inline_761_edgeBOut$$inline_764_flip$$inline_769_match$$2_tPoints$$ = [$edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$];
    var $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$ = $b2Collision$FindMaxSeparation$$($edgeAOut$$inline_761_edgeBOut$$inline_764_flip$$inline_769_match$$2_tPoints$$, $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$, $i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$, false);
    $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$ = $edgeAOut$$inline_761_edgeBOut$$inline_764_flip$$inline_769_match$$2_tPoints$$[0];
    if(!($clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$ > 0 && 1)) {
      $edgeAOut$$inline_761_edgeBOut$$inline_764_flip$$inline_769_match$$2_tPoints$$ = $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$ = 0;
      if($clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$ > 0.98 * $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$ + 0.0010) {
        $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$ = $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$;
        $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$ = $i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$;
        $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$ = $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$;
        $edgeAOut$$inline_761_edgeBOut$$inline_764_flip$$inline_769_match$$2_tPoints$$ = 1
      }else {
        $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$ = $i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$;
        $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$ = $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$;
        $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$ = $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$;
        $edgeAOut$$inline_761_edgeBOut$$inline_764_flip$$inline_769_match$$2_tPoints$$ = 0
      }
      $i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$ = [new $ClipVertex$$, new $ClipVertex$$];
      $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$ = $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$;
      $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$ = $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$;
      var $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$ = $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.$m_vertices$;
      $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$ = $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$.$m_vertexCount$;
      $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$ = $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$.$m_vertices$;
      var $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ = $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$[$edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$ + 1 == $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.$m_vertexCount$ ? 0 : $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$ + 
      1], $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ = $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$.x, $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$ = $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$.y;
      $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ = $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$[$edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$];
      $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ -= $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$.x;
      $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$ -= $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$.y;
      $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ = $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$;
      $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ = $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$;
      $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$ = -$cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$;
      $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ = 1 / Math.sqrt($normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ * $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ + $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$ * 
      $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$);
      $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ *= $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$;
      $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$ *= $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$;
      $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ = $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$;
      var $normal1Y$$inline_1114_v11Y$$inline_782_vertex22$$inline_1119$$ = $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$;
      $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ = $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$;
      $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$ = $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.$m_R$;
      $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ = $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col1$.x * $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ + $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col2$.x * $normal1Y$$inline_1114_v11Y$$inline_782_vertex22$$inline_1119$$;
      $normal1Y$$inline_1114_v11Y$$inline_782_vertex22$$inline_1119$$ = $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col1$.y * $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ + $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col2$.y * $normal1Y$$inline_1114_v11Y$$inline_782_vertex22$$inline_1119$$;
      $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$ = $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$;
      $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ = $normal1Y$$inline_1114_v11Y$$inline_782_vertex22$$inline_1119$$;
      $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$ = $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$.$m_R$;
      $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ = $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$ * $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col1$.x + $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ * 
      $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col1$.y;
      $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ = $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$ * $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col2$.x + $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ * $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col2$.y;
      $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$ = $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$;
      $normal1Y$$inline_1114_v11Y$$inline_782_vertex22$$inline_1119$$ = $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$ = 0;
      for(var $minDot$$inline_1120$$ = Number.MAX_VALUE, $i$$inline_1121$$ = 0;$i$$inline_1121$$ < $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$;++$i$$inline_1121$$) {
        var $i1$$inline_1122$$ = $i$$inline_1121$$, $i2$$inline_1123$$ = $i$$inline_1121$$ + 1 < $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$ ? $i$$inline_1121$$ + 1 : 0;
        $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ = $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$[$i2$$inline_1123$$];
        var $normal2Local2X$$inline_1124$$ = $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$.x, $normal2Local2Y$$inline_1125$$ = $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$.y;
        $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ = $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$[$i1$$inline_1122$$];
        $normal2Local2X$$inline_1124$$ -= $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$.x;
        $normal2Local2Y$$inline_1125$$ -= $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$.y;
        $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ = $normal2Local2X$$inline_1124$$;
        $normal2Local2X$$inline_1124$$ = $normal2Local2Y$$inline_1125$$;
        $normal2Local2Y$$inline_1125$$ = -$cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$;
        $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ = 1 / Math.sqrt($normal2Local2X$$inline_1124$$ * $normal2Local2X$$inline_1124$$ + $normal2Local2Y$$inline_1125$$ * $normal2Local2Y$$inline_1125$$);
        $normal2Local2X$$inline_1124$$ *= $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$;
        $normal2Local2Y$$inline_1125$$ *= $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$;
        $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ = $normal2Local2X$$inline_1124$$ * $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$ + $normal2Local2Y$$inline_1125$$ * $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$;
        if($cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ < $minDot$$inline_1120$$) {
          $minDot$$inline_1120$$ = $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$;
          $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$ = $i1$$inline_1122$$;
          $normal1Y$$inline_1114_v11Y$$inline_782_vertex22$$inline_1119$$ = $i2$$inline_1123$$
        }
      }
      $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$ = $i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$[0];
      $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ = $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$.$v$;
      $JSCompiler_StaticMethods_SetV$$($cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$, $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$[$np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$]);
      $JSCompiler_StaticMethods_MulM$$($cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$, $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$.$m_R$);
      $JSCompiler_StaticMethods_Add$$($cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$, $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$.$m_position$);
      $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$.id.$features$.$referenceFace$ = $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$;
      $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$.id.$features$.$incidentEdge$ = $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$;
      $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$.id.$features$.$incidentVertex$ = $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$;
      $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$ = $i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$[1];
      $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ = $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$.$v$;
      $JSCompiler_StaticMethods_SetV$$($cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$, $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$[$normal1Y$$inline_1114_v11Y$$inline_782_vertex22$$inline_1119$$]);
      $JSCompiler_StaticMethods_MulM$$($cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$, $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$.$m_R$);
      $JSCompiler_StaticMethods_Add$$($cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$, $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$.$m_position$);
      $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$.id.$features$.$referenceFace$ = $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$;
      $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$.id.$features$.$incidentEdge$ = $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$;
      $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$.id.$features$.$incidentVertex$ = $normal1Y$$inline_1114_v11Y$$inline_782_vertex22$$inline_1119$$;
      $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$ = $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.$m_vertices$;
      $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ = $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$[$edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$];
      $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$ = $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$ + 1 < $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.$m_vertexCount$ ? $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$[$edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$ + 1] : $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$[0];
      $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$ = $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$.x - $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$.x;
      $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$ = $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$.y - $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$.y;
      $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ = $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$;
      $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$ = $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.$m_R$;
      $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$ = $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col1$.x * $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ + $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col2$.x * $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$;
      $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$ = $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col1$.y * $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ + $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col2$.y * $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$;
      $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$ = 1 / Math.sqrt($cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$ * $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$ + $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$ * $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$);
      $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$ *= $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$;
      $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$ *= $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$;
      $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$ = $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$;
      $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$ = $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$;
      $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ = $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$;
      $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$ = $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$;
      $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$ = -$normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$;
      $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$ = $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$.x;
      $normal1Y$$inline_1114_v11Y$$inline_782_vertex22$$inline_1119$$ = $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$.y;
      $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ = $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$;
      $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$ = $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.$m_R$;
      $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$ = $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col1$.x * $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ + $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col2$.x * $normal1Y$$inline_1114_v11Y$$inline_782_vertex22$$inline_1119$$;
      $normal1Y$$inline_1114_v11Y$$inline_782_vertex22$$inline_1119$$ = $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col1$.y * $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ + $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col2$.y * $normal1Y$$inline_1114_v11Y$$inline_782_vertex22$$inline_1119$$;
      $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$ += $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.$m_position$.x;
      $normal1Y$$inline_1114_v11Y$$inline_782_vertex22$$inline_1119$$ += $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.$m_position$.y;
      $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ = $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$.x;
      $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$ = $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$.y;
      $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ = $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$;
      $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$ = $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.$m_R$;
      $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ = $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col1$.x * $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ + $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col2$.x * $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$;
      $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$ = $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col1$.y * $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ + $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$.$col2$.y * $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$;
      $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ += $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.$m_position$.x;
      $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$ += $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.$m_position$.y;
      $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$ = $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$ * $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$ + $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$ * $normal1Y$$inline_1114_v11Y$$inline_782_vertex22$$inline_1119$$;
      $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$ = -($cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$ * $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$ + $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$ * $normal1Y$$inline_1114_v11Y$$inline_782_vertex22$$inline_1119$$);
      $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ = $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$ * $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ + $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$ * $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$;
      $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$ = [new $ClipVertex$$, new $ClipVertex$$];
      $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$ = [new $ClipVertex$$, new $ClipVertex$$];
      $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$ = 0;
      $b2Collision$b2CollidePolyTempVec$$.$Set$(-$cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$, -$edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$);
      $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$ = $b2Collision$ClipSegmentToLine$$($clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$, $i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$, $b2Collision$b2CollidePolyTempVec$$, $normal1Local1X$$inline_1109_normal1Local2Y$$inline_1117_normal1X$$inline_1113_sideOffset1$$inline_786_tX$$inline_776$$);
      if(!($np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$ < 2)) {
        $b2Collision$b2CollidePolyTempVec$$.$Set$($cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$, $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$);
        $np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$ = $b2Collision$ClipSegmentToLine$$($clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$, $clipPoints1$$inline_788_normal1Local1Y$$inline_1110_normal1Local2X$$inline_1116_v12$$inline_773_v12Y$$inline_784$$, $b2Collision$b2CollidePolyTempVec$$, $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$);
        if(!($np$$inline_790_tMat$$inline_1115_tMat$$inline_777_vert1s$$inline_1105_vertex21$$inline_1118$$ < 2)) {
          $edgeAOut$$inline_761_edgeBOut$$inline_764_flip$$inline_769_match$$2_tPoints$$ ? $tMani$$.$normal$.$Set$(-$edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$, -$edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$) : $tMani$$.$normal$.$Set$($edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$, $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$);
          for($cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$ = $i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$ = 0;$cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$ < 2;++$cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$) {
            $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$ = $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$[$cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$].$v$;
            $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$ = $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$ * $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$.x + $edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$ * $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$.y - 
            $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$;
            if($edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$ <= 0) {
              $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$ = $tMani$$.$points$[$i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$];
              $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$.$separation$ = $edgeB$$inline_763_separation$$inline_794_sideNormalY$$inline_775_tVec$$inline_793_vert2s$$inline_1107$$;
              $JSCompiler_StaticMethods_SetV$$($cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$.position, $clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$[$cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$].$v$);
              $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$.id.$Set$($clipPoints2$$inline_789_count2$$inline_1106_poly2$$inline_767_separationB$$inline_765_tClip$$inline_1127_v11X$$inline_781$$[$cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$].id);
              $cp$$inline_795_dot$$inline_1126_invLength$$inline_1112_sideOffset2$$inline_787_tVec$$inline_1108_tX$$inline_1111_v11$$inline_772_v12X$$inline_783$$.id.$features$.$flip$ = $edgeAOut$$inline_761_edgeBOut$$inline_764_flip$$inline_769_match$$2_tPoints$$;
              ++$i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$
            }
          }
          $tMani$$.$pointCount$ = $i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$
        }
      }
    }
  }
  if($tMani$$.$pointCount$ > 0) {
    $edgeAOut$$inline_761_edgeBOut$$inline_764_flip$$inline_769_match$$2_tPoints$$ = [false, false];
    for($i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$ = 0;$i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$ < $tMani$$.$pointCount$;++$i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$) {
      $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$ = $tMani$$.$points$[$i$$106_incidentEdge$$inline_770_k$$1_pointCount$$inline_791_polyA$$inline_757$$];
      $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.$normalImpulse$ = 0;
      $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.$tangentImpulse$ = 0;
      $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$ = $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.id.key;
      for($edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$ = 0;$edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$ < this.$m0$.$pointCount$;++$edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$) {
        if($edgeAOut$$inline_761_edgeBOut$$inline_764_flip$$inline_769_match$$2_tPoints$$[$edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$] != true) {
          $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$ = this.$m0$.$points$[$edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$];
          if($cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$.id.key == $edge1$$inline_768_frontNormalX$$inline_779_idKey_invLength$$inline_778_tPoint0$$) {
            $edgeAOut$$inline_761_edgeBOut$$inline_764_flip$$inline_769_match$$2_tPoints$$[$edge1$$inline_1103_frontNormalY$$inline_780_j$$15_polyB$$inline_758_vert1s$$inline_771$$] = true;
            $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.$normalImpulse$ = $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$.$normalImpulse$;
            $cp$$2_frontOffset$$inline_785_poly1$$inline_766_separationA$$inline_762_tPoint$$2$$.$tangentImpulse$ = $cp0_edgeA$$inline_760_i$$inline_792_poly2$$inline_1104_sideNormalX$$inline_774$$.$tangentImpulse$;
            break
          }
        }
      }
    }
    this.$m_manifoldCount$ = 1
  }else {
    this.$m_manifoldCount$ = 0
  }
};
$b2PolyContact$$.prototype.$GetManifolds$ = $JSCompiler_get$$("$m_manifold$");
function $b2PolyContact$Create$$($shape1$$3$$, $shape2$$3$$) {
  return new $b2PolyContact$$($shape1$$3$$, $shape2$$3$$)
}
function $b2PolyContact$Destroy$$() {
}
;
// Input 119
function $b2ContactFactory$_AddType$$($createFcn$$1$$, $destroyFcn$$1$$, $type1$$2$$, $type2$$2$$) {
  $b2ContactFactory$s_registers$$[$type1$$2$$][$type2$$2$$].$createFcn$ = $createFcn$$1$$;
  $b2ContactFactory$s_registers$$[$type1$$2$$][$type2$$2$$].$destroyFcn$ = $destroyFcn$$1$$;
  $b2ContactFactory$s_registers$$[$type1$$2$$][$type2$$2$$].$primary$ = true;
  if($type1$$2$$ != $type2$$2$$) {
    $b2ContactFactory$s_registers$$[$type2$$2$$][$type1$$2$$].$createFcn$ = $createFcn$$1$$;
    $b2ContactFactory$s_registers$$[$type2$$2$$][$type1$$2$$].$destroyFcn$ = $destroyFcn$$1$$;
    $b2ContactFactory$s_registers$$[$type2$$2$$][$type1$$2$$].$primary$ = false
  }
}
var $b2ContactFactory$s_registers$$ = null, $b2ContactFactory$s_initialized$$ = false;
// Input 120
function $b2ContactManager$$() {
  this.$m_nullContact$ = new $b2NullContact$$;
  this.$m_world$ = null;
  this.$m_destroyImmediate$ = false
}
$goog$inherits$$($b2ContactManager$$, $b2PairCallback$$);
$b2ContactManager$$.prototype.$PairAdded$ = function $$b2ContactManager$$$$$PairAdded$$($proxyUserData1$$2$$, $proxyUserData2$$2$$) {
  var $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$ = $proxyUserData1$$2$$, $i$$inline_821_shape2$$5_shape2$$inline_815$$ = $proxyUserData2$$2$$, $JSCompiler_temp$$14_body1_i$$inline_1131_type1$$inline_817$$ = $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$.$m_body$, $allocator$$inline_816_body2_m$$inline_822_tempShape$$ = $i$$inline_821_shape2$$5_shape2$$inline_815$$.$m_body$;
  if($JSCompiler_temp$$14_body1_i$$inline_1131_type1$$inline_817$$.$IsStatic$() && $allocator$$inline_816_body2_m$$inline_822_tempShape$$.$IsStatic$()) {
    return this.$m_nullContact$
  }
  if($c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$.$m_body$ == $i$$inline_821_shape2$$5_shape2$$inline_815$$.$m_body$) {
    return this.$m_nullContact$
  }
  if($allocator$$inline_816_body2_m$$inline_822_tempShape$$.$IsConnected$($JSCompiler_temp$$14_body1_i$$inline_1131_type1$$inline_817$$)) {
    return this.$m_nullContact$
  }
  if($JSCompiler_temp$$14_body1_i$$inline_1131_type1$$inline_817$$ = this.$m_world$.$m_filter$ != null) {
    $JSCompiler_temp$$14_body1_i$$inline_1131_type1$$inline_817$$ = ($c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$.$m_groupIndex$ == $i$$inline_821_shape2$$5_shape2$$inline_815$$.$m_groupIndex$ && $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$.$m_groupIndex$ != 0 ? $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$.$m_groupIndex$ > 0 : ($c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$.$m_maskBits$ & $i$$inline_821_shape2$$5_shape2$$inline_815$$.$m_categoryBits$) != 
    0 && ($c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$.$m_categoryBits$ & $i$$inline_821_shape2$$5_shape2$$inline_815$$.$m_maskBits$) != 0) == false
  }
  if($JSCompiler_temp$$14_body1_i$$inline_1131_type1$$inline_817$$) {
    return this.$m_nullContact$
  }
  if($allocator$$inline_816_body2_m$$inline_822_tempShape$$.$m_invMass$ == 0) {
    $allocator$$inline_816_body2_m$$inline_822_tempShape$$ = $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$;
    $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$ = $i$$inline_821_shape2$$5_shape2$$inline_815$$;
    $i$$inline_821_shape2$$5_shape2$$inline_815$$ = $allocator$$inline_816_body2_m$$inline_822_tempShape$$
  }
  $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$ = $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$;
  $i$$inline_821_shape2$$5_shape2$$inline_815$$ = $i$$inline_821_shape2$$5_shape2$$inline_815$$;
  $allocator$$inline_816_body2_m$$inline_822_tempShape$$ = this.$m_world$.$m_blockAllocator$;
  if($b2ContactFactory$s_initialized$$ == false) {
    $b2ContactFactory$s_registers$$ = Array(4);
    for($JSCompiler_temp$$14_body1_i$$inline_1131_type1$$inline_817$$ = 0;$JSCompiler_temp$$14_body1_i$$inline_1131_type1$$inline_817$$ < 4;$JSCompiler_temp$$14_body1_i$$inline_1131_type1$$inline_817$$++) {
      $b2ContactFactory$s_registers$$[$JSCompiler_temp$$14_body1_i$$inline_1131_type1$$inline_817$$] = Array(4);
      for(var $j$$inline_1132_type2$$inline_818$$ = 0;$j$$inline_1132_type2$$inline_818$$ < 4;$j$$inline_1132_type2$$inline_818$$++) {
        $b2ContactFactory$s_registers$$[$JSCompiler_temp$$14_body1_i$$inline_1131_type1$$inline_817$$][$j$$inline_1132_type2$$inline_818$$] = new $b2ContactRegister$$
      }
    }
    $b2ContactFactory$_AddType$$($b2CircleContact$Create$$, $b2CircleContact$Destroy$$, 0, 0);
    $b2ContactFactory$_AddType$$($b2PolyAndCircleContact$Create$$, $b2PolyAndCircleContact$Destroy$$, 2, 0);
    $b2ContactFactory$_AddType$$($b2PolyContact$Create$$, $b2PolyContact$Destroy$$, 2, 2);
    $b2ContactFactory$s_initialized$$ = true
  }
  $JSCompiler_temp$$14_body1_i$$inline_1131_type1$$inline_817$$ = $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$.$m_type$;
  $j$$inline_1132_type2$$inline_818$$ = $i$$inline_821_shape2$$5_shape2$$inline_815$$.$m_type$;
  var $createFcn$$inline_819$$ = $b2ContactFactory$s_registers$$[$JSCompiler_temp$$14_body1_i$$inline_1131_type1$$inline_817$$][$j$$inline_1132_type2$$inline_818$$].$createFcn$;
  if($createFcn$$inline_819$$) {
    if($b2ContactFactory$s_registers$$[$JSCompiler_temp$$14_body1_i$$inline_1131_type1$$inline_817$$][$j$$inline_1132_type2$$inline_818$$].$primary$) {
      $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$ = $createFcn$$inline_819$$($c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$, $i$$inline_821_shape2$$5_shape2$$inline_815$$, $allocator$$inline_816_body2_m$$inline_822_tempShape$$)
    }else {
      $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$ = $createFcn$$inline_819$$($i$$inline_821_shape2$$5_shape2$$inline_815$$, $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$, $allocator$$inline_816_body2_m$$inline_822_tempShape$$);
      for($i$$inline_821_shape2$$5_shape2$$inline_815$$ = 0;$i$$inline_821_shape2$$5_shape2$$inline_815$$ < $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$.$m_manifoldCount$;++$i$$inline_821_shape2$$5_shape2$$inline_815$$) {
        $allocator$$inline_816_body2_m$$inline_822_tempShape$$ = $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$.$GetManifolds$()[$i$$inline_821_shape2$$5_shape2$$inline_815$$];
        $allocator$$inline_816_body2_m$$inline_822_tempShape$$.$normal$ = new $b2Vec2$$(-$allocator$$inline_816_body2_m$$inline_822_tempShape$$.$normal$.x, -$allocator$$inline_816_body2_m$$inline_822_tempShape$$.$normal$.y)
      }
      $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$ = $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$
    }
  }else {
    $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$ = null
  }
  if($c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$ == null) {
    return this.$m_nullContact$
  }else {
    $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$.$m_prev$ = null;
    $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$.$m_next$ = this.$m_world$.$m_contactList$;
    if(this.$m_world$.$m_contactList$ != null) {
      this.$m_world$.$m_contactList$.$m_prev$ = $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$
    }
    this.$m_world$.$m_contactList$ = $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$;
    this.$m_world$.$m_contactCount$++
  }
  return $c$$inline_820_contact$$6_shape1$$5_shape1$$inline_814$$
};
$b2ContactManager$$.prototype.$PairRemoved$ = function $$b2ContactManager$$$$$PairRemoved$$($proxyUserData1$$3$$, $proxyUserData2$$3$$, $pairUserData$$1$$) {
  if($pairUserData$$1$$ != null) {
    if($pairUserData$$1$$ != this.$m_nullContact$) {
      if(this.$m_destroyImmediate$ == true) {
        $JSCompiler_StaticMethods_DestroyContact$$(this, $pairUserData$$1$$)
      }else {
        $pairUserData$$1$$.$m_flags$ |= 2
      }
    }
  }
};
function $JSCompiler_StaticMethods_DestroyContact$$($JSCompiler_StaticMethods_DestroyContact$self$$, $c$$14$$) {
  if($c$$14$$.$m_prev$) {
    $c$$14$$.$m_prev$.$m_next$ = $c$$14$$.$m_next$
  }
  if($c$$14$$.$m_next$) {
    $c$$14$$.$m_next$.$m_prev$ = $c$$14$$.$m_prev$
  }
  if($c$$14$$ == $JSCompiler_StaticMethods_DestroyContact$self$$.$m_world$.$m_contactList$) {
    $JSCompiler_StaticMethods_DestroyContact$self$$.$m_world$.$m_contactList$ = $c$$14$$.$m_next$
  }
  if($c$$14$$.$m_manifoldCount$ > 0) {
    var $allocator$$inline_828_body1$$1$$ = $c$$14$$.$m_shape1$.$m_body$, $body2$$1_destroyFcn$$inline_829$$ = $c$$14$$.$m_shape2$.$m_body$, $node1$$2$$ = $c$$14$$.$m_node1$, $node2$$2$$ = $c$$14$$.$m_node2$;
    $allocator$$inline_828_body1$$1$$.$WakeUp$();
    $body2$$1_destroyFcn$$inline_829$$.$WakeUp$();
    if($node1$$2$$.$prev$) {
      $node1$$2$$.$prev$.next = $node1$$2$$.next
    }
    if($node1$$2$$.next) {
      $node1$$2$$.next.$prev$ = $node1$$2$$.$prev$
    }
    if($node1$$2$$ == $allocator$$inline_828_body1$$1$$.$m_contactList$) {
      $allocator$$inline_828_body1$$1$$.$m_contactList$ = $node1$$2$$.next
    }
    $node1$$2$$.$prev$ = null;
    $node1$$2$$.next = null;
    if($node2$$2$$.$prev$) {
      $node2$$2$$.$prev$.next = $node2$$2$$.next
    }
    if($node2$$2$$.next) {
      $node2$$2$$.next.$prev$ = $node2$$2$$.$prev$
    }
    if($node2$$2$$ == $body2$$1_destroyFcn$$inline_829$$.$m_contactList$) {
      $body2$$1_destroyFcn$$inline_829$$.$m_contactList$ = $node2$$2$$.next
    }
    $node2$$2$$.$prev$ = null;
    $node2$$2$$.next = null
  }
  $allocator$$inline_828_body1$$1$$ = $JSCompiler_StaticMethods_DestroyContact$self$$.$m_world$.$m_blockAllocator$;
  if($c$$14$$.$m_manifoldCount$ > 0) {
    $c$$14$$.$m_shape1$.$m_body$.$WakeUp$();
    $c$$14$$.$m_shape2$.$m_body$.$WakeUp$()
  }
  $body2$$1_destroyFcn$$inline_829$$ = $b2ContactFactory$s_registers$$[$c$$14$$.$m_shape1$.$m_type$][$c$$14$$.$m_shape2$.$m_type$].$destroyFcn$;
  $body2$$1_destroyFcn$$inline_829$$($c$$14$$, $allocator$$inline_828_body1$$1$$);
  --$JSCompiler_StaticMethods_DestroyContact$self$$.$m_world$.$m_contactCount$
}
$b2ContactManager$$.prototype.$m_nullContact$ = new $b2NullContact$$;
$b2ContactManager$$.prototype.$m_destroyImmediate$ = null;
// Input 121
function $b2Jacobian$$() {
  this.$linear1$ = new $b2Vec2$$;
  this.$linear2$ = new $b2Vec2$$
}
$b2Jacobian$$.prototype = {$linear1$:new $b2Vec2$$, $angular1$:null, $linear2$:new $b2Vec2$$, $angular2$:null, $SetZero$:function $$b2Jacobian$$$$$SetZero$$() {
  this.$linear1$.$SetZero$();
  this.$angular1$ = 0;
  this.$linear2$.$SetZero$();
  this.$angular2$ = 0
}, $Set$:function $$b2Jacobian$$$$$Set$$($x1$$5$$, $a1$$, $x2$$1$$, $a2$$) {
  $JSCompiler_StaticMethods_SetV$$(this.$linear1$, $x1$$5$$);
  this.$angular1$ = $a1$$;
  $JSCompiler_StaticMethods_SetV$$(this.$linear2$, $x2$$1$$);
  this.$angular2$ = $a2$$
}, $Compute$:function $$b2Jacobian$$$$$Compute$$($x1$$6$$, $a1$$1$$, $x2$$2$$, $a2$$1$$) {
  return this.$linear1$.x * $x1$$6$$.x + this.$linear1$.y * $x1$$6$$.y + this.$angular1$ * $a1$$1$$ + (this.$linear2$.x * $x2$$2$$.x + this.$linear2$.y * $x2$$2$$.y) + this.$angular2$ * $a2$$1$$
}};
// Input 122
function $b2JointNode$$() {
}
$b2JointNode$$.prototype = {$other$:null, $joint$:null, $prev$:null, next:null};
// Input 123
function $b2Joint$$($def$$4$$) {
  this.$m_node1$ = new $b2JointNode$$;
  this.$m_node2$ = new $b2JointNode$$;
  this.$m_type$ = $def$$4$$.type;
  this.$m_next$ = this.$m_prev$ = null;
  this.$m_body1$ = $def$$4$$.$body1$;
  this.$m_body2$ = $def$$4$$.$body2$;
  this.$m_collideConnected$ = $def$$4$$.$collideConnected$;
  this.$m_islandFlag$ = false;
  this.$m_userData$ = $def$$4$$.$userData$
}
$b2Joint$$.prototype = {$GetAnchor1$:$JSCompiler_returnArg$$(null), $GetAnchor2$:$JSCompiler_returnArg$$(null), $GetReactionForce$:$JSCompiler_returnArg$$(null), $GetReactionTorque$:$JSCompiler_returnArg$$(0), $GetNext$:$JSCompiler_get$$("$m_next$"), $PrepareVelocitySolver$:$JSCompiler_emptyFn$$(), $SolveVelocityConstraints$:$JSCompiler_emptyFn$$(), $SolvePositionConstraints$:$JSCompiler_returnArg$$(false), $m_type$:0, $m_prev$:null, $m_next$:null, $m_node1$:new $b2JointNode$$, $m_node2$:new $b2JointNode$$, 
$m_body1$:null, $m_body2$:null, $m_islandFlag$:null, $m_collideConnected$:null, $m_userData$:null};
// Input 124
function $b2DistanceJoint$$($def$$5$$) {
  this.$m_node1$ = new $b2JointNode$$;
  this.$m_node2$ = new $b2JointNode$$;
  this.$m_type$ = $def$$5$$.type;
  this.$m_next$ = this.$m_prev$ = null;
  this.$m_body1$ = $def$$5$$.$body1$;
  this.$m_body2$ = $def$$5$$.$body2$;
  this.$m_collideConnected$ = $def$$5$$.$collideConnected$;
  this.$m_islandFlag$ = false;
  this.$m_userData$ = $def$$5$$.$userData$;
  this.$m_localAnchor1$ = new $b2Vec2$$;
  this.$m_localAnchor2$ = new $b2Vec2$$;
  this.$m_u$ = new $b2Vec2$$;
  var $tMat$$8$$, $tX$$9$$, $tY$$1$$;
  $tMat$$8$$ = this.$m_body1$.$m_R$;
  $tX$$9$$ = $def$$5$$.$anchorPoint1$.x - this.$m_body1$.$m_position$.x;
  $tY$$1$$ = $def$$5$$.$anchorPoint1$.y - this.$m_body1$.$m_position$.y;
  this.$m_localAnchor1$.x = $tX$$9$$ * $tMat$$8$$.$col1$.x + $tY$$1$$ * $tMat$$8$$.$col1$.y;
  this.$m_localAnchor1$.y = $tX$$9$$ * $tMat$$8$$.$col2$.x + $tY$$1$$ * $tMat$$8$$.$col2$.y;
  $tMat$$8$$ = this.$m_body2$.$m_R$;
  $tX$$9$$ = $def$$5$$.$anchorPoint2$.x - this.$m_body2$.$m_position$.x;
  $tY$$1$$ = $def$$5$$.$anchorPoint2$.y - this.$m_body2$.$m_position$.y;
  this.$m_localAnchor2$.x = $tX$$9$$ * $tMat$$8$$.$col1$.x + $tY$$1$$ * $tMat$$8$$.$col1$.y;
  this.$m_localAnchor2$.y = $tX$$9$$ * $tMat$$8$$.$col2$.x + $tY$$1$$ * $tMat$$8$$.$col2$.y;
  $tX$$9$$ = $def$$5$$.$anchorPoint2$.x - $def$$5$$.$anchorPoint1$.x;
  $tY$$1$$ = $def$$5$$.$anchorPoint2$.y - $def$$5$$.$anchorPoint1$.y;
  this.$m_length$ = Math.sqrt($tX$$9$$ * $tX$$9$$ + $tY$$1$$ * $tY$$1$$);
  this.$m_impulse$ = 0
}
Object.extend($b2DistanceJoint$$.prototype, $b2Joint$$.prototype);
Object.extend($b2DistanceJoint$$.prototype, {$PrepareVelocitySolver$:function() {
  var $r2Y$$4_tMat$$9$$;
  $r2Y$$4_tMat$$9$$ = this.$m_body1$.$m_R$;
  var $r1X$$4$$ = $r2Y$$4_tMat$$9$$.$col1$.x * this.$m_localAnchor1$.x + $r2Y$$4_tMat$$9$$.$col2$.x * this.$m_localAnchor1$.y, $r1Y$$4$$ = $r2Y$$4_tMat$$9$$.$col1$.y * this.$m_localAnchor1$.x + $r2Y$$4_tMat$$9$$.$col2$.y * this.$m_localAnchor1$.y;
  $r2Y$$4_tMat$$9$$ = this.$m_body2$.$m_R$;
  var $r2X$$4$$ = $r2Y$$4_tMat$$9$$.$col1$.x * this.$m_localAnchor2$.x + $r2Y$$4_tMat$$9$$.$col2$.x * this.$m_localAnchor2$.y;
  $r2Y$$4_tMat$$9$$ = $r2Y$$4_tMat$$9$$.$col1$.y * this.$m_localAnchor2$.x + $r2Y$$4_tMat$$9$$.$col2$.y * this.$m_localAnchor2$.y;
  this.$m_u$.x = this.$m_body2$.$m_position$.x + $r2X$$4$$ - this.$m_body1$.$m_position$.x - $r1X$$4$$;
  this.$m_u$.y = this.$m_body2$.$m_position$.y + $r2Y$$4_tMat$$9$$ - this.$m_body1$.$m_position$.y - $r1Y$$4$$;
  var $PX$$2_cr1u_length$$9$$ = Math.sqrt(this.$m_u$.x * this.$m_u$.x + this.$m_u$.y * this.$m_u$.y);
  $PX$$2_cr1u_length$$9$$ > 0.15 ? $JSCompiler_StaticMethods_Multiply$$(this.$m_u$, 1 / $PX$$2_cr1u_length$$9$$) : this.$m_u$.$SetZero$();
  $PX$$2_cr1u_length$$9$$ = $r1X$$4$$ * this.$m_u$.y - $r1Y$$4$$ * this.$m_u$.x;
  var $PY$$2_cr2u$$ = $r2X$$4$$ * this.$m_u$.y - $r2Y$$4_tMat$$9$$ * this.$m_u$.x;
  this.$m_mass$ = this.$m_body1$.$m_invMass$ + this.$m_body1$.$m_invI$ * $PX$$2_cr1u_length$$9$$ * $PX$$2_cr1u_length$$9$$ + this.$m_body2$.$m_invMass$ + this.$m_body2$.$m_invI$ * $PY$$2_cr2u$$ * $PY$$2_cr2u$$;
  this.$m_mass$ = 1 / this.$m_mass$;
  if($b2World$s_enableWarmStarting$$) {
    $PX$$2_cr1u_length$$9$$ = this.$m_impulse$ * this.$m_u$.x;
    $PY$$2_cr2u$$ = this.$m_impulse$ * this.$m_u$.y;
    this.$m_body1$.$m_linearVelocity$.x -= this.$m_body1$.$m_invMass$ * $PX$$2_cr1u_length$$9$$;
    this.$m_body1$.$m_linearVelocity$.y -= this.$m_body1$.$m_invMass$ * $PY$$2_cr2u$$;
    this.$m_body1$.$m_angularVelocity$ -= this.$m_body1$.$m_invI$ * ($r1X$$4$$ * $PY$$2_cr2u$$ - $r1Y$$4$$ * $PX$$2_cr1u_length$$9$$);
    this.$m_body2$.$m_linearVelocity$.x += this.$m_body2$.$m_invMass$ * $PX$$2_cr1u_length$$9$$;
    this.$m_body2$.$m_linearVelocity$.y += this.$m_body2$.$m_invMass$ * $PY$$2_cr2u$$;
    this.$m_body2$.$m_angularVelocity$ += this.$m_body2$.$m_invI$ * ($r2X$$4$$ * $PY$$2_cr2u$$ - $r2Y$$4_tMat$$9$$ * $PX$$2_cr1u_length$$9$$)
  }else {
    this.$m_impulse$ = 0
  }
}, $SolveVelocityConstraints$:function() {
  var $r2Y$$5_tMat$$10$$;
  $r2Y$$5_tMat$$10$$ = this.$m_body1$.$m_R$;
  var $r1X$$5$$ = $r2Y$$5_tMat$$10$$.$col1$.x * this.$m_localAnchor1$.x + $r2Y$$5_tMat$$10$$.$col2$.x * this.$m_localAnchor1$.y, $r1Y$$5$$ = $r2Y$$5_tMat$$10$$.$col1$.y * this.$m_localAnchor1$.x + $r2Y$$5_tMat$$10$$.$col2$.y * this.$m_localAnchor1$.y;
  $r2Y$$5_tMat$$10$$ = this.$m_body2$.$m_R$;
  var $r2X$$5$$ = $r2Y$$5_tMat$$10$$.$col1$.x * this.$m_localAnchor2$.x + $r2Y$$5_tMat$$10$$.$col2$.x * this.$m_localAnchor2$.y;
  $r2Y$$5_tMat$$10$$ = $r2Y$$5_tMat$$10$$.$col1$.y * this.$m_localAnchor2$.x + $r2Y$$5_tMat$$10$$.$col2$.y * this.$m_localAnchor2$.y;
  var $PY$$3_impulse$$1$$ = -this.$m_mass$ * (this.$m_u$.x * (this.$m_body2$.$m_linearVelocity$.x + -this.$m_body2$.$m_angularVelocity$ * $r2Y$$5_tMat$$10$$ - (this.$m_body1$.$m_linearVelocity$.x + -this.$m_body1$.$m_angularVelocity$ * $r1Y$$5$$)) + this.$m_u$.y * (this.$m_body2$.$m_linearVelocity$.y + this.$m_body2$.$m_angularVelocity$ * $r2X$$5$$ - (this.$m_body1$.$m_linearVelocity$.y + this.$m_body1$.$m_angularVelocity$ * $r1X$$5$$)));
  this.$m_impulse$ += $PY$$3_impulse$$1$$;
  var $PX$$3$$ = $PY$$3_impulse$$1$$ * this.$m_u$.x;
  $PY$$3_impulse$$1$$ = $PY$$3_impulse$$1$$ * this.$m_u$.y;
  this.$m_body1$.$m_linearVelocity$.x -= this.$m_body1$.$m_invMass$ * $PX$$3$$;
  this.$m_body1$.$m_linearVelocity$.y -= this.$m_body1$.$m_invMass$ * $PY$$3_impulse$$1$$;
  this.$m_body1$.$m_angularVelocity$ -= this.$m_body1$.$m_invI$ * ($r1X$$5$$ * $PY$$3_impulse$$1$$ - $r1Y$$5$$ * $PX$$3$$);
  this.$m_body2$.$m_linearVelocity$.x += this.$m_body2$.$m_invMass$ * $PX$$3$$;
  this.$m_body2$.$m_linearVelocity$.y += this.$m_body2$.$m_invMass$ * $PY$$3_impulse$$1$$;
  this.$m_body2$.$m_angularVelocity$ += this.$m_body2$.$m_invI$ * ($r2X$$5$$ * $PY$$3_impulse$$1$$ - $r2Y$$5_tMat$$10$$ * $PX$$3$$)
}, $SolvePositionConstraints$:function() {
  var $r2Y$$6_tMat$$11$$;
  $r2Y$$6_tMat$$11$$ = this.$m_body1$.$m_R$;
  var $r1X$$6$$ = $r2Y$$6_tMat$$11$$.$col1$.x * this.$m_localAnchor1$.x + $r2Y$$6_tMat$$11$$.$col2$.x * this.$m_localAnchor1$.y, $r1Y$$6$$ = $r2Y$$6_tMat$$11$$.$col1$.y * this.$m_localAnchor1$.x + $r2Y$$6_tMat$$11$$.$col2$.y * this.$m_localAnchor1$.y;
  $r2Y$$6_tMat$$11$$ = this.$m_body2$.$m_R$;
  var $r2X$$6$$ = $r2Y$$6_tMat$$11$$.$col1$.x * this.$m_localAnchor2$.x + $r2Y$$6_tMat$$11$$.$col2$.x * this.$m_localAnchor2$.y;
  $r2Y$$6_tMat$$11$$ = $r2Y$$6_tMat$$11$$.$col1$.y * this.$m_localAnchor2$.x + $r2Y$$6_tMat$$11$$.$col2$.y * this.$m_localAnchor2$.y;
  var $PX$$4_dX$$9$$ = this.$m_body2$.$m_position$.x + $r2X$$6$$ - this.$m_body1$.$m_position$.x - $r1X$$6$$, $PY$$4_dY$$9$$ = this.$m_body2$.$m_position$.y + $r2Y$$6_tMat$$11$$ - this.$m_body1$.$m_position$.y - $r1Y$$6$$, $C$$4_length$$10$$ = Math.sqrt($PX$$4_dX$$9$$ * $PX$$4_dX$$9$$ + $PY$$4_dY$$9$$ * $PY$$4_dY$$9$$);
  $PX$$4_dX$$9$$ /= $C$$4_length$$10$$;
  $PY$$4_dY$$9$$ /= $C$$4_length$$10$$;
  $C$$4_length$$10$$ = $C$$4_length$$10$$ - this.$m_length$;
  $C$$4_length$$10$$ = $b2Math$b2Clamp$$($C$$4_length$$10$$, -6, 6);
  var $impulse$$2$$ = -this.$m_mass$ * $C$$4_length$$10$$;
  this.$m_u$.$Set$($PX$$4_dX$$9$$, $PY$$4_dY$$9$$);
  $PX$$4_dX$$9$$ = $impulse$$2$$ * this.$m_u$.x;
  $PY$$4_dY$$9$$ = $impulse$$2$$ * this.$m_u$.y;
  this.$m_body1$.$m_position$.x -= this.$m_body1$.$m_invMass$ * $PX$$4_dX$$9$$;
  this.$m_body1$.$m_position$.y -= this.$m_body1$.$m_invMass$ * $PY$$4_dY$$9$$;
  this.$m_body1$.$m_rotation$ -= this.$m_body1$.$m_invI$ * ($r1X$$6$$ * $PY$$4_dY$$9$$ - $r1Y$$6$$ * $PX$$4_dX$$9$$);
  this.$m_body2$.$m_position$.x += this.$m_body2$.$m_invMass$ * $PX$$4_dX$$9$$;
  this.$m_body2$.$m_position$.y += this.$m_body2$.$m_invMass$ * $PY$$4_dY$$9$$;
  this.$m_body2$.$m_rotation$ += this.$m_body2$.$m_invI$ * ($r2X$$6$$ * $PY$$4_dY$$9$$ - $r2Y$$6_tMat$$11$$ * $PX$$4_dX$$9$$);
  this.$m_body1$.$m_R$.$Set$(this.$m_body1$.$m_rotation$);
  this.$m_body2$.$m_R$.$Set$(this.$m_body2$.$m_rotation$);
  return $b2Math$b2Abs$$($C$$4_length$$10$$) < 0.15
}, $GetAnchor1$:function() {
  return $b2Math$AddVV$$(this.$m_body1$.$m_position$, $b2Math$b2MulMV$$(this.$m_body1$.$m_R$, this.$m_localAnchor1$))
}, $GetAnchor2$:function() {
  return $b2Math$AddVV$$(this.$m_body2$.$m_position$, $b2Math$b2MulMV$$(this.$m_body2$.$m_R$, this.$m_localAnchor2$))
}, $GetReactionForce$:function($invTimeStep$$2$$) {
  var $F$$ = new $b2Vec2$$;
  $JSCompiler_StaticMethods_SetV$$($F$$, this.$m_u$);
  $JSCompiler_StaticMethods_Multiply$$($F$$, this.$m_impulse$ * $invTimeStep$$2$$);
  return $F$$
}, $GetReactionTorque$:$JSCompiler_returnArg$$(0), $m_localAnchor1$:new $b2Vec2$$, $m_localAnchor2$:new $b2Vec2$$, $m_u$:new $b2Vec2$$, $m_impulse$:null, $m_mass$:null, $m_length$:null});
// Input 125
function $b2GearJoint$$($def$$6$$) {
  this.$m_node1$ = new $b2JointNode$$;
  this.$m_node2$ = new $b2JointNode$$;
  this.$m_type$ = $def$$6$$.type;
  this.$m_next$ = this.$m_prev$ = null;
  this.$m_body1$ = $def$$6$$.$body1$;
  this.$m_body2$ = $def$$6$$.$body2$;
  this.$m_collideConnected$ = $def$$6$$.$collideConnected$;
  this.$m_islandFlag$ = false;
  this.$m_userData$ = $def$$6$$.$userData$;
  this.$m_groundAnchor1$ = new $b2Vec2$$;
  this.$m_groundAnchor2$ = new $b2Vec2$$;
  this.$m_localAnchor1$ = new $b2Vec2$$;
  this.$m_localAnchor2$ = new $b2Vec2$$;
  this.$m_J$ = new $b2Jacobian$$;
  this.$m_prismatic2$ = this.$m_revolute2$ = this.$m_prismatic1$ = this.$m_revolute1$ = null;
  var $coordinate1$$, $coordinate2$$;
  this.$m_ground1$ = $def$$6$$.$joint1$.$m_body1$;
  this.$m_body1$ = $def$$6$$.$joint1$.$m_body2$;
  if($def$$6$$.$joint1$.$m_type$ == 1) {
    this.$m_revolute1$ = $def$$6$$.$joint1$;
    $JSCompiler_StaticMethods_SetV$$(this.$m_groundAnchor1$, this.$m_revolute1$.$m_localAnchor1$);
    $JSCompiler_StaticMethods_SetV$$(this.$m_localAnchor1$, this.$m_revolute1$.$m_localAnchor2$);
    $coordinate1$$ = this.$m_revolute1$.$GetJointAngle$()
  }else {
    this.$m_prismatic1$ = $def$$6$$.$joint1$;
    $JSCompiler_StaticMethods_SetV$$(this.$m_groundAnchor1$, this.$m_prismatic1$.$m_localAnchor1$);
    $JSCompiler_StaticMethods_SetV$$(this.$m_localAnchor1$, this.$m_prismatic1$.$m_localAnchor2$);
    $coordinate1$$ = this.$m_prismatic1$.$GetJointTranslation$()
  }
  this.$m_ground2$ = $def$$6$$.$joint2$.$m_body1$;
  this.$m_body2$ = $def$$6$$.$joint2$.$m_body2$;
  if($def$$6$$.$joint2$.$m_type$ == 1) {
    this.$m_revolute2$ = $def$$6$$.$joint2$;
    $JSCompiler_StaticMethods_SetV$$(this.$m_groundAnchor2$, this.$m_revolute2$.$m_localAnchor1$);
    $JSCompiler_StaticMethods_SetV$$(this.$m_localAnchor2$, this.$m_revolute2$.$m_localAnchor2$);
    $coordinate2$$ = this.$m_revolute2$.$GetJointAngle$()
  }else {
    this.$m_prismatic2$ = $def$$6$$.$joint2$;
    $JSCompiler_StaticMethods_SetV$$(this.$m_groundAnchor2$, this.$m_prismatic2$.$m_localAnchor1$);
    $JSCompiler_StaticMethods_SetV$$(this.$m_localAnchor2$, this.$m_prismatic2$.$m_localAnchor2$);
    $coordinate2$$ = this.$m_prismatic2$.$GetJointTranslation$()
  }
  this.$m_ratio$ = $def$$6$$.$ratio$;
  this.$m_constant$ = $coordinate1$$ + this.$m_ratio$ * $coordinate2$$;
  this.$m_impulse$ = 0
}
Object.extend($b2GearJoint$$.prototype, $b2Joint$$.prototype);
Object.extend($b2GearJoint$$.prototype, {$GetAnchor1$:function() {
  var $tMat$$12$$ = this.$m_body1$.$m_R$;
  return new $b2Vec2$$(this.$m_body1$.$m_position$.x + ($tMat$$12$$.$col1$.x * this.$m_localAnchor1$.x + $tMat$$12$$.$col2$.x * this.$m_localAnchor1$.y), this.$m_body1$.$m_position$.y + ($tMat$$12$$.$col1$.y * this.$m_localAnchor1$.x + $tMat$$12$$.$col2$.y * this.$m_localAnchor1$.y))
}, $GetAnchor2$:function() {
  var $tMat$$13$$ = this.$m_body2$.$m_R$;
  return new $b2Vec2$$(this.$m_body2$.$m_position$.x + ($tMat$$13$$.$col1$.x * this.$m_localAnchor2$.x + $tMat$$13$$.$col2$.x * this.$m_localAnchor2$.y), this.$m_body2$.$m_position$.y + ($tMat$$13$$.$col1$.y * this.$m_localAnchor2$.x + $tMat$$13$$.$col2$.y * this.$m_localAnchor2$.y))
}, $GetReactionForce$:function() {
  return new $b2Vec2$$
}, $GetReactionTorque$:$JSCompiler_returnArg$$(0), $GetRatio$:$JSCompiler_get$$("$m_ratio$"), $PrepareVelocitySolver$:function() {
  var $g1_ugX$$ = this.$m_ground1$, $g2$$ = this.$m_ground2$, $b1$$5$$ = this.$m_body1$, $b2$$4$$ = this.$m_body2$, $tVec$$12_ugY$$, $crug_rX$$1$$, $rY$$1_tMat$$14$$, $K$$ = 0;
  this.$m_J$.$SetZero$();
  if(this.$m_revolute1$) {
    this.$m_J$.$angular1$ = -1;
    $K$$ += $b1$$5$$.$m_invI$
  }else {
    $rY$$1_tMat$$14$$ = $g1_ugX$$.$m_R$;
    $tVec$$12_ugY$$ = this.$m_prismatic1$.$m_localXAxis1$;
    $g1_ugX$$ = $rY$$1_tMat$$14$$.$col1$.x * $tVec$$12_ugY$$.x + $rY$$1_tMat$$14$$.$col2$.x * $tVec$$12_ugY$$.y;
    $tVec$$12_ugY$$ = $rY$$1_tMat$$14$$.$col1$.y * $tVec$$12_ugY$$.x + $rY$$1_tMat$$14$$.$col2$.y * $tVec$$12_ugY$$.y;
    $rY$$1_tMat$$14$$ = $b1$$5$$.$m_R$;
    $crug_rX$$1$$ = $rY$$1_tMat$$14$$.$col1$.x * this.$m_localAnchor1$.x + $rY$$1_tMat$$14$$.$col2$.x * this.$m_localAnchor1$.y;
    $rY$$1_tMat$$14$$ = $rY$$1_tMat$$14$$.$col1$.y * this.$m_localAnchor1$.x + $rY$$1_tMat$$14$$.$col2$.y * this.$m_localAnchor1$.y;
    $crug_rX$$1$$ = $crug_rX$$1$$ * $tVec$$12_ugY$$ - $rY$$1_tMat$$14$$ * $g1_ugX$$;
    this.$m_J$.$linear1$.$Set$(-$g1_ugX$$, -$tVec$$12_ugY$$);
    this.$m_J$.$angular1$ = -$crug_rX$$1$$;
    $K$$ += $b1$$5$$.$m_invMass$ + $b1$$5$$.$m_invI$ * $crug_rX$$1$$ * $crug_rX$$1$$
  }
  if(this.$m_revolute2$) {
    this.$m_J$.$angular2$ = -this.$m_ratio$;
    $K$$ += this.$m_ratio$ * this.$m_ratio$ * $b2$$4$$.$m_invI$
  }else {
    $rY$$1_tMat$$14$$ = $g2$$.$m_R$;
    $tVec$$12_ugY$$ = this.$m_prismatic2$.$m_localXAxis1$;
    $g1_ugX$$ = $rY$$1_tMat$$14$$.$col1$.x * $tVec$$12_ugY$$.x + $rY$$1_tMat$$14$$.$col2$.x * $tVec$$12_ugY$$.y;
    $tVec$$12_ugY$$ = $rY$$1_tMat$$14$$.$col1$.y * $tVec$$12_ugY$$.x + $rY$$1_tMat$$14$$.$col2$.y * $tVec$$12_ugY$$.y;
    $rY$$1_tMat$$14$$ = $b2$$4$$.$m_R$;
    $crug_rX$$1$$ = $rY$$1_tMat$$14$$.$col1$.x * this.$m_localAnchor2$.x + $rY$$1_tMat$$14$$.$col2$.x * this.$m_localAnchor2$.y;
    $rY$$1_tMat$$14$$ = $rY$$1_tMat$$14$$.$col1$.y * this.$m_localAnchor2$.x + $rY$$1_tMat$$14$$.$col2$.y * this.$m_localAnchor2$.y;
    $crug_rX$$1$$ = $crug_rX$$1$$ * $tVec$$12_ugY$$ - $rY$$1_tMat$$14$$ * $g1_ugX$$;
    this.$m_J$.$linear2$.$Set$(-this.$m_ratio$ * $g1_ugX$$, -this.$m_ratio$ * $tVec$$12_ugY$$);
    this.$m_J$.$angular2$ = -this.$m_ratio$ * $crug_rX$$1$$;
    $K$$ += this.$m_ratio$ * this.$m_ratio$ * ($b2$$4$$.$m_invMass$ + $b2$$4$$.$m_invI$ * $crug_rX$$1$$ * $crug_rX$$1$$)
  }
  this.$m_mass$ = 1 / $K$$;
  $b1$$5$$.$m_linearVelocity$.x += $b1$$5$$.$m_invMass$ * this.$m_impulse$ * this.$m_J$.$linear1$.x;
  $b1$$5$$.$m_linearVelocity$.y += $b1$$5$$.$m_invMass$ * this.$m_impulse$ * this.$m_J$.$linear1$.y;
  $b1$$5$$.$m_angularVelocity$ += $b1$$5$$.$m_invI$ * this.$m_impulse$ * this.$m_J$.$angular1$;
  $b2$$4$$.$m_linearVelocity$.x += $b2$$4$$.$m_invMass$ * this.$m_impulse$ * this.$m_J$.$linear2$.x;
  $b2$$4$$.$m_linearVelocity$.y += $b2$$4$$.$m_invMass$ * this.$m_impulse$ * this.$m_J$.$linear2$.y;
  $b2$$4$$.$m_angularVelocity$ += $b2$$4$$.$m_invI$ * this.$m_impulse$ * this.$m_J$.$angular2$
}, $SolveVelocityConstraints$:function() {
  var $b1$$6$$ = this.$m_body1$, $b2$$5$$ = this.$m_body2$, $impulse$$3$$ = -this.$m_mass$ * this.$m_J$.$Compute$($b1$$6$$.$m_linearVelocity$, $b1$$6$$.$m_angularVelocity$, $b2$$5$$.$m_linearVelocity$, $b2$$5$$.$m_angularVelocity$);
  this.$m_impulse$ += $impulse$$3$$;
  $b1$$6$$.$m_linearVelocity$.x += $b1$$6$$.$m_invMass$ * $impulse$$3$$ * this.$m_J$.$linear1$.x;
  $b1$$6$$.$m_linearVelocity$.y += $b1$$6$$.$m_invMass$ * $impulse$$3$$ * this.$m_J$.$linear1$.y;
  $b1$$6$$.$m_angularVelocity$ += $b1$$6$$.$m_invI$ * $impulse$$3$$ * this.$m_J$.$angular1$;
  $b2$$5$$.$m_linearVelocity$.x += $b2$$5$$.$m_invMass$ * $impulse$$3$$ * this.$m_J$.$linear2$.x;
  $b2$$5$$.$m_linearVelocity$.y += $b2$$5$$.$m_invMass$ * $impulse$$3$$ * this.$m_J$.$linear2$.y;
  $b2$$5$$.$m_angularVelocity$ += $b2$$5$$.$m_invI$ * $impulse$$3$$ * this.$m_J$.$angular2$
}, $SolvePositionConstraints$:function() {
  var $b1$$7$$ = this.$m_body1$, $b2$$6$$ = this.$m_body2$, $impulse$$4$$ = -this.$m_mass$ * (this.$m_constant$ - ((this.$m_revolute1$ ? this.$m_revolute1$.$GetJointAngle$() : this.$m_prismatic1$.$GetJointTranslation$()) + this.$m_ratio$ * (this.$m_revolute2$ ? this.$m_revolute2$.$GetJointAngle$() : this.$m_prismatic2$.$GetJointTranslation$())));
  $b1$$7$$.$m_position$.x += $b1$$7$$.$m_invMass$ * $impulse$$4$$ * this.$m_J$.$linear1$.x;
  $b1$$7$$.$m_position$.y += $b1$$7$$.$m_invMass$ * $impulse$$4$$ * this.$m_J$.$linear1$.y;
  $b1$$7$$.$m_rotation$ += $b1$$7$$.$m_invI$ * $impulse$$4$$ * this.$m_J$.$angular1$;
  $b2$$6$$.$m_position$.x += $b2$$6$$.$m_invMass$ * $impulse$$4$$ * this.$m_J$.$linear2$.x;
  $b2$$6$$.$m_position$.y += $b2$$6$$.$m_invMass$ * $impulse$$4$$ * this.$m_J$.$linear2$.y;
  $b2$$6$$.$m_rotation$ += $b2$$6$$.$m_invI$ * $impulse$$4$$ * this.$m_J$.$angular2$;
  $b1$$7$$.$m_R$.$Set$($b1$$7$$.$m_rotation$);
  $b2$$6$$.$m_R$.$Set$($b2$$6$$.$m_rotation$);
  return true
}, $m_ground1$:null, $m_ground2$:null, $m_revolute1$:null, $m_prismatic1$:null, $m_revolute2$:null, $m_prismatic2$:null, $m_groundAnchor1$:new $b2Vec2$$, $m_groundAnchor2$:new $b2Vec2$$, $m_localAnchor1$:new $b2Vec2$$, $m_localAnchor2$:new $b2Vec2$$, $m_J$:new $b2Jacobian$$, $m_constant$:null, $m_ratio$:null, $m_mass$:null, $m_impulse$:null});
// Input 126
function $b2JointDef$$() {
  this.type = 0;
  this.$body2$ = this.$body1$ = this.$userData$ = null;
  this.$collideConnected$ = false
}
$b2JointDef$$.prototype = {type:0, $userData$:null, $body1$:null, $body2$:null, $collideConnected$:null};
// Input 127
function $b2MouseJoint$$($def$$7$$) {
  this.$m_node1$ = new $b2JointNode$$;
  this.$m_node2$ = new $b2JointNode$$;
  this.$m_type$ = $def$$7$$.type;
  this.$m_next$ = this.$m_prev$ = null;
  this.$m_body1$ = $def$$7$$.$body1$;
  this.$m_body2$ = $def$$7$$.$body2$;
  this.$m_collideConnected$ = $def$$7$$.$collideConnected$;
  this.$m_islandFlag$ = false;
  this.$m_userData$ = $def$$7$$.$userData$;
  this.$K$ = new $b2Mat22$$;
  this.$K1$ = new $b2Mat22$$;
  this.$K2$ = new $b2Mat22$$;
  this.$m_localAnchor$ = new $b2Vec2$$;
  this.$m_target$ = new $b2Vec2$$;
  this.$m_impulse$ = new $b2Vec2$$;
  this.$m_ptpMass$ = new $b2Mat22$$;
  this.$m_C$ = new $b2Vec2$$;
  $JSCompiler_StaticMethods_SetV$$(this.$m_target$, $def$$7$$.target);
  var $d$$2_tX$$10$$ = this.$m_target$.x - this.$m_body2$.$m_position$.x, $k$$2_mass_tY$$2$$ = this.$m_target$.y - this.$m_body2$.$m_position$.y;
  this.$m_localAnchor$.x = $d$$2_tX$$10$$ * this.$m_body2$.$m_R$.$col1$.x + $k$$2_mass_tY$$2$$ * this.$m_body2$.$m_R$.$col1$.y;
  this.$m_localAnchor$.y = $d$$2_tX$$10$$ * this.$m_body2$.$m_R$.$col2$.x + $k$$2_mass_tY$$2$$ * this.$m_body2$.$m_R$.$col2$.y;
  this.$m_maxForce$ = $def$$7$$.$maxForce$;
  this.$m_impulse$.$SetZero$();
  $k$$2_mass_tY$$2$$ = this.$m_body2$.$m_mass$;
  var $omega$$ = 2 * $b2Settings$b2_pi$$ * $def$$7$$.$frequencyHz$;
  $d$$2_tX$$10$$ = 2 * $k$$2_mass_tY$$2$$ * $def$$7$$.$dampingRatio$ * $omega$$;
  $k$$2_mass_tY$$2$$ = $k$$2_mass_tY$$2$$ * $omega$$ * $omega$$;
  this.$m_gamma$ = 1 / ($d$$2_tX$$10$$ + $def$$7$$.$timeStep$ * $k$$2_mass_tY$$2$$);
  this.$m_beta$ = $def$$7$$.$timeStep$ * $k$$2_mass_tY$$2$$ / ($d$$2_tX$$10$$ + $def$$7$$.$timeStep$ * $k$$2_mass_tY$$2$$)
}
Object.extend($b2MouseJoint$$.prototype, $b2Joint$$.prototype);
Object.extend($b2MouseJoint$$.prototype, {$GetAnchor1$:$JSCompiler_get$$("$m_target$"), $GetAnchor2$:function() {
  var $tVec$$13$$ = $b2Math$b2MulMV$$(this.$m_body2$.$m_R$, this.$m_localAnchor$);
  $JSCompiler_StaticMethods_Add$$($tVec$$13$$, this.$m_body2$.$m_position$);
  return $tVec$$13$$
}, $GetReactionForce$:function($invTimeStep$$6$$) {
  var $F$$1$$ = new $b2Vec2$$;
  $JSCompiler_StaticMethods_SetV$$($F$$1$$, this.$m_impulse$);
  $JSCompiler_StaticMethods_Multiply$$($F$$1$$, $invTimeStep$$6$$);
  return $F$$1$$
}, $GetReactionTorque$:$JSCompiler_returnArg$$(0), $SetTarget$:function($target$$17$$) {
  this.$m_body2$.$WakeUp$();
  this.$m_target$ = $target$$17$$
}, $K$:new $b2Mat22$$, $K1$:new $b2Mat22$$, $K2$:new $b2Mat22$$, $PrepareVelocitySolver$:function() {
  var $b$$39$$ = this.$m_body2$, $rY$$2_tMat$$15$$;
  $rY$$2_tMat$$15$$ = $b$$39$$.$m_R$;
  var $rX$$2$$ = $rY$$2_tMat$$15$$.$col1$.x * this.$m_localAnchor$.x + $rY$$2_tMat$$15$$.$col2$.x * this.$m_localAnchor$.y;
  $rY$$2_tMat$$15$$ = $rY$$2_tMat$$15$$.$col1$.y * this.$m_localAnchor$.x + $rY$$2_tMat$$15$$.$col2$.y * this.$m_localAnchor$.y;
  var $invMass$$ = $b$$39$$.$m_invMass$, $invI$$ = $b$$39$$.$m_invI$;
  this.$K1$.$col1$.x = $invMass$$;
  this.$K1$.$col2$.x = 0;
  this.$K1$.$col1$.y = 0;
  this.$K1$.$col2$.y = $invMass$$;
  this.$K2$.$col1$.x = $invI$$ * $rY$$2_tMat$$15$$ * $rY$$2_tMat$$15$$;
  this.$K2$.$col2$.x = -$invI$$ * $rX$$2$$ * $rY$$2_tMat$$15$$;
  this.$K2$.$col1$.y = -$invI$$ * $rX$$2$$ * $rY$$2_tMat$$15$$;
  this.$K2$.$col2$.y = $invI$$ * $rX$$2$$ * $rX$$2$$;
  $JSCompiler_StaticMethods_SetM$$(this.$K$, this.$K1$);
  $JSCompiler_StaticMethods_AddM$$(this.$K$, this.$K2$);
  this.$K$.$col1$.x += this.$m_gamma$;
  this.$K$.$col2$.y += this.$m_gamma$;
  $JSCompiler_StaticMethods_Invert$$(this.$K$, this.$m_ptpMass$);
  this.$m_C$.x = $b$$39$$.$m_position$.x + $rX$$2$$ - this.$m_target$.x;
  this.$m_C$.y = $b$$39$$.$m_position$.y + $rY$$2_tMat$$15$$ - this.$m_target$.y;
  $b$$39$$.$m_angularVelocity$ *= 0.98;
  var $PX$$5$$ = this.$m_impulse$.x, $PY$$5$$ = this.$m_impulse$.y;
  $b$$39$$.$m_linearVelocity$.x += $invMass$$ * $PX$$5$$;
  $b$$39$$.$m_linearVelocity$.y += $invMass$$ * $PY$$5$$;
  $b$$39$$.$m_angularVelocity$ += $invI$$ * ($rX$$2$$ * $PY$$5$$ - $rY$$2_tMat$$15$$ * $PX$$5$$)
}, $SolveVelocityConstraints$:function($step$$4$$) {
  var $body$$11$$ = this.$m_body2$, $oldImpulseX_tMat$$16$$;
  $oldImpulseX_tMat$$16$$ = $body$$11$$.$m_R$;
  var $rX$$3$$ = $oldImpulseX_tMat$$16$$.$col1$.x * this.$m_localAnchor$.x + $oldImpulseX_tMat$$16$$.$col2$.x * this.$m_localAnchor$.y, $rY$$3$$ = $oldImpulseX_tMat$$16$$.$col1$.y * this.$m_localAnchor$.x + $oldImpulseX_tMat$$16$$.$col2$.y * this.$m_localAnchor$.y, $CdotX_oldImpulseY_tX$$11$$ = $body$$11$$.$m_linearVelocity$.x + -$body$$11$$.$m_angularVelocity$ * $rY$$3$$, $CdotY_impulseX$$1_length$$11$$ = $body$$11$$.$m_linearVelocity$.y + $body$$11$$.$m_angularVelocity$ * $rX$$3$$;
  $oldImpulseX_tMat$$16$$ = this.$m_ptpMass$;
  $CdotX_oldImpulseY_tX$$11$$ = $CdotX_oldImpulseY_tX$$11$$ + this.$m_beta$ * $step$$4$$.$inv_dt$ * this.$m_C$.x + this.$m_gamma$ * this.$m_impulse$.x;
  var $impulseY$$1_tY$$3$$ = $CdotY_impulseX$$1_length$$11$$ + this.$m_beta$ * $step$$4$$.$inv_dt$ * this.$m_C$.y + this.$m_gamma$ * this.$m_impulse$.y;
  $CdotY_impulseX$$1_length$$11$$ = -($oldImpulseX_tMat$$16$$.$col1$.x * $CdotX_oldImpulseY_tX$$11$$ + $oldImpulseX_tMat$$16$$.$col2$.x * $impulseY$$1_tY$$3$$);
  $impulseY$$1_tY$$3$$ = -($oldImpulseX_tMat$$16$$.$col1$.y * $CdotX_oldImpulseY_tX$$11$$ + $oldImpulseX_tMat$$16$$.$col2$.y * $impulseY$$1_tY$$3$$);
  $oldImpulseX_tMat$$16$$ = this.$m_impulse$.x;
  $CdotX_oldImpulseY_tX$$11$$ = this.$m_impulse$.y;
  this.$m_impulse$.x += $CdotY_impulseX$$1_length$$11$$;
  this.$m_impulse$.y += $impulseY$$1_tY$$3$$;
  $CdotY_impulseX$$1_length$$11$$ = $JSCompiler_StaticMethods_Length$$(this.$m_impulse$);
  $CdotY_impulseX$$1_length$$11$$ > $step$$4$$.$dt$ * this.$m_maxForce$ && $JSCompiler_StaticMethods_Multiply$$(this.$m_impulse$, $step$$4$$.$dt$ * this.$m_maxForce$ / $CdotY_impulseX$$1_length$$11$$);
  $CdotY_impulseX$$1_length$$11$$ = this.$m_impulse$.x - $oldImpulseX_tMat$$16$$;
  $impulseY$$1_tY$$3$$ = this.$m_impulse$.y - $CdotX_oldImpulseY_tX$$11$$;
  $body$$11$$.$m_linearVelocity$.x += $body$$11$$.$m_invMass$ * $CdotY_impulseX$$1_length$$11$$;
  $body$$11$$.$m_linearVelocity$.y += $body$$11$$.$m_invMass$ * $impulseY$$1_tY$$3$$;
  $body$$11$$.$m_angularVelocity$ += $body$$11$$.$m_invI$ * ($rX$$3$$ * $impulseY$$1_tY$$3$$ - $rY$$3$$ * $CdotY_impulseX$$1_length$$11$$)
}, $SolvePositionConstraints$:$JSCompiler_returnArg$$(true), $m_localAnchor$:new $b2Vec2$$, $m_target$:new $b2Vec2$$, $m_impulse$:new $b2Vec2$$, $m_ptpMass$:new $b2Mat22$$, $m_C$:new $b2Vec2$$, $m_maxForce$:null, $m_beta$:null, $m_gamma$:null});
// Input 128
function $b2PrismaticJoint$$($def$$8$$) {
  this.$m_node1$ = new $b2JointNode$$;
  this.$m_node2$ = new $b2JointNode$$;
  this.$m_type$ = $def$$8$$.type;
  this.$m_next$ = this.$m_prev$ = null;
  this.$m_body1$ = $def$$8$$.$body1$;
  this.$m_body2$ = $def$$8$$.$body2$;
  this.$m_collideConnected$ = $def$$8$$.$collideConnected$;
  this.$m_islandFlag$ = false;
  this.$m_userData$ = $def$$8$$.$userData$;
  this.$m_localAnchor1$ = new $b2Vec2$$;
  this.$m_localAnchor2$ = new $b2Vec2$$;
  this.$m_localXAxis1$ = new $b2Vec2$$;
  this.$m_localYAxis1$ = new $b2Vec2$$;
  this.$m_linearJacobian$ = new $b2Jacobian$$;
  this.$m_motorJacobian$ = new $b2Jacobian$$;
  var $tMat$$17$$, $tX$$12$$, $tY$$4$$;
  $tMat$$17$$ = this.$m_body1$.$m_R$;
  $tX$$12$$ = $def$$8$$.$anchorPoint$.x - this.$m_body1$.$m_position$.x;
  $tY$$4$$ = $def$$8$$.$anchorPoint$.y - this.$m_body1$.$m_position$.y;
  this.$m_localAnchor1$.$Set$($tX$$12$$ * $tMat$$17$$.$col1$.x + $tY$$4$$ * $tMat$$17$$.$col1$.y, $tX$$12$$ * $tMat$$17$$.$col2$.x + $tY$$4$$ * $tMat$$17$$.$col2$.y);
  $tMat$$17$$ = this.$m_body2$.$m_R$;
  $tX$$12$$ = $def$$8$$.$anchorPoint$.x - this.$m_body2$.$m_position$.x;
  $tY$$4$$ = $def$$8$$.$anchorPoint$.y - this.$m_body2$.$m_position$.y;
  this.$m_localAnchor2$.$Set$($tX$$12$$ * $tMat$$17$$.$col1$.x + $tY$$4$$ * $tMat$$17$$.$col1$.y, $tX$$12$$ * $tMat$$17$$.$col2$.x + $tY$$4$$ * $tMat$$17$$.$col2$.y);
  $tMat$$17$$ = this.$m_body1$.$m_R$;
  $tX$$12$$ = $def$$8$$.axis.x;
  $tY$$4$$ = $def$$8$$.axis.y;
  this.$m_localXAxis1$.$Set$($tX$$12$$ * $tMat$$17$$.$col1$.x + $tY$$4$$ * $tMat$$17$$.$col1$.y, $tX$$12$$ * $tMat$$17$$.$col2$.x + $tY$$4$$ * $tMat$$17$$.$col2$.y);
  this.$m_localYAxis1$.x = -this.$m_localXAxis1$.y;
  this.$m_localYAxis1$.y = this.$m_localXAxis1$.x;
  this.$m_initialAngle$ = this.$m_body2$.$m_rotation$ - this.$m_body1$.$m_rotation$;
  this.$m_linearJacobian$.$SetZero$();
  this.$m_angularImpulse$ = this.$m_angularMass$ = this.$m_linearImpulse$ = this.$m_linearMass$ = 0;
  this.$m_motorJacobian$.$SetZero$();
  this.$m_limitPositionImpulse$ = this.$m_limitImpulse$ = this.$m_motorImpulse$ = this.$m_motorMass$ = 0;
  this.$m_lowerTranslation$ = $def$$8$$.$lowerTranslation$;
  this.$m_upperTranslation$ = $def$$8$$.$upperTranslation$;
  this.$m_maxMotorForce$ = $def$$8$$.$motorForce$;
  this.$m_motorSpeed$ = $def$$8$$.$motorSpeed$;
  this.$m_enableLimit$ = $def$$8$$.$enableLimit$;
  this.$m_enableMotor$ = $def$$8$$.$enableMotor$
}
Object.extend($b2PrismaticJoint$$.prototype, $b2Joint$$.prototype);
Object.extend($b2PrismaticJoint$$.prototype, {$GetAnchor1$:function() {
  var $b1$$8$$ = this.$m_body1$, $tVec$$14$$ = new $b2Vec2$$;
  $JSCompiler_StaticMethods_SetV$$($tVec$$14$$, this.$m_localAnchor1$);
  $JSCompiler_StaticMethods_MulM$$($tVec$$14$$, $b1$$8$$.$m_R$);
  $JSCompiler_StaticMethods_Add$$($tVec$$14$$, $b1$$8$$.$m_position$);
  return $tVec$$14$$
}, $GetAnchor2$:function() {
  var $b2$$7$$ = this.$m_body2$, $tVec$$15$$ = new $b2Vec2$$;
  $JSCompiler_StaticMethods_SetV$$($tVec$$15$$, this.$m_localAnchor2$);
  $JSCompiler_StaticMethods_MulM$$($tVec$$15$$, $b2$$7$$.$m_R$);
  $JSCompiler_StaticMethods_Add$$($tVec$$15$$, $b2$$7$$.$m_position$);
  return $tVec$$15$$
}, $GetJointTranslation$:function() {
  var $b1$$9$$ = this.$m_body1$, $b2$$8_dY$$10$$ = this.$m_body2$, $tMat$$18$$;
  $tMat$$18$$ = $b1$$9$$.$m_R$;
  var $dX$$10_r1X$$7$$ = $tMat$$18$$.$col1$.x * this.$m_localAnchor1$.x + $tMat$$18$$.$col2$.x * this.$m_localAnchor1$.y, $r1Y$$7$$ = $tMat$$18$$.$col1$.y * this.$m_localAnchor1$.x + $tMat$$18$$.$col2$.y * this.$m_localAnchor1$.y;
  $tMat$$18$$ = $b2$$8_dY$$10$$.$m_R$;
  $dX$$10_r1X$$7$$ = $b2$$8_dY$$10$$.$m_position$.x + ($tMat$$18$$.$col1$.x * this.$m_localAnchor2$.x + $tMat$$18$$.$col2$.x * this.$m_localAnchor2$.y) - ($b1$$9$$.$m_position$.x + $dX$$10_r1X$$7$$);
  $b2$$8_dY$$10$$ = $b2$$8_dY$$10$$.$m_position$.y + ($tMat$$18$$.$col1$.y * this.$m_localAnchor2$.x + $tMat$$18$$.$col2$.y * this.$m_localAnchor2$.y) - ($b1$$9$$.$m_position$.y + $r1Y$$7$$);
  $tMat$$18$$ = $b1$$9$$.$m_R$;
  return($tMat$$18$$.$col1$.x * this.$m_localXAxis1$.x + $tMat$$18$$.$col2$.x * this.$m_localXAxis1$.y) * $dX$$10_r1X$$7$$ + ($tMat$$18$$.$col1$.y * this.$m_localXAxis1$.x + $tMat$$18$$.$col2$.y * this.$m_localXAxis1$.y) * $b2$$8_dY$$10$$
}, $GetJointSpeed$:function() {
  var $b1$$10_w1$$1$$ = this.$m_body1$, $b2$$9_w2$$1$$ = this.$m_body2$, $ax1Y$$1_tMat$$19$$;
  $ax1Y$$1_tMat$$19$$ = $b1$$10_w1$$1$$.$m_R$;
  var $r1X$$8$$ = $ax1Y$$1_tMat$$19$$.$col1$.x * this.$m_localAnchor1$.x + $ax1Y$$1_tMat$$19$$.$col2$.x * this.$m_localAnchor1$.y, $r1Y$$8$$ = $ax1Y$$1_tMat$$19$$.$col1$.y * this.$m_localAnchor1$.x + $ax1Y$$1_tMat$$19$$.$col2$.y * this.$m_localAnchor1$.y;
  $ax1Y$$1_tMat$$19$$ = $b2$$9_w2$$1$$.$m_R$;
  var $r2X$$8$$ = $ax1Y$$1_tMat$$19$$.$col1$.x * this.$m_localAnchor2$.x + $ax1Y$$1_tMat$$19$$.$col2$.x * this.$m_localAnchor2$.y, $r2Y$$8$$ = $ax1Y$$1_tMat$$19$$.$col1$.y * this.$m_localAnchor2$.x + $ax1Y$$1_tMat$$19$$.$col2$.y * this.$m_localAnchor2$.y, $dX$$11$$ = $b2$$9_w2$$1$$.$m_position$.x + $r2X$$8$$ - ($b1$$10_w1$$1$$.$m_position$.x + $r1X$$8$$), $dY$$11$$ = $b2$$9_w2$$1$$.$m_position$.y + $r2Y$$8$$ - ($b1$$10_w1$$1$$.$m_position$.y + $r1Y$$8$$);
  $ax1Y$$1_tMat$$19$$ = $b1$$10_w1$$1$$.$m_R$;
  var $ax1X$$1$$ = $ax1Y$$1_tMat$$19$$.$col1$.x * this.$m_localXAxis1$.x + $ax1Y$$1_tMat$$19$$.$col2$.x * this.$m_localXAxis1$.y;
  $ax1Y$$1_tMat$$19$$ = $ax1Y$$1_tMat$$19$$.$col1$.y * this.$m_localXAxis1$.x + $ax1Y$$1_tMat$$19$$.$col2$.y * this.$m_localXAxis1$.y;
  var $v1$$2$$ = $b1$$10_w1$$1$$.$m_linearVelocity$, $v2$$2$$ = $b2$$9_w2$$1$$.$m_linearVelocity$;
  $b1$$10_w1$$1$$ = $b1$$10_w1$$1$$.$m_angularVelocity$;
  $b2$$9_w2$$1$$ = $b2$$9_w2$$1$$.$m_angularVelocity$;
  return $dX$$11$$ * -$b1$$10_w1$$1$$ * $ax1Y$$1_tMat$$19$$ + $dY$$11$$ * $b1$$10_w1$$1$$ * $ax1X$$1$$ + ($ax1X$$1$$ * ($v2$$2$$.x + -$b2$$9_w2$$1$$ * $r2Y$$8$$ - $v1$$2$$.x - -$b1$$10_w1$$1$$ * $r1Y$$8$$) + $ax1Y$$1_tMat$$19$$ * ($v2$$2$$.y + $b2$$9_w2$$1$$ * $r2X$$8$$ - $v1$$2$$.y - $b1$$10_w1$$1$$ * $r1X$$8$$))
}, $GetMotorForce$:function($invTimeStep$$8$$) {
  return $invTimeStep$$8$$ * this.$m_motorImpulse$
}, $SetMotorSpeed$:function($speed$$1$$) {
  this.$m_motorSpeed$ = $speed$$1$$
}, $SetMotorForce$:function($force$$1$$) {
  this.$m_maxMotorForce$ = $force$$1$$
}, $GetReactionForce$:function($invTimeStep$$9_tImp$$) {
  $invTimeStep$$9_tImp$$ = $invTimeStep$$9_tImp$$ * this.$m_limitImpulse$;
  var $tMat$$20$$;
  $tMat$$20$$ = this.$m_body1$.$m_R$;
  return new $b2Vec2$$($invTimeStep$$9_tImp$$ * ($tMat$$20$$.$col1$.x * this.$m_localXAxis1$.x + $tMat$$20$$.$col2$.x * this.$m_localXAxis1$.y) + $invTimeStep$$9_tImp$$ * ($tMat$$20$$.$col1$.x * this.$m_localYAxis1$.x + $tMat$$20$$.$col2$.x * this.$m_localYAxis1$.y), $invTimeStep$$9_tImp$$ * ($tMat$$20$$.$col1$.y * this.$m_localXAxis1$.x + $tMat$$20$$.$col2$.y * this.$m_localXAxis1$.y) + $invTimeStep$$9_tImp$$ * ($tMat$$20$$.$col1$.y * this.$m_localYAxis1$.x + $tMat$$20$$.$col2$.y * this.$m_localYAxis1$.y))
}, $GetReactionTorque$:function($invTimeStep$$10$$) {
  return $invTimeStep$$10$$ * this.$m_angularImpulse$
}, $PrepareVelocitySolver$:function() {
  var $b1$$11$$ = this.$m_body1$, $b2$$10$$ = this.$m_body2$, $ax1Y$$3_ay1Y$$1_tMat$$21$$;
  $ax1Y$$3_ay1Y$$1_tMat$$21$$ = $b1$$11$$.$m_R$;
  var $P1Y_jointTranslation_r1X$$9$$ = $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col1$.x * this.$m_localAnchor1$.x + $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col2$.x * this.$m_localAnchor1$.y, $P2X_r1Y$$9$$ = $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col1$.y * this.$m_localAnchor1$.x + $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col2$.y * this.$m_localAnchor1$.y;
  $ax1Y$$3_ay1Y$$1_tMat$$21$$ = $b2$$10$$.$m_R$;
  var $P2Y_r2X$$9$$ = $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col1$.x * this.$m_localAnchor2$.x + $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col2$.x * this.$m_localAnchor2$.y, $L1_r2Y$$9$$ = $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col1$.y * this.$m_localAnchor2$.x + $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col2$.y * this.$m_localAnchor2$.y, $invMass1$$3$$ = $b1$$11$$.$m_invMass$, $invMass2$$3$$ = $b2$$10$$.$m_invMass$, $invI1$$3$$ = $b1$$11$$.$m_invI$, $invI2$$3$$ = $b2$$10$$.$m_invI$;
  $ax1Y$$3_ay1Y$$1_tMat$$21$$ = $b1$$11$$.$m_R$;
  var $ax1X$$3_ay1X$$1$$ = $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col1$.x * this.$m_localYAxis1$.x + $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col2$.x * this.$m_localYAxis1$.y;
  $ax1Y$$3_ay1Y$$1_tMat$$21$$ = $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col1$.y * this.$m_localYAxis1$.x + $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col2$.y * this.$m_localYAxis1$.y;
  var $L2_eX$$1$$ = $b2$$10$$.$m_position$.x + $P2Y_r2X$$9$$ - $b1$$11$$.$m_position$.x, $eY$$1$$ = $b2$$10$$.$m_position$.y + $L1_r2Y$$9$$ - $b1$$11$$.$m_position$.y;
  this.$m_linearJacobian$.$linear1$.x = -$ax1X$$3_ay1X$$1$$;
  this.$m_linearJacobian$.$linear1$.y = -$ax1Y$$3_ay1Y$$1_tMat$$21$$;
  this.$m_linearJacobian$.$linear2$.x = $ax1X$$3_ay1X$$1$$;
  this.$m_linearJacobian$.$linear2$.y = $ax1Y$$3_ay1Y$$1_tMat$$21$$;
  this.$m_linearJacobian$.$angular1$ = -($L2_eX$$1$$ * $ax1Y$$3_ay1Y$$1_tMat$$21$$ - $eY$$1$$ * $ax1X$$3_ay1X$$1$$);
  this.$m_linearJacobian$.$angular2$ = $P2Y_r2X$$9$$ * $ax1Y$$3_ay1Y$$1_tMat$$21$$ - $L1_r2Y$$9$$ * $ax1X$$3_ay1X$$1$$;
  this.$m_linearMass$ = $invMass1$$3$$ + $invI1$$3$$ * this.$m_linearJacobian$.$angular1$ * this.$m_linearJacobian$.$angular1$ + $invMass2$$3$$ + $invI2$$3$$ * this.$m_linearJacobian$.$angular2$ * this.$m_linearJacobian$.$angular2$;
  this.$m_linearMass$ = 1 / this.$m_linearMass$;
  this.$m_angularMass$ = 1 / ($invI1$$3$$ + $invI2$$3$$);
  if(this.$m_enableLimit$ || this.$m_enableMotor$) {
    $ax1Y$$3_ay1Y$$1_tMat$$21$$ = $b1$$11$$.$m_R$;
    $ax1X$$3_ay1X$$1$$ = $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col1$.x * this.$m_localXAxis1$.x + $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col2$.x * this.$m_localXAxis1$.y;
    $ax1Y$$3_ay1Y$$1_tMat$$21$$ = $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col1$.y * this.$m_localXAxis1$.x + $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col2$.y * this.$m_localXAxis1$.y;
    this.$m_motorJacobian$.$linear1$.x = -$ax1X$$3_ay1X$$1$$;
    this.$m_motorJacobian$.$linear1$.y = -$ax1Y$$3_ay1Y$$1_tMat$$21$$;
    this.$m_motorJacobian$.$linear2$.x = $ax1X$$3_ay1X$$1$$;
    this.$m_motorJacobian$.$linear2$.y = $ax1Y$$3_ay1Y$$1_tMat$$21$$;
    this.$m_motorJacobian$.$angular1$ = -($L2_eX$$1$$ * $ax1Y$$3_ay1Y$$1_tMat$$21$$ - $eY$$1$$ * $ax1X$$3_ay1X$$1$$);
    this.$m_motorJacobian$.$angular2$ = $P2Y_r2X$$9$$ * $ax1Y$$3_ay1Y$$1_tMat$$21$$ - $L1_r2Y$$9$$ * $ax1X$$3_ay1X$$1$$;
    this.$m_motorMass$ = $invMass1$$3$$ + $invI1$$3$$ * this.$m_motorJacobian$.$angular1$ * this.$m_motorJacobian$.$angular1$ + $invMass2$$3$$ + $invI2$$3$$ * this.$m_motorJacobian$.$angular2$ * this.$m_motorJacobian$.$angular2$;
    this.$m_motorMass$ = 1 / this.$m_motorMass$;
    if(this.$m_enableLimit$) {
      $P1Y_jointTranslation_r1X$$9$$ = $ax1X$$3_ay1X$$1$$ * ($L2_eX$$1$$ - $P1Y_jointTranslation_r1X$$9$$) + $ax1Y$$3_ay1Y$$1_tMat$$21$$ * ($eY$$1$$ - $P2X_r1Y$$9$$);
      if($b2Math$b2Abs$$(this.$m_upperTranslation$ - this.$m_lowerTranslation$) < 0.3) {
        this.$m_limitState$ = 3
      }else {
        if($P1Y_jointTranslation_r1X$$9$$ <= this.$m_lowerTranslation$) {
          if(this.$m_limitState$ != 1) {
            this.$m_limitImpulse$ = 0
          }
          this.$m_limitState$ = 1
        }else {
          if($P1Y_jointTranslation_r1X$$9$$ >= this.$m_upperTranslation$) {
            if(this.$m_limitState$ != 2) {
              this.$m_limitImpulse$ = 0
            }
            this.$m_limitState$ = 2
          }else {
            this.$m_limitImpulse$ = this.$m_limitState$ = 0
          }
        }
      }
    }
  }
  if(this.$m_enableMotor$ == false) {
    this.$m_motorImpulse$ = 0
  }
  if(this.$m_enableLimit$ == false) {
    this.$m_limitImpulse$ = 0
  }
  if($b2World$s_enableWarmStarting$$) {
    $P1Y_jointTranslation_r1X$$9$$ = this.$m_linearImpulse$ * this.$m_linearJacobian$.$linear1$.y + (this.$m_motorImpulse$ + this.$m_limitImpulse$) * this.$m_motorJacobian$.$linear1$.y;
    $P2X_r1Y$$9$$ = this.$m_linearImpulse$ * this.$m_linearJacobian$.$linear2$.x + (this.$m_motorImpulse$ + this.$m_limitImpulse$) * this.$m_motorJacobian$.$linear2$.x;
    $P2Y_r2X$$9$$ = this.$m_linearImpulse$ * this.$m_linearJacobian$.$linear2$.y + (this.$m_motorImpulse$ + this.$m_limitImpulse$) * this.$m_motorJacobian$.$linear2$.y;
    $L1_r2Y$$9$$ = this.$m_linearImpulse$ * this.$m_linearJacobian$.$angular1$ - this.$m_angularImpulse$ + (this.$m_motorImpulse$ + this.$m_limitImpulse$) * this.$m_motorJacobian$.$angular1$;
    $L2_eX$$1$$ = this.$m_linearImpulse$ * this.$m_linearJacobian$.$angular2$ + this.$m_angularImpulse$ + (this.$m_motorImpulse$ + this.$m_limitImpulse$) * this.$m_motorJacobian$.$angular2$;
    $b1$$11$$.$m_linearVelocity$.x += $invMass1$$3$$ * (this.$m_linearImpulse$ * this.$m_linearJacobian$.$linear1$.x + (this.$m_motorImpulse$ + this.$m_limitImpulse$) * this.$m_motorJacobian$.$linear1$.x);
    $b1$$11$$.$m_linearVelocity$.y += $invMass1$$3$$ * $P1Y_jointTranslation_r1X$$9$$;
    $b1$$11$$.$m_angularVelocity$ += $invI1$$3$$ * $L1_r2Y$$9$$;
    $b2$$10$$.$m_linearVelocity$.x += $invMass2$$3$$ * $P2X_r1Y$$9$$;
    $b2$$10$$.$m_linearVelocity$.y += $invMass2$$3$$ * $P2Y_r2X$$9$$;
    $b2$$10$$.$m_angularVelocity$ += $invI2$$3$$ * $L2_eX$$1$$
  }else {
    this.$m_motorImpulse$ = this.$m_limitImpulse$ = this.$m_angularImpulse$ = this.$m_linearImpulse$ = 0
  }
  this.$m_limitPositionImpulse$ = 0
}, $SolveVelocityConstraints$:function($oldLimitImpulse_step$$5$$) {
  var $b1$$12$$ = this.$m_body1$, $b2$$11$$ = this.$m_body2$, $invMass1$$4$$ = $b1$$12$$.$m_invMass$, $invMass2$$4$$ = $b2$$11$$.$m_invMass$, $invI1$$4$$ = $b1$$12$$.$m_invI$, $invI2$$4$$ = $b2$$11$$.$m_invI$, $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ = -this.$m_linearMass$ * this.$m_linearJacobian$.$Compute$($b1$$12$$.$m_linearVelocity$, $b1$$12$$.$m_angularVelocity$, $b2$$11$$.$m_linearVelocity$, $b2$$11$$.$m_angularVelocity$);
  this.$m_linearImpulse$ += $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$;
  $b1$$12$$.$m_linearVelocity$.x += $invMass1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_linearJacobian$.$linear1$.x;
  $b1$$12$$.$m_linearVelocity$.y += $invMass1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_linearJacobian$.$linear1$.y;
  $b1$$12$$.$m_angularVelocity$ += $invI1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_linearJacobian$.$angular1$;
  $b2$$11$$.$m_linearVelocity$.x += $invMass2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_linearJacobian$.$linear2$.x;
  $b2$$11$$.$m_linearVelocity$.y += $invMass2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_linearJacobian$.$linear2$.y;
  $b2$$11$$.$m_angularVelocity$ += $invI2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_linearJacobian$.$angular2$;
  $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ = -this.$m_angularMass$ * ($b2$$11$$.$m_angularVelocity$ - $b1$$12$$.$m_angularVelocity$);
  this.$m_angularImpulse$ += $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$;
  $b1$$12$$.$m_angularVelocity$ -= $invI1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$;
  $b2$$11$$.$m_angularVelocity$ += $invI2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$;
  if(this.$m_enableMotor$ && this.$m_limitState$ != 3) {
    $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ = -this.$m_motorMass$ * (this.$m_motorJacobian$.$Compute$($b1$$12$$.$m_linearVelocity$, $b1$$12$$.$m_angularVelocity$, $b2$$11$$.$m_linearVelocity$, $b2$$11$$.$m_angularVelocity$) - this.$m_motorSpeed$);
    var $oldMotorImpulse$$ = this.$m_motorImpulse$;
    this.$m_motorImpulse$ = $b2Math$b2Clamp$$(this.$m_motorImpulse$ + $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$, -$oldLimitImpulse_step$$5$$.$dt$ * this.$m_maxMotorForce$, $oldLimitImpulse_step$$5$$.$dt$ * this.$m_maxMotorForce$);
    $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ = this.$m_motorImpulse$ - $oldMotorImpulse$$;
    $b1$$12$$.$m_linearVelocity$.x += $invMass1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$linear1$.x;
    $b1$$12$$.$m_linearVelocity$.y += $invMass1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$linear1$.y;
    $b1$$12$$.$m_angularVelocity$ += $invI1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$angular1$;
    $b2$$11$$.$m_linearVelocity$.x += $invMass2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$linear2$.x;
    $b2$$11$$.$m_linearVelocity$.y += $invMass2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$linear2$.y;
    $b2$$11$$.$m_angularVelocity$ += $invI2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$angular2$
  }
  if(this.$m_enableLimit$ && this.$m_limitState$ != 0) {
    $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ = -this.$m_motorMass$ * this.$m_motorJacobian$.$Compute$($b1$$12$$.$m_linearVelocity$, $b1$$12$$.$m_angularVelocity$, $b2$$11$$.$m_linearVelocity$, $b2$$11$$.$m_angularVelocity$);
    if(this.$m_limitState$ == 3) {
      this.$m_limitImpulse$ += $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$
    }else {
      if(this.$m_limitState$ == 1) {
        $oldLimitImpulse_step$$5$$ = this.$m_limitImpulse$;
        this.$m_limitImpulse$ = $b2Math$b2Max$$(this.$m_limitImpulse$ + $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$, 0);
        $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ = this.$m_limitImpulse$ - $oldLimitImpulse_step$$5$$
      }else {
        if(this.$m_limitState$ == 2) {
          $oldLimitImpulse_step$$5$$ = this.$m_limitImpulse$;
          this.$m_limitImpulse$ = this.$m_limitImpulse$ + $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ < 0 ? this.$m_limitImpulse$ + $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ : 0;
          $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ = this.$m_limitImpulse$ - $oldLimitImpulse_step$$5$$
        }
      }
    }
    $b1$$12$$.$m_linearVelocity$.x += $invMass1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$linear1$.x;
    $b1$$12$$.$m_linearVelocity$.y += $invMass1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$linear1$.y;
    $b1$$12$$.$m_angularVelocity$ += $invI1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$angular1$;
    $b2$$11$$.$m_linearVelocity$.x += $invMass2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$linear2$.x;
    $b2$$11$$.$m_linearVelocity$.y += $invMass2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$linear2$.y;
    $b2$$11$$.$m_angularVelocity$ += $invI2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$angular2$
  }
}, $SolvePositionConstraints$:function() {
  var $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$, $angularC_linearImpulse$$1_oldLimitImpulse$$1$$, $b1$$13$$ = this.$m_body1$, $b2$$12$$ = this.$m_body2$, $invMass1$$5$$ = $b1$$13$$.$m_invMass$, $invMass2$$5$$ = $b2$$12$$.$m_invMass$, $invI1$$5$$ = $b1$$13$$.$m_invI$, $invI2$$5$$ = $b2$$12$$.$m_invI$, $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$;
  $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $b1$$13$$.$m_R$;
  var $dY$$13_p1X$$5_r1X$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.x * this.$m_localAnchor1$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.x * this.$m_localAnchor1$.y, $p1Y$$5_r1Y$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.y * this.$m_localAnchor1$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.y * this.$m_localAnchor1$.y;
  $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $b2$$12$$.$m_R$;
  $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.x * this.$m_localAnchor2$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.x * this.$m_localAnchor2$.y;
  $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.y * this.$m_localAnchor2$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.y * this.$m_localAnchor2$.y;
  $dY$$13_p1X$$5_r1X$$10$$ = $b1$$13$$.$m_position$.x + $dY$$13_p1X$$5_r1X$$10$$;
  $p1Y$$5_r1Y$$10$$ = $b1$$13$$.$m_position$.y + $p1Y$$5_r1Y$$10$$;
  $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $b2$$12$$.$m_position$.x + $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$;
  $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $b2$$12$$.$m_position$.y + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$;
  $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ - $dY$$13_p1X$$5_r1X$$10$$;
  $dY$$13_p1X$$5_r1X$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ - $p1Y$$5_r1Y$$10$$;
  $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $b1$$13$$.$m_R$;
  var $linearC_positionError$$ = ($p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.x * this.$m_localYAxis1$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.x * this.$m_localYAxis1$.y) * $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ + ($p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.y * this.$m_localYAxis1$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.y * this.$m_localYAxis1$.y) * $dY$$13_p1X$$5_r1X$$10$$;
  $linearC_positionError$$ = $b2Math$b2Clamp$$($linearC_positionError$$, -6, 6);
  $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ = -this.$m_linearMass$ * $linearC_positionError$$;
  $b1$$13$$.$m_position$.x += $invMass1$$5$$ * $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ * this.$m_linearJacobian$.$linear1$.x;
  $b1$$13$$.$m_position$.y += $invMass1$$5$$ * $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ * this.$m_linearJacobian$.$linear1$.y;
  $b1$$13$$.$m_rotation$ += $invI1$$5$$ * $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ * this.$m_linearJacobian$.$angular1$;
  $b2$$12$$.$m_position$.x += $invMass2$$5$$ * $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ * this.$m_linearJacobian$.$linear2$.x;
  $b2$$12$$.$m_position$.y += $invMass2$$5$$ * $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ * this.$m_linearJacobian$.$linear2$.y;
  $b2$$12$$.$m_rotation$ += $invI2$$5$$ * $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ * this.$m_linearJacobian$.$angular2$;
  $linearC_positionError$$ = $b2Math$b2Abs$$($linearC_positionError$$);
  $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ = $b2$$12$$.$m_rotation$ - $b1$$13$$.$m_rotation$ - this.$m_initialAngle$;
  $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ = $b2Math$b2Clamp$$($angularC_linearImpulse$$1_oldLimitImpulse$$1$$, -$b2Settings$b2_maxAngularCorrection$$, $b2Settings$b2_maxAngularCorrection$$);
  var $angularError_angularImpulse$$1$$ = -this.$m_angularMass$ * $angularC_linearImpulse$$1_oldLimitImpulse$$1$$;
  $b1$$13$$.$m_rotation$ -= $b1$$13$$.$m_invI$ * $angularError_angularImpulse$$1$$;
  $b1$$13$$.$m_R$.$Set$($b1$$13$$.$m_rotation$);
  $b2$$12$$.$m_rotation$ += $b2$$12$$.$m_invI$ * $angularError_angularImpulse$$1$$;
  $b2$$12$$.$m_R$.$Set$($b2$$12$$.$m_rotation$);
  $angularError_angularImpulse$$1$$ = $b2Math$b2Abs$$($angularC_linearImpulse$$1_oldLimitImpulse$$1$$);
  if(this.$m_enableLimit$ && this.$m_limitState$ != 0) {
    $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $b1$$13$$.$m_R$;
    $dY$$13_p1X$$5_r1X$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.x * this.$m_localAnchor1$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.x * this.$m_localAnchor1$.y;
    $p1Y$$5_r1Y$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.y * this.$m_localAnchor1$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.y * this.$m_localAnchor1$.y;
    $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $b2$$12$$.$m_R$;
    $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.x * this.$m_localAnchor2$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.x * this.$m_localAnchor2$.y;
    $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.y * this.$m_localAnchor2$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.y * this.$m_localAnchor2$.y;
    $dY$$13_p1X$$5_r1X$$10$$ = $b1$$13$$.$m_position$.x + $dY$$13_p1X$$5_r1X$$10$$;
    $p1Y$$5_r1Y$$10$$ = $b1$$13$$.$m_position$.y + $p1Y$$5_r1Y$$10$$;
    $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $b2$$12$$.$m_position$.x + $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$;
    $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $b2$$12$$.$m_position$.y + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$;
    $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ - $dY$$13_p1X$$5_r1X$$10$$;
    $dY$$13_p1X$$5_r1X$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ - $p1Y$$5_r1Y$$10$$;
    $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $b1$$13$$.$m_R$;
    $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = ($p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.x * this.$m_localXAxis1$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.x * this.$m_localXAxis1$.y) * $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ + ($p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.y * this.$m_localXAxis1$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.y * this.$m_localXAxis1$.y) * $dY$$13_p1X$$5_r1X$$10$$;
    $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = 0;
    if(this.$m_limitState$ == 3) {
      $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $b2Math$b2Clamp$$($p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$, -6, 6);
      $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = -this.$m_motorMass$ * $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$;
      $linearC_positionError$$ = $b2Math$b2Max$$($linearC_positionError$$, $b2Math$b2Abs$$($angularC_linearImpulse$$1_oldLimitImpulse$$1$$))
    }else {
      if(this.$m_limitState$ == 1) {
        $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ - this.$m_lowerTranslation$;
        $linearC_positionError$$ = $b2Math$b2Max$$($linearC_positionError$$, -$dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$);
        $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $b2Math$b2Clamp$$($dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ + 0.15, -6, 0);
        $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = -this.$m_motorMass$ * $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$;
        $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ = this.$m_limitPositionImpulse$;
        this.$m_limitPositionImpulse$ = $b2Math$b2Max$$(this.$m_limitPositionImpulse$ + $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$, 0);
        $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = this.$m_limitPositionImpulse$ - $angularC_linearImpulse$$1_oldLimitImpulse$$1$$
      }else {
        if(this.$m_limitState$ == 2) {
          $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ - this.$m_upperTranslation$;
          $linearC_positionError$$ = $b2Math$b2Max$$($linearC_positionError$$, $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$);
          $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $b2Math$b2Clamp$$($dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ - 0.15, 0, 6);
          $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = -this.$m_motorMass$ * $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$;
          $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ = this.$m_limitPositionImpulse$;
          this.$m_limitPositionImpulse$ = this.$m_limitPositionImpulse$ + $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ < 0 ? this.$m_limitPositionImpulse$ + $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ : 0;
          $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = this.$m_limitPositionImpulse$ - $angularC_linearImpulse$$1_oldLimitImpulse$$1$$
        }
      }
    }
    $b1$$13$$.$m_position$.x += $invMass1$$5$$ * $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ * this.$m_motorJacobian$.$linear1$.x;
    $b1$$13$$.$m_position$.y += $invMass1$$5$$ * $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ * this.$m_motorJacobian$.$linear1$.y;
    $b1$$13$$.$m_rotation$ += $invI1$$5$$ * $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ * this.$m_motorJacobian$.$angular1$;
    $b1$$13$$.$m_R$.$Set$($b1$$13$$.$m_rotation$);
    $b2$$12$$.$m_position$.x += $invMass2$$5$$ * $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ * this.$m_motorJacobian$.$linear2$.x;
    $b2$$12$$.$m_position$.y += $invMass2$$5$$ * $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ * this.$m_motorJacobian$.$linear2$.y;
    $b2$$12$$.$m_rotation$ += $invI2$$5$$ * $dX$$13_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ * this.$m_motorJacobian$.$angular2$;
    $b2$$12$$.$m_R$.$Set$($b2$$12$$.$m_rotation$)
  }
  return $linearC_positionError$$ <= 0.15 && $angularError_angularImpulse$$1$$ <= $b2Settings$b2_angularSlop$$
}, $m_localAnchor1$:new $b2Vec2$$, $m_localAnchor2$:new $b2Vec2$$, $m_localXAxis1$:new $b2Vec2$$, $m_localYAxis1$:new $b2Vec2$$, $m_initialAngle$:null, $m_linearJacobian$:new $b2Jacobian$$, $m_linearMass$:null, $m_linearImpulse$:null, $m_angularMass$:null, $m_angularImpulse$:null, $m_motorJacobian$:new $b2Jacobian$$, $m_motorMass$:null, $m_motorImpulse$:null, $m_limitImpulse$:null, $m_limitPositionImpulse$:null, $m_lowerTranslation$:null, $m_upperTranslation$:null, $m_maxMotorForce$:null, $m_motorSpeed$:null, 
$m_enableLimit$:null, $m_enableMotor$:null, $m_limitState$:0});
// Input 129
function $b2PrismaticJointDef$$() {
  this.type = 0;
  this.$body2$ = this.$body1$ = this.$userData$ = null;
  this.$collideConnected$ = false;
  this.type = 2;
  this.$anchorPoint$ = new $b2Vec2$$(0, 0);
  this.axis = new $b2Vec2$$(0, 0);
  this.$motorSpeed$ = this.$motorForce$ = this.$upperTranslation$ = this.$lowerTranslation$ = 0;
  this.$enableMotor$ = this.$enableLimit$ = false
}
Object.extend($b2PrismaticJointDef$$.prototype, $b2JointDef$$.prototype);
Object.extend($b2PrismaticJointDef$$.prototype, {$anchorPoint$:null, axis:null, $lowerTranslation$:null, $upperTranslation$:null, $motorForce$:null, $motorSpeed$:null, $enableLimit$:null, $enableMotor$:null});
// Input 130
function $b2PulleyJoint$$($def$$9$$) {
  this.$m_node1$ = new $b2JointNode$$;
  this.$m_node2$ = new $b2JointNode$$;
  this.$m_type$ = $def$$9$$.type;
  this.$m_next$ = this.$m_prev$ = null;
  this.$m_body1$ = $def$$9$$.$body1$;
  this.$m_body2$ = $def$$9$$.$body2$;
  this.$m_collideConnected$ = $def$$9$$.$collideConnected$;
  this.$m_islandFlag$ = false;
  this.$m_userData$ = $def$$9$$.$userData$;
  this.$m_groundAnchor1$ = new $b2Vec2$$;
  this.$m_groundAnchor2$ = new $b2Vec2$$;
  this.$m_localAnchor1$ = new $b2Vec2$$;
  this.$m_localAnchor2$ = new $b2Vec2$$;
  this.$m_u1$ = new $b2Vec2$$;
  this.$m_u2$ = new $b2Vec2$$;
  var $d1Len_tMat$$23$$, $d2Len_length2_tX$$13$$, $length1_tY$$5$$;
  this.$m_ground$ = this.$m_body1$.$m_world$.$m_groundBody$;
  this.$m_groundAnchor1$.x = $def$$9$$.$groundPoint1$.x - this.$m_ground$.$m_position$.x;
  this.$m_groundAnchor1$.y = $def$$9$$.$groundPoint1$.y - this.$m_ground$.$m_position$.y;
  this.$m_groundAnchor2$.x = $def$$9$$.$groundPoint2$.x - this.$m_ground$.$m_position$.x;
  this.$m_groundAnchor2$.y = $def$$9$$.$groundPoint2$.y - this.$m_ground$.$m_position$.y;
  $d1Len_tMat$$23$$ = this.$m_body1$.$m_R$;
  $d2Len_length2_tX$$13$$ = $def$$9$$.$anchorPoint1$.x - this.$m_body1$.$m_position$.x;
  $length1_tY$$5$$ = $def$$9$$.$anchorPoint1$.y - this.$m_body1$.$m_position$.y;
  this.$m_localAnchor1$.x = $d2Len_length2_tX$$13$$ * $d1Len_tMat$$23$$.$col1$.x + $length1_tY$$5$$ * $d1Len_tMat$$23$$.$col1$.y;
  this.$m_localAnchor1$.y = $d2Len_length2_tX$$13$$ * $d1Len_tMat$$23$$.$col2$.x + $length1_tY$$5$$ * $d1Len_tMat$$23$$.$col2$.y;
  $d1Len_tMat$$23$$ = this.$m_body2$.$m_R$;
  $d2Len_length2_tX$$13$$ = $def$$9$$.$anchorPoint2$.x - this.$m_body2$.$m_position$.x;
  $length1_tY$$5$$ = $def$$9$$.$anchorPoint2$.y - this.$m_body2$.$m_position$.y;
  this.$m_localAnchor2$.x = $d2Len_length2_tX$$13$$ * $d1Len_tMat$$23$$.$col1$.x + $length1_tY$$5$$ * $d1Len_tMat$$23$$.$col1$.y;
  this.$m_localAnchor2$.y = $d2Len_length2_tX$$13$$ * $d1Len_tMat$$23$$.$col2$.x + $length1_tY$$5$$ * $d1Len_tMat$$23$$.$col2$.y;
  this.$m_ratio$ = $def$$9$$.$ratio$;
  $d2Len_length2_tX$$13$$ = $def$$9$$.$groundPoint1$.x - $def$$9$$.$anchorPoint1$.x;
  $length1_tY$$5$$ = $def$$9$$.$groundPoint1$.y - $def$$9$$.$anchorPoint1$.y;
  $d1Len_tMat$$23$$ = Math.sqrt($d2Len_length2_tX$$13$$ * $d2Len_length2_tX$$13$$ + $length1_tY$$5$$ * $length1_tY$$5$$);
  $d2Len_length2_tX$$13$$ = $def$$9$$.$groundPoint2$.x - $def$$9$$.$anchorPoint2$.x;
  $length1_tY$$5$$ = $def$$9$$.$groundPoint2$.y - $def$$9$$.$anchorPoint2$.y;
  $d2Len_length2_tX$$13$$ = Math.sqrt($d2Len_length2_tX$$13$$ * $d2Len_length2_tX$$13$$ + $length1_tY$$5$$ * $length1_tY$$5$$);
  $length1_tY$$5$$ = $b2Math$b2Max$$(0.5 * $b2PulleyJoint$b2_minPulleyLength$$, $d1Len_tMat$$23$$);
  $d2Len_length2_tX$$13$$ = $b2Math$b2Max$$(0.5 * $b2PulleyJoint$b2_minPulleyLength$$, $d2Len_length2_tX$$13$$);
  this.$m_constant$ = $length1_tY$$5$$ + this.$m_ratio$ * $d2Len_length2_tX$$13$$;
  this.$m_maxLength1$ = $b2Math$b2Clamp$$($def$$9$$.$maxLength1$, $length1_tY$$5$$, this.$m_constant$ - this.$m_ratio$ * $b2PulleyJoint$b2_minPulleyLength$$);
  this.$m_maxLength2$ = $b2Math$b2Clamp$$($def$$9$$.$maxLength2$, $d2Len_length2_tX$$13$$, (this.$m_constant$ - $b2PulleyJoint$b2_minPulleyLength$$) / this.$m_ratio$);
  this.$m_limitImpulse2$ = this.$m_limitImpulse1$ = this.$m_pulleyImpulse$ = 0
}
Object.extend($b2PulleyJoint$$.prototype, $b2Joint$$.prototype);
Object.extend($b2PulleyJoint$$.prototype, {$GetAnchor1$:function() {
  var $tMat$$24$$ = this.$m_body1$.$m_R$;
  return new $b2Vec2$$(this.$m_body1$.$m_position$.x + ($tMat$$24$$.$col1$.x * this.$m_localAnchor1$.x + $tMat$$24$$.$col2$.x * this.$m_localAnchor1$.y), this.$m_body1$.$m_position$.y + ($tMat$$24$$.$col1$.y * this.$m_localAnchor1$.x + $tMat$$24$$.$col2$.y * this.$m_localAnchor1$.y))
}, $GetAnchor2$:function() {
  var $tMat$$25$$ = this.$m_body2$.$m_R$;
  return new $b2Vec2$$(this.$m_body2$.$m_position$.x + ($tMat$$25$$.$col1$.x * this.$m_localAnchor2$.x + $tMat$$25$$.$col2$.x * this.$m_localAnchor2$.y), this.$m_body2$.$m_position$.y + ($tMat$$25$$.$col1$.y * this.$m_localAnchor2$.x + $tMat$$25$$.$col2$.y * this.$m_localAnchor2$.y))
}, $GetGroundPoint1$:function() {
  return new $b2Vec2$$(this.$m_ground$.$m_position$.x + this.$m_groundAnchor1$.x, this.$m_ground$.$m_position$.y + this.$m_groundAnchor1$.y)
}, $GetGroundPoint2$:function() {
  return new $b2Vec2$$(this.$m_ground$.$m_position$.x + this.$m_groundAnchor2$.x, this.$m_ground$.$m_position$.y + this.$m_groundAnchor2$.y)
}, $GetReactionForce$:function() {
  return new $b2Vec2$$
}, $GetReactionTorque$:$JSCompiler_returnArg$$(0), $GetLength1$:function() {
  var $dY$$14_tMat$$26$$;
  $dY$$14_tMat$$26$$ = this.$m_body1$.$m_R$;
  var $dX$$14$$ = this.$m_body1$.$m_position$.x + ($dY$$14_tMat$$26$$.$col1$.x * this.$m_localAnchor1$.x + $dY$$14_tMat$$26$$.$col2$.x * this.$m_localAnchor1$.y) - (this.$m_ground$.$m_position$.x + this.$m_groundAnchor1$.x);
  $dY$$14_tMat$$26$$ = this.$m_body1$.$m_position$.y + ($dY$$14_tMat$$26$$.$col1$.y * this.$m_localAnchor1$.x + $dY$$14_tMat$$26$$.$col2$.y * this.$m_localAnchor1$.y) - (this.$m_ground$.$m_position$.y + this.$m_groundAnchor1$.y);
  return Math.sqrt($dX$$14$$ * $dX$$14$$ + $dY$$14_tMat$$26$$ * $dY$$14_tMat$$26$$)
}, $GetLength2$:function() {
  var $dY$$15_tMat$$27$$;
  $dY$$15_tMat$$27$$ = this.$m_body2$.$m_R$;
  var $dX$$15$$ = this.$m_body2$.$m_position$.x + ($dY$$15_tMat$$27$$.$col1$.x * this.$m_localAnchor2$.x + $dY$$15_tMat$$27$$.$col2$.x * this.$m_localAnchor2$.y) - (this.$m_ground$.$m_position$.x + this.$m_groundAnchor2$.x);
  $dY$$15_tMat$$27$$ = this.$m_body2$.$m_position$.y + ($dY$$15_tMat$$27$$.$col1$.y * this.$m_localAnchor2$.x + $dY$$15_tMat$$27$$.$col2$.y * this.$m_localAnchor2$.y) - (this.$m_ground$.$m_position$.y + this.$m_groundAnchor2$.y);
  return Math.sqrt($dX$$15$$ * $dX$$15$$ + $dY$$15_tMat$$27$$ * $dY$$15_tMat$$27$$)
}, $GetRatio$:$JSCompiler_get$$("$m_ratio$"), $PrepareVelocitySolver$:function() {
  var $b1$$14$$ = this.$m_body1$, $b2$$13$$ = this.$m_body2$, $r2Y$$11_tMat$$28$$;
  $r2Y$$11_tMat$$28$$ = $b1$$14$$.$m_R$;
  var $r1X$$11$$ = $r2Y$$11_tMat$$28$$.$col1$.x * this.$m_localAnchor1$.x + $r2Y$$11_tMat$$28$$.$col2$.x * this.$m_localAnchor1$.y, $r1Y$$11$$ = $r2Y$$11_tMat$$28$$.$col1$.y * this.$m_localAnchor1$.x + $r2Y$$11_tMat$$28$$.$col2$.y * this.$m_localAnchor1$.y;
  $r2Y$$11_tMat$$28$$ = $b2$$13$$.$m_R$;
  var $r2X$$11$$ = $r2Y$$11_tMat$$28$$.$col1$.x * this.$m_localAnchor2$.x + $r2Y$$11_tMat$$28$$.$col2$.x * this.$m_localAnchor2$.y;
  $r2Y$$11_tMat$$28$$ = $r2Y$$11_tMat$$28$$.$col1$.y * this.$m_localAnchor2$.x + $r2Y$$11_tMat$$28$$.$col2$.y * this.$m_localAnchor2$.y;
  var $P1X$$1_cr1u1_length1$$1_p2X$$5$$ = $b2$$13$$.$m_position$.x + $r2X$$11$$, $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$ = $b2$$13$$.$m_position$.y + $r2Y$$11_tMat$$28$$, $P2X$$1_s2X$$ = this.$m_ground$.$m_position$.x + this.$m_groundAnchor2$.x, $P2Y$$1_s2Y$$ = this.$m_ground$.$m_position$.y + this.$m_groundAnchor2$.y;
  this.$m_u1$.$Set$($b1$$14$$.$m_position$.x + $r1X$$11$$ - (this.$m_ground$.$m_position$.x + this.$m_groundAnchor1$.x), $b1$$14$$.$m_position$.y + $r1Y$$11$$ - (this.$m_ground$.$m_position$.y + this.$m_groundAnchor1$.y));
  this.$m_u2$.$Set$($P1X$$1_cr1u1_length1$$1_p2X$$5$$ - $P2X$$1_s2X$$, $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$ - $P2Y$$1_s2Y$$);
  $P1X$$1_cr1u1_length1$$1_p2X$$5$$ = $JSCompiler_StaticMethods_Length$$(this.$m_u1$);
  $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$ = $JSCompiler_StaticMethods_Length$$(this.$m_u2$);
  $P1X$$1_cr1u1_length1$$1_p2X$$5$$ > 0.15 ? $JSCompiler_StaticMethods_Multiply$$(this.$m_u1$, 1 / $P1X$$1_cr1u1_length1$$1_p2X$$5$$) : this.$m_u1$.$SetZero$();
  $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$ > 0.15 ? $JSCompiler_StaticMethods_Multiply$$(this.$m_u2$, 1 / $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$) : this.$m_u2$.$SetZero$();
  if($P1X$$1_cr1u1_length1$$1_p2X$$5$$ < this.$m_maxLength1$) {
    this.$m_limitImpulse1$ = this.$m_limitState1$ = 0
  }else {
    this.$m_limitState1$ = 2;
    this.$m_limitPositionImpulse1$ = 0
  }
  if($P1Y$$1_cr2u2_length2$$1_p2Y$$5$$ < this.$m_maxLength2$) {
    this.$m_limitImpulse2$ = this.$m_limitState2$ = 0
  }else {
    this.$m_limitState2$ = 2;
    this.$m_limitPositionImpulse2$ = 0
  }
  $P1X$$1_cr1u1_length1$$1_p2X$$5$$ = $r1X$$11$$ * this.$m_u1$.y - $r1Y$$11$$ * this.$m_u1$.x;
  $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$ = $r2X$$11$$ * this.$m_u2$.y - $r2Y$$11_tMat$$28$$ * this.$m_u2$.x;
  this.$m_limitMass1$ = $b1$$14$$.$m_invMass$ + $b1$$14$$.$m_invI$ * $P1X$$1_cr1u1_length1$$1_p2X$$5$$ * $P1X$$1_cr1u1_length1$$1_p2X$$5$$;
  this.$m_limitMass2$ = $b2$$13$$.$m_invMass$ + $b2$$13$$.$m_invI$ * $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$ * $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$;
  this.$m_pulleyMass$ = this.$m_limitMass1$ + this.$m_ratio$ * this.$m_ratio$ * this.$m_limitMass2$;
  this.$m_limitMass1$ = 1 / this.$m_limitMass1$;
  this.$m_limitMass2$ = 1 / this.$m_limitMass2$;
  this.$m_pulleyMass$ = 1 / this.$m_pulleyMass$;
  $P1X$$1_cr1u1_length1$$1_p2X$$5$$ = (-this.$m_pulleyImpulse$ - this.$m_limitImpulse1$) * this.$m_u1$.x;
  $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$ = (-this.$m_pulleyImpulse$ - this.$m_limitImpulse1$) * this.$m_u1$.y;
  $P2X$$1_s2X$$ = (-this.$m_ratio$ * this.$m_pulleyImpulse$ - this.$m_limitImpulse2$) * this.$m_u2$.x;
  $P2Y$$1_s2Y$$ = (-this.$m_ratio$ * this.$m_pulleyImpulse$ - this.$m_limitImpulse2$) * this.$m_u2$.y;
  $b1$$14$$.$m_linearVelocity$.x += $b1$$14$$.$m_invMass$ * $P1X$$1_cr1u1_length1$$1_p2X$$5$$;
  $b1$$14$$.$m_linearVelocity$.y += $b1$$14$$.$m_invMass$ * $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$;
  $b1$$14$$.$m_angularVelocity$ += $b1$$14$$.$m_invI$ * ($r1X$$11$$ * $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$ - $r1Y$$11$$ * $P1X$$1_cr1u1_length1$$1_p2X$$5$$);
  $b2$$13$$.$m_linearVelocity$.x += $b2$$13$$.$m_invMass$ * $P2X$$1_s2X$$;
  $b2$$13$$.$m_linearVelocity$.y += $b2$$13$$.$m_invMass$ * $P2Y$$1_s2Y$$;
  $b2$$13$$.$m_angularVelocity$ += $b2$$13$$.$m_invI$ * ($r2X$$11$$ * $P2Y$$1_s2Y$$ - $r2Y$$11_tMat$$28$$ * $P2X$$1_s2X$$)
}, $SolveVelocityConstraints$:function() {
  var $b1$$15$$ = this.$m_body1$, $b2$$14$$ = this.$m_body2$, $r2Y$$12_tMat$$29$$;
  $r2Y$$12_tMat$$29$$ = $b1$$15$$.$m_R$;
  var $r1X$$12$$ = $r2Y$$12_tMat$$29$$.$col1$.x * this.$m_localAnchor1$.x + $r2Y$$12_tMat$$29$$.$col2$.x * this.$m_localAnchor1$.y, $r1Y$$12$$ = $r2Y$$12_tMat$$29$$.$col1$.y * this.$m_localAnchor1$.x + $r2Y$$12_tMat$$29$$.$col2$.y * this.$m_localAnchor1$.y;
  $r2Y$$12_tMat$$29$$ = $b2$$14$$.$m_R$;
  var $r2X$$12$$ = $r2Y$$12_tMat$$29$$.$col1$.x * this.$m_localAnchor2$.x + $r2Y$$12_tMat$$29$$.$col2$.x * this.$m_localAnchor2$.y;
  $r2Y$$12_tMat$$29$$ = $r2Y$$12_tMat$$29$$.$col1$.y * this.$m_localAnchor2$.x + $r2Y$$12_tMat$$29$$.$col2$.y * this.$m_localAnchor2$.y;
  var $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$, $P1Y$$2_v1Y$$3$$, $P2X$$2_v2X$$3$$, $P2Y$$2_impulse$$5_v2Y$$3$$;
  $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ = $b1$$15$$.$m_linearVelocity$.x + -$b1$$15$$.$m_angularVelocity$ * $r1Y$$12$$;
  $P1Y$$2_v1Y$$3$$ = $b1$$15$$.$m_linearVelocity$.y + $b1$$15$$.$m_angularVelocity$ * $r1X$$12$$;
  $P2X$$2_v2X$$3$$ = $b2$$14$$.$m_linearVelocity$.x + -$b2$$14$$.$m_angularVelocity$ * $r2Y$$12_tMat$$29$$;
  $P2Y$$2_impulse$$5_v2Y$$3$$ = $b2$$14$$.$m_linearVelocity$.y + $b2$$14$$.$m_angularVelocity$ * $r2X$$12$$;
  $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ = -(this.$m_u1$.x * $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ + this.$m_u1$.y * $P1Y$$2_v1Y$$3$$) - this.$m_ratio$ * (this.$m_u2$.x * $P2X$$2_v2X$$3$$ + this.$m_u2$.y * $P2Y$$2_impulse$$5_v2Y$$3$$);
  $P2Y$$2_impulse$$5_v2Y$$3$$ = -this.$m_pulleyMass$ * $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$;
  this.$m_pulleyImpulse$ += $P2Y$$2_impulse$$5_v2Y$$3$$;
  $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ = -$P2Y$$2_impulse$$5_v2Y$$3$$ * this.$m_u1$.x;
  $P1Y$$2_v1Y$$3$$ = -$P2Y$$2_impulse$$5_v2Y$$3$$ * this.$m_u1$.y;
  $P2X$$2_v2X$$3$$ = -this.$m_ratio$ * $P2Y$$2_impulse$$5_v2Y$$3$$ * this.$m_u2$.x;
  $P2Y$$2_impulse$$5_v2Y$$3$$ = -this.$m_ratio$ * $P2Y$$2_impulse$$5_v2Y$$3$$ * this.$m_u2$.y;
  $b1$$15$$.$m_linearVelocity$.x += $b1$$15$$.$m_invMass$ * $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$;
  $b1$$15$$.$m_linearVelocity$.y += $b1$$15$$.$m_invMass$ * $P1Y$$2_v1Y$$3$$;
  $b1$$15$$.$m_angularVelocity$ += $b1$$15$$.$m_invI$ * ($r1X$$12$$ * $P1Y$$2_v1Y$$3$$ - $r1Y$$12$$ * $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$);
  $b2$$14$$.$m_linearVelocity$.x += $b2$$14$$.$m_invMass$ * $P2X$$2_v2X$$3$$;
  $b2$$14$$.$m_linearVelocity$.y += $b2$$14$$.$m_invMass$ * $P2Y$$2_impulse$$5_v2Y$$3$$;
  $b2$$14$$.$m_angularVelocity$ += $b2$$14$$.$m_invI$ * ($r2X$$12$$ * $P2Y$$2_impulse$$5_v2Y$$3$$ - $r2Y$$12_tMat$$29$$ * $P2X$$2_v2X$$3$$);
  if(this.$m_limitState1$ == 2) {
    $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ = $b1$$15$$.$m_linearVelocity$.x + -$b1$$15$$.$m_angularVelocity$ * $r1Y$$12$$;
    $P1Y$$2_v1Y$$3$$ = $b1$$15$$.$m_linearVelocity$.y + $b1$$15$$.$m_angularVelocity$ * $r1X$$12$$;
    $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ = -(this.$m_u1$.x * $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ + this.$m_u1$.y * $P1Y$$2_v1Y$$3$$);
    $P2Y$$2_impulse$$5_v2Y$$3$$ = -this.$m_limitMass1$ * $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$;
    $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ = this.$m_limitImpulse1$;
    this.$m_limitImpulse1$ = $b2Math$b2Max$$(0, this.$m_limitImpulse1$ + $P2Y$$2_impulse$$5_v2Y$$3$$);
    $P2Y$$2_impulse$$5_v2Y$$3$$ = this.$m_limitImpulse1$ - $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$;
    $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ = -$P2Y$$2_impulse$$5_v2Y$$3$$ * this.$m_u1$.x;
    $P1Y$$2_v1Y$$3$$ = -$P2Y$$2_impulse$$5_v2Y$$3$$ * this.$m_u1$.y;
    $b1$$15$$.$m_linearVelocity$.x += $b1$$15$$.$m_invMass$ * $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$;
    $b1$$15$$.$m_linearVelocity$.y += $b1$$15$$.$m_invMass$ * $P1Y$$2_v1Y$$3$$;
    $b1$$15$$.$m_angularVelocity$ += $b1$$15$$.$m_invI$ * ($r1X$$12$$ * $P1Y$$2_v1Y$$3$$ - $r1Y$$12$$ * $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$)
  }
  if(this.$m_limitState2$ == 2) {
    $P2X$$2_v2X$$3$$ = $b2$$14$$.$m_linearVelocity$.x + -$b2$$14$$.$m_angularVelocity$ * $r2Y$$12_tMat$$29$$;
    $P2Y$$2_impulse$$5_v2Y$$3$$ = $b2$$14$$.$m_linearVelocity$.y + $b2$$14$$.$m_angularVelocity$ * $r2X$$12$$;
    $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ = -(this.$m_u2$.x * $P2X$$2_v2X$$3$$ + this.$m_u2$.y * $P2Y$$2_impulse$$5_v2Y$$3$$);
    $P2Y$$2_impulse$$5_v2Y$$3$$ = -this.$m_limitMass2$ * $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$;
    $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ = this.$m_limitImpulse2$;
    this.$m_limitImpulse2$ = $b2Math$b2Max$$(0, this.$m_limitImpulse2$ + $P2Y$$2_impulse$$5_v2Y$$3$$);
    $P2Y$$2_impulse$$5_v2Y$$3$$ = this.$m_limitImpulse2$ - $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$;
    $P2X$$2_v2X$$3$$ = -$P2Y$$2_impulse$$5_v2Y$$3$$ * this.$m_u2$.x;
    $P2Y$$2_impulse$$5_v2Y$$3$$ = -$P2Y$$2_impulse$$5_v2Y$$3$$ * this.$m_u2$.y;
    $b2$$14$$.$m_linearVelocity$.x += $b2$$14$$.$m_invMass$ * $P2X$$2_v2X$$3$$;
    $b2$$14$$.$m_linearVelocity$.y += $b2$$14$$.$m_invMass$ * $P2Y$$2_impulse$$5_v2Y$$3$$;
    $b2$$14$$.$m_angularVelocity$ += $b2$$14$$.$m_invI$ * ($r2X$$12$$ * $P2Y$$2_impulse$$5_v2Y$$3$$ - $r2Y$$12_tMat$$29$$ * $P2X$$2_v2X$$3$$)
  }
}, $SolvePositionConstraints$:function() {
  var $b1$$16$$ = this.$m_body1$, $b2$$15$$ = this.$m_body2$, $r2Y$$13_tMat$$30$$, $oldLimitPositionImpulse_s1X$$1$$ = this.$m_ground$.$m_position$.x + this.$m_groundAnchor1$.x, $s1Y$$1$$ = this.$m_ground$.$m_position$.y + this.$m_groundAnchor1$.y, $s2X$$1$$ = this.$m_ground$.$m_position$.x + this.$m_groundAnchor2$.x, $s2Y$$1$$ = this.$m_ground$.$m_position$.y + this.$m_groundAnchor2$.y, $r1X$$13$$, $r1Y$$13$$, $r2X$$13$$, $C$$6_length1$$2_p1X$$7$$, $length2$$2_p1Y$$7$$, $p2X$$6$$, $impulse$$6_p2Y$$6$$, 
  $linearError$$1$$ = 0;
  $r2Y$$13_tMat$$30$$ = $b1$$16$$.$m_R$;
  $r1X$$13$$ = $r2Y$$13_tMat$$30$$.$col1$.x * this.$m_localAnchor1$.x + $r2Y$$13_tMat$$30$$.$col2$.x * this.$m_localAnchor1$.y;
  $r1Y$$13$$ = $r2Y$$13_tMat$$30$$.$col1$.y * this.$m_localAnchor1$.x + $r2Y$$13_tMat$$30$$.$col2$.y * this.$m_localAnchor1$.y;
  $r2Y$$13_tMat$$30$$ = $b2$$15$$.$m_R$;
  $r2X$$13$$ = $r2Y$$13_tMat$$30$$.$col1$.x * this.$m_localAnchor2$.x + $r2Y$$13_tMat$$30$$.$col2$.x * this.$m_localAnchor2$.y;
  $r2Y$$13_tMat$$30$$ = $r2Y$$13_tMat$$30$$.$col1$.y * this.$m_localAnchor2$.x + $r2Y$$13_tMat$$30$$.$col2$.y * this.$m_localAnchor2$.y;
  $C$$6_length1$$2_p1X$$7$$ = $b1$$16$$.$m_position$.x + $r1X$$13$$;
  $length2$$2_p1Y$$7$$ = $b1$$16$$.$m_position$.y + $r1Y$$13$$;
  $p2X$$6$$ = $b2$$15$$.$m_position$.x + $r2X$$13$$;
  $impulse$$6_p2Y$$6$$ = $b2$$15$$.$m_position$.y + $r2Y$$13_tMat$$30$$;
  this.$m_u1$.$Set$($C$$6_length1$$2_p1X$$7$$ - $oldLimitPositionImpulse_s1X$$1$$, $length2$$2_p1Y$$7$$ - $s1Y$$1$$);
  this.$m_u2$.$Set$($p2X$$6$$ - $s2X$$1$$, $impulse$$6_p2Y$$6$$ - $s2Y$$1$$);
  $C$$6_length1$$2_p1X$$7$$ = $JSCompiler_StaticMethods_Length$$(this.$m_u1$);
  $length2$$2_p1Y$$7$$ = $JSCompiler_StaticMethods_Length$$(this.$m_u2$);
  $C$$6_length1$$2_p1X$$7$$ > 0.15 ? $JSCompiler_StaticMethods_Multiply$$(this.$m_u1$, 1 / $C$$6_length1$$2_p1X$$7$$) : this.$m_u1$.$SetZero$();
  $length2$$2_p1Y$$7$$ > 0.15 ? $JSCompiler_StaticMethods_Multiply$$(this.$m_u2$, 1 / $length2$$2_p1Y$$7$$) : this.$m_u2$.$SetZero$();
  $C$$6_length1$$2_p1X$$7$$ = this.$m_constant$ - $C$$6_length1$$2_p1X$$7$$ - this.$m_ratio$ * $length2$$2_p1Y$$7$$;
  $linearError$$1$$ = $b2Math$b2Max$$($linearError$$1$$, Math.abs($C$$6_length1$$2_p1X$$7$$));
  $C$$6_length1$$2_p1X$$7$$ = $b2Math$b2Clamp$$($C$$6_length1$$2_p1X$$7$$, -6, 6);
  $impulse$$6_p2Y$$6$$ = -this.$m_pulleyMass$ * $C$$6_length1$$2_p1X$$7$$;
  $C$$6_length1$$2_p1X$$7$$ = -$impulse$$6_p2Y$$6$$ * this.$m_u1$.x;
  $length2$$2_p1Y$$7$$ = -$impulse$$6_p2Y$$6$$ * this.$m_u1$.y;
  $p2X$$6$$ = -this.$m_ratio$ * $impulse$$6_p2Y$$6$$ * this.$m_u2$.x;
  $impulse$$6_p2Y$$6$$ = -this.$m_ratio$ * $impulse$$6_p2Y$$6$$ * this.$m_u2$.y;
  $b1$$16$$.$m_position$.x += $b1$$16$$.$m_invMass$ * $C$$6_length1$$2_p1X$$7$$;
  $b1$$16$$.$m_position$.y += $b1$$16$$.$m_invMass$ * $length2$$2_p1Y$$7$$;
  $b1$$16$$.$m_rotation$ += $b1$$16$$.$m_invI$ * ($r1X$$13$$ * $length2$$2_p1Y$$7$$ - $r1Y$$13$$ * $C$$6_length1$$2_p1X$$7$$);
  $b2$$15$$.$m_position$.x += $b2$$15$$.$m_invMass$ * $p2X$$6$$;
  $b2$$15$$.$m_position$.y += $b2$$15$$.$m_invMass$ * $impulse$$6_p2Y$$6$$;
  $b2$$15$$.$m_rotation$ += $b2$$15$$.$m_invI$ * ($r2X$$13$$ * $impulse$$6_p2Y$$6$$ - $r2Y$$13_tMat$$30$$ * $p2X$$6$$);
  $b1$$16$$.$m_R$.$Set$($b1$$16$$.$m_rotation$);
  $b2$$15$$.$m_R$.$Set$($b2$$15$$.$m_rotation$);
  if(this.$m_limitState1$ == 2) {
    $r2Y$$13_tMat$$30$$ = $b1$$16$$.$m_R$;
    $r1X$$13$$ = $r2Y$$13_tMat$$30$$.$col1$.x * this.$m_localAnchor1$.x + $r2Y$$13_tMat$$30$$.$col2$.x * this.$m_localAnchor1$.y;
    $r1Y$$13$$ = $r2Y$$13_tMat$$30$$.$col1$.y * this.$m_localAnchor1$.x + $r2Y$$13_tMat$$30$$.$col2$.y * this.$m_localAnchor1$.y;
    $C$$6_length1$$2_p1X$$7$$ = $b1$$16$$.$m_position$.x + $r1X$$13$$;
    $length2$$2_p1Y$$7$$ = $b1$$16$$.$m_position$.y + $r1Y$$13$$;
    this.$m_u1$.$Set$($C$$6_length1$$2_p1X$$7$$ - $oldLimitPositionImpulse_s1X$$1$$, $length2$$2_p1Y$$7$$ - $s1Y$$1$$);
    $C$$6_length1$$2_p1X$$7$$ = $JSCompiler_StaticMethods_Length$$(this.$m_u1$);
    if($C$$6_length1$$2_p1X$$7$$ > 0.15) {
      this.$m_u1$.x *= 1 / $C$$6_length1$$2_p1X$$7$$;
      this.$m_u1$.y *= 1 / $C$$6_length1$$2_p1X$$7$$
    }else {
      this.$m_u1$.$SetZero$()
    }
    $C$$6_length1$$2_p1X$$7$$ = this.$m_maxLength1$ - $C$$6_length1$$2_p1X$$7$$;
    $linearError$$1$$ = $b2Math$b2Max$$($linearError$$1$$, -$C$$6_length1$$2_p1X$$7$$);
    $C$$6_length1$$2_p1X$$7$$ = $b2Math$b2Clamp$$($C$$6_length1$$2_p1X$$7$$ + 0.15, -6, 0);
    $impulse$$6_p2Y$$6$$ = -this.$m_limitMass1$ * $C$$6_length1$$2_p1X$$7$$;
    $oldLimitPositionImpulse_s1X$$1$$ = this.$m_limitPositionImpulse1$;
    this.$m_limitPositionImpulse1$ = $b2Math$b2Max$$(0, this.$m_limitPositionImpulse1$ + $impulse$$6_p2Y$$6$$);
    $impulse$$6_p2Y$$6$$ = this.$m_limitPositionImpulse1$ - $oldLimitPositionImpulse_s1X$$1$$;
    $C$$6_length1$$2_p1X$$7$$ = -$impulse$$6_p2Y$$6$$ * this.$m_u1$.x;
    $length2$$2_p1Y$$7$$ = -$impulse$$6_p2Y$$6$$ * this.$m_u1$.y;
    $b1$$16$$.$m_position$.x += $b1$$16$$.$m_invMass$ * $C$$6_length1$$2_p1X$$7$$;
    $b1$$16$$.$m_position$.y += $b1$$16$$.$m_invMass$ * $length2$$2_p1Y$$7$$;
    $b1$$16$$.$m_rotation$ += $b1$$16$$.$m_invI$ * ($r1X$$13$$ * $length2$$2_p1Y$$7$$ - $r1Y$$13$$ * $C$$6_length1$$2_p1X$$7$$);
    $b1$$16$$.$m_R$.$Set$($b1$$16$$.$m_rotation$)
  }
  if(this.$m_limitState2$ == 2) {
    $r2Y$$13_tMat$$30$$ = $b2$$15$$.$m_R$;
    $r2X$$13$$ = $r2Y$$13_tMat$$30$$.$col1$.x * this.$m_localAnchor2$.x + $r2Y$$13_tMat$$30$$.$col2$.x * this.$m_localAnchor2$.y;
    $r2Y$$13_tMat$$30$$ = $r2Y$$13_tMat$$30$$.$col1$.y * this.$m_localAnchor2$.x + $r2Y$$13_tMat$$30$$.$col2$.y * this.$m_localAnchor2$.y;
    $p2X$$6$$ = $b2$$15$$.$m_position$.x + $r2X$$13$$;
    $impulse$$6_p2Y$$6$$ = $b2$$15$$.$m_position$.y + $r2Y$$13_tMat$$30$$;
    this.$m_u2$.$Set$($p2X$$6$$ - $s2X$$1$$, $impulse$$6_p2Y$$6$$ - $s2Y$$1$$);
    $length2$$2_p1Y$$7$$ = $JSCompiler_StaticMethods_Length$$(this.$m_u2$);
    if($length2$$2_p1Y$$7$$ > 0.15) {
      this.$m_u2$.x *= 1 / $length2$$2_p1Y$$7$$;
      this.$m_u2$.y *= 1 / $length2$$2_p1Y$$7$$
    }else {
      this.$m_u2$.$SetZero$()
    }
    $C$$6_length1$$2_p1X$$7$$ = this.$m_maxLength2$ - $length2$$2_p1Y$$7$$;
    $linearError$$1$$ = $b2Math$b2Max$$($linearError$$1$$, -$C$$6_length1$$2_p1X$$7$$);
    $C$$6_length1$$2_p1X$$7$$ = $b2Math$b2Clamp$$($C$$6_length1$$2_p1X$$7$$ + 0.15, -6, 0);
    $impulse$$6_p2Y$$6$$ = -this.$m_limitMass2$ * $C$$6_length1$$2_p1X$$7$$;
    $oldLimitPositionImpulse_s1X$$1$$ = this.$m_limitPositionImpulse2$;
    this.$m_limitPositionImpulse2$ = $b2Math$b2Max$$(0, this.$m_limitPositionImpulse2$ + $impulse$$6_p2Y$$6$$);
    $impulse$$6_p2Y$$6$$ = this.$m_limitPositionImpulse2$ - $oldLimitPositionImpulse_s1X$$1$$;
    $p2X$$6$$ = -$impulse$$6_p2Y$$6$$ * this.$m_u2$.x;
    $impulse$$6_p2Y$$6$$ = -$impulse$$6_p2Y$$6$$ * this.$m_u2$.y;
    $b2$$15$$.$m_position$.x += $b2$$15$$.$m_invMass$ * $p2X$$6$$;
    $b2$$15$$.$m_position$.y += $b2$$15$$.$m_invMass$ * $impulse$$6_p2Y$$6$$;
    $b2$$15$$.$m_rotation$ += $b2$$15$$.$m_invI$ * ($r2X$$13$$ * $impulse$$6_p2Y$$6$$ - $r2Y$$13_tMat$$30$$ * $p2X$$6$$);
    $b2$$15$$.$m_R$.$Set$($b2$$15$$.$m_rotation$)
  }
  return $linearError$$1$$ < 0.15
}, $m_ground$:null, $m_groundAnchor1$:new $b2Vec2$$, $m_groundAnchor2$:new $b2Vec2$$, $m_localAnchor1$:new $b2Vec2$$, $m_localAnchor2$:new $b2Vec2$$, $m_u1$:new $b2Vec2$$, $m_u2$:new $b2Vec2$$, $m_constant$:null, $m_ratio$:null, $m_maxLength1$:null, $m_maxLength2$:null, $m_pulleyMass$:null, $m_limitMass1$:null, $m_limitMass2$:null, $m_pulleyImpulse$:null, $m_limitImpulse1$:null, $m_limitImpulse2$:null, $m_limitPositionImpulse1$:null, $m_limitPositionImpulse2$:null, $m_limitState1$:0, $m_limitState2$:0});
var $b2PulleyJoint$b2_minPulleyLength$$ = 30;
// Input 131
function $b2RevoluteJoint$$($def$$10$$) {
  this.$m_node1$ = new $b2JointNode$$;
  this.$m_node2$ = new $b2JointNode$$;
  this.$m_type$ = $def$$10$$.type;
  this.$m_next$ = this.$m_prev$ = null;
  this.$m_body1$ = $def$$10$$.$body1$;
  this.$m_body2$ = $def$$10$$.$body2$;
  this.$m_collideConnected$ = $def$$10$$.$collideConnected$;
  this.$m_islandFlag$ = false;
  this.$m_userData$ = $def$$10$$.$userData$;
  this.$K$ = new $b2Mat22$$;
  this.$K1$ = new $b2Mat22$$;
  this.$K2$ = new $b2Mat22$$;
  this.$K3$ = new $b2Mat22$$;
  this.$m_localAnchor1$ = new $b2Vec2$$;
  this.$m_localAnchor2$ = new $b2Vec2$$;
  this.$m_ptpImpulse$ = new $b2Vec2$$;
  this.$m_ptpMass$ = new $b2Mat22$$;
  var $tMat$$31$$, $tX$$14$$, $tY$$6$$;
  $tMat$$31$$ = this.$m_body1$.$m_R$;
  $tX$$14$$ = $def$$10$$.$anchorPoint$.x - this.$m_body1$.$m_position$.x;
  $tY$$6$$ = $def$$10$$.$anchorPoint$.y - this.$m_body1$.$m_position$.y;
  this.$m_localAnchor1$.x = $tX$$14$$ * $tMat$$31$$.$col1$.x + $tY$$6$$ * $tMat$$31$$.$col1$.y;
  this.$m_localAnchor1$.y = $tX$$14$$ * $tMat$$31$$.$col2$.x + $tY$$6$$ * $tMat$$31$$.$col2$.y;
  $tMat$$31$$ = this.$m_body2$.$m_R$;
  $tX$$14$$ = $def$$10$$.$anchorPoint$.x - this.$m_body2$.$m_position$.x;
  $tY$$6$$ = $def$$10$$.$anchorPoint$.y - this.$m_body2$.$m_position$.y;
  this.$m_localAnchor2$.x = $tX$$14$$ * $tMat$$31$$.$col1$.x + $tY$$6$$ * $tMat$$31$$.$col1$.y;
  this.$m_localAnchor2$.y = $tX$$14$$ * $tMat$$31$$.$col2$.x + $tY$$6$$ * $tMat$$31$$.$col2$.y;
  this.$m_intialAngle$ = this.$m_body2$.$m_rotation$ - this.$m_body1$.$m_rotation$;
  this.$m_ptpImpulse$.$Set$(0, 0);
  this.$m_limitPositionImpulse$ = this.$m_limitImpulse$ = this.$m_motorImpulse$ = 0;
  this.$m_lowerAngle$ = $def$$10$$.$lowerAngle$;
  this.$m_upperAngle$ = $def$$10$$.$upperAngle$;
  this.$m_maxMotorTorque$ = $def$$10$$.$motorTorque$;
  this.$m_motorSpeed$ = $def$$10$$.$motorSpeed$;
  this.$m_enableLimit$ = $def$$10$$.$enableLimit$;
  this.$m_enableMotor$ = $def$$10$$.$enableMotor$
}
Object.extend($b2RevoluteJoint$$.prototype, $b2Joint$$.prototype);
Object.extend($b2RevoluteJoint$$.prototype, {$GetAnchor1$:function() {
  var $tMat$$32$$ = this.$m_body1$.$m_R$;
  return new $b2Vec2$$(this.$m_body1$.$m_position$.x + ($tMat$$32$$.$col1$.x * this.$m_localAnchor1$.x + $tMat$$32$$.$col2$.x * this.$m_localAnchor1$.y), this.$m_body1$.$m_position$.y + ($tMat$$32$$.$col1$.y * this.$m_localAnchor1$.x + $tMat$$32$$.$col2$.y * this.$m_localAnchor1$.y))
}, $GetAnchor2$:function() {
  var $tMat$$33$$ = this.$m_body2$.$m_R$;
  return new $b2Vec2$$(this.$m_body2$.$m_position$.x + ($tMat$$33$$.$col1$.x * this.$m_localAnchor2$.x + $tMat$$33$$.$col2$.x * this.$m_localAnchor2$.y), this.$m_body2$.$m_position$.y + ($tMat$$33$$.$col1$.y * this.$m_localAnchor2$.x + $tMat$$33$$.$col2$.y * this.$m_localAnchor2$.y))
}, $GetJointAngle$:function() {
  return this.$m_body2$.$m_rotation$ - this.$m_body1$.$m_rotation$
}, $GetJointSpeed$:function() {
  return this.$m_body2$.$m_angularVelocity$ - this.$m_body1$.$m_angularVelocity$
}, $GetMotorTorque$:function($invTimeStep$$13$$) {
  return $invTimeStep$$13$$ * this.$m_motorImpulse$
}, $SetMotorSpeed$:function($speed$$2$$) {
  this.$m_motorSpeed$ = $speed$$2$$
}, $SetMotorTorque$:function($torque$$1$$) {
  this.$m_maxMotorTorque$ = $torque$$1$$
}, $GetReactionForce$:function($invTimeStep$$14$$) {
  var $tVec$$16$$ = this.$m_ptpImpulse$.$Copy$();
  $JSCompiler_StaticMethods_Multiply$$($tVec$$16$$, $invTimeStep$$14$$);
  return $tVec$$16$$
}, $GetReactionTorque$:function($invTimeStep$$15$$) {
  return $invTimeStep$$15$$ * this.$m_limitImpulse$
}, $K$:new $b2Mat22$$, $K1$:new $b2Mat22$$, $K2$:new $b2Mat22$$, $K3$:new $b2Mat22$$, $PrepareVelocitySolver$:function() {
  var $b1$$17$$ = this.$m_body1$, $b2$$16$$ = this.$m_body2$, $r2Y$$14_tMat$$34$$;
  $r2Y$$14_tMat$$34$$ = $b1$$17$$.$m_R$;
  var $r1X$$14$$ = $r2Y$$14_tMat$$34$$.$col1$.x * this.$m_localAnchor1$.x + $r2Y$$14_tMat$$34$$.$col2$.x * this.$m_localAnchor1$.y, $r1Y$$14$$ = $r2Y$$14_tMat$$34$$.$col1$.y * this.$m_localAnchor1$.x + $r2Y$$14_tMat$$34$$.$col2$.y * this.$m_localAnchor1$.y;
  $r2Y$$14_tMat$$34$$ = $b2$$16$$.$m_R$;
  var $r2X$$14$$ = $r2Y$$14_tMat$$34$$.$col1$.x * this.$m_localAnchor2$.x + $r2Y$$14_tMat$$34$$.$col2$.x * this.$m_localAnchor2$.y;
  $r2Y$$14_tMat$$34$$ = $r2Y$$14_tMat$$34$$.$col1$.y * this.$m_localAnchor2$.x + $r2Y$$14_tMat$$34$$.$col2$.y * this.$m_localAnchor2$.y;
  var $invMass1$$6$$ = $b1$$17$$.$m_invMass$, $invMass2$$6$$ = $b2$$16$$.$m_invMass$, $invI1$$6$$ = $b1$$17$$.$m_invI$, $invI2$$6$$ = $b2$$16$$.$m_invI$;
  this.$K1$.$col1$.x = $invMass1$$6$$ + $invMass2$$6$$;
  this.$K1$.$col2$.x = 0;
  this.$K1$.$col1$.y = 0;
  this.$K1$.$col2$.y = $invMass1$$6$$ + $invMass2$$6$$;
  this.$K2$.$col1$.x = $invI1$$6$$ * $r1Y$$14$$ * $r1Y$$14$$;
  this.$K2$.$col2$.x = -$invI1$$6$$ * $r1X$$14$$ * $r1Y$$14$$;
  this.$K2$.$col1$.y = -$invI1$$6$$ * $r1X$$14$$ * $r1Y$$14$$;
  this.$K2$.$col2$.y = $invI1$$6$$ * $r1X$$14$$ * $r1X$$14$$;
  this.$K3$.$col1$.x = $invI2$$6$$ * $r2Y$$14_tMat$$34$$ * $r2Y$$14_tMat$$34$$;
  this.$K3$.$col2$.x = -$invI2$$6$$ * $r2X$$14$$ * $r2Y$$14_tMat$$34$$;
  this.$K3$.$col1$.y = -$invI2$$6$$ * $r2X$$14$$ * $r2Y$$14_tMat$$34$$;
  this.$K3$.$col2$.y = $invI2$$6$$ * $r2X$$14$$ * $r2X$$14$$;
  $JSCompiler_StaticMethods_SetM$$(this.$K$, this.$K1$);
  $JSCompiler_StaticMethods_AddM$$(this.$K$, this.$K2$);
  $JSCompiler_StaticMethods_AddM$$(this.$K$, this.$K3$);
  $JSCompiler_StaticMethods_Invert$$(this.$K$, this.$m_ptpMass$);
  this.$m_motorMass$ = 1 / ($invI1$$6$$ + $invI2$$6$$);
  if(this.$m_enableMotor$ == false) {
    this.$m_motorImpulse$ = 0
  }
  if(this.$m_enableLimit$) {
    var $jointAngle$$ = $b2$$16$$.$m_rotation$ - $b1$$17$$.$m_rotation$ - this.$m_intialAngle$;
    if($b2Math$b2Abs$$(this.$m_upperAngle$ - this.$m_lowerAngle$) < 2 * $b2Settings$b2_angularSlop$$) {
      this.$m_limitState$ = 3
    }else {
      if($jointAngle$$ <= this.$m_lowerAngle$) {
        if(this.$m_limitState$ != 1) {
          this.$m_limitImpulse$ = 0
        }
        this.$m_limitState$ = 1
      }else {
        if($jointAngle$$ >= this.$m_upperAngle$) {
          if(this.$m_limitState$ != 2) {
            this.$m_limitImpulse$ = 0
          }
          this.$m_limitState$ = 2
        }else {
          this.$m_limitImpulse$ = this.$m_limitState$ = 0
        }
      }
    }
  }else {
    this.$m_limitImpulse$ = 0
  }
  if($b2World$s_enableWarmStarting$$) {
    $b1$$17$$.$m_linearVelocity$.x -= $invMass1$$6$$ * this.$m_ptpImpulse$.x;
    $b1$$17$$.$m_linearVelocity$.y -= $invMass1$$6$$ * this.$m_ptpImpulse$.y;
    $b1$$17$$.$m_angularVelocity$ -= $invI1$$6$$ * ($r1X$$14$$ * this.$m_ptpImpulse$.y - $r1Y$$14$$ * this.$m_ptpImpulse$.x + this.$m_motorImpulse$ + this.$m_limitImpulse$);
    $b2$$16$$.$m_linearVelocity$.x += $invMass2$$6$$ * this.$m_ptpImpulse$.x;
    $b2$$16$$.$m_linearVelocity$.y += $invMass2$$6$$ * this.$m_ptpImpulse$.y;
    $b2$$16$$.$m_angularVelocity$ += $invI2$$6$$ * ($r2X$$14$$ * this.$m_ptpImpulse$.y - $r2Y$$14_tMat$$34$$ * this.$m_ptpImpulse$.x + this.$m_motorImpulse$ + this.$m_limitImpulse$)
  }else {
    this.$m_ptpImpulse$.$SetZero$();
    this.$m_limitImpulse$ = this.$m_motorImpulse$ = 0
  }
  this.$m_limitPositionImpulse$ = 0
}, $SolveVelocityConstraints$:function($oldLimitImpulse$$3_step$$7$$) {
  var $b1$$18$$ = this.$m_body1$, $b2$$17$$ = this.$m_body2$, $r2Y$$15_tMat$$35$$;
  $r2Y$$15_tMat$$35$$ = $b1$$18$$.$m_R$;
  var $limitImpulse$$2_motorImpulse$$1_r1X$$15$$ = $r2Y$$15_tMat$$35$$.$col1$.x * this.$m_localAnchor1$.x + $r2Y$$15_tMat$$35$$.$col2$.x * this.$m_localAnchor1$.y, $oldMotorImpulse$$1_r1Y$$15$$ = $r2Y$$15_tMat$$35$$.$col1$.y * this.$m_localAnchor1$.x + $r2Y$$15_tMat$$35$$.$col2$.y * this.$m_localAnchor1$.y;
  $r2Y$$15_tMat$$35$$ = $b2$$17$$.$m_R$;
  var $r2X$$15$$ = $r2Y$$15_tMat$$35$$.$col1$.x * this.$m_localAnchor2$.x + $r2Y$$15_tMat$$35$$.$col2$.x * this.$m_localAnchor2$.y;
  $r2Y$$15_tMat$$35$$ = $r2Y$$15_tMat$$35$$.$col1$.y * this.$m_localAnchor2$.x + $r2Y$$15_tMat$$35$$.$col2$.y * this.$m_localAnchor2$.y;
  var $ptpCdotX_ptpImpulseY$$ = $b2$$17$$.$m_linearVelocity$.x + -$b2$$17$$.$m_angularVelocity$ * $r2Y$$15_tMat$$35$$ - $b1$$18$$.$m_linearVelocity$.x - -$b1$$18$$.$m_angularVelocity$ * $oldMotorImpulse$$1_r1Y$$15$$, $ptpCdotY$$ = $b2$$17$$.$m_linearVelocity$.y + $b2$$17$$.$m_angularVelocity$ * $r2X$$15$$ - $b1$$18$$.$m_linearVelocity$.y - $b1$$18$$.$m_angularVelocity$ * $limitImpulse$$2_motorImpulse$$1_r1X$$15$$, $ptpImpulseX$$ = -(this.$m_ptpMass$.$col1$.x * $ptpCdotX_ptpImpulseY$$ + this.$m_ptpMass$.$col2$.x * 
  $ptpCdotY$$);
  $ptpCdotX_ptpImpulseY$$ = -(this.$m_ptpMass$.$col1$.y * $ptpCdotX_ptpImpulseY$$ + this.$m_ptpMass$.$col2$.y * $ptpCdotY$$);
  this.$m_ptpImpulse$.x += $ptpImpulseX$$;
  this.$m_ptpImpulse$.y += $ptpCdotX_ptpImpulseY$$;
  $b1$$18$$.$m_linearVelocity$.x -= $b1$$18$$.$m_invMass$ * $ptpImpulseX$$;
  $b1$$18$$.$m_linearVelocity$.y -= $b1$$18$$.$m_invMass$ * $ptpCdotX_ptpImpulseY$$;
  $b1$$18$$.$m_angularVelocity$ -= $b1$$18$$.$m_invI$ * ($limitImpulse$$2_motorImpulse$$1_r1X$$15$$ * $ptpCdotX_ptpImpulseY$$ - $oldMotorImpulse$$1_r1Y$$15$$ * $ptpImpulseX$$);
  $b2$$17$$.$m_linearVelocity$.x += $b2$$17$$.$m_invMass$ * $ptpImpulseX$$;
  $b2$$17$$.$m_linearVelocity$.y += $b2$$17$$.$m_invMass$ * $ptpCdotX_ptpImpulseY$$;
  $b2$$17$$.$m_angularVelocity$ += $b2$$17$$.$m_invI$ * ($r2X$$15$$ * $ptpCdotX_ptpImpulseY$$ - $r2Y$$15_tMat$$35$$ * $ptpImpulseX$$);
  if(this.$m_enableMotor$ && this.$m_limitState$ != 3) {
    $limitImpulse$$2_motorImpulse$$1_r1X$$15$$ = -this.$m_motorMass$ * ($b2$$17$$.$m_angularVelocity$ - $b1$$18$$.$m_angularVelocity$ - this.$m_motorSpeed$);
    $oldMotorImpulse$$1_r1Y$$15$$ = this.$m_motorImpulse$;
    this.$m_motorImpulse$ = $b2Math$b2Clamp$$(this.$m_motorImpulse$ + $limitImpulse$$2_motorImpulse$$1_r1X$$15$$, -$oldLimitImpulse$$3_step$$7$$.$dt$ * this.$m_maxMotorTorque$, $oldLimitImpulse$$3_step$$7$$.$dt$ * this.$m_maxMotorTorque$);
    $limitImpulse$$2_motorImpulse$$1_r1X$$15$$ = this.$m_motorImpulse$ - $oldMotorImpulse$$1_r1Y$$15$$;
    $b1$$18$$.$m_angularVelocity$ -= $b1$$18$$.$m_invI$ * $limitImpulse$$2_motorImpulse$$1_r1X$$15$$;
    $b2$$17$$.$m_angularVelocity$ += $b2$$17$$.$m_invI$ * $limitImpulse$$2_motorImpulse$$1_r1X$$15$$
  }
  if(this.$m_enableLimit$ && this.$m_limitState$ != 0) {
    $limitImpulse$$2_motorImpulse$$1_r1X$$15$$ = -this.$m_motorMass$ * ($b2$$17$$.$m_angularVelocity$ - $b1$$18$$.$m_angularVelocity$);
    if(this.$m_limitState$ == 3) {
      this.$m_limitImpulse$ += $limitImpulse$$2_motorImpulse$$1_r1X$$15$$
    }else {
      if(this.$m_limitState$ == 1) {
        $oldLimitImpulse$$3_step$$7$$ = this.$m_limitImpulse$;
        this.$m_limitImpulse$ = $b2Math$b2Max$$(this.$m_limitImpulse$ + $limitImpulse$$2_motorImpulse$$1_r1X$$15$$, 0);
        $limitImpulse$$2_motorImpulse$$1_r1X$$15$$ = this.$m_limitImpulse$ - $oldLimitImpulse$$3_step$$7$$
      }else {
        if(this.$m_limitState$ == 2) {
          $oldLimitImpulse$$3_step$$7$$ = this.$m_limitImpulse$;
          this.$m_limitImpulse$ = this.$m_limitImpulse$ + $limitImpulse$$2_motorImpulse$$1_r1X$$15$$ < 0 ? this.$m_limitImpulse$ + $limitImpulse$$2_motorImpulse$$1_r1X$$15$$ : 0;
          $limitImpulse$$2_motorImpulse$$1_r1X$$15$$ = this.$m_limitImpulse$ - $oldLimitImpulse$$3_step$$7$$
        }
      }
    }
    $b1$$18$$.$m_angularVelocity$ -= $b1$$18$$.$m_invI$ * $limitImpulse$$2_motorImpulse$$1_r1X$$15$$;
    $b2$$17$$.$m_angularVelocity$ += $b2$$17$$.$m_invI$ * $limitImpulse$$2_motorImpulse$$1_r1X$$15$$
  }
}, $SolvePositionConstraints$:function() {
  var $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$, $b1$$19$$ = this.$m_body1$, $b2$$18$$ = this.$m_body2$, $positionError$$1_tMat$$36$$ = 0;
  $positionError$$1_tMat$$36$$ = $b1$$19$$.$m_R$;
  var $angularError$$1_r1X$$16$$ = $positionError$$1_tMat$$36$$.$col1$.x * this.$m_localAnchor1$.x + $positionError$$1_tMat$$36$$.$col2$.x * this.$m_localAnchor1$.y, $limitImpulse$$3_r1Y$$16$$ = $positionError$$1_tMat$$36$$.$col1$.y * this.$m_localAnchor1$.x + $positionError$$1_tMat$$36$$.$col2$.y * this.$m_localAnchor1$.y;
  $positionError$$1_tMat$$36$$ = $b2$$18$$.$m_R$;
  $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ = $positionError$$1_tMat$$36$$.$col1$.x * this.$m_localAnchor2$.x + $positionError$$1_tMat$$36$$.$col2$.x * this.$m_localAnchor2$.y;
  var $r2Y$$16$$ = $positionError$$1_tMat$$36$$.$col1$.y * this.$m_localAnchor2$.x + $positionError$$1_tMat$$36$$.$col2$.y * this.$m_localAnchor2$.y, $impulseX$$2_ptpCX$$ = $b2$$18$$.$m_position$.x + $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ - ($b1$$19$$.$m_position$.x + $angularError$$1_r1X$$16$$), $impulseY$$2_ptpCY$$ = $b2$$18$$.$m_position$.y + $r2Y$$16$$ - ($b1$$19$$.$m_position$.y + $limitImpulse$$3_r1Y$$16$$);
  $positionError$$1_tMat$$36$$ = Math.sqrt($impulseX$$2_ptpCX$$ * $impulseX$$2_ptpCX$$ + $impulseY$$2_ptpCY$$ * $impulseY$$2_ptpCY$$);
  var $invMass1$$7$$ = $b1$$19$$.$m_invMass$, $invMass2$$7$$ = $b2$$18$$.$m_invMass$, $invI1$$7$$ = $b1$$19$$.$m_invI$, $invI2$$7$$ = $b2$$18$$.$m_invI$;
  this.$K1$.$col1$.x = $invMass1$$7$$ + $invMass2$$7$$;
  this.$K1$.$col2$.x = 0;
  this.$K1$.$col1$.y = 0;
  this.$K1$.$col2$.y = $invMass1$$7$$ + $invMass2$$7$$;
  this.$K2$.$col1$.x = $invI1$$7$$ * $limitImpulse$$3_r1Y$$16$$ * $limitImpulse$$3_r1Y$$16$$;
  this.$K2$.$col2$.x = -$invI1$$7$$ * $angularError$$1_r1X$$16$$ * $limitImpulse$$3_r1Y$$16$$;
  this.$K2$.$col1$.y = -$invI1$$7$$ * $angularError$$1_r1X$$16$$ * $limitImpulse$$3_r1Y$$16$$;
  this.$K2$.$col2$.y = $invI1$$7$$ * $angularError$$1_r1X$$16$$ * $angularError$$1_r1X$$16$$;
  this.$K3$.$col1$.x = $invI2$$7$$ * $r2Y$$16$$ * $r2Y$$16$$;
  this.$K3$.$col2$.x = -$invI2$$7$$ * $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ * $r2Y$$16$$;
  this.$K3$.$col1$.y = -$invI2$$7$$ * $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ * $r2Y$$16$$;
  this.$K3$.$col2$.y = $invI2$$7$$ * $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ * $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$;
  $JSCompiler_StaticMethods_SetM$$(this.$K$, this.$K1$);
  $JSCompiler_StaticMethods_AddM$$(this.$K$, this.$K2$);
  $JSCompiler_StaticMethods_AddM$$(this.$K$, this.$K3$);
  this.$K$.$Solve$($b2RevoluteJoint$tImpulse$$, -$impulseX$$2_ptpCX$$, -$impulseY$$2_ptpCY$$);
  $impulseX$$2_ptpCX$$ = $b2RevoluteJoint$tImpulse$$.x;
  $impulseY$$2_ptpCY$$ = $b2RevoluteJoint$tImpulse$$.y;
  $b1$$19$$.$m_position$.x -= $b1$$19$$.$m_invMass$ * $impulseX$$2_ptpCX$$;
  $b1$$19$$.$m_position$.y -= $b1$$19$$.$m_invMass$ * $impulseY$$2_ptpCY$$;
  $b1$$19$$.$m_rotation$ -= $b1$$19$$.$m_invI$ * ($angularError$$1_r1X$$16$$ * $impulseY$$2_ptpCY$$ - $limitImpulse$$3_r1Y$$16$$ * $impulseX$$2_ptpCX$$);
  $b1$$19$$.$m_R$.$Set$($b1$$19$$.$m_rotation$);
  $b2$$18$$.$m_position$.x += $b2$$18$$.$m_invMass$ * $impulseX$$2_ptpCX$$;
  $b2$$18$$.$m_position$.y += $b2$$18$$.$m_invMass$ * $impulseY$$2_ptpCY$$;
  $b2$$18$$.$m_rotation$ += $b2$$18$$.$m_invI$ * ($angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ * $impulseY$$2_ptpCY$$ - $r2Y$$16$$ * $impulseX$$2_ptpCX$$);
  $b2$$18$$.$m_R$.$Set$($b2$$18$$.$m_rotation$);
  $angularError$$1_r1X$$16$$ = 0;
  if(this.$m_enableLimit$ && this.$m_limitState$ != 0) {
    $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ = $b2$$18$$.$m_rotation$ - $b1$$19$$.$m_rotation$ - this.$m_intialAngle$;
    $limitImpulse$$3_r1Y$$16$$ = 0;
    if(this.$m_limitState$ == 3) {
      $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ = $b2Math$b2Clamp$$($angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$, -$b2Settings$b2_maxAngularCorrection$$, $b2Settings$b2_maxAngularCorrection$$);
      $limitImpulse$$3_r1Y$$16$$ = -this.$m_motorMass$ * $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$;
      $angularError$$1_r1X$$16$$ = $b2Math$b2Abs$$($angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$)
    }else {
      if(this.$m_limitState$ == 1) {
        $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ = $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ - this.$m_lowerAngle$;
        $angularError$$1_r1X$$16$$ = $b2Math$b2Max$$(0, -$angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$);
        $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ = $b2Math$b2Clamp$$($angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ + $b2Settings$b2_angularSlop$$, -$b2Settings$b2_maxAngularCorrection$$, 0);
        $limitImpulse$$3_r1Y$$16$$ = -this.$m_motorMass$ * $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$;
        $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ = this.$m_limitPositionImpulse$;
        this.$m_limitPositionImpulse$ = $b2Math$b2Max$$(this.$m_limitPositionImpulse$ + $limitImpulse$$3_r1Y$$16$$, 0);
        $limitImpulse$$3_r1Y$$16$$ = this.$m_limitPositionImpulse$ - $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$
      }else {
        if(this.$m_limitState$ == 2) {
          $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ = $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ - this.$m_upperAngle$;
          $angularError$$1_r1X$$16$$ = $b2Math$b2Max$$(0, $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$);
          $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ = $b2Math$b2Clamp$$($angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ - $b2Settings$b2_angularSlop$$, 0, $b2Settings$b2_maxAngularCorrection$$);
          $limitImpulse$$3_r1Y$$16$$ = -this.$m_motorMass$ * $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$;
          $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ = this.$m_limitPositionImpulse$;
          this.$m_limitPositionImpulse$ = this.$m_limitPositionImpulse$ + $limitImpulse$$3_r1Y$$16$$ < 0 ? this.$m_limitPositionImpulse$ + $limitImpulse$$3_r1Y$$16$$ : 0;
          $limitImpulse$$3_r1Y$$16$$ = this.$m_limitPositionImpulse$ - $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$
        }
      }
    }
    $b1$$19$$.$m_rotation$ -= $b1$$19$$.$m_invI$ * $limitImpulse$$3_r1Y$$16$$;
    $b1$$19$$.$m_R$.$Set$($b1$$19$$.$m_rotation$);
    $b2$$18$$.$m_rotation$ += $b2$$18$$.$m_invI$ * $limitImpulse$$3_r1Y$$16$$;
    $b2$$18$$.$m_R$.$Set$($b2$$18$$.$m_rotation$)
  }
  return $positionError$$1_tMat$$36$$ <= 0.15 && $angularError$$1_r1X$$16$$ <= $b2Settings$b2_angularSlop$$
}, $m_localAnchor1$:new $b2Vec2$$, $m_localAnchor2$:new $b2Vec2$$, $m_ptpImpulse$:new $b2Vec2$$, $m_motorImpulse$:null, $m_limitImpulse$:null, $m_limitPositionImpulse$:null, $m_ptpMass$:new $b2Mat22$$, $m_motorMass$:null, $m_intialAngle$:null, $m_lowerAngle$:null, $m_upperAngle$:null, $m_maxMotorTorque$:null, $m_motorSpeed$:null, $m_enableLimit$:null, $m_enableMotor$:null, $m_limitState$:0});
var $b2RevoluteJoint$tImpulse$$ = new $b2Vec2$$;
// Input 132
// Input 133
function $b2World$$($worldAABB$$1$$, $gravity$$1$$, $doSleep$$) {
  this.$step$ = new $b2TimeStep$$;
  this.$m_contactManager$ = new $b2ContactManager$$;
  this.$m_listener$ = null;
  this.$m_filter$ = $b2CollisionFilter$b2_defaultFilter$$;
  this.$m_jointList$ = this.$m_contactList$ = this.$m_bodyList$ = null;
  this.$m_jointCount$ = this.$m_contactCount$ = this.$m_bodyCount$ = 0;
  this.$m_bodyDestroyList$ = null;
  this.$m_allowSleep$ = $doSleep$$;
  this.$m_gravity$ = $gravity$$1$$;
  this.$m_contactManager$.$m_world$ = this;
  this.$m_broadPhase$ = new $b2BroadPhase$$($worldAABB$$1$$, this.$m_contactManager$);
  this.$m_groundBody$ = this.$CreateBody$(new $b2BodyDef$$)
}
$b2World$$.prototype = {$CreateBody$:function $$b2World$$$$$CreateBody$$($b$$40_def$$12$$) {
  $b$$40_def$$12$$ = new $b2Body$$($b$$40_def$$12$$, this);
  $b$$40_def$$12$$.$m_prev$ = null;
  if($b$$40_def$$12$$.$m_next$ = this.$m_bodyList$) {
    this.$m_bodyList$.$m_prev$ = $b$$40_def$$12$$
  }
  this.$m_bodyList$ = $b$$40_def$$12$$;
  ++this.$m_bodyCount$;
  return $b$$40_def$$12$$
}, $DestroyBody$:function $$b2World$$$$$DestroyBody$$($b$$41$$) {
  if(!($b$$41$$.$m_flags$ & 32)) {
    if($b$$41$$.$m_prev$) {
      $b$$41$$.$m_prev$.$m_next$ = $b$$41$$.$m_next$
    }
    if($b$$41$$.$m_next$) {
      $b$$41$$.$m_next$.$m_prev$ = $b$$41$$.$m_prev$
    }
    if($b$$41$$ == this.$m_bodyList$) {
      this.$m_bodyList$ = $b$$41$$.$m_next$
    }
    $b$$41$$.$m_flags$ |= 32;
    --this.$m_bodyCount$;
    $b$$41$$.$m_prev$ = null;
    $b$$41$$.$m_next$ = this.$m_bodyDestroyList$;
    this.$m_bodyDestroyList$ = $b$$41$$
  }
}, $CleanBodyList$:function $$b2World$$$$$CleanBodyList$$() {
  this.$m_contactManager$.$m_destroyImmediate$ = true;
  for(var $b$$42$$ = this.$m_bodyDestroyList$;$b$$42$$;) {
    var $b0$$ = $b$$42$$;
    $b$$42$$ = $b$$42$$.$m_next$;
    for(var $jn$$1$$ = $b0$$.$m_jointList$;$jn$$1$$;) {
      var $jn0$$ = $jn$$1$$;
      $jn$$1$$ = $jn$$1$$.next;
      this.$DestroyJoint$($jn0$$.$joint$)
    }
    $b0$$.$Destroy$()
  }
  this.$m_bodyDestroyList$ = null;
  this.$m_contactManager$.$m_destroyImmediate$ = false
}, $CreateJoint$:function $$b2World$$$$$CreateJoint$$($def$$13_s$$31$$) {
  var $j$$17_joint$$inline_834$$;
  $j$$17_joint$$inline_834$$ = null;
  switch($def$$13_s$$31$$.type) {
    case 3:
      $j$$17_joint$$inline_834$$ = new $b2DistanceJoint$$($def$$13_s$$31$$);
      break;
    case 5:
      $j$$17_joint$$inline_834$$ = new $b2MouseJoint$$($def$$13_s$$31$$);
      break;
    case 2:
      $j$$17_joint$$inline_834$$ = new $b2PrismaticJoint$$($def$$13_s$$31$$);
      break;
    case 1:
      $j$$17_joint$$inline_834$$ = new $b2RevoluteJoint$$($def$$13_s$$31$$);
      break;
    case 4:
      $j$$17_joint$$inline_834$$ = new $b2PulleyJoint$$($def$$13_s$$31$$);
      break;
    case 6:
      $j$$17_joint$$inline_834$$ = new $b2GearJoint$$($def$$13_s$$31$$);
      break;
    default:
      break
  }
  $j$$17_joint$$inline_834$$ = $j$$17_joint$$inline_834$$;
  $j$$17_joint$$inline_834$$.$m_prev$ = null;
  if($j$$17_joint$$inline_834$$.$m_next$ = this.$m_jointList$) {
    this.$m_jointList$.$m_prev$ = $j$$17_joint$$inline_834$$
  }
  this.$m_jointList$ = $j$$17_joint$$inline_834$$;
  ++this.$m_jointCount$;
  $j$$17_joint$$inline_834$$.$m_node1$.$joint$ = $j$$17_joint$$inline_834$$;
  $j$$17_joint$$inline_834$$.$m_node1$.$other$ = $j$$17_joint$$inline_834$$.$m_body2$;
  $j$$17_joint$$inline_834$$.$m_node1$.$prev$ = null;
  if($j$$17_joint$$inline_834$$.$m_node1$.next = $j$$17_joint$$inline_834$$.$m_body1$.$m_jointList$) {
    $j$$17_joint$$inline_834$$.$m_body1$.$m_jointList$.$prev$ = $j$$17_joint$$inline_834$$.$m_node1$
  }
  $j$$17_joint$$inline_834$$.$m_body1$.$m_jointList$ = $j$$17_joint$$inline_834$$.$m_node1$;
  $j$$17_joint$$inline_834$$.$m_node2$.$joint$ = $j$$17_joint$$inline_834$$;
  $j$$17_joint$$inline_834$$.$m_node2$.$other$ = $j$$17_joint$$inline_834$$.$m_body1$;
  $j$$17_joint$$inline_834$$.$m_node2$.$prev$ = null;
  if($j$$17_joint$$inline_834$$.$m_node2$.next = $j$$17_joint$$inline_834$$.$m_body2$.$m_jointList$) {
    $j$$17_joint$$inline_834$$.$m_body2$.$m_jointList$.$prev$ = $j$$17_joint$$inline_834$$.$m_node2$
  }
  $j$$17_joint$$inline_834$$.$m_body2$.$m_jointList$ = $j$$17_joint$$inline_834$$.$m_node2$;
  if($def$$13_s$$31$$.$collideConnected$ == false) {
    for($def$$13_s$$31$$ = ($def$$13_s$$31$$.$body1$.$m_shapeCount$ < $def$$13_s$$31$$.$body2$.$m_shapeCount$ ? $def$$13_s$$31$$.$body1$ : $def$$13_s$$31$$.$body2$).$m_shapeList$;$def$$13_s$$31$$;$def$$13_s$$31$$ = $def$$13_s$$31$$.$m_next$) {
      $def$$13_s$$31$$.$ResetProxy$(this.$m_broadPhase$)
    }
  }
  return $j$$17_joint$$inline_834$$
}, $DestroyJoint$:function $$b2World$$$$$DestroyJoint$$($j$$18_s$$32$$) {
  var $collideConnected$$ = $j$$18_s$$32$$.$m_collideConnected$;
  if($j$$18_s$$32$$.$m_prev$) {
    $j$$18_s$$32$$.$m_prev$.$m_next$ = $j$$18_s$$32$$.$m_next$
  }
  if($j$$18_s$$32$$.$m_next$) {
    $j$$18_s$$32$$.$m_next$.$m_prev$ = $j$$18_s$$32$$.$m_prev$
  }
  if($j$$18_s$$32$$ == this.$m_jointList$) {
    this.$m_jointList$ = $j$$18_s$$32$$.$m_next$
  }
  var $body1$$3$$ = $j$$18_s$$32$$.$m_body1$, $body2$$3$$ = $j$$18_s$$32$$.$m_body2$;
  $body1$$3$$.$WakeUp$();
  $body2$$3$$.$WakeUp$();
  if($j$$18_s$$32$$.$m_node1$.$prev$) {
    $j$$18_s$$32$$.$m_node1$.$prev$.next = $j$$18_s$$32$$.$m_node1$.next
  }
  if($j$$18_s$$32$$.$m_node1$.next) {
    $j$$18_s$$32$$.$m_node1$.next.$prev$ = $j$$18_s$$32$$.$m_node1$.$prev$
  }
  if($j$$18_s$$32$$.$m_node1$ == $body1$$3$$.$m_jointList$) {
    $body1$$3$$.$m_jointList$ = $j$$18_s$$32$$.$m_node1$.next
  }
  $j$$18_s$$32$$.$m_node1$.$prev$ = null;
  $j$$18_s$$32$$.$m_node1$.next = null;
  if($j$$18_s$$32$$.$m_node2$.$prev$) {
    $j$$18_s$$32$$.$m_node2$.$prev$.next = $j$$18_s$$32$$.$m_node2$.next
  }
  if($j$$18_s$$32$$.$m_node2$.next) {
    $j$$18_s$$32$$.$m_node2$.next.$prev$ = $j$$18_s$$32$$.$m_node2$.$prev$
  }
  if($j$$18_s$$32$$.$m_node2$ == $body2$$3$$.$m_jointList$) {
    $body2$$3$$.$m_jointList$ = $j$$18_s$$32$$.$m_node2$.next
  }
  $j$$18_s$$32$$.$m_node2$.$prev$ = null;
  $j$$18_s$$32$$.$m_node2$.next = null;
  --this.$m_jointCount$;
  if($collideConnected$$ == false) {
    for($j$$18_s$$32$$ = ($body1$$3$$.$m_shapeCount$ < $body2$$3$$.$m_shapeCount$ ? $body1$$3$$ : $body2$$3$$).$m_shapeList$;$j$$18_s$$32$$;$j$$18_s$$32$$ = $j$$18_s$$32$$.$m_next$) {
      $j$$18_s$$32$$.$ResetProxy$(this.$m_broadPhase$)
    }
  }
}, $step$:new $b2TimeStep$$, $Step$:function $$b2World$$$$$Step$$($dt$$1$$, $iterations$$) {
  var $b$$45_jn$$2_node1$$inline_855$$, $i$$109_node2$$inline_856_other$$7$$;
  this.$step$.$dt$ = $dt$$1$$;
  this.$step$.$iterations$ = $iterations$$;
  this.$step$.$inv_dt$ = $dt$$1$$ > 0 ? 1 / $dt$$1$$ : 0;
  this.$m_positionIterationCount$ = 0;
  for(var $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$ = this.$m_contactManager$, $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_world$.$m_contactList$;$body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$ != null;) {
    var $body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$ = $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$;
    $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$ = $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$.$m_next$;
    $body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$.$m_flags$ & 2 && $JSCompiler_StaticMethods_DestroyContact$$($JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$, $body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$)
  }
  this.$CleanBodyList$();
  for($JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$ = this.$m_contactManager$.$m_world$.$m_contactList$;$JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$ != null;$JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_next$) {
    if(!($JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_shape1$.$m_body$.$IsSleeping$() && $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_shape2$.$m_body$.$IsSleeping$())) {
      $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_manifoldCount$;
      $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$Evaluate$();
      $body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_manifoldCount$;
      if($body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$ == 0 && $body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$ > 0) {
        $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_shape1$.$m_body$;
        $body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_shape2$.$m_body$;
        $b$$45_jn$$2_node1$$inline_855$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_node1$;
        $i$$109_node2$$inline_856_other$$7$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_node2$;
        $b$$45_jn$$2_node1$$inline_855$$.$contact$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$;
        $b$$45_jn$$2_node1$$inline_855$$.$other$ = $body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$;
        $b$$45_jn$$2_node1$$inline_855$$.$prev$ = null;
        $b$$45_jn$$2_node1$$inline_855$$.next = $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$.$m_contactList$;
        if($b$$45_jn$$2_node1$$inline_855$$.next != null) {
          $b$$45_jn$$2_node1$$inline_855$$.next.$prev$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_node1$
        }
        $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$.$m_contactList$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_node1$;
        $i$$109_node2$$inline_856_other$$7$$.$contact$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$;
        $i$$109_node2$$inline_856_other$$7$$.$other$ = $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$;
        $i$$109_node2$$inline_856_other$$7$$.$prev$ = null;
        $i$$109_node2$$inline_856_other$$7$$.next = $body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$.$m_contactList$;
        if($i$$109_node2$$inline_856_other$$7$$.next != null) {
          $i$$109_node2$$inline_856_other$$7$$.next.$prev$ = $i$$109_node2$$inline_856_other$$7$$
        }
        $body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$.$m_contactList$ = $i$$109_node2$$inline_856_other$$7$$
      }else {
        if($body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$ > 0 && $body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$ == 0) {
          $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_shape1$.$m_body$;
          $body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_shape2$.$m_body$;
          $b$$45_jn$$2_node1$$inline_855$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_node1$;
          $i$$109_node2$$inline_856_other$$7$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_node2$;
          if($b$$45_jn$$2_node1$$inline_855$$.$prev$) {
            $b$$45_jn$$2_node1$$inline_855$$.$prev$.next = $b$$45_jn$$2_node1$$inline_855$$.next
          }
          if($b$$45_jn$$2_node1$$inline_855$$.next) {
            $b$$45_jn$$2_node1$$inline_855$$.next.$prev$ = $b$$45_jn$$2_node1$$inline_855$$.$prev$
          }
          if($b$$45_jn$$2_node1$$inline_855$$ == $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$.$m_contactList$) {
            $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$.$m_contactList$ = $b$$45_jn$$2_node1$$inline_855$$.next
          }
          $b$$45_jn$$2_node1$$inline_855$$.$prev$ = null;
          $b$$45_jn$$2_node1$$inline_855$$.next = null;
          if($i$$109_node2$$inline_856_other$$7$$.$prev$) {
            $i$$109_node2$$inline_856_other$$7$$.$prev$.next = $i$$109_node2$$inline_856_other$$7$$.next
          }
          if($i$$109_node2$$inline_856_other$$7$$.next) {
            $i$$109_node2$$inline_856_other$$7$$.next.$prev$ = $i$$109_node2$$inline_856_other$$7$$.$prev$
          }
          if($i$$109_node2$$inline_856_other$$7$$ == $body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$.$m_contactList$) {
            $body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$.$m_contactList$ = $i$$109_node2$$inline_856_other$$7$$.next
          }
          $i$$109_node2$$inline_856_other$$7$$.$prev$ = null;
          $i$$109_node2$$inline_856_other$$7$$.next = null
        }
      }
    }
  }
  $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$ = new $b2Island$$(this.$m_bodyCount$, this.$m_contactCount$, this.$m_jointCount$, this.$m_stackAllocator$);
  for($b$$45_jn$$2_node1$$inline_855$$ = this.$m_bodyList$;$b$$45_jn$$2_node1$$inline_855$$ != null;$b$$45_jn$$2_node1$$inline_855$$ = $b$$45_jn$$2_node1$$inline_855$$.$m_next$) {
    $b$$45_jn$$2_node1$$inline_855$$.$m_flags$ &= -5
  }
  for($body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$ = this.$m_contactList$;$body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$ != null;$body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$ = $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$.$m_next$) {
    $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$.$m_flags$ &= -2
  }
  for($body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$ = this.$m_jointList$;$body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$ != null;$body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$ = $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$.$m_next$) {
    $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$.$m_islandFlag$ = false
  }
  $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$ = Array(this.$m_bodyCount$);
  for($body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$ = 0;$body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$ < this.$m_bodyCount$;$body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$++) {
    $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$[$body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$] = null
  }
  for($body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$ = this.$m_bodyList$;$body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$ != null;$body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$ = $body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$.$m_next$) {
    if(!($body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$.$m_flags$ & ($b2Body$e_staticFlag$$ | 4 | $b2Body$e_sleepFlag$$ | $b2Body$e_frozenFlag$$))) {
      $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$Clear$();
      var $stackCount$$ = 0;
      $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$[$stackCount$$++] = $body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$;
      for($body2$$inline_854_c0$$inline_842_k$$3_newCount$$inline_859_seed$$.$m_flags$ |= 4;$stackCount$$ > 0;) {
        $b$$45_jn$$2_node1$$inline_855$$ = $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$[--$stackCount$$];
        $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$AddBody$($b$$45_jn$$2_node1$$inline_855$$);
        $b$$45_jn$$2_node1$$inline_855$$.$m_flags$ &= ~$b2Body$e_sleepFlag$$;
        if(!($b$$45_jn$$2_node1$$inline_855$$.$m_flags$ & $b2Body$e_staticFlag$$)) {
          for(var $cn$$ = $b$$45_jn$$2_node1$$inline_855$$.$m_contactList$;$cn$$ != null;$cn$$ = $cn$$.next) {
            if(!($cn$$.$contact$.$m_flags$ & 1)) {
              $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$AddContact$($cn$$.$contact$);
              $cn$$.$contact$.$m_flags$ |= 1;
              $i$$109_node2$$inline_856_other$$7$$ = $cn$$.$other$;
              if(!($i$$109_node2$$inline_856_other$$7$$.$m_flags$ & 4)) {
                $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$[$stackCount$$++] = $i$$109_node2$$inline_856_other$$7$$;
                $i$$109_node2$$inline_856_other$$7$$.$m_flags$ |= 4
              }
            }
          }
          for($b$$45_jn$$2_node1$$inline_855$$ = $b$$45_jn$$2_node1$$inline_855$$.$m_jointList$;$b$$45_jn$$2_node1$$inline_855$$ != null;$b$$45_jn$$2_node1$$inline_855$$ = $b$$45_jn$$2_node1$$inline_855$$.next) {
            if($b$$45_jn$$2_node1$$inline_855$$.$joint$.$m_islandFlag$ != true) {
              $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$AddJoint$($b$$45_jn$$2_node1$$inline_855$$.$joint$);
              $b$$45_jn$$2_node1$$inline_855$$.$joint$.$m_islandFlag$ = true;
              $i$$109_node2$$inline_856_other$$7$$ = $b$$45_jn$$2_node1$$inline_855$$.$other$;
              if(!($i$$109_node2$$inline_856_other$$7$$.$m_flags$ & 4)) {
                $body1$$inline_853_c$$17_c$$inline_841_j$$19_oldCount$$inline_858_stack$$1$$[$stackCount$$++] = $i$$109_node2$$inline_856_other$$7$$;
                $i$$109_node2$$inline_856_other$$7$$.$m_flags$ |= 4
              }
            }
          }
        }
      }
      $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$Solve$(this.$step$, this.$m_gravity$);
      this.$m_positionIterationCount$ = $b2Math$b2Max$$(this.$m_positionIterationCount$, $b2Island$m_positionIterationCount$$);
      this.$m_allowSleep$ && $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$UpdateSleep$($dt$$1$$);
      for($i$$109_node2$$inline_856_other$$7$$ = 0;$i$$109_node2$$inline_856_other$$7$$ < $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_bodyCount$;++$i$$109_node2$$inline_856_other$$7$$) {
        $b$$45_jn$$2_node1$$inline_855$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_bodies$[$i$$109_node2$$inline_856_other$$7$$];
        if($b$$45_jn$$2_node1$$inline_855$$.$m_flags$ & $b2Body$e_staticFlag$$) {
          $b$$45_jn$$2_node1$$inline_855$$.$m_flags$ &= -5
        }
        if($b$$45_jn$$2_node1$$inline_855$$.$IsFrozen$() && this.$m_listener$) {
          if(this.$m_listener$.$NotifyBoundaryViolated$($b$$45_jn$$2_node1$$inline_855$$) == 1) {
            this.$DestroyBody$($b$$45_jn$$2_node1$$inline_855$$);
            $JSCompiler_StaticMethods_CleanContactList$self$$inline_840_c$$inline_857_island$$.$m_bodies$[$i$$109_node2$$inline_856_other$$7$$] = null
          }
        }
      }
    }
  }
  this.$m_broadPhase$.$Commit$()
}, $Query$:function $$b2World$$$$$Query$$($aabb$$10_count$$12$$, $shapes$$, $i$$110_maxCount$$2$$) {
  var $results$$ = [];
  $aabb$$10_count$$12$$ = this.$m_broadPhase$.$QueryAABB$($aabb$$10_count$$12$$, $results$$, $i$$110_maxCount$$2$$);
  for($i$$110_maxCount$$2$$ = 0;$i$$110_maxCount$$2$$ < $aabb$$10_count$$12$$;++$i$$110_maxCount$$2$$) {
    $shapes$$[$i$$110_maxCount$$2$$] = $results$$[$i$$110_maxCount$$2$$]
  }
  return $aabb$$10_count$$12$$
}, $m_blockAllocator$:null, $m_stackAllocator$:null, $m_broadPhase$:null, $m_contactManager$:new $b2ContactManager$$, $m_bodyList$:null, $m_contactList$:null, $m_jointList$:null, $m_bodyCount$:0, $m_contactCount$:0, $m_jointCount$:0, $m_bodyDestroyList$:null, $m_gravity$:null, $m_allowSleep$:null, $m_groundBody$:null, $m_listener$:null, $m_filter$:null, $m_positionIterationCount$:0};
var $b2World$s_enablePositionCorrection$$ = 1, $b2World$s_enableWarmStarting$$ = 1;
// Input 134
function $b2RevoluteJointDef$$() {
  this.type = 0;
  this.$body2$ = this.$body1$ = this.$userData$ = null;
  this.$collideConnected$ = false;
  this.type = 1;
  this.$anchorPoint$ = new $b2Vec2$$(0, 0);
  this.$motorSpeed$ = this.$motorTorque$ = this.$upperAngle$ = this.$lowerAngle$ = 0;
  this.$enableMotor$ = this.$enableLimit$ = false
}
Object.extend($b2RevoluteJointDef$$.prototype, $b2JointDef$$.prototype);
Object.extend($b2RevoluteJointDef$$.prototype, {$anchorPoint$:null, $lowerAngle$:null, $upperAngle$:null, $motorTorque$:null, $motorSpeed$:null, $enableLimit$:null, $enableMotor$:null});
// Input 135
// Input 136
function $demos$compound$$($world$$4$$) {
  var $i$$112$$;
  for($i$$112$$ = 1;$i$$112$$ <= 4;$i$$112$$++) {
    var $world$$inline_871_world$$inline_888$$ = $world$$4$$, $x$$inline_872_x$$inline_889$$ = 150 + 3 * Math.random(), $y$$inline_873_y$$inline_890$$ = 40 * $i$$112$$, $R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$ = [[-30, 0], [30, 0], [0, 15]], $ballSd1$$inline_891_polySd1$$inline_875$$ = new $b2PolyDef$$;
    $ballSd1$$inline_891_polySd1$$inline_875$$.$vertexCount$ = $R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$.length;
    var $i$$inline_876$$ = void 0;
    for($i$$inline_876$$ = 0;$i$$inline_876$$ < $R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$.length;$i$$inline_876$$++) {
      $ballSd1$$inline_891_polySd1$$inline_875$$.$vertices$[$i$$inline_876$$].$Set$($R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$[$i$$inline_876$$][0], $R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$[$i$$inline_876$$][1])
    }
    $ballSd1$$inline_891_polySd1$$inline_875$$.$localRotation$ = 0.3524 * Math.PI;
    var $R1$$inline_877_ballSd2$$inline_892_polySd2$$inline_878$$ = new $b2Mat22$$($ballSd1$$inline_891_polySd1$$inline_875$$.$localRotation$);
    $ballSd1$$inline_891_polySd1$$inline_875$$.$localPosition$ = $b2Math$b2MulMV$$($R1$$inline_877_ballSd2$$inline_892_polySd2$$inline_878$$, new $b2Vec2$$(30, 0));
    $ballSd1$$inline_891_polySd1$$inline_875$$.$density$ = 1;
    $R1$$inline_877_ballSd2$$inline_892_polySd2$$inline_878$$ = new $b2PolyDef$$;
    $R1$$inline_877_ballSd2$$inline_892_polySd2$$inline_878$$.$vertexCount$ = $R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$.length;
    for($i$$inline_876$$ = 0;$i$$inline_876$$ < $R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$.length;$i$$inline_876$$++) {
      $R1$$inline_877_ballSd2$$inline_892_polySd2$$inline_878$$.$vertices$[$i$$inline_876$$].$Set$($R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$[$i$$inline_876$$][0], $R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$[$i$$inline_876$$][1])
    }
    $R1$$inline_877_ballSd2$$inline_892_polySd2$$inline_878$$.$localRotation$ = -0.3524 * Math.PI;
    $R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$ = new $b2Mat22$$($R1$$inline_877_ballSd2$$inline_892_polySd2$$inline_878$$.$localRotation$);
    $R1$$inline_877_ballSd2$$inline_892_polySd2$$inline_878$$.$localPosition$ = $b2Math$b2MulMV$$($R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$, new $b2Vec2$$(-30, 0));
    $R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$ = new $b2BodyDef$$;
    $R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$.$AddShape$($ballSd1$$inline_891_polySd1$$inline_875$$);
    $R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$.$AddShape$($R1$$inline_877_ballSd2$$inline_892_polySd2$$inline_878$$);
    $R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$.position.$Set$($x$$inline_872_x$$inline_889$$, $y$$inline_873_y$$inline_890$$);
    $world$$inline_871_world$$inline_888$$.$CreateBody$($R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$)
  }
  for($i$$112$$ = 1;$i$$112$$ <= 4;$i$$112$$++) {
    $world$$inline_871_world$$inline_888$$ = $world$$4$$;
    $x$$inline_872_x$$inline_889$$ = 350 + 3 * Math.random();
    $y$$inline_873_y$$inline_890$$ = 45 * $i$$112$$;
    $ballSd1$$inline_891_polySd1$$inline_875$$ = new $b2CircleDef$$;
    $ballSd1$$inline_891_polySd1$$inline_875$$.$density$ = 1;
    $ballSd1$$inline_891_polySd1$$inline_875$$.$radius$ = 20;
    $ballSd1$$inline_891_polySd1$$inline_875$$.$restitution$ = 0.2;
    $ballSd1$$inline_891_polySd1$$inline_875$$.$localPosition$.$Set$(-20, 0);
    $R1$$inline_877_ballSd2$$inline_892_polySd2$$inline_878$$ = new $b2CircleDef$$;
    $R1$$inline_877_ballSd2$$inline_892_polySd2$$inline_878$$.$density$ = 1;
    $R1$$inline_877_ballSd2$$inline_892_polySd2$$inline_878$$.$radius$ = 20;
    $R1$$inline_877_ballSd2$$inline_892_polySd2$$inline_878$$.$restitution$ = 0.2;
    $R1$$inline_877_ballSd2$$inline_892_polySd2$$inline_878$$.$localPosition$.$Set$(20, 0);
    $R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$ = new $b2BodyDef$$;
    $R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$.$AddShape$($ballSd1$$inline_891_polySd1$$inline_875$$);
    $R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$.$AddShape$($R1$$inline_877_ballSd2$$inline_892_polySd2$$inline_878$$);
    $R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$.position.$Set$($x$$inline_872_x$$inline_889$$, $y$$inline_873_y$$inline_890$$);
    $world$$inline_871_world$$inline_888$$.$CreateBody$($R2$$inline_879_ballBd$$inline_893_points$$inline_874_polyBd$$inline_880$$)
  }
}
;
// Input 137
function $demos$crank$$($world$$7$$) {
  var $ground$$ = $world$$7$$.$m_groundBody$, $sd$$1$$ = new $b2BoxDef$$;
  $sd$$1$$.$extents$.$Set$(5, 25);
  $sd$$1$$.$density$ = 1;
  var $bd$$2$$ = new $b2BodyDef$$;
  $bd$$2$$.$AddShape$($sd$$1$$);
  var $pjd_rjd$$ = new $b2RevoluteJointDef$$, $prevBody$$ = $ground$$;
  $bd$$2$$.position.$Set$(250, 210);
  var $body$$12$$ = $world$$7$$.$CreateBody$($bd$$2$$);
  $pjd_rjd$$.$anchorPoint$.$Set$(250, 235);
  $pjd_rjd$$.$body1$ = $prevBody$$;
  $pjd_rjd$$.$body2$ = $body$$12$$;
  $pjd_rjd$$.$motorSpeed$ = -1 * Math.PI;
  $pjd_rjd$$.$motorTorque$ = 5E8;
  $pjd_rjd$$.$enableMotor$ = true;
  $world$$7$$.$CreateJoint$($pjd_rjd$$);
  $prevBody$$ = $body$$12$$;
  $sd$$1$$.$extents$.$Set$(5, 45);
  $bd$$2$$.position.$Set$(250, 140);
  $body$$12$$ = $world$$7$$.$CreateBody$($bd$$2$$);
  $pjd_rjd$$.$anchorPoint$.$Set$(250, 185);
  $pjd_rjd$$.$body1$ = $prevBody$$;
  $pjd_rjd$$.$body2$ = $body$$12$$;
  $pjd_rjd$$.$enableMotor$ = false;
  $world$$7$$.$CreateJoint$($pjd_rjd$$);
  $prevBody$$ = $body$$12$$;
  $sd$$1$$.$extents$.$Set$(20, 20);
  $bd$$2$$.position.$Set$(250, 95);
  $body$$12$$ = $world$$7$$.$CreateBody$($bd$$2$$);
  $pjd_rjd$$.$anchorPoint$.$Set$(250, 95);
  $pjd_rjd$$.$body1$ = $prevBody$$;
  $pjd_rjd$$.$body2$ = $body$$12$$;
  $world$$7$$.$CreateJoint$($pjd_rjd$$);
  $pjd_rjd$$ = new $b2PrismaticJointDef$$;
  $pjd_rjd$$.$anchorPoint$.$Set$(250, 95);
  $pjd_rjd$$.$body1$ = $ground$$;
  $pjd_rjd$$.$body2$ = $body$$12$$;
  $pjd_rjd$$.axis.$Set$(0, 1);
  $pjd_rjd$$.$motorSpeed$ = 0;
  $pjd_rjd$$.$motorForce$ = 1E5;
  $pjd_rjd$$.$enableMotor$ = true;
  $world$$7$$.$CreateJoint$($pjd_rjd$$);
  $sd$$1$$.$density$ = 2;
  $bd$$2$$.position.$Set$(250, 10);
  $world$$7$$.$CreateBody$($bd$$2$$)
}
;
// Input 138
function $demos$pendulum$$($world$$8$$) {
  var $i$$114$$, $ground$$1$$ = $world$$8$$.$m_groundBody$, $jointDef$$ = new $b2RevoluteJointDef$$;
  for($i$$114$$ = 0;$i$$114$$ < 4;$i$$114$$++) {
    $jointDef$$.$anchorPoint$.$Set$(250 + 40 * $i$$114$$, 50);
    $jointDef$$.$body1$ = $ground$$1$$;
    $jointDef$$.$body2$ = $createBall$$($world$$8$$, 250 + 40 * $i$$114$$, 200);
    $world$$8$$.$CreateJoint$($jointDef$$)
  }
  $jointDef$$.$anchorPoint$.$Set$(210, 50);
  $jointDef$$.$body1$ = $ground$$1$$;
  $jointDef$$.$body2$ = $createBall$$($world$$8$$, 60, 50);
  $world$$8$$.$CreateJoint$($jointDef$$)
}
;
// Input 139
function $demos$stack$$($world$$9$$) {
  var $i$$115_sd$$2$$ = new $b2BoxDef$$, $bd$$3$$ = new $b2BodyDef$$;
  $bd$$3$$.$AddShape$($i$$115_sd$$2$$);
  $i$$115_sd$$2$$.$density$ = 1;
  $i$$115_sd$$2$$.$friction$ = 0.5;
  $i$$115_sd$$2$$.$extents$.$Set$(10, 10);
  for($i$$115_sd$$2$$ = 0;$i$$115_sd$$2$$ < 8;$i$$115_sd$$2$$++) {
    $bd$$3$$.position.$Set$(250 - Math.random() * 2 - 1, 245 - $i$$115_sd$$2$$ * 22);
    $world$$9$$.$CreateBody$($bd$$3$$)
  }
  for($i$$115_sd$$2$$ = 0;$i$$115_sd$$2$$ < 8;$i$$115_sd$$2$$++) {
    $bd$$3$$.position.$Set$(150 - Math.random() * 5 + $i$$115_sd$$2$$, 245 - $i$$115_sd$$2$$ * 22);
    $world$$9$$.$CreateBody$($bd$$3$$)
  }
  for($i$$115_sd$$2$$ = 0;$i$$115_sd$$2$$ < 8;$i$$115_sd$$2$$++) {
    $bd$$3$$.position.$Set$(350 + Math.random() * 5 - $i$$115_sd$$2$$, 245 - $i$$115_sd$$2$$ * 22);
    $world$$9$$.$CreateBody$($bd$$3$$)
  }
}
;
// Input 140
function $demos$top$$($world$$10$$) {
  var $ballSd$$inline_907_jointDef$$1$$ = new $b2CircleDef$$;
  $ballSd$$inline_907_jointDef$$1$$.$radius$ = 50;
  $ballSd$$inline_907_jointDef$$1$$.$restitution$ = 0.2;
  var $ballBd$$inline_908_pendulum_seesaw$$ = new $b2BodyDef$$;
  $ballBd$$inline_908_pendulum_seesaw$$.$AddShape$($ballSd$$inline_907_jointDef$$1$$);
  $ballBd$$inline_908_pendulum_seesaw$$.position.$Set$(350, 100);
  $world$$10$$.$CreateBody$($ballBd$$inline_908_pendulum_seesaw$$);
  $demos$top$createPoly$$($world$$10$$, 100, 100, [[0, 0], [10, 30], [-10, 30]], true);
  $demos$top$createPoly$$($world$$10$$, 150, 150, [[0, 0], [10, 30], [-10, 30]], true);
  $ballBd$$inline_908_pendulum_seesaw$$ = $createBox$$($world$$10$$, 150, 100, 20, 20, false);
  $ballSd$$inline_907_jointDef$$1$$ = new $b2RevoluteJointDef$$;
  $ballSd$$inline_907_jointDef$$1$$.$body1$ = $ballBd$$inline_908_pendulum_seesaw$$;
  $ballSd$$inline_907_jointDef$$1$$.$body2$ = $world$$10$$.$m_groundBody$;
  $ballSd$$inline_907_jointDef$$1$$.$anchorPoint$ = $ballBd$$inline_908_pendulum_seesaw$$.$m_position$;
  $world$$10$$.$CreateJoint$($ballSd$$inline_907_jointDef$$1$$);
  $ballBd$$inline_908_pendulum_seesaw$$ = $demos$top$createPoly$$($world$$10$$, 300, 200, [[0, 0], [100, 30], [-100, 30]]);
  $ballSd$$inline_907_jointDef$$1$$.$body1$ = $ballBd$$inline_908_pendulum_seesaw$$;
  $ballSd$$inline_907_jointDef$$1$$.$anchorPoint$ = $ballBd$$inline_908_pendulum_seesaw$$.$m_position$;
  $world$$10$$.$CreateJoint$($ballSd$$inline_907_jointDef$$1$$)
}
function $demos$top$createPoly$$($world$$12$$, $x$$51$$, $y$$28$$, $points$$1_polyBd$$1$$, $fixed$$1_i$$116$$) {
  var $polySd$$ = new $b2PolyDef$$;
  if(!$fixed$$1_i$$116$$) {
    $polySd$$.$density$ = 1
  }
  $polySd$$.$vertexCount$ = $points$$1_polyBd$$1$$.length;
  for($fixed$$1_i$$116$$ = 0;$fixed$$1_i$$116$$ < $points$$1_polyBd$$1$$.length;$fixed$$1_i$$116$$++) {
    $polySd$$.$vertices$[$fixed$$1_i$$116$$].$Set$($points$$1_polyBd$$1$$[$fixed$$1_i$$116$$][0], $points$$1_polyBd$$1$$[$fixed$$1_i$$116$$][1])
  }
  $points$$1_polyBd$$1$$ = new $b2BodyDef$$;
  $points$$1_polyBd$$1$$.$AddShape$($polySd$$);
  $points$$1_polyBd$$1$$.position.$Set$($x$$51$$, $y$$28$$);
  return $world$$12$$.$CreateBody$($points$$1_polyBd$$1$$)
}
;
// Input 141
function $demo$$($canvas$$) {
  this.$m_initId$ = 0;
  this.$m_demos$ = [];
  this.$m_demos$.push($demos$compound$$);
  this.$m_demos$.push($demos$crank$$);
  this.$m_demos$.push($demos$stack$$);
  this.$m_demos$.push($demos$pendulum$$);
  this.$m_demos$.push($demos$top$$);
  this.$ctx$ = $canvas$$.getContext("2d");
  $canvasWidth$$ = $canvas$$.width;
  $canvasHeight$$ = $canvas$$.height;
  var $_this$$ = this;
  $goog$events$listen$$(window, "click", function($e$$55$$) {
    Math.random() < 0.5 ? $createBall$$($_this$$.$world$, $e$$55$$.offsetX, $e$$55$$.offsetY, 10) : $createBox$$($_this$$.$world$, $e$$55$$.offsetX, $e$$55$$.offsetY, 10, 10, false)
  });
  $goog$events$listen$$(window, "contextmenu", function($e$$56$$) {
    $e$$56$$.preventDefault && $e$$56$$.preventDefault();
    $JSCompiler_StaticMethods__setupWorld$$($_this$$, -1);
    return false
  });
  $JSCompiler_StaticMethods__setupWorld$$(this);
  this.$_step$()
}
var $canvasWidth$$, $canvasHeight$$;
function $JSCompiler_StaticMethods__setupWorld$$($JSCompiler_StaticMethods__setupWorld$self$$, $demoId$$) {
  $demoId$$ || ($demoId$$ = 0);
  var $world$$inline_917_worldAABB$$inline_916$$ = new $b2AABB$$;
  $world$$inline_917_worldAABB$$inline_916$$.$minVertex$.$Set$(-1000, -1000);
  $world$$inline_917_worldAABB$$inline_916$$.$maxVertex$.$Set$(1E3, 1E3);
  $world$$inline_917_worldAABB$$inline_916$$ = new $b2World$$($world$$inline_917_worldAABB$$inline_916$$, new $b2Vec2$$(0, 300), true);
  var $groundSd$$inline_1138$$ = new $b2BoxDef$$;
  $groundSd$$inline_1138$$.$extents$.$Set$(1E3, 50);
  $groundSd$$inline_1138$$.$restitution$ = 0.2;
  var $groundBd$$inline_1139$$ = new $b2BodyDef$$;
  $groundBd$$inline_1139$$.$AddShape$($groundSd$$inline_1138$$);
  $groundBd$$inline_1139$$.position.$Set$(-500, 340);
  $world$$inline_917_worldAABB$$inline_916$$.$CreateBody$($groundBd$$inline_1139$$);
  $createBox$$($world$$inline_917_worldAABB$$inline_916$$, 0, 125, 10, 250);
  $createBox$$($world$$inline_917_worldAABB$$inline_916$$, 500, 125, 10, 250);
  $JSCompiler_StaticMethods__setupWorld$self$$.$world$ = $world$$inline_917_worldAABB$$inline_916$$;
  $JSCompiler_StaticMethods__setupWorld$self$$.$m_initId$ += $demoId$$;
  $JSCompiler_StaticMethods__setupWorld$self$$.$m_initId$ %= $JSCompiler_StaticMethods__setupWorld$self$$.$m_demos$.length;
  if(!isNaN($JSCompiler_StaticMethods__setupWorld$self$$.$m_initId$)) {
    if($JSCompiler_StaticMethods__setupWorld$self$$.$m_initId$ < 0) {
      $JSCompiler_StaticMethods__setupWorld$self$$.$m_initId$ = $JSCompiler_StaticMethods__setupWorld$self$$.$m_demos$.length + $JSCompiler_StaticMethods__setupWorld$self$$.$m_initId$
    }
    $JSCompiler_StaticMethods__setupWorld$self$$.$m_demos$[$JSCompiler_StaticMethods__setupWorld$self$$.$m_initId$]($JSCompiler_StaticMethods__setupWorld$self$$.$world$)
  }
}
$demo$$.prototype.$_step$ = function $$demo$$$$$_step$$() {
  this.$world$.$Step$(1 / 60, 1);
  this.$ctx$.clearRect(0, 0, $canvasWidth$$, $canvasHeight$$);
  for(var $b$$inline_927_world$$inline_924$$ = this.$world$, $context$$inline_925$$ = this.$ctx$, $j$$inline_926_s$$inline_928$$ = $b$$inline_927_world$$inline_924$$.$m_jointList$;$j$$inline_926_s$$inline_928$$;$j$$inline_926_s$$inline_928$$ = $j$$inline_926_s$$inline_928$$.$m_next$) {
    var $context$$inline_1170_world$$inline_1150$$ = $b$$inline_927_world$$inline_924$$, $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$ = $j$$inline_926_s$$inline_928$$, $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$ = $context$$inline_925$$, $b1$$inline_1153_i$$inline_1176_r$$inline_1172$$ = $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$m_body1$, $b2$$inline_1154_v$$inline_1177$$ = $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$m_body2$, 
    $x1$$inline_1155$$ = $b1$$inline_1153_i$$inline_1176_r$$inline_1172$$.$m_position$, $x2$$inline_1156$$ = $b2$$inline_1154_v$$inline_1177$$.$m_position$, $p1$$inline_1157$$ = $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$GetAnchor1$(), $p2$$inline_1158$$ = $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$GetAnchor2$();
    $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.strokeStyle = "#00eeee";
    $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.beginPath();
    switch($ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$m_type$) {
      case 3:
        $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.moveTo($p1$$inline_1157$$.x, $p1$$inline_1157$$.y);
        $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.lineTo($p2$$inline_1158$$.x, $p2$$inline_1158$$.y);
        break;
      case 4:
        break;
      default:
        if($b1$$inline_1153_i$$inline_1176_r$$inline_1172$$ == $context$$inline_1170_world$$inline_1150$$.$m_groundBody$) {
          $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.moveTo($p1$$inline_1157$$.x, $p1$$inline_1157$$.y);
          $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.lineTo($x2$$inline_1156$$.x, $x2$$inline_1156$$.y)
        }else {
          if($b2$$inline_1154_v$$inline_1177$$ == $context$$inline_1170_world$$inline_1150$$.$m_groundBody$) {
            $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.moveTo($p1$$inline_1157$$.x, $p1$$inline_1157$$.y);
            $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.lineTo($x1$$inline_1155$$.x, $x1$$inline_1155$$.y)
          }else {
            $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.moveTo($x1$$inline_1155$$.x, $x1$$inline_1155$$.y);
            $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.lineTo($p1$$inline_1157$$.x, $p1$$inline_1157$$.y);
            $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.lineTo($x2$$inline_1156$$.x, $x2$$inline_1156$$.y);
            $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.lineTo($p2$$inline_1158$$.x, $p2$$inline_1158$$.y)
          }
        }
        break
    }
    $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.stroke()
  }
  for($b$$inline_927_world$$inline_924$$ = $b$$inline_927_world$$inline_924$$.$m_bodyList$;$b$$inline_927_world$$inline_924$$;$b$$inline_927_world$$inline_924$$ = $b$$inline_927_world$$inline_924$$.$m_next$) {
    for($j$$inline_926_s$$inline_928$$ = $b$$inline_927_world$$inline_924$$.$m_shapeList$;$j$$inline_926_s$$inline_928$$ != null;$j$$inline_926_s$$inline_928$$ = $j$$inline_926_s$$inline_928$$.$GetNext$()) {
      $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$ = $j$$inline_926_s$$inline_928$$;
      $context$$inline_1170_world$$inline_1150$$ = $context$$inline_925$$;
      $context$$inline_1170_world$$inline_1150$$.strokeStyle = "#ffffff";
      $context$$inline_1170_world$$inline_1150$$.beginPath();
      switch($ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$m_type$) {
        case 0:
          $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$ = $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$m_position$;
          $b1$$inline_1153_i$$inline_1176_r$$inline_1172$$ = $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$m_radius$;
          $context$$inline_1170_world$$inline_1150$$.arc($ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$m_position$.x, $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$m_position$.y, $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$m_radius$, 0, 2 * Math.PI, false);
          $context$$inline_1170_world$$inline_1150$$.moveTo($context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.x, $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.y);
          $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$ = $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$m_R$.$col1$;
          $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$ = new $b2Vec2$$($context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.x + $b1$$inline_1153_i$$inline_1176_r$$inline_1172$$ * $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.x, $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.y + $b1$$inline_1153_i$$inline_1176_r$$inline_1172$$ * $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.y);
          $context$$inline_1170_world$$inline_1150$$.lineTo($ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.x, $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.y);
          break;
        case 2:
          $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$ = $b2Math$AddVV$$($ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$m_position$, $b2Math$b2MulMV$$($ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$m_R$, $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$m_vertices$[0]));
          $context$$inline_1170_world$$inline_1150$$.moveTo($context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.x, $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.y);
          for($b1$$inline_1153_i$$inline_1176_r$$inline_1172$$ = 0;$b1$$inline_1153_i$$inline_1176_r$$inline_1172$$ < $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$m_vertexCount$;$b1$$inline_1153_i$$inline_1176_r$$inline_1172$$++) {
            $b2$$inline_1154_v$$inline_1177$$ = $b2Math$AddVV$$($ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$m_position$, $b2Math$b2MulMV$$($ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$m_R$, $ax$$inline_1173_joint$$inline_1151_pos2$$inline_1174_shape$$inline_1169$$.$m_vertices$[$b1$$inline_1153_i$$inline_1176_r$$inline_1172$$]));
            $context$$inline_1170_world$$inline_1150$$.lineTo($b2$$inline_1154_v$$inline_1177$$.x, $b2$$inline_1154_v$$inline_1177$$.y)
          }
          $context$$inline_1170_world$$inline_1150$$.lineTo($context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.x, $context$$inline_1152_pos$$inline_1171_tV$$inline_1175$$.y);
          break
      }
      $context$$inline_1170_world$$inline_1150$$.stroke()
    }
  }
  $goog$global$$.setTimeout($goog$bind$$(this.$_step$, this), 10)
};
function $createBall$$($world$$15$$, $x$$52$$, $y$$29$$, $ballBd$$2_radius$$3$$) {
  $ballBd$$2_radius$$3$$ || ($ballBd$$2_radius$$3$$ = 20);
  var $ballSd$$1$$ = new $b2CircleDef$$;
  $ballSd$$1$$.$density$ = 1;
  $ballSd$$1$$.$radius$ = $ballBd$$2_radius$$3$$;
  $ballSd$$1$$.$restitution$ = 1;
  $ballSd$$1$$.$friction$ = 0;
  $ballBd$$2_radius$$3$$ = new $b2BodyDef$$;
  $ballBd$$2_radius$$3$$.$AddShape$($ballSd$$1$$);
  $ballBd$$2_radius$$3$$.position.$Set$($x$$52$$, $y$$29$$);
  return $world$$15$$.$CreateBody$($ballBd$$2_radius$$3$$)
}
function $createBox$$($world$$16$$, $x$$53$$, $y$$30$$, $boxBd_width$$7$$, $height$$7$$, $fixed$$2$$) {
  if(typeof $fixed$$2$$ == "undefined") {
    $fixed$$2$$ = true
  }
  var $boxSd$$ = new $b2BoxDef$$;
  if(!$fixed$$2$$) {
    $boxSd$$.$density$ = 1
  }
  $boxSd$$.$extents$.$Set$($boxBd_width$$7$$, $height$$7$$);
  $boxBd_width$$7$$ = new $b2BodyDef$$;
  $boxBd_width$$7$$.$AddShape$($boxSd$$);
  $boxBd_width$$7$$.position.$Set$($x$$53$$, $y$$30$$);
  return $world$$16$$.$CreateBody$($boxBd_width$$7$$)
}
;
// Input 142
$goog$events$listen$$(window, "load", function() {
  new $demo$$(document.getElementsByTagName("canvas")[0])
});
