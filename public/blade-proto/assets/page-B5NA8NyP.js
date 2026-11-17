const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./theme-Dc67TvP0.css","./panel-BfWIh3qH.css","./theme-DI7BNNty.css","./controls-CLnNPS7m.css","./theme-SRe46kBe.css","./main-CkZSyCeZ.js","./three.core-Dp-eO7LC.js","./mouthShapes-PzhQBtKG.js","./rolldown-runtime-COiEfhsA.js","./SkeletonUtils-CHxfGqZJ.js","./preload-helper-CRzLMJPS.js"])))=>i.map(i=>d[i]);
import{a as e,i as t,t as n}from"./moods-B9AJrLEW.js";import{t as r}from"./preload-helper-CRzLMJPS.js";import{n as i}from"./face-Kv9BV66a.js";import{a,c as o,i as s,l as c,n as l,o as u,r as d,s as f}from"./records-BFON4GSV.js";var p=`<!doctype html>\r
<html lang="en">\r
<head>\r
	<meta charset="utf-8">\r
	<meta name="viewport" content="width=device-width, initial-scale=1">\r
	<title>Retro Character Maker</title>\r
	<!-- theme.css is the skin (every colour, font, border and spacing value);\r
	     panel.css is the rules. Swap the theme to re-skin the tool. -->\r
	<link rel="stylesheet" href="/src/theme.css">\r
	<link rel="stylesheet" href="/src/panel.css">\r
</head>\r
<body>\r
	<div id="panel">\r
		<header id="panelHead">\r
			<h1>RETRO CHARACTER MAKER</h1>\r
			<div class="note">Double-click a slider to reset it. A dot marks a changed slider.</div>\r
		</header>\r
		<!-- the section rail and the sections are built by src/panel.js from\r
		     src/panelSections.js, which says where each part below goes -->\r
		<nav id="rail" aria-label="Sections"></nav>\r
		<div id="sections">\r
			<!-- CC BY 4.0 requires this credit wherever the base models are shown or shared -->\r
			<div class="note credits">Base models: <a href="https://sketchfab.com/3d-models/psx-base-male-playstation-character-low-poly-186d173d59044734b908215ecbc88b1f" target="_blank" rel="noopener">PSX Base Male</a> and <a href="https://sketchfab.com/3d-models/psx-base-female-low-poly-8c88f6a41a4d4ac09a2e9c7cca61708b" target="_blank" rel="noopener">PSX Base Female</a> by jonniemadeit, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>. <span class="posesCredit">Poses: Universal Animation Library by Quaternius (CC0).</span></div>\r
		</div>\r
		<footer id="exportBar">\r
			<span class="exportTitle">Export</span>\r
			<div class="btns">\r
				<button id="exportGlb" class="primary">Rigged GLB</button>\r
				<button id="exportPng">Texture PNG</button>\r
				<button id="snapshot">Screenshot</button>\r
			</div>\r
		</footer>\r
\r
		<!-- The controls, as loose parts. They stay out of sight until panel.js\r
		     moves each into its section. -->\r
		<div id="parts" hidden>\r
			<div data-part="drop">\r
				<div id="drop" title="One photo with one face: edit it here. A face sheet, a group or several photos: every face becomes a saved character, and the bar under the view steps through them. Add a .csv to name them and set their bodies (one row per person).">Drop photos or a face sheet<br>or click to choose<div class="dropHint">1 face: edit it - more: a batch</div></div>\r
				<input id="file" type="file" accept="image/*,.csv,text/csv" multiple hidden>\r
				<div id="status"></div>\r
			</div>\r
\r
			<div data-part="saved">\r
				<!-- saved characters: click a row to load it, tick rows to act on several -->\r
				<div class="rosterHead"><span>Saved</span><label class="check" title="Tick every saved character"><input id="rosterAll" type="checkbox"> all</label></div>\r
				<div id="rosterList"></div>\r
				<div id="rosterPick" hidden>\r
					<div id="rosterCount"></div>\r
					<div class="btns">\r
						<button id="pickBatch" title="Step through the ticked characters in the bar under the view (tweaks save as you go, Export All zips them)">Open as batch</button>\r
						<button id="pickExport" title="The ticked characters as GLBs in one .zip">Export</button>\r
						<button id="pickBackup" title="A backup file with only the ticked characters (photos included), to keep or to restore in another browser">Back up</button>\r
						<button id="pickDelete" title="Delete the ticked characters">Delete</button>\r
						<button id="pickClear" title="Untick them all">Clear</button>\r
					</div>\r
				</div>\r
			</div>\r
\r
			<div data-part="saveAs">\r
				<label class="row">Name <input id="charName" type="text" placeholder="name"><span></span></label>\r
				<div class="btns">\r
					<button id="charSave" title="Save over the selected character, or save a new one">Save</button>\r
					<button id="charSaveNew">Save as new</button>\r
					<button id="charDelete">Delete</button>\r
				</div>\r
			</div>\r
\r
			<div data-part="backup">\r
				<div class="note links">Saved in this browser only.\r
					<button id="rosterExport" class="link" title="Save every character in this browser (photos included) to one file, to keep or to restore in another browser">back up</button> -\r
					<button id="rosterImport" class="link" title="Add the characters from a backup file to this browser">restore</button>\r
					<input id="rosterFile" type="file" accept=".json,application/json" hidden>\r
				</div>\r
			</div>\r
\r
			<div data-part="photoSource">\r
				<div class="sourceCard">\r
					<canvas id="texPreview" width="128" height="128"></canvas>\r
					<div class="sourceSide">\r
						<div class="note">Best results: face straight at the camera, even light, hair off the face.</div>\r
						<div class="btns">\r
							<button id="nextFace" hidden>Next face in photo</button>\r
							<button id="aiClean" hidden title="Sends a crop of this face to OpenAI and replaces the photo with a clean front-facing portrait">AI clean-up</button>\r
							<button id="useOriginal" hidden>Back to original</button>\r
						</div>\r
						<div id="aiNote" hidden class="note">AI clean-up sends a crop of the selected face to OpenAI.</div>\r
					</div>\r
				</div>\r
			</div>\r
\r
			<div data-part="straighten">\r
				<label class="row">Straighten <select id="front" title="Auto mirrors only a turned face. Straighten only keeps both sides as they are (moles, tattoos). Raw uses the photo as shot."><option value="auto">Auto</option><option value="mirror">Mirror</option><option value="on">Straighten only</option><option value="off">Raw (as shot)</option></select><span></span></label>\r
				<div id="turnInfo" class="note"></div>\r
			</div>\r
\r
			<div data-part="photoFit">\r
				<label class="row">Zoom <input id="zoom" type="range" min="0.5" max="1.8" step="0.01" value="1"><output></output></label>\r
				<label class="row">Left/right <input id="offX" type="range" min="-0.3" max="0.3" step="0.005" value="0"><output></output></label>\r
				<label class="row">Up/down <input id="offY" type="range" min="-0.3" max="0.3" step="0.005" value="0"><output></output></label>\r
				<label class="row">Stretch <input id="stretch" type="range" min="0.6" max="1.8" step="0.01" value="1"><output></output></label>\r
				<label class="row" title="Height of the forehead on top of the automatic fit. Needs Straighten on.">Forehead <input id="forehead" type="range" min="0.6" max="1.4" step="0.01" value="1"><output></output></label>\r
				<label class="row">Edge blend <input id="blend" type="range" min="0" max="1" step="0.05" value="0.7"><output></output></label>\r
				<label class="row">Texture <select id="res"><option>64</option><option selected>128</option><option>256</option></select><span></span></label>\r
				<label class="check"><input id="dehair" type="checkbox" checked> Remove hair over forehead</label>\r
				<label class="check"><input id="mask" type="checkbox" checked> Blend face edge into skin</label>\r
			</div>\r
\r
			<div data-part="base">\r
				<label class="row">Base <select id="body"><option value="male">Male</option><option value="female">Female</option></select><span></span></label>\r
			</div>\r
\r
			<div data-part="presets">\r
				<div class="shapeHead"><span>Preset</span><span id="shapeName"></span></div>\r
				<div id="shapes" class="shapes" title="Click a preset to set the body to it (height is kept)"></div>\r
			</div>\r
\r
			<div data-part="mainDials">\r
				<label class="row" title="The whole figure, 4 ft to 7 ft (122-213 cm)">Height <input id="heightIn" type="range" min="122" max="213" step="1" value="176"><span id="heightOut"></span></label>\r
				<label class="row" id="bmiRow" title="How heavy the body is for its height: weighed from the mesh itself (its volume times the density of a body), so every slider counts, and it follows the height the way real people's does (the slider keeps the body mass index, BMI, as Height moves). Drag, or type a weight (85, 85kg or 187lb) and press Enter. Random stays in the middle; the ends go a little past the thinnest and heaviest 5 in 100 real adults." data-ends="thin|heavy">Weight <input id="bmi" type="range" min="15" max="45" step="0.1" value="25"><span id="bmiOut"></span><span id="weightOut"><input id="weightIn" type="text" inputmode="decimal" autocomplete="off" spellcheck="false"><span id="weightText"></span><span id="bmiText"></span></span></label>\r
				<label class="row" title="Soft (left) or muscular (right) at the same weight: muscle is broad shoulders, thick arms, chest and neck and a firm waist; soft is a rounder middle and hips, sloping shoulders and smaller arms" data-ends="soft|muscular">Muscle <input id="muscle" type="range" min="-1" max="1" step="0.05" value="0"><output></output></label>\r
			</div>\r
\r
			<div data-part="bodyButtons">\r
				<div class="btns">\r
					<button id="bodyRandom" title="A random preset, the dials rolled (mostly near the middle), small random tweaks, all inside the realistic range, and a random height">Random body</button>\r
					<button id="buildReset" title="Weight, Stature and Shoulders back to where the preset had them; keeps the Fine tune changes">Reset dials</button>\r
				</div>\r
			</div>\r
\r
			<div data-part="buildDials">\r
				<div class="sub">Build</div>\r
				<label class="row" title="Stocky (left) or lanky (right): limb, neck and torso lengths and head size; the middle is as modelled" data-ends="stocky|lanky">Stature <input id="stature" type="range" min="-1" max="1" step="0.05" value="0"><output></output></label>\r
				<label class="row" title="Narrow (left) or broad (right) shoulders: the ribcage and shoulder girdle widen and the arms move out with them" data-ends="narrow|broad">Shoulders <input id="shoulders" type="range" min="-1" max="1" step="0.05" value="0"><output></output></label>\r
				<div class="btns">\r
					<button id="bodyReset" title="Back to the preset: clears every Fine tune change (the dots); keeps the dials">Reset body</button>\r
				</div>\r
			</div>\r
\r
			<div data-part="presetButtons">\r
				<div class="sub">Your presets</div>\r
				<div class="btns presetBtns">\r
					<button id="presetSave" title="Stores the current body (everything but height) and dials as a preset of your own for this base">Save as preset</button>\r
					<button id="presetRename">Rename</button>\r
					<button id="presetDelete">Delete</button>\r
				</div>\r
			</div>\r
\r
			<div data-part="bodySliders">\r
				<div class="sub">Frame &amp; lengths</div>\r
				<label class="row" data-ends="small|big">Head size <input id="b_headSize" type="range" value="1"><output></output></label>\r
				<label class="row" title="Ribcage and shoulder girdle width; the arm joints move out with it" data-ends="narrow|broad">Upper body <input id="b_upperWidth" type="range" value="1"><output></output></label>\r
				<label class="row" title="Moves only the arm joints in or out along the collarbone (the body stays as it is)" data-ends="in|out">Arm spacing <input id="b_armSpacing" type="range" value="1"><output></output></label>\r
				<label class="row" data-ends="short|long">Arm length <input id="b_armLength" type="range" value="1"><output></output></label>\r
				<label class="row" data-ends="short|long">Leg length <input id="b_legLength" type="range" value="1"><output></output></label>\r
				<label class="row" title="Shoulders to jaw" data-ends="short|long">Neck length <input id="b_neckLength" type="range" value="1"><output></output></label>\r
				<label class="row" title="Hips to shoulders" data-ends="short|long">Torso length <input id="b_torsoLength" type="range" value="1"><output></output></label>\r
				<div class="sub">Thickness</div>\r
				<label class="row" data-ends="thin|thick">Neck <input id="b_neckThickness" type="range" value="1"><output></output></label>\r
				<label class="row" data-ends="thin|thick">Arms <input id="b_armThickness" type="range" value="1"><output></output></label>\r
				<label class="row" data-ends="thin|thick">Legs <input id="b_legThickness" type="range" value="1"><output></output></label>\r
				<label class="row" data-ends="thin|thick">Torso <input id="b_torsoThickness" type="range" value="1"><output></output></label>\r
				<div class="sub">Torso shape</div>\r
				<label class="row" title="Flat (left) or full (right) chest" data-ends="flat|full">Chest <input id="b_chest" type="range" value="0"><output></output></label>\r
				<label class="row" title="A forward bulge low on the front (does not widen the ribs or flanks)" data-ends="flat|big">Belly <input id="b_belly" type="range" value="0"><output></output></label>\r
				<label class="row" title="The flanks at the waist" data-ends="narrow|wide">Sides <input id="b_waist" type="range" value="1"><output></output></label>\r
				<label class="row" title="Thickness of the upper back" data-ends="flat|thick">Back <input id="b_back" type="range" value="0"><output></output></label>\r
				<label class="row" title="Width at the hips" data-ends="narrow|wide">Hips <input id="b_hips" type="range" value="1"><output></output></label>\r
				<label class="row" title="Fullness behind" data-ends="flat|full">Rear <input id="b_rear" type="range" value="0"><output></output></label>\r
				<label class="row" title="Square, raised shoulders (left) or sloping ones (right)" data-ends="square|sloping">Sh. slope <input id="b_shoulderSlope" type="range" value="0"><output></output></label>\r
				<div class="note">Sliders start from the preset plus Weight, Stature and Shoulders; a dot marks a change since the preset.</div>\r
				<div class="btns"><button id="bodyCopyPreset" title="Copies the current slider values (where they differ from Average) as an EXTRA_PRESETS entry for src/bodyTypes.js">Copy as preset</button></div>\r
			</div>\r
\r
			<div data-part="measurements">\r
				<details class="drawer" data-key="body-measure" id="measurements">\r
					<summary>Measurements</summary>\r
					<div class="content">\r
						<table id="measureTable"></table>\r
						<div class="note">Measured from the mesh in the bind pose, in cm at this height. p = percentile among real adults of this sex (ANSUR II); yellow = outside the 5th to 95th.</div>\r
					</div>\r
				</details>\r
			</div>\r
\r
			<div data-part="faceShape">\r
				<label class="check" title="Moves the head's brow, eyes, nose, mouth and chin to the photo's, and matches cheek and jaw width. Needs Straighten on."><input id="shapeHead" type="checkbox" checked> Shape head to face</label>\r
			</div>\r
\r
			<div data-part="faceButtons">\r
				<div class="btns">\r
					<button id="detailRandom" title="Every face detail slider rolled at random, mostly near the middle">Random face</button>\r
					<button id="headReset" title="Resets the Head sliders (not the face detail)">Reset head</button>\r
					<button id="detailReset" title="Resets the Nose, Chin & jaw, Brow & cheeks and Ears & head sliders">Reset face detail</button>\r
				</div>\r
			</div>\r
\r
			<div data-part="faceSliders">\r
				<div class="sub">Head</div>\r
				<label class="row" title="Whole head, with the face" data-ends="narrow|wide">Head width <input id="tw_headWidth" type="range" value="1"><output></output></label>\r
				<label class="row" title="Cheeks to chin, with the face" data-ends="narrow|wide">Jaw width <input id="tw_jawWidth" type="range" value="1"><output></output></label>\r
				<label class="row" title="Moves the eyes and brows up or down" data-ends="up|down">Eyes <input id="tw_eyes" type="range" value="0"><output></output></label>\r
				<label class="row" title="Moves the nose up or down" data-ends="up|down">Nose <input id="tw_nose" type="range" value="0"><output></output></label>\r
				<label class="row" title="Moves the mouth up or down" data-ends="up|down">Mouth <input id="tw_mouth" type="range" value="0"><output></output></label>\r
				<label class="row" title="Longer or shorter chin" data-ends="shorter|longer">Chin <input id="tw_chin" type="range" value="0"><output></output></label>\r
				<div class="sub">Nose</div>\r
				<label class="row" title="Narrow or wide nose" data-ends="narrow|wide">Width <input id="tw_noseWidth" type="range" value="1"><output></output></label>\r
				<label class="row" title="How far the nose sticks out from the face" data-ends="flat|sticks out">Depth <input id="tw_noseDepth" type="range" value="0"><output></output></label>\r
				<label class="row" title="Scooped (left), straight (middle) or hooked (right) bridge" data-ends="scooped|hooked">Bridge <input id="tw_noseBridge" type="range" value="0"><output></output></label>\r
				<label class="row" title="Tip of the nose tilted down or turned up" data-ends="down|up">Tip tilt <input id="tw_noseTip" type="range" value="0"><output></output></label>\r
				<div class="sub">Chin &amp; jaw</div>\r
				<label class="row" title="Receding or jutting chin" data-ends="receding|jutting">Chin out <input id="tw_chinDepth" type="range" value="0"><output></output></label>\r
				<label class="row" title="Pointed or broad chin" data-ends="pointed|broad">Chin wide <input id="tw_chinWidth" type="range" value="1"><output></output></label>\r
				<label class="row" title="Narrow, tapered jaw corners or square, wide ones" data-ends="tapered|square">Jaw angle <input id="tw_jawCorners" type="range" value="1"><output></output></label>\r
				<div class="sub">Brow &amp; cheeks</div>\r
				<label class="row" title="Flat or heavy brow ridge" data-ends="flat|heavy">Brow <input id="tw_browDepth" type="range" value="0"><output></output></label>\r
				<label class="row" title="Cheekbone width" data-ends="narrow|wide">Cheekbone <input id="tw_cheekbones" type="range" value="1"><output></output></label>\r
				<label class="row" title="Hollow (left) or full (right) cheeks" data-ends="hollow|full">Cheeks <input id="tw_cheeks" type="range" value="0"><output></output></label>\r
				<div class="sub">Ears &amp; head</div>\r
				<label class="row" title="Small or big ears" data-ends="small|big">Ear size <input id="tw_earSize" type="range" value="1"><output></output></label>\r
				<label class="row" title="Ears tucked in or sticking out" data-ends="in|out">Ears out <input id="tw_earOut" type="range" value="0"><output></output></label>\r
				<label class="row" title="Regular rounded ears, or pointed (push it past typical for elfin)" data-ends="round|pointed">Ear point <input id="tw_earPoint" type="range" value="0"><output></output></label>\r
				<label class="row" title="Back of the skull, shorter or longer front to back" data-ends="shorter|longer">Head depth <input id="tw_headDepth" type="range" value="1"><output></output></label>\r
			</div>\r
\r
			<div data-part="hairStyle">\r
				<label class="row">Hair <select id="hair"><option value="buzz">Buzz cut</option><option value="none">None</option></select><span></span></label>\r
			</div>\r
\r
			<div data-part="colours">\r
				<div class="colors"><span>Skin</span><input id="skin" type="color"><label class="check"><input id="autoSkin" type="checkbox" checked> from photo</label></div>\r
				<div class="colors"><span>Hair</span><input id="hairColor" type="color"><label class="check"><input id="autoHair" type="checkbox" checked> from photo</label></div>\r
			</div>\r
\r
			<div data-part="facialHair">\r
				<label class="row" title="Facial hair: the photo's own beard, carried round the jaw and onto the neck, or a painted style">Facial hair <select id="beardStyle">\r
					<option value="photo">From photo</option>\r
					<option value="none">None</option>\r
					<option value="stubble">Stubble</option>\r
					<option value="moustache">Moustache</option>\r
					<option value="goatee">Goatee</option>\r
					<option value="sideburns">Sideburns</option>\r
					<option value="short">Short beard</option>\r
					<option value="full">Full beard</option>\r
				</select><span></span></label>\r
				<div id="beardNote" class="note" hidden></div>\r
			</div>\r
\r
			<div data-part="glasses">\r
				<label class="row" title="Glasses: a mesh frame fitted to the head and the photo's eyes (it follows every face and head slider)">Glasses <select id="glassesStyle">\r
					<option value="none">None</option>\r
					<option value="round">Round</option>\r
					<option value="oval">Oval</option>\r
					<option value="rectangular">Rectangular</option>\r
					<option value="square">Square</option>\r
					<option value="aviator">Aviator</option>\r
					<option value="catEye">Cat-eye</option>\r
				</select><span></span></label>\r
			</div>\r
\r
			<div data-part="hairFine">\r
				<div class="sub">Hair cut</div>\r
				<label class="row" id="hairVariantRow" hidden title="Another version of the same cut: 0 is the style as designed; each number re-rolls how its locks sweep, how long they are and how they sit" data-ends="as designed|re-rolled">Variant <input id="hairVariant" type="range" min="0" max="12" step="1" value="0"><output></output></label>\r
				<label class="row" id="hairMessyRow" hidden title="How messy the hair is: the locks' ends wander, stand off, vary in length and wave" data-ends="neat|wild">Messy <input id="hairMessy" type="range" min="0" max="1" step="0.05" value="0"><output></output></label>\r
				<div class="note whenEmpty">Buzz cut and None have no Variant or Messy: pick a cut to get them.</div>\r
			</div>\r
\r
			<div data-part="beardFine">\r
				<div class="sub">Facial hair</div>\r
				<label class="row" title="How far the facial hair wraps along the jaw toward the ears, and under the chin down the neck" data-ends="face only|to ears, neck">Coverage <input id="beardCoverage" type="range" min="0" max="1" step="0.01" value="0.7"><output></output></label>\r
				<label class="row" title="How thick the facial hair is" data-ends="stubble|full">Density <input id="beardDensity" type="range" min="0" max="1" step="0.01" value="0.65"><output></output></label>\r
				<div class="colors"><span>Beard</span><input id="beardColor" type="color"><label class="check"><input id="autoBeard" type="checkbox" checked> from photo</label></div>\r
				<div class="note whenEmpty">No facial hair to adjust.</div>\r
			</div>\r
\r
			<div data-part="glassesFine">\r
				<div class="sub">Glasses</div>\r
				<div id="glassesControls">\r
					<label class="row" title="How heavy the frame is">Frame <select id="glassesFrame"><option value="thin">Thin</option><option value="regular">Regular</option><option value="thick">Thick</option></select><span></span></label>\r
					<label class="row" title="Lens size" data-ends="small|large">Size <input id="glassesSize" type="range" min="0.8" max="1.25" step="0.01" value="1"><output></output></label>\r
					<label class="row" title="How tinted the lenses are: 0 is clear (no lens), the far end dark sunglasses; they stay see-through" data-ends="clear|dark">Tint <input id="glassesTint" type="range" min="0" max="0.9" step="0.05" value="0"><output></output></label>\r
					<div class="colors"><span>Frame</span><input id="glassesColor" type="color" value="#1b1b1e"><span>Lens</span><input id="glassesLens" type="color" value="#2a3540"></div>\r
				</div>\r
				<label class="check" title="The photo shows glasses: paint them out of the face (best effort at this texture size), so the mesh glasses, or none, replace them"><input id="glassesPaintOut" type="checkbox"> Photo shows glasses: paint them out</label>\r
			</div>\r
\r
			<div data-part="clothing">\r
				<p class="hint">Painted on the body, the same on both sides. Layers stack in this order.</p>\r
				<div id="clothingSlots"></div>\r
			</div>\r
\r
			<div data-part="clothingFine">\r
				<div id="clothingFine"></div>\r
			</div>\r
		</div>\r
	</div>\r
	<div id="stage">\r
		<canvas id="view"></canvas>\r
		<div id="toolbar">\r
			<div class="tgroup" title="Camera framing">\r
				<button data-cam="face">Face</button><button data-cam="bust">Bust</button><button data-cam="full">Full body</button>\r
			</div>\r
			<div class="tgroup">\r
				<select id="pose" title="Preview pose (clips from Quaternius' Universal Animation Library). Bind pose is what the export uses."><option value="idle">Idle</option><option value="walk">Walk</option><option value="talk">Talking</option><option value="sit">Sitting</option><option value="celebrate">Celebrate</option><option value="look">Look around</option><option value="tpose">Bind pose</option></select>\r
				<label title="Spin the character"><input id="spin" type="checkbox"> Turntable</label>\r
				<button id="talk" title="Fake talking to check the mouth">Talk test</button>\r
				<button id="mic" title="Your microphone drives the mouth">Mic</button>\r
				<input id="bg" type="color" value="#3b2f5c" title="Backdrop colour">\r
			</div>\r
			<div class="tgroup">\r
				<span class="tlabel">PS1</span>\r
				<select id="renderH" title="Render resolution (lines)"><option value="120">120p</option><option value="180">180p</option><option value="240" selected>240p</option><option value="360">360p</option><option value="480">480p</option></select>\r
				<label class="tool" title="Vertex wobble (snap to a coarse grid)">Wobble <input id="snap" type="range" min="0" max="4" step="0.5" value="1"><output></output></label>\r
				<label title="Texture warp (affine mapping)"><input id="affine" type="checkbox" checked> Affine</label>\r
				<label title="Dither + 15-bit colour"><input id="dither" type="checkbox" checked> Dither</label>\r
			</div>\r
		</div>\r
		<div id="hint">drag to orbit - wheel to zoom - right-drag to pan</div>\r
		<!-- batch from the Characters drop box: step through, tweak (saved as you go), Export All -->\r
		<div id="batchBar" hidden>\r
			<ul id="batchProblems" hidden></ul>\r
			<div class="tgroup">\r
				<button id="batchPrev">&lt; Prev</button>\r
				<span id="batchPos"></span>\r
				<button id="batchNext">Next &gt;</button>\r
			</div>\r
			<div class="tgroup">\r
				<button id="batchReroll" title="A new random body and height for this character">Reroll body</button>\r
				<button id="batchMale" title="Male base: the body is rolled again for it, as the import would have">Male</button><button id="batchFemale" title="Female base: the body is rolled again for it, as the import would have">Female</button>\r
			</div>\r
			<div class="tgroup">\r
				<button id="batchExport" class="primary" title="Every character in this batch as a GLB, in one .zip">Export All</button>\r
				<button id="batchProblemsBtn" title="What the import had trouble with">Problems</button>\r
				<button id="batchClose" title="Close the batch bar (the characters stay saved)">Close</button>\r
			</div>\r
		</div>\r
	</div>\r
	<script type="module" src="/src/main.js"><\/script>\r
</body>\r
</html>`,m={male:[{id:`blade-brandon`,label:`Brandon`,headSize:1.15,upperWidth:1,armSpacing:1,armLength:1.05,legLength:1.05,neckLength:1,torsoLength:1.006,neckThickness:.7,armThickness:1,legThickness:.8,torsoThickness:.976,belly:.13,chest:0,waist:.98,hips:1,shoulderSlope:.4,back:0,rear:0},{id:`blade-jimmy`,label:`Jimmy`,headSize:.95,upperWidth:.9,armSpacing:1.06,armLength:1.04,legLength:.99,neckLength:.79,torsoLength:.92,neckThickness:.93,armThickness:.96,legThickness:.92,torsoThickness:.96,belly:.26,chest:-.2,waist:1.17,hips:.77,shoulderSlope:4.2,back:-.9,rear:.4},{id:`blade-rudy`,label:`Rudy`,headSize:1.01,upperWidth:.96,armSpacing:1.03,armLength:.99,legLength:.96,neckLength:.68,torsoLength:.9,neckThickness:1.1,armThickness:1.23,legThickness:1.21,torsoThickness:1.16,belly:.54,chest:.5,waist:1.55,hips:.7,shoulderSlope:3.4,back:-.9,rear:-1},{id:`blade-steve`,label:`Steve`,headSize:.95,upperWidth:.91,armSpacing:1.05,armLength:1.05,legLength:.99,neckLength:.79,torsoLength:.93,neckThickness:.93,armThickness:.97,legThickness:.85,torsoThickness:1.02,belly:0,chest:-.25,waist:.85,hips:.8,shoulderSlope:4.4,back:-.95,rear:.45}],female:[]},h={male:`average`,female:`average`},g={sex:`women`,ages:`25-35`,standing:`modest`,adventurer:!1,seed:1};function _(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function v(e,t){let n=[...e];for(let e=n.length-1;e>0;e--){let r=Math.floor(t()*(e+1));[n[e],n[r]]=[n[r],n[e]]}return n}function y(e,t){let[n,r]=a[e],i=[];for(let e=0;e<8;e++)i.push(Math.round(n+e*(r-n)/7));return v(i,t)}function b(e,t,n,r){let i=r(),a=r();return e.for!==`all`&&e.for!==t||e.minAge!==void 0&&n<e.minAge||i>=e.chance?null:e.options[Math.floor(a*e.options.length)]}function x(e){let t=c[e.standing],n=_(e.seed),r=e.sex===`women`?`woman`:`man`,[i,o]=a[e.ages],l=y(e.ages,n),d=[...t.extras,...e.adventurer?s.extras:[]],p=f.map((t,i)=>{let a=t.ancestries[Math.floor(n()*t.ancestries.length)],o=l[i],s=[];for(let t of d){let r=b(t,e.sex,o,n);r&&s.push(r)}let c=o>=u.greying.white?`grey or white hair`:o>=u.greying.from?`greying ${t.hair}`:t.hair;return{slot:i+1,group:t.name,ancestry:a,age:o,extras:s,line:[`${i+1}) ${r}, ${o}, ${a} ancestry: ${t.skin}, ${c}`,...s].join(`, `)}}),m=[e.standing,e.sex,e.ages,e.adventurer?`adventurer`:``,`s${e.seed}`].filter(Boolean).join(`-`);if(!t.written)return{prompt:``,name:m,people:p,missing:`${t.label}'s wording isn't written yet (wording.ts): it waits for a sheet to write it from.`};let h=t.hair+(i>=u.grey.fromAge?u.grey.text:``)+`.`,g=t.dress+(e.adventurer?` ${s.dress}`:``);return{prompt:[u.grid.replace(`{person}`,r).replace(`{min}`,String(i)).replace(`{max}`,String(o)),u.pose,h,g,u.light,`${u.conditionLead} ${t.condition}`,u.variety,u.listLead].join(` `)+`
`+p.map(e=>e.line).join(`
`),name:m,people:p}}function ee(e=Math.random){let t=Object.keys(c).filter(e=>c[e].written),n=Object.keys(a);return{sex:e()<.5?`women`:`men`,ages:n[Math.floor(e()*n.length)],standing:t[Math.floor(e()*t.length)],adventurer:e()<o.adventurer,seed:S(e)}}function S(e=Math.random){return 1+Math.floor(e()*9999)}var C=`blade.sheetPrompt`;function w(){let e={...g};try{let t=JSON.parse(localStorage.getItem(C)||`null`);t&&typeof t==`object`&&((t.sex===`women`||t.sex===`men`)&&(e.sex=t.sex),t.ages in a&&(e.ages=t.ages),t.standing in c&&(e.standing=t.standing),typeof t.adventurer==`boolean`&&(e.adventurer=t.adventurer),Number.isInteger(t.seed)&&(e.seed=t.seed))}catch{}return e}function te(e){try{localStorage.setItem(C,JSON.stringify(e))}catch{}}function T(e,t=``,n){let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r}function E(e,t,n,r,i){let a=T(`div`,`sheetPromptRow`),o=T(`div`,`tiles`);o.style.gridTemplateColumns=n;for(let e of t)for(let[t,n,r]of e.options){let a=T(`button`,`tile${e.className?` `+e.className:``}`,n);a.type=`button`,a.dataset.key=e.key,a.dataset.value=t,r&&(a.title=r),a.addEventListener(`click`,()=>i({[e.key]:t})),o.appendChild(a)}return a.append(T(`span`,`sheetPromptLabel`,e),o),{row:a,show:()=>{for(let e of o.querySelectorAll(`.tile`))e.classList.toggle(`picked`,e.dataset.value===String(r()[e.dataset.key]))}}}var ne={name:`sheetPrompt`,section:`characters`,before:`drop`,build(e){let t=w(),n=e=>{t={...t,...e},te(t),h()},r=T(`div`,`rosterHead`);r.append(T(`span`,``,`Sheet prompt`));let i=[E(`Sex and ages`,[{key:`sex`,options:[[`women`,`♀`,`Women`],[`men`,`♂`,`Men`]],className:`sheetPromptSex`},{key:`ages`,options:Object.keys(a).map(e=>[e,e.replace(`-`,`–`)])}],`repeat(2, 2.4em) repeat(4, minmax(0, 1fr))`,()=>t,n),E(`Standing`,[{key:`standing`,options:Object.keys(c).map(e=>[e,c[e].label])}],`repeat(2, minmax(0, 1fr))`,()=>t,n)],o=T(`label`,`check`),s=T(`input`);s.type=`checkbox`,s.id=`sheetPromptAdventurer`,s.addEventListener(`change`,()=>n({adventurer:s.checked})),o.append(s,document.createTextNode(` Adventurer`)),o.title=`Road gear over the standing's clothes, and an adventurer's marks (scars, rings, braids, a quiver)`;let l=T(`div`,`btns`),u=T(`button`,``,`Randomize`);u.title=`Every pick at random (Adventurer at low odds), and new faces`,u.addEventListener(`click`,()=>n(ee()));let d=T(`button`,``,`New faces`);d.title=`The same picks, other people: new ancestries, ages and marks in the eight slots`,d.addEventListener(`click`,()=>n({seed:S()}));let f=T(`button`,`primary`,`Copy prompt`);f.id=`sheetPromptCopy`,f.title=`Copy the prompt, to paste into GPT or Gemini; drop the sheet it makes into the box below`,l.append(u,d,f);let p=T(`textarea`,`sheetPromptText`);p.id=`sheetPromptText`,p.readOnly=!0,p.rows=7;let m=T(`div`,`note`);m.id=`sheetPromptNote`,f.addEventListener(`click`,async()=>{let{prompt:e,name:n}=x(t);if(e){try{await navigator.clipboard.writeText(e)}catch{p.focus(),p.select(),document.execCommand(`copy`)}m.textContent=`Copied. Save the sheet as ${n}.png, then drop it below.`}});function h(){for(let e of i)e.show();s.checked=t.adventurer;let e=x(t);p.value=e.prompt||e.missing||``,f.disabled=!e.prompt,m.textContent=e.prompt?`Sheet: ${e.name}`:``}e.append(r,...i.map(e=>e.row),o,l,p,m),h(),window.sheetPrompt={get picks(){return t},set:n,build:x}}};function D(e){let t=/^(destitute|modest|prosperous|opulent)-(women|men)-(25-35|36-50|51-65|66-80)(-adventurer)?(?:-s\d+)?(?:\.[a-z0-9]+)?$/i.exec(e.trim());return t?{standing:t[1].toLowerCase(),sex:t[2].toLowerCase(),ages:t[3],adventurer:!!t[4]}:null}function O(e){let[t,n]=a[e.ages];return{standing:e.standing,sex:e.sex,ages:e.ages,adventurer:e.adventurer,base:e.sex===`women`?`female`:`male`,age:Math.round((t+n)/2)}}function k(e,t=``,n){let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r}function A(e,t){let n=k(`select`);for(let[t,r]of e)n.append(Object.assign(k(`option`,``,r),{value:t}));return n.value=t,n}async function re(e){let t=w();return e.length===1?[O(D(e[0].name)??t)]:new Promise(n=>{let r=k(`div`,`sheetTags`);r.id=`sheetTags`;let i=k(`div`,`sheetTagsBox ui-panel`),o=k(`div`,`sheetTagsHead`,`What each of these ${e.length} sheets was made as`),s=k(`div`,`note`,`Each set from its file's name where it's named as the sheet prompt names sheets, else from the prompt's picks: change any that differ. Every face on a sheet is tagged with its row.`),l=k(`div`,`sheetTagsList`),u=[],d=[];for(let n of e){let e=k(`div`,`sheetTagsRow`),r=URL.createObjectURL(n);d.push(r);let i=Object.assign(k(`img`),{src:r,alt:n.name}),o=D(n.name),s=o??t,f=k(`div`,`sheetTagsName`,o?`${n.name} (from its name)`:n.name),p=A(Object.keys(c).map(e=>[e,c[e].label]),s.standing),m=A([[`women`,`♀ women`],[`men`,`♂ men`]],s.sex),h=A(Object.keys(a).map(e=>[e,e.replace(`-`,`–`)]),s.ages),g=Object.assign(k(`input`),{type:`checkbox`,checked:s.adventurer}),_=k(`label`,`check`);_.append(g,document.createTextNode(` adventurer`));let v=k(`div`,`sheetTagsPicks`);v.append(p,m,h,_);let y=k(`div`,`sheetTagsWords`);y.append(f,v),e.append(i,y),l.append(e),u.push(()=>O({standing:p.value,sex:m.value,ages:h.value,adventurer:g.checked}))}let f=k(`div`,`btns`),p=e=>{r.remove(),d.forEach(e=>URL.revokeObjectURL(e)),n(e)},m=Object.assign(k(`button`,`primary`,`Import ${e.length} sheets`),{type:`button`,id:`sheetTagsImport`});m.addEventListener(`click`,()=>p(u.map(e=>e())));let h=Object.assign(k(`button`,``,`Cancel`),{type:`button`,id:`sheetTagsCancel`});h.addEventListener(`click`,()=>p(null)),f.append(m,h),i.append(o,s,l,f),r.append(i),document.body.append(r)})}var j=()=>window.rcm;function M(e,t=``,n){let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r}var ie={name:`expression`,section:`face`,build(r){let a=`neutral`,o=n.neutral,s=0,c=0,l=()=>t(o,n[a],e((performance.now()-s)/1e3,c)),u=M(`div`,`rosterHead`);u.append(M(`span`,``,`Expression`));let d=M(`div`,`tiles`);d.style.setProperty(`--columns`,`3`);let f=()=>{for(let e of d.querySelectorAll(`.tile`))e.classList.toggle(`picked`,e.dataset.mood===a);y()};for(let e of i){let t=M(`button`,`tile`,e);t.type=`button`,t.dataset.mood=e,t.title=`The face ${e===`neutral`?`at rest`:e}, as the game shows it`,t.addEventListener(`click`,()=>v(e)),d.append(t)}let p=M(`label`,`check`),m=Object.assign(M(`input`),{type:`checkbox`,checked:!0,id:`expressionBlink`});m.addEventListener(`change`,()=>{let e=j();e&&(e.state.blink=m.checked)}),p.append(m,document.createTextNode(` Blink`)),p.title=`Blink now and then, as the game's faces do`;let h=M(`label`,`row`,`Change over`);h.title=`How long the face takes to change to a mood picked (the game's take a second unless asked otherwise)`;let g=Object.assign(M(`input`),{type:`range`,min:`0`,max:`5`,step:`0.1`,value:`1`,id:`expressionOver`}),_=M(`output`,``,`1 s`);g.addEventListener(`input`,()=>{_.textContent=`${(+g.value).toFixed(1)} s`}),h.append(g,_),r.append(u,d,h,p,M(`div`,`note`,`Only the view: nothing here is saved or shipped.`));function v(e,t=!1){e!==a&&(o=l(),s=performance.now(),c=t?0:+g.value,a=e,f())}function y(){let e=j();if(!e)return;let t=l();e.state.faceShapes={...t.shapes},e.state.jawRest=t.jaw,e.state.roundRest=t.round}f();let b=()=>{y(),requestAnimationFrame(b)};requestAnimationFrame(b),window.expression={set(e,t=!0){v(e,t)},get mood(){return a},get mix(){return l()}}}},ae={opulent:{tone:[0,.15],missing:[0,0]},prosperous:{tone:[.15,.35],missing:[0,1]},modest:{tone:[.35,.6],missing:[0,2]},destitute:{tone:[.6,.95],missing:[2,5]}};function oe(e,t){let n=e?.standing?ae[e.standing]:void 0;if(!n)return null;let r=(t>>>0)%1e3/999,i=(t>>>10>>>0)%1e3/999,a=n.tone[0]+(n.tone[1]-n.tone[0])*r,o=Math.round(n.missing[0]+(n.missing[1]-n.missing[0])*i)+ +!!e?.adventurer;return{tone:+a.toFixed(2),missing:o}}var N=()=>window.rcm;function P(e,t=``,n){let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r}function F(e,t,n,r,i){let a=P(`label`,`row`,e);a.title=t;let o=Object.assign(P(`input`),{type:`range`,min:String(n),max:String(r),step:String(i)}),s=P(`output`);return a.append(o,s),{row:a,input:o,out:s}}var I={open:.35,round:0,wide:.85,teeth:.55,press:0},L=!1;function R(e){let t=N();t&&(e?t.state.mouthPin=I:t.state.mouthPin===I&&(t.state.mouthPin=null))}var se={name:`teeth`,section:`face`,build(e){let t=P(`div`,`rosterHead`);t.append(P(`span`,``,`Teeth`));let n=F(`Tone`,`Bright and even (left) to rotten brown (right)`,0,1,.01),r=F(`Missing`,`How many teeth are gone (of sixteen)`,0,8,1),i=e=>{n.out.textContent=e.tone<.15?`bright`:e.tone<.35?`cream`:e.tone<.6?`yellowed`:`brown`,r.out.textContent=String(e.missing)},a=()=>{let e=N()?.teeth;e&&(n.input.value=String(e.tone),r.input.value=String(e.missing),i(e))};n.input.addEventListener(`input`,()=>{N()?.setTeeth({tone:+n.input.value}),a()}),r.input.addEventListener(`input`,()=>{N()?.setTeeth({missing:+r.input.value}),a()});for(let e of[n.input,r.input])e.addEventListener(`pointerdown`,()=>R(!0)),e.addEventListener(`pointerup`,()=>R(L)),e.addEventListener(`keydown`,()=>R(!0)),e.addEventListener(`blur`,()=>R(L));let o=P(`div`,`btns`),s=P(`button`,``,`From background`);s.type=`button`,s.title=`Teeth as this character's standing has them (Background tab), picked afresh within that standing's range`,s.addEventListener(`click`,()=>{N()?.setTeeth({},!0),a()});let c=P(`button`,``,`Show them`);c.type=`button`,c.title=`Hold a wide grin, the teeth showing, until it's pressed again`,c.addEventListener(`click`,()=>{L=!L,c.classList.toggle(`picked`,L),c.textContent=L?`Showing`:`Show them`,R(L)}),o.append(s,c),e.append(t,n.row,r.row,o);let l=-1;setInterval(()=>{let e=N()?.shown??-1;e!==l&&(l=e,a())},500)}},ce={destitute:{wear:{male:{underwear:[`loincloth`,[`braies`,2]],underTop:[`none`],top:[[`none`,1],[`tunic`,2]],bottoms:[[`none`,2],`breeches`],legwear:[`none`,`footWraps`,`legWraps`],footwear:[[`none`,2],`shoes`],handwear:[`none`]},female:{underwear:[`braies`,`bloomers`],underTop:[`bandeau`,[`none`,.5]],top:[[`tunic`,3],`tank`],bottoms:[[`none`,2],`shorts`],legwear:[`none`,`footWraps`,`legWraps`],footwear:[[`none`,2],`shoes`],handwear:[`none`]}},cloth:[`undyed`],trim:0,pattern:0,adjust:{top:{sleeves:[`none`,`short`,`elbow`],neckline:[`crew`,`square`,`scoop`],hem:[`hip`,`thigh`]},bottoms:{length:[`knee`,`calf`]}}},modest:{wear:{male:{underwear:[`braies`,`boxers`],underTop:[`none`,`undershirt`],top:[[`tunic`,2],`shirt`],bottoms:[`breeches`,[`trousers`,2]],legwear:[`socks`,`legWraps`,`none`],footwear:[`shoes`,[`ankleBoots`,2]],handwear:[[`none`,4],`wristWraps`]},female:{underwear:[`bloomers`,`briefs`],underTop:[`camisole`,`bandeau`,`undershirt`],top:[[`tunic`,2],`shirt`],bottoms:[`leggings`,`trousers`,`breeches`],legwear:[`socks`,`stockings`,`none`],footwear:[`shoes`,[`ankleBoots`,2]],handwear:[[`none`,4],`wristWraps`]}},cloth:[`undyed`,`wool`,`wool`],trim:.1,pattern:.1,adjust:{top:{sleeves:[`long`,`elbow`],neckline:[`crew`,`v`,`square`]},bottoms:{length:[`calf`,`ankle`]}}},prosperous:{wear:{male:{underwear:[`boxerBriefs`,`braies`],underTop:[`undershirt`],top:[[`shirt`,2],`tunic`],bottoms:[[`trousers`,3],`breeches`],legwear:[`socks`,`stockings`],footwear:[`calfBoots`,`ankleBoots`,`shoes`],handwear:[[`none`,3],`shortGloves`]},female:{underwear:[`highWaist`,`bloomers`],underTop:[`corset`,`camisole`],top:[[`shirt`,2],`tunic`],bottoms:[`trousers`,`leggings`],legwear:[`stockings`,`socks`],footwear:[`calfBoots`,`shoes`],handwear:[[`none`,3],`shortGloves`]}},cloth:[`dyed`,`dyed`,`wool`],trim:.45,pattern:.15,adjust:{top:{sleeves:[`long`],neckline:[`v`,`high`,`square`]},bottoms:{length:[`ankle`],belt:[!0,!0,!1]}}},opulent:{wear:{male:{underwear:[`boxerBriefs`,`braies`],underTop:[`undershirt`],top:[[`shirt`,2],[`tunic`,2],`bodysuit`],bottoms:[[`trousers`,2],`leggings`,`breeches`],legwear:[`stockings`,`tights`],footwear:[[`kneeBoots`,2],`calfBoots`],handwear:[`longGloves`,`shortGloves`,`none`]},female:{underwear:[`highWaist`,`briefs`],underTop:[[`corset`,3],`camisole`],top:[`shirt`,`tunic`,`bodysuit`],bottoms:[`leggings`,`trousers`],legwear:[`stockings`,`tights`],footwear:[`kneeBoots`,`calfBoots`],handwear:[[`longGloves`,2],`shortGloves`,`none`]}},cloth:[`rich`],trim:.9,pattern:.1,adjust:{top:{sleeves:[`long`],neckline:[`high`,`deepV`,`square`]},bottoms:{length:[`ankle`],belt:[!0]}}}},z={wear:{handwear:[`bracers`,`wristWraps`,`fingerless`],legwear:[`legWraps`,`socks`],footwear:[`calfBoots`,`kneeBoots`,`ankleBoots`]},leather:.5},B={undyed:[`#cfc4ab`,`#b8a988`,`#9c8b6c`,`#d9d0bd`,`#8a7b62`],wool:[`#6b5a45`,`#5a5650`,`#7d6e58`,`#4f4a3e`,`#65684e`],dyed:[`#2f5140`,`#8a4a2a`,`#2c3b5a`,`#5a3a3a`,`#4a5a3a`],rich:[`#7a1a22`,`#1f2a5a`,`#1f3f2a`,`#1b1a1d`,`#4a1a4a`]},V=[`#5a3e28`,`#6e4a2e`,`#3e2c1e`,`#7a5a3a`],le=[`#3a2a1e`,`#2a2018`,`#4a3a2a`],ue=[`#b8913a`,`#c9a24a`,`#a8a8a0`];function de(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function fe(e,t){let n=e.map(e=>typeof e==`string`?[e,1]:e),r=t()*n.reduce((e,[,t])=>e+t,0);for(let[e,t]of n)if((r-=t)<0)return e;return n[n.length-1][0]}var H=(e,t)=>e[Math.floor(t()*e.length)%e.length];function U(e,t=.65){let n=parseInt(e.slice(1),16);return`#`+[n>>16&255,n>>8&255,n&255].map(e=>Math.round(e*t)).map(e=>e.toString(16).padStart(2,`0`)).join(``)}var W=[`underwear`,`underTop`,`legwear`,`footwear`,`bottoms`,`top`,`handwear`];function G(e,t,n){let r=e?.standing?ce[e.standing]:void 0;if(!r)return null;let i=de(n^2654435769),a=d(e),o=a?.bare??0,s=a?.pattern??0,c=t===`female`?`female`:`male`,l=()=>{let e=H(r.cloth,i);return(e===`dyed`||e===`rich`||e===`wool`)&&a&&i()<.45?e===`rich`?U(H(a.dyes,i),.8):H(a.dyes,i):H(B[e],i)},u={};for(let t of W){let n=fe(e?.adventurer&&z.wear[t]||r.wear[c][t],i);o>0&&t===`footwear`&&n!==`none`&&!e?.adventurer&&e?.standing!==`opulent`&&i()<o*.6&&(n=`none`),o>0&&t===`legwear`&&i()<o*.7&&!e?.adventurer&&(n=`none`);let d={type:n,color:``,color2:``,pattern:`plain`,trim:!1};t===`underwear`||t===`underTop`?(d.color=H(B.undyed,i),d.color2=U(d.color,.85)):t===`footwear`?(d.color=H(V,i),d.color2=H(le,i)):t===`handwear`||t===`legwear`&&(n===`legWraps`||n===`footWraps`)?(d.color=H(n===`legWraps`||n===`footWraps`||n===`wristWraps`?B.undyed:V,i),d.color2=U(d.color)):(d.color=e?.adventurer&&(t===`top`||t===`bottoms`)&&i()<z.leather?H(V,i):l(),d.color2=r.cloth.includes(`rich`)&&i()<.6?H(ue,i):U(d.color),d.trim=i()<r.trim,(t===`top`||t===`bottoms`)&&i()<r.pattern+s*(e?.standing===`destitute`?0:.5)&&(d.pattern=i()<.5?`stripes`:`checks`,a&&(d.color2=H(a.dyes,i))));let f=r.adjust?.[t];if(f)for(let[e,t]of Object.entries(f))d[e]=H(t,i);n===`tank`&&(delete d.sleeves,delete d.neckline),u[t]=d}return c===`female`&&u.top.type===`none`&&u.underTop.type===`none`&&(u.underTop.type=`bandeau`),u}var K=()=>window.rcm;function q(e,t=``,n){let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r}var J=()=>K()?.character?.kind===`female`?`female`:`male`;function Y(){let e=K();if(!e)return``;let t=G(e.tags,J(),Math.random()*2**32>>>0);return t?(e.setOutfit(t),``):`Give them a standing first (Background tab).`}var pe={key:`background`,title:`Background`,short:`Who`,colour:`var(--ui-dye-cast)`,after:`photo`,icon:[`..####..`,`.#....#.`,`.#....#.`,`..####..`,`........`,`.######.`,`#......#`,`#......#`],build(e){let t=q(`div`,`rosterHead`);t.append(q(`span`,``,`Standing`));let n=q(`div`,`tiles`);n.style.setProperty(`--columns`,`2`);for(let e of Object.keys(c)){let t=q(`button`,`tile`,c[e].label);t.type=`button`,t.dataset.standing=e,t.title=`${c[e].label}: their teeth and clothes picked afresh for it`,t.addEventListener(`click`,()=>h({standing:e},!0)),n.append(t)}let r=q(`label`,`row`,`Ages`),i=q(`select`);i.append(Object.assign(q(`option`,``,`(not set)`),{value:``}));for(let e of Object.keys(a))i.append(Object.assign(q(`option`,``,e.replace(`-`,`–`)),{value:e}));r.append(i),i.addEventListener(`change`,()=>{let e=i.value;h(e?{ages:e,age:Math.round((a[e][0]+a[e][1])/2)}:{ages:void 0,age:void 0},!1)});let o=q(`label`,`check`),s=Object.assign(q(`input`),{type:`checkbox`,id:`backgroundAdventurer`});o.append(s,document.createTextNode(` Adventurer`)),o.title=`Lives on the road: road gear, and a tooth more gone`,s.addEventListener(`change`,()=>h({adventurer:s.checked},!0));let u=q(`div`,`rosterHead`);u.append(q(`span`,``,`Land`));let f=q(`div`,`tiles`);f.style.setProperty(`--columns`,`2`);for(let e of l){let t=q(`button`,`tile`,e.label);t.type=`button`,t.dataset.region=e.id,t.title=`${e.label}: ${e.blurb} (usually ${e.group})`,t.addEventListener(`click`,()=>h({region:e.id},!0)),f.append(t)}let p=q(`div`,`note`),m=q(`div`,`note`);e.append(t,n,r,o,u,f,p,m,q(`div`,`note`,`A new standing, Adventurer or land picks their teeth and clothes afresh.`));function h(e,t){let n=K();if(!n)return;let r=J(),i=n.tags??{sex:r===`female`?`women`:`men`,base:r,adventurer:!1},a=d(i),o={...i,...a?{region:a.id}:{},...e};for(let e of Object.keys(o))o[e]===void 0&&delete o[e];n.setTags(o),t&&o.standing&&(n.setTeeth({},!0),Y()),g()}function g(){let e=K()?.tags??null;for(let t of n.querySelectorAll(`.tile`))t.classList.toggle(`picked`,t.dataset.standing===e?.standing);i.value=e?.ages??``,s.checked=!!e?.adventurer;let t=d(e);for(let e of f.querySelectorAll(`.tile`))e.classList.toggle(`picked`,e.dataset.region===t?.id);p.textContent=t?`${t.label}: ${t.blurb}.${e?.region?``:` (From their place on the sheet.)`}`:`No land yet.`,m.textContent=e?.sheet?`From the sheet ${e.sheet}, face ${e.face??`?`}.`:e?`Not from a sheet: set here.`:`Not from a sheet: pick a standing to give them a background.`}let _=-1;setInterval(()=>{let e=K()?.shown??-1;e!==_&&(_=e,g())},500),window.background={change:h,show:g}}},me={name:`dressFromBackground`,section:`clothing`,before:`clothing`,build(e){let t=q(`div`,`btns`),n=q(`button`,``,`Dress from background`);n.type=`button`,n.id=`dressFromBackground`,n.title=`Clothes picked afresh for their standing, Adventurer and land (Background tab)`;let r=q(`div`,`note`);n.addEventListener(`click`,()=>{r.textContent=Y()}),t.append(n),e.append(t,r)}},X=`Character Generator`;for(let e of document.querySelectorAll(`link[rel="stylesheet"]`))e.href.includes(`fonts.googleapis.com`)||e.remove();document.title=X;var Z=new DOMParser().parseFromString(p,`text/html`);for(let e of Z.body.querySelectorAll(`script`))e.remove();document.body.replaceChildren(...[...Z.body.childNodes].map(e=>document.importNode(e,!0)));var Q=document.getElementById(`panelHead`);Q.querySelector(`h1`).textContent=X;var $=document.createElement(`a`);$.id=`backToGame`,$.href=location.pathname,$.textContent=`Back to the game`,Q.appendChild($),document.getElementById(`bg`).value=`#14110e`,globalThis.characterToolHost={assets:new URL(`character-generator/`,document.baseURI).href,fileName:`character`,poses:!1,aiCleanup:!1,presets:m,startPreset:h,actions:[],fineOpen:!0,importTags:re,teethFor:oe,outfitFor:G,panel:{sections:[pe],blocks:[{...ne,section:`photo`,before:`drop`},{...ie,before:`faceShape`},{...se,before:`faceShape`},me],parts:{drop:{section:`photo`,before:`photoSource`},saved:null,backup:null}}},document.getElementById(`panel`).classList.add(`ui-panel`),await r(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url),await r(()=>Promise.resolve({}),__vite__mapDeps([1]),import.meta.url),await r(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),await r(()=>Promise.resolve({}),__vite__mapDeps([3]),import.meta.url),await r(()=>Promise.resolve({}),__vite__mapDeps([4]),import.meta.url),await r(()=>import(`./main-CkZSyCeZ.js`),__vite__mapDeps([5,6,7,8,9,10]),import.meta.url),(await r(async()=>{let{castOnTheRight:e}=await import(`./cast-side-M3KWDPJ7.js`);return{castOnTheRight:e}},[],import.meta.url)).castOnTheRight();