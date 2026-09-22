const BUILTIN_DATA = [{"exercise":"Barbell Hip Thrust","demoUrl":"https://www.youtube.com/results?search_query=Barbell+Hip+Thrust+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Max","primary":"Glute Max","secondary":"Hamstrings, Adductor Magnus","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Extension (isolation)","patternTags":["Isolation","Extension"],"joint":"Hip Extension"},{"exercise":"Glute Bridge","demoUrl":"https://www.youtube.com/results?search_query=Glute+Bridge+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Max","primary":"Glute Max","secondary":"Hamstrings","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Extension (isolation)","patternTags":["Isolation","Extension"],"joint":"Hip Extension"},{"exercise":"Conventional Deadlift","demoUrl":"https://www.youtube.com/results?search_query=Conventional+Deadlift+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Max","primary":"Glute Max, Hamstrings, Erector Spinae","secondary":"Quads, Traps, Forearms (grip)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Hinge","patternTags":["Hinge"],"joint":"Hip Extension + Knee Extension"},{"exercise":"Romanian Deadlift","demoUrl":"https://www.youtube.com/results?search_query=Romanian+Deadlift+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Max","primary":"Hamstrings, Glute Max","secondary":"Erector Spinae, Adductor Magnus","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Hinge","patternTags":["Hinge"],"joint":"Hip Extension"},{"exercise":"Back Squat","demoUrl":"https://www.youtube.com/results?search_query=Back+Squat+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Max","primary":"Quads, Glute Max","secondary":"Hamstrings, Adductors, Erector Spinae","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Squat","patternTags":["Squat"],"joint":"Hip Extension + Knee Extension"},{"exercise":"Bulgarian Split Squat","demoUrl":"https://www.youtube.com/results?search_query=Bulgarian+Split+Squat+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Max","primary":"Quads, Glute Max","secondary":"Hamstrings, Glute Med (stabilizer)","plane":"Sagittal (primary) + Frontal (stability)","planeTags":["Sagittal","Frontal"],"pattern":"Lunge","patternTags":["Lunge"],"joint":"Hip Extension + Knee Extension"},{"exercise":"Walking Lunge","demoUrl":"https://www.youtube.com/results?search_query=Walking+Lunge+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Max","primary":"Quads, Glute Max","secondary":"Hamstrings, Glute Med (stabilizer)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Lunge / Gait","patternTags":["Lunge","Gait"],"joint":"Hip Extension + Knee Extension"},{"exercise":"Step-Up","demoUrl":"https://www.youtube.com/results?search_query=Step-Up+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Max","primary":"Glute Max, Quads","secondary":"Hamstrings","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Lunge variant","patternTags":["Lunge"],"joint":"Hip Extension + Knee Extension"},{"exercise":"Kettlebell Swing","demoUrl":"https://www.youtube.com/results?search_query=Kettlebell+Swing+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Max","primary":"Glute Max, Hamstrings","secondary":"Erector Spinae, Lats","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Hinge (ballistic)","patternTags":["Hinge"],"joint":"Hip Extension"},{"exercise":"Reverse Hyperextension","demoUrl":"https://www.youtube.com/results?search_query=Reverse+Hyperextension+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Max","primary":"Glute Max, Hamstrings","secondary":"Erector Spinae","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Extension (isolation)","patternTags":["Isolation","Extension"],"joint":"Hip Extension"},{"exercise":"Cable Pull-Through","demoUrl":"https://www.youtube.com/results?search_query=Cable+Pull-Through+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Max","primary":"Glute Max, Hamstrings","secondary":"Erector Spinae","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Hinge","patternTags":["Hinge"],"joint":"Hip Extension"},{"exercise":"Single-Leg Glute Bridge","demoUrl":"https://www.youtube.com/results?search_query=Single-Leg+Glute+Bridge+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Max","primary":"Glute Max","secondary":"Glute Med (stabilizer), Hamstrings","plane":"Sagittal (primary) + Frontal (stability)","planeTags":["Sagittal","Frontal"],"pattern":"Hip Extension (unilateral)","patternTags":["Extension"],"joint":"Hip Extension"},{"exercise":"Smith Machine Hip Thrust","demoUrl":"https://www.youtube.com/results?search_query=Smith+Machine+Hip+Thrust+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Max","primary":"Glute Max","secondary":"Hamstrings","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Extension (isolation, machine-guided)","patternTags":["Isolation","Extension"],"joint":"Hip Extension"},{"exercise":"Banded Hip Thrust","demoUrl":"https://www.youtube.com/results?search_query=Banded+Hip+Thrust+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Max","primary":"Glute Max","secondary":"Hamstrings, Adductor Magnus","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Extension (isolation, band-resisted)","patternTags":["Isolation","Extension"],"joint":"Hip Extension"},{"exercise":"Trap Bar Deadlift","demoUrl":"https://www.youtube.com/results?search_query=Trap+Bar+Deadlift+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Max","primary":"Glute Max, Quads, Hamstrings","secondary":"Traps, Forearms (grip)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Hinge / Squat Hybrid","patternTags":["Squat","Hinge","Compound / Combination"],"joint":"Hip Extension + Knee Extension"},{"exercise":"Dumbbell Romanian Deadlift","demoUrl":"https://www.youtube.com/results?search_query=Dumbbell+Romanian+Deadlift+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Max","primary":"Hamstrings, Glute Max","secondary":"Erector Spinae, Forearms (grip)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Hinge","patternTags":["Hinge"],"joint":"Hip Extension"},{"exercise":"Landmine Squat","demoUrl":"https://www.youtube.com/results?search_query=Landmine+Squat+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Max","primary":"Quads, Glute Max","secondary":"Adductors, Erector Spinae","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Squat","patternTags":["Squat"],"joint":"Hip Extension + Knee Extension"},{"exercise":"B-Stance Hip Thrust","demoUrl":"https://www.youtube.com/results?search_query=B-Stance+Hip+Thrust+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Max","primary":"Glute Max","secondary":"Hamstrings, Glute Med (stabilizer)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Extension (isolation, unilateral bias)","patternTags":["Isolation","Extension"],"joint":"Hip Extension"},{"exercise":"Side-Lying Hip Abduction","demoUrl":"https://www.youtube.com/results?search_query=Side-Lying+Hip+Abduction+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Med","primary":"Glute Med, Glute Min","secondary":"TFL","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Hip Abduction"},{"exercise":"Banded Lateral Walk","demoUrl":"https://www.youtube.com/results?search_query=Banded+Lateral+Walk+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Med","primary":"Glute Med, Glute Min","secondary":"Glute Max, Quads","plane":"Frontal","planeTags":["Frontal"],"pattern":"Gait / Lateral","patternTags":["Gait"],"joint":"Hip Abduction"},{"exercise":"Standing Cable Hip Abduction","demoUrl":"https://www.youtube.com/results?search_query=Standing+Cable+Hip+Abduction+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Med","primary":"Glute Med, Glute Min","secondary":"TFL","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Hip Abduction"},{"exercise":"Clamshell","demoUrl":"https://www.youtube.com/results?search_query=Clamshell+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Med","primary":"Glute Med, Glute Min","secondary":"Deep hip rotators","plane":"Transverse (+ slight Frontal)","planeTags":["Frontal","Transverse"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Hip External Rotation + slight Abduction"},{"exercise":"Fire Hydrant","demoUrl":"https://www.youtube.com/results?search_query=Fire+Hydrant+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Med","primary":"Glute Med, Glute Min","secondary":"Glute Max","plane":"Frontal + Transverse","planeTags":["Frontal","Transverse"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Hip Abduction + External Rotation"},{"exercise":"Lateral Lunge","demoUrl":"https://www.youtube.com/results?search_query=Lateral+Lunge+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Med","primary":"Glute Max, Adductors (lowering leg)","secondary":"Glute Med (stance-leg stabilizer), Quads","plane":"Frontal","planeTags":["Frontal"],"pattern":"Lunge","patternTags":["Lunge"],"joint":"Hip Abduction (stance-leg control)"},{"exercise":"Curtsy Lunge","demoUrl":"https://www.youtube.com/results?search_query=Curtsy+Lunge+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Med","primary":"Glute Med, Glute Max","secondary":"Adductors, Quads","plane":"Frontal + Transverse","planeTags":["Frontal","Transverse"],"pattern":"Lunge","patternTags":["Lunge"],"joint":"Hip Adduction (moving leg) + Abduction control (stance leg)"},{"exercise":"Lateral Band Walk with Squat Hold","demoUrl":"https://www.youtube.com/results?search_query=Lateral+Band+Walk+with+Squat+Hold+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Med","primary":"Glute Med","secondary":"Glute Max, Quads","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isometric + Gait","patternTags":["Isometric","Gait"],"joint":"Hip Abduction"},{"exercise":"Single-Leg Romanian Deadlift","demoUrl":"https://www.youtube.com/results?search_query=Single-Leg+Romanian+Deadlift+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Med","primary":"Hamstrings, Glute Max","secondary":"Glute Med (frontal-plane stabilizer)","plane":"Sagittal (primary) + Frontal (stability)","planeTags":["Sagittal","Frontal"],"pattern":"Hip Hinge (unilateral)","patternTags":["Hinge"],"joint":"Hip Extension + anti-adduction control"},{"exercise":"Standing Cable Hip Rotation","demoUrl":"https://www.youtube.com/results?search_query=Standing+Cable+Hip+Rotation+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Med","primary":"Glute Med, Glute Min","secondary":"Deep hip rotators","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Hip External / Internal Rotation"},{"exercise":"Seated Hip Abduction Machine","demoUrl":"https://www.youtube.com/results?search_query=Seated+Hip+Abduction+Machine+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Med","primary":"Glute Med, Glute Min","secondary":"TFL","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isolation (machine)","patternTags":["Isolation"],"joint":"Hip Abduction"},{"exercise":"Monster Walk (Band)","demoUrl":"https://www.youtube.com/results?search_query=Monster+Walk+%28Band%29+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Med","primary":"Glute Med, Glute Min","secondary":"Glute Max, Adductors","plane":"Frontal","planeTags":["Frontal"],"pattern":"Gait (band-resisted)","patternTags":["Gait"],"joint":"Hip Abduction"},{"exercise":"X-Band Walk","demoUrl":"https://www.youtube.com/results?search_query=X-Band+Walk+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Med","primary":"Glute Med, Glute Min","secondary":"Glute Max, Quads","plane":"Frontal","planeTags":["Frontal"],"pattern":"Gait (band-resisted)","patternTags":["Gait"],"joint":"Hip Abduction"},{"exercise":"Skater Squat","demoUrl":"https://www.youtube.com/results?search_query=Skater+Squat+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Med","primary":"Glute Med, Quads","secondary":"Glute Max, Hamstrings","plane":"Sagittal (primary) + Frontal (stability)","planeTags":["Sagittal","Frontal"],"pattern":"Lunge (unilateral)","patternTags":["Lunge"],"joint":"Hip Extension + Knee Extension + Frontal-Plane Control"},{"exercise":"Cable Cross-Body Hip Abduction","demoUrl":"https://www.youtube.com/results?search_query=Cable+Cross-Body+Hip+Abduction+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Med","primary":"Glute Med, Glute Min","secondary":"TFL","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Hip Abduction"},{"exercise":"Side-Lying Hip Abduction (hip flexed)","demoUrl":"https://www.youtube.com/results?search_query=Side-Lying+Hip+Abduction+%28hip+flexed%29+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Min","primary":"Glute Min, Glute Med","secondary":"TFL","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Hip Abduction"},{"exercise":"Clamshell","demoUrl":"https://www.youtube.com/results?search_query=Clamshell+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Min","primary":"Glute Min, Glute Med","secondary":"Deep hip rotators","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Hip External Rotation"},{"exercise":"Mini-Band Lateral Walk","demoUrl":"https://www.youtube.com/results?search_query=Mini-Band+Lateral+Walk+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Min","primary":"Glute Min, Glute Med","secondary":"Glute Max","plane":"Frontal","planeTags":["Frontal"],"pattern":"Gait","patternTags":["Gait"],"joint":"Hip Abduction"},{"exercise":"Single-Leg Balance Reach","demoUrl":"https://www.youtube.com/results?search_query=Single-Leg+Balance+Reach+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Min","primary":"Glute Min, Glute Med","secondary":"Core (anti-rotation)","plane":"Frontal + Transverse (stabilization)","planeTags":["Frontal","Transverse"],"pattern":"Isometric / Stability","patternTags":["Isometric"],"joint":"Pelvic stabilization against drop and rotation"},{"exercise":"Fire Hydrant","demoUrl":"https://www.youtube.com/results?search_query=Fire+Hydrant+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Min","primary":"Glute Min, Glute Med","secondary":"Glute Max","plane":"Frontal + Transverse","planeTags":["Frontal","Transverse"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Hip Abduction + External Rotation"},{"exercise":"Copenhagen Plank (top leg)","demoUrl":"https://www.youtube.com/results?search_query=Copenhagen+Plank+%28top+leg%29+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Min","primary":"Adductors (bottom leg)","secondary":"Glute Min / Med (top leg, pelvis stabilization)","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isometric / Anti-Abduction","patternTags":["Anti-Abduction","Isometric"],"joint":"Pelvic stabilization against drop"},{"exercise":"Banded Seated Hip Abduction (Knees)","demoUrl":"https://www.youtube.com/results?search_query=Banded+Seated+Hip+Abduction+%28Knees%29+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Min","primary":"Glute Min, Glute Med","secondary":"TFL","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isolation (band-resisted)","patternTags":["Isolation"],"joint":"Hip Abduction"},{"exercise":"Standing Machine Hip Rotation","demoUrl":"https://www.youtube.com/results?search_query=Standing+Machine+Hip+Rotation+exercise+proper+form","region":"Lower Body","group":"Glutes","sub":"Glute Min","primary":"Glute Min, Glute Med","secondary":"Deep hip rotators","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation (machine)","patternTags":["Isolation"],"joint":"Hip Internal / External Rotation"},{"exercise":"Back Squat","demoUrl":"https://www.youtube.com/results?search_query=Back+Squat+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Quads, Glute Max","secondary":"Hamstrings, Adductors","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Squat","patternTags":["Squat"],"joint":"Knee Extension + Hip Extension"},{"exercise":"Front Squat","demoUrl":"https://www.youtube.com/results?search_query=Front+Squat+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Quads","secondary":"Glute Max, Erector Spinae","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Squat","patternTags":["Squat"],"joint":"Knee Extension + Hip Extension"},{"exercise":"Leg Press","demoUrl":"https://www.youtube.com/results?search_query=Leg+Press+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Quads","secondary":"Glute Max, Hamstrings","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Squat pattern (machine)","patternTags":["Squat"],"joint":"Knee Extension + Hip Extension"},{"exercise":"Leg Extension","demoUrl":"https://www.youtube.com/results?search_query=Leg+Extension+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Quads (Rectus Femoris, Vastus Medialis/Lateralis)","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Knee Extension"},{"exercise":"Walking Lunge","demoUrl":"https://www.youtube.com/results?search_query=Walking+Lunge+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Quads, Glute Max","secondary":"Hamstrings","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Lunge","patternTags":["Lunge"],"joint":"Knee Extension + Hip Extension"},{"exercise":"Bulgarian Split Squat","demoUrl":"https://www.youtube.com/results?search_query=Bulgarian+Split+Squat+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Quads, Glute Max","secondary":"Hamstrings, Glute Med","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Lunge","patternTags":["Lunge"],"joint":"Knee Extension + Hip Extension"},{"exercise":"Goblet Squat","demoUrl":"https://www.youtube.com/results?search_query=Goblet+Squat+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Quads","secondary":"Glute Max, Adductors","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Squat","patternTags":["Squat"],"joint":"Knee Extension + Hip Extension"},{"exercise":"Step-Up","demoUrl":"https://www.youtube.com/results?search_query=Step-Up+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Glute Max, Quads","secondary":"Hamstrings","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Lunge variant","patternTags":["Lunge"],"joint":"Knee Extension + Hip Extension"},{"exercise":"Sissy Squat","demoUrl":"https://www.youtube.com/results?search_query=Sissy+Squat+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Quads (Rectus Femoris bias)","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation / Squat variant","patternTags":["Squat","Isolation"],"joint":"Knee Extension"},{"exercise":"Wall Sit","demoUrl":"https://www.youtube.com/results?search_query=Wall+Sit+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Quads","secondary":"Glute Max (isometric)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isometric","patternTags":["Isometric"],"joint":"Knee Extension (isometric)"},{"exercise":"Hack Squat (Machine)","demoUrl":"https://www.youtube.com/results?search_query=Hack+Squat+%28Machine%29+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Quads","secondary":"Glute Max, Hamstrings","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Squat (machine)","patternTags":["Squat"],"joint":"Knee Extension + Hip Extension"},{"exercise":"Smith Machine Squat","demoUrl":"https://www.youtube.com/results?search_query=Smith+Machine+Squat+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Quads, Glute Max","secondary":"Hamstrings, Adductors","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Squat (machine-guided)","patternTags":["Squat"],"joint":"Knee Extension + Hip Extension"},{"exercise":"Belt Squat","demoUrl":"https://www.youtube.com/results?search_query=Belt+Squat+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Quads, Glute Max","secondary":"Hamstrings, Adductors","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Squat (machine, spine-unloaded)","patternTags":["Squat"],"joint":"Knee Extension + Hip Extension"},{"exercise":"Barbell Reverse Lunge","demoUrl":"https://www.youtube.com/results?search_query=Barbell+Reverse+Lunge+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Quads, Glute Max","secondary":"Hamstrings, Glute Med (stabilizer)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Lunge","patternTags":["Lunge"],"joint":"Knee Extension + Hip Extension"},{"exercise":"Pendulum Squat (Machine)","demoUrl":"https://www.youtube.com/results?search_query=Pendulum+Squat+%28Machine%29+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Quads","secondary":"Glute Max","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Squat (machine)","patternTags":["Squat"],"joint":"Knee Extension + Hip Extension"},{"exercise":"Spanish Squat (Band)","demoUrl":"https://www.youtube.com/results?search_query=Spanish+Squat+%28Band%29+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Quads (Rectus Femoris bias)","secondary":"Glute Max (isometric)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isometric (band-anchored)","patternTags":["Isometric"],"joint":"Knee Extension (isometric)"},{"exercise":"Banded Leg Extension","demoUrl":"https://www.youtube.com/results?search_query=Banded+Leg+Extension+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Quads (Rectus Femoris, Vastus Medialis/Lateralis)","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (band-resisted)","patternTags":["Isolation"],"joint":"Knee Extension"},{"exercise":"Romanian Deadlift","demoUrl":"https://www.youtube.com/results?search_query=Romanian+Deadlift+exercise+proper+form","region":"Lower Body","group":"Hamstrings","sub":"Hamstrings","primary":"Hamstrings, Glute Max","secondary":"Erector Spinae","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Hinge","patternTags":["Hinge"],"joint":"Hip Extension"},{"exercise":"Conventional Deadlift","demoUrl":"https://www.youtube.com/results?search_query=Conventional+Deadlift+exercise+proper+form","region":"Lower Body","group":"Hamstrings","sub":"Hamstrings","primary":"Hamstrings, Glute Max, Erector Spinae","secondary":"Quads","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Hinge","patternTags":["Hinge"],"joint":"Hip Extension"},{"exercise":"Lying Leg Curl","demoUrl":"https://www.youtube.com/results?search_query=Lying+Leg+Curl+exercise+proper+form","region":"Lower Body","group":"Hamstrings","sub":"Hamstrings","primary":"Hamstrings (Biceps Femoris, Semitendinosus/Semimembranosus)","secondary":"Calves (Gastrocnemius)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Knee Flexion"},{"exercise":"Seated Leg Curl","demoUrl":"https://www.youtube.com/results?search_query=Seated+Leg+Curl+exercise+proper+form","region":"Lower Body","group":"Hamstrings","sub":"Hamstrings","primary":"Hamstrings","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Knee Flexion"},{"exercise":"Nordic Hamstring Curl","demoUrl":"https://www.youtube.com/results?search_query=Nordic+Hamstring+Curl+exercise+proper+form","region":"Lower Body","group":"Hamstrings","sub":"Hamstrings","primary":"Hamstrings","secondary":"Glute Max","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Eccentric isolation","patternTags":["Isolation","Eccentric"],"joint":"Knee Flexion (eccentric control)"},{"exercise":"Glute-Ham Raise","demoUrl":"https://www.youtube.com/results?search_query=Glute-Ham+Raise+exercise+proper+form","region":"Lower Body","group":"Hamstrings","sub":"Hamstrings","primary":"Hamstrings, Glute Max","secondary":"Erector Spinae","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Compound hinge / curl","patternTags":["Hinge","Compound / Combination"],"joint":"Hip Extension + Knee Flexion"},{"exercise":"Single-Leg Romanian Deadlift","demoUrl":"https://www.youtube.com/results?search_query=Single-Leg+Romanian+Deadlift+exercise+proper+form","region":"Lower Body","group":"Hamstrings","sub":"Hamstrings","primary":"Hamstrings, Glute Max","secondary":"Glute Med (stabilizer), Erector Spinae","plane":"Sagittal (primary) + Frontal (stability)","planeTags":["Sagittal","Frontal"],"pattern":"Hip Hinge (unilateral)","patternTags":["Hinge"],"joint":"Hip Extension"},{"exercise":"Good Morning","demoUrl":"https://www.youtube.com/results?search_query=Good+Morning+exercise+proper+form","region":"Lower Body","group":"Hamstrings","sub":"Hamstrings","primary":"Hamstrings, Erector Spinae","secondary":"Glute Max","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Hinge","patternTags":["Hinge"],"joint":"Hip Extension"},{"exercise":"Kettlebell Swing","demoUrl":"https://www.youtube.com/results?search_query=Kettlebell+Swing+exercise+proper+form","region":"Lower Body","group":"Hamstrings","sub":"Hamstrings","primary":"Glute Max, Hamstrings","secondary":"Erector Spinae","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Hinge (ballistic)","patternTags":["Hinge"],"joint":"Hip Extension"},{"exercise":"Stability Ball Leg Curl","demoUrl":"https://www.youtube.com/results?search_query=Stability+Ball+Leg+Curl+exercise+proper+form","region":"Lower Body","group":"Hamstrings","sub":"Hamstrings","primary":"Hamstrings","secondary":"Glute Max, Core (stabilizer)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Knee Flexion"},{"exercise":"Standing Cable Leg Curl","demoUrl":"https://www.youtube.com/results?search_query=Standing+Cable+Leg+Curl+exercise+proper+form","region":"Lower Body","group":"Hamstrings","sub":"Hamstrings","primary":"Hamstrings","secondary":"Glute Max (stabilizer)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (cable)","patternTags":["Isolation"],"joint":"Knee Flexion"},{"exercise":"Banded Leg Curl (Standing)","demoUrl":"https://www.youtube.com/results?search_query=Banded+Leg+Curl+%28Standing%29+exercise+proper+form","region":"Lower Body","group":"Hamstrings","sub":"Hamstrings","primary":"Hamstrings","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (band-resisted)","patternTags":["Isolation"],"joint":"Knee Flexion"},{"exercise":"Deficit Romanian Deadlift","demoUrl":"https://www.youtube.com/results?search_query=Deficit+Romanian+Deadlift+exercise+proper+form","region":"Lower Body","group":"Hamstrings","sub":"Hamstrings","primary":"Hamstrings, Glute Max","secondary":"Erector Spinae, Forearms (grip)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Hinge (extended range)","patternTags":["Hinge"],"joint":"Hip Extension"},{"exercise":"Snatch-Grip Deadlift","demoUrl":"https://www.youtube.com/results?search_query=Snatch-Grip+Deadlift+exercise+proper+form","region":"Lower Body","group":"Hamstrings","sub":"Hamstrings","primary":"Hamstrings, Glute Max, Erector Spinae","secondary":"Traps, Forearms (grip)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Hinge (wide grip)","patternTags":["Hinge"],"joint":"Hip Extension + Knee Extension"},{"exercise":"Copenhagen Plank","demoUrl":"https://www.youtube.com/results?search_query=Copenhagen+Plank+exercise+proper+form","region":"Lower Body","group":"Adductors","sub":"Adductors","primary":"Adductors (Longus, Brevis, Magnus)","secondary":"Obliques, Glute Med (top leg)","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isometric","patternTags":["Isometric"],"joint":"Hip Adduction (isometric)"},{"exercise":"Cable Hip Adduction","demoUrl":"https://www.youtube.com/results?search_query=Cable+Hip+Adduction+exercise+proper+form","region":"Lower Body","group":"Adductors","sub":"Adductors","primary":"Adductors","secondary":"—","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Hip Adduction"},{"exercise":"Seated Adductor Machine","demoUrl":"https://www.youtube.com/results?search_query=Seated+Adductor+Machine+exercise+proper+form","region":"Lower Body","group":"Adductors","sub":"Adductors","primary":"Adductors","secondary":"—","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Hip Adduction"},{"exercise":"Sumo Deadlift","demoUrl":"https://www.youtube.com/results?search_query=Sumo+Deadlift+exercise+proper+form","region":"Lower Body","group":"Adductors","sub":"Adductors","primary":"Adductors, Glute Max, Quads","secondary":"Hamstrings, Erector Spinae","plane":"Sagittal (primary) + Frontal (wide stance)","planeTags":["Sagittal","Frontal"],"pattern":"Hip Hinge","patternTags":["Hinge"],"joint":"Hip Extension + Adduction"},{"exercise":"Lateral Lunge","demoUrl":"https://www.youtube.com/results?search_query=Lateral+Lunge+exercise+proper+form","region":"Lower Body","group":"Adductors","sub":"Adductors","primary":"Glute Max, Adductors","secondary":"Glute Med (stance leg), Quads","plane":"Frontal","planeTags":["Frontal"],"pattern":"Lunge","patternTags":["Lunge"],"joint":"Hip Adduction (lowering leg)"},{"exercise":"Cossack Squat","demoUrl":"https://www.youtube.com/results?search_query=Cossack+Squat+exercise+proper+form","region":"Lower Body","group":"Adductors","sub":"Adductors","primary":"Adductors, Glute Max","secondary":"Quads","plane":"Frontal","planeTags":["Frontal"],"pattern":"Lateral Squat / Lunge","patternTags":["Squat","Lunge"],"joint":"Hip Adduction / Abduction"},{"exercise":"Sliding Adductor Lunge","demoUrl":"https://www.youtube.com/results?search_query=Sliding+Adductor+Lunge+exercise+proper+form","region":"Lower Body","group":"Adductors","sub":"Adductors","primary":"Adductors","secondary":"Glute Med (stabilizer)","plane":"Frontal","planeTags":["Frontal"],"pattern":"Lunge / Isolation","patternTags":["Lunge","Isolation"],"joint":"Hip Adduction"},{"exercise":"Banded Standing Hip Adduction","demoUrl":"https://www.youtube.com/results?search_query=Banded+Standing+Hip+Adduction+exercise+proper+form","region":"Lower Body","group":"Adductors","sub":"Adductors","primary":"Adductors","secondary":"—","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isolation (band-resisted)","patternTags":["Isolation"],"joint":"Hip Adduction"},{"exercise":"Adductor Squeeze (Isometric Ball)","demoUrl":"https://www.youtube.com/results?search_query=Adductor+Squeeze+%28Isometric+Ball%29+exercise+proper+form","region":"Lower Body","group":"Adductors","sub":"Adductors","primary":"Adductors","secondary":"—","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isometric","patternTags":["Isometric"],"joint":"Hip Adduction (isometric)"},{"exercise":"Dumbbell Sumo Squat","demoUrl":"https://www.youtube.com/results?search_query=Dumbbell+Sumo+Squat+exercise+proper+form","region":"Lower Body","group":"Adductors","sub":"Adductors","primary":"Adductors, Glute Max, Quads","secondary":"Hamstrings","plane":"Sagittal (primary) + Frontal (wide stance)","planeTags":["Sagittal","Frontal"],"pattern":"Squat","patternTags":["Squat"],"joint":"Hip Extension + Adduction"},{"exercise":"Copenhagen Plank (Progression, Knee Bent)","demoUrl":"https://www.youtube.com/results?search_query=Copenhagen+Plank+%28Progression%2C+Knee+Bent%29+exercise+proper+form","region":"Lower Body","group":"Adductors","sub":"Adductors","primary":"Adductors (Longus, Brevis)","secondary":"Obliques, Glute Med (top leg)","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isometric (regression)","patternTags":["Isometric"],"joint":"Hip Adduction (isometric)"},{"exercise":"Hanging Leg Raise","demoUrl":"https://www.youtube.com/results?search_query=Hanging+Leg+Raise+exercise+proper+form","region":"Lower Body","group":"Hip Flexors","sub":"Hip Flexors","primary":"Hip Flexors (Iliopsoas, Rectus Femoris)","secondary":"Rectus Abdominis (lower)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Hip Flexion"},{"exercise":"Weighted Sit-Up","demoUrl":"https://www.youtube.com/results?search_query=Weighted+Sit-Up+exercise+proper+form","region":"Lower Body","group":"Hip Flexors","sub":"Hip Flexors","primary":"Hip Flexors, Rectus Abdominis","secondary":"Obliques","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Compound Flexion","patternTags":["Compound / Combination"],"joint":"Hip Flexion + Spinal Flexion"},{"exercise":"Standing Cable Hip Flexion (March)","demoUrl":"https://www.youtube.com/results?search_query=Standing+Cable+Hip+Flexion+%28March%29+exercise+proper+form","region":"Lower Body","group":"Hip Flexors","sub":"Hip Flexors","primary":"Hip Flexors (Iliopsoas)","secondary":"Rectus Femoris","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Hip Flexion"},{"exercise":"Mountain Climbers","demoUrl":"https://www.youtube.com/results?search_query=Mountain+Climbers+exercise+proper+form","region":"Lower Body","group":"Hip Flexors","sub":"Hip Flexors","primary":"Hip Flexors","secondary":"Rectus Abdominis, Shoulders (stability)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Dynamic / Gait pattern","patternTags":["Gait"],"joint":"Hip Flexion (alternating)"},{"exercise":"Resisted March (band around hips)","demoUrl":"https://www.youtube.com/results?search_query=Resisted+March+%28band+around+hips%29+exercise+proper+form","region":"Lower Body","group":"Hip Flexors","sub":"Hip Flexors","primary":"Hip Flexors","secondary":"Quads","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Gait","patternTags":["Gait"],"joint":"Hip Flexion (resisted)"},{"exercise":"Captain's Chair Knee Raise","demoUrl":"https://www.youtube.com/results?search_query=Captain%27s+Chair+Knee+Raise+exercise+proper+form","region":"Lower Body","group":"Hip Flexors","sub":"Hip Flexors","primary":"Hip Flexors","secondary":"Rectus Abdominis (lower)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Hip Flexion"},{"exercise":"Banded Knee Drive (Standing)","demoUrl":"https://www.youtube.com/results?search_query=Banded+Knee+Drive+%28Standing%29+exercise+proper+form","region":"Lower Body","group":"Hip Flexors","sub":"Hip Flexors","primary":"Hip Flexors (Iliopsoas)","secondary":"Rectus Femoris, Core","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (band-resisted)","patternTags":["Isolation"],"joint":"Hip Flexion"},{"exercise":"Machine Hip Flexor Raise (Seated)","demoUrl":"https://www.youtube.com/results?search_query=Machine+Hip+Flexor+Raise+%28Seated%29+exercise+proper+form","region":"Lower Body","group":"Hip Flexors","sub":"Hip Flexors","primary":"Hip Flexors (Iliopsoas, Rectus Femoris)","secondary":"Rectus Abdominis (lower)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (machine)","patternTags":["Isolation"],"joint":"Hip Flexion"},{"exercise":"Sled Drag (Hip Flexor Bias, Backward)","demoUrl":"https://www.youtube.com/results?search_query=Sled+Drag+%28Hip+Flexor+Bias%2C+Backward%29+exercise+proper+form","region":"Lower Body","group":"Hip Flexors","sub":"Hip Flexors","primary":"Hip Flexors, Quads","secondary":"Calves, Glutes","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Gait (loaded)","patternTags":["Gait"],"joint":"Hip Flexion / Extension (resisted)"},{"exercise":"Standing Calf Raise","demoUrl":"https://www.youtube.com/results?search_query=Standing+Calf+Raise+exercise+proper+form","region":"Lower Body","group":"Calves","sub":"Gastrocnemius","primary":"Gastrocnemius","secondary":"Soleus","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Ankle Plantarflexion"},{"exercise":"Jump Rope","demoUrl":"https://www.youtube.com/results?search_query=Jump+Rope+exercise+proper+form","region":"Lower Body","group":"Calves","sub":"Gastrocnemius","primary":"Gastrocnemius","secondary":"Soleus, Quads","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Plyometric","patternTags":["Plyometric"],"joint":"Ankle Plantarflexion (reactive)"},{"exercise":"Calf Raise on Leg Press","demoUrl":"https://www.youtube.com/results?search_query=Calf+Raise+on+Leg+Press+exercise+proper+form","region":"Lower Body","group":"Calves","sub":"Gastrocnemius","primary":"Gastrocnemius","secondary":"Soleus","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Ankle Plantarflexion"},{"exercise":"Box Jump","demoUrl":"https://www.youtube.com/results?search_query=Box+Jump+exercise+proper+form","region":"Lower Body","group":"Calves","sub":"Gastrocnemius","primary":"Gastrocnemius, Quads, Glute Max","secondary":"Soleus","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Plyometric / Triple Extension","patternTags":["Extension","Plyometric"],"joint":"Ankle Plantarflexion + Knee/Hip Extension"},{"exercise":"Barbell Standing Calf Raise","demoUrl":"https://www.youtube.com/results?search_query=Barbell+Standing+Calf+Raise+exercise+proper+form","region":"Lower Body","group":"Calves","sub":"Gastrocnemius","primary":"Gastrocnemius","secondary":"Soleus","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Ankle Plantarflexion"},{"exercise":"Smith Machine Calf Raise","demoUrl":"https://www.youtube.com/results?search_query=Smith+Machine+Calf+Raise+exercise+proper+form","region":"Lower Body","group":"Calves","sub":"Gastrocnemius","primary":"Gastrocnemius","secondary":"Soleus","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (machine-guided)","patternTags":["Isolation"],"joint":"Ankle Plantarflexion"},{"exercise":"Single-Leg Dumbbell Calf Raise","demoUrl":"https://www.youtube.com/results?search_query=Single-Leg+Dumbbell+Calf+Raise+exercise+proper+form","region":"Lower Body","group":"Calves","sub":"Gastrocnemius","primary":"Gastrocnemius","secondary":"Soleus","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (unilateral)","patternTags":["Isolation"],"joint":"Ankle Plantarflexion"},{"exercise":"Donkey Calf Raise","demoUrl":"https://www.youtube.com/results?search_query=Donkey+Calf+Raise+exercise+proper+form","region":"Lower Body","group":"Calves","sub":"Gastrocnemius","primary":"Gastrocnemius","secondary":"Soleus","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (hip-flexed)","patternTags":["Isolation"],"joint":"Ankle Plantarflexion"},{"exercise":"Seated Calf Raise","demoUrl":"https://www.youtube.com/results?search_query=Seated+Calf+Raise+exercise+proper+form","region":"Lower Body","group":"Calves","sub":"Soleus","primary":"Soleus","secondary":"Gastrocnemius","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Ankle Plantarflexion (knee flexed)"},{"exercise":"Bent-Knee Calf Press (machine)","demoUrl":"https://www.youtube.com/results?search_query=Bent-Knee+Calf+Press+%28machine%29+exercise+proper+form","region":"Lower Body","group":"Calves","sub":"Soleus","primary":"Soleus","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Ankle Plantarflexion"},{"exercise":"Seated Band Calf Raise","demoUrl":"https://www.youtube.com/results?search_query=Seated+Band+Calf+Raise+exercise+proper+form","region":"Lower Body","group":"Calves","sub":"Soleus","primary":"Soleus","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Ankle Plantarflexion"},{"exercise":"Bent-Knee Wall Calf Raise (isometric hold)","demoUrl":"https://www.youtube.com/results?search_query=Bent-Knee+Wall+Calf+Raise+%28isometric+hold%29+exercise+proper+form","region":"Lower Body","group":"Calves","sub":"Soleus","primary":"Soleus","secondary":"Gastrocnemius","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isometric + Isolation","patternTags":["Isolation","Isometric"],"joint":"Ankle Plantarflexion"},{"exercise":"Smith Machine Seated Calf Raise","demoUrl":"https://www.youtube.com/results?search_query=Smith+Machine+Seated+Calf+Raise+exercise+proper+form","region":"Lower Body","group":"Calves","sub":"Soleus","primary":"Soleus","secondary":"Gastrocnemius","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (machine-guided)","patternTags":["Isolation"],"joint":"Ankle Plantarflexion (knee flexed)"},{"exercise":"Single-Leg Seated Calf Raise","demoUrl":"https://www.youtube.com/results?search_query=Single-Leg+Seated+Calf+Raise+exercise+proper+form","region":"Lower Body","group":"Calves","sub":"Soleus","primary":"Soleus","secondary":"Gastrocnemius","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (unilateral)","patternTags":["Isolation"],"joint":"Ankle Plantarflexion (knee flexed)"},{"exercise":"Crunch","demoUrl":"https://www.youtube.com/results?search_query=Crunch+exercise+proper+form","region":"Core","group":"Abdominals","sub":"Rectus Abdominis (Upper)","primary":"Rectus Abdominis (upper)","secondary":"Obliques","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Spinal Flexion"},{"exercise":"Cable Crunch","demoUrl":"https://www.youtube.com/results?search_query=Cable+Crunch+exercise+proper+form","region":"Core","group":"Abdominals","sub":"Rectus Abdominis (Upper)","primary":"Rectus Abdominis (upper)","secondary":"Obliques","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Spinal Flexion"},{"exercise":"Decline Sit-Up","demoUrl":"https://www.youtube.com/results?search_query=Decline+Sit-Up+exercise+proper+form","region":"Core","group":"Abdominals","sub":"Rectus Abdominis (Upper)","primary":"Rectus Abdominis","secondary":"Hip Flexors","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Compound Flexion","patternTags":["Compound / Combination"],"joint":"Spinal Flexion + Hip Flexion"},{"exercise":"Ab Wheel Rollout","demoUrl":"https://www.youtube.com/results?search_query=Ab+Wheel+Rollout+exercise+proper+form","region":"Core","group":"Abdominals","sub":"Rectus Abdominis (Upper)","primary":"Rectus Abdominis","secondary":"Lats, Obliques, Hip Flexors","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Anti-Extension (dynamic)","patternTags":["Anti-Extension"],"joint":"Spinal Flexion control (resisting extension)"},{"exercise":"Sit-Up","demoUrl":"https://www.youtube.com/results?search_query=Sit-Up+exercise+proper+form","region":"Core","group":"Abdominals","sub":"Rectus Abdominis (Upper)","primary":"Rectus Abdominis, Hip Flexors","secondary":"Obliques","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Compound Flexion","patternTags":["Compound / Combination"],"joint":"Spinal Flexion + Hip Flexion"},{"exercise":"Machine Ab Crunch","demoUrl":"https://www.youtube.com/results?search_query=Machine+Ab+Crunch+exercise+proper+form","region":"Core","group":"Abdominals","sub":"Rectus Abdominis (Upper)","primary":"Rectus Abdominis (upper)","secondary":"Obliques","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (machine)","patternTags":["Isolation"],"joint":"Spinal Flexion"},{"exercise":"Banded Crunch","demoUrl":"https://www.youtube.com/results?search_query=Banded+Crunch+exercise+proper+form","region":"Core","group":"Abdominals","sub":"Rectus Abdominis (Upper)","primary":"Rectus Abdominis (upper)","secondary":"Obliques","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (band-resisted)","patternTags":["Isolation"],"joint":"Spinal Flexion"},{"exercise":"Swiss Ball Crunch","demoUrl":"https://www.youtube.com/results?search_query=Swiss+Ball+Crunch+exercise+proper+form","region":"Core","group":"Abdominals","sub":"Rectus Abdominis (Upper)","primary":"Rectus Abdominis (upper)","secondary":"Obliques","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (extended range)","patternTags":["Isolation"],"joint":"Spinal Flexion"},{"exercise":"Weighted Decline Crunch","demoUrl":"https://www.youtube.com/results?search_query=Weighted+Decline+Crunch+exercise+proper+form","region":"Core","group":"Abdominals","sub":"Rectus Abdominis (Upper)","primary":"Rectus Abdominis (upper)","secondary":"Hip Flexors","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (loaded)","patternTags":["Isolation"],"joint":"Spinal Flexion"},{"exercise":"Hanging Leg Raise","demoUrl":"https://www.youtube.com/results?search_query=Hanging+Leg+Raise+exercise+proper+form","region":"Core","group":"Abdominals","sub":"Rectus Abdominis (Lower)","primary":"Rectus Abdominis (lower), Hip Flexors","secondary":"Obliques","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Posterior Pelvic Tilt + Hip Flexion"},{"exercise":"Reverse Crunch","demoUrl":"https://www.youtube.com/results?search_query=Reverse+Crunch+exercise+proper+form","region":"Core","group":"Abdominals","sub":"Rectus Abdominis (Lower)","primary":"Rectus Abdominis (lower)","secondary":"Hip Flexors","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Posterior Pelvic Tilt"},{"exercise":"Lying Leg Raise","demoUrl":"https://www.youtube.com/results?search_query=Lying+Leg+Raise+exercise+proper+form","region":"Core","group":"Abdominals","sub":"Rectus Abdominis (Lower)","primary":"Rectus Abdominis (lower), Hip Flexors","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Hip Flexion + Posterior Pelvic Tilt"},{"exercise":"Captain's Chair Knee Raise","demoUrl":"https://www.youtube.com/results?search_query=Captain%27s+Chair+Knee+Raise+exercise+proper+form","region":"Core","group":"Abdominals","sub":"Rectus Abdominis (Lower)","primary":"Rectus Abdominis (lower), Hip Flexors","secondary":"Obliques","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Hip Flexion + Posterior Pelvic Tilt"},{"exercise":"V-Up","demoUrl":"https://www.youtube.com/results?search_query=V-Up+exercise+proper+form","region":"Core","group":"Abdominals","sub":"Rectus Abdominis (Lower)","primary":"Rectus Abdominis (upper + lower)","secondary":"Hip Flexors","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Compound Flexion","patternTags":["Compound / Combination"],"joint":"Spinal Flexion + Hip Flexion"},{"exercise":"Toes-to-Bar","demoUrl":"https://www.youtube.com/results?search_query=Toes-to-Bar+exercise+proper+form","region":"Core","group":"Abdominals","sub":"Rectus Abdominis (Lower)","primary":"Rectus Abdominis (lower), Hip Flexors","secondary":"Obliques, Forearms (grip)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (advanced)","patternTags":["Isolation"],"joint":"Hip Flexion + Posterior Pelvic Tilt"},{"exercise":"Cable Reverse Crunch","demoUrl":"https://www.youtube.com/results?search_query=Cable+Reverse+Crunch+exercise+proper+form","region":"Core","group":"Abdominals","sub":"Rectus Abdominis (Lower)","primary":"Rectus Abdominis (lower)","secondary":"Hip Flexors","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (cable-resisted)","patternTags":["Isolation"],"joint":"Posterior Pelvic Tilt"},{"exercise":"Weighted Hanging Knee Raise","demoUrl":"https://www.youtube.com/results?search_query=Weighted+Hanging+Knee+Raise+exercise+proper+form","region":"Core","group":"Abdominals","sub":"Rectus Abdominis (Lower)","primary":"Rectus Abdominis (lower), Hip Flexors","secondary":"Obliques","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (loaded)","patternTags":["Isolation"],"joint":"Hip Flexion + Posterior Pelvic Tilt"},{"exercise":"Cable Woodchop (high-to-low)","demoUrl":"https://www.youtube.com/results?search_query=Cable+Woodchop+%28high-to-low%29+exercise+proper+form","region":"Core","group":"Obliques","sub":"Obliques (Rotational)","primary":"Obliques","secondary":"Rectus Abdominis, Glutes (rotation drive)","plane":"Transverse","planeTags":["Transverse"],"pattern":"Rotation","patternTags":["Rotation"],"joint":"Trunk Rotation"},{"exercise":"Russian Twist","demoUrl":"https://www.youtube.com/results?search_query=Russian+Twist+exercise+proper+form","region":"Core","group":"Obliques","sub":"Obliques (Rotational)","primary":"Obliques","secondary":"Rectus Abdominis, Hip Flexors","plane":"Transverse","planeTags":["Transverse"],"pattern":"Rotation","patternTags":["Rotation"],"joint":"Trunk Rotation"},{"exercise":"Landmine 360 Rotation","demoUrl":"https://www.youtube.com/results?search_query=Landmine+360+Rotation+exercise+proper+form","region":"Core","group":"Obliques","sub":"Obliques (Rotational)","primary":"Obliques","secondary":"Shoulders, Hip Rotators","plane":"Transverse","planeTags":["Transverse"],"pattern":"Rotation","patternTags":["Rotation"],"joint":"Trunk Rotation"},{"exercise":"Medicine Ball Rotational Throw","demoUrl":"https://www.youtube.com/results?search_query=Medicine+Ball+Rotational+Throw+exercise+proper+form","region":"Core","group":"Obliques","sub":"Obliques (Rotational)","primary":"Obliques","secondary":"Glutes, Lats","plane":"Transverse","planeTags":["Transverse"],"pattern":"Rotation (ballistic)","patternTags":["Rotation"],"joint":"Trunk Rotation"},{"exercise":"Standing Cable Rotation","demoUrl":"https://www.youtube.com/results?search_query=Standing+Cable+Rotation+exercise+proper+form","region":"Core","group":"Obliques","sub":"Obliques (Rotational)","primary":"Obliques","secondary":"Rectus Abdominis","plane":"Transverse","planeTags":["Transverse"],"pattern":"Rotation","patternTags":["Rotation"],"joint":"Trunk Rotation"},{"exercise":"Rotational Lunge","demoUrl":"https://www.youtube.com/results?search_query=Rotational+Lunge+exercise+proper+form","region":"Core","group":"Obliques","sub":"Obliques (Rotational)","primary":"Obliques (trunk)","secondary":"Glute Max, Quads (legs)","plane":"Transverse (trunk) + Sagittal (legs)","planeTags":["Sagittal","Transverse"],"pattern":"Combination","patternTags":["Compound / Combination"],"joint":"Trunk Rotation + Hip/Knee Flexion-Extension"},{"exercise":"Banded Standing Woodchop","demoUrl":"https://www.youtube.com/results?search_query=Banded+Standing+Woodchop+exercise+proper+form","region":"Core","group":"Obliques","sub":"Obliques (Rotational)","primary":"Obliques","secondary":"Rectus Abdominis, Glutes (rotation drive)","plane":"Transverse","planeTags":["Transverse"],"pattern":"Rotation (band-resisted)","patternTags":["Rotation"],"joint":"Trunk Rotation"},{"exercise":"Landmine Rotation (Half-Kneeling)","demoUrl":"https://www.youtube.com/results?search_query=Landmine+Rotation+%28Half-Kneeling%29+exercise+proper+form","region":"Core","group":"Obliques","sub":"Obliques (Rotational)","primary":"Obliques","secondary":"Shoulders, Hip Rotators","plane":"Transverse","planeTags":["Transverse"],"pattern":"Rotation","patternTags":["Rotation"],"joint":"Trunk Rotation"},{"exercise":"Barbell Landmine Twist (Standing)","demoUrl":"https://www.youtube.com/results?search_query=Barbell+Landmine+Twist+%28Standing%29+exercise+proper+form","region":"Core","group":"Obliques","sub":"Obliques (Rotational)","primary":"Obliques","secondary":"Glutes, Shoulders","plane":"Transverse","planeTags":["Transverse"],"pattern":"Rotation","patternTags":["Rotation"],"joint":"Trunk Rotation"},{"exercise":"Dumbbell Side Bend","demoUrl":"https://www.youtube.com/results?search_query=Dumbbell+Side+Bend+exercise+proper+form","region":"Core","group":"Obliques","sub":"Obliques (Lateral Flexion)","primary":"Obliques","secondary":"Quadratus Lumborum","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Lateral Spinal Flexion"},{"exercise":"Side Plank","demoUrl":"https://www.youtube.com/results?search_query=Side+Plank+exercise+proper+form","region":"Core","group":"Obliques","sub":"Obliques (Lateral Flexion)","primary":"Obliques (anti-lateral flexion)","secondary":"Glute Med, Quadratus Lumborum","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isometric","patternTags":["Isometric"],"joint":"Anti-Lateral Flexion (isometric)"},{"exercise":"Suitcase Carry","demoUrl":"https://www.youtube.com/results?search_query=Suitcase+Carry+exercise+proper+form","region":"Core","group":"Obliques","sub":"Obliques (Lateral Flexion)","primary":"Obliques (anti-lateral flexion), Quadratus Lumborum","secondary":"Forearms (grip), Traps","plane":"Frontal","planeTags":["Frontal"],"pattern":"Loaded Carry","patternTags":["Loaded Carry"],"joint":"Anti-Lateral Flexion (isometric)"},{"exercise":"Side Plank with Hip Dip","demoUrl":"https://www.youtube.com/results?search_query=Side+Plank+with+Hip+Dip+exercise+proper+form","region":"Core","group":"Obliques","sub":"Obliques (Lateral Flexion)","primary":"Obliques","secondary":"Glute Med","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isometric + Dynamic","patternTags":["Isometric"],"joint":"Lateral Flexion / Anti-Lateral Flexion"},{"exercise":"Cable Side Bend","demoUrl":"https://www.youtube.com/results?search_query=Cable+Side+Bend+exercise+proper+form","region":"Core","group":"Obliques","sub":"Obliques (Lateral Flexion)","primary":"Obliques","secondary":"Quadratus Lumborum","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isolation (cable-resisted)","patternTags":["Isolation"],"joint":"Lateral Spinal Flexion"},{"exercise":"Banded Side Bend","demoUrl":"https://www.youtube.com/results?search_query=Banded+Side+Bend+exercise+proper+form","region":"Core","group":"Obliques","sub":"Obliques (Lateral Flexion)","primary":"Obliques","secondary":"Quadratus Lumborum","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isolation (band-resisted)","patternTags":["Isolation"],"joint":"Lateral Spinal Flexion"},{"exercise":"Plank","demoUrl":"https://www.youtube.com/results?search_query=Plank+exercise+proper+form","region":"Core","group":"Deep Core","sub":"Transverse Abdominis / Anti-Extension","primary":"Transverse Abdominis, Rectus Abdominis","secondary":"Glutes, Shoulders","plane":"Sagittal (anti-extension)","planeTags":["Sagittal"],"pattern":"Isometric","patternTags":["Isometric"],"joint":"Anti-Extension (isometric)"},{"exercise":"Pallof Press","demoUrl":"https://www.youtube.com/results?search_query=Pallof+Press+exercise+proper+form","region":"Core","group":"Deep Core","sub":"Transverse Abdominis / Anti-Extension","primary":"Transverse Abdominis, Obliques","secondary":"Shoulders","plane":"Transverse (anti-rotation)","planeTags":["Transverse"],"pattern":"Isometric / Anti-Rotation","patternTags":["Anti-Rotation","Isometric"],"joint":"Anti-Rotation (isometric)"},{"exercise":"Dead Bug","demoUrl":"https://www.youtube.com/results?search_query=Dead+Bug+exercise+proper+form","region":"Core","group":"Deep Core","sub":"Transverse Abdominis / Anti-Extension","primary":"Transverse Abdominis, Rectus Abdominis","secondary":"Hip Flexors","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Anti-Extension (dynamic limbs)","patternTags":["Anti-Extension"],"joint":"Anti-Extension / Core Stabilization"},{"exercise":"Bird Dog","demoUrl":"https://www.youtube.com/results?search_query=Bird+Dog+exercise+proper+form","region":"Core","group":"Deep Core","sub":"Transverse Abdominis / Anti-Extension","primary":"Transverse Abdominis, Erector Spinae","secondary":"Glute Max, Shoulders","plane":"Sagittal (anti-extension) + Anti-Rotation","planeTags":["Sagittal"],"pattern":"Isometric / Stability","patternTags":["Isometric"],"joint":"Anti-Rotation & Anti-Extension"},{"exercise":"Farmer's Carry","demoUrl":"https://www.youtube.com/results?search_query=Farmer%27s+Carry+exercise+proper+form","region":"Core","group":"Deep Core","sub":"Transverse Abdominis / Anti-Extension","primary":"Transverse Abdominis","secondary":"Traps, Forearms (grip), Glute Med","plane":"Sagittal / Frontal (anti-lateral flexion)","planeTags":["Sagittal","Frontal"],"pattern":"Loaded Carry","patternTags":["Loaded Carry"],"joint":"Core Stabilization (anti-flexion/anti-lateral flexion)"},{"exercise":"Ab Wheel Rollout","demoUrl":"https://www.youtube.com/results?search_query=Ab+Wheel+Rollout+exercise+proper+form","region":"Core","group":"Deep Core","sub":"Transverse Abdominis / Anti-Extension","primary":"Transverse Abdominis, Rectus Abdominis","secondary":"Lats, Hip Flexors","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Anti-Extension (dynamic)","patternTags":["Anti-Extension"],"joint":"Anti-Extension"},{"exercise":"Half-Kneeling Pallof Press","demoUrl":"https://www.youtube.com/results?search_query=Half-Kneeling+Pallof+Press+exercise+proper+form","region":"Core","group":"Deep Core","sub":"Transverse Abdominis / Anti-Extension","primary":"Transverse Abdominis, Obliques","secondary":"Shoulders, Glute Med","plane":"Transverse (anti-rotation)","planeTags":["Transverse"],"pattern":"Isometric / Anti-Rotation","patternTags":["Anti-Rotation","Isometric"],"joint":"Anti-Rotation (isometric)"},{"exercise":"Band Pallof Press (Standing, Overhead)","demoUrl":"https://www.youtube.com/results?search_query=Band+Pallof+Press+%28Standing%2C+Overhead%29+exercise+proper+form","region":"Core","group":"Deep Core","sub":"Transverse Abdominis / Anti-Extension","primary":"Transverse Abdominis, Obliques","secondary":"Shoulders","plane":"Transverse (anti-rotation)","planeTags":["Transverse"],"pattern":"Isometric / Anti-Rotation","patternTags":["Anti-Rotation","Isometric"],"joint":"Anti-Rotation (isometric)"},{"exercise":"Stir the Pot (Stability Ball)","demoUrl":"https://www.youtube.com/results?search_query=Stir+the+Pot+%28Stability+Ball%29+exercise+proper+form","region":"Core","group":"Deep Core","sub":"Transverse Abdominis / Anti-Extension","primary":"Transverse Abdominis, Rectus Abdominis","secondary":"Shoulders, Obliques","plane":"Multi-planar (anti-extension/rotation)","planeTags":[],"pattern":"Isometric / Dynamic Stability","patternTags":["Isometric"],"joint":"Core Stabilization (anti-extension + anti-rotation)"},{"exercise":"45-Degree Back Extension","demoUrl":"https://www.youtube.com/results?search_query=45-Degree+Back+Extension+exercise+proper+form","region":"Core","group":"Lower Back","sub":"Erector Spinae","primary":"Erector Spinae","secondary":"Glute Max, Hamstrings","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Spinal Extension"},{"exercise":"Good Morning","demoUrl":"https://www.youtube.com/results?search_query=Good+Morning+exercise+proper+form","region":"Core","group":"Lower Back","sub":"Erector Spinae","primary":"Erector Spinae, Hamstrings","secondary":"Glute Max","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Hinge","patternTags":["Hinge"],"joint":"Spinal Extension (isometric) + Hip Extension"},{"exercise":"Deadlift","demoUrl":"https://www.youtube.com/results?search_query=Deadlift+exercise+proper+form","region":"Core","group":"Lower Back","sub":"Erector Spinae","primary":"Erector Spinae, Glute Max, Hamstrings","secondary":"Traps, Quads","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Hinge","patternTags":["Hinge"],"joint":"Spinal Extension (isometric) + Hip Extension"},{"exercise":"Superman","demoUrl":"https://www.youtube.com/results?search_query=Superman+exercise+proper+form","region":"Core","group":"Lower Back","sub":"Erector Spinae","primary":"Erector Spinae","secondary":"Glute Max","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Spinal Extension"},{"exercise":"Bird Dog","demoUrl":"https://www.youtube.com/results?search_query=Bird+Dog+exercise+proper+form","region":"Core","group":"Lower Back","sub":"Erector Spinae","primary":"Erector Spinae, Transverse Abdominis","secondary":"Glute Max","plane":"Sagittal (anti-extension)","planeTags":["Sagittal"],"pattern":"Isometric / Stability","patternTags":["Isometric"],"joint":"Spinal Stabilization"},{"exercise":"Machine Back Extension","demoUrl":"https://www.youtube.com/results?search_query=Machine+Back+Extension+exercise+proper+form","region":"Core","group":"Lower Back","sub":"Erector Spinae","primary":"Erector Spinae","secondary":"Glute Max, Hamstrings","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (machine)","patternTags":["Isolation"],"joint":"Spinal Extension"},{"exercise":"Banded Good Morning","demoUrl":"https://www.youtube.com/results?search_query=Banded+Good+Morning+exercise+proper+form","region":"Core","group":"Lower Back","sub":"Erector Spinae","primary":"Erector Spinae, Hamstrings","secondary":"Glute Max","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Hinge (band-resisted)","patternTags":["Hinge"],"joint":"Spinal Extension (isometric) + Hip Extension"},{"exercise":"Weighted Back Extension (Plate-Loaded)","demoUrl":"https://www.youtube.com/results?search_query=Weighted+Back+Extension+%28Plate-Loaded%29+exercise+proper+form","region":"Core","group":"Lower Back","sub":"Erector Spinae","primary":"Erector Spinae","secondary":"Glute Max, Hamstrings","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (loaded)","patternTags":["Isolation"],"joint":"Spinal Extension"},{"exercise":"Neck Harness Flexion","demoUrl":"https://www.youtube.com/results?search_query=Neck+Harness+Flexion+exercise+proper+form","region":"Core","group":"Neck","sub":"Neck Flexion / Extension","primary":"Neck Flexors (Sternocleidomastoid, Deep Cervical Flexors)","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (loaded)","patternTags":["Isolation"],"joint":"Cervical Flexion"},{"exercise":"Neck Harness Extension","demoUrl":"https://www.youtube.com/results?search_query=Neck+Harness+Extension+exercise+proper+form","region":"Core","group":"Neck","sub":"Neck Flexion / Extension","primary":"Neck Extensors (Splenius, Upper Traps)","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (loaded)","patternTags":["Isolation"],"joint":"Cervical Extension"},{"exercise":"Banded Neck Flexion","demoUrl":"https://www.youtube.com/results?search_query=Banded+Neck+Flexion+exercise+proper+form","region":"Core","group":"Neck","sub":"Neck Flexion / Extension","primary":"Neck Flexors (Sternocleidomastoid, Deep Cervical Flexors)","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (band-resisted)","patternTags":["Isolation"],"joint":"Cervical Flexion"},{"exercise":"Banded Neck Extension","demoUrl":"https://www.youtube.com/results?search_query=Banded+Neck+Extension+exercise+proper+form","region":"Core","group":"Neck","sub":"Neck Flexion / Extension","primary":"Neck Extensors (Splenius, Upper Traps)","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (band-resisted)","patternTags":["Isolation"],"joint":"Cervical Extension"},{"exercise":"Manual Resistance Neck Bridge (Isometric)","demoUrl":"https://www.youtube.com/results?search_query=Manual+Resistance+Neck+Bridge+%28Isometric%29+exercise+proper+form","region":"Core","group":"Neck","sub":"Neck Flexion / Extension","primary":"Neck Extensors, Neck Flexors","secondary":"Upper Traps","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isometric","patternTags":["Isometric"],"joint":"Cervical Stabilization (isometric)"},{"exercise":"Banded Neck Lateral Flexion","demoUrl":"https://www.youtube.com/results?search_query=Banded+Neck+Lateral+Flexion+exercise+proper+form","region":"Core","group":"Neck","sub":"Neck Lateral Flexion / Rotation","primary":"Neck Lateral Flexors (Scalenes, SCM)","secondary":"Upper Traps","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isolation (band-resisted)","patternTags":["Isolation"],"joint":"Cervical Lateral Flexion"},{"exercise":"Manual Resistance Neck Rotation","demoUrl":"https://www.youtube.com/results?search_query=Manual+Resistance+Neck+Rotation+exercise+proper+form","region":"Core","group":"Neck","sub":"Neck Lateral Flexion / Rotation","primary":"Neck Rotators (SCM, Splenius Capitis)","secondary":"—","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isometric / Isolation","patternTags":["Isolation","Isometric"],"joint":"Cervical Rotation"},{"exercise":"Incline Barbell Bench Press","demoUrl":"https://www.youtube.com/results?search_query=Incline+Barbell+Bench+Press+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Upper / Clavicular)","primary":"Chest (upper)","secondary":"Anterior Delt, Triceps","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Incline Push","patternTags":["Push"],"joint":"Shoulder Flexion + Horizontal Adduction"},{"exercise":"Incline Dumbbell Press","demoUrl":"https://www.youtube.com/results?search_query=Incline+Dumbbell+Press+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Upper / Clavicular)","primary":"Chest (upper)","secondary":"Anterior Delt, Triceps","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Incline Push","patternTags":["Push"],"joint":"Shoulder Flexion + Horizontal Adduction"},{"exercise":"Low-to-High Cable Fly","demoUrl":"https://www.youtube.com/results?search_query=Low-to-High+Cable+Fly+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Upper / Clavicular)","primary":"Chest (upper)","secondary":"Anterior Delt","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Shoulder Horizontal Adduction"},{"exercise":"Incline Push-Up (feet elevated)","demoUrl":"https://www.youtube.com/results?search_query=Incline+Push-Up+%28feet+elevated%29+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Upper / Clavicular)","primary":"Chest (upper)","secondary":"Anterior Delt, Triceps","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Push","patternTags":["Push"],"joint":"Shoulder Flexion + Horizontal Adduction"},{"exercise":"Incline Machine Chest Press","demoUrl":"https://www.youtube.com/results?search_query=Incline+Machine+Chest+Press+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Upper / Clavicular)","primary":"Chest (upper)","secondary":"Anterior Delt, Triceps","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Incline Push (machine)","patternTags":["Push"],"joint":"Shoulder Flexion + Horizontal Adduction"},{"exercise":"Incline Cable Press","demoUrl":"https://www.youtube.com/results?search_query=Incline+Cable+Press+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Upper / Clavicular)","primary":"Chest (upper)","secondary":"Anterior Delt, Triceps","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Incline Push (cable)","patternTags":["Push"],"joint":"Shoulder Flexion + Horizontal Adduction"},{"exercise":"Incline Smith Machine Press","demoUrl":"https://www.youtube.com/results?search_query=Incline+Smith+Machine+Press+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Upper / Clavicular)","primary":"Chest (upper)","secondary":"Anterior Delt, Triceps","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Incline Push (machine-guided)","patternTags":["Push"],"joint":"Shoulder Flexion + Horizontal Adduction"},{"exercise":"Flat Barbell Bench Press","demoUrl":"https://www.youtube.com/results?search_query=Flat+Barbell+Bench+Press+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Mid / Sternal)","primary":"Chest (mid)","secondary":"Anterior Delt, Triceps","plane":"Transverse","planeTags":["Transverse"],"pattern":"Horizontal Push","patternTags":["Push"],"joint":"Shoulder Horizontal Adduction"},{"exercise":"Flat Dumbbell Press","demoUrl":"https://www.youtube.com/results?search_query=Flat+Dumbbell+Press+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Mid / Sternal)","primary":"Chest (mid)","secondary":"Anterior Delt, Triceps","plane":"Transverse","planeTags":["Transverse"],"pattern":"Horizontal Push","patternTags":["Push"],"joint":"Shoulder Horizontal Adduction"},{"exercise":"Flat Dumbbell Fly","demoUrl":"https://www.youtube.com/results?search_query=Flat+Dumbbell+Fly+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Mid / Sternal)","primary":"Chest (mid)","secondary":"Anterior Delt","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Shoulder Horizontal Adduction"},{"exercise":"Push-Up","demoUrl":"https://www.youtube.com/results?search_query=Push-Up+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Mid / Sternal)","primary":"Chest (mid)","secondary":"Anterior Delt, Triceps, Core","plane":"Transverse","planeTags":["Transverse"],"pattern":"Horizontal Push","patternTags":["Push"],"joint":"Shoulder Horizontal Adduction"},{"exercise":"Cable Chest Press (mid height)","demoUrl":"https://www.youtube.com/results?search_query=Cable+Chest+Press+%28mid+height%29+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Mid / Sternal)","primary":"Chest (mid)","secondary":"Anterior Delt, Triceps","plane":"Transverse","planeTags":["Transverse"],"pattern":"Horizontal Push","patternTags":["Push"],"joint":"Shoulder Horizontal Adduction"},{"exercise":"Machine Chest Press","demoUrl":"https://www.youtube.com/results?search_query=Machine+Chest+Press+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Mid / Sternal)","primary":"Chest (mid)","secondary":"Anterior Delt, Triceps","plane":"Transverse","planeTags":["Transverse"],"pattern":"Horizontal Push (machine)","patternTags":["Push"],"joint":"Shoulder Horizontal Adduction"},{"exercise":"Smith Machine Bench Press","demoUrl":"https://www.youtube.com/results?search_query=Smith+Machine+Bench+Press+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Mid / Sternal)","primary":"Chest (mid)","secondary":"Anterior Delt, Triceps","plane":"Transverse","planeTags":["Transverse"],"pattern":"Horizontal Push (machine-guided)","patternTags":["Push"],"joint":"Shoulder Horizontal Adduction"},{"exercise":"Pec Deck Fly","demoUrl":"https://www.youtube.com/results?search_query=Pec+Deck+Fly+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Mid / Sternal)","primary":"Chest (mid)","secondary":"Anterior Delt","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation (machine)","patternTags":["Isolation"],"joint":"Shoulder Horizontal Adduction"},{"exercise":"Resistance Band Chest Press","demoUrl":"https://www.youtube.com/results?search_query=Resistance+Band+Chest+Press+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Mid / Sternal)","primary":"Chest (mid)","secondary":"Anterior Delt, Triceps","plane":"Transverse","planeTags":["Transverse"],"pattern":"Horizontal Push (band-resisted)","patternTags":["Push"],"joint":"Shoulder Horizontal Adduction"},{"exercise":"Decline Barbell Bench Press","demoUrl":"https://www.youtube.com/results?search_query=Decline+Barbell+Bench+Press+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Lower / Costal)","primary":"Chest (lower)","secondary":"Triceps, Anterior Delt","plane":"Transverse","planeTags":["Transverse"],"pattern":"Decline Push","patternTags":["Push"],"joint":"Shoulder Horizontal Adduction + Extension bias"},{"exercise":"High-to-Low Cable Fly","demoUrl":"https://www.youtube.com/results?search_query=High-to-Low+Cable+Fly+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Lower / Costal)","primary":"Chest (lower)","secondary":"Anterior Delt","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Shoulder Horizontal Adduction + Depression"},{"exercise":"Dip (chest-biased, forward lean)","demoUrl":"https://www.youtube.com/results?search_query=Dip+%28chest-biased%2C+forward+lean%29+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Lower / Costal)","primary":"Chest (lower)","secondary":"Triceps, Anterior Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Vertical / Diagonal Push","patternTags":["Push"],"joint":"Shoulder Extension + Adduction"},{"exercise":"Decline Push-Up","demoUrl":"https://www.youtube.com/results?search_query=Decline+Push-Up+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Lower / Costal)","primary":"Chest (lower)","secondary":"Anterior Delt, Triceps","plane":"Transverse","planeTags":["Transverse"],"pattern":"Decline Push","patternTags":["Push"],"joint":"Shoulder Horizontal Adduction + Extension bias"},{"exercise":"Decline Cable Fly","demoUrl":"https://www.youtube.com/results?search_query=Decline+Cable+Fly+exercise+proper+form","region":"Upper Body – Push","group":"Chest","sub":"Chest (Lower / Costal)","primary":"Chest (lower)","secondary":"Anterior Delt","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation (cable)","patternTags":["Isolation"],"joint":"Shoulder Horizontal Adduction + Depression"},{"exercise":"Overhead Barbell Press","demoUrl":"https://www.youtube.com/results?search_query=Overhead+Barbell+Press+exercise+proper+form","region":"Upper Body – Push","group":"Shoulders","sub":"Anterior Delt","primary":"Anterior Delt","secondary":"Triceps, Upper Chest, Traps","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Vertical Push","patternTags":["Push"],"joint":"Shoulder Flexion / Abduction (overhead)"},{"exercise":"Dumbbell Front Raise","demoUrl":"https://www.youtube.com/results?search_query=Dumbbell+Front+Raise+exercise+proper+form","region":"Upper Body – Push","group":"Shoulders","sub":"Anterior Delt","primary":"Anterior Delt","secondary":"Upper Chest","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Shoulder Flexion"},{"exercise":"Seated Dumbbell Shoulder Press","demoUrl":"https://www.youtube.com/results?search_query=Seated+Dumbbell+Shoulder+Press+exercise+proper+form","region":"Upper Body – Push","group":"Shoulders","sub":"Anterior Delt","primary":"Anterior Delt","secondary":"Triceps, Lateral Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Vertical Push","patternTags":["Push"],"joint":"Shoulder Flexion / Abduction"},{"exercise":"Landmine Press","demoUrl":"https://www.youtube.com/results?search_query=Landmine+Press+exercise+proper+form","region":"Upper Body – Push","group":"Shoulders","sub":"Anterior Delt","primary":"Anterior Delt","secondary":"Upper Chest, Triceps","plane":"Sagittal (diagonal)","planeTags":["Sagittal"],"pattern":"Diagonal Push","patternTags":["Push"],"joint":"Shoulder Flexion"},{"exercise":"Machine Shoulder Press","demoUrl":"https://www.youtube.com/results?search_query=Machine+Shoulder+Press+exercise+proper+form","region":"Upper Body – Push","group":"Shoulders","sub":"Anterior Delt","primary":"Anterior Delt","secondary":"Triceps, Upper Chest","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Vertical Push (machine)","patternTags":["Push"],"joint":"Shoulder Flexion / Abduction (overhead)"},{"exercise":"Smith Machine Overhead Press","demoUrl":"https://www.youtube.com/results?search_query=Smith+Machine+Overhead+Press+exercise+proper+form","region":"Upper Body – Push","group":"Shoulders","sub":"Anterior Delt","primary":"Anterior Delt","secondary":"Triceps, Upper Chest, Traps","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Vertical Push (machine-guided)","patternTags":["Push"],"joint":"Shoulder Flexion / Abduction (overhead)"},{"exercise":"Cable Front Raise","demoUrl":"https://www.youtube.com/results?search_query=Cable+Front+Raise+exercise+proper+form","region":"Upper Body – Push","group":"Shoulders","sub":"Anterior Delt","primary":"Anterior Delt","secondary":"Upper Chest","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (cable)","patternTags":["Isolation"],"joint":"Shoulder Flexion"},{"exercise":"Arnold Press","demoUrl":"https://www.youtube.com/results?search_query=Arnold+Press+exercise+proper+form","region":"Upper Body – Push","group":"Shoulders","sub":"Anterior Delt","primary":"Anterior Delt, Lateral Delt","secondary":"Triceps, Upper Chest","plane":"Sagittal (rotational)","planeTags":["Sagittal"],"pattern":"Vertical Push","patternTags":["Push"],"joint":"Shoulder Flexion / Abduction + External Rotation"},{"exercise":"Dumbbell Lateral Raise","demoUrl":"https://www.youtube.com/results?search_query=Dumbbell+Lateral+Raise+exercise+proper+form","region":"Upper Body – Push","group":"Shoulders","sub":"Lateral Delt","primary":"Lateral Delt","secondary":"Traps (upper)","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Shoulder Abduction"},{"exercise":"Cable Lateral Raise","demoUrl":"https://www.youtube.com/results?search_query=Cable+Lateral+Raise+exercise+proper+form","region":"Upper Body – Push","group":"Shoulders","sub":"Lateral Delt","primary":"Lateral Delt","secondary":"Traps (upper)","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Shoulder Abduction"},{"exercise":"Machine Lateral Raise","demoUrl":"https://www.youtube.com/results?search_query=Machine+Lateral+Raise+exercise+proper+form","region":"Upper Body – Push","group":"Shoulders","sub":"Lateral Delt","primary":"Lateral Delt","secondary":"—","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Shoulder Abduction"},{"exercise":"Wide-Grip Overhead Press","demoUrl":"https://www.youtube.com/results?search_query=Wide-Grip+Overhead+Press+exercise+proper+form","region":"Upper Body – Push","group":"Shoulders","sub":"Lateral Delt","primary":"Anterior Delt, Lateral Delt","secondary":"Triceps","plane":"Sagittal (primary) + Frontal (abduction component)","planeTags":["Sagittal","Frontal"],"pattern":"Vertical Push","patternTags":["Push"],"joint":"Shoulder Abduction / Flexion"},{"exercise":"Upright Row","demoUrl":"https://www.youtube.com/results?search_query=Upright+Row+exercise+proper+form","region":"Upper Body – Push","group":"Shoulders","sub":"Lateral Delt","primary":"Lateral Delt, Traps (upper)","secondary":"Biceps","plane":"Frontal","planeTags":["Frontal"],"pattern":"Vertical Pull-Push hybrid","patternTags":["Push","Pull","Compound / Combination"],"joint":"Shoulder Abduction + Elbow Flexion"},{"exercise":"Banded Lateral Raise","demoUrl":"https://www.youtube.com/results?search_query=Banded+Lateral+Raise+exercise+proper+form","region":"Upper Body – Push","group":"Shoulders","sub":"Lateral Delt","primary":"Lateral Delt","secondary":"Traps (upper)","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isolation (band-resisted)","patternTags":["Isolation"],"joint":"Shoulder Abduction"},{"exercise":"Leaning Cable Lateral Raise","demoUrl":"https://www.youtube.com/results?search_query=Leaning+Cable+Lateral+Raise+exercise+proper+form","region":"Upper Body – Push","group":"Shoulders","sub":"Lateral Delt","primary":"Lateral Delt","secondary":"Traps (upper)","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isolation (extended range)","patternTags":["Isolation"],"joint":"Shoulder Abduction"},{"exercise":"Close-Grip Bench Press","demoUrl":"https://www.youtube.com/results?search_query=Close-Grip+Bench+Press+exercise+proper+form","region":"Upper Body – Push","group":"Triceps","sub":"Triceps (Medial + Lateral Head)","primary":"Triceps (medial + lateral head)","secondary":"Chest, Anterior Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Horizontal Push","patternTags":["Push"],"joint":"Elbow Extension"},{"exercise":"Overhead Triceps Extension","demoUrl":"https://www.youtube.com/results?search_query=Overhead+Triceps+Extension+exercise+proper+form","region":"Upper Body – Push","group":"Triceps","sub":"Triceps (Long Head bias)","primary":"Triceps (long head bias)","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Elbow Extension"},{"exercise":"Cable Triceps Pushdown","demoUrl":"https://www.youtube.com/results?search_query=Cable+Triceps+Pushdown+exercise+proper+form","region":"Upper Body – Push","group":"Triceps","sub":"Triceps (Lateral Head bias)","primary":"Triceps (lateral head bias)","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Elbow Extension"},{"exercise":"Skull Crusher","demoUrl":"https://www.youtube.com/results?search_query=Skull+Crusher+exercise+proper+form","region":"Upper Body – Push","group":"Triceps","sub":"Triceps (Long + Lateral Head)","primary":"Triceps (long + lateral head)","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Elbow Extension"},{"exercise":"Dip (triceps-biased, upright torso)","demoUrl":"https://www.youtube.com/results?search_query=Dip+%28triceps-biased%2C+upright+torso%29+exercise+proper+form","region":"Upper Body – Push","group":"Triceps","sub":"Triceps (All Heads)","primary":"Triceps (all heads)","secondary":"Chest, Anterior Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Vertical Push","patternTags":["Push"],"joint":"Elbow Extension + Shoulder Extension"},{"exercise":"Diamond Push-Up","demoUrl":"https://www.youtube.com/results?search_query=Diamond+Push-Up+exercise+proper+form","region":"Upper Body – Push","group":"Triceps","sub":"Triceps (All Heads)","primary":"Triceps (all heads)","secondary":"Chest (inner), Anterior Delt","plane":"Transverse","planeTags":["Transverse"],"pattern":"Horizontal Push","patternTags":["Push"],"joint":"Elbow Extension"},{"exercise":"Single-Arm Cable Kickback","demoUrl":"https://www.youtube.com/results?search_query=Single-Arm+Cable+Kickback+exercise+proper+form","region":"Upper Body – Push","group":"Triceps","sub":"Triceps (Lateral Head bias)","primary":"Triceps (lateral head bias)","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Elbow Extension"},{"exercise":"JM Press","demoUrl":"https://www.youtube.com/results?search_query=JM+Press+exercise+proper+form","region":"Upper Body – Push","group":"Triceps","sub":"Triceps (All Heads)","primary":"Triceps (all heads)","secondary":"Chest","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hybrid Push / Extension","patternTags":["Extension","Push","Compound / Combination"],"joint":"Elbow Extension"},{"exercise":"Banded Triceps Pushdown","demoUrl":"https://www.youtube.com/results?search_query=Banded+Triceps+Pushdown+exercise+proper+form","region":"Upper Body – Push","group":"Triceps","sub":"Triceps (Lateral Head bias)","primary":"Triceps (lateral head bias)","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (band-resisted)","patternTags":["Isolation"],"joint":"Elbow Extension"},{"exercise":"Machine Triceps Extension","demoUrl":"https://www.youtube.com/results?search_query=Machine+Triceps+Extension+exercise+proper+form","region":"Upper Body – Push","group":"Triceps","sub":"Triceps (All Heads)","primary":"Triceps (all heads)","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (machine)","patternTags":["Isolation"],"joint":"Elbow Extension"},{"exercise":"Overhead Cable Triceps Extension","demoUrl":"https://www.youtube.com/results?search_query=Overhead+Cable+Triceps+Extension+exercise+proper+form","region":"Upper Body – Push","group":"Triceps","sub":"Triceps (Long Head bias)","primary":"Triceps (long head bias)","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (cable)","patternTags":["Isolation"],"joint":"Elbow Extension"},{"exercise":"Bench Dip","demoUrl":"https://www.youtube.com/results?search_query=Bench+Dip+exercise+proper+form","region":"Upper Body – Push","group":"Triceps","sub":"Triceps (All Heads)","primary":"Triceps (all heads)","secondary":"Chest, Anterior Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Vertical Push (bodyweight)","patternTags":["Push"],"joint":"Elbow Extension + Shoulder Extension"},{"exercise":"Pull-Up","demoUrl":"https://www.youtube.com/results?search_query=Pull-Up+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Lats","primary":"Lats","secondary":"Biceps, Rhomboids, Lower Traps","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Vertical Pull","patternTags":["Pull"],"joint":"Shoulder Extension + Adduction + Elbow Flexion"},{"exercise":"Lat Pulldown","demoUrl":"https://www.youtube.com/results?search_query=Lat+Pulldown+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Lats","primary":"Lats","secondary":"Biceps, Rhomboids","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Vertical Pull","patternTags":["Pull"],"joint":"Shoulder Adduction / Extension"},{"exercise":"Barbell Bent-Over Row","demoUrl":"https://www.youtube.com/results?search_query=Barbell+Bent-Over+Row+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Lats","primary":"Lats, Rhomboids, Mid Traps","secondary":"Biceps, Erector Spinae, Rear Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Horizontal Pull","patternTags":["Pull"],"joint":"Shoulder Extension + Horizontal Abduction"},{"exercise":"Single-Arm Dumbbell Row","demoUrl":"https://www.youtube.com/results?search_query=Single-Arm+Dumbbell+Row+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Lats","primary":"Lats","secondary":"Rhomboids, Biceps, Rear Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Horizontal Pull","patternTags":["Pull"],"joint":"Shoulder Extension"},{"exercise":"Straight-Arm Cable Pulldown","demoUrl":"https://www.youtube.com/results?search_query=Straight-Arm+Cable+Pulldown+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Lats","primary":"Lats","secondary":"Triceps (long head), Rear Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Shoulder Extension"},{"exercise":"Chin-Up (supinated grip)","demoUrl":"https://www.youtube.com/results?search_query=Chin-Up+%28supinated+grip%29+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Lats","primary":"Lats, Biceps","secondary":"Rhomboids, Lower Traps","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Vertical Pull","patternTags":["Pull"],"joint":"Shoulder Extension + Elbow Flexion"},{"exercise":"T-Bar Row","demoUrl":"https://www.youtube.com/results?search_query=T-Bar+Row+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Lats","primary":"Lats, Rhomboids, Mid Traps","secondary":"Biceps, Rear Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Horizontal Pull","patternTags":["Pull"],"joint":"Shoulder Extension + Horizontal Abduction"},{"exercise":"Seal Row","demoUrl":"https://www.youtube.com/results?search_query=Seal+Row+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Lats","primary":"Lats, Rhomboids","secondary":"Biceps, Rear Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Horizontal Pull","patternTags":["Pull"],"joint":"Shoulder Extension"},{"exercise":"Chest-Supported Machine Row","demoUrl":"https://www.youtube.com/results?search_query=Chest-Supported+Machine+Row+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Lats","primary":"Lats, Rhomboids","secondary":"Biceps, Rear Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Horizontal Pull (machine)","patternTags":["Pull"],"joint":"Shoulder Extension"},{"exercise":"Assisted Pull-Up (Machine)","demoUrl":"https://www.youtube.com/results?search_query=Assisted+Pull-Up+%28Machine%29+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Lats","primary":"Lats","secondary":"Biceps, Rhomboids","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Vertical Pull (assisted)","patternTags":["Pull"],"joint":"Shoulder Extension + Adduction + Elbow Flexion"},{"exercise":"Banded Pull-Up (Band-Assisted)","demoUrl":"https://www.youtube.com/results?search_query=Banded+Pull-Up+%28Band-Assisted%29+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Lats","primary":"Lats","secondary":"Biceps, Rhomboids","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Vertical Pull (assisted)","patternTags":["Pull"],"joint":"Shoulder Extension + Adduction + Elbow Flexion"},{"exercise":"Barbell Pendlay Row","demoUrl":"https://www.youtube.com/results?search_query=Barbell+Pendlay+Row+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Lats","primary":"Lats, Rhomboids, Mid Traps","secondary":"Biceps, Erector Spinae, Rear Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Horizontal Pull (dead-stop)","patternTags":["Pull"],"joint":"Shoulder Extension + Horizontal Abduction"},{"exercise":"Meadows Row","demoUrl":"https://www.youtube.com/results?search_query=Meadows+Row+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Lats","primary":"Lats","secondary":"Rhomboids, Biceps, Rear Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Horizontal Pull (unilateral)","patternTags":["Pull"],"joint":"Shoulder Extension"},{"exercise":"Wide-Grip Cable Row","demoUrl":"https://www.youtube.com/results?search_query=Wide-Grip+Cable+Row+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Lats","primary":"Lats, Rear Delt","secondary":"Rhomboids, Biceps","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Horizontal Pull (wide grip)","patternTags":["Pull"],"joint":"Shoulder Extension + Horizontal Abduction"},{"exercise":"Barbell Shrug","demoUrl":"https://www.youtube.com/results?search_query=Barbell+Shrug+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Traps (Upper)","primary":"Traps (upper)","secondary":"Levator Scapulae","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Scapular Elevation"},{"exercise":"Dumbbell Shrug","demoUrl":"https://www.youtube.com/results?search_query=Dumbbell+Shrug+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Traps (Upper)","primary":"Traps (upper)","secondary":"Levator Scapulae","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Scapular Elevation"},{"exercise":"Farmer's Carry (shrugged)","demoUrl":"https://www.youtube.com/results?search_query=Farmer%27s+Carry+%28shrugged%29+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Traps (Upper)","primary":"Traps (upper), Forearms","secondary":"Core (anti-lateral flexion)","plane":"Frontal (gait)","planeTags":["Frontal"],"pattern":"Loaded Carry","patternTags":["Loaded Carry"],"joint":"Scapular Elevation (isometric)"},{"exercise":"Upright Row","demoUrl":"https://www.youtube.com/results?search_query=Upright+Row+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Traps (Upper)","primary":"Traps (upper), Lateral Delt","secondary":"Biceps","plane":"Frontal / Sagittal","planeTags":["Sagittal","Frontal"],"pattern":"Vertical Pull","patternTags":["Pull"],"joint":"Scapular Elevation + Shoulder Abduction"},{"exercise":"Cable Shrug","demoUrl":"https://www.youtube.com/results?search_query=Cable+Shrug+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Traps (Upper)","primary":"Traps (upper)","secondary":"Levator Scapulae","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (cable)","patternTags":["Isolation"],"joint":"Scapular Elevation"},{"exercise":"Trap Bar Shrug","demoUrl":"https://www.youtube.com/results?search_query=Trap+Bar+Shrug+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Traps (Upper)","primary":"Traps (upper)","secondary":"Levator Scapulae, Forearms (grip)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (loaded)","patternTags":["Isolation"],"joint":"Scapular Elevation"},{"exercise":"Banded Shrug","demoUrl":"https://www.youtube.com/results?search_query=Banded+Shrug+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Traps (Upper)","primary":"Traps (upper)","secondary":"Levator Scapulae","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (band-resisted)","patternTags":["Isolation"],"joint":"Scapular Elevation"},{"exercise":"Face Pull","demoUrl":"https://www.youtube.com/results?search_query=Face+Pull+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Traps (Mid / Lower)","primary":"Traps (mid/lower), Rear Delt","secondary":"Rhomboids, Rotator Cuff","plane":"Transverse","planeTags":["Transverse"],"pattern":"Horizontal Pull","patternTags":["Pull"],"joint":"Scapular Retraction + Shoulder External Rotation"},{"exercise":"Barbell Bent-Over Row","demoUrl":"https://www.youtube.com/results?search_query=Barbell+Bent-Over+Row+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Traps (Mid / Lower)","primary":"Mid Traps, Rhomboids, Lats","secondary":"Rear Delt, Biceps","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Horizontal Pull","patternTags":["Pull"],"joint":"Scapular Retraction"},{"exercise":"Prone Y-Raise","demoUrl":"https://www.youtube.com/results?search_query=Prone+Y-Raise+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Traps (Mid / Lower)","primary":"Traps (lower)","secondary":"Rear Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Scapular Upward Rotation / Depression"},{"exercise":"Chest-Supported Row","demoUrl":"https://www.youtube.com/results?search_query=Chest-Supported+Row+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Traps (Mid / Lower)","primary":"Mid Traps, Rhomboids, Lats","secondary":"Rear Delt, Biceps","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Horizontal Pull","patternTags":["Pull"],"joint":"Scapular Retraction"},{"exercise":"Prone W-Raise","demoUrl":"https://www.youtube.com/results?search_query=Prone+W-Raise+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Traps (Mid / Lower)","primary":"Traps (lower/mid), Rhomboids","secondary":"Rear Delt, Erector Spinae","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Scapular Retraction + Depression"},{"exercise":"Banded Face Pull","demoUrl":"https://www.youtube.com/results?search_query=Banded+Face+Pull+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Traps (Mid / Lower)","primary":"Traps (mid/lower), Rear Delt","secondary":"Rhomboids, Rotator Cuff","plane":"Transverse","planeTags":["Transverse"],"pattern":"Horizontal Pull (band-resisted)","patternTags":["Pull"],"joint":"Scapular Retraction + Shoulder External Rotation"},{"exercise":"Cable Y-Raise","demoUrl":"https://www.youtube.com/results?search_query=Cable+Y-Raise+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Traps (Mid / Lower)","primary":"Traps (lower)","secondary":"Rear Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (cable)","patternTags":["Isolation"],"joint":"Scapular Upward Rotation / Depression"},{"exercise":"Seated Cable Row","demoUrl":"https://www.youtube.com/results?search_query=Seated+Cable+Row+exercise+proper+form","region":"Upper Body – Pull","group":"Upper Back","sub":"Rhomboids","primary":"Rhomboids, Mid Traps, Lats","secondary":"Biceps, Rear Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Horizontal Pull","patternTags":["Pull"],"joint":"Scapular Retraction"},{"exercise":"Chest-Supported Row","demoUrl":"https://www.youtube.com/results?search_query=Chest-Supported+Row+exercise+proper+form","region":"Upper Body – Pull","group":"Upper Back","sub":"Rhomboids","primary":"Rhomboids, Mid Traps","secondary":"Lats, Rear Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Horizontal Pull","patternTags":["Pull"],"joint":"Scapular Retraction"},{"exercise":"Band Pull-Apart","demoUrl":"https://www.youtube.com/results?search_query=Band+Pull-Apart+exercise+proper+form","region":"Upper Body – Pull","group":"Upper Back","sub":"Rhomboids","primary":"Rhomboids, Rear Delt","secondary":"Mid Traps","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Scapular Retraction + Shoulder Horizontal Abduction"},{"exercise":"Bent-Over Reverse Fly","demoUrl":"https://www.youtube.com/results?search_query=Bent-Over+Reverse+Fly+exercise+proper+form","region":"Upper Body – Pull","group":"Upper Back","sub":"Rhomboids","primary":"Rear Delt, Rhomboids","secondary":"Mid Traps","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Scapular Retraction + Shoulder Horizontal Abduction"},{"exercise":"Single-Arm Cable Row","demoUrl":"https://www.youtube.com/results?search_query=Single-Arm+Cable+Row+exercise+proper+form","region":"Upper Body – Pull","group":"Upper Back","sub":"Rhomboids","primary":"Rhomboids, Mid Traps, Lats","secondary":"Biceps, Rear Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Horizontal Pull (unilateral)","patternTags":["Pull"],"joint":"Scapular Retraction"},{"exercise":"Inverted Row (Bodyweight)","demoUrl":"https://www.youtube.com/results?search_query=Inverted+Row+%28Bodyweight%29+exercise+proper+form","region":"Upper Body – Pull","group":"Upper Back","sub":"Rhomboids","primary":"Rhomboids, Mid Traps, Lats","secondary":"Biceps, Rear Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Horizontal Pull (bodyweight)","patternTags":["Pull"],"joint":"Scapular Retraction"},{"exercise":"Machine Seated Row","demoUrl":"https://www.youtube.com/results?search_query=Machine+Seated+Row+exercise+proper+form","region":"Upper Body – Pull","group":"Upper Back","sub":"Rhomboids","primary":"Rhomboids, Mid Traps","secondary":"Lats, Biceps, Rear Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Horizontal Pull (machine)","patternTags":["Pull"],"joint":"Scapular Retraction"},{"exercise":"Reverse Pec Deck","demoUrl":"https://www.youtube.com/results?search_query=Reverse+Pec+Deck+exercise+proper+form","region":"Upper Body – Pull","group":"Shoulders","sub":"Posterior (Rear) Delt","primary":"Rear Delt","secondary":"Rhomboids, Mid Traps","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Shoulder Horizontal Abduction"},{"exercise":"Bent-Over Dumbbell Reverse Fly","demoUrl":"https://www.youtube.com/results?search_query=Bent-Over+Dumbbell+Reverse+Fly+exercise+proper+form","region":"Upper Body – Pull","group":"Shoulders","sub":"Posterior (Rear) Delt","primary":"Rear Delt","secondary":"Rhomboids, Mid Traps","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Shoulder Horizontal Abduction"},{"exercise":"Face Pull","demoUrl":"https://www.youtube.com/results?search_query=Face+Pull+exercise+proper+form","region":"Upper Body – Pull","group":"Shoulders","sub":"Posterior (Rear) Delt","primary":"Rear Delt, Traps (mid/lower)","secondary":"Rotator Cuff, Rhomboids","plane":"Transverse","planeTags":["Transverse"],"pattern":"Horizontal Pull","patternTags":["Pull"],"joint":"Shoulder Horizontal Abduction + External Rotation"},{"exercise":"Band Pull-Apart","demoUrl":"https://www.youtube.com/results?search_query=Band+Pull-Apart+exercise+proper+form","region":"Upper Body – Pull","group":"Shoulders","sub":"Posterior (Rear) Delt","primary":"Rear Delt, Rhomboids","secondary":"Mid Traps","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Shoulder Horizontal Abduction"},{"exercise":"Incline Y-Raise","demoUrl":"https://www.youtube.com/results?search_query=Incline+Y-Raise+exercise+proper+form","region":"Upper Body – Pull","group":"Shoulders","sub":"Posterior (Rear) Delt","primary":"Rear Delt, Traps (lower)","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Shoulder Horizontal Abduction + Upward Rotation"},{"exercise":"Cable Reverse Fly","demoUrl":"https://www.youtube.com/results?search_query=Cable+Reverse+Fly+exercise+proper+form","region":"Upper Body – Pull","group":"Shoulders","sub":"Posterior (Rear) Delt","primary":"Rear Delt","secondary":"Rhomboids, Mid Traps","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation (cable)","patternTags":["Isolation"],"joint":"Shoulder Horizontal Abduction"},{"exercise":"Banded Reverse Fly","demoUrl":"https://www.youtube.com/results?search_query=Banded+Reverse+Fly+exercise+proper+form","region":"Upper Body – Pull","group":"Shoulders","sub":"Posterior (Rear) Delt","primary":"Rear Delt","secondary":"Rhomboids, Mid Traps","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation (band-resisted)","patternTags":["Isolation"],"joint":"Shoulder Horizontal Abduction"},{"exercise":"Cable External Rotation","demoUrl":"https://www.youtube.com/results?search_query=Cable+External+Rotation+exercise+proper+form","region":"Upper Body – Pull","group":"Shoulders","sub":"Rotator Cuff (External / Internal Rotation)","primary":"Infraspinatus, Teres Minor","secondary":"Rear Delt","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation (cable)","patternTags":["Isolation"],"joint":"Shoulder External Rotation"},{"exercise":"Band External Rotation","demoUrl":"https://www.youtube.com/results?search_query=Band+External+Rotation+exercise+proper+form","region":"Upper Body – Pull","group":"Shoulders","sub":"Rotator Cuff (External / Internal Rotation)","primary":"Infraspinatus, Teres Minor","secondary":"Rear Delt","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation (band-resisted)","patternTags":["Isolation"],"joint":"Shoulder External Rotation"},{"exercise":"Side-Lying Dumbbell External Rotation","demoUrl":"https://www.youtube.com/results?search_query=Side-Lying+Dumbbell+External+Rotation+exercise+proper+form","region":"Upper Body – Pull","group":"Shoulders","sub":"Rotator Cuff (External / Internal Rotation)","primary":"Infraspinatus, Teres Minor","secondary":"Rear Delt","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Shoulder External Rotation"},{"exercise":"Cable Internal Rotation","demoUrl":"https://www.youtube.com/results?search_query=Cable+Internal+Rotation+exercise+proper+form","region":"Upper Body – Pull","group":"Shoulders","sub":"Rotator Cuff (External / Internal Rotation)","primary":"Subscapularis","secondary":"Chest (lower), Lats","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation (cable)","patternTags":["Isolation"],"joint":"Shoulder Internal Rotation"},{"exercise":"Band Internal Rotation","demoUrl":"https://www.youtube.com/results?search_query=Band+Internal+Rotation+exercise+proper+form","region":"Upper Body – Pull","group":"Shoulders","sub":"Rotator Cuff (External / Internal Rotation)","primary":"Subscapularis","secondary":"Chest (lower), Lats","plane":"Transverse","planeTags":["Transverse"],"pattern":"Isolation (band-resisted)","patternTags":["Isolation"],"joint":"Shoulder Internal Rotation"},{"exercise":"Incline Dumbbell Curl","demoUrl":"https://www.youtube.com/results?search_query=Incline+Dumbbell+Curl+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Biceps (Long Head)","primary":"Biceps (long head bias)","secondary":"Brachialis","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Elbow Flexion"},{"exercise":"Behind-the-Body Cable Curl","demoUrl":"https://www.youtube.com/results?search_query=Behind-the-Body+Cable+Curl+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Biceps (Long Head)","primary":"Biceps (long head)","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Elbow Flexion"},{"exercise":"Chin-Up","demoUrl":"https://www.youtube.com/results?search_query=Chin-Up+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Biceps (Long Head)","primary":"Biceps (long head), Lats","secondary":"Brachialis","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Vertical Pull","patternTags":["Pull"],"joint":"Elbow Flexion + Shoulder Extension"},{"exercise":"Standing Barbell Curl","demoUrl":"https://www.youtube.com/results?search_query=Standing+Barbell+Curl+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Biceps (Long Head)","primary":"Biceps (long head bias)","secondary":"Brachialis","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Elbow Flexion"},{"exercise":"Cable Curl (Standing, Low Pulley)","demoUrl":"https://www.youtube.com/results?search_query=Cable+Curl+%28Standing%2C+Low+Pulley%29+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Biceps (Long Head)","primary":"Biceps (long head)","secondary":"Brachialis","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (cable)","patternTags":["Isolation"],"joint":"Elbow Flexion"},{"exercise":"Drag Curl","demoUrl":"https://www.youtube.com/results?search_query=Drag+Curl+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Biceps (Long Head)","primary":"Biceps (long head bias)","secondary":"Brachialis","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (barbell)","patternTags":["Isolation"],"joint":"Elbow Flexion"},{"exercise":"Preacher Curl","demoUrl":"https://www.youtube.com/results?search_query=Preacher+Curl+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Biceps (Short Head) / Brachialis","primary":"Biceps (short head bias)","secondary":"Brachialis","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Elbow Flexion"},{"exercise":"Hammer Curl","demoUrl":"https://www.youtube.com/results?search_query=Hammer+Curl+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Biceps (Short Head) / Brachialis","primary":"Brachialis, Brachioradialis","secondary":"Biceps (short head)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Elbow Flexion (neutral grip)"},{"exercise":"Concentration Curl","demoUrl":"https://www.youtube.com/results?search_query=Concentration+Curl+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Biceps (Short Head) / Brachialis","primary":"Biceps (short head)","secondary":"Brachialis","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Elbow Flexion"},{"exercise":"EZ-Bar Curl","demoUrl":"https://www.youtube.com/results?search_query=EZ-Bar+Curl+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Biceps (Short Head) / Brachialis","primary":"Biceps (short head bias)","secondary":"Brachialis","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Elbow Flexion"},{"exercise":"Cable Rope Hammer Curl","demoUrl":"https://www.youtube.com/results?search_query=Cable+Rope+Hammer+Curl+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Biceps (Short Head) / Brachialis","primary":"Brachialis, Brachioradialis","secondary":"Biceps (short head)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (cable)","patternTags":["Isolation"],"joint":"Elbow Flexion (neutral grip)"},{"exercise":"Machine Preacher Curl","demoUrl":"https://www.youtube.com/results?search_query=Machine+Preacher+Curl+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Biceps (Short Head) / Brachialis","primary":"Biceps (short head bias)","secondary":"Brachialis","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (machine)","patternTags":["Isolation"],"joint":"Elbow Flexion"},{"exercise":"Banded Bicep Curl","demoUrl":"https://www.youtube.com/results?search_query=Banded+Bicep+Curl+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Biceps (Short Head) / Brachialis","primary":"Biceps (short head bias), Brachialis","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (band-resisted)","patternTags":["Isolation"],"joint":"Elbow Flexion"},{"exercise":"Farmer's Carry","demoUrl":"https://www.youtube.com/results?search_query=Farmer%27s+Carry+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Forearms / Grip","primary":"Forearms (grip flexors)","secondary":"Traps, Core","plane":"Sagittal (gait)","planeTags":["Sagittal"],"pattern":"Loaded Carry","patternTags":["Loaded Carry"],"joint":"Isometric Grip / Wrist Stabilization"},{"exercise":"Dead Hang","demoUrl":"https://www.youtube.com/results?search_query=Dead+Hang+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Forearms / Grip","primary":"Forearms (grip flexors), Lats","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isometric","patternTags":["Isometric"],"joint":"Isometric Grip"},{"exercise":"Wrist Curl","demoUrl":"https://www.youtube.com/results?search_query=Wrist+Curl+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Forearms / Grip","primary":"Forearm Flexors","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Wrist Flexion"},{"exercise":"Reverse Wrist Curl","demoUrl":"https://www.youtube.com/results?search_query=Reverse+Wrist+Curl+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Forearms / Grip","primary":"Forearm Extensors","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation","patternTags":["Isolation"],"joint":"Wrist Extension"},{"exercise":"Plate Pinch Hold","demoUrl":"https://www.youtube.com/results?search_query=Plate+Pinch+Hold+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Forearms / Grip","primary":"Forearms (grip flexors, pinch strength)","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isometric","patternTags":["Isometric"],"joint":"Isometric Grip"},{"exercise":"Barbell Wrist Roller","demoUrl":"https://www.youtube.com/results?search_query=Barbell+Wrist+Roller+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Forearms / Grip","primary":"Forearm Flexors, Forearm Extensors","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (loaded)","patternTags":["Isolation"],"joint":"Wrist Flexion / Extension (alternating)"},{"exercise":"Cable Wrist Curl","demoUrl":"https://www.youtube.com/results?search_query=Cable+Wrist+Curl+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Forearms / Grip","primary":"Forearm Flexors","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Isolation (cable)","patternTags":["Isolation"],"joint":"Wrist Flexion"},{"exercise":"Fat-Grip Farmer's Carry","demoUrl":"https://www.youtube.com/results?search_query=Fat-Grip+Farmer%27s+Carry+exercise+proper+form","region":"Upper Body – Pull","group":"Arms","sub":"Forearms / Grip","primary":"Forearms (grip flexors)","secondary":"Traps, Core","plane":"Sagittal (gait)","planeTags":["Sagittal"],"pattern":"Loaded Carry (grip-emphasis)","patternTags":["Loaded Carry"],"joint":"Isometric Grip / Wrist Stabilization"},{"exercise":"Wall Drill (Acceleration Posture)","demoUrl":"https://www.youtube.com/results?search_query=Wall+Drill+%28Acceleration+Posture%29+exercise+proper+form","region":"Athletic Development","group":"Speed & Acceleration","sub":"Acceleration Mechanics","primary":"Hip Flexors, Glutes","secondary":"Core, Calves","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Sprint Mechanics (Drill)","patternTags":["Sprint"],"joint":"Alternating Hip Flexion / Extension"},{"exercise":"A-Skip","demoUrl":"https://www.youtube.com/results?search_query=A-Skip+exercise+proper+form","region":"Athletic Development","group":"Speed & Acceleration","sub":"Acceleration Mechanics","primary":"Hip Flexors, Calves","secondary":"Glutes, Quads","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Sprint Mechanics (Drill)","patternTags":["Sprint"],"joint":"Hip Flexion + Ankle Dorsiflexion"},{"exercise":"Bounding","demoUrl":"https://www.youtube.com/results?search_query=Bounding+exercise+proper+form","region":"Athletic Development","group":"Speed & Acceleration","sub":"Acceleration Mechanics (Horizontal Power)","primary":"Glutes, Hamstrings, Calves","secondary":"Hip Flexors, Core","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Bound (Horizontal Power)","patternTags":["Jump / Bound","Power"],"joint":"Hip Extension + Ankle Plantarflexion"},{"exercise":"High Knee Sprint Drill","demoUrl":"https://www.youtube.com/results?search_query=High+Knee+Sprint+Drill+exercise+proper+form","region":"Athletic Development","group":"Speed & Acceleration","sub":"Acceleration Mechanics","primary":"Hip Flexors, Glutes","secondary":"Calves, Core","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Sprint Mechanics (Drill)","patternTags":["Sprint"],"joint":"Rapid Hip Flexion / Extension"},{"exercise":"Sled Push (Resisted Sprint)","demoUrl":"https://www.youtube.com/results?search_query=Sled+Push+%28Resisted+Sprint%29+exercise+proper+form","region":"Athletic Development","group":"Speed & Acceleration","sub":"Resisted Sprint","primary":"Glutes, Quads, Calves","secondary":"Hip Flexors, Core","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Sprint (Resisted)","patternTags":["Sprint"],"joint":"Hip/Knee/Ankle Triple Extension"},{"exercise":"Resisted Band Sprint","demoUrl":"https://www.youtube.com/results?search_query=Resisted+Band+Sprint+exercise+proper+form","region":"Athletic Development","group":"Speed & Acceleration","sub":"Resisted Sprint","primary":"Glutes, Quads, Hamstrings","secondary":"Hip Flexors, Core","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Sprint (Resisted)","patternTags":["Sprint"],"joint":"Hip/Knee/Ankle Triple Extension"},{"exercise":"Sled Drag (Forward, Resisted Sprint)","demoUrl":"https://www.youtube.com/results?search_query=Sled+Drag+%28Forward%2C+Resisted+Sprint%29+exercise+proper+form","region":"Athletic Development","group":"Speed & Acceleration","sub":"Resisted Sprint","primary":"Glutes, Quads, Hamstrings","secondary":"Hip Flexors, Core","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Sprint (Resisted)","patternTags":["Sprint"],"joint":"Hip/Knee/Ankle Triple Extension"},{"exercise":"Flying Sprint (Max Velocity)","demoUrl":"https://www.youtube.com/results?search_query=Flying+Sprint+%28Max+Velocity%29+exercise+proper+form","region":"Athletic Development","group":"Speed & Acceleration","sub":"Max Velocity Mechanics","primary":"Hamstrings, Glutes, Calves","secondary":"Hip Flexors","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Sprint (Max Velocity)","patternTags":["Sprint"],"joint":"Hip Extension + Reactive Ankle Plantarflexion"},{"exercise":"5-10-5 Pro Agility Drill","demoUrl":"https://www.youtube.com/results?search_query=5-10-5+Pro+Agility+Drill+exercise+proper+form","region":"Athletic Development","group":"Change of Direction & Agility","sub":"Multi-Directional Agility","primary":"Glute Med, Adductors, Quads","secondary":"Core (anti-rotation)","plane":"Frontal + Transverse","planeTags":["Frontal","Transverse"],"pattern":"Change of Direction","patternTags":["Change of Direction"],"joint":"Hip Abduction / Adduction + Deceleration"},{"exercise":"4-Cone Box Drill","demoUrl":"https://www.youtube.com/results?search_query=4-Cone+Box+Drill+exercise+proper+form","region":"Athletic Development","group":"Change of Direction & Agility","sub":"Multi-Directional Agility","primary":"Glute Med, Quads, Adductors","secondary":"Core, Calves","plane":"Sagittal + Frontal + Transverse","planeTags":["Sagittal","Frontal","Transverse"],"pattern":"Change of Direction","patternTags":["Change of Direction"],"joint":"Multi-Directional Deceleration / Reacceleration"},{"exercise":"Lateral Shuffle","demoUrl":"https://www.youtube.com/results?search_query=Lateral+Shuffle+exercise+proper+form","region":"Athletic Development","group":"Change of Direction & Agility","sub":"Lateral Agility","primary":"Glute Med, Adductors","secondary":"Quads","plane":"Frontal","planeTags":["Frontal"],"pattern":"Agility (Lateral)","patternTags":["Agility"],"joint":"Hip Abduction / Adduction"},{"exercise":"Carioca (Grapevine) Drill","demoUrl":"https://www.youtube.com/results?search_query=Carioca+%28Grapevine%29+Drill+exercise+proper+form","region":"Athletic Development","group":"Change of Direction & Agility","sub":"Lateral Agility","primary":"Glute Med, Adductors","secondary":"Obliques, Quads","plane":"Frontal + Transverse","planeTags":["Frontal","Transverse"],"pattern":"Agility (Lateral)","patternTags":["Agility"],"joint":"Hip Rotation + Abduction / Adduction"},{"exercise":"Band-Resisted Lateral Shuffle","demoUrl":"https://www.youtube.com/results?search_query=Band-Resisted+Lateral+Shuffle+exercise+proper+form","region":"Athletic Development","group":"Change of Direction & Agility","sub":"Lateral Agility","primary":"Glute Med, Adductors","secondary":"Quads, Core (anti-rotation)","plane":"Frontal","planeTags":["Frontal"],"pattern":"Agility (Resisted)","patternTags":["Agility"],"joint":"Hip Abduction / Adduction (Resisted)"},{"exercise":"45-Degree Cut Drill","demoUrl":"https://www.youtube.com/results?search_query=45-Degree+Cut+Drill+exercise+proper+form","region":"Athletic Development","group":"Change of Direction & Agility","sub":"Cutting Mechanics","primary":"Glute Med, Quads, Adductors","secondary":"Core","plane":"Frontal + Transverse","planeTags":["Frontal","Transverse"],"pattern":"Change of Direction (Cut)","patternTags":["Change of Direction"],"joint":"Hip Deceleration + Reacceleration"},{"exercise":"Reactive Ball Drop Sprint","demoUrl":"https://www.youtube.com/results?search_query=Reactive+Ball+Drop+Sprint+exercise+proper+form","region":"Athletic Development","group":"Change of Direction & Agility","sub":"Reactive Agility","primary":"Quads, Glutes, Calves","secondary":"Core","plane":"Sagittal + Transverse","planeTags":["Sagittal","Transverse"],"pattern":"Reactive Agility","patternTags":["Agility","Reactive"],"joint":"Rapid Triple Extension (Reactive)"},{"exercise":"Drop Step & Sprint","demoUrl":"https://www.youtube.com/results?search_query=Drop+Step+%26+Sprint+exercise+proper+form","region":"Athletic Development","group":"Change of Direction & Agility","sub":"Reactive Agility","primary":"Glute Med, Quads","secondary":"Hip Flexors, Core","plane":"Transverse + Sagittal","planeTags":["Sagittal","Transverse"],"pattern":"Reactive Agility","patternTags":["Agility","Reactive"],"joint":"Hip Rotation into Triple Extension"},{"exercise":"Countermovement Jump","demoUrl":"https://www.youtube.com/results?search_query=Countermovement+Jump+exercise+proper+form","region":"Athletic Development","group":"Power — Jumps, Throws & Olympic Lifts","sub":"Vertical Jump","primary":"Glutes, Quads, Calves","secondary":"Hamstrings","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Power (Vertical Jump)","patternTags":["Jump / Bound","Power"],"joint":"Hip/Knee/Ankle Triple Extension"},{"exercise":"Box Jump","demoUrl":"https://www.youtube.com/results?search_query=Box+Jump+exercise+proper+form","region":"Athletic Development","group":"Power — Jumps, Throws & Olympic Lifts","sub":"Vertical Jump","primary":"Glutes, Quads, Calves","secondary":"Hamstrings","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Power (Vertical Jump)","patternTags":["Jump / Bound","Power"],"joint":"Hip/Knee/Ankle Triple Extension"},{"exercise":"Jump Squat (Loaded)","demoUrl":"https://www.youtube.com/results?search_query=Jump+Squat+%28Loaded%29+exercise+proper+form","region":"Athletic Development","group":"Power — Jumps, Throws & Olympic Lifts","sub":"Vertical Jump","primary":"Glutes, Quads","secondary":"Calves, Hamstrings","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Power (Vertical Jump, Loaded)","patternTags":["Jump / Bound","Power"],"joint":"Hip/Knee/Ankle Triple Extension (Loaded)"},{"exercise":"Broad Jump","demoUrl":"https://www.youtube.com/results?search_query=Broad+Jump+exercise+proper+form","region":"Athletic Development","group":"Power — Jumps, Throws & Olympic Lifts","sub":"Horizontal Jump","primary":"Glutes, Quads, Hamstrings","secondary":"Calves","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Power (Horizontal Jump)","patternTags":["Jump / Bound","Power"],"joint":"Triple Extension (Horizontal)"},{"exercise":"Single-Leg Bound","demoUrl":"https://www.youtube.com/results?search_query=Single-Leg+Bound+exercise+proper+form","region":"Athletic Development","group":"Power — Jumps, Throws & Olympic Lifts","sub":"Horizontal Jump","primary":"Glutes, Hamstrings, Calves","secondary":"Glute Med (stability)","plane":"Sagittal (primary) + Frontal (stability)","planeTags":["Sagittal","Frontal"],"pattern":"Power (Horizontal Jump, Unilateral)","patternTags":["Jump / Bound","Power"],"joint":"Triple Extension (Unilateral)"},{"exercise":"Depth Jump","demoUrl":"https://www.youtube.com/results?search_query=Depth+Jump+exercise+proper+form","region":"Athletic Development","group":"Power — Jumps, Throws & Olympic Lifts","sub":"Reactive Vertical Jump","primary":"Quads, Glutes, Calves","secondary":"Hamstrings","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Power (Reactive Jump)","patternTags":["Jump / Bound","Reactive","Power"],"joint":"Rapid Triple Extension (Reactive)"},{"exercise":"Hang Power Clean","demoUrl":"https://www.youtube.com/results?search_query=Hang+Power+Clean+exercise+proper+form","region":"Athletic Development","group":"Power — Jumps, Throws & Olympic Lifts","sub":"Olympic Lift Variation","primary":"Glutes, Hamstrings, Traps","secondary":"Quads, Calves, Forearms (grip)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Power (Olympic Lift Variation)","patternTags":["Olympic Lift","Power"],"joint":"Triple Extension + Shrug/Pull"},{"exercise":"Power Snatch","demoUrl":"https://www.youtube.com/results?search_query=Power+Snatch+exercise+proper+form","region":"Athletic Development","group":"Power — Jumps, Throws & Olympic Lifts","sub":"Olympic Lift Variation","primary":"Glutes, Hamstrings, Traps, Shoulders","secondary":"Quads, Calves, Forearms (grip)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Power (Olympic Lift Variation)","patternTags":["Olympic Lift","Power"],"joint":"Triple Extension + Overhead Catch"},{"exercise":"Med Ball Chest Pass (Explosive)","demoUrl":"https://www.youtube.com/results?search_query=Med+Ball+Chest+Pass+%28Explosive%29+exercise+proper+form","region":"Athletic Development","group":"Power — Jumps, Throws & Olympic Lifts","sub":"Upper Body Throw","primary":"Chest, Triceps, Anterior Delt","secondary":"Core","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Power (Throw)","patternTags":["Throw","Power"],"joint":"Shoulder Horizontal Adduction (Explosive) + Elbow Extension"},{"exercise":"Battle Rope Alternating Wave","demoUrl":"https://www.youtube.com/results?search_query=Battle+Rope+Alternating+Wave+exercise+proper+form","region":"Athletic Development","group":"Power — Jumps, Throws & Olympic Lifts","sub":"Upper Body Conditioning Power","primary":"Shoulders, Lats, Core","secondary":"Forearms (grip), Traps","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Power (Conditioning, Reactive)","patternTags":["Reactive","Power"],"joint":"Shoulder Flexion / Extension (Alternating, Reactive)"},{"exercise":"Med Ball Rotational Scoop Toss","demoUrl":"https://www.youtube.com/results?search_query=Med+Ball+Rotational+Scoop+Toss+exercise+proper+form","region":"Athletic Development","group":"Power — Jumps, Throws & Olympic Lifts","sub":"Rotational Throw","primary":"Obliques, Glutes","secondary":"Shoulders, Lats","plane":"Transverse","planeTags":["Transverse"],"pattern":"Power (Rotational Throw)","patternTags":["Rotation","Throw","Power"],"joint":"Trunk Rotation (Explosive) + Hip Drive"},{"exercise":"Kettlebell Swing","demoUrl":"https://www.youtube.com/results?search_query=Kettlebell+Swing+exercise+proper+form","region":"Athletic Development","group":"Power — Jumps, Throws & Olympic Lifts","sub":"Ballistic Hip Power","primary":"Glute Max, Hamstrings","secondary":"Erector Spinae, Lats","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Power (Ballistic Hip Hinge)","patternTags":["Hinge","Power"],"joint":"Rapid Hip Extension"},{"exercise":"Repeated Ankle Hops","demoUrl":"https://www.youtube.com/results?search_query=Repeated+Ankle+Hops+exercise+proper+form","region":"Athletic Development","group":"Reactive Strength / Plyometric","sub":"Lower Body Reactive","primary":"Calves","secondary":"Glutes, Quads","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Reactive / Plyometric (Ankle Stiffness)","patternTags":["Plyometric","Reactive"],"joint":"Ankle Plantarflexion (Short Contact, Reactive)"},{"exercise":"Tuck Jump","demoUrl":"https://www.youtube.com/results?search_query=Tuck+Jump+exercise+proper+form","region":"Athletic Development","group":"Reactive Strength / Plyometric","sub":"Lower Body Reactive","primary":"Glutes, Quads, Hip Flexors","secondary":"Calves, Core","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Reactive / Plyometric","patternTags":["Plyometric","Reactive"],"joint":"Rapid Triple Flexion / Extension"},{"exercise":"Single-Leg Continuous Hop","demoUrl":"https://www.youtube.com/results?search_query=Single-Leg+Continuous+Hop+exercise+proper+form","region":"Athletic Development","group":"Reactive Strength / Plyometric","sub":"Lower Body Reactive","primary":"Calves, Glutes, Quads","secondary":"Glute Med (stability)","plane":"Sagittal (primary) + Frontal (stability)","planeTags":["Sagittal","Frontal"],"pattern":"Reactive / Plyometric (Unilateral)","patternTags":["Plyometric","Reactive"],"joint":"Ankle/Knee/Hip Reactive Extension"},{"exercise":"Lateral Bound (Skater Jump)","demoUrl":"https://www.youtube.com/results?search_query=Lateral+Bound+%28Skater+Jump%29+exercise+proper+form","region":"Athletic Development","group":"Reactive Strength / Plyometric","sub":"Lower Body Reactive (Frontal)","primary":"Glute Med, Glute Max, Adductors","secondary":"Quads, Calves","plane":"Frontal","planeTags":["Frontal"],"pattern":"Reactive / Plyometric (Lateral)","patternTags":["Plyometric","Reactive"],"joint":"Hip Abduction / Adduction (Reactive)"},{"exercise":"Plyo Push-Up","demoUrl":"https://www.youtube.com/results?search_query=Plyo+Push-Up+exercise+proper+form","region":"Athletic Development","group":"Reactive Strength / Plyometric","sub":"Upper Body Reactive","primary":"Chest, Triceps, Anterior Delt","secondary":"Core","plane":"Transverse","planeTags":["Transverse"],"pattern":"Reactive / Plyometric (Upper Body)","patternTags":["Plyometric","Reactive"],"joint":"Shoulder Horizontal Adduction (Reactive) + Elbow Extension"},{"exercise":"Medicine Ball Slam","demoUrl":"https://www.youtube.com/results?search_query=Medicine+Ball+Slam+exercise+proper+form","region":"Athletic Development","group":"Reactive Strength / Plyometric","sub":"Upper Body Reactive","primary":"Lats, Rectus Abdominis, Shoulders","secondary":"Triceps, Obliques","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Reactive / Plyometric (Upper Body Power)","patternTags":["Plyometric","Reactive","Power"],"joint":"Shoulder Extension (Explosive) + Trunk Flexion"},{"exercise":"Single-Leg Drop Landing","demoUrl":"https://www.youtube.com/results?search_query=Single-Leg+Drop+Landing+exercise+proper+form","region":"Athletic Development","group":"Deceleration & Landing Mechanics","sub":"Single-Leg Landing","primary":"Quads, Glute Max, Glute Med","secondary":"Hamstrings","plane":"Sagittal (primary) + Frontal (stability)","planeTags":["Sagittal","Frontal"],"pattern":"Deceleration (Landing Mechanics)","patternTags":["Landing","Deceleration"],"joint":"Knee/Hip Flexion (Eccentric) + Frontal-Plane Control"},{"exercise":"Double-Leg Drop Landing","demoUrl":"https://www.youtube.com/results?search_query=Double-Leg+Drop+Landing+exercise+proper+form","region":"Athletic Development","group":"Deceleration & Landing Mechanics","sub":"Double-Leg Landing","primary":"Quads, Glutes","secondary":"Hamstrings, Calves","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Deceleration (Landing Mechanics)","patternTags":["Landing","Deceleration"],"joint":"Knee/Hip Flexion (Eccentric)"},{"exercise":"Broad Jump Stick Landing","demoUrl":"https://www.youtube.com/results?search_query=Broad+Jump+Stick+Landing+exercise+proper+form","region":"Athletic Development","group":"Deceleration & Landing Mechanics","sub":"Landing Mechanics (Horizontal)","primary":"Quads, Glutes","secondary":"Hamstrings, Calves","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Deceleration (Landing Mechanics)","patternTags":["Landing","Deceleration"],"joint":"Triple Flexion (Eccentric Absorption)"},{"exercise":"Deceleration Step (Run-and-Stick)","demoUrl":"https://www.youtube.com/results?search_query=Deceleration+Step+%28Run-and-Stick%29+exercise+proper+form","region":"Athletic Development","group":"Deceleration & Landing Mechanics","sub":"Eccentric Braking","primary":"Quads, Glute Max","secondary":"Hamstrings (eccentric)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Deceleration (Eccentric)","patternTags":["Eccentric","Deceleration"],"joint":"Knee/Hip Flexion (Eccentric Braking)"},{"exercise":"Backpedal & Stick","demoUrl":"https://www.youtube.com/results?search_query=Backpedal+%26+Stick+exercise+proper+form","region":"Athletic Development","group":"Deceleration & Landing Mechanics","sub":"Eccentric Braking","primary":"Quads, Hip Flexors","secondary":"Glutes, Calves","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Deceleration (Eccentric)","patternTags":["Eccentric","Deceleration"],"joint":"Knee/Hip Flexion (Eccentric Braking)"},{"exercise":"Nordic Hamstring Curl","demoUrl":"https://www.youtube.com/results?search_query=Nordic+Hamstring+Curl+exercise+proper+form","region":"Athletic Development","group":"Deceleration & Landing Mechanics","sub":"Eccentric Braking","primary":"Hamstrings","secondary":"Glute Max","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Deceleration (Eccentric)","patternTags":["Eccentric","Deceleration"],"joint":"Knee Flexion (Eccentric Control)"},{"exercise":"Landmine Row (Single-Arm)","demoUrl":"https://www.youtube.com/results?search_query=Landmine+Row+%28Single-Arm%29+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Lats","primary":"Lats, Rhomboids, Mid Traps","secondary":"Biceps, Rear Delt","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Horizontal Pull (unilateral)","patternTags":["Pull"],"joint":"Shoulder Extension + Horizontal Abduction"},{"exercise":"Landmine Meadows Row","demoUrl":"https://www.youtube.com/results?search_query=Landmine+Meadows+Row+exercise+proper+form","region":"Upper Body – Pull","group":"Back","sub":"Lats","primary":"Lats, Rhomboids","secondary":"Biceps, Obliques","plane":"Sagittal (primary) + Transverse (trunk rotation)","planeTags":["Sagittal","Transverse"],"pattern":"Horizontal Pull (unilateral, rotational)","patternTags":["Pull"],"joint":"Shoulder Extension + Horizontal Abduction"},{"exercise":"Landmine Reverse Lunge","demoUrl":"https://www.youtube.com/results?search_query=Landmine+Reverse+Lunge+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Quads, Glute Max","secondary":"Hamstrings","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Lunge","patternTags":["Lunge"],"joint":"Knee Extension + Hip Extension"},{"exercise":"Landmine Front Squat","demoUrl":"https://www.youtube.com/results?search_query=Landmine+Front+Squat+exercise+proper+form","region":"Lower Body","group":"Quadriceps","sub":"Quadriceps (general)","primary":"Quads","secondary":"Glute Max, Erector Spinae","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Squat","patternTags":["Squat"],"joint":"Knee Extension + Hip Extension"},{"exercise":"Landmine Romanian Deadlift","demoUrl":"https://www.youtube.com/results?search_query=Landmine+Romanian+Deadlift+exercise+proper+form","region":"Lower Body","group":"Hamstrings","sub":"Hamstrings","primary":"Hamstrings, Glute Max","secondary":"Erector Spinae","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Hinge","patternTags":["Hinge"],"joint":"Hip Extension"},{"exercise":"Landmine Deadlift","demoUrl":"https://www.youtube.com/results?search_query=Landmine+Deadlift+exercise+proper+form","region":"Lower Body","group":"Hamstrings","sub":"Hamstrings","primary":"Hamstrings, Glute Max, Erector Spinae","secondary":"Quads","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Hip Hinge","patternTags":["Hinge"],"joint":"Hip Extension"},{"exercise":"Landmine Single-Arm Overhead Press","demoUrl":"https://www.youtube.com/results?search_query=Landmine+Single-Arm+Overhead+Press+exercise+proper+form","region":"Upper Body – Push","group":"Shoulders","sub":"Anterior Delt","primary":"Anterior Delt","secondary":"Upper Chest, Triceps, Obliques (anti-lateral flexion)","plane":"Sagittal (diagonal)","planeTags":["Sagittal"],"pattern":"Diagonal Push (unilateral)","patternTags":["Push"],"joint":"Shoulder Flexion"},{"exercise":"Landmine Push Press","demoUrl":"https://www.youtube.com/results?search_query=Landmine+Push+Press+exercise+proper+form","region":"Upper Body – Push","group":"Shoulders","sub":"Anterior Delt","primary":"Anterior Delt","secondary":"Upper Chest, Triceps, Quads (drive)","plane":"Sagittal (diagonal)","planeTags":["Sagittal"],"pattern":"Diagonal Push (explosive)","patternTags":["Push","Power"],"joint":"Shoulder Flexion"},{"exercise":"Landmine Lateral Lunge","demoUrl":"https://www.youtube.com/results?search_query=Landmine+Lateral+Lunge+exercise+proper+form","region":"Lower Body","group":"Adductors","sub":"Adductors","primary":"Adductors","secondary":"Quads, Glute Med","plane":"Frontal","planeTags":["Frontal"],"pattern":"Lateral Lunge","patternTags":["Lunge"],"joint":"Hip Adduction / Abduction"},{"exercise":"Landmine Rotational Lunge","demoUrl":"https://www.youtube.com/results?search_query=Landmine+Rotational+Lunge+exercise+proper+form","region":"Core","group":"Obliques","sub":"Obliques (Rotational)","primary":"Obliques","secondary":"Quads, Glute Max, Hip Rotators","plane":"Transverse (trunk) + Sagittal (legs)","planeTags":["Transverse","Sagittal"],"pattern":"Rotation + Lunge (combination)","patternTags":["Rotation","Lunge"],"joint":"Trunk Rotation"},{"exercise":"Landmine Halo","demoUrl":"https://www.youtube.com/results?search_query=Landmine+Halo+exercise+proper+form","region":"Core","group":"Obliques","sub":"Obliques (Rotational)","primary":"Obliques","secondary":"Shoulders (stabilizers), Deep Core","plane":"Transverse","planeTags":["Transverse"],"pattern":"Rotation","patternTags":["Rotation"],"joint":"Trunk Rotation"},{"exercise":"Rowing Machine (Steady State)","demoUrl":"https://www.youtube.com/results?search_query=Rowing+Machine+%28Steady+State%29+exercise+proper+form","region":"Athletic Development","group":"Cardio & Conditioning","sub":"Steady-State Cardio (Full Body)","primary":"Quads, Glutes, Lats","secondary":"Hamstrings, Core, Biceps, Forearms (grip)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Cyclical Pull (Conditioning)","patternTags":["Conditioning","Pull"],"joint":"Hip/Knee Extension + Shoulder Extension (Cyclical)"},{"exercise":"Rowing Machine (Intervals)","demoUrl":"https://www.youtube.com/results?search_query=Rowing+Machine+%28Intervals%29+exercise+proper+form","region":"Athletic Development","group":"Cardio & Conditioning","sub":"Interval Conditioning (Full Body)","primary":"Quads, Glutes, Lats","secondary":"Hamstrings, Core, Biceps, Forearms (grip)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Cyclical Pull (High-Intensity Intervals)","patternTags":["Conditioning","Pull"],"joint":"Hip/Knee Extension + Shoulder Extension (Cyclical)"},{"exercise":"Assault Bike (Steady State)","demoUrl":"https://www.youtube.com/results?search_query=Assault+Bike+%28Steady+State%29+exercise+proper+form","region":"Athletic Development","group":"Cardio & Conditioning","sub":"Steady-State Cardio (Full Body)","primary":"Quads, Glutes, Shoulders","secondary":"Hamstrings, Calves, Chest, Triceps","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Cyclical Push/Pull (Conditioning)","patternTags":["Conditioning"],"joint":"Hip/Knee Extension + Shoulder Flexion/Extension (Cyclical)"},{"exercise":"Assault Bike (Sprint Intervals)","demoUrl":"https://www.youtube.com/results?search_query=Assault+Bike+%28Sprint+Intervals%29+exercise+proper+form","region":"Athletic Development","group":"Cardio & Conditioning","sub":"Interval Conditioning (Full Body)","primary":"Quads, Glutes, Shoulders","secondary":"Hamstrings, Calves, Chest, Triceps","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Cyclical Push/Pull (High-Intensity Intervals)","patternTags":["Conditioning","Power"],"joint":"Hip/Knee Extension + Shoulder Flexion/Extension (Cyclical)"},{"exercise":"Ski Erg","demoUrl":"https://www.youtube.com/results?search_query=Ski+Erg+exercise+proper+form","region":"Athletic Development","group":"Cardio & Conditioning","sub":"Steady-State Cardio (Upper Body Dominant)","primary":"Lats, Core, Triceps","secondary":"Shoulders, Glutes, Hamstrings","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Cyclical Pull (Conditioning)","patternTags":["Conditioning","Pull"],"joint":"Shoulder Extension + Hip Hinge (Cyclical)"},{"exercise":"Stationary Bike (Steady State)","demoUrl":"https://www.youtube.com/results?search_query=Stationary+Bike+%28Steady+State%29+exercise+proper+form","region":"Athletic Development","group":"Cardio & Conditioning","sub":"Steady-State Cardio (Lower Body)","primary":"Quads, Glutes","secondary":"Hamstrings, Calves","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Cyclical Knee/Hip Extension (Conditioning)","patternTags":["Conditioning"],"joint":"Hip/Knee Extension (Cyclical)"},{"exercise":"Treadmill Run (Steady State)","demoUrl":"https://www.youtube.com/results?search_query=Treadmill+Run+%28Steady+State%29+exercise+proper+form","region":"Athletic Development","group":"Cardio & Conditioning","sub":"Steady-State Cardio (Lower Body)","primary":"Quads, Glutes, Calves","secondary":"Hamstrings, Hip Flexors, Core","plane":"Sagittal (gait)","planeTags":["Sagittal (gait)"],"pattern":"Gait Cycle (Conditioning)","patternTags":["Conditioning","Gait"],"joint":"Hip/Knee/Ankle Triple Extension (Cyclical)"},{"exercise":"Treadmill Run (Sprint Intervals)","demoUrl":"https://www.youtube.com/results?search_query=Treadmill+Run+%28Sprint+Intervals%29+exercise+proper+form","region":"Athletic Development","group":"Cardio & Conditioning","sub":"Interval Conditioning (Lower Body)","primary":"Quads, Glutes, Calves","secondary":"Hamstrings, Hip Flexors, Core","plane":"Sagittal (gait)","planeTags":["Sagittal (gait)"],"pattern":"Sprint Gait Cycle (High-Intensity Intervals)","patternTags":["Conditioning","Sprint"],"joint":"Hip/Knee/Ankle Triple Extension (Cyclical)"},{"exercise":"Jump Rope (Cardio Intervals)","demoUrl":"https://www.youtube.com/results?search_query=Jump+Rope+%28Cardio+Intervals%29+exercise+proper+form","region":"Athletic Development","group":"Cardio & Conditioning","sub":"Steady-State Cardio (Lower Body, Low-Amplitude Plyometric)","primary":"Calves, Shoulders","secondary":"Quads, Glutes, Forearms (grip)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Repeated Ankle Hop (Conditioning)","patternTags":["Conditioning","Plyometric"],"joint":"Ankle Plantarflexion (Repeated)"},{"exercise":"Stair Climber (StepMill)","demoUrl":"https://www.youtube.com/results?search_query=Stair+Climber+%28StepMill%29+exercise+proper+form","region":"Athletic Development","group":"Cardio & Conditioning","sub":"Steady-State Cardio (Lower Body)","primary":"Quads, Glutes, Calves","secondary":"Hamstrings, Hip Flexors","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Cyclical Step-Up (Conditioning)","patternTags":["Conditioning"],"joint":"Hip/Knee Extension (Cyclical)"},{"exercise":"Swimming (Freestyle)","demoUrl":"https://www.youtube.com/results?search_query=Swimming+%28Freestyle%29+exercise+proper+form","region":"Athletic Development","group":"Cardio & Conditioning","sub":"Steady-State Cardio (Full Body, Low-Impact)","primary":"Lats, Shoulders, Core","secondary":"Triceps, Chest, Glutes, Calves","plane":"Sagittal + Transverse","planeTags":["Sagittal","Transverse"],"pattern":"Cyclical Pull + Kick (Conditioning)","patternTags":["Conditioning","Pull"],"joint":"Shoulder Flexion/Extension + Hip/Knee Extension (Cyclical)"},{"exercise":"Elliptical Trainer (Steady State)","demoUrl":"https://www.youtube.com/results?search_query=Elliptical+Trainer+%28Steady+State%29+exercise+proper+form","region":"Athletic Development","group":"Cardio & Conditioning","sub":"Steady-State Cardio (Full Body, Low-Impact)","primary":"Quads, Glutes","secondary":"Hamstrings, Calves, Shoulders","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Cyclical Push/Pull (Low-Impact Conditioning)","patternTags":["Conditioning"],"joint":"Hip/Knee Extension + Shoulder Flexion/Extension (Cyclical, Low-Impact)"},{"exercise":"Ankle Dorsiflexion Rock (Knee-to-Wall)","demoUrl":"https://www.youtube.com/results?search_query=Ankle+Dorsiflexion+Rock+%28Knee-to-Wall%29+exercise+proper+form","region":"Mobility & Prehab","group":"Ankle & Foot Mobility","sub":"Ankle Dorsiflexion","primary":"Ankle (Dorsiflexors), Calves","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Joint Mobilization (Mobility)","patternTags":["Mobility"],"joint":"Ankle Dorsiflexion (Repeated)"},{"exercise":"Standing Ankle Circles","demoUrl":"https://www.youtube.com/results?search_query=Standing+Ankle+Circles+exercise+proper+form","region":"Mobility & Prehab","group":"Ankle & Foot Mobility","sub":"Ankle Mobility (Multi-Planar)","primary":"Ankle (Dorsiflexors/Plantarflexors)","secondary":"Calves","plane":"Frontal + Sagittal + Transverse","planeTags":["Frontal","Sagittal","Transverse"],"pattern":"Joint Circles (Mobility)","patternTags":["Mobility"],"joint":"Ankle Circumduction"},{"exercise":"90/90 Hip Switch","demoUrl":"https://www.youtube.com/results?search_query=90%2F90+Hip+Switch+exercise+proper+form","region":"Mobility & Prehab","group":"Hip Mobility","sub":"Hip Internal/External Rotation","primary":"Hip Rotators, Glutes","secondary":"Adductors","plane":"Transverse","planeTags":["Transverse"],"pattern":"Hip Rotation (Mobility)","patternTags":["Mobility","Rotation"],"joint":"Hip Internal/External Rotation (Alternating)"},{"exercise":"World's Greatest Stretch","demoUrl":"https://www.youtube.com/results?search_query=World%27s+Greatest+Stretch+exercise+proper+form","region":"Mobility & Prehab","group":"Hip Mobility","sub":"Multi-Joint Dynamic Mobility","primary":"Hip Flexors, Hamstrings, Thoracic Spine","secondary":"Adductors, Glutes","plane":"Sagittal + Transverse","planeTags":["Sagittal","Transverse"],"pattern":"Dynamic Stretch Flow (Mobility)","patternTags":["Mobility"],"joint":"Combined Hip/Thoracic Mobilization"},{"exercise":"Hip CARs (Controlled Articular Rotations)","demoUrl":"https://www.youtube.com/results?search_query=Hip+CARs+%28Controlled+Articular+Rotations%29+exercise+proper+form","region":"Mobility & Prehab","group":"Hip Mobility","sub":"Hip Mobility (Multi-Planar)","primary":"Hip Flexors, Glutes, Hip Rotators","secondary":"Core","plane":"Multi-planar (circumduction)","planeTags":["Frontal","Sagittal","Transverse"],"pattern":"Controlled Articular Rotation (Mobility)","patternTags":["Mobility","Isometric"],"joint":"Hip Circumduction (Controlled)"},{"exercise":"Couch Stretch (Hip Flexor)","demoUrl":"https://www.youtube.com/results?search_query=Couch+Stretch+%28Hip+Flexor%29+exercise+proper+form","region":"Mobility & Prehab","group":"Hip Mobility","sub":"Hip Flexor Mobility","primary":"Hip Flexors, Quads","secondary":"—","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Static Stretch (Mobility)","patternTags":["Mobility","Isometric"],"joint":"Hip Extension (Sustained Stretch)"},{"exercise":"Deep Squat Hold","demoUrl":"https://www.youtube.com/results?search_query=Deep+Squat+Hold+exercise+proper+form","region":"Mobility & Prehab","group":"Hip Mobility","sub":"Hip & Ankle Mobility (Squat Position)","primary":"Hips, Ankles, Adductors","secondary":"Quads, Lower Back","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Static Hold (Mobility)","patternTags":["Mobility","Isometric","Squat"],"joint":"Hip/Knee/Ankle Flexion (Sustained)"},{"exercise":"Thoracic Rotation (Quadruped)","demoUrl":"https://www.youtube.com/results?search_query=Thoracic+Rotation+%28Quadruped%29+exercise+proper+form","region":"Mobility & Prehab","group":"Thoracic Spine & Upper Back Mobility","sub":"Thoracic Rotation","primary":"Thoracic Spine, Obliques","secondary":"Shoulders","plane":"Transverse","planeTags":["Transverse"],"pattern":"Thoracic Rotation (Mobility)","patternTags":["Mobility","Rotation"],"joint":"Thoracic Rotation (Quadruped)"},{"exercise":"Cat-Cow","demoUrl":"https://www.youtube.com/results?search_query=Cat-Cow+exercise+proper+form","region":"Mobility & Prehab","group":"Thoracic Spine & Upper Back Mobility","sub":"Spinal Flexion/Extension","primary":"Spinal Erectors, Core","secondary":"Shoulders","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Spinal Flexion/Extension (Mobility)","patternTags":["Mobility"],"joint":"Spinal Flexion/Extension (Segmental)"},{"exercise":"Open Book Stretch","demoUrl":"https://www.youtube.com/results?search_query=Open+Book+Stretch+exercise+proper+form","region":"Mobility & Prehab","group":"Thoracic Spine & Upper Back Mobility","sub":"Thoracic Rotation (Side-Lying)","primary":"Thoracic Spine, Chest","secondary":"Shoulders","plane":"Transverse","planeTags":["Transverse"],"pattern":"Rotational Stretch (Mobility)","patternTags":["Mobility","Rotation"],"joint":"Thoracic Rotation (Side-Lying)"},{"exercise":"Shoulder CARs (Controlled Articular Rotations)","demoUrl":"https://www.youtube.com/results?search_query=Shoulder+CARs+%28Controlled+Articular+Rotations%29+exercise+proper+form","region":"Mobility & Prehab","group":"Shoulder Mobility & Pre-Hab","sub":"Shoulder Mobility (Multi-Planar)","primary":"Shoulders, Rotator Cuff","secondary":"Upper Back","plane":"Multi-planar (circumduction)","planeTags":["Frontal","Sagittal","Transverse"],"pattern":"Controlled Articular Rotation (Mobility)","patternTags":["Mobility","Isometric"],"joint":"Shoulder Circumduction (Controlled)"},{"exercise":"Wall Slide","demoUrl":"https://www.youtube.com/results?search_query=Wall+Slide+exercise+proper+form","region":"Mobility & Prehab","group":"Shoulder Mobility & Pre-Hab","sub":"Scapular Mobility & Control","primary":"Upper Back, Rotator Cuff","secondary":"Shoulders","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Scapular Control (Mobility)","patternTags":["Mobility"],"joint":"Scapular Upward Rotation + Shoulder Flexion"},{"exercise":"Banded Shoulder Dislocate","demoUrl":"https://www.youtube.com/results?search_query=Banded+Shoulder+Dislocate+exercise+proper+form","region":"Mobility & Prehab","group":"Shoulder Mobility & Pre-Hab","sub":"Shoulder Flexibility (External Rotation)","primary":"Shoulders, Chest","secondary":"Upper Back","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Dynamic Stretch (Mobility)","patternTags":["Mobility"],"joint":"Shoulder Flexion to Extension (Overhead Pass)"},{"exercise":"Prone Y-T-W Raise","demoUrl":"https://www.youtube.com/results?search_query=Prone+Y-T-W+Raise+exercise+proper+form","region":"Mobility & Prehab","group":"Shoulder Mobility & Pre-Hab","sub":"Scapular Stability Pre-Hab","primary":"Lower Traps, Rotator Cuff","secondary":"Upper Back, Rear Delts","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Scapular Stability (Pre-Hab)","patternTags":["Mobility","Isolation"],"joint":"Shoulder Flexion/Abduction (Scapular-Focused)"},{"exercise":"Walking Knee Hug","demoUrl":"https://www.youtube.com/results?search_query=Walking+Knee+Hug+exercise+proper+form","region":"Mobility & Prehab","group":"Dynamic Warm-Up","sub":"Dynamic Hip/Hamstring Warm-Up","primary":"Glutes, Hamstrings","secondary":"Hip Flexors, Core","plane":"Sagittal (gait)","planeTags":["Sagittal (gait)"],"pattern":"Dynamic Warm-Up (Gait)","patternTags":["Mobility","Gait"],"joint":"Alternating Hip Flexion (Walking)"},{"exercise":"Walking Quad Stretch","demoUrl":"https://www.youtube.com/results?search_query=Walking+Quad+Stretch+exercise+proper+form","region":"Mobility & Prehab","group":"Dynamic Warm-Up","sub":"Dynamic Quad/Hip Flexor Warm-Up","primary":"Quads, Hip Flexors","secondary":"Core (balance)","plane":"Sagittal (gait)","planeTags":["Sagittal (gait)"],"pattern":"Dynamic Warm-Up (Gait)","patternTags":["Mobility","Gait"],"joint":"Alternating Knee Flexion (Walking)"},{"exercise":"Inchworm to Push-Up","demoUrl":"https://www.youtube.com/results?search_query=Inchworm+to+Push-Up+exercise+proper+form","region":"Mobility & Prehab","group":"Dynamic Warm-Up","sub":"Full-Body Dynamic Warm-Up","primary":"Hamstrings, Shoulders, Core","secondary":"Chest, Calves","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Dynamic Warm-Up (Compound)","patternTags":["Mobility","Compound / Combination"],"joint":"Hip Hinge to Plank Walkout"},{"exercise":"Lateral Lunge with Reach","demoUrl":"https://www.youtube.com/results?search_query=Lateral+Lunge+with+Reach+exercise+proper+form","region":"Mobility & Prehab","group":"Dynamic Warm-Up","sub":"Dynamic Adductor/Hip Warm-Up","primary":"Adductors, Glutes","secondary":"Quads, Hamstrings","plane":"Frontal","planeTags":["Frontal"],"pattern":"Dynamic Warm-Up (Lunge)","patternTags":["Mobility","Lunge"],"joint":"Hip Abduction/Adduction (Lateral Lunge)"},{"exercise":"Leg Swings (Front-to-Back)","demoUrl":"https://www.youtube.com/results?search_query=Leg+Swings+%28Front-to-Back%29+exercise+proper+form","region":"Mobility & Prehab","group":"Dynamic Warm-Up","sub":"Dynamic Hip Warm-Up","primary":"Hip Flexors, Hamstrings, Glutes","secondary":"Core (balance)","plane":"Sagittal","planeTags":["Sagittal"],"pattern":"Dynamic Swing (Mobility)","patternTags":["Mobility"],"joint":"Hip Flexion/Extension (Swinging)"},{"exercise":"Copenhagen Plank (Adductor Pre-Hab)","demoUrl":"https://www.youtube.com/results?search_query=Copenhagen+Plank+%28Adductor+Pre-Hab%29+exercise+proper+form","region":"Mobility & Prehab","group":"Low-Load Stability & Pre-Hab","sub":"Adductor Strength & Pre-Hab","primary":"Adductors","secondary":"Core, Hip Flexors","plane":"Frontal","planeTags":["Frontal"],"pattern":"Isometric Hold (Pre-Hab)","patternTags":["Isometric","Anti-Abduction"],"joint":"Hip Adduction (Isometric, Side Plank Position)"},{"exercise":"Pallof Press Hold","demoUrl":"https://www.youtube.com/results?search_query=Pallof+Press+Hold+exercise+proper+form","region":"Mobility & Prehab","group":"Low-Load Stability & Pre-Hab","sub":"Anti-Rotation Core Control","primary":"Deep Core, Obliques","secondary":"Shoulders (isometric)","plane":"Transverse","planeTags":["Transverse"],"pattern":"Anti-Rotation (Pre-Hab)","patternTags":["Isometric","Anti-Rotation"],"joint":"Anti-Rotation / Core Stabilization (Isometric)"}];
let DATA = BUILTIN_DATA;
let customExercises = [];
let customCol = null;
// Exercise Library's "queue to program" list: exercises picked while
// browsing/searching, held here (session-only, not saved to the database)
// until "Create Program from Queue" turns them into a real Day 1 in a new
// program. Matched by exercise+sub so the same movement in different
// filtered views is recognized as already-queued rather than duplicated.
let programQueue = [];
// Same idea, kept as a totally separate list, for queuing exercises into a
// new REHAB case instead -- an exercise can be queued for one, the other,
// or both at once, since they end up in different places.
let rehabQueue = [];
function queueKey(r){ return (r.exercise||"") + "|||" + (r.sub||""); }
function isQueued(r){ return programQueue.some(q => queueKey(q) === queueKey(r)); }
function isRehabQueued(r){ return rehabQueue.some(q => queueKey(q) === queueKey(r)); }
let clientsCol = null;
let clientsCache = [];
let clientSaveTimers = {}; // client id -> pending debounce timer handle (per-client, so editing client A then quickly clicking to client B never cancels A's pending save)
let clientSavePendingIds = {}; // client id -> true while that client's edit is debounced or mid-save -- protects against a realtime snapshot for a DIFFERENT change overwriting it before it lands
let clientSaveVersion = {}; // client id -> counter bumped on every scheduleClientSave call, so an older overlapping save's completion can't prematurely clear a newer one's pending guard
let currentClientId = null;
let clientProgActualsSaveTimer = null;
let clientProgSwapsSaveTimer = null;
let clientProgSessionLogsSaveTimer = null;
let taskPresetsOpen = false;
let clientGoalPresetsOpen = false; // separate open/closed state for the client's own "suggested tasks" picker in Tasks for the Big Picture, distinct from the coach's own picker above
// The client's own "+ Add Goal" row supports an optional day-picker so a
// goal can be pinned to specific weekday(s) instead of showing on every day
// of the Weekly Agenda. Toggling a day chip re-renders the whole client view
// (same pattern as the coach's task-draft chips), so the in-progress text +
// picked days live here rather than resetting on every render.
let pendingGoalDraftText = "";
let pendingGoalDraftDays = [];
let pendingGoalDaysEditorOpen = false;
let goalDaysEditorOpenIds = new Set(); // which existing goals currently have their day-picker expanded

// Open/closed state for the client portal's top-level collapsible "pill"
// blocks (see renderClientModeView) -- renderClientModeView fully rebuilds
// the DOM on every call, so which pills are expanded has to be tracked out
// here in plain JS variables rather than relied on as native DOM state.
let cmPersonalStatsOpen = false;
let cmBigPictureGoalsOpen = false;
let cmRoadMapOpen = false;
let cmTodaysAgendaOpen = false;
let cmTrainingPlanOpen = false;
let cmRehabOpen = false;
let cmNutritionOpen = false;
let cmMessagesOpen = false;
let cmWeeklyAgendaOpen = false; // the old full 7-day view, now tucked inside Today's Agenda as a secondary toggle
// Shared between the Training Plan pill's per-day pills and the matching
// day pill shown in Today's Agenda when that day is scheduled for today --
// keyed by day.id so expanding a day in one place keeps it expanded when
// the same day shows up in the other (per the coach's request that these
// stay visually linked).
let cmTrainingDayPillOpenIds = new Set();
// Which week of a program's progression the client is currently viewing --
// keyed by program.id, 0-based. Not saved to the database (same in-memory,
// resets-on-reload approach as the other view-state above); getSelectedWeekIndex
// below computes a sensible starting point the first time a program is seen.
let cmProgramWeekIndex = {};
// Which exercises currently have their "earlier weeks" reference list
// expanded, keyed by exercise id.
let cmWeekHistoryOpenIds = new Set();
// Which clients currently have their goals "Past goals" history expanded,
// keyed by client id -- shown on both the client's own Big Picture Goals
// pill and the coach's Client Profile page.
let cmGoalsHistoryOpenIds = new Set();
// Which clients currently have their "Session Notes (from Client)" history
// expanded on the coach's own Client Profile page, keyed by client id.
let cmSessionLogHistoryOpenIds = new Set();
// Which clients currently have the "BODY METRICS" toggle expanded -- shown
// on both the client's own Body Metrics section and the coach's Contact &
// Personal Info pill (same shared widget either side opens/edits).
let cmBodyMetricsPillOpenIds = new Set();

// Task-adding is a two-step "pick, then Save" flow (see renderClientProfile):
// nothing lands on the client's real task list until the coach hits the
// Save button, which makes the moment something actually got added
// completely unambiguous. These hold what's queued up but not yet saved.
let pendingTasksClientId = null; // which client the draft state below belongs to
let pendingPresetTitles = new Set(); // preset titles checked but not yet saved
let pendingCustomDrafts = []; // [{id, title, freq, target}] custom tasks typed but not yet saved

// Typing into a draft custom task doesn't call scheduleClientSave (nothing
// is saved until the Save button is clicked), so it never sets
// clientSavePendingIds -- which means, on its own, the focus-loss guard
// below wouldn't protect a draft title mid-keystroke from a background
// snapshot's full rebuild. This mirrors that same guard for draft editing:
// mark the client "dirty" on every keystroke and clear it a moment after
// typing stops, rather than tying it to an in-flight save.
let taskDraftDirtyIds = {}; // client id -> true while a draft task field was just typed into
let taskDraftDirtyTimers = {};
function markTaskDraftDirty(clientId){
  taskDraftDirtyIds[clientId] = true;
  clearTimeout(taskDraftDirtyTimers[clientId]);
  taskDraftDirtyTimers[clientId] = setTimeout(() => { delete taskDraftDirtyIds[clientId]; }, 1200);
}

// renderClientProfile()/renderClientModeView() both wipe and fully rebuild
// their form from scratch (host.innerHTML = "" + rebuild). That's fine when
// it's a direct result of something the coach/client just did on the record
// they have open. But these two collections' data also gets refreshed by
// background realtime events that have nothing to do with what's on screen
// (someone else's program changed, a rehab case saved, a nutrition plan
// updated) -- and those fire the exact same full rebuild. If the coach is
// mid-keystroke in a text input (like a brand-new custom task's title) when
// one of those unrelated events lands, the rebuild destroys that input out
// from under their cursor: focus is lost, the field they were typing into
// no longer exists, and further keystrokes go nowhere. That looks exactly
// like "the Add Task button doesn't work" even though the button, the save
// logic, and the underlying data are all fine. These wrappers skip a
// background-triggered re-render while the open client/session has an edit
// still in flight, so a rebuild never lands mid-keystroke; the moment that
// save settles, the very next snapshot renders normally again.
function safeRenderClientProfile(){
  if(!clientsTabInited) return;
  if(currentClientId && clientSavePendingIds[currentClientId]) return;
  if(currentClientId && taskDraftDirtyIds[currentClientId]) return;
  renderClientProfile();
}
function safeRenderClientModeView(){
  if(!clientSession) return;
  if(clientSavePendingIds[clientSession.id]) return;
  renderClientModeView();
}

// -- Client-facing portal: who's viewing, and what they're allowed to see --
// isOwnerFlag defaults true so a bare local/dev preview (no window.claude at
// all, e.g. this same file opened directly or under the Playwright test
// suite) keeps behaving like every other part of this app already does
// without a Claude runtime -- full access, nothing hidden. Once a real
// Claude runtime is present, we trust whatever user.isOwner() reports and
// fail closed (treat as non-owner) if that call can't be completed, rather
// than ever defaulting a real external viewer into the coach's full UI.
let isOwnerFlag = true;
let ownerResolved = false;
let clientSession = null;
function mergeLibrary(){
  DATA = customExercises.length ? BUILTIN_DATA.concat(customExercises) : BUILTIN_DATA;
}

const FACETS = [
  {key:"group", label:"Muscle Group / Quality"},
  {key:"sub", label:"Muscle Sub-Region"},
  {key:"planeTags", label:"Plane of Movement", multi:true},
  {key:"patternTags", label:"Movement Pattern", multi:true},
];

const REGION_META = {
  "Lower Body": {var:"--region-lower"},
  "Core": {var:"--region-core"},
  "Upper Body – Push": {var:"--region-push"},
  "Upper Body – Pull": {var:"--region-pull"},
  "Athletic Development": {var:"--region-athletic"},
  "Mobility & Prehab": {var:"--region-mobility"},
};

let active = {group:null, sub:null, planeTags:null, patternTags:null};
let query = "";

function matches(rec, exceptKey){
  for(const f of FACETS){
    if(f.key === exceptKey) continue;
    const val = active[f.key];
    if(!val) continue;
    if(f.multi){
      if(!rec[f.key].includes(val)) return false;
    } else if(rec[f.key] !== val){
      return false;
    }
  }
  if(query){
    const hay = (rec.exercise+" "+rec.primary+" "+rec.secondary+" "+rec.sub+" "+rec.group).toLowerCase();
    if(!hay.includes(query)) return false;
  }
  return true;
}

function optionsFor(facet){
  const seen = new Map();
  for(const rec of DATA){
    if(!matches(rec, facet.key)) continue;
    const vals = facet.multi ? rec[facet.key] : [rec[facet.key]];
    for(const v of vals){
      seen.set(v, (seen.get(v)||0)+1);
    }
  }
  return seen;
}

function esc(s){
  return String(s).replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
}

function render(){
  const facetsEl = document.getElementById("facets");
  facetsEl.innerHTML = "";
  FACETS.forEach((f, i) => {
    const counts = optionsFor(f);
    const allVals = [...new Set(DATA.flatMap(r => f.multi ? r[f.key] : [r[f.key]]))].sort();
    const div = document.createElement("div");
    div.className = "facet";
    const label = document.createElement("div");
    label.className = "facet-label";
    label.innerHTML = `<span class="step">${i+1}</span> ${esc(f.label)}`;
    div.appendChild(label);
    const pillsWrap = document.createElement("div");
    pillsWrap.className = "pills";
    allVals.forEach(v => {
      const c = counts.get(v) || 0;
      const isActive = active[f.key] === v;
      const btn = document.createElement("button");
      btn.className = "pill" + (isActive ? " active" : "") + (c === 0 && !isActive ? " zero" : "");
      btn.innerHTML = `${esc(v)} <span class="count">${c}</span>`;
      btn.onclick = () => {
        active[f.key] = isActive ? null : v;
        render();
      };
      pillsWrap.appendChild(btn);
    });
    div.appendChild(pillsWrap);
    facetsEl.appendChild(div);
  });

  const bar = document.getElementById("activebar");
  bar.innerHTML = "";
  FACETS.forEach(f => {
    const v = active[f.key];
    if(!v) return;
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.innerHTML = `${esc(f.label)}: ${esc(v)} <button aria-label="remove">✕</button>`;
    chip.querySelector("button").onclick = () => { active[f.key] = null; render(); };
    bar.appendChild(chip);
  });

  const hasFilter = Object.values(active).some(Boolean) || query;
  const results = DATA.filter(r => matches(r, null));
  const statusEl = document.getElementById("status");
  const resultsEl = document.getElementById("results");

  if(!hasFilter){
    statusEl.textContent = "";
    resultsEl.innerHTML = `<div class="empty">Select a <b>Muscle Group</b> above (or search by name) to start exploring —<br>e.g. try <b>Glutes</b>, then narrow by plane of movement to see how max, med and min are each trained differently.</div>`;
    return;
  }

  statusEl.textContent = results.length + (results.length === 1 ? " exercise matches" : " exercises match");

  if(results.length === 0){
    resultsEl.innerHTML = `<div class="empty">No exercises match that combination yet. Try clearing one filter.</div>`;
    return;
  }

  const grid = document.createElement("div");
  grid.className = "grid";
  results.sort((a,b) => a.exercise.localeCompare(b.exercise));
  results.forEach(r => {
    const meta = REGION_META[r.region] || {var:"--accent"};
    const queued = isQueued(r);
    const rehabQueued = isRehabQueued(r);
    const card = document.createElement("div");
    card.className = "card";
    card.style.setProperty("--card-accent", `var(${meta.var})`);
    card.innerHTML = `
      <div class="cardhead">
        <h3>${esc(r.exercise)}</h3>
        <a class="demolink" href="${esc(r.demoUrl)}" target="_blank" rel="noopener noreferrer" title="Search YouTube for a demo of this exercise">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Watch demo
        </a>
      </div>
      <div class="tagrow">
        <span class="tag region">${esc(r.region)}</span>
        <span class="tag">${esc(r.group)} — ${esc(r.sub)}</span>
        <span class="tag">${esc(r.plane)}</span>
        <span class="tag">${esc(r.pattern)}</span>
      </div>
      <div class="detail"><b>Joint action</b>${esc(r.joint)}</div>
      <div class="detail"><b>Primary mover(s)</b>${esc(r.primary)}</div>
      <div class="detail"><b>Secondary mover(s)</b>${esc(r.secondary)}</div>
      <button type="button" class="queuebtn progqueuebtn${queued ? " queued" : ""}">${queued ? "✓ Queued for Program" : "+ Queue to Program"}</button>
      <button type="button" class="queuebtn rehabqueuebtn${rehabQueued ? " queued" : ""}">${rehabQueued ? "✓ Queued for Rehab" : "+ Queue to Rehab"}</button>
    `;
    card.querySelector(".progqueuebtn").addEventListener("click", () => {
      if(isQueued(r)) programQueue = programQueue.filter(q => queueKey(q) !== queueKey(r));
      else programQueue = programQueue.concat([r]);
      render();
      renderProgramQueueBar();
    });
    card.querySelector(".rehabqueuebtn").addEventListener("click", () => {
      if(isRehabQueued(r)) rehabQueue = rehabQueue.filter(q => queueKey(q) !== queueKey(r));
      else rehabQueue = rehabQueue.concat([r]);
      render();
      renderRehabQueueBar();
    });
    grid.appendChild(card);
  });
  resultsEl.innerHTML = "";
  resultsEl.appendChild(grid);
}

// The "Program Queue" strip pinned above the results grid: shows every
// exercise queued so far (across any number of searches/filters), each
// removable on its own, plus the button that turns the whole list into a
// new program's Day 1. Session-only -- nothing here is saved until Create
// Program from Queue actually builds a program out of it.
function renderProgramQueueBar(){
  const bar = document.getElementById("programQueueBar");
  if(!bar) return;
  if(!programQueue.length){
    bar.innerHTML = "";
    bar.hidden = true;
    return;
  }
  bar.hidden = false;
  bar.innerHTML = `
    <div class="queuebarhead">
      <span class="queuebartitle">Program Queue (${programQueue.length})</span>
      <button type="button" class="generatebtn queuecreatebtn">Create Program from Queue</button>
      <button type="button" class="clearbtn queueclearbtn">Clear Queue</button>
    </div>
    <div class="queuebarlist">
      ${programQueue.map(r => `<span class="queuechip">${esc(r.exercise)} <button type="button" class="queuechipremove" data-key="${esc(queueKey(r))}" title="Remove from queue">✕</button></span>`).join("")}
    </div>
  `;
  bar.querySelectorAll(".queuechipremove").forEach(btn => {
    btn.addEventListener("click", () => {
      programQueue = programQueue.filter(q => queueKey(q) !== btn.dataset.key);
      render();
      renderProgramQueueBar();
    });
  });
  bar.querySelector(".queuecreatebtn").addEventListener("click", createProgramFromQueue);
  bar.querySelector(".queueclearbtn").addEventListener("click", () => {
    programQueue = [];
    render();
    renderProgramQueueBar();
  });
}

// Turns the queue into a brand-new program's Day 1 (sets/reps/load start
// blank, exactly like adding an exercise to a day by hand in the builder),
// then opens it there ready to add more days, sets/reps, or assign to a
// client. Mirrors the "+ New Program" button's own save handling exactly,
// so it works the same whether or not the coach has ever opened the
// Program Builder tab yet this visit.
async function createProgramFromQueue(){
  if(!programQueue.length) return;
  showTab("builder");
  await ensureBuilderInited();
  const queued = programQueue;
  programQueue = [];
  renderProgramQueueBar();
  render();
  const now = new Date().toISOString();
  const days = [{
    id: rid(), label: "Day 1",
    exercises: queued.map(r => ({
      id: rid(), exercise: r.exercise, group: r.group, sub: r.sub, plane: r.plane,
      pattern: r.pattern, joint: r.joint, primary: r.primary, secondary: r.secondary,
      sets: "", reps: "", load: "", rpe: "", rir: "", loadMode: "", notes: "",
    })),
  }];
  const data = {name: "New Program (from Queue)", days, weeks: 1, goal: "", coachNotes: "", liftStats: [], weightUnit: "kg", clientIds: [], createdAt: now, updatedAt: now};
  showAutoBuildForm = false;
  if(!programsCol){
    const id = "local-" + rid();
    const rec = Object.assign({id}, data);
    programsCache.unshift(rec);
    currentId = id; currentProgram = JSON.parse(JSON.stringify(rec));
    renderProgramList(); renderEditor();
    return;
  }
  try{
    const ref = await programsCol.add(data);
    currentId = ref.id;
    currentProgram = Object.assign({id: ref.id}, data);
    renderProgramList(); renderEditor();
  }catch(e){
    flashNote("Couldn't create a new program right now (" + e.code + "). Try again in a moment.");
  }
}

// Same strip as the Program Queue above, for exercises headed into a new
// REHAB case instead of a program. Kept as its own bar/list (rehabQueue,
// not programQueue) so queuing something for one never touches the other.
function renderRehabQueueBar(){
  const bar = document.getElementById("rehabQueueBar");
  if(!bar) return;
  if(!rehabQueue.length){
    bar.innerHTML = "";
    bar.hidden = true;
    return;
  }
  bar.hidden = false;
  bar.innerHTML = `
    <div class="queuebarhead">
      <span class="queuebartitle">Rehab Queue (${rehabQueue.length})</span>
      <button type="button" class="generatebtn rehabqueuecreatebtn">Create Case from Queue</button>
      <button type="button" class="clearbtn rehabqueueclearbtn">Clear Queue</button>
    </div>
    <div class="queuebarlist">
      ${rehabQueue.map(r => `<span class="queuechip">${esc(r.exercise)} <button type="button" class="queuechipremove" data-key="${esc(queueKey(r))}" title="Remove from queue">✕</button></span>`).join("")}
    </div>
  `;
  bar.querySelectorAll(".queuechipremove").forEach(btn => {
    btn.addEventListener("click", () => {
      rehabQueue = rehabQueue.filter(q => queueKey(q) !== btn.dataset.key);
      render();
      renderRehabQueueBar();
    });
  });
  bar.querySelector(".rehabqueuecreatebtn").addEventListener("click", createCaseFromQueue);
  bar.querySelector(".rehabqueueclearbtn").addEventListener("click", () => {
    rehabQueue = [];
    render();
    renderRehabQueueBar();
  });
}

// Turns the rehab queue into a brand-new case's plan (sets/reps/load start
// blank, exactly like adding an exercise to a case by hand), then opens it
// in the Rehab tab ready for a diagnosis, area, and client to be set.
// Mirrors createProgramFromQueue above, including using ensureRehabInited()
// (rehab's equivalent of ensureBuilderInited) so a case created here can't
// get raced and wiped out by rehabCases' own first snapshot landing after
// this already created and selected one.
async function createCaseFromQueue(){
  if(!rehabQueue.length) return;
  showTab("rehab");
  await ensureRehabInited();
  const queued = rehabQueue;
  rehabQueue = [];
  renderRehabQueueBar();
  render();
  const now = new Date().toISOString();
  const plan = queued.map(r => ({
    id: rid(), exercise: r.exercise, group: r.group, sub: r.sub, plane: r.plane,
    pattern: r.pattern, joint: r.joint, primary: r.primary, secondary: r.secondary,
    sets: "", reps: "", load: "", notes: "",
  }));
  const data = {clientName: "New Case (from Queue)", clientId: null, diagnosis: "", areaGroups: [], areaSubs: [], plan, createdAt: now, updatedAt: now};
  if(!rehabCol){
    const id = "local-" + rid();
    const rec = Object.assign({id}, data);
    casesCache.unshift(rec);
    currentCaseId = id; currentCase = JSON.parse(JSON.stringify(rec));
    renderCaseList(); renderRehabEditor();
    return;
  }
  try{
    const ref = await rehabCol.add(data);
    currentCaseId = ref.id;
    currentCase = Object.assign({id: ref.id}, data);
    renderCaseList(); renderRehabEditor();
  }catch(e){
    flashNote("Couldn't create a new case right now (" + e.code + "). Try again in a moment.", "dbnoteRehab");
  }
}

document.getElementById("q").addEventListener("input", e => {
  query = e.target.value.trim().toLowerCase();
  render();
});
document.getElementById("clearAll").addEventListener("click", () => {
  active = {group:null, sub:null, planeTags:null, patternTags:null};
  query = "";
  document.getElementById("q").value = "";
  render();
});

/* ---------------------------------------------------------------------
   Add Custom Exercise
--------------------------------------------------------------------- */

// Mirrors the canonical Movement Pattern categories classified server-side
// for the built-in library, so a custom exercise's tags line up exactly
// with the existing facet pills instead of creating near-duplicates.
const PATTERN_TAG_OPTIONS = [
  "Anti-Rotation","Anti-Extension","Anti-Abduction","Squat","Hinge","Lunge","Isolation","Isometric",
  "Loaded Carry","Rotation","Extension","Push","Pull","Gait","Plyometric","Eccentric",
  "Compound / Combination","Sprint","Agility","Change of Direction","Jump / Bound","Throw",
  "Olympic Lift","Reactive","Landing","Deceleration","Power",
];
const PLANE_OPTIONS = ["Sagittal","Frontal","Transverse"];

const addExerciseBtn = document.getElementById("addExerciseBtn");
const addExercisePanel = document.getElementById("addExercisePanel");

function closeAddExercisePanel(){
  addExercisePanel.innerHTML = "";
  addExerciseBtn.classList.remove("open");
  addExerciseBtn.textContent = "+ Add Exercise";
}

function openAddExercisePanel(){
  addExerciseBtn.classList.add("open");
  addExerciseBtn.textContent = "Close";

  const regions = [...new Set(DATA.map(r => r.region))].sort();
  const groups = [...new Set(DATA.map(r => r.group))].sort();
  const subs = [...new Set(DATA.map(r => r.sub))].sort();
  const state = {plane: [], pattern: []};

  const panel = document.createElement("div");
  panel.className = "addexpanel";
  panel.innerHTML = `
    <h3>Add a Custom Exercise</h3>
    <div style="font-size:13px;color:var(--ink-dim);margin-bottom:14px;max-width:640px;">
      Adds an exercise to your library alongside the built-in ones — it'll show up in every filter and search here, plus the Program Builder, Rehab suggestions, and the Swap picker.
    </div>
    <div class="abform-row">
      <div class="abform-field"><label>Exercise name</label><input type="text" id="neName" placeholder="e.g. Landmine Rotational Press"></div>
    </div>
    <div class="abform-row">
      <div class="abform-field"><label>Body region</label><input type="text" id="neRegion" list="neRegionList" placeholder="e.g. Lower Body"></div>
      <div class="abform-field"><label>Muscle group / quality</label><input type="text" id="neGroup" list="neGroupList" placeholder="e.g. Glutes"></div>
      <div class="abform-field"><label>Muscle sub-region</label><input type="text" id="neSub" list="neSubList" placeholder="e.g. Glute Med"></div>
    </div>
    <datalist id="neRegionList">${regions.map(r => `<option value="${esc(r)}">`).join("")}</datalist>
    <datalist id="neGroupList">${groups.map(g => `<option value="${esc(g)}">`).join("")}</datalist>
    <datalist id="neSubList">${subs.map(s => `<option value="${esc(s)}">`).join("")}</datalist>
    <div class="abform-row">
      <div class="abform-field"><label>Primary mover(s)</label><input type="text" id="nePrimary" placeholder="e.g. Glute Medius"></div>
      <div class="abform-field"><label>Secondary mover(s) (optional)</label><input type="text" id="neSecondary" placeholder="e.g. TFL, Obliques"></div>
    </div>
    <div class="abform-row">
      <div class="abform-field"><label>Plane(s) of movement</label><div class="pills" id="nePlanePills"></div></div>
    </div>
    <div class="abform-row">
      <div class="abform-field"><label>Movement pattern (select all that apply)</label><div class="pills" id="nePatternPills"></div></div>
    </div>
    <div class="abform-row">
      <div class="abform-field"><label>Joint action</label><input type="text" id="neJoint" placeholder="e.g. Hip Abduction"></div>
    </div>
    <div class="abform-row">
      <div class="abform-field"><label>Demo video URL (optional)</label><input type="text" id="neDemo" placeholder="Leave blank to auto-generate a YouTube search link"></div>
    </div>
    <div class="abform-actions">
      <button class="generatebtn" id="neSaveBtn" type="button">Save Exercise</button>
      <button class="iconbtn" id="neCancelBtn" type="button">Cancel</button>
      <div class="abstatus" id="neStatus"></div>
    </div>
  `;
  addExercisePanel.innerHTML = "";
  addExercisePanel.appendChild(panel);

  const planePillsEl = panel.querySelector("#nePlanePills");
  function renderPlanePills(){
    buildToggleChips(planePillsEl, PLANE_OPTIONS, state.plane, v => {
      const i = state.plane.indexOf(v);
      if(i > -1) state.plane.splice(i, 1); else state.plane.push(v);
      renderPlanePills();
    });
  }
  renderPlanePills();

  const patternPillsEl = panel.querySelector("#nePatternPills");
  function renderPatternPills(){
    buildToggleChips(patternPillsEl, PATTERN_TAG_OPTIONS, state.pattern, v => {
      const i = state.pattern.indexOf(v);
      if(i > -1) state.pattern.splice(i, 1); else state.pattern.push(v);
      renderPatternPills();
    });
  }
  renderPatternPills();

  panel.querySelector("#neCancelBtn").addEventListener("click", closeAddExercisePanel);
  panel.querySelector("#neSaveBtn").addEventListener("click", () => saveCustomExercise(panel, state));
}

addExerciseBtn.addEventListener("click", () => {
  if(addExercisePanel.children.length){ closeAddExercisePanel(); } else { openAddExercisePanel(); }
});

async function saveCustomExercise(panel, state){
  const oldErr = panel.querySelector(".aberror");
  if(oldErr) oldErr.remove();

  const name = panel.querySelector("#neName").value.trim();
  const region = panel.querySelector("#neRegion").value.trim();
  const group = panel.querySelector("#neGroup").value.trim();
  const sub = panel.querySelector("#neSub").value.trim();
  const primary = panel.querySelector("#nePrimary").value.trim();
  const secondary = panel.querySelector("#neSecondary").value.trim();
  const joint = panel.querySelector("#neJoint").value.trim();
  let demo = panel.querySelector("#neDemo").value.trim();

  const showErr = msg => {
    const err = document.createElement("div");
    err.className = "aberror";
    err.textContent = msg;
    panel.querySelector(".abform-actions").appendChild(err);
  };

  if(!name || !region || !group || !sub || !primary){
    showErr("Exercise name, body region, muscle group, muscle sub-region, and primary mover(s) are required.");
    return;
  }

  if(!demo){
    demo = "https://www.youtube.com/results?search_query=" + encodeURIComponent(name + " exercise proper form");
  }

  const rec = {
    exercise: name, demoUrl: demo, region, group, sub, primary, secondary: secondary || "—",
    plane: state.plane.join(" + ") || "—", planeTags: state.plane.slice(),
    pattern: state.pattern.join(" / ") || "—", patternTags: state.pattern.length ? state.pattern.slice() : ["Other"],
    joint: joint || "—", createdAt: new Date().toISOString(),
  };

  const saveBtn = panel.querySelector("#neSaveBtn");
  const statusEl = panel.querySelector("#neStatus");
  saveBtn.disabled = true;
  statusEl.innerHTML = '<span class="spinner"></span> Saving…';

  if(!customCol){
    rec.id = "local-" + rid();
    customExercises = customExercises.concat([rec]);
    mergeLibrary();
    closeAddExercisePanel();
    render();
    flashNote("Saved for this session only — this preview isn't wired up to save permanently. Open the published page itself to keep custom exercises for good.", "dbnoteLibrary");
    return;
  }

  try{
    const ref = await customCol.add(rec);
    const saved = Object.assign({id: ref.id}, rec);
    customExercises = customExercises.concat([saved]);
    mergeLibrary();
    closeAddExercisePanel();
    render();
  }catch(e){
    saveBtn.disabled = false;
    statusEl.innerHTML = "";
    showErr("Couldn't save this exercise right now (" + (e && e.code ? e.code : "error") + "). Try again in a moment.");
  }
}

render();

/* ---------------------------------------------------------------------
   Program Builder
--------------------------------------------------------------------- */

function rid(){ return Math.random().toString(36).slice(2) + Date.now().toString(36); }

function planeTagsOf(str){
  const P = ["Sagittal","Frontal","Transverse"];
  str = String(str||"").toLowerCase();
  return P.filter(p => str.includes(p.toLowerCase()));
}

const tabBtns = {
  library: document.getElementById("tabbtn-library"),
  builder: document.getElementById("tabbtn-builder"),
  rehab: document.getElementById("tabbtn-rehab"),
  nutrition: document.getElementById("tabbtn-nutrition"),
  clients: document.getElementById("tabbtn-clients"),
  messages: document.getElementById("tabbtn-messages"),
  enquiries: document.getElementById("tabbtn-enquiries"),
  notifications: document.getElementById("tabbtn-notifications"),
};
const tabPanels = {
  library: document.getElementById("tabpanel-library"),
  builder: document.getElementById("tabpanel-builder"),
  rehab: document.getElementById("tabpanel-rehab"),
  nutrition: document.getElementById("tabpanel-nutrition"),
  clients: document.getElementById("tabpanel-clients"),
  messages: document.getElementById("tabpanel-messages"),
  enquiries: document.getElementById("tabpanel-enquiries"),
  notifications: document.getElementById("tabpanel-notifications"),
};
const pageSub = document.getElementById("pagesub");
const SUBS = {
  library: "Pick a muscle group or training quality, then narrow by sub-region, plane of movement, or pattern — the exercises and their details fill in as you go.",
  builder: "Build training programs straight from the library — add exercises to a day and their muscle, plane and pattern details come with them.",
  rehab: "Log what a physio has flagged for a client, then browse the library narrowed to that area to build a rehab plan.",
  nutrition: "Build calorie and macro targets from a client's stats, then lay out meals against them — link a client to pull their numbers in automatically.",
  clients: "One place per client — their info and goals alongside every program, rehab case and nutrition plan built for them.",
  messages: "Chat with your clients right from the app — no phone number needed on either side.",
  enquiries: "Everyone who's filled out the Enquire form on your sign-in page, newest first — follow up, or turn one straight into a client.",
  notifications: "Notes your clients left after saving a finished training session, newest first — no need to open each profile to catch them.",
};
let builderInited = false;
let builderInitPromise = null;
let builderReadyResolve = null;
let rehabInited = false;
let rehabInitPromise = null;
let rehabReadyResolve = null;
let clientsTabInited = false;
let nutritionInited = false;
let messagesInited = false;
let enquiriesInited = false;
// Declared up here (not next to initEnquiries() itself further down) because
// initEnquiries() is now also called eagerly at page load, alongside
// initCustomExercises/initMessages -- a `let` declared below that call site
// would still be in its temporal dead zone at the moment the eager call
// synchronously checks it, throwing "Cannot access before initialization".
let enquiriesDbInitDone = false;

// Kicks off (once) and hands back a promise for the builder tab's db
// subscription -- needed by anything that wants to create/save a program
// from OUTSIDE the builder tab (e.g. the Exercise Library's "Create
// Program from Queue") without racing initBuilder()'s own async setup: if
// programsCol isn't set yet when that code runs, it would silently fall
// back to a "local-" in-memory program that the builder's first real
// snapshot then wipes out from under it.
function ensureBuilderInited(){
  if(!builderInited){
    builderInited = true;
    // Resolves once the FIRST programs snapshot has actually landed (not
    // just once initBuilder's own synchronous setup has run) -- otherwise
    // a caller like createProgramFromQueue could create+select a new
    // program while that first background fetch is still in flight, and
    // have it land afterward with pre-creation data, wiping the
    // just-created program's selection back out.
    builderInitPromise = new Promise(resolve => {
      builderReadyResolve = resolve;
      initBuilder();
    });
  }
  return builderInitPromise || Promise.resolve();
}

// Same idea as ensureBuilderInited above, for Rehab -- needed by the
// Exercise Library's "Create Case from Queue" for exactly the same reason:
// without it, a case created before rehabCases' first snapshot lands could
// get wiped back out once that snapshot arrives.
function ensureRehabInited(){
  if(!rehabInited){
    rehabInited = true;
    rehabInitPromise = new Promise(resolve => {
      rehabReadyResolve = resolve;
      initRehab();
    });
  }
  return rehabInitPromise || Promise.resolve();
}

function showTab(name){
  Object.keys(tabBtns).forEach(k => {
    tabBtns[k].classList.toggle("active", k === name);
    tabPanels[k].classList.toggle("active", k === name);
  });
  pageSub.textContent = SUBS[name];
  if(name === "builder"){
    ensureBuilderInited();
  }
  if(name === "rehab"){
    ensureRehabInited();
  }
  if(name === "nutrition" && !nutritionInited){
    nutritionInited = true;
    initNutrition();
  }
  if(name === "clients" && !clientsTabInited){
    clientsTabInited = true;
    initClientsTab();
  }
  if(name === "messages" && !messagesInited){
    messagesInited = true;
    initMessages();
  }
  if(name === "notifications"){
    // No dedicated subscription needed -- session-log notes already live
    // inside programsCache (loaded eagerly, see ensureBuilderInited below),
    // so this just re-renders from whatever's already there.
    renderNotificationsList();
  }
  if(name === "enquiries" && !enquiriesInited){
    enquiriesInited = true;
    initEnquiries();
  }
}

// Jumps to THE SQUAD tab with a specific client's profile already selected
// -- used by the clickable client name on an open Messages thread. Calling
// renderClientList/renderClientProfile directly (rather than relying on
// showTab's own initClientsTab lazy-init) covers the common case where the
// coach already has the Squad tab initialized from earlier in this visit,
// so showTab alone wouldn't re-render it for the newly selected client.
function goToClientProfile(clientId){
  currentClientId = clientId;
  showTab("clients");
  renderClientList();
  renderClientProfile();
}
tabBtns.library.addEventListener("click", () => showTab("library"));
tabBtns.builder.addEventListener("click", () => showTab("builder"));
tabBtns.rehab.addEventListener("click", () => showTab("rehab"));
tabBtns.nutrition.addEventListener("click", () => showTab("nutrition"));
tabBtns.clients.addEventListener("click", () => showTab("clients"));
tabBtns.messages.addEventListener("click", () => showTab("messages"));
tabBtns.enquiries.addEventListener("click", () => showTab("enquiries"));
tabBtns.notifications.addEventListener("click", () => showTab("notifications"));

let dbPromise = null;
function getDb(){
  if(!dbPromise){
    dbPromise = (async () => {
      try{
        if(window.claude && window.claude.use){
          const result = await window.claude.use("db");
          if(result) return result;
        }
      }catch(e){ /* fall through below */ }
      // Deliberately don't cache a "not signed in (yet)" result forever --
      // signing in later in the same page load (no reload) should get a
      // real db on the next attempt instead of being stuck with this null
      // for the rest of the visit. See retryDbInit below, called from
      // src/main.js whenever the coach's session appears.
      dbPromise = null;
      return null;
    })();
  }
  return dbPromise;
}

let samplePromise = null;
function getSample(){
  if(!samplePromise){
    samplePromise = (async () => {
      try{
        if(window.claude && window.claude.use) return await window.claude.use("sample");
      }catch(e){ /* fall through to null */ }
      return null;
    })();
  }
  return samplePromise;
}

/* ---------------------------------------------------------------------
   Coach vs. client access gate. Everyone who opens the site's URL runs
   this same page -- the split between the coach's full tabbed UI and a
   client's read-mostly view happens entirely client-side, based on who's
   signed in. window.claude.use("user").isOwner() (see src/main.js) tells
   us whether THIS browser holds a real, signed-in Supabase session for
   the coach's own account (via magic-link email sign-in) -- that's the
   only case that ever shows the coach's full tabbed UI. Everyone else
   sees only a small access-code gate; entering a client's code switches
   this same page into a read-mostly "client mode" view scoped to that
   one client's own program, rehab plan, goals and tasks (see
   loadClientPortalData below for how that data is fetched without ever
   giving the client's browser the coach's full collections).
--------------------------------------------------------------------- */
async function resolveOwnerStatus(){
  if(!(window.claude && window.claude.use)){
    isOwnerFlag = true; // no Claude runtime at all -- local/dev preview or the test suite
    ownerResolved = true;
    applyAccessGate();
    return;
  }
  try{
    const user = await window.claude.use("user");
    isOwnerFlag = user ? await user.isOwner() : false;
  }catch(e){
    isOwnerFlag = false; // a real runtime is present -- fail closed, not open
  }
  ownerResolved = true;
  if(isOwnerFlag){
    // A signed-in coach's own browser should never also be quietly holding
    // a leftover client access code from an earlier test of the client
    // login flow -- if it were, and something tried to auto-restore it,
    // that would hijack the coach's own dashboard into client view on
    // every future reload. (This is exactly what used to happen: see the
    // removed tryRestoreClientSession() call that lived in
    // initCustomExercises()'s clients-snapshot handler below.)
    try{ window.__clientPortal && window.__clientPortal.clearSavedAccessCode(); }catch(e){ /* ignore */ }
  } else if(!clientSession){
    // Not a signed-in coach -- this browser might belong to a client
    // returning to a previously-entered access code, so try to restore it
    // silently before falling back to asking them to type it in again.
    tryRestoreClientSession();
  }
  applyAccessGate();
}

function applyAccessGate(){
  const coachApp = document.getElementById("coachApp");
  const gateScreen = document.getElementById("gateScreen");
  const clientView = document.getElementById("clientModeView");
  const loadingScreen = document.getElementById("gateLoading");
  if(!ownerResolved){
    loadingScreen.hidden = false; coachApp.hidden = true; gateScreen.hidden = true; clientView.hidden = true;
    return;
  }
  loadingScreen.hidden = true;
  if(clientSession){
    coachApp.hidden = true; gateScreen.hidden = true; clientView.hidden = false;
    renderClientModeView();
    return;
  }
  if(isOwnerFlag){
    coachApp.hidden = false; gateScreen.hidden = true; clientView.hidden = true;
    return;
  }
  coachApp.hidden = true; clientView.hidden = true; gateScreen.hidden = false;
}

function genAccessCode(){
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; // no 0/O/1/I/L -- easy to read aloud or type
  let s = "";
  for(let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

// ---------------------------------------------------------------------
// Real-app client login. A client is NEVER handed the coach's full `db`
// capability (see resolveOwnerStatus/getDb below) -- they log in with just
// their access code, which window.__clientPortal (src/clientPortal.js)
// verifies server-side via a Postgres function and hands back ONLY that one
// client's own record, plus only their own programs/rehab cases/nutrition
// plans. That's a real security property, not just a UI convenience: even
// reading this page's network traffic or poking at it in devtools can't
// surface anyone else's data, because the server itself never sends it.
//
// programsCache/casesCache/nutritionCache are set directly here (as
// this-client-only arrays) rather than through initBuilder()/initRehab()/
// initNutrition(), which are the COACH's full-collection subscriptions and
// must never run in a client's browser.
async function loadClientPortalData(code){
  const [progs, cases, nutrition, messages] = await Promise.all([
    window.__clientPortal.getProgramsForCode(code),
    window.__clientPortal.getRehabCasesForCode(code),
    window.__clientPortal.getNutritionPlansForCode(code),
    window.__clientPortal.getMessagesForCode(code).catch(e => {
      console.error("[loadClientPortalData] messages", e);
      return []; // fail quiet -- don't block programs/rehab/nutrition loading over chat
    }),
  ]);
  programsCache = progs;
  casesCache = cases;
  nutritionCache = nutrition;
  messagesCache = messages;
}

// Real clients hold no Supabase session, so they can't get true realtime
// updates the way the coach does (see firestoreShim's postgres_changes
// subscription) -- instead, while their Messages pill is open (or briefly
// after login, to catch a badge for an already-open app) this polls for new
// messages every POLL_MS. Only ever one interval running at a time.
const CLIENT_MSG_POLL_MS = 20000;
let clientMsgPollTimer = null;
function startClientMessagePolling(){
  stopClientMessagePolling();
  clientMsgPollTimer = setInterval(async () => {
    if(!clientSession || !clientSession.accessCode) return;
    try{
      const fresh = await window.__clientPortal.getMessagesForCode(clientSession.accessCode);
      messagesCache = fresh;
      safeRenderClientModeView();
    }catch(e){
      console.error("[clientMsgPoll]", e);
      // Network hiccup -- just try again on the next tick.
    }
  }, CLIENT_MSG_POLL_MS);
}
function stopClientMessagePolling(){
  if(clientMsgPollTimer){ clearInterval(clientMsgPollTimer); clientMsgPollTimer = null; }
}

async function tryRestoreClientSession(){
  const savedCode = window.__clientPortal.getSavedAccessCode();
  if(!savedCode) return;
  try{
    const client = await window.__clientPortal.loginWithAccessCode(savedCode);
    if(!client){
      // The code no longer matches anything (coach removed/changed it) --
      // don't keep trying it forever.
      window.__clientPortal.clearSavedAccessCode();
      return;
    }
    clientSession = Object.assign({id: client.id, name: client.name}, client.doc);
    await loadClientPortalData(savedCode);
    applyAccessGate();
    startClientMessagePolling();
  }catch(e){
    console.error("[tryRestoreClientSession]", e);
    // Network/server hiccup -- just fall through to the gate screen rather
    // than getting stuck on a loading state; they can try their code again.
  }
}

async function tryClientLogin(codeRaw){
  const code = (codeRaw || "").trim().toUpperCase();
  const errEl = document.getElementById("gateError");
  const submitBtn = document.getElementById("gateSubmitBtn");
  if(!code){ errEl.textContent = "Enter your access code."; return; }
  errEl.textContent = "";
  if(submitBtn) submitBtn.disabled = true;
  try{
    const client = await window.__clientPortal.loginWithAccessCode(code);
    if(!client){
      errEl.textContent = "Code not recognized — check with your coach and try again.";
      return;
    }
    clientSession = Object.assign({id: client.id, name: client.name}, client.doc);
    await loadClientPortalData(code);
    applyAccessGate();
    startClientMessagePolling();
  }catch(e){
    console.error("[tryClientLogin]", e);
    errEl.textContent = "Something went wrong logging in — check your connection and try again.";
  }finally{
    if(submitBtn) submitBtn.disabled = false;
  }
}

// The coach's own "preview as this client" button, from inside her own
// already-logged-in dashboard -- this reuses her own already-loaded
// programsCache/casesCache/nutritionCache (full collections, since she's
// the coach and RLS already scopes them to her clients only) rather than
// re-fetching through the client-portal path above.
function previewClientView(client){
  clientSession = client;
  applyAccessGate();
}

document.getElementById("gateSubmitBtn").addEventListener("click", () => tryClientLogin(document.getElementById("gateCodeInput").value));
document.getElementById("gateCodeInput").addEventListener("keydown", e => { if(e.key === "Enter") tryClientLogin(e.target.value); });

/* ---------------------------------------------------------------------
   Launch screen navigation -- the four entry points shown before anyone's
   signed in (Sign In / Join / Enquire / Coach Sign In). Clicking one hides
   the button grid and shows just that one panel; "Back" reverses it. Each
   panel's own form (client login, enquiry, coach login) is wired up
   elsewhere -- this is purely which panel is visible.
--------------------------------------------------------------------- */
const launchGrid = document.getElementById("launchGrid");
const launchPanels = Array.from(document.querySelectorAll(".launchpanel"));

function showLaunchPanel(panelId){
  if(launchGrid) launchGrid.hidden = true;
  launchPanels.forEach(p => { p.hidden = p.id !== panelId; });
}
function showLaunchGrid(){
  if(launchGrid) launchGrid.hidden = false;
  launchPanels.forEach(p => { p.hidden = true; });
}
document.querySelectorAll("[data-launch-open]").forEach(btn => {
  btn.addEventListener("click", () => showLaunchPanel(btn.dataset.launchOpen));
});
document.querySelectorAll("[data-launch-back]").forEach(btn => {
  btn.addEventListener("click", showLaunchGrid);
});

// Set this to the Payment Link you create in your own Stripe dashboard
// (Stripe Dashboard -> Payment links -> + New -> set your price/description
// -> Create link). Anyone who clicks "Continue to Payment" on the Join
// panel is sent straight there; Stripe hosts the whole checkout itself, so
// nothing about payment ever touches this app directly. Once they pay, the
// webhook in api/stripe-webhook.js takes over automatically (creates their
// account, emails their access code) -- see the setup notes for exactly
// what to configure in Stripe for that part.
const JOIN_PAYMENT_LINK = "PASTE_YOUR_STRIPE_PAYMENT_LINK_HERE";

(function setUpJoinPanel(){
  const link = document.getElementById("joinLinkBtn");
  const err = document.getElementById("joinError");
  if(!link) return;
  const isConfigured = JOIN_PAYMENT_LINK && !JOIN_PAYMENT_LINK.startsWith("PASTE_");
  if(isConfigured){
    link.href = JOIN_PAYMENT_LINK;
  } else {
    link.addEventListener("click", e => e.preventDefault());
    link.style.opacity = "0.5";
    link.style.cursor = "not-allowed";
    if(err) err.hidden = false;
  }
})();

/* ---------------------------------------------------------------------
   Enquire form -- a public lead-capture questionnaire, no sign-in of any
   kind. Submits straight to the submit_enquiry() database function (see
   clientPortal.js), which resolves the coach account itself and inserts a
   row for her Enquiries tab to pick up -- there's nothing here for anyone
   filling it out to read back afterward, just a thank-you message.
--------------------------------------------------------------------- */
document.getElementById("enquireForm").addEventListener("submit", async e => {
  e.preventDefault();
  const statusEl = document.getElementById("enquireStatus");
  const submitBtn = document.getElementById("enquireSubmitBtn");
  const name = document.getElementById("enquireName").value.trim();
  const email = document.getElementById("enquireEmail").value.trim();
  const phone = document.getElementById("enquirePhone").value.trim();
  const goals = document.getElementById("enquireGoals").value.trim();
  const experience = document.getElementById("enquireExperience").value.trim();
  statusEl.style.color = "";
  if(!name || !email){
    statusEl.textContent = "Please fill in your name and email.";
    return;
  }
  submitBtn.disabled = true;
  statusEl.textContent = "Sending...";
  try{
    await window.__clientPortal.submitEnquiry({name, email, phone, goals, experience});
    statusEl.style.color = "#1a7a3c";
    statusEl.textContent = "Thanks! I'll be in touch soon.";
    document.getElementById("enquireForm").reset();
  }catch(e2){
    console.error("[enquireForm]", e2);
    statusEl.textContent = "Something went wrong sending that — check your connection and try again.";
  }finally{
    submitBtn.disabled = false;
  }
});

let db = null;
let programsCol = null;
let programsCache = [];
let currentId = null;
let currentProgram = null;
let saveTimer = null;
let showAutoBuildForm = false;

// A program can be assigned to more than one client at once (a group
// program): everyone assigned shares the same exercise/sets/reps
// prescription but logs their own actual reps/weight separately (see
// program.actualsByClient, further down). `clientIds` is the array that
// replaced the old single `clientId` field; these two helpers are the only
// places that need to know both shapes exist, so every other call site can
// just ask "who's on this program" / "is this person on it" without caring
// whether it's an old program saved before group programs existed.
function programClientIds(program){
  // Only fall back to the old single-client field when clientIds has never
  // been set at all (a program saved before group programs existed and
  // never touched since). Once clientIds exists as an array -- even an
  // EMPTY one -- it's the authoritative, deliberate answer: otherwise
  // removing the last assigned client would silently "come back" here from
  // the old field (which nothing ever clears), making the chip's ✕ button
  // look broken.
  if(program && Array.isArray(program.clientIds)) return program.clientIds;
  if(program && program.clientId) return [program.clientId];
  return [];
}
function programHasClient(program, clientId){
  return !!clientId && programClientIds(program).includes(clientId);
}

// Which assigned client's own progress the Program Builder is currently
// referencing -- drives Apply Progression's %1RM lookup, Update from
// Actuals, the read-only "Logged" column, and Print, all of which need ONE
// specific person's numbers even when several clients share this program.
// Keyed by program id; defaults to the first assigned client (see
// builderRefClientIdFor below) until the coach picks someone else.
let builderRefClientId = {};
function builderRefClientIdFor(program){
  const ids = programClientIds(program);
  if(!ids.length) return null;
  const saved = builderRefClientId[program.id];
  if(saved && ids.includes(saved)) return saved;
  return ids[0];
}

function flashNote(msg, targetId){
  const note = document.getElementById(targetId || "dbnote");
  note.hidden = false;
  note.textContent = msg;
}

// A one-off confirmation for the "pick tasks, then Save" panel -- shown for
// a few seconds after Save, independent of render cycles (it targets the
// freshly-rendered element directly rather than surviving across a
// re-render, since renderClientProfile() rebuilds this element every time).
function showTaskSaveConfirmation(msg, isError){
  const el = document.getElementById("taskSaveConfirm");
  if(!el) return;
  el.textContent = msg;
  el.hidden = false;
  el.classList.toggle("iserror", !!isError);
  clearTimeout(showTaskSaveConfirmation._timer);
  // An error stays up longer -- it needs to actually get read and reported,
  // not just glimpsed and gone like the routine success message.
  showTaskSaveConfirmation._timer = setTimeout(() => { el.hidden = true; }, isError ? 12000 : 4000);
}

async function initBuilder(){
  db = await getDb();

  if(!db){
    flashNote("Saving isn't wired up in this preview, so programs you build here won't be kept — open the published page itself to save for real.");
    renderProgramList();
    renderEditor();
    if(builderReadyResolve){ builderReadyResolve(); builderReadyResolve = null; }
    return;
  }

  programsCol = db.collection("programs");
  let firstSnapshotSeen = false;
  function markBuilderReady(){
    if(firstSnapshotSeen) return;
    firstSnapshotSeen = true;
    if(builderReadyResolve){ builderReadyResolve(); builderReadyResolve = null; }
  }
  programsCol.orderBy("updatedAt", "desc").limit(200).onSnapshot(snap => {
    programsCache = snap.docs.map(d => Object.assign({id: d.id}, d.data()));
    renderProgramList();
    if(currentId && !programsCache.find(p => p.id === currentId)){
      currentId = null; currentProgram = null; renderEditor();
    }
    safeRenderClientProfile();
    safeRenderClientModeView();
    renderNotificationsList();
    markBuilderReady();
  }, err => {
    flashNote("Couldn't load your saved programs (" + err.code + "). You can still build one, but it may not save.");
    markBuilderReady();
  });
}

function fmtCount(n, word){ return n + " " + word + (n === 1 ? "" : "s"); }

function renderProgramList(){
  const el = document.getElementById("programListEl");
  el.innerHTML = "";
  if(!programsCache.length){
    el.innerHTML = '<div class="emptyprogs">No programs yet — create one to get started.</div>';
    return;
  }
  programsCache.forEach(p => {
    const days = p.days || [];
    const exCount = days.reduce((n, d) => n + (d.exercises ? d.exercises.length : 0), 0);
    const weeks = weeksCountFor(p);
    const assignedNames = programClientIds(p).map(id => clientsCache.find(c => c.id === id)).filter(Boolean).map(c => c.name || "Unnamed client");
    const div = document.createElement("div");
    div.className = "progitem" + (p.id === currentId ? " active" : "");
    div.innerHTML = `${esc(p.name || "Untitled Program")}<span class="meta">${weeks > 1 ? fmtCount(weeks,"week") + " · " : ""}${fmtCount(days.length,"day")} · ${fmtCount(exCount,"exercise")}</span>` +
      (assignedNames.length ? `<span class="proglistclients">${esc(assignedNames.join(", "))}</span>` : "");
    div.onclick = () => {
      currentId = p.id;
      currentProgram = JSON.parse(JSON.stringify(p));
      renderProgramList();
      renderEditor();
    };
    el.appendChild(div);
  });
}

document.getElementById("newProgramBtn").addEventListener("click", async () => {
  showAutoBuildForm = false;
  const now = new Date().toISOString();
  const data = {name: "New Program", days: [], weeks: 1, goal: "", coachNotes: "", liftStats: [], weightUnit: "kg", clientIds: [], createdAt: now, updatedAt: now};
  if(!programsCol){
    const id = "local-" + rid();
    const rec = Object.assign({id}, data);
    programsCache.unshift(rec);
    currentId = id; currentProgram = JSON.parse(JSON.stringify(rec));
    renderProgramList(); renderEditor();
    return;
  }
  try{
    const ref = await programsCol.add(data);
    currentId = ref.id;
    currentProgram = Object.assign({id: ref.id}, data);
    renderEditor();
  }catch(e){
    flashNote("Couldn't create a new program right now (" + e.code + "). Try again in a moment.");
  }
});

document.getElementById("autoBuildBtn").addEventListener("click", () => {
  currentId = null; currentProgram = null;
  showAutoBuildForm = true;
  renderProgramList();
  renderEditor();
});

function scheduleSave(){
  const badge = document.getElementById("saveBadge");
  if(badge) badge.textContent = "Saving…";
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async () => {
    if(!currentProgram) return;
    // actualsByClient is deliberately left out of this payload -- the coach
    // never edits it herself (it's a read-only "Logged" summary in her
    // builder), and update_program_doc's merge is a shallow `doc || patch`,
    // so leaving it out means her save can never clobber a client's own
    // just-logged set with a stale in-memory copy from when she opened this
    // program. Clients write it themselves via save_program_actuals_for_code.
    const payload = {name: currentProgram.name, days: currentProgram.days, weeks: currentProgram.weeks||1, goal: currentProgram.goal||"", coachNotes: currentProgram.coachNotes||"", liftStats: currentProgram.liftStats||[], weightUnit: currentProgram.weightUnit||"kg", clientIds: programClientIds(currentProgram), prescribePercent: currentProgram.prescribePercent !== false, updatedAt: new Date().toISOString()};
    const badgeEl = document.getElementById("saveBadge");
    if(programsCol && !String(currentId).startsWith("local-")){
      try{
        await programsCol.doc(currentId).update(payload);
        if(badgeEl) badgeEl.textContent = "Saved";
      }catch(e){
        if(badgeEl) badgeEl.textContent = "Not saved (" + e.code + ")";
      }
    } else {
      const idx = programsCache.findIndex(p => p.id === currentId);
      if(idx > -1) programsCache[idx] = Object.assign({}, programsCache[idx], payload);
      if(badgeEl) badgeEl.textContent = "Saved (this session only)";
      renderProgramList();
    }
  }, 600);
}

async function duplicateProgram(){
  if(!currentProgram) return;
  const now = new Date().toISOString();
  const copy = {
    name: (currentProgram.name || "Untitled Program") + " (copy)",
    // Deliberately NOT carrying over actualsByClient -- a duplicate is a
    // fresh copy of the prescription, not a copy of anyone's logged
    // workouts, so it starts with a clean slate the same way it would if
    // there were no actuals feature at all.
    days: JSON.parse(JSON.stringify(currentProgram.days || [])),
    weeks: currentProgram.weeks || 1, goal: currentProgram.goal || "", coachNotes: currentProgram.coachNotes || "",
    liftStats: JSON.parse(JSON.stringify(currentProgram.liftStats || [])), weightUnit: currentProgram.weightUnit || "kg",
    clientIds: programClientIds(currentProgram).slice(),
    prescribePercent: currentProgram.prescribePercent !== false,
    createdAt: now, updatedAt: now,
  };
  if(programsCol){
    try{
      const ref = await programsCol.add(copy);
      currentId = ref.id;
      currentProgram = Object.assign({id: ref.id}, copy);
      renderProgramList(); renderEditor();
    }catch(e){
      flashNote("Couldn't duplicate this program right now (" + e.code + ").");
    }
  } else {
    const id = "local-" + rid();
    const rec = Object.assign({id}, copy);
    programsCache.unshift(rec);
    currentId = id; currentProgram = JSON.parse(JSON.stringify(rec));
    renderProgramList(); renderEditor();
  }
}

function wireDeleteBtn(btn){
  let armed = false;
  let resetTimer = null;
  btn.textContent = "Delete";
  btn.addEventListener("click", async () => {
    if(!armed){
      armed = true;
      btn.textContent = "Click again to delete";
      btn.classList.add("confirming");
      resetTimer = setTimeout(() => { armed = false; btn.textContent = "Delete"; btn.classList.remove("confirming"); }, 3000);
      return;
    }
    clearTimeout(resetTimer);
    const idToDelete = currentId;
    currentId = null; currentProgram = null; showAutoBuildForm = false;
    renderEditor(); renderProgramList();
    if(programsCol && !String(idToDelete).startsWith("local-")){
      try{ await programsCol.doc(idToDelete).delete(); }catch(e){ /* already reflected locally */ }
    } else {
      programsCache = programsCache.filter(p => p.id !== idToDelete);
      renderProgramList();
    }
  });
}

function buildCoverage(days){
  const box = document.createElement("div");
  box.className = "coverage";
  const allEx = days.flatMap(d => d.exercises || []);
  if(!allEx.length){
    box.innerHTML = '<h3>Plane coverage by muscle group</h3><div style="font-size:13px;color:var(--ink-dim)">Add exercises below to see which planes of movement each muscle group is trained through in this program.</div>';
    return box;
  }
  const byGroup = {};
  allEx.forEach(ex => {
    const key = ex.group || "Other";
    if(!byGroup[key]) byGroup[key] = new Set();
    planeTagsOf(ex.plane).forEach(p => byGroup[key].add(p));
  });
  const rows = Object.keys(byGroup).sort().map(g => {
    const set = byGroup[g];
    const dots = ["Sagittal","Frontal","Transverse"].map(p =>
      `<span class="covdot${set.has(p) ? " on" : ""}"><span class="dot"></span>${p}</span>`
    ).join("");
    return `<div class="covrow"><span class="covgroup">${esc(g)}</span><span class="covdots">${dots}</span></div>`;
  }).join("");
  box.innerHTML = `<h3>Plane coverage by muscle group</h3>${rows}`;
  return box;
}

/** Wires the "⇄ Swap" search-picker behavior onto an already-created button
 *  for a given exercise slot. `row` is the container the search panel is
 *  appended to; `onSwap(newRecord)` applies the replacement and re-renders.
 *  Shared by buildExRow (Rehab) and buildProgExRow (Program Builder). */
function wireSwapButton(row, swapBtn, ex, onSwap){
  let panel = null;

  const closePanel = () => {
    if(panel){ panel.remove(); panel = null; }
    swapBtn.classList.remove("open");
  };

  const renderSwapResults = (panelEl, q) => {
    const old = panelEl.querySelector(".addex-results");
    if(old) old.remove();
    const pool = q
      ? DATA.filter(r => r.exercise !== ex.exercise && (r.exercise+" "+r.group+" "+r.sub).toLowerCase().includes(q.toLowerCase()))
      : DATA.filter(r => r.group === ex.group && r.exercise !== ex.exercise);
    const matches = pool.slice(0, 8);
    const resultsEl = document.createElement("div");
    resultsEl.className = "addex-results";
    if(!matches.length){
      resultsEl.innerHTML = '<div class="addex-item" style="color:var(--ink-dim)">No matches</div>';
    } else {
      matches.forEach(m => {
        const item = document.createElement("div");
        item.className = "addex-item";
        item.innerHTML = `<div>${esc(m.exercise)}</div><div class="tagrow"><span class="tag">${esc(m.group)} — ${esc(m.sub)}</span><span class="tag">${esc(m.plane)}</span></div>`;
        item.addEventListener("mousedown", ev => {
          ev.preventDefault();
          closePanel();
          onSwap(m);
        });
        resultsEl.appendChild(item);
      });
    }
    panelEl.appendChild(resultsEl);
  };

  swapBtn.addEventListener("click", () => {
    if(panel){ closePanel(); return; }
    swapBtn.classList.add("open");
    panel = document.createElement("div");
    panel.className = "swappanel";
    panel.innerHTML = `
      <input type="text" class="swapinput" placeholder="Search for a replacement, or pick a suggestion below…" autocomplete="off">
      <div class="swaphint">Showing other ${esc(ex.group)} exercises — start typing to search the full library.</div>
    `;
    row.appendChild(panel);
    const input = panel.querySelector(".swapinput");
    input.addEventListener("input", () => {
      const q = input.value.trim();
      panel.querySelector(".swaphint").style.display = q ? "none" : "";
      renderSwapResults(panel, q);
    });
    input.addEventListener("blur", () => setTimeout(() => { if(panel && !panel.contains(document.activeElement)) closePanel(); }, 150));
    renderSwapResults(panel, "");
    input.focus();
  });
}

/** Generic editable exercise row (sets/reps/load/notes) used by the Rehab
 *  plan. `onChange`/`onRemove` let the caller decide what "save" and
 *  "remove" mean; `onSwap`, when given, shows a "⇄ Swap" button. Program
 *  Builder days use buildProgExRow instead, which understands weeks. */
function buildExRow(ex, onChange, onRemove, onSwap){
  const row = document.createElement("div");
  row.className = "exrow";
  row.innerHTML = `
    <div class="exrow-top">
      <div class="exname">${esc(ex.exercise)}
        <div class="tagrow">
          <span class="tag">${esc(ex.group)} — ${esc(ex.sub)}</span>
          <span class="tag">${esc(ex.plane)}</span>
          <span class="tag">${esc(ex.pattern)}</span>
        </div>
      </div>
      <div class="exrow-actions">
        ${onSwap ? '<button class="exswap" title="Swap for a different exercise" type="button">⇄ Swap</button>' : ""}
        <button class="exremove" title="Remove exercise" type="button">✕</button>
      </div>
    </div>
    <div class="exrow-fields">
      <div class="exfield narrow"><label>Sets</label><input type="text" data-f="sets" value="${esc(ex.sets||"")}" placeholder="4"></div>
      <div class="exfield narrow"><label>Reps</label><input type="text" data-f="reps" value="${esc(ex.reps||"")}" placeholder="8"></div>
      <div class="exfield narrow"><label>Load</label><input type="text" data-f="load" value="${esc(ex.load||"")}" placeholder="70%"></div>
      <div class="exfield notes"><label>Notes</label><input type="text" data-f="notes" value="${esc(ex.notes||"")}" placeholder="e.g. safety squat bar, tempo 3-1-1, cue: chest up"></div>
    </div>
  `;
  row.querySelectorAll("input[data-f]").forEach(inp => {
    inp.addEventListener("input", () => { ex[inp.dataset.f] = inp.value; onChange(); });
  });
  row.querySelector(".exremove").addEventListener("click", onRemove);
  if(onSwap) wireSwapButton(row, row.querySelector(".exswap"), ex, onSwap);
  return row;
}

/* ---------------------------------------------------------------------
   Multi-week progressive overload

   A program can span several weeks with the same day structure repeated,
   but sets/reps/load stepping across weeks according to the program's
   stated goal. Exercises are classified by movement pattern (compound
   lift vs. isolation/accessory vs. athletic quality) since a bench press
   periodizes very differently from a bicep curl or a sprint drill. Only
   the "compound" lifts get a true %1RM-style intensity progression; other
   work gets a gentler volume nudge, always starting from whatever
   sets/reps are already on the exercise so a coach's or the auto-builder's
   own judgement isn't thrown away.
--------------------------------------------------------------------- */

const GOAL_PROFILES = {
  strength:     {repsStart: 8,  repsEnd: 3,  loadStart: 65, loadEnd: 88, setsStart: 4, setsEnd: 3},
  power:        {repsStart: 5,  repsEnd: 3,  loadStart: 60, loadEnd: 78, setsStart: 4, setsEnd: 4},
  hypertrophy:  {repsStart: 10, repsEnd: 8,  loadStart: 62, loadEnd: 75, setsStart: 3, setsEnd: 4},
  conditioning: {repsStart: 15, repsEnd: 12, loadStart: 50, loadEnd: 60, setsStart: 3, setsEnd: 3},
  general:      {repsStart: 10, repsEnd: 8,  loadStart: 60, loadEnd: 70, setsStart: 3, setsEnd: 4},
};

function detectGoalProfile(goalText){
  const g = String(goalText||"").toLowerCase();
  const peak = /\b1rm\b|new (\d\s*)?rep max|new max|\bpr\b|personal record|max(imal)?\s*(lift|out|effort)|test (day|week)|peak(ing)?/.test(g);
  let key = "general";
  if(/hypertroph|muscle|size|mass|bodybuild/.test(g)) key = "hypertrophy";
  else if(/fat loss|weight loss|condition|endurance|\bcut\b|cardio/.test(g)) key = "conditioning";
  else if(/power|explosive|\bspeed\b|athletic/.test(g)) key = "power";
  else if(/1rm|max|powerlift|strength|\bpr\b/.test(g)) key = "strength";
  return {key, peak};
}

const COMPOUND_PATTERNS = new Set(["Squat","Hinge","Push","Pull","Olympic Lift","Lunge"]);
const ATHLETIC_PATTERNS = new Set(["Sprint","Agility","Change of Direction","Jump / Bound","Throw","Reactive","Landing","Deceleration","Power","Plyometric"]);

// Exercises don't carry their own patternTags in a saved program (only the
// human-readable "pattern" string), so role detection looks the exercise
// back up in the live library by exercise+sub — works for built-in, custom,
// and legacy saved exercises alike.
function findLibraryRecord(ex){
  return DATA.find(r => r.exercise === ex.exercise && r.sub === ex.sub) || DATA.find(r => r.exercise === ex.exercise) || null;
}

function exerciseRole(ex){
  const rec = findLibraryRecord(ex);
  const tags = (rec && rec.patternTags) || [];
  if(tags.some(t => COMPOUND_PATTERNS.has(t))) return "compound";
  if(tags.includes("Isolation")) return "isolation";
  if(tags.some(t => ATHLETIC_PATTERNS.has(t))) return "athletic";
  return "accessory";
}

function lerp(start, end, i, n){
  if(n <= 1) return start;
  return start + (end - start) * (i / (n - 1));
}

// Epley formula: a well-known, simple estimate from a recent rep-max test.
// Reliable roughly up to ~10-12 reps; beyond that the estimate gets shaky,
// which is why the input is capped in the UI rather than enforced here.
function estimate1RM(weight, reps){
  const w = parseFloat(weight), r = parseInt(reps, 10);
  if(!w || !r || r < 1) return null;
  if(r === 1) return w;
  return w * (1 + r / 30);
}

/* ---------------------------------------------------------------------
   Nutrition targets -- Mifflin-St Jeor BMR, scaled by activity level to
   TDEE, then adjusted for the client's stated goal to get a calorie
   target, with protein set by bodyweight (g/kg) and fat as a percentage
   of calories -- carbs fill whatever's left. Standard sports-nutrition
   estimating, not a medical calculation: it's a programming starting
   point for the coach to adjust from how the client actually responds.
--------------------------------------------------------------------- */
const ACTIVITY_LEVELS = {
  sedentary: {label: "Sedentary (little/no exercise)", mult: 1.2},
  light: {label: "Lightly active (training 1-3 days/wk)", mult: 1.375},
  moderate: {label: "Moderately active (training 3-5 days/wk)", mult: 1.55},
  active: {label: "Very active (training 6-7 days/wk)", mult: 1.725},
  veryActive: {label: "Extra active (physical job + heavy training)", mult: 1.9},
};
const NUTRITION_GOALS = {
  cut: {label: "Fat Loss", calAdjust: -0.20, proteinPerKg: 2.2},
  maintain: {label: "Maintain", calAdjust: 0, proteinPerKg: 1.8},
  bulk: {label: "Muscle Gain", calAdjust: 0.12, proteinPerKg: 1.8},
};
const NUTRITION_FAT_PCT = 0.25;

// A starter menu of common health/wellness/sleep/stress habits a coach can
// add to a client with one click instead of typing every one out by hand.
// Purely a set of prefilled title/frequency defaults -- once added they're
// just ordinary tasks and can be edited or removed like any other.
const TASK_PRESETS = {
  "Sleep": [
    {title: "Lights out by 10:30pm", freq: "daily"},
    {title: "No screens 30 min before bed", freq: "daily"},
    {title: "7+ hours sleep", freq: "daily"},
    {title: "Consistent wake time, even weekends", freq: "daily"},
  ],
  "Stress & Recovery": [
    {title: "5 min breathing or meditation", freq: "daily"},
    {title: "10 min walk outside", freq: "daily"},
    {title: "Journal 3 things you're grateful for", freq: "daily"},
    {title: "Full digital detox evening", freq: "weekly", target: 2},
    {title: "Massage or mobility session", freq: "weekly", target: 1},
  ],
  "Nutrition & Hydration": [
    {title: "Drink 2-3L water", freq: "daily"},
    {title: "Eat a vegetable with every meal", freq: "daily"},
    {title: "No alcohol", freq: "daily"},
    {title: "Meal prep session", freq: "weekly", target: 1},
  ],
  "Movement & Activity": [
    {title: "10,000 steps", freq: "daily"},
    {title: "Mobility or stretch, 10 min", freq: "daily"},
    {title: "Strength session", freq: "weekly", target: 3},
    {title: "Zone 2 / easy cardio session", freq: "weekly", target: 2},
  ],
  "General Wellness": [
    {title: "10 min morning sunlight", freq: "daily"},
    {title: "Read 10 min (not a screen)", freq: "daily"},
    {title: "Connect with a friend or family member", freq: "weekly", target: 2},
    {title: "Screen-free first hour of the day", freq: "daily"},
  ],
};

function clientBodyWeightKg(client){
  const w = parseFloat(client && client.bodyWeight);
  if(!w) return null;
  return client.weightUnit === "lb" ? w * 0.453592 : w;
}

function calcBMR(client){
  const wKg = clientBodyWeightKg(client);
  const hRaw = parseFloat(client && client.heightValue);
  const age = parseFloat(client && client.age);
  const sex = client && client.sex;
  if(!wKg || !hRaw || !age || (sex !== "male" && sex !== "female")) return null;
  const hCm = client.heightUnit === "in" ? hRaw * 2.54 : hRaw;
  const base = 10 * wKg + 6.25 * hCm - 5 * age;
  return sex === "male" ? base + 5 : base - 161;
}

// {bmr, tdee, calories, proteinG, carbG, fatG} or null if the client is
// missing what the formula needs (age/sex/height/bodyweight).
function calcNutritionTargets(client){
  const bmr = calcBMR(client);
  if(bmr == null) return null;
  const activity = ACTIVITY_LEVELS[client.activityLevel] || ACTIVITY_LEVELS.moderate;
  const tdee = bmr * activity.mult;
  const goal = NUTRITION_GOALS[client.nutritionGoal] || NUTRITION_GOALS.maintain;
  const calories = Math.round(tdee * (1 + goal.calAdjust));
  const wKg = clientBodyWeightKg(client);
  const proteinG = Math.round(wKg * goal.proteinPerKg);
  const proteinCal = proteinG * 4;
  const fatCal = calories * NUTRITION_FAT_PCT;
  const fatG = Math.round(fatCal / 9);
  const carbCal = Math.max(0, calories - proteinCal - fatCal);
  const carbG = Math.round(carbCal / 4);
  return {bmr: Math.round(bmr), tdee: Math.round(tdee), calories, proteinG, carbG, fatG};
}

// {exercise name -> {oneRM, unit}} for every logged lift on this program,
// so a matching compound exercise's %1RM load can show actual weight too.
function liftStatsMap(program){
  const m = new Map();
  (program && program.liftStats || []).forEach(s => {
    if(s.oneRM) m.set(s.exercise, {oneRM: s.oneRM, unit: (program.weightUnit || "kg")});
  });
  return m;
}

// Every 4th week is a deload (lighter load, one fewer set) so the program
// isn't a straight ramp to fatigue — except the very last week when that
// week is the peak/test week, which should never be softened.
function isDeloadWeek(i, weeks, goalProfile){
  const weekNum = i + 1;
  if(weekNum % 4 !== 0) return false;
  if(goalProfile.peak && weeks >= 3 && i === weeks - 1) return false;
  return true;
}

// `prescribePercent` (default true when omitted, so any older call site
// keeps today's behavior): when explicitly false, a compound lift's
// auto-generated Load is left blank instead of a %1RM figure -- some
// clients don't have 1RM testing to base a percentage on, so the coach
// drives load off RPE (or their own judgement) instead. Sets/reps and the
// deload/peak-week logic still progress exactly the same either way. An
// RPE the coach already typed on the exercise is always carried forward
// unchanged -- Apply Progression never invents or overwrites RPE values.
function generateProgressionForExercise(ex, weeks, goalProfile, statsMap, prescribePercent){
  const usePercent = prescribePercent !== false;
  const role = exerciseRole(ex);
  const stat = statsMap && statsMap.get(ex.exercise);
  const rpe = ex.rpe || "";
  const arr = [];
  if(role === "compound"){
    const prof = GOAL_PROFILES[goalProfile.key] || GOAL_PROFILES.general;
    for(let i=0; i<weeks; i++){
      const reps = Math.max(1, Math.round(lerp(prof.repsStart, prof.repsEnd, i, weeks)));
      let loadPct = Math.round(lerp(prof.loadStart, prof.loadEnd, i, weeks));
      let sets = Math.max(1, Math.round(lerp(prof.setsStart, prof.setsEnd, i, weeks)));
      const deload = isDeloadWeek(i, weeks, goalProfile);
      let deloadTag = "";
      if(deload){
        loadPct = Math.max(40, Math.round(loadPct * 0.6));
        sets = Math.max(1, sets - 1);
        deloadTag = " — deload";
      }
      const load = usePercent
        ? (stat ? `${loadPct}% (${Math.round(stat.oneRM * loadPct / 100)}${stat.unit})` : loadPct + "%") + deloadTag
        : (deload ? "Deload" : "");
      arr.push({sets: String(sets), reps: String(reps), load, rpe});
    }
    if(goalProfile.peak && weeks >= 3){
      const testLoad = usePercent
        ? (stat ? `90-95%+ (~${Math.round(stat.oneRM * 0.925)}${stat.unit} test)` : "90-95%+ (test new max)")
        : "Test new max";
      arr[weeks-1] = {sets: "1-3", reps: "1-2", load: testLoad, rpe};
    }
  } else {
    const baseSets = parseInt(ex.sets, 10) || 3;
    const baseReps = ex.reps || (role === "isolation" ? "10-12" : role === "athletic" ? "5" : "8-12");
    for(let i=0; i<weeks; i++){
      const deload = isDeloadWeek(i, weeks, goalProfile);
      const bump = (!deload && i >= Math.ceil(weeks/2)) ? 1 : 0;
      const sets = deload ? Math.max(1, baseSets - 1) : baseSets + bump;
      const baseLoad = role === "athletic" ? "" : (ex.load||"");
      const load = deload && baseLoad ? baseLoad + " (lighter)" : baseLoad;
      arr.push({sets: String(sets), reps: String(baseReps), load, rpe});
    }
  }
  return arr;
}

function weeksCountFor(program){ return Math.max(1, Math.min(24, parseInt(program && program.weeks, 10) || 1)); }

// Non-destructively resizes ex.progression to match `weeks`: keeps whatever
// per-week data already exists, extends with the exercise's current
// sets/reps/load as a starting point, and trims if weeks went down.
function progressionOf(ex, weeks){
  if(!Array.isArray(ex.progression)) ex.progression = [];
  const base = {sets: ex.sets||"", reps: ex.reps||"", load: ex.load||"", rpe: ex.rpe||"", rir: ex.rir||""};
  // Build the extension as a separate array and concat it in, rather than
  // pushing onto ex.progression in place -- data that came straight from
  // the db capability's snapshot can be a read-only/frozen array, and
  // .push() throws on those ("Attempted to assign to readonly property"),
  // while reassigning the whole property to a new array is always safe.
  if(ex.progression.length < weeks){
    const extra = [];
    while(ex.progression.length + extra.length < weeks) extra.push(Object.assign({}, base));
    ex.progression = ex.progression.concat(extra);
  }
  if(ex.progression.length > weeks) ex.progression = ex.progression.slice(0, weeks);
  ex.sets = ex.progression[0].sets; ex.reps = ex.progression[0].reps; ex.load = ex.progression[0].load; ex.rpe = ex.progression[0].rpe; ex.rir = ex.progression[0].rir;
  return ex.progression;
}

// Which of %1RM / RIR / RPE (or none) an exercise's intensity is expressed
// in. An explicit ex.loadMode (set the moment a coach picks one in the
// builder) always wins. Programs saved before this feature existed have no
// loadMode at all, so this falls back to guessing from whichever field
// already has a value -- that way nothing already prescribed just vanishes
// from a client's screen the moment this ships; it only shows the new
// picker/single-field UI once the coach actually chooses a mode herself.
function effectiveLoadMode(ex){
  if(ex.loadMode) return ex.loadMode;
  if(ex.rpe) return "rpe";
  if(ex.rir) return "rir";
  if(ex.load) return "percent";
  return "blank";
}

// Plain cell text for one week's intensity value under an exercise's chosen
// load mode -- "70%", "RIR 2", "RPE 8", or "" for blank mode (a brand-new
// client with no 1RM/RIR/RPE reference point yet, so there's nothing to
// show and nothing forcing the coach to fill in a number that doesn't
// apply). `wk` is either the exercise itself (single-week programs) or one
// week's progression entry (multi-week).
function loadIntensityCell(ex, wk){
  const mode = effectiveLoadMode(ex);
  if(mode === "percent") return wk.load || "";
  if(mode === "rir") return wk.rir ? "RIR " + wk.rir : "";
  if(mode === "rpe") return wk.rpe ? "RPE " + wk.rpe : "";
  return "";
}

// Same value, formatted as a trailing connector to append after "3×10" --
// " @ 70%" for a percent, " (RIR 2)"/" (RPE 8)" for the other two, or ""
// when there's nothing to show.
function loadIntensityText(ex, wk){
  const cell = loadIntensityCell(ex, wk);
  if(!cell) return "";
  return effectiveLoadMode(ex) === "percent" ? " @ " + cell : " (" + cell + ")";
}

const LOAD_MODE_FIELD_KEY = {percent: "load", rir: "rir", rpe: "rpe"};
const LOAD_MODE_LABEL = {percent: "% of 1RM", rir: "RIR", rpe: "RPE"};
const LOAD_MODE_PLACEHOLDER = {percent: "70%", rir: "2", rpe: "8"};

// The "Prescribe by" <select> markup + change wiring shared by both the
// single-week and multi-week (week-grid) exercise row layouts below.
function buildLoadModeSelect(ex, mode){
  const select = document.createElement("select");
  select.className = "loadmodeselect";
  select.innerHTML = ["percent", "rir", "rpe", "blank"].map(m => {
    const label = m === "blank" ? "Blank (no reference)" : LOAD_MODE_LABEL[m];
    return `<option value="${m}"${m === mode ? " selected" : ""}>${esc(label)}</option>`;
  }).join("");
  return select;
}

// Per-set logging: "3x9" prescribes 3 sets, so a client gets 3 entry rows
// for that week (reps + weight actually done in each), never fewer -- plus
// "+ Add Set" for a set beyond what was prescribed. `wk.sets` is a free-text
// field (coaches sometimes write ranges like "3-4"), so this reads its
// leading number and falls back to 1 rather than 0 if it can't parse one.
function prescribedSetCount(wk){
  return Math.max(1, parseInt(wk && wk.sets, 10) || 1);
}

// ---------------------------------------------------------------------
// Per-client actual-set logging.
//
// A program's exercises/sets/reps (ex.progression) are the shared
// PRESCRIPTION -- identical for everyone assigned to a group program. What
// each person actually lifted has to live separately per client, or two
// people sharing a program would overwrite each other's logged sets. That
// lives at program.actualsByClient[clientId][exerciseId][weekIndex] = an
// array of {reps, weight} entries, one per set -- completely outside the
// days/progression tree, so logging a workout can never touch the shared
// prescription (and vice versa).
//
// Old single-client programs (saved before this existed) still have their
// logged sets sitting inline at ex.progression[weekIndex].actualSets --
// getClientActuals falls back to reading that legacy spot for a program
// with exactly one assigned client (the only case where "whose data is
// this" is unambiguous), so nobody's history disappears.
// ---------------------------------------------------------------------

function getClientActuals(program, clientId, ex, weekIndex){
  const byClient = program && program.actualsByClient && clientId ? program.actualsByClient[clientId] : null;
  const byEx = byClient && ex && ex.id ? byClient[ex.id] : null;
  const arr = byEx ? byEx[weekIndex] : null;
  if(Array.isArray(arr)) return arr;

  // Legacy fallback -- only when there's no ambiguity about whose data it is.
  const ids = programClientIds(program);
  if(clientId && ids.length === 1 && ids[0] === clientId){
    const wk = ex && ex.progression && ex.progression[weekIndex];
    if(Array.isArray(wk && wk.actualSets)) return wk.actualSets;
    if(wk && (wk.actualReps || wk.actualWeight)) return [{reps: wk.actualReps || "", weight: wk.actualWeight || ""}];
  }
  return [];
}

// Writes one client's logged sets for one exercise/week back onto the
// program object in memory (persisting is the caller's job -- see
// scheduleClientProgramActualsSave). Reassigns each level of the map
// rather than mutating in place, since any of it may still be the
// frozen/read-only object a db snapshot handed back.
function setClientActuals(program, clientId, ex, weekIndex, setsArr){
  const byClient = Object.assign({}, program.actualsByClient || {});
  const byEx = Object.assign({}, byClient[clientId] || {});
  const perWeek = (byEx[ex.id] || []).slice();
  perWeek[weekIndex] = setsArr;
  byEx[ex.id] = perWeek;
  byClient[clientId] = byEx;
  program.actualsByClient = byClient;
}

// Ensures this client has at least the prescribed number of set-entries
// logged for this exercise/week -- the "about to render editable inputs"
// path, so (unlike getClientActuals above) it's expected to migrate a
// legacy entry into the new shape and persist it rather than just reading
// it.
function ensureClientActualSets(program, clientId, ex, weekIndex){
  if(!ex.id) ex.id = rid(); // safety net for any older exercise saved before ids were added
  const wk = ex.progression && ex.progression[weekIndex];
  let arr = getClientActuals(program, clientId, ex, weekIndex);
  const needed = prescribedSetCount(wk);
  if(arr.length < needed){
    const extra = [];
    while(arr.length + extra.length < needed) extra.push({reps: "", weight: ""});
    arr = arr.concat(extra);
  }
  setClientActuals(program, clientId, ex, weekIndex, arr);
  return arr;
}

function hasLoggedAnySetFor(program, clientId, ex, weekIndex){
  return getClientActuals(program, clientId, ex, weekIndex).some(s => s && (s.reps || s.weight));
}

// A compact "Set 1: 9 @ 60kg, Set 2: 8 @ 60kg" readout of what one client
// actually logged for a week -- shared by the client's "Earlier weeks"
// history and the coach's own week-by-week builder grid.
function summarizeLoggedSetsFor(program, clientId, ex, weekIndex){
  return getClientActuals(program, clientId, ex, weekIndex)
    .map((s, idx) => (s && (s.reps || s.weight)) ? `Set ${idx + 1}: ${s.reps || "—"}${s.weight ? " @ " + s.weight : ""}` : null)
    .filter(Boolean)
    .join(", ");
}

// ---------------------------------------------------------------------
// Per-client, per-week exercise swaps.
//
// A client might not have access to whatever's prescribed on a given day
// (no barbell at the hotel gym, say) -- rather than let them silently skip
// it or edit the shared prescription (which every other assigned client
// would then see too), they can swap just their own copy of one exercise
// for ONE specific week. It lives at
// program.swapsByClient[clientId][exerciseId][weekIndex] = a small
// exercise-identity record (exercise/group/sub/plane/pattern/joint/
// primary/secondary) -- the same shape the coach's own swap already writes
// directly onto ex in Program Builder (see buildDayEl's onSwap), just kept
// OUTSIDE the shared days/progression tree and scoped to one week, so:
//  - the coach's prescription is never touched by a client's swap, and
//  - the very next week reverts to whatever's actually prescribed, since
//    there's simply no swap entry for that week until the client swaps
//    again -- exactly the "following week shows the original exercise"
//    behavior asked for.
// ---------------------------------------------------------------------

function getClientSwap(program, clientId, ex, weekIndex){
  const byClient = program && program.swapsByClient && clientId ? program.swapsByClient[clientId] : null;
  const byEx = byClient && ex && ex.id ? byClient[ex.id] : null;
  return (byEx && byEx[weekIndex]) || null;
}

// Writes (or, passed null, clears) one client's swap for one exercise/week.
// Reassigns each level rather than mutating in place, same reasoning as
// setClientActuals -- any of it may still be the frozen object a db
// snapshot handed back.
function setClientSwap(program, clientId, ex, weekIndex, swapRecordOrNull){
  const byClient = Object.assign({}, program.swapsByClient || {});
  const byEx = Object.assign({}, byClient[clientId] || {});
  const perWeek = (byEx[ex.id] || []).slice();
  perWeek[weekIndex] = swapRecordOrNull || null;
  byEx[ex.id] = perWeek;
  byClient[clientId] = byEx;
  program.swapsByClient = byClient;
}

// Persists program.swapsByClient the same three ways scheduleClientProgramActualsSave
// already does for logged sets -- see that function for why each branch
// only ever sends this one client's own slice.
function scheduleClientProgramSwapsSave(program){
  cmSetSaveStatus("Saving…");
  clearTimeout(clientProgSwapsSaveTimer);
  clientProgSwapsSaveTimer = setTimeout(async () => {
    if(!program || !clientSession) return;
    const actingClientId = clientSession.id;
    const isClientViewer = programHasClient(program, actingClientId);
    if(programsCol && !String(program.id).startsWith("local-")){
      const payload = {swapsByClient: program.swapsByClient || {}, updatedAt: new Date().toISOString()};
      try{
        await programsCol.doc(program.id).update(payload);
        cmSetSaveStatus("Saved");
      }catch(e){
        cmSetSaveStatus(isClientViewer ? "Couldn't save — ask your coach to check your access" : "Couldn't save — try again in a moment");
      }
    } else if(isClientViewer && window.__clientPortal && clientSession.accessCode){
      try{
        const mySlice = (program.swapsByClient && program.swapsByClient[actingClientId]) || {};
        await window.__clientPortal.saveProgramSwapsForCode(clientSession.accessCode, program.id, mySlice);
        cmSetSaveStatus("Saved");
      }catch(e){
        console.error("[scheduleClientProgramSwapsSave/client]", e);
        cmSetSaveStatus("Couldn't save — ask your coach to check your access");
      }
    } else {
      const idx = programsCache.findIndex(p => p.id === program.id);
      if(idx > -1) programsCache[idx] = Object.assign({}, programsCache[idx], {swapsByClient: program.swapsByClient || {}});
      cmSetSaveStatus("Saved (this session only)");
    }
  }, 600);
}

// ---------------------------------------------------------------------
// Per-client finished-session log: a dated entry per training day the
// client marks done (see buildSessionSaveBox), holding their overall RPE
// and any notes -- separate from per-exercise set logging above. Lives at
// program.sessionLogsByClient[clientId] = an ARRAY (not keyed by day/week,
// since the same day can genuinely be completed more than once, e.g. a
// missed day made up later) so nothing ever silently overwrites an earlier
// entry. Surfaces back to the coach on this client's own profile page --
// see buildSessionLogHistoryBox.
// ---------------------------------------------------------------------

function addClientSessionLog(program, clientId, entry){
  const byClient = Object.assign({}, program.sessionLogsByClient || {});
  byClient[clientId] = (byClient[clientId] || []).concat([entry]);
  program.sessionLogsByClient = byClient;
}

function scheduleClientProgramSessionLogsSave(program){
  cmSetSaveStatus("Saving…");
  clearTimeout(clientProgSessionLogsSaveTimer);
  clientProgSessionLogsSaveTimer = setTimeout(async () => {
    if(!program || !clientSession) return;
    const actingClientId = clientSession.id;
    const isClientViewer = programHasClient(program, actingClientId);
    if(programsCol && !String(program.id).startsWith("local-")){
      const payload = {sessionLogsByClient: program.sessionLogsByClient || {}, updatedAt: new Date().toISOString()};
      try{
        await programsCol.doc(program.id).update(payload);
        cmSetSaveStatus("Saved");
      }catch(e){
        cmSetSaveStatus(isClientViewer ? "Couldn't save — ask your coach to check your access" : "Couldn't save — try again in a moment");
      }
    } else if(isClientViewer && window.__clientPortal && clientSession.accessCode){
      try{
        const mySlice = (program.sessionLogsByClient && program.sessionLogsByClient[actingClientId]) || [];
        await window.__clientPortal.saveProgramSessionLogsForCode(clientSession.accessCode, program.id, mySlice);
        cmSetSaveStatus("Saved");
      }catch(e){
        console.error("[scheduleClientProgramSessionLogsSave/client]", e);
        cmSetSaveStatus("Couldn't save — ask your coach to check your access");
      }
    } else {
      const idx = programsCache.findIndex(p => p.id === program.id);
      if(idx > -1) programsCache[idx] = Object.assign({}, programsCache[idx], {sessionLogsByClient: program.sessionLogsByClient || {}});
      cmSetSaveStatus("Saved (this session only)");
    }
  }, 600);
}

// A rotating set of short, upbeat confirmations shown right after a client
// saves a finished training day -- picked at random but never the same one
// twice in a row, so it doesn't feel canned after a few sessions.
const SESSION_SAVED_MESSAGES = [
  "Great work! 💪",
  "Another day of getting stronger, done.",
  "Session logged — nice work today.",
  "That's in the bank. Well done!",
  "Consistency like this is what gets results.",
  "Done and dusted — see you next session!",
  "Strong work. Your coach will see this.",
  "Logged! Keep stacking days like this.",
  "Nailed it. On to the next one.",
  "Solid session. Proud of the effort.",
];
let lastSessionMessageIdx = -1;
function randomSessionSavedMessage(){
  if(SESSION_SAVED_MESSAGES.length <= 1) return SESSION_SAVED_MESSAGES[0] || "";
  let idx;
  do { idx = Math.floor(Math.random() * SESSION_SAVED_MESSAGES.length); } while(idx === lastSessionMessageIdx);
  lastSessionMessageIdx = idx;
  return SESSION_SAVED_MESSAGES[idx];
}

// A timestamp-aware sibling of fmtShortDate (which only ever receives plain
// YYYY-MM-DD keys elsewhere in this file) -- session log entries carry a
// full ISO instant, and the coach genuinely benefits from seeing the time
// here, not just the date, since more than one session can land on the
// same day.
function fmtDateTime(iso){
  if(!iso) return "";
  const d = new Date(iso);
  if(isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, {month: "short", day: "numeric"}) + " · " + d.toLocaleTimeString(undefined, {hour: "numeric", minute: "2-digit"});
}

// Client-facing "Suggest weight used based on previously?" toggle -- an
// opt-in hint only, never written back into the shared prescription (that
// stays the coach's call via Apply Progression / Update from Actuals).
// Compares last week's PRESCRIBED reps against what the client actually
// logged (their last working set that week): comfortably beat the target
// reps -> nudge the weight up a bit more, just hit it -> a smaller nudge
// up, fell short -> hold or ease back. Returns null whenever there's
// nothing to go on yet (week 1, or nothing usable logged last week) so the
// caller can fall back to "not enough data yet" rather than a guess.
function suggestedWeightFor(program, clientId, ex, weekIndex, weightUnit){
  if(weekIndex <= 0 || !Array.isArray(ex.progression) || !ex.progression[weekIndex - 1]) return null;
  const prevWeek = ex.progression[weekIndex - 1];
  const loggedSets = getClientActuals(program, clientId, ex, weekIndex - 1).filter(s => s && s.weight && s.reps);
  if(!loggedSets.length) return null;
  const lastSet = loggedSets[loggedSets.length - 1];
  const actualWeight = parseFloat(lastSet.weight);
  const actualReps = parseInt(lastSet.reps, 10);
  if(!actualWeight || !actualReps) return null;
  const prescribedReps = parseInt(prevWeek.reps, 10) || actualReps;
  let factor;
  if(actualReps >= prescribedReps + 2) factor = 1.05;       // comfortably past target -- go up ~5%
  else if(actualReps >= prescribedReps) factor = 1.025;      // hit target -- a smaller ~2.5% nudge
  else if(actualReps >= prescribedReps - 2) factor = 1;      // close but short -- hold steady
  else factor = 0.95;                                        // well short -- ease back ~5%
  const increment = weightUnit === "lb" ? 5 : 2.5;
  const rounded = Math.round((actualWeight * factor) / increment) * increment;
  return rounded > 0 ? rounded : null;
}

// True if any exercise in the program already has manually-set (or previously
// generated) sets/reps/load — used to gate Apply Progression behind a
// confirmation so a hand-tuned week is never silently overwritten.
function hasExistingPrescriptions(program){
  return (program.days||[]).some(day => (day.exercises||[]).some(ex => {
    if(ex.sets || ex.reps || ex.load) return true;
    if(Array.isArray(ex.progression) && ex.progression.some(wk => wk.sets || wk.reps || wk.load)) return true;
    return false;
  }));
}

// Reads each exercise's logged "actual reps / weight used" and adjusts the
// weeks after the last-logged one: a compound lift's actual performance
// re-estimates its 1RM (feeding the shared client stat, if linked, so it
// improves future programs too) and regenerates the remaining weeks off that
// updated number; missing the prescribed reps holds the very next week at
// this week's numbers instead of automatically ramping past a performance
// that didn't hit target. Non-compound exercises get the same hold-on-miss
// treatment without the 1RM math. Weeks up to and including the logged one
// are never touched.
function updateFromActuals(){
  const weeks = weeksCountFor(currentProgram);
  if(weeks <= 1) return;
  const goalProfile = detectGoalProfile(currentProgram.goal);
  const prescribePercent = currentProgram.prescribePercent !== false;
  // With a group program, "actual performance" has to mean ONE specific
  // person's -- the coach's "Referencing progress for" picker (defaults to
  // the only/first assigned client) says whose.
  const refClientId = builderRefClientIdFor(currentProgram);
  const linkedClient = refClientId ? clientsCache.find(c => c.id === refClientId) : null;

  (currentProgram.days||[]).forEach(day => (day.exercises||[]).forEach(ex => {
    if(!Array.isArray(ex.progression) || !ex.progression.length) return;

    // Find the last week with at least one logged set.
    let w = -1;
    for(let i=0; i<ex.progression.length; i++){
      if(hasLoggedAnySetFor(currentProgram, refClientId, ex, i)) w = i;
    }
    if(w === -1 || w >= weeks - 1) return;

    const wk = ex.progression[w];
    // Progressive overload reads off the LAST logged set that week -- for a
    // straight-sets prescription that's the final working set, which best
    // reflects whether the prescribed weight is still challenging enough.
    const loggedSets = getClientActuals(currentProgram, refClientId, ex, w).filter(s => s && (s.reps || s.weight));
    const lastSet = loggedSets[loggedSets.length - 1] || {};
    const actualReps = parseInt(lastSet.reps, 10);
    const actualWeight = parseFloat(lastSet.weight);
    const prescribedReps = parseInt(wk.reps, 10);
    const hitTarget = !prescribedReps || (actualReps >= prescribedReps);
    const role = exerciseRole(ex);

    if(role === "compound" && actualReps && actualWeight){
      const newOneRM = estimate1RM(actualWeight, actualReps);
      const target = linkedClient || currentProgram;
      if(newOneRM){
        target.liftStats = (target.liftStats || []).filter(s => s.exercise !== ex.exercise);
        target.liftStats.push({id: rid(), exercise: ex.exercise, reps: String(actualReps), weight: String(actualWeight), oneRM: newOneRM});
        if(linkedClient) scheduleClientSave(linkedClient); else scheduleSave();
      }
      const statsMap = liftStatsMap(target);
      const fresh = generateProgressionForExercise(ex, weeks, goalProfile, statsMap, prescribePercent);
      for(let i = w + 1; i < weeks; i++) ex.progression[i] = fresh[i];
    }

    if(!hitTarget && ex.progression[w + 1]){
      // Missed the prescribed reps -- hold the next week rather than ramping
      // past a performance that didn't hit target.
      ex.progression[w + 1] = {sets: wk.sets, reps: wk.reps, load: wk.load, rpe: wk.rpe};
    }

    ex.sets = ex.progression[0].sets; ex.reps = ex.progression[0].reps; ex.load = ex.progression[0].load; ex.rpe = ex.progression[0].rpe;
  }));
  renderEditor();
  scheduleSave();
}

// Wires the Apply Progression button with a "click again to confirm" guard —
// mirrors wireDeleteBtn's two-step pattern — but only when it would actually
// overwrite existing prescriptions; a fresh/empty program applies immediately.
function wireApplyProgressionBtn(btn, onApply){
  const baseLabel = btn.textContent;
  let armed = false;
  let resetTimer = null;
  btn.addEventListener("click", () => {
    if(!armed && hasExistingPrescriptions(currentProgram)){
      armed = true;
      btn.textContent = "Click again to overwrite existing sets/reps";
      btn.classList.add("confirming");
      resetTimer = setTimeout(() => { armed = false; btn.textContent = baseLabel; btn.classList.remove("confirming"); }, 3000);
      return;
    }
    clearTimeout(resetTimer);
    armed = false;
    btn.textContent = baseLabel;
    btn.classList.remove("confirming");
    onApply();
  });
}

/** Program Builder's exercise row: like buildExRow, but week-aware. With a
 *  single-week program it looks identical to the plain sets/reps/load row;
 *  with multiple weeks it shows one column per week. */
function buildProgExRow(ex, program, onChange, onRemove, onSwap){
  const weeks = weeksCountFor(program);
  const row = document.createElement("div");
  row.className = "exrow";

  const topHtml = `
    <div class="exrow-top">
      <div class="exname">${esc(ex.exercise)}
        <div class="tagrow">
          <span class="tag">${esc(ex.group)} — ${esc(ex.sub)}</span>
          <span class="tag">${esc(ex.plane)}</span>
          <span class="tag">${esc(ex.pattern)}</span>
        </div>
      </div>
      <div class="exrow-actions">
        ${onSwap ? '<button class="exswap" title="Swap for a different exercise" type="button">⇄ Swap</button>' : ""}
        <button class="exremove" title="Remove exercise" type="button">✕</button>
      </div>
    </div>
  `;

  const mode = effectiveLoadMode(ex);

  if(weeks <= 1){
    const fieldKey = LOAD_MODE_FIELD_KEY[mode]; // undefined for "blank" -- no field shown then
    row.innerHTML = topHtml + `
      <div class="exrow-fields">
        <div class="exfield narrow"><label>Sets</label><input type="text" data-f="sets" value="${esc(ex.sets||"")}" placeholder="4"></div>
        <div class="exfield narrow"><label>Reps</label><input type="text" data-f="reps" value="${esc(ex.reps||"")}" placeholder="8"></div>
        <div class="exfield narrow loadmodefield"><label>Prescribe by</label></div>
        ${fieldKey ? `<div class="exfield narrow"><label>${esc(LOAD_MODE_LABEL[mode])}</label><input type="text" data-f="${fieldKey}" value="${esc(ex[fieldKey]||"")}" placeholder="${esc(LOAD_MODE_PLACEHOLDER[mode])}"></div>` : `<div class="exfield narrow loadmodeblank"><label>&nbsp;</label><span class="loadmodeblanknote">No reference — client's own judgement</span></div>`}
        <div class="exfield notes"><label>Notes</label><input type="text" data-f="notes" value="${esc(ex.notes||"")}" placeholder="e.g. safety squat bar, tempo 3-1-1, cue: chest up"></div>
      </div>
    `;
    // Inserted as a real element (not raw HTML) so its change handler can
    // be wired directly, same as every other control on this row.
    const prescribeByWrap = row.querySelector(".loadmodefield");
    const select = buildLoadModeSelect(ex, mode);
    prescribeByWrap.appendChild(select);
    select.addEventListener("change", () => {
      ex.loadMode = select.value;
      onChange();
      renderEditor(); // rebuild so the right single field (or blank note) shows
    });

    row.querySelectorAll("input[data-f]").forEach(inp => {
      inp.addEventListener("input", () => {
        ex[inp.dataset.f] = inp.value;
        if(Array.isArray(ex.progression) && ex.progression[0] && inp.dataset.f !== "notes"){
          ex.progression[0][inp.dataset.f] = inp.value;
        }
        onChange();
      });
    });
  } else {
    const prog = progressionOf(ex, weeks);
    // A group program shares one prescription but each client logs their
    // own sets -- this read-only column can only show one person's log at
    // a time, so it follows whichever client the "Referencing progress
    // for" picker above has selected (defaults to the only/first one).
    const refClientId = builderRefClientIdFor(program);
    const fieldKey = LOAD_MODE_FIELD_KEY[mode]; // undefined for "blank"
    row.innerHTML = topHtml + `
      <div class="exrow-fields">
        <div class="exfield narrow loadmodefield"><label>Prescribe by</label></div>
      </div>
      <div class="weekgrid">
        <div class="weekcol weekcol-label">
          <div class="weeklabel">&nbsp;</div>
          <div class="rowlabel">Sets</div>
          <div class="rowlabel">Reps</div>
          ${fieldKey ? `<div class="rowlabel">${esc(LOAD_MODE_LABEL[mode])}</div>` : ""}
          <div class="rowdivider"></div>
          <div class="rowlabel actual">Logged</div>
        </div>
        ${prog.map((wk, i) => `
          <div class="weekcol">
            <div class="weeklabel">Week ${i+1}</div>
            <input type="text" data-wf="sets" data-wi="${i}" value="${esc(wk.sets||"")}" placeholder="Sets">
            <input type="text" data-wf="reps" data-wi="${i}" value="${esc(wk.reps||"")}" placeholder="Reps">
            ${fieldKey ? `<input type="text" data-wf="${fieldKey}" data-wi="${i}" value="${esc(wk[fieldKey]||"")}" placeholder="${esc(LOAD_MODE_LABEL[mode])}">` : ""}
            <div class="rowdivider"></div>
            <div class="actualsummary" title="Logged per set by the client -- open Preview Client View to see or edit the full breakdown">${esc(summarizeLoggedSetsFor(program, refClientId, ex, i) || "—")}</div>
          </div>
        `).join("")}
      </div>
      <div class="exrow-fields">
        <div class="exfield notes" style="flex:1 1 100%;"><label>Notes</label><input type="text" data-f="notes" value="${esc(ex.notes||"")}" placeholder="e.g. safety squat bar, tempo 3-1-1, cue: chest up"></div>
      </div>
    `;
    const prescribeByWrap = row.querySelector(".loadmodefield");
    const select = buildLoadModeSelect(ex, mode);
    prescribeByWrap.appendChild(select);
    select.addEventListener("change", () => {
      ex.loadMode = select.value;
      onChange();
      renderEditor();
    });

    row.querySelectorAll("[data-wf]").forEach(inp => {
      inp.addEventListener("input", () => {
        const i = parseInt(inp.dataset.wi, 10);
        prog[i][inp.dataset.wf] = inp.value;
        if(i === 0) ex[inp.dataset.wf] = inp.value;
        onChange();
      });
    });
    row.querySelector('[data-f="notes"]').addEventListener("input", e => { ex.notes = e.target.value; onChange(); });
  }

  row.querySelector(".exremove").addEventListener("click", onRemove);
  if(onSwap) wireSwapButton(row, row.querySelector(".exswap"), ex, onSwap);
  return row;
}

function buildDayEl(day){
  const box = document.createElement("div");
  box.className = "day";

  const head = document.createElement("div");
  head.className = "day-head";
  head.innerHTML = `
    <input class="dayinput" value="${esc(day.label||"")}" placeholder="Day label">
    <button class="daydupe" title="Duplicate this day" type="button">⧉</button>
    <button class="exremove" title="Remove day" type="button">✕</button>
  `;
  head.querySelector(".dayinput").addEventListener("input", e => { day.label = e.target.value; scheduleSave(); });
  head.querySelector(".daydupe").addEventListener("click", () => {
    const copy = {
      id: rid(),
      label: (day.label || "Day") + " (copy)",
      exercises: (day.exercises || []).map(ex => Object.assign({}, JSON.parse(JSON.stringify(ex)), {id: rid()})),
    };
    const idx = currentProgram.days.findIndex(d => d.id === day.id);
    currentProgram.days.splice(idx + 1, 0, copy);
    renderEditor(); scheduleSave();
  });
  head.querySelector(".exremove").addEventListener("click", () => {
    currentProgram.days = currentProgram.days.filter(d => d.id !== day.id);
    renderEditor(); scheduleSave();
  });
  box.appendChild(head);

  (day.exercises || []).forEach(ex => box.appendChild(buildProgExRow(
    ex, currentProgram,
    () => scheduleSave(),
    () => { day.exercises = (day.exercises||[]).filter(e => e.id !== ex.id); renderEditor(); scheduleSave(); },
    (rec) => {
      ex.exercise = rec.exercise; ex.group = rec.group; ex.sub = rec.sub; ex.plane = rec.plane;
      ex.pattern = rec.pattern; ex.joint = rec.joint; ex.primary = rec.primary; ex.secondary = rec.secondary;
      ex.notes = "";
      renderEditor();
      scheduleSave();
    }
  )));

  const addBox = document.createElement("div");
  addBox.className = "addex";
  addBox.innerHTML = `<input type="text" placeholder="+ Add exercise from the library…" autocomplete="off">`;
  const input = addBox.querySelector("input");
  let resultsEl = null;
  const closeResults = () => { if(resultsEl){ resultsEl.remove(); resultsEl = null; } };
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    closeResults();
    if(!q) return;
    const matches = DATA.filter(r => (r.exercise+" "+r.group+" "+r.sub).toLowerCase().includes(q)).slice(0, 8);
    resultsEl = document.createElement("div");
    resultsEl.className = "addex-results";
    if(!matches.length){
      resultsEl.innerHTML = '<div class="addex-item" style="color:var(--ink-dim)">No matches</div>';
    } else {
      matches.forEach(m => {
        const item = document.createElement("div");
        item.className = "addex-item";
        item.innerHTML = `<div>${esc(m.exercise)}</div><div class="tagrow"><span class="tag">${esc(m.group)} — ${esc(m.sub)}</span><span class="tag">${esc(m.plane)}</span></div>`;
        item.addEventListener("mousedown", ev => {
          ev.preventDefault();
          // Reassign the whole array rather than pushing onto whatever was
          // already there -- day.exercises can be a read-only/frozen array
          // straight from a db snapshot, and .push() throws on those.
          day.exercises = (day.exercises || []).concat([{
            id: rid(), exercise: m.exercise, group: m.group, sub: m.sub, plane: m.plane,
            pattern: m.pattern, joint: m.joint, primary: m.primary, secondary: m.secondary,
            sets: "", reps: "", load: "", rpe: "", rir: "", loadMode: "", notes: "",
          }]);
          input.value = "";
          closeResults();
          renderEditor();
          scheduleSave();
        });
        resultsEl.appendChild(item);
      });
    }
    addBox.appendChild(resultsEl);
  });
  input.addEventListener("blur", () => setTimeout(closeResults, 150));
  box.appendChild(addBox);

  return box;
}

// Builds the printable HTML for a program: one table per day, one column
// per week when the program is multi-week. Populated into #printArea right
// before window.print() is called, since a published Artifact page can't
// reliably open a separate print window.
function buildPrintHTML(program, client){
  const weeks = weeksCountFor(program);
  let h = `<h1>${esc(program.name || "Untitled Program")}</h1>`;
  const metaBits = [];
  if(client && client.name) metaBits.push("Client: " + client.name);
  if(program.goal) metaBits.push("Goal: " + program.goal);
  metaBits.push((weeks > 1 ? weeks + "-week program" : "1-week program"));
  h += `<div class="printmeta">${esc(metaBits.join(" · "))}</div>`;
  (program.days || []).forEach(day => {
    h += `<h2>${esc(day.label || "Day")}</h2>`;
    h += "<table><thead><tr><th>Exercise</th><th>Pattern</th>";
    if(weeks > 1){
      for(let i=0; i<weeks; i++) h += `<th>Week ${i+1}</th>`;
    } else {
      h += "<th>Sets</th><th>Reps</th><th>Load</th>";
    }
    h += "<th>Notes</th></tr></thead><tbody>";
    (day.exercises || []).forEach(ex => {
      h += `<tr><td>${esc(ex.exercise)}</td><td>${esc(ex.group)} — ${esc(ex.sub)}</td>`;
      if(weeks > 1){
        const prog = Array.isArray(ex.progression) && ex.progression.length === weeks ? ex.progression : progressionOf(ex, weeks);
        for(let i=0; i<weeks; i++){
          const wk = prog[i] || {};
          const cell = loadIntensityCell(ex, wk);
          h += `<td>${esc(wk.sets||"")} × ${esc(wk.reps||"")}${cell ? ", " + esc(cell) : ""}</td>`;
        }
      } else {
        h += `<td>${esc(ex.sets||"")}</td><td>${esc(ex.reps||"")}</td><td>${esc(loadIntensityCell(ex, ex))}</td>`;
      }
      h += `<td>${esc(ex.notes||"")}</td></tr>`;
    });
    h += "</tbody></table>";
  });
  return h;
}

function buildAutoBuildForm(){
  const wrap = document.createElement("div");
  wrap.className = "editor";
  wrap.innerHTML = `
    <div class="editor-head">
      <div style="font-family:'Oswald',sans-serif; text-transform:uppercase; letter-spacing:.04em; font-size:20px;">Auto-Build a Program</div>
    </div>
    <div style="font-size:13px; color:var(--ink-dim); margin:-6px 0 18px; max-width:640px;">
      Describe the client and Claude will draft a starting program using exercises from the exercise library. The result opens in the normal editor below so you can adjust sets, reps, load and notes exactly as you would any other program.
    </div>
    <div class="abform-row">
      <div class="abform-field"><label>Client name</label><input type="text" id="abClientName" placeholder="e.g. Jordan Reid"></div>
      <div class="abform-field narrow"><label>Days per week</label><input type="number" id="abDays" min="1" max="7" value="3"></div>
      <div class="abform-field narrow"><label>Minutes per session</label><input type="number" id="abMinutes" min="15" max="180" step="5" value="60"></div>
      <div class="abform-field narrow"><label>Length (weeks)</label><input type="number" id="abWeeks" min="1" max="24" value="4"></div>
    </div>
    <div class="abform-row">
      <div class="abform-field"><label>Primary goal(s)</label><textarea id="abGoals" placeholder="e.g. Build to a new back squat 1RM over the block"></textarea></div>
    </div>
    <div class="abform-row">
      <div class="abform-field"><label>Notes, needs &amp; restrictions</label><textarea id="abNotes" placeholder="e.g. Recovering from a mild hamstring strain, dumbbell/bodyweight only, no Olympic lifts"></textarea></div>
    </div>
    <div class="abform-actions">
      <button class="generatebtn" id="abGenerateBtn" type="button">Generate Program</button>
      <button class="iconbtn" id="abCancelBtn" type="button">Cancel</button>
      <div class="abstatus" id="abStatus"></div>
    </div>
  `;
  wrap.querySelector("#abCancelBtn").addEventListener("click", () => {
    showAutoBuildForm = false;
    renderEditor();
  });
  wrap.querySelector("#abGenerateBtn").addEventListener("click", () => runAutoBuild(wrap));
  return wrap;
}

async function runAutoBuild(formEl){
  const btn = formEl.querySelector("#abGenerateBtn");
  const cancelBtn = formEl.querySelector("#abCancelBtn");
  const statusEl = formEl.querySelector("#abStatus");
  const oldErr = formEl.querySelector(".aberror");
  if(oldErr) oldErr.remove();

  const clientName = formEl.querySelector("#abClientName").value.trim();
  const daysPerWeek = Math.max(1, Math.min(7, parseInt(formEl.querySelector("#abDays").value, 10) || 3));
  const minutesPerSession = Math.max(15, parseInt(formEl.querySelector("#abMinutes").value, 10) || 60);
  const weeksVal = Math.max(1, Math.min(24, parseInt(formEl.querySelector("#abWeeks").value, 10) || 1));
  const goals = formEl.querySelector("#abGoals").value.trim();
  const notes = formEl.querySelector("#abNotes").value.trim();

  const showError = msg => {
    btn.disabled = false;
    statusEl.innerHTML = "";
    const err = document.createElement("div");
    err.className = "aberror";
    err.textContent = msg;
    formEl.appendChild(err);
  };

  const sample = await getSample();
  if(!sample){
    showError("Auto-build isn't available in this preview — open the published page itself to generate a program.");
    return;
  }

  btn.disabled = true;
  if(cancelBtn) cancelBtn.disabled = true;
  statusEl.innerHTML = '<span class="spinner"></span> Drafting a program…';

  // Rough exercises-per-day target from session length (~7 min per exercise incl. rest/setup)
  const targetPerDay = Math.max(3, Math.min(10, Math.round(minutesPerSession / 7)));

  const libraryForPrompt = DATA.map(r => ({
    exercise: r.exercise, group: r.group, sub: r.sub, plane: r.plane, pattern: r.pattern, primary: r.primary
  }));

  const prompt = `You are an expert strength & conditioning coach building a training program using ONLY exercises from the supplied library.

CLIENT
Name: ${clientName || "(not given)"}
Primary goal(s): ${goals || "(not given)"}
Notes / needs / restrictions: ${notes || "(none given)"}

PROGRAM PARAMETERS
Days per week: ${daysPerWeek}
Minutes per session: ${minutesPerSession}
Program length: ${weeksVal} week${weeksVal === 1 ? "" : "s"}
Target exercises per day: approximately ${targetPerDay}

EXERCISE LIBRARY (JSON array — you may ONLY select exercises that appear in this list, matched EXACTLY by "exercise" and "sub"):
${JSON.stringify(libraryForPrompt)}

INSTRUCTIONS
- Build a ${daysPerWeek}-day program with a short descriptive label per day (e.g. "Day 1 — Lower Body Strength"). This same set of days repeats every week of the ${weeksVal}-week block — you do not need to change exercises week to week; week-to-week progressive overload (sets/reps/load stepping toward the goal) is applied automatically afterward, so just pick the right exercises for each day.
- For each day, choose around ${targetPerDay} exercises from the library that fit together and serve the stated goals.
- Respect the restrictions and notes strictly. Never include an exercise that conflicts with a stated injury, restriction, or equipment limitation.
- Copy each chosen exercise's "exercise" and "sub" fields EXACTLY as they appear in the library — do not invent, rename, translate, or reword them.
- Suggest reasonable STARTING (week 1) sets and reps as short strings (e.g. "4" and "8", or "3" and "10-12") appropriate to the goal. Add a short note only when genuinely useful (e.g. a coaching cue or tempo). Leave load blank.
- Vary the exercise selection across days rather than repeating the same ones every day, unless the goal specifically calls for repeated skill work.
- Respond with ONLY JSON, no commentary, matching exactly this shape:
{"programName": string, "days": [{"label": string, "exercises": [{"exercise": string, "sub": string, "sets": string, "reps": string, "notes": string}]}]}`;

  let result;
  try{
    result = await sample.json(prompt, {modelTier: "complex"});
  }catch(e){
    showError("Couldn't generate a program right now (" + (e && e.code ? e.code : "error") + "). " + (e && e.text ? "" : "Try again in a moment."));
    return;
  }

  // Validate against the real library — drop anything hallucinated rather than trusting it blindly.
  const exactLookup = new Map();
  DATA.forEach(r => exactLookup.set(r.exercise + "|||" + r.sub, r));
  const nameOnlyLookup = new Map();
  DATA.forEach(r => { if(!nameOnlyLookup.has(r.exercise)) nameOnlyLookup.set(r.exercise, r); });

  const days = (result && Array.isArray(result.days) ? result.days : []).map((d, i) => {
    const exercises = (Array.isArray(d.exercises) ? d.exercises : []).map(sx => {
      const rec = exactLookup.get(String(sx.exercise||"") + "|||" + String(sx.sub||"")) || nameOnlyLookup.get(String(sx.exercise||""));
      if(!rec) return null;
      return {
        id: rid(), exercise: rec.exercise, group: rec.group, sub: rec.sub, plane: rec.plane,
        pattern: rec.pattern, joint: rec.joint, primary: rec.primary, secondary: rec.secondary,
        sets: String(sx.sets||""), reps: String(sx.reps||""), load: "", rpe: "", notes: String(sx.notes||""),
      };
    }).filter(Boolean);
    return {id: rid(), label: (d.label || ("Day " + (i+1))), exercises};
  }).filter(d => d.exercises.length);

  if(!days.length){
    showError("The draft came back empty after matching against the library. Try adjusting the goals or notes and generate again.");
    return;
  }

  // Link (or create) a client profile from the name given above, so this
  // program shares lifting stats with that same client's other programs
  // instead of starting stat-less every time.
  let linkedClient = null;
  if(clientName){
    linkedClient = clientsCache.find(c => (c.name||"").toLowerCase() === clientName.toLowerCase()) || null;
    if(!linkedClient){
      const cnow = new Date().toISOString();
      const cdata = {name: clientName, goals: "", liftStats: [], weightUnit: "kg", notes: "", accessCode: genAccessCode(), tasks: [], createdAt: cnow, updatedAt: cnow};
      if(clientsCol){
        try{
          const cref = await clientsCol.add(cdata);
          linkedClient = Object.assign({id: cref.id}, cdata);
        }catch(e){
          linkedClient = Object.assign({id: "local-" + rid()}, cdata);
          clientsCache.unshift(linkedClient);
        }
      } else {
        linkedClient = Object.assign({id: "local-" + rid()}, cdata);
        clientsCache.unshift(linkedClient);
      }
    }
  }

  // Apply goal-driven progressive overload across the block: compound lifts get
  // a real intensity/rep scheme toward the stated goal (using the linked
  // client's logged lifts for actual-weight %1RM when available), everything
  // else gets a gentle volume nudge starting from Claude's suggested sets/reps.
  const goalProfile = detectGoalProfile(goals);
  const statsMap = linkedClient ? liftStatsMap(linkedClient) : null;
  days.forEach(d => d.exercises.forEach(ex => {
    ex.progression = generateProgressionForExercise(ex, weeksVal, goalProfile, statsMap);
    ex.sets = ex.progression[0].sets; ex.reps = ex.progression[0].reps; ex.load = ex.progression[0].load; ex.rpe = ex.progression[0].rpe;
  }));

  const now = new Date().toISOString();
  const progName = (result && result.programName) || (clientName ? clientName + "'s Program" : "Auto-Built Program");
  const data = {name: progName, days, weeks: weeksVal, goal: goals, coachNotes: notes, clientIds: linkedClient ? [linkedClient.id] : [], createdAt: now, updatedAt: now};
  showAutoBuildForm = false;

  if(!programsCol){
    const id = "local-" + rid();
    const rec = Object.assign({id}, data);
    programsCache.unshift(rec);
    currentId = id; currentProgram = JSON.parse(JSON.stringify(rec));
    renderProgramList(); renderEditor();
    return;
  }
  try{
    const ref = await programsCol.add(data);
    currentId = ref.id;
    currentProgram = Object.assign({id: ref.id}, data);
    renderProgramList(); renderEditor();
  }catch(e){
    const id = "local-" + rid();
    currentId = id;
    currentProgram = Object.assign({id}, data);
    programsCache.unshift(currentProgram);
    renderProgramList(); renderEditor();
    flashNote("Program was drafted but couldn't be saved (" + e.code + "). It's open below — duplicate or edit it to retry saving.");
  }
}

// Debounced save for a client record — mirrors scheduleSave()/scheduleCaseSave()
// but writes to the shared `clients` collection so stats logged from either
// tab carry over to the other. Keyed PER CLIENT ID (not one shared timer) so
// editing client A and then quickly clicking over to client B doesn't cancel
// client A's still-pending save -- that was a real bug: a single shared
// timer meant switching clients while an edit was still debounced silently
// dropped the earlier edit with no error and no visible sign anything was
// wrong, which is exactly what "the button doesn't seem to do anything"
// looks like from the outside.
function cmSetSaveStatus(text){
  // Updates whichever save-status badge is actually on screen right now --
  // the coach's own client profile page, or the client's own portal view.
  const el = document.getElementById("cmSaveStatus");
  if(el) el.textContent = text;
  const el2 = document.getElementById("clientSaveStatus");
  if(el2) el2.textContent = text;
}

function scheduleClientSave(client){
  cmSetSaveStatus("Saving…");
  const id = client.id;
  clientSavePendingIds[id] = true;
  clearTimeout(clientSaveTimers[id]);
  // Two edits to the same client close together (e.g. renaming them, then
  // adding a task moments later) each get their own debounce timer, but the
  // FIRST one's network write can still be in flight -- awaiting the mocked
  // or real round-trip -- when the second one's write kicks off. Whichever
  // finishes first must not tell the guard "nothing is saving anymore" while
  // the other is still out there; that gap is exactly when a background
  // snapshot could show stale data. A per-client version counter, bumped on
  // every call and checked before clearing, makes only the LATEST call's
  // completion actually clear the pending flag.
  const myVersion = (clientSaveVersion[id] = (clientSaveVersion[id] || 0) + 1);
  clientSaveTimers[id] = setTimeout(async () => {
    if(!client) return;
    const payload = {
      name: client.name || "", goals: client.goals || "", liftStats: client.liftStats || [],
      weightUnit: client.weightUnit || "kg", notes: client.notes || "",
      accessCode: client.accessCode || "", tasks: client.tasks || [],
      age: client.age || "", sex: client.sex || "", heightValue: client.heightValue || "",
      heightUnit: client.heightUnit || "cm", bodyWeight: client.bodyWeight || "",
      activityLevel: client.activityLevel || "moderate", nutritionGoal: client.nutritionGoal || "maintain",
      dietPrefs: client.dietPrefs || "",
      // These four were each added by later features (weekly goals, the
      // Daily Agenda's per-day notes and training-day schedule, and the
      // Body Weight Tracker) without adding them here -- since this payload
      // is an explicit whitelist, not a spread of the whole client object,
      // anything left out of it is simply never written to the real
      // database, no matter how many times it's "saved" locally. The
      // in-memory edit still shows immediately (renderClientProfile reads
      // the same mutated object back out of clientsCache), which is exactly
      // why this went unnoticed until a background snapshot rebuilt
      // clientsCache from what's actually in the database and the
      // unsaved-in-truth change reverted -- "shows logged, then disappears."
      weeklyGoals: client.weeklyGoals || [], agendaNotes: client.agendaNotes || {},
      trainingSchedule: client.trainingSchedule || {}, weightLog: client.weightLog || [],
      // Body Metrics' measurements log (waist/chest/hips/thigh/arm, dated,
      // canonical cm) and its own cm/in display toggle -- same pattern as
      // weightLog/weightUnit just above.
      measurementLog: client.measurementLog || [], measurementUnit: client.measurementUnit || "cm",
      // First/last name, collected on the Squad tab so the client's own
      // "Welcome" header can greet them by first name only (see
      // firstNameOf) -- client.name stays the combined full name, kept in
      // sync automatically, since dozens of other places still display it.
      firstName: client.firstName || "", lastName: client.lastName || "",
      // Whether the coach has tucked this client's message thread into the
      // Archived section -- coach-only bookkeeping, never read or shown on
      // the client's own side.
      messagesArchived: !!client.messagesArchived,
      // A dated snapshot of "goals" is appended here every time it changes
      // (see appendGoalsLogEntry) -- goals itself is already in this
      // whitelist above, this just keeps a running history of it so both
      // the client and the coach can see how the stated goal has evolved,
      // not just what it currently says.
      goalsLog: client.goalsLog || [],
      // Set automatically when a client joins via the Stripe payment link
      // (see api/stripe-webhook.js) so the "Resend access code by email"
      // button on this profile knows where to send it; editable here too,
      // for a client you added by hand and want to be able to email later.
      email: client.email || "",
      // Captured on the reorganized Client Profile's "Contact & Personal
      // Info" pill -- not read anywhere yet (no automated birthday message
      // exists), just stored so it's there once that gets built.
      birthday: client.birthday || "",
      // The client's own opt-in toggle on their program view (see
      // buildClientProgramCard) -- purely a display preference, never
      // touches the coach's actual prescription.
      suggestWeightFromPrevious: !!client.suggestWeightFromPrevious,
      // What the client is allowed to see under The Road Map (see
      // renderClientProfile's "Client View Access" toggles and the gating in
      // renderClientModeView) -- defaults to everything on.
      visibility: client.visibility || {training: true, rehab: true, nutrition: true},
      updatedAt: new Date().toISOString(),
    };
    try{
      const isClientViewer = clientSession && clientSession.id === client.id;
      if(clientsCol && !String(client.id).startsWith("local-")){
        // The COACH's own browser, with real db access -- used both when
        // she edits a client directly and (belt-and-suspenders) if she's
        // ever previewing a client from her own logged-in session.
        try{
          await clientsCol.doc(client.id).update(payload);
          cmSetSaveStatus("Saved");
        }catch(e){
          cmSetSaveStatus(isClientViewer ? "Couldn't save — ask your coach to check your access" : "Couldn't save — try again in a moment");
        }
      } else if(isClientViewer && window.__clientPortal && client.accessCode){
        // A logged-in CLIENT, saving their own data. They never hold a
        // Supabase session (see tryClientLogin), so this goes through the
        // access-code-checked RPC instead of the coach's db shim.
        try{
          await window.__clientPortal.saveClientPatch(client.accessCode, payload);
          cmSetSaveStatus("Saved");
        }catch(e){
          console.error("[scheduleClientSave/client]", e);
          cmSetSaveStatus("Couldn't save — ask your coach to check your access");
        }
      } else {
        const idx = clientsCache.findIndex(x => x.id === client.id);
        if(idx > -1) clientsCache[idx] = Object.assign({}, clientsCache[idx], payload);
        cmSetSaveStatus("Saved (this session only)");
      }
    } finally {
      // Only clear the guard if nothing newer has re-armed it in the
      // meantime (a fresh edit while this save was in flight schedules its
      // own timer, bumps clientSaveVersion, and will clear the guard itself
      // when IT finishes) -- otherwise an older, slower save finishing after
      // a newer one started would incorrectly signal "fully saved" while
      // the newer edit is still mid-flight.
      if(clientSavePendingIds[id] && clientSaveVersion[id] === myVersion) delete clientSavePendingIds[id];
    }
  }, 600);
}

/** Reusable client picker: shows a chip + "Change" once a client is linked,
 *  otherwise a search box (matching against clientsCache by name) plus a
 *  "+ Create as new client" option. Used by both Program Builder and Rehab
 *  so the same person's record — and their logged lifting stats — is shared
 *  across both tabs instead of re-entered per program/case.
 *  onSelect(client) is called with the chosen/created client record, or
 *  null when the viewer unlinks via the chip's ✕. */
function buildClientPicker(selectedId, onSelect){
  const wrap = document.createElement("div");
  wrap.className = "clientpicker";
  const client = selectedId ? clientsCache.find(c => c.id === selectedId) : null;

  function renderLinked(){
    wrap.innerHTML = `
      <span class="clientchip">👤 ${esc(client.name || "Unnamed client")}</span>
      <button class="clientchange" type="button">Change</button>
      <button class="clientunlink" title="Unlink client" type="button">✕</button>
    `;
    wrap.querySelector(".clientchange").addEventListener("click", renderPicker);
    wrap.querySelector(".clientunlink").addEventListener("click", () => onSelect(null));
  }

  function renderPicker(){
    wrap.innerHTML = `<input type="text" class="clientsearch" placeholder="Link a client to share lifting stats…" autocomplete="off">`;
    const input = wrap.querySelector(".clientsearch");
    let resultsEl = null;
    const closeResults = () => { if(resultsEl){ resultsEl.remove(); resultsEl = null; } };
    // Shows every client when the box is empty (clicking in should show a
    // pickable list right away, not require typing a name first) --
    // narrows to matches once she types. Mirrors buildProgramClientPicker's
    // own showResults above, so linking a client to a rehab case or
    // nutrition plan works the same way as assigning one to a program.
    const showResults = () => {
      const q = input.value.trim().toLowerCase();
      closeResults();
      const matches = (q ? clientsCache.filter(c => (c.name||"").toLowerCase().includes(q)) : clientsCache).slice(0, 8);
      resultsEl = document.createElement("div");
      resultsEl.className = "addex-results";
      if(!matches.length && !q){
        const empty = document.createElement("div");
        empty.className = "addex-item";
        empty.style.opacity = "0.6";
        empty.style.cursor = "default";
        empty.textContent = "No clients yet — type a name to create one";
        resultsEl.appendChild(empty);
      }
      matches.forEach(m => {
        const item = document.createElement("div");
        item.className = "addex-item";
        item.textContent = m.name;
        item.addEventListener("mousedown", ev => { ev.preventDefault(); closeResults(); onSelect(m); });
        resultsEl.appendChild(item);
      });
      if(q){
        const createItem = document.createElement("div");
        createItem.className = "addex-item";
        createItem.style.color = "var(--accent)";
        createItem.textContent = `+ Create "${input.value.trim()}" as new client`;
        createItem.addEventListener("mousedown", async ev => {
          ev.preventDefault();
          closeResults();
          const now = new Date().toISOString();
          const data = {name: input.value.trim(), goals: "", liftStats: [], weightUnit: "kg", notes: "", accessCode: genAccessCode(), tasks: [], createdAt: now, updatedAt: now};
          if(clientsCol){
            try{
              const ref = await clientsCol.add(data);
              onSelect(Object.assign({id: ref.id}, data));
            }catch(e){
              const id = "local-" + rid();
              const rec = Object.assign({id}, data);
              clientsCache.unshift(rec);
              onSelect(rec);
            }
          } else {
            const id = "local-" + rid();
            const rec = Object.assign({id}, data);
            clientsCache.unshift(rec);
            onSelect(rec);
          }
        });
        resultsEl.appendChild(createItem);
      }
      wrap.appendChild(resultsEl);
    };
    input.addEventListener("focus", showResults);
    input.addEventListener("input", showResults);
    input.addEventListener("blur", () => setTimeout(closeResults, 150));
  }

  if(client) renderLinked(); else renderPicker();
  return wrap;
}

/** Program Builder's client picker: unlike buildClientPicker above (one
 *  client per rehab case / nutrition plan), a training program can be
 *  assigned to several clients at once -- a group program. Everyone
 *  assigned sees the exact same exercises/sets/reps prescription, but each
 *  logs their own reps/weight and keeps their own PBs, kept apart by
 *  program.actualsByClient (see getClientActuals et al.) so they never
 *  overwrite each other. Shows a chip per assigned client (✕ to remove)
 *  plus a search box to add another -- onChange(newClientIdsArray) fires on
 *  every add/remove. */
function buildProgramClientPicker(program, onChange){
  const wrap = document.createElement("div");
  wrap.className = "clientpicker multiclientpicker";

  function currentClients(){
    // Filter out any id that no longer resolves to a real client (e.g. the
    // client was deleted) -- same graceful "just stops showing up" handling
    // buildClientPicker's chip already gets for a single client.
    return programClientIds(program).map(id => clientsCache.find(c => c.id === id)).filter(Boolean);
  }

  function render(){
    wrap.innerHTML = "";
    const chipRow = document.createElement("div");
    chipRow.className = "clientchiprow";
    const assigned = currentClients();
    if(!assigned.length){
      const hint = document.createElement("span");
      hint.className = "clientpickerempty";
      hint.textContent = "No clients assigned yet";
      chipRow.appendChild(hint);
    }
    assigned.forEach(c => {
      const chip = document.createElement("span");
      chip.className = "clientchip";
      chip.innerHTML = `👤 ${esc(c.name || "Unnamed client")} <button type="button" class="clientchipremove" title="Remove ${esc(c.name||"this client")}">✕</button>`;
      chip.querySelector(".clientchipremove").addEventListener("click", () => {
        onChange(programClientIds(program).filter(id => id !== c.id));
        render();
      });
      chipRow.appendChild(chip);
    });
    wrap.appendChild(chipRow);

    const searchWrap = document.createElement("div");
    searchWrap.className = "clientpickersearch";
    searchWrap.innerHTML = `<input type="text" class="clientsearch" placeholder="+ Add a client…" autocomplete="off">`;
    const input = searchWrap.querySelector(".clientsearch");
    let resultsEl = null;
    const closeResults = () => { if(resultsEl){ resultsEl.remove(); resultsEl = null; } };
    const addClientId = id => {
      const ids = programClientIds(program);
      if(!ids.includes(id)) onChange(ids.concat([id]));
      input.value = "";
      closeResults();
      render();
    };
    // Shows every not-yet-assigned client when the box is empty (clicking
    // in should show a pickable list right away, not require typing first),
    // narrowing to matches once she types; the "+ Create as new client"
    // option only makes sense once there's actually a name typed.
    const showResults = () => {
      const q = input.value.trim().toLowerCase();
      closeResults();
      const assignedIds = programClientIds(program);
      const pool = clientsCache.filter(c => !assignedIds.includes(c.id));
      const matches = (q ? pool.filter(c => (c.name||"").toLowerCase().includes(q)) : pool).slice(0, 8);
      resultsEl = document.createElement("div");
      resultsEl.className = "addex-results";
      if(!matches.length && !q){
        const empty = document.createElement("div");
        empty.className = "addex-item";
        empty.style.opacity = "0.6";
        empty.style.cursor = "default";
        empty.textContent = clientsCache.length ? "Everyone is already assigned to this program" : "No clients yet — type a name to create one";
        resultsEl.appendChild(empty);
      }
      matches.forEach(m => {
        const item = document.createElement("div");
        item.className = "addex-item";
        item.textContent = m.name;
        item.addEventListener("mousedown", ev => { ev.preventDefault(); addClientId(m.id); });
        resultsEl.appendChild(item);
      });
      if(q){
        const createItem = document.createElement("div");
        createItem.className = "addex-item";
        createItem.style.color = "var(--accent)";
        createItem.textContent = `+ Create "${input.value.trim()}" as new client`;
        createItem.addEventListener("mousedown", async ev => {
          ev.preventDefault();
          closeResults();
          const now = new Date().toISOString();
          const data = {name: input.value.trim(), goals: "", liftStats: [], weightUnit: "kg", notes: "", accessCode: genAccessCode(), tasks: [], createdAt: now, updatedAt: now};
          if(clientsCol){
            try{
              const ref = await clientsCol.add(data);
              addClientId(ref.id);
            }catch(e){
              const id = "local-" + rid();
              clientsCache.unshift(Object.assign({id}, data));
              addClientId(id);
            }
          } else {
            const id = "local-" + rid();
            clientsCache.unshift(Object.assign({id}, data));
            addClientId(id);
          }
        });
        resultsEl.appendChild(createItem);
      }
      searchWrap.appendChild(resultsEl);
    };
    input.addEventListener("focus", showResults);
    input.addEventListener("input", showResults);
    input.addEventListener("blur", () => setTimeout(closeResults, 150));
    wrap.appendChild(searchWrap);
  }

  render();
  return wrap;
}

/** Current Lifting Stats box: lets the coach log a recent rep-max test for
 *  any lift so Apply Progression can translate %1RM into actual weight for
 *  matching compound exercises, instead of showing a bare percentage.
 *  When a client is linked, stats live on the shared client record so they
 *  carry over to that client's other programs; otherwise they stay scoped
 *  to just this program, matching the original behavior. */
function buildStatsBox(program, client, rerenderOverride){
  const target = client || program;
  // Called from Program Builder (with a program), a client's own coach-side
  // profile page (program is null there), or the client's own self-serve
  // portal view (program is null, rerenderOverride points back at
  // renderClientModeView) -- re-render whichever one is on screen so a
  // unit-toggle switch or a newly logged lift redraws the right view.
  const rerenderHost = rerenderOverride || (program ? renderEditor : renderClientProfile);
  target.liftStats = target.liftStats || [];
  const unit = target.weightUnit || "kg";
  const saveTarget = () => { if(client) scheduleClientSave(client); else scheduleSave(); };

  const box = document.createElement("div");
  box.className = "statsbox";
  box.innerHTML = `
    <div class="statsbox-head">
      <h3>Current Lifting Stats${client ? ` <span class="statscope">— shared with ${esc(client.name)}'s other programs</span>` : ""}</h3>
      <div class="unit-toggle">
        <button type="button" class="unitbtn${unit === "kg" ? " active" : ""}" data-unit="kg">kg</button>
        <button type="button" class="unitbtn${unit === "lb" ? " active" : ""}" data-unit="lb">lb</button>
      </div>
    </div>
    <div class="statshint">Log a recent rep-max test for any main lift (e.g. 5 reps @ 100${esc(unit)}) — hit Apply Progression afterward and that lift's %1RM loads below will show actual weight too, not just the percentage.${client ? "" : " Link a client above to carry these stats over to their other programs automatically."}</div>
    <div id="statsListEl"></div>
    <div class="addstat">
      <div class="addstat-row">
        <div class="addstat-field wide"><input type="text" id="statExInput" placeholder="Search for a lift, e.g. Back Squat" autocomplete="off"></div>
        <div class="addstat-field narrow"><input type="number" id="statReps" placeholder="Reps" min="1" max="15"></div>
        <div class="addstat-field narrow"><input type="number" id="statWeight" placeholder="Weight" min="0" step="0.5"></div>
        <button class="addstatbtn" id="addStatBtn" type="button" disabled>+ Add</button>
      </div>
    </div>
  `;

  const listEl = box.querySelector("#statsListEl");
  function renderList(){
    listEl.innerHTML = "";
    if(!target.liftStats.length){
      listEl.innerHTML = '<div class="emptyprogs">No lifts logged yet — matching loads below will show as %1RM only.</div>';
      return;
    }
    target.liftStats.forEach(s => {
      const row = document.createElement("div");
      row.className = "statrow";
      row.innerHTML = `
        <div><b>${esc(s.exercise)}</b><span class="statmeta">${esc(s.reps)} × ${esc(s.weight)}${esc(target.weightUnit||"kg")} → est. 1RM ≈ ${Math.round(s.oneRM)}${esc(target.weightUnit||"kg")}</span></div>
        <button class="statremove" title="Remove" type="button">✕</button>
      `;
      row.querySelector(".statremove").addEventListener("click", () => {
        target.liftStats = target.liftStats.filter(x => x.id !== s.id);
        renderList();
        saveTarget();
      });
      listEl.appendChild(row);
    });
  }
  renderList();

  box.querySelectorAll(".unitbtn").forEach(btn => {
    btn.addEventListener("click", () => {
      target.weightUnit = btn.dataset.unit;
      rerenderHost();
      saveTarget();
    });
  });

  let selectedEx = null;
  const exInput = box.querySelector("#statExInput");
  const addBtn = box.querySelector("#addStatBtn");
  const repsInput = box.querySelector("#statReps");
  const weightInput = box.querySelector("#statWeight");
  let resultsEl = null;
  const closeResults = () => { if(resultsEl){ resultsEl.remove(); resultsEl = null; } };
  const checkReady = () => { addBtn.disabled = !(selectedEx && repsInput.value && weightInput.value); };

  exInput.addEventListener("input", () => {
    selectedEx = null;
    checkReady();
    const q = exInput.value.trim().toLowerCase();
    closeResults();
    if(!q) return;
    const matches = DATA.filter(r => r.exercise.toLowerCase().includes(q)).slice(0, 8);
    resultsEl = document.createElement("div");
    resultsEl.className = "addex-results";
    if(!matches.length){
      resultsEl.innerHTML = '<div class="addex-item" style="color:var(--ink-dim)">No matches</div>';
    } else {
      matches.forEach(m => {
        const item = document.createElement("div");
        item.className = "addex-item";
        item.innerHTML = `<div>${esc(m.exercise)}</div><div class="tagrow"><span class="tag">${esc(m.group)} — ${esc(m.sub)}</span></div>`;
        item.addEventListener("mousedown", ev => {
          ev.preventDefault();
          selectedEx = m.exercise;
          exInput.value = m.exercise;
          closeResults();
          checkReady();
        });
        resultsEl.appendChild(item);
      });
    }
    box.querySelector(".addstat").appendChild(resultsEl);
  });
  exInput.addEventListener("blur", () => setTimeout(closeResults, 150));
  repsInput.addEventListener("input", checkReady);
  weightInput.addEventListener("input", checkReady);

  addBtn.addEventListener("click", () => {
    const oneRM = estimate1RM(weightInput.value, repsInput.value);
    if(!selectedEx || !oneRM) return;
    target.liftStats = (target.liftStats || []).filter(s => s.exercise !== selectedEx);
    target.liftStats.push({id: rid(), exercise: selectedEx, reps: repsInput.value, weight: weightInput.value, oneRM});
    selectedEx = null;
    exInput.value = ""; repsInput.value = ""; weightInput.value = "";
    addBtn.disabled = true;
    renderList();
    saveTarget();
  });

  return box;
}

function kgToUnit(kg, unit){ return unit === "lb" ? kg / 0.453592 : kg; }
function unitToKg(val, unit){ return unit === "lb" ? val * 0.453592 : val; }
function round1(n){ return Math.round(n * 10) / 10; }

function fmtShortDate(dateStr){
  if(!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  if(isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString(undefined, {month: "short", day: "numeric"});
}

// A client added before the first/last name split existed has only
// client.name (a single combined string) -- this gives the Squad tab's two
// name inputs a sane starting point by splitting it on the first space,
// rather than showing blank First/Last fields for someone who already has
// a name on file. Purely a display fallback for pre-filling the inputs;
// once the coach edits either field, client.firstName/lastName take over
// for good (see syncClientFullName in renderClientProfile).
function splitClientName(client){
  const full = (client.name || "").trim();
  if(!full) return {first: "", last: ""};
  const parts = full.split(/\s+/);
  return {first: parts[0], last: parts.slice(1).join(" ")};
}

// First name only, for greeting a client on their own view ("Welcome,
// ___"). Prefers the explicit client.firstName; falls back to splitting
// client.name for a client saved before that field existed.
function firstNameOf(client){
  if(client.firstName) return client.firstName;
  return splitClientName(client).first;
}

function cmToUnit(cm, unit){ return unit === "in" ? cm / 2.54 : cm; }
function unitToCm(val, unit){ return unit === "in" ? val * 2.54 : val; }

// The 5 common check-in measurements -- one dated entry can fill in any
// subset of these at once (a client rarely measures everything every time),
// stored canonically in cm on client.measurementLog[].
const BODY_MEASUREMENTS = [
  {key: "waist", label: "Waist"},
  {key: "chest", label: "Chest"},
  {key: "hips", label: "Hips"},
  {key: "thigh", label: "Thigh"},
  {key: "arm", label: "Arm"},
];

// A minimal dependency-free line chart (no charting library -- this file
// ships to the browser completely unbundled, see the load-order note in
// index.html) -- just enough to show a trend at a glance: the line itself,
// a dashed average reference, and the most recent point highlighted.
// `points` must be pre-sorted ascending by date and have at least 2 entries;
// callers check that and show a "log one more" hint instead when they don't.
function buildLineChartSvg(points){
  const w = 300, h = 84, padX = 6, padY = 10;
  const vals = points.map(p => p.value);
  const min = Math.min(...vals), max = Math.max(...vals);
  const span = (max - min) || 1;
  const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
  const x = i => padX + (i / (points.length - 1)) * (w - padX * 2);
  const y = v => h - padY - ((v - min) / span) * (h - padY * 2);
  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(p.value).toFixed(1)}`).join(" ");
  const avgY = y(avg).toFixed(1);
  const lastX = x(points.length - 1).toFixed(1);
  const lastY = y(points[points.length - 1].value).toFixed(1);
  return `
    <svg viewBox="0 0 ${w} ${h}" class="cmlinechart" preserveAspectRatio="none">
      <line x1="${padX}" y1="${avgY}" x2="${w - padX}" y2="${avgY}" class="cmlinechart-avg"/>
      <path d="${pathD}" class="cmlinechart-line"/>
      <circle cx="${lastX}" cy="${lastY}" r="3.5" class="cmlinechart-dot"/>
    </svg>
  `;
}

// The client's own body-metrics tracker: weigh-ins, body measurements, and
// (eventually) progress photos, each dated -- defaults to today but can be
// backdated via the date picker, so catching up on a missed entry doesn't
// mean fudging today's. Lives as its own "BODY METRICS" toggle inside the
// Body Metrics section on both the client's own view and the coach's
// Contact & Personal Info pill -- same shared widget, same underlying
// client.weightLog/measurementLog, whichever side opens or edits it.
// Weight is stored canonically in kg (client.weightLog[].weightKg) and
// measurements canonically in cm (client.measurementLog[].<key>), only
// converted for display, so toggling either unit never touches stored
// history -- same pattern already used for Lifting Stats.
function buildBodyMetricsPill(client, rerenderOverride){
  const rerenderHost = rerenderOverride || renderClientProfile;
  client.weightLog = client.weightLog || [];
  client.measurementLog = client.measurementLog || [];
  const wUnit = client.weightUnit || "kg";
  const mUnit = client.measurementUnit || "cm";
  const saveTarget = () => scheduleClientSave(client);
  const today = todayKey();

  const details = document.createElement("details");
  details.className = "cmpill cmnestedpill";
  details.open = cmBodyMetricsPillOpenIds.has(client.id);
  details.addEventListener("toggle", () => {
    if(details.open) cmBodyMetricsPillOpenIds.add(client.id); else cmBodyMetricsPillOpenIds.delete(client.id);
  });
  const summary = document.createElement("summary");
  summary.textContent = "BODY METRICS";
  details.appendChild(summary);

  const body = document.createElement("div");
  body.className = "cmpillbody";
  details.appendChild(body);

  // ---------------------------- Weight ----------------------------------
  const wSorted = client.weightLog.slice().sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
  const wVals = wSorted.map(e => round1(kgToUnit(e.weightKg, wUnit)));
  const wAvg = wVals.length ? round1(wVals.reduce((a, b) => a + b, 0) / wVals.length) : null;
  const wChange = wVals.length > 1 ? round1(wVals[wVals.length - 1] - wVals[0]) : null;

  const weightBox = document.createElement("div");
  weightBox.className = "statsbox";
  weightBox.innerHTML = `
    <div class="statsbox-head"><h3>Weight</h3></div>
    <div class="statshint">Log a weigh-in any time — pick today or backdate it if you're catching up.</div>
    ${wSorted.length ? `
      <div class="targetrow" style="margin:8px 0 12px;">
        <div class="targetstat"><b>${esc(wVals[wVals.length - 1])}${esc(wUnit)}</b><span>Latest — ${esc(fmtShortDate(wSorted[wSorted.length - 1].date))}</span></div>
        <div class="targetstat"><b>${esc(wAvg)}${esc(wUnit)}</b><span>Average (${wSorted.length} log${wSorted.length === 1 ? "" : "s"})</span></div>
        ${wChange !== null ? `<div class="targetstat"><b>${wChange > 0 ? "+" : ""}${esc(wChange)}${esc(wUnit)}</b><span>Change since first log</span></div>` : ""}
      </div>
      ${wVals.length > 1 ? buildLineChartSvg(wSorted.map((e, i) => ({date: e.date, value: wVals[i]}))) : '<div class="cmempty" style="padding:4px 0 10px;">Log one more weigh-in to see a trend line.</div>'}
    ` : '<div class="emptyprogs">No weigh-ins logged yet — add the first one below.</div>'}
    <div id="weightLogListEl"></div>
    <div class="addstat-row" style="margin-top:8px;">
      <div class="addstat-field narrow"><input type="number" id="weightLogInput" placeholder="${esc(wUnit)}" min="0" step="0.1"></div>
      <div class="addstat-field narrow"><input type="date" id="weightLogDate" max="${esc(today)}" value="${esc(today)}"></div>
      <button class="addstatbtn" id="addWeightLogBtn" type="button" disabled>+ Log Weigh-In</button>
    </div>
  `;
  const weightListEl = weightBox.querySelector("#weightLogListEl");
  if(wSorted.length){
    wSorted.slice().reverse().forEach(e => {
      const row = document.createElement("div");
      row.className = "statrow";
      const val = round1(kgToUnit(e.weightKg, wUnit));
      row.innerHTML = `
        <div><b>${esc(val)}${esc(wUnit)}</b><span class="statmeta">${esc(fmtShortDate(e.date))}</span></div>
        <button class="statremove" title="Remove" type="button">✕</button>
      `;
      row.querySelector(".statremove").addEventListener("click", () => {
        client.weightLog = client.weightLog.filter(x => x.id !== e.id);
        saveTarget();
        rerenderHost();
      });
      weightListEl.appendChild(row);
    });
  }
  const wInput = weightBox.querySelector("#weightLogInput");
  const wDateInput = weightBox.querySelector("#weightLogDate");
  const wAddBtn = weightBox.querySelector("#addWeightLogBtn");
  wInput.addEventListener("input", () => { wAddBtn.disabled = !wInput.value; });
  const commitWeightLog = () => {
    const val = parseFloat(wInput.value);
    if(!val) return;
    const kg = unitToKg(val, wUnit);
    const entryDate = wDateInput.value || today;
    // One entry per day -- logging again for a date that already has an
    // entry updates it rather than padding the average with duplicates.
    const withoutDate = (client.weightLog || []).filter(e => e.date !== entryDate);
    client.weightLog = withoutDate.concat([{id: rid(), date: entryDate, weightKg: kg}]);
    if(entryDate === today) client.bodyWeight = String(val);
    saveTarget();
    rerenderHost();
  };
  wAddBtn.addEventListener("click", commitWeightLog);
  wInput.addEventListener("keydown", e => { if(e.key === "Enter" && wInput.value){ e.preventDefault(); commitWeightLog(); } });
  body.appendChild(weightBox);

  // -------------------------- Measurements -------------------------------
  const mSorted = client.measurementLog.slice().sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
  const measureBox = document.createElement("div");
  measureBox.className = "statsbox";
  measureBox.style.marginTop = "14px";
  const latestEntry = mSorted[mSorted.length - 1];
  measureBox.innerHTML = `
    <div class="statsbox-head">
      <h3>Measurements</h3>
      <select id="measureUnit" class="measureunitselect">
        <option value="cm" ${mUnit !== "in" ? "selected" : ""}>cm</option>
        <option value="in" ${mUnit === "in" ? "selected" : ""}>in</option>
      </select>
    </div>
    <div class="statshint">Fill in whatever you're measuring this time — you don't need all of them every time.</div>
    ${latestEntry ? `
      <div class="targetrow" style="margin:8px 0 12px; flex-wrap:wrap;">
        ${BODY_MEASUREMENTS.filter(m => latestEntry[m.key] != null).map(m =>
          `<div class="targetstat"><b>${esc(round1(cmToUnit(latestEntry[m.key], mUnit)))}${esc(mUnit)}</b><span>${esc(m.label)}</span></div>`
        ).join("")}
      </div>
    ` : '<div class="emptyprogs">No measurements logged yet — add the first one below.</div>'}
    <div id="measureLogListEl"></div>
    <div class="addstat-row measurerow" style="margin-top:8px;">
      ${BODY_MEASUREMENTS.map(m => `<div class="addstat-field narrow"><input type="number" min="0" step="0.1" data-mkey="${m.key}" placeholder="${esc(m.label)}"></div>`).join("")}
      <div class="addstat-field narrow"><input type="date" id="measureLogDate" max="${esc(today)}" value="${esc(today)}"></div>
      <button class="addstatbtn" id="addMeasureLogBtn" type="button" disabled>+ Log Measurements</button>
    </div>
  `;
  const measureListEl = measureBox.querySelector("#measureLogListEl");
  if(mSorted.length){
    mSorted.slice().reverse().forEach(e => {
      const row = document.createElement("div");
      row.className = "statrow";
      const summary2 = BODY_MEASUREMENTS.filter(m => e[m.key] != null)
        .map(m => `${m.label} ${round1(cmToUnit(e[m.key], mUnit))}${mUnit}`)
        .join(", ");
      row.innerHTML = `
        <div><b>${esc(summary2 || "—")}</b><span class="statmeta">${esc(fmtShortDate(e.date))}</span></div>
        <button class="statremove" title="Remove" type="button">✕</button>
      `;
      row.querySelector(".statremove").addEventListener("click", () => {
        client.measurementLog = client.measurementLog.filter(x => x.id !== e.id);
        saveTarget();
        rerenderHost();
      });
      measureListEl.appendChild(row);
    });
  }
  measureBox.querySelector("#measureUnit").addEventListener("change", e => {
    client.measurementUnit = e.target.value;
    saveTarget();
    rerenderHost();
  });
  const mFieldInputs = Array.from(measureBox.querySelectorAll("[data-mkey]"));
  const mDateInput = measureBox.querySelector("#measureLogDate");
  const mAddBtn = measureBox.querySelector("#addMeasureLogBtn");
  const refreshMeasureAddBtn = () => { mAddBtn.disabled = !mFieldInputs.some(inp => inp.value); };
  mFieldInputs.forEach(inp => inp.addEventListener("input", refreshMeasureAddBtn));
  mAddBtn.addEventListener("click", () => {
    const entry = {id: rid(), date: mDateInput.value || today};
    let any = false;
    mFieldInputs.forEach(inp => {
      const val = parseFloat(inp.value);
      if(val){ entry[inp.dataset.mkey] = unitToCm(val, mUnit); any = true; }
    });
    if(!any) return;
    // One entry per day, same as weight -- logging again for a date that
    // already has one merges into it rather than creating a duplicate.
    const existing = client.measurementLog.find(e => e.date === entry.date);
    const merged = existing ? Object.assign({}, existing, entry, {id: existing.id}) : entry;
    client.measurementLog = client.measurementLog.filter(e => e.date !== entry.date).concat([merged]);
    saveTarget();
    rerenderHost();
  });
  body.appendChild(measureBox);

  // ---------------------------- Photos (later) ----------------------------
  const photosNote = document.createElement("div");
  photosNote.className = "cmempty";
  photosNote.style.marginTop = "14px";
  photosNote.textContent = "📷 Progress photos — coming soon.";
  body.appendChild(photosNote);

  return details;
}

function renderEditor(){
  const host = document.getElementById("editorHost");
  host.innerHTML = "";
  if(!currentProgram){
    if(showAutoBuildForm){
      host.appendChild(buildAutoBuildForm());
    } else {
      host.innerHTML = '<div class="empty">Select a program on the left, or create a new one, to start building.</div>';
    }
    return;
  }
  const p = currentProgram;
  const wrap = document.createElement("div");
  wrap.className = "editor";

  const head = document.createElement("div");
  head.className = "editor-head";
  head.innerHTML = `
    <input class="proginput" id="progNameInput" value="${esc(p.name||"")}" placeholder="Program name">
    <div class="editor-actions">
      <button class="iconbtn" id="printBtn" type="button">🖨 Print / Export</button>
      <button class="iconbtn" id="dupBtn" type="button">Duplicate</button>
      <button class="iconbtn" id="delBtn" type="button">Delete</button>
    </div>
  `;
  wrap.appendChild(head);

  const days = p.days || [];
  const exCount = days.reduce((n, d) => n + (d.exercises ? d.exercises.length : 0), 0);
  const meta = document.createElement("div");
  meta.className = "progmeta";
  meta.innerHTML = `${fmtCount(days.length,"day")} · ${fmtCount(exCount,"exercise")} <span class="savebadge" id="saveBadge"></span>`;
  wrap.appendChild(meta);

  const clientRow = document.createElement("div");
  clientRow.className = "clientrow";
  const clientLabel = document.createElement("span");
  clientLabel.className = "clientrowlabel";
  clientLabel.textContent = "Client(s)";
  clientRow.appendChild(clientLabel);
  clientRow.appendChild(buildProgramClientPicker(p, newIds => {
    currentProgram.clientIds = newIds;
    renderEditor();
    scheduleSave();
  }));
  wrap.appendChild(clientRow);

  const assignedIds = programClientIds(p);
  const assignedClients = assignedIds.map(id => clientsCache.find(c => c.id === id)).filter(Boolean);
  // Several people can share one program, but stats/progression math (Apply
  // Progression's %1RM lookup, Update from Actuals, the read-only "Logged"
  // column, Print) all need ONE specific person's numbers -- this picker
  // only shows up once there's actually a choice to make.
  const refClientId = builderRefClientIdFor(p);
  const linkedClient = refClientId ? clientsCache.find(c => c.id === refClientId) : null;
  if(assignedClients.length > 1){
    const refRow = document.createElement("div");
    refRow.className = "clientrow refclientrow";
    refRow.innerHTML = `<span class="clientrowlabel">Referencing progress for</span>
      <select id="refClientSelect">
        ${assignedClients.map(c => `<option value="${esc(c.id)}" ${c.id === refClientId ? "selected" : ""}>${esc(c.name||"Unnamed client")}</option>`).join("")}
      </select>`;
    refRow.title = "This group program is shared by everyone above, but %1RM, Apply Progression, Update from Actuals and the Logged column below need one person's numbers to work from.";
    wrap.appendChild(refRow);
  }

  const metaRow = document.createElement("div");
  metaRow.className = "editor-meta-row";
  metaRow.innerHTML = `
    <div class="abform-field narrow"><label>Length (weeks)</label><input type="number" id="progWeeksInput" min="1" max="24" value="${weeksCountFor(p)}"></div>
    <div class="abform-field"><label>Program goal <span class="privatetag">Private — only you see this</span></label><input type="text" id="progGoalInput" value="${esc(p.goal||"")}" placeholder="e.g. Build to a new back squat 1RM"></div>
    <button class="applyprogbtn" id="applyProgressionBtn" type="button">⟳ Apply Progression</button>
    ${weeksCountFor(p) > 1 ? '<button class="applyprogbtn actualsbtn" id="updateActualsBtn" type="button">📈 Update from Actuals</button>' : ""}
    <label class="pcttogglelabel" id="pctToggleLabel" title="When off, Apply Progression steps sets and reps as usual but leaves Load blank on compound lifts instead of a %1RM figure — for clients you're not prescribing load by percentage.">
      <input type="checkbox" id="prescribePercentToggle" ${p.prescribePercent !== false ? "checked" : ""}>
      Prescribe % of 1RM for load
    </label>
    <div class="progressionhint">Progression is generated from the goal and each exercise's movement pattern — set the weeks and goal, hit Apply, then adjust any week freely. Every 4th week eases off automatically (deload). Log what was actually done in the "Done / Wt used" rows below, then hit Update from Actuals to have the remaining weeks adjust to it.</div>
  `;
  wrap.appendChild(metaRow);

  const notesRow = document.createElement("div");
  notesRow.className = "abform-field coachnotesfield";
  notesRow.innerHTML = `<label>Notes, needs &amp; restrictions <span class="privatetag">Private — only you see this</span></label><textarea id="coachNotesInput" placeholder="e.g. Recovering from a mild hamstring strain, dumbbell/bodyweight only, no Olympic lifts">${esc(p.coachNotes||"")}</textarea>`;
  wrap.appendChild(notesRow);

  wrap.appendChild(buildStatsBox(p, linkedClient));

  wrap.appendChild(buildCoverage(days));

  days.forEach(day => wrap.appendChild(buildDayEl(day)));

  const addDayBtn = document.createElement("button");
  addDayBtn.className = "adddaybtn";
  addDayBtn.type = "button";
  addDayBtn.textContent = "+ Add day";
  addDayBtn.addEventListener("click", () => {
    // Reassign rather than push onto a possibly read-only/frozen array
    // straight from a db snapshot.
    currentProgram.days = (currentProgram.days || []).concat([
      {id: rid(), label: "Day " + ((currentProgram.days || []).length + 1), exercises: []}
    ]);
    renderEditor();
    scheduleSave();
  });
  wrap.appendChild(addDayBtn);

  host.appendChild(wrap);

  document.getElementById("progNameInput").addEventListener("input", e => {
    currentProgram.name = e.target.value;
    scheduleSave();
  });
  document.getElementById("progWeeksInput").addEventListener("change", e => {
    let n = parseInt(e.target.value, 10);
    if(!n || n < 1) n = 1;
    if(n > 24) n = 24;
    e.target.value = n;
    currentProgram.weeks = n;
    // Resize every exercise's per-week grid to match — non-destructive,
    // existing weeks keep whatever's already in them.
    (currentProgram.days||[]).forEach(day => (day.exercises||[]).forEach(ex => progressionOf(ex, n)));
    renderEditor();
    scheduleSave();
  });
  document.getElementById("progGoalInput").addEventListener("input", e => {
    currentProgram.goal = e.target.value;
    scheduleSave();
  });
  document.getElementById("prescribePercentToggle").addEventListener("change", e => {
    currentProgram.prescribePercent = e.target.checked;
    scheduleSave();
  });
  document.getElementById("coachNotesInput").addEventListener("input", e => {
    currentProgram.coachNotes = e.target.value;
    scheduleSave();
  });
  const refSelect = document.getElementById("refClientSelect");
  if(refSelect) refSelect.addEventListener("change", e => {
    builderRefClientId[currentProgram.id] = e.target.value;
    renderEditor();
  });
  wireApplyProgressionBtn(document.getElementById("applyProgressionBtn"), () => {
    const weeks = weeksCountFor(currentProgram);
    const goalProfile = detectGoalProfile(currentProgram.goal);
    const refId = builderRefClientIdFor(currentProgram);
    const statSource = (refId && clientsCache.find(c => c.id === refId)) || currentProgram;
    const statsMap = liftStatsMap(statSource);
    const prescribePercent = currentProgram.prescribePercent !== false;
    (currentProgram.days||[]).forEach(day => (day.exercises||[]).forEach(ex => {
      ex.progression = generateProgressionForExercise(ex, weeks, goalProfile, statsMap, prescribePercent);
      ex.sets = ex.progression[0].sets; ex.reps = ex.progression[0].reps; ex.load = ex.progression[0].load; ex.rpe = ex.progression[0].rpe;
    }));
    renderEditor();
    scheduleSave();
  });
  const actualsBtn = document.getElementById("updateActualsBtn");
  if(actualsBtn) wireApplyProgressionBtn(actualsBtn, updateFromActuals);
  document.getElementById("printBtn").addEventListener("click", () => {
    const refId = builderRefClientIdFor(currentProgram);
    const client = refId ? clientsCache.find(c => c.id === refId) : null;
    document.getElementById("printArea").innerHTML = buildPrintHTML(currentProgram, client);
    window.print();
  });
  document.getElementById("dupBtn").addEventListener("click", duplicateProgram);
  wireDeleteBtn(document.getElementById("delBtn"));
}

/* ---------------------------------------------------------------------
   Rehab
--------------------------------------------------------------------- */

let rehabCol = null;
let casesCache = [];
let currentCaseId = null;
let currentCase = null;
let caseSaveTimer = null;

let nutritionCol = null;
let nutritionCache = [];
let currentNutritionId = null;
let currentNutrition = null;
let nutritionSaveTimer = null;

// messagesCache is shared between the coach's own live subscription
// (initMessages below, true realtime via firestoreShim) and a real client's
// polled RPC results (loadClientPortalData / startClientMessagePolling) --
// same pattern already used for programsCache/casesCache/nutritionCache.
let messagesCol = null;
let messagesCache = [];
let currentMessageClientId = null;
let msgArchiveOpen = false; // whether the "Archived" section of the thread list is expanded
let messagesDbInitDone = false; // guards initMessages() against a duplicate realtime subscription on retry

function allGroups(){ return [...new Set(DATA.map(r => r.group))].sort(); }

async function initRehab(){
  db = await getDb();

  if(!db){
    flashNote("Saving isn't wired up in this preview, so cases you build here won't be kept — open the published page itself to save for real.", "dbnoteRehab");
    renderCaseList();
    renderRehabEditor();
    if(rehabReadyResolve){ rehabReadyResolve(); rehabReadyResolve = null; }
    return;
  }

  rehabCol = db.collection("rehabCases");
  let firstSnapshotSeen = false;
  function markRehabReady(){
    if(firstSnapshotSeen) return;
    firstSnapshotSeen = true;
    if(rehabReadyResolve){ rehabReadyResolve(); rehabReadyResolve = null; }
  }
  rehabCol.orderBy("updatedAt", "desc").limit(200).onSnapshot(snap => {
    casesCache = snap.docs.map(d => Object.assign({id: d.id}, d.data()));
    renderCaseList();
    if(currentCaseId && !casesCache.find(c => c.id === currentCaseId)){
      currentCaseId = null; currentCase = null; renderRehabEditor();
    }
    safeRenderClientProfile();
    safeRenderClientModeView();
    markRehabReady();
  }, err => {
    flashNote("Couldn't load your rehab cases (" + err.code + "). You can still build one, but it may not save.", "dbnoteRehab");
    markRehabReady();
  });
}

function renderCaseList(){
  const el = document.getElementById("caseListEl");
  el.innerHTML = "";
  if(!casesCache.length){
    el.innerHTML = '<div class="emptyprogs">No rehab cases yet — create one to get started.</div>';
    return;
  }
  casesCache.forEach(c => {
    const areas = (c.areaGroups || []);
    const planCount = (c.plan || []).length;
    const div = document.createElement("div");
    div.className = "progitem" + (c.id === currentCaseId ? " active" : "");
    div.innerHTML = `${esc(c.clientName || "Untitled Case")}<span class="meta">${areas.length ? esc(areas.join(", ")) : "No area set"} · ${fmtCount(planCount,"exercise")}</span>`;
    div.onclick = () => {
      currentCaseId = c.id;
      currentCase = JSON.parse(JSON.stringify(c));
      renderCaseList(); renderRehabEditor();
    };
    el.appendChild(div);
  });
}

document.getElementById("newCaseBtn").addEventListener("click", async () => {
  const now = new Date().toISOString();
  const data = {clientName: "New Case", clientId: null, diagnosis: "", areaGroups: [], areaSubs: [], plan: [], createdAt: now, updatedAt: now};
  if(!rehabCol){
    const id = "local-" + rid();
    const rec = Object.assign({id}, data);
    casesCache.unshift(rec);
    currentCaseId = id; currentCase = JSON.parse(JSON.stringify(rec));
    renderCaseList(); renderRehabEditor();
    return;
  }
  try{
    const ref = await rehabCol.add(data);
    currentCaseId = ref.id;
    currentCase = Object.assign({id: ref.id}, data);
    renderRehabEditor();
  }catch(e){
    flashNote("Couldn't create a new case right now (" + e.code + ").", "dbnoteRehab");
  }
});

function scheduleCaseSave(){
  const badge = document.getElementById("caseSaveBadge");
  if(badge) badge.textContent = "Saving…";
  clearTimeout(caseSaveTimer);
  caseSaveTimer = setTimeout(async () => {
    if(!currentCase) return;
    const payload = {
      clientName: currentCase.clientName, clientId: currentCase.clientId || null, diagnosis: currentCase.diagnosis,
      areaGroups: currentCase.areaGroups, areaSubs: currentCase.areaSubs,
      plan: currentCase.plan, updatedAt: new Date().toISOString(),
    };
    const badgeEl = document.getElementById("caseSaveBadge");
    if(rehabCol && !String(currentCaseId).startsWith("local-")){
      try{
        await rehabCol.doc(currentCaseId).update(payload);
        if(badgeEl) badgeEl.textContent = "Saved";
      }catch(e){
        if(badgeEl) badgeEl.textContent = "Not saved (" + e.code + ")";
      }
    } else {
      const idx = casesCache.findIndex(c => c.id === currentCaseId);
      if(idx > -1) casesCache[idx] = Object.assign({}, casesCache[idx], payload);
      if(badgeEl) badgeEl.textContent = "Saved (this session only)";
      renderCaseList();
    }
  }, 600);
}

async function duplicateCase(){
  if(!currentCase) return;
  const now = new Date().toISOString();
  const copy = {
    clientName: (currentCase.clientName || "Untitled Case") + " (copy)",
    clientId: currentCase.clientId || null,
    diagnosis: currentCase.diagnosis || "",
    areaGroups: [...(currentCase.areaGroups||[])],
    areaSubs: [...(currentCase.areaSubs||[])],
    plan: JSON.parse(JSON.stringify(currentCase.plan || [])),
    createdAt: now, updatedAt: now,
  };
  if(rehabCol){
    try{
      const ref = await rehabCol.add(copy);
      currentCaseId = ref.id;
      currentCase = Object.assign({id: ref.id}, copy);
      renderCaseList(); renderRehabEditor();
    }catch(e){
      flashNote("Couldn't duplicate this case right now (" + e.code + ").", "dbnoteRehab");
    }
  } else {
    const id = "local-" + rid();
    const rec = Object.assign({id}, copy);
    casesCache.unshift(rec);
    currentCaseId = id; currentCase = JSON.parse(JSON.stringify(rec));
    renderCaseList(); renderRehabEditor();
  }
}

function wireCaseDeleteBtn(btn){
  let armed = false;
  let resetTimer = null;
  btn.textContent = "Delete";
  btn.addEventListener("click", async () => {
    if(!armed){
      armed = true;
      btn.textContent = "Click again to delete";
      btn.classList.add("confirming");
      resetTimer = setTimeout(() => { armed = false; btn.textContent = "Delete"; btn.classList.remove("confirming"); }, 3000);
      return;
    }
    clearTimeout(resetTimer);
    const idToDelete = currentCaseId;
    currentCaseId = null; currentCase = null;
    renderRehabEditor(); renderCaseList();
    if(rehabCol && !String(idToDelete).startsWith("local-")){
      try{ await rehabCol.doc(idToDelete).delete(); }catch(e){ /* already reflected locally */ }
    } else {
      casesCache = casesCache.filter(c => c.id !== idToDelete);
      renderCaseList();
    }
  });
}

function buildToggleChips(container, allVals, selected, onToggle){
  container.innerHTML = "";
  allVals.forEach(v => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pill" + (selected.includes(v) ? " active" : "");
    btn.textContent = v;
    btn.onclick = () => onToggle(v);
    container.appendChild(btn);
  });
}

function suggestionsFor(areaGroups, areaSubs){
  if(!areaGroups.length && !areaSubs.length) return [];
  return DATA.filter(r => {
    const groupOk = areaGroups.length ? areaGroups.includes(r.group) : true;
    const subOk = areaSubs.length ? areaSubs.includes(r.sub) : true;
    return groupOk && subOk;
  });
}

function renderRehabEditor(){
  const host = document.getElementById("rehabHost");
  host.innerHTML = "";
  if(!currentCase){
    host.innerHTML = '<div class="empty">Select a case on the left, or create a new one, to log a diagnosis and build a rehab plan.</div>';
    return;
  }
  const c = currentCase;
  c.areaGroups = c.areaGroups || [];
  c.areaSubs = c.areaSubs || [];
  c.plan = c.plan || [];

  const wrap = document.createElement("div");
  wrap.className = "editor";

  const head = document.createElement("div");
  head.className = "editor-head";
  head.innerHTML = `
    <input class="proginput" id="caseNameInput" value="${esc(c.clientName||"")}" placeholder="Client / case name">
    <div class="editor-actions">
      <button class="iconbtn" id="dupCaseBtn" type="button">Duplicate</button>
      <button class="iconbtn" id="delCaseBtn" type="button">Delete</button>
    </div>
  `;
  wrap.appendChild(head);

  const meta = document.createElement("div");
  meta.className = "progmeta";
  meta.innerHTML = `${fmtCount(c.plan.length,"exercise")} in plan <span class="savebadge" id="caseSaveBadge"></span>`;
  wrap.appendChild(meta);

  const clientRow = document.createElement("div");
  clientRow.className = "clientrow";
  const clientLabel = document.createElement("span");
  clientLabel.className = "clientrowlabel";
  clientLabel.textContent = "Linked client";
  clientRow.appendChild(clientLabel);
  clientRow.appendChild(buildClientPicker(c.clientId, client => {
    c.clientId = client ? client.id : null;
    if(client) c.clientName = client.name;
    renderRehabEditor(); renderCaseList();
    scheduleCaseSave();
  }));
  const clientHint = document.createElement("div");
  clientHint.className = "statshint";
  clientHint.textContent = "Optional — link the same client profile used in the Program Builder so this case is tied to their record.";
  clientRow.appendChild(clientHint);
  wrap.appendChild(clientRow);

  const diagLabel = document.createElement("div");
  diagLabel.className = "field-label";
  diagLabel.textContent = "Diagnosis & Physio Notes";
  wrap.appendChild(diagLabel);

  const diagBox = document.createElement("textarea");
  diagBox.className = "diagnosisbox";
  diagBox.rows = 3;
  diagBox.placeholder = "e.g. Grade 1 gluteus medius tendinopathy, L side. Physio has cleared isometric and light frontal-plane loading; avoid high-speed cutting for 4 weeks.";
  diagBox.value = c.diagnosis || "";
  diagBox.addEventListener("input", e => { c.diagnosis = e.target.value; scheduleCaseSave(); });
  wrap.appendChild(diagBox);

  const scopeNote = document.createElement("div");
  scopeNote.className = "scopenote";
  scopeNote.textContent = "This logs what the physio has flagged and cleared — exercise selection below is your professional judgement, working within their restrictions, not automated medical advice.";
  wrap.appendChild(scopeNote);

  const areaLabel = document.createElement("div");
  areaLabel.className = "field-label";
  areaLabel.textContent = "Areas of Focus — Muscle Group / Quality";
  wrap.appendChild(areaLabel);

  const groupChips = document.createElement("div");
  groupChips.className = "pills";
  wrap.appendChild(groupChips);
  buildToggleChips(groupChips, allGroups(), c.areaGroups, v => {
    // Reassign rather than splice/push in place -- these arrays can come
    // straight from a db snapshot and be read-only/frozen.
    const i = c.areaGroups.indexOf(v);
    c.areaGroups = i > -1 ? c.areaGroups.filter(x => x !== v) : c.areaGroups.concat([v]);
    // Drop any selected sub-regions that no longer belong to a selected group
    const validSubs = new Set(DATA.filter(r => c.areaGroups.includes(r.group)).map(r => r.sub));
    c.areaSubs = c.areaSubs.filter(s => validSubs.has(s));
    renderRehabEditor();
    scheduleCaseSave();
  });

  if(c.areaGroups.length){
    const subLabel = document.createElement("div");
    subLabel.className = "field-label";
    subLabel.textContent = "Areas of Focus — Muscle Sub-Region (optional, narrows further)";
    wrap.appendChild(subLabel);

    const subChips = document.createElement("div");
    subChips.className = "pills";
    wrap.appendChild(subChips);
    const availSubs = [...new Set(DATA.filter(r => c.areaGroups.includes(r.group)).map(r => r.sub))].sort();
    buildToggleChips(subChips, availSubs, c.areaSubs, v => {
      const i = c.areaSubs.indexOf(v);
      c.areaSubs = i > -1 ? c.areaSubs.filter(x => x !== v) : c.areaSubs.concat([v]);
      renderRehabEditor();
      scheduleCaseSave();
    });
  }

  const suggestLabel = document.createElement("div");
  suggestLabel.className = "field-label";
  suggestLabel.textContent = "Suggested Exercises";
  wrap.appendChild(suggestLabel);

  const suggestions = suggestionsFor(c.areaGroups, c.areaSubs);
  if(!c.areaGroups.length){
    const p = document.createElement("div");
    p.className = "suggest-empty";
    p.textContent = "Pick at least one muscle group above to surface matching exercises from the library.";
    wrap.appendChild(p);
  } else if(!suggestions.length){
    const p = document.createElement("div");
    p.className = "suggest-empty";
    p.textContent = "No library exercises match that combination — try clearing the sub-region filter.";
    wrap.appendChild(p);
  } else {
    const grid = document.createElement("div");
    grid.className = "suggestions";
    suggestions.forEach(m => {
      const card = document.createElement("div");
      card.className = "suggestcard";
      card.innerHTML = `
        <div class="exname">${esc(m.exercise)}
          <div class="tagrow">
            <span class="tag">${esc(m.group)} — ${esc(m.sub)}</span>
            <span class="tag">${esc(m.plane)}</span>
            <span class="tag">${esc(m.pattern)}</span>
          </div>
        </div>
        <button class="addplanbtn" type="button">+ Add to plan</button>
      `;
      card.querySelector(".addplanbtn").addEventListener("click", () => {
        // Reassign rather than push in place -- c.plan can be a read-only
        // array straight from a db snapshot.
        c.plan = c.plan.concat([{
          id: rid(), exercise: m.exercise, group: m.group, sub: m.sub, plane: m.plane,
          pattern: m.pattern, joint: m.joint, primary: m.primary, secondary: m.secondary,
          sets: "", reps: "", load: "", notes: "",
        }]);
        renderRehabEditor();
        scheduleCaseSave();
      });
      grid.appendChild(card);
    });
    wrap.appendChild(grid);
  }

  const addAnother = document.createElement("div");
  addAnother.className = "addex";
  addAnother.innerHTML = `<input type="text" placeholder="+ Add any other exercise from the library…" autocomplete="off">`;
  const addInput = addAnother.querySelector("input");
  let addResultsEl = null;
  const closeAddResults = () => { if(addResultsEl){ addResultsEl.remove(); addResultsEl = null; } };
  addInput.addEventListener("input", () => {
    const q = addInput.value.trim().toLowerCase();
    closeAddResults();
    if(!q) return;
    const matches = DATA.filter(r => (r.exercise+" "+r.group+" "+r.sub).toLowerCase().includes(q)).slice(0, 8);
    addResultsEl = document.createElement("div");
    addResultsEl.className = "addex-results";
    if(!matches.length){
      addResultsEl.innerHTML = '<div class="addex-item" style="color:var(--ink-dim)">No matches</div>';
    } else {
      matches.forEach(m => {
        const item = document.createElement("div");
        item.className = "addex-item";
        item.innerHTML = `<div>${esc(m.exercise)}</div><div class="tagrow"><span class="tag">${esc(m.group)} — ${esc(m.sub)}</span><span class="tag">${esc(m.plane)}</span></div>`;
        item.addEventListener("mousedown", ev => {
          ev.preventDefault();
          c.plan = c.plan.concat([{
            id: rid(), exercise: m.exercise, group: m.group, sub: m.sub, plane: m.plane,
            pattern: m.pattern, joint: m.joint, primary: m.primary, secondary: m.secondary,
            sets: "", reps: "", load: "", notes: "",
          }]);
          addInput.value = "";
          closeAddResults();
          renderRehabEditor();
          scheduleCaseSave();
        });
        addResultsEl.appendChild(item);
      });
    }
    addAnother.appendChild(addResultsEl);
  });
  addInput.addEventListener("blur", () => setTimeout(closeAddResults, 150));
  wrap.appendChild(addAnother);

  const planLabel = document.createElement("div");
  planLabel.className = "field-label";
  planLabel.textContent = "Rehab Plan";
  wrap.appendChild(planLabel);

  if(!c.plan.length){
    const p = document.createElement("div");
    p.className = "suggest-empty";
    p.textContent = "Nothing added yet — use the suggestions above or the search box to build this client's plan.";
    wrap.appendChild(p);
  } else {
    c.plan.forEach(ex => wrap.appendChild(buildExRow(
      ex,
      () => scheduleCaseSave(),
      () => { c.plan = c.plan.filter(e => e.id !== ex.id); renderRehabEditor(); scheduleCaseSave(); },
      (rec) => {
        ex.exercise = rec.exercise; ex.group = rec.group; ex.sub = rec.sub; ex.plane = rec.plane;
        ex.pattern = rec.pattern; ex.joint = rec.joint; ex.primary = rec.primary; ex.secondary = rec.secondary;
        ex.notes = "";
        renderRehabEditor();
        scheduleCaseSave();
      }
    )));
  }

  host.appendChild(wrap);

  document.getElementById("caseNameInput").addEventListener("input", e => {
    c.clientName = e.target.value;
    scheduleCaseSave();
  });
  document.getElementById("dupCaseBtn").addEventListener("click", duplicateCase);
  wireCaseDeleteBtn(document.getElementById("delCaseBtn"));
}

/* ---------------------------------------------------------------------
   Nutrition -- build calorie/macro targets and lay out meals against
   them. Link a client to pull in their calculated targets (from the
   Body Metrics on their profile) and see their stated preferences while
   building; targets stay freely editable either way since the calculator
   is a starting point, not the final word.
--------------------------------------------------------------------- */
async function initNutrition(){
  db = await getDb();
  if(!db){
    flashNote("Saving isn't wired up in this preview, so nutrition plans you build here won't be kept — open the published page itself to save for real.", "dbnoteNutrition");
    renderNutritionList();
    renderNutritionEditor();
    return;
  }
  nutritionCol = db.collection("nutritionPlans");
  nutritionCol.orderBy("updatedAt", "desc").limit(200).onSnapshot(snap => {
    nutritionCache = snap.docs.map(d => Object.assign({id: d.id}, d.data()));
    renderNutritionList();
    if(currentNutritionId && !nutritionCache.find(p => p.id === currentNutritionId)){
      currentNutritionId = null; currentNutrition = null; renderNutritionEditor();
    }
    safeRenderClientProfile();
    safeRenderClientModeView();
  }, err => {
    flashNote("Couldn't load your nutrition plans (" + err.code + "). You can still build one, but it may not save.", "dbnoteNutrition");
  });
}

function renderNutritionList(){
  const el = document.getElementById("nutritionListEl");
  el.innerHTML = "";
  if(!nutritionCache.length){
    el.innerHTML = '<div class="emptyprogs">No nutrition plans yet — create one to get started.</div>';
    return;
  }
  nutritionCache.forEach(p => {
    const mealCount = (p.meals || []).length;
    const div = document.createElement("div");
    div.className = "progitem" + (p.id === currentNutritionId ? " active" : "");
    div.innerHTML = `${esc(p.name || "Untitled Plan")}<span class="meta">${fmtCount(mealCount,"meal")}</span>`;
    div.onclick = () => {
      currentNutritionId = p.id;
      currentNutrition = JSON.parse(JSON.stringify(p));
      renderNutritionList();
      renderNutritionEditor();
    };
    el.appendChild(div);
  });
}

document.getElementById("newNutritionBtn").addEventListener("click", async () => {
  const now = new Date().toISOString();
  const data = {name: "New Nutrition Plan", clientId: null, targets: {calories:"",proteinG:"",carbG:"",fatG:""}, meals: [], notes: "", createdAt: now, updatedAt: now};
  if(!nutritionCol){
    const id = "local-" + rid();
    const rec = Object.assign({id}, data);
    nutritionCache.unshift(rec);
    currentNutritionId = id; currentNutrition = JSON.parse(JSON.stringify(rec));
    renderNutritionList(); renderNutritionEditor();
    return;
  }
  try{
    const ref = await nutritionCol.add(data);
    currentNutritionId = ref.id;
    currentNutrition = Object.assign({id: ref.id}, data);
    renderNutritionEditor();
  }catch(e){
    flashNote("Couldn't create a new nutrition plan right now (" + e.code + ").", "dbnoteNutrition");
  }
});

function scheduleNutritionSave(){
  const badge = document.getElementById("nutritionSaveBadge");
  if(badge) badge.textContent = "Saving…";
  clearTimeout(nutritionSaveTimer);
  nutritionSaveTimer = setTimeout(async () => {
    if(!currentNutrition) return;
    const payload = {
      name: currentNutrition.name, clientId: currentNutrition.clientId || null,
      targets: currentNutrition.targets || {}, meals: currentNutrition.meals || [],
      notes: currentNutrition.notes || "", updatedAt: new Date().toISOString(),
    };
    const badgeEl = document.getElementById("nutritionSaveBadge");
    if(nutritionCol && !String(currentNutritionId).startsWith("local-")){
      try{
        await nutritionCol.doc(currentNutritionId).update(payload);
        if(badgeEl) badgeEl.textContent = "Saved";
      }catch(e){
        if(badgeEl) badgeEl.textContent = "Not saved (" + e.code + ")";
      }
    } else {
      const idx = nutritionCache.findIndex(p => p.id === currentNutritionId);
      if(idx > -1) nutritionCache[idx] = Object.assign({}, nutritionCache[idx], payload);
      if(badgeEl) badgeEl.textContent = "Saved (this session only)";
      renderNutritionList();
    }
  }, 600);
}

async function duplicateNutritionPlan(){
  if(!currentNutrition) return;
  const now = new Date().toISOString();
  const copy = {
    name: (currentNutrition.name || "Untitled Plan") + " (copy)",
    clientId: currentNutrition.clientId || null,
    targets: Object.assign({}, currentNutrition.targets || {}),
    meals: JSON.parse(JSON.stringify(currentNutrition.meals || [])),
    notes: currentNutrition.notes || "",
    createdAt: now, updatedAt: now,
  };
  if(nutritionCol){
    try{
      const ref = await nutritionCol.add(copy);
      currentNutritionId = ref.id;
      currentNutrition = Object.assign({id: ref.id}, copy);
      renderNutritionList(); renderNutritionEditor();
    }catch(e){
      flashNote("Couldn't duplicate this plan right now (" + e.code + ").", "dbnoteNutrition");
    }
  } else {
    const id = "local-" + rid();
    const rec = Object.assign({id}, copy);
    nutritionCache.unshift(rec);
    currentNutritionId = id; currentNutrition = JSON.parse(JSON.stringify(rec));
    renderNutritionList(); renderNutritionEditor();
  }
}

function wireNutritionDeleteBtn(btn){
  let armed = false;
  let resetTimer = null;
  btn.textContent = "Delete";
  btn.addEventListener("click", async () => {
    if(!armed){
      armed = true;
      btn.textContent = "Click again to delete";
      btn.classList.add("confirming");
      resetTimer = setTimeout(() => { armed = false; btn.textContent = "Delete"; btn.classList.remove("confirming"); }, 3000);
      return;
    }
    clearTimeout(resetTimer);
    const idToDelete = currentNutritionId;
    currentNutritionId = null; currentNutrition = null;
    renderNutritionEditor(); renderNutritionList();
    if(nutritionCol && !String(idToDelete).startsWith("local-")){
      try{ await nutritionCol.doc(idToDelete).delete(); }catch(e){ /* already reflected locally */ }
    } else {
      nutritionCache = nutritionCache.filter(p => p.id !== idToDelete);
      renderNutritionList();
    }
  });
}

function foodTotals(items){
  return (items || []).reduce((acc, it) => {
    acc.calories += parseFloat(it.calories) || 0;
    acc.protein += parseFloat(it.protein) || 0;
    acc.carbs += parseFloat(it.carbs) || 0;
    acc.fat += parseFloat(it.fat) || 0;
    return acc;
  }, {calories: 0, protein: 0, carbs: 0, fat: 0});
}
function planNutritionTotals(plan){
  const all = (plan.meals || []).reduce((arr, m) => arr.concat(m.items || []), []);
  return foodTotals(all);
}

function targetStatHtml(label, total, target){
  const t = parseFloat(target);
  const over = t && total > t * 1.05;
  return `<div class="targetstat${over ? " over" : ""}"><b>${Math.round(total)}${t ? " / " + Math.round(t) : ""}</b><span>${label}</span></div>`;
}

// Refreshes just the computed numbers (per-meal totals, plan totals-vs-
// targets) without rebuilding the editor -- called on every macro/target
// keystroke so the numbers stay live, while leaving every <input> alone
// so typing never loses focus or cursor position.
function updateNutritionTotals(plan){
  (plan.meals || []).forEach(meal => {
    const el = document.querySelector(`[data-meal-total="${meal.id}"]`);
    if(!el) return;
    const mt = foodTotals(meal.items);
    el.textContent = `${Math.round(mt.calories)} kcal · P ${Math.round(mt.protein)}g · C ${Math.round(mt.carbs)}g · F ${Math.round(mt.fat)}g`;
  });
  const totalsEl = document.getElementById("planTotalsRow");
  if(totalsEl){
    const totals = planNutritionTotals(plan);
    totalsEl.innerHTML = `
      ${targetStatHtml("Calories", totals.calories, plan.targets.calories)}
      ${targetStatHtml("Protein (g)", totals.protein, plan.targets.proteinG)}
      ${targetStatHtml("Carbs (g)", totals.carbs, plan.targets.carbG)}
      ${targetStatHtml("Fat (g)", totals.fat, plan.targets.fatG)}
    `;
  }
}

function buildFoodItemRow(item, meal){
  const row = document.createElement("div");
  row.className = "fooditemrow";
  row.innerHTML = `
    <input type="text" class="foodname" data-f="food" value="${esc(item.food||"")}" placeholder="Food or item">
    <input type="text" class="foodqty" data-f="qty" value="${esc(item.qty||"")}" placeholder="Qty, e.g. 150g">
    <input type="number" class="foodmacro" data-f="calories" value="${esc(item.calories||"")}" placeholder="Cals">
    <input type="number" class="foodmacro" data-f="protein" value="${esc(item.protein||"")}" placeholder="P (g)">
    <input type="number" class="foodmacro" data-f="carbs" value="${esc(item.carbs||"")}" placeholder="C (g)">
    <input type="number" class="foodmacro" data-f="fat" value="${esc(item.fat||"")}" placeholder="F (g)">
    <button class="exremove" type="button" title="Remove item">✕</button>
  `;
  row.querySelectorAll("[data-f]").forEach(inp => {
    inp.addEventListener("input", () => {
      item[inp.dataset.f] = inp.value;
      if(currentNutrition) updateNutritionTotals(currentNutrition);
      scheduleNutritionSave();
    });
  });
  row.querySelector(".exremove").addEventListener("click", () => {
    meal.items = (meal.items || []).filter(x => x.id !== item.id);
    renderNutritionEditor();
    scheduleNutritionSave();
  });
  return row;
}

function buildMealEl(meal, plan){
  const box = document.createElement("div");
  box.className = "mealbox";
  const head = document.createElement("div");
  head.className = "mealhead";
  head.innerHTML = `
    <input class="mealnameinput" value="${esc(meal.name||"")}" placeholder="Meal name">
    <button class="exremove" type="button" title="Remove meal">✕</button>
  `;
  head.querySelector(".mealnameinput").addEventListener("input", e => { meal.name = e.target.value; scheduleNutritionSave(); });
  head.querySelector(".exremove").addEventListener("click", () => {
    plan.meals = (plan.meals || []).filter(m => m.id !== meal.id);
    renderNutritionEditor();
    scheduleNutritionSave();
  });
  box.appendChild(head);

  (meal.items || []).forEach(item => box.appendChild(buildFoodItemRow(item, meal)));

  const addBtn = document.createElement("button");
  addBtn.className = "addfooditembtn";
  addBtn.type = "button";
  addBtn.textContent = "+ Add Food Item";
  addBtn.addEventListener("click", () => {
    meal.items = (meal.items || []).concat([{id: rid(), food: "", qty: "", calories: "", protein: "", carbs: "", fat: ""}]);
    renderNutritionEditor();
    scheduleNutritionSave();
  });
  box.appendChild(addBtn);

  const mt = foodTotals(meal.items);
  const mealTotalEl = document.createElement("div");
  mealTotalEl.className = "mealtotal";
  mealTotalEl.setAttribute("data-meal-total", meal.id);
  mealTotalEl.textContent = `${Math.round(mt.calories)} kcal · P ${Math.round(mt.protein)}g · C ${Math.round(mt.carbs)}g · F ${Math.round(mt.fat)}g`;
  box.appendChild(mealTotalEl);

  return box;
}

function renderNutritionEditor(){
  const host = document.getElementById("nutritionHost");
  host.innerHTML = "";
  if(!currentNutrition){
    host.innerHTML = '<div class="empty">Select a plan on the left, or create a new one, to set targets and build out meals.</div>';
    return;
  }
  const plan = currentNutrition;
  plan.meals = plan.meals || [];
  plan.targets = plan.targets || {calories: "", proteinG: "", carbG: "", fatG: ""};

  const wrap = document.createElement("div");
  wrap.className = "editor";

  const head = document.createElement("div");
  head.className = "editor-head";
  head.innerHTML = `
    <input class="proginput" id="nutritionNameInput" value="${esc(plan.name||"")}" placeholder="Plan name, e.g. Training Day">
    <div class="editor-actions">
      <button class="iconbtn" id="dupNutritionBtn" type="button">Duplicate</button>
      <button class="iconbtn" id="delNutritionBtn" type="button">Delete</button>
    </div>
  `;
  wrap.appendChild(head);

  const meta = document.createElement("div");
  meta.className = "progmeta";
  meta.innerHTML = `${fmtCount(plan.meals.length,"meal")} <span class="savebadge" id="nutritionSaveBadge"></span>`;
  wrap.appendChild(meta);

  const clientRow = document.createElement("div");
  clientRow.className = "clientrow";
  const clientLabel = document.createElement("span");
  clientLabel.className = "clientrowlabel";
  clientLabel.textContent = "Client";
  clientRow.appendChild(clientLabel);
  clientRow.appendChild(buildClientPicker(plan.clientId, client => {
    plan.clientId = client ? client.id : null;
    renderNutritionEditor();
    scheduleNutritionSave();
  }));
  const clientHint = document.createElement("div");
  clientHint.className = "statshint";
  clientHint.textContent = "Link a client to pull in their calculated calorie/macro targets and see their stated preferences while you build this plan.";
  clientRow.appendChild(clientHint);
  wrap.appendChild(clientRow);

  const linkedClient = plan.clientId ? clientsCache.find(c => c.id === plan.clientId) : null;

  if(linkedClient){
    const prefLabel = document.createElement("div");
    prefLabel.className = "field-label";
    prefLabel.textContent = (linkedClient.name || "This client") + "'s Nutrition Preferences";
    wrap.appendChild(prefLabel);
    const prefBox = document.createElement("div");
    prefBox.className = "prefreadout";
    prefBox.textContent = linkedClient.dietPrefs || "Nothing logged on this client's profile yet.";
    wrap.appendChild(prefBox);

    const calc = calcNutritionTargets(linkedClient);
    const calcLabel = document.createElement("div");
    calcLabel.className = "field-label";
    calcLabel.textContent = "Calculated Targets (from " + (linkedClient.name || "this client") + "'s profile)";
    wrap.appendChild(calcLabel);
    const calcBox = document.createElement("div");
    calcBox.className = "nutritiontargetsbox";
    if(!calc){
      calcBox.innerHTML = '<div class="emptyprogs">Add age, sex, height and body weight on this client&#39;s profile (Clients tab) to calculate targets automatically.</div>';
    } else {
      calcBox.innerHTML = `
        <div class="targetrow">
          <div class="targetstat"><b>${calc.bmr}</b><span>BMR</span></div>
          <div class="targetstat"><b>${calc.tdee}</b><span>TDEE</span></div>
          <div class="targetstat"><b>${calc.calories}</b><span>Calories</span></div>
          <div class="targetstat"><b>${calc.proteinG}g</b><span>Protein</span></div>
          <div class="targetstat"><b>${calc.carbG}g</b><span>Carbs</span></div>
          <div class="targetstat"><b>${calc.fatG}g</b><span>Fat</span></div>
        </div>
        <button class="usecalcbtn" id="useCalcTargetsBtn" type="button">→ Use These Targets</button>
      `;
    }
    wrap.appendChild(calcBox);
    const scopeNote = document.createElement("div");
    scopeNote.className = "scopenote";
    scopeNote.textContent = "Estimated from standard formulas (Mifflin-St Jeor + activity level) as a programming starting point, not medical or dietetic advice — adjust based on how the client actually responds.";
    wrap.appendChild(scopeNote);
  }

  const targetLabel = document.createElement("div");
  targetLabel.className = "field-label";
  targetLabel.textContent = "Plan Targets";
  wrap.appendChild(targetLabel);
  const targetRow = document.createElement("div");
  targetRow.className = "exrow-fields";
  targetRow.innerHTML = `
    <div class="exfield narrow"><label>Calories</label><input type="number" id="targetCalories" value="${esc(plan.targets.calories||"")}" placeholder="2400"></div>
    <div class="exfield narrow"><label>Protein (g)</label><input type="number" id="targetProtein" value="${esc(plan.targets.proteinG||"")}" placeholder="160"></div>
    <div class="exfield narrow"><label>Carbs (g)</label><input type="number" id="targetCarbs" value="${esc(plan.targets.carbG||"")}" placeholder="260"></div>
    <div class="exfield narrow"><label>Fat (g)</label><input type="number" id="targetFat" value="${esc(plan.targets.fatG||"")}" placeholder="65"></div>
  `;
  wrap.appendChild(targetRow);

  const mealsLabel = document.createElement("div");
  mealsLabel.className = "field-label";
  mealsLabel.textContent = "Meals";
  wrap.appendChild(mealsLabel);

  if(!plan.meals.length){
    const p = document.createElement("div");
    p.className = "suggest-empty";
    p.textContent = "No meals added yet.";
    wrap.appendChild(p);
  } else {
    plan.meals.forEach(meal => wrap.appendChild(buildMealEl(meal, plan)));
  }

  const addMealBtn = document.createElement("button");
  addMealBtn.className = "adddaybtn";
  addMealBtn.type = "button";
  addMealBtn.textContent = "+ Add Meal";
  addMealBtn.addEventListener("click", () => {
    plan.meals = plan.meals.concat([{id: rid(), name: "Meal " + (plan.meals.length + 1), items: []}]);
    renderNutritionEditor();
    scheduleNutritionSave();
  });
  wrap.appendChild(addMealBtn);

  const totals = planNutritionTotals(plan);
  const totalsLabel = document.createElement("div");
  totalsLabel.className = "field-label";
  totalsLabel.textContent = "Totals (from meals above) vs. Targets";
  wrap.appendChild(totalsLabel);
  const totalsBox = document.createElement("div");
  totalsBox.className = "nutritiontargetsbox";
  totalsBox.innerHTML = `<div class="targetrow" id="planTotalsRow">
    ${targetStatHtml("Calories", totals.calories, plan.targets.calories)}
    ${targetStatHtml("Protein (g)", totals.protein, plan.targets.proteinG)}
    ${targetStatHtml("Carbs (g)", totals.carbs, plan.targets.carbG)}
    ${targetStatHtml("Fat (g)", totals.fat, plan.targets.fatG)}
  </div>`;
  wrap.appendChild(totalsBox);

  const notesLabel = document.createElement("div");
  notesLabel.className = "field-label";
  notesLabel.textContent = "Notes";
  wrap.appendChild(notesLabel);
  const notesBox = document.createElement("textarea");
  notesBox.className = "diagnosisbox";
  notesBox.rows = 2;
  notesBox.placeholder = "Timing, supplement notes, hydration targets, anything else worth flagging…";
  notesBox.value = plan.notes || "";
  notesBox.addEventListener("input", e => { plan.notes = e.target.value; scheduleNutritionSave(); });
  wrap.appendChild(notesBox);

  host.appendChild(wrap);

  document.getElementById("nutritionNameInput").addEventListener("input", e => {
    plan.name = e.target.value;
    scheduleNutritionSave();
    renderNutritionList();
  });
  document.getElementById("dupNutritionBtn").addEventListener("click", duplicateNutritionPlan);
  wireNutritionDeleteBtn(document.getElementById("delNutritionBtn"));
  const targetFieldIds = [["targetCalories","calories"], ["targetProtein","proteinG"], ["targetCarbs","carbG"], ["targetFat","fatG"]];
  targetFieldIds.forEach(([id, key]) => {
    document.getElementById(id).addEventListener("input", e => {
      plan.targets[key] = e.target.value;
      updateNutritionTotals(plan);
      scheduleNutritionSave();
    });
  });
  const useCalcBtn = document.getElementById("useCalcTargetsBtn");
  if(useCalcBtn){
    useCalcBtn.addEventListener("click", () => {
      const calc = calcNutritionTargets(linkedClient);
      if(!calc) return;
      plan.targets = {calories: String(calc.calories), proteinG: String(calc.proteinG), carbG: String(calc.carbG), fatG: String(calc.fatG)};
      renderNutritionEditor();
      scheduleNutritionSave();
    });
  }
}

function openNutritionFromClient(plan){
  currentNutritionId = plan.id;
  currentNutrition = JSON.parse(JSON.stringify(plan));
  showTab("nutrition");
  renderNutritionList();
  renderNutritionEditor();
}

/* ---------------------------------------------------------------------
   Clients — one consolidated page per client: their own info and goals,
   plus every program and rehab case linked to them from the other two
   tabs. Clients themselves are already loaded eagerly at startup (see
   initCustomExercises below); this section just needs the Program Builder
   and Rehab data too, so opening this tab also kicks off loading those if
   they haven't been visited yet.
--------------------------------------------------------------------- */

function initClientsTab(){
  // Pull in program/rehab/nutrition data (normally lazy, per-tab) so the
  // consolidated view is accurate even if the coach opens Clients first.
  ensureBuilderInited();
  ensureRehabInited();
  if(!nutritionInited){ nutritionInited = true; initNutrition(); }
  if(!messagesInited){ messagesInited = true; initMessages(); }
  renderClientList();
  renderClientProfile();
}

function renderClientList(){
  const el = document.getElementById("clientListEl");
  el.innerHTML = "";
  if(!clientsCache.length){
    el.innerHTML = '<div class="emptyprogs">No clients yet — create one here, or link one from a program or rehab case.</div>';
    return;
  }
  clientsCache.forEach(c => {
    const progCount = programsCache.filter(p => programHasClient(p, c.id)).length;
    const caseCount = casesCache.filter(cc => cc.clientId === c.id).length;
    const nutCount = nutritionCache.filter(n => n.clientId === c.id).length;
    const div = document.createElement("div");
    div.className = "progitem" + (c.id === currentClientId ? " active" : "");
    div.innerHTML = `${esc(c.name||"Unnamed client")}<span class="meta">${fmtCount(progCount,"program")} · ${fmtCount(caseCount,"rehab case")} · ${fmtCount(nutCount,"nutrition plan")}</span>`;
    div.onclick = () => {
      currentClientId = c.id;
      renderClientList();
      renderClientProfile();
    };
    el.appendChild(div);
  });
}

document.getElementById("newClientBtn").addEventListener("click", async () => {
  const now = new Date().toISOString();
  const data = {name: "New Client", goals: "", notes: "", liftStats: [], weightUnit: "kg", accessCode: genAccessCode(), tasks: [], createdAt: now, updatedAt: now};
  if(!clientsCol){
    const id = "local-" + rid();
    const rec = Object.assign({id}, data);
    clientsCache.unshift(rec);
    currentClientId = id;
    renderClientList(); renderClientProfile();
    return;
  }
  try{
    const ref = await clientsCol.add(data);
    const rec = Object.assign({id: ref.id}, data);
    clientsCache.unshift(rec);
    currentClientId = ref.id;
    renderClientList(); renderClientProfile();
  }catch(e){
    flashNote("Couldn't create a new client right now (" + e.code + "). Try again in a moment.", "dbnoteClients");
  }
});

function wireClientDeleteBtn(btn){
  let armed = false;
  let resetTimer = null;
  btn.textContent = "Delete";
  btn.addEventListener("click", async () => {
    if(!armed){
      armed = true;
      btn.textContent = "Click again to delete";
      btn.classList.add("confirming");
      resetTimer = setTimeout(() => { armed = false; btn.textContent = "Delete"; btn.classList.remove("confirming"); }, 3000);
      return;
    }
    clearTimeout(resetTimer);
    const idToDelete = currentClientId;
    currentClientId = null;
    renderClientProfile(); renderClientList();
    if(clientsCol && !String(idToDelete).startsWith("local-")){
      try{ await clientsCol.doc(idToDelete).delete(); }catch(e){ /* already reflected locally */ }
    }
    clientsCache = clientsCache.filter(c => c.id !== idToDelete);
    renderClientList();
    // Programs/cases that were linked to this client simply fall back to
    // "no client linked" wherever their clientId no longer resolves — no
    // cascading delete of the coach's actual programming. Their editors may
    // already be rendered with the old (now-stale) linked-client chip, so
    // refresh whichever of them was showing this client.
    if(builderInited && currentProgram && programHasClient(currentProgram, idToDelete)) renderEditor();
    if(rehabInited && currentCase && currentCase.clientId === idToDelete) renderRehabEditor();
  });
}

function openProgramFromClient(program){
  currentId = program.id;
  currentProgram = JSON.parse(JSON.stringify(program));
  showTab("builder");
  renderProgramList();
  renderEditor();
}

function openCaseFromClient(caseRec){
  currentCaseId = caseRec.id;
  currentCase = JSON.parse(JSON.stringify(caseRec));
  showTab("rehab");
  renderCaseList();
  renderRehabEditor();
}

function todayKey(){ return new Date().toISOString().slice(0, 10); }
function weekStartKey(){
  const d = new Date();
  const day = (d.getDay() + 6) % 7; // 0 = Monday .. 6 = Sunday
  const monday = new Date(d.getFullYear(), d.getMonth(), d.getDate() - day);
  return monday.toISOString().slice(0, 10);
}

// Mon-first weekday list used by both the "specific days" task option and
// the client's Daily Agenda / training-day scheduling.
const WEEKDAYS = [
  {key: "mon", short: "Mon", label: "Monday"},
  {key: "tue", short: "Tue", label: "Tuesday"},
  {key: "wed", short: "Wed", label: "Wednesday"},
  {key: "thu", short: "Thu", label: "Thursday"},
  {key: "fri", short: "Fri", label: "Friday"},
  {key: "sat", short: "Sat", label: "Saturday"},
  {key: "sun", short: "Sun", label: "Sunday"},
];

// The 7 calendar dates (YYYY-MM-DD, same key format as todayKey()) for the
// CURRENT week, Monday first. Built by shifting *today's own Date object* by
// whole days (never resetting to local midnight first) so that the "today"
// entry is always exactly `now` run through the same toISOString().slice(0,10)
// transform as todayKey() itself -- guaranteeing dates[todayIdx].date ===
// todayKey() in every timezone, which matters because daily-task
// completions are keyed by exactly that string. (Resetting to local
// midnight before converting, the way weekStartKey() does for its own
// single Monday-only value, can shift the UTC calendar date by one in
// positive-offset timezones -- fine for weekStartKey()'s own self-consistent
// use, but it would silently desync this function's "today" from todayKey().)
function currentWeekDates(){
  const now = new Date();
  const dow = (now.getDay() + 6) % 7; // 0 = Monday .. 6 = Sunday
  return WEEKDAYS.map((wd, i) => {
    const dt = new Date(now.getTime());
    dt.setDate(dt.getDate() + (i - dow));
    return Object.assign({date: dt.toISOString().slice(0, 10)}, wd);
  });
}

// Small toggle-chip row for picking which weekdays a "specific days" task
// applies to -- reassigns the selected-days array rather than mutating it
// in place (it may be a value straight from a frozen db snapshot).
function buildDayChips(container, selectedDays, onToggle){
  container.innerHTML = "";
  container.className = "daychips";
  WEEKDAYS.forEach(wd => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pill daychip" + ((selectedDays || []).includes(wd.key) ? " active" : "");
    btn.textContent = wd.short;
    btn.addEventListener("click", () => onToggle(wd.key));
    container.appendChild(btn);
  });
}

// This week's client-authored goals -- distinct from client.tasks (the
// coach's own recurring daily/weekly habits) and from client.goals (a
// single freeform "big picture" text blob). The client writes their own
// short list of goals for the CURRENT week here and ticks each one off
// whenever they get to it; each week starts with an empty list (older
// weeks' items stay in the array, keyed by the week they belonged to, so
// nothing is destroyed -- they just fall out of "this week"'s view).
function currentWeekGoals(client){
  const wKey = weekStartKey();
  return (client.weeklyGoals || []).filter(g => g.weekKey === wKey);
}

function scheduleClientProgramActualsSave(program){
  cmSetSaveStatus("Saving…");
  clearTimeout(clientProgActualsSaveTimer);
  clientProgActualsSaveTimer = setTimeout(async () => {
    if(!program || !clientSession) return;
    // clientSession is whoever's client-mode view is on screen right now --
    // a real client logged in on their own device, or the coach previewing
    // one specific member of a group program -- either way, that's exactly
    // whose slice of actualsByClient this save belongs to.
    const actingClientId = clientSession.id;
    const isClientViewer = programHasClient(program, actingClientId);
    if(programsCol && !String(program.id).startsWith("local-")){
      // The COACH's own browser, with real db access -- used both when she
      // edits a program directly and when she's previewing a client. Her
      // local copy of actualsByClient already holds every assigned
      // client's own slice (nothing was redacted from her), so sending the
      // whole map back is a safe, complete replacement of just that one
      // top-level key -- it never touches the shared days/goal/etc.
      const payload = {actualsByClient: program.actualsByClient || {}, updatedAt: new Date().toISOString()};
      try{
        await programsCol.doc(program.id).update(payload);
        cmSetSaveStatus("Saved");
      }catch(e){
        cmSetSaveStatus(isClientViewer ? "Couldn't save — ask your coach to check your access" : "Couldn't save — try again in a moment");
      }
    } else if(isClientViewer && window.__clientPortal && clientSession.accessCode){
      // A logged-in CLIENT, logging their own sets. No Supabase session (see
      // tryClientLogin), so this goes through the access-code-checked RPC
      // instead of the coach's db shim -- and only ever sends THIS client's
      // own slice, so it can never overwrite the shared prescription or
      // another member's log, even if several people share this program.
      try{
        const mySlice = (program.actualsByClient && program.actualsByClient[actingClientId]) || {};
        await window.__clientPortal.saveProgramActualsForCode(clientSession.accessCode, program.id, mySlice);
        cmSetSaveStatus("Saved");
      }catch(e){
        console.error("[scheduleClientProgramActualsSave/client]", e);
        cmSetSaveStatus("Couldn't save — ask your coach to check your access");
      }
    } else {
      const idx = programsCache.findIndex(p => p.id === program.id);
      if(idx > -1) programsCache[idx] = Object.assign({}, programsCache[idx], {actualsByClient: program.actualsByClient || {}});
      cmSetSaveStatus("Saved (this session only)");
    }
  }, 600);
}

/* ---------------------------------------------------------------------
   Client Mode -- the stripped, read-mostly view a logged-in client sees:
   their own goals, tasks, program and rehab plan, and nothing belonging
   to any other client. Kept deliberately separate from the coach's
   editor components (renderEditor/renderRehabEditor/buildProgExRow) so
   this view can never accidentally expose an editing control that
   reaches beyond this one client's own data.
--------------------------------------------------------------------- */
// Finds the first linked program day (across ALL of this client's programs)
// that the client has scheduled onto the given weekday key -- returns
// {program, day} or null. client.trainingSchedule maps a program day's own
// id (globally unique via rid()) to a WEEKDAYS key, so this works fine even
// across multiple linked programs.
function scheduledDayFor(myPrograms, client, weekdayKey){
  const sched = client.trainingSchedule || {};
  for(const p of myPrograms){
    for(const day of (p.days || [])){
      if(sched[day.id] === weekdayKey) return {program: p, day: day};
    }
  }
  return null;
}

// Ticking off a task (daily/specific-days checkbox, or the weekly +/- tally)
// used to mutate task.completions in place -- `t.completions[key] = true`.
// completions is a nested object read straight off client.tasks, which for
// real (or frozen-mock) database data is frozen, and in this file's
// non-strict script an assignment into a frozen object fails SILENTLY: no
// thrown error, nothing saved, but the checkbox's own native DOM state still
// flips to "checked" the instant it's clicked. It looks ticked right up
// until anything else causes a re-render (which rebuilds it from the
// never-actually-changed data) and it snaps back to unticked -- "it ticks
// and then reverts back to unticked." Same root cause as the earlier
// frozen-data bugs this session, just in a spot the audit hadn't reached
// yet. Fixed by rebuilding client.tasks (and the one task's completions)
// as new objects/array instead of writing into the existing ones.
function setTaskCompletionEntry(client, taskId, key, value){
  client.tasks = (client.tasks || []).map(t => {
    if(t.id !== taskId) return t;
    const completions = Object.assign({}, t.completions || {});
    if(value === undefined) delete completions[key]; else completions[key] = value;
    return Object.assign({}, t, {completions});
  });
}

// Same idea as setTaskCompletionEntry, for the client's own weekly goals.
// A goal ticked off used to share a single `g.done` flag across every place
// it showed up -- so a goal assigned to both Monday and Thursday would cross
// itself out on BOTH days the moment either one was ticked. Goals now track
// completion per date, exactly like tasks already do, keyed by whichever
// date a given checkbox represents (a day card's own date, or "today" for
// the Today panel / the Tasks for the Big Picture list itself).
function setGoalCompletionEntry(client, goalId, key, value){
  client.weeklyGoals = (client.weeklyGoals || []).map(g => {
    if(g.id !== goalId) return g;
    const completions = Object.assign({}, g.completions || {});
    if(value === undefined) delete completions[key]; else completions[key] = value;
    return Object.assign({}, g, {completions});
  });
}

// Full, editable goal row -- checkbox (for the given date), the day-scope
// toggle + picker, and a remove button. Used both in the Tasks for the Big
// Picture list and in the Today panel, since a goal now lives in exactly
// ONE of those two places (see renderClientWeeklyGoals) rather than being
// duplicated in both.
function buildGoalItemRow(client, g, dateKey){
  const item = document.createElement("div");
  item.className = "weeklygoalitem";

  const isDone = !!(g.completions || {})[dateKey];
  const row = document.createElement("div");
  row.className = "weeklygoalrow" + (isDone ? " done" : "");
  const cb = document.createElement("input");
  cb.type = "checkbox";
  cb.checked = isDone;
  cb.addEventListener("change", () => {
    setGoalCompletionEntry(client, g.id, dateKey, cb.checked ? true : undefined);
    scheduleClientSave(client);
    renderClientModeView();
  });
  const label = document.createElement("span");
  label.className = "weeklygoaltext";
  label.textContent = g.text || "";
  const rm = document.createElement("button");
  rm.type = "button";
  rm.className = "taskrmbtn";
  rm.title = "Remove goal";
  rm.textContent = "✕";
  rm.addEventListener("click", () => {
    client.weeklyGoals = client.weeklyGoals.filter(x => x.id !== g.id);
    goalDaysEditorOpenIds.delete(g.id);
    scheduleClientSave(client);
    renderClientModeView();
  });
  row.appendChild(cb);
  row.appendChild(label);
  row.appendChild(rm);
  item.appendChild(row);

  const daysRow = document.createElement("div");
  daysRow.className = "goaldaysrow";
  const daysToggle = document.createElement("button");
  daysToggle.type = "button";
  daysToggle.className = "goaldaystoggle";
  const daysSummary = !g.days || !g.days.length
    ? "Every day"
    : g.days.map(k => (WEEKDAYS.find(w => w.key === k) || {}).short || k).join(", ");
  daysToggle.textContent = "📅 " + daysSummary;
  daysToggle.title = "Choose which day(s) this shows up on in your Weekly Agenda";
  daysToggle.addEventListener("click", () => {
    if(goalDaysEditorOpenIds.has(g.id)) goalDaysEditorOpenIds.delete(g.id); else goalDaysEditorOpenIds.add(g.id);
    renderClientModeView();
  });
  daysRow.appendChild(daysToggle);
  if(goalDaysEditorOpenIds.has(g.id)){
    const chipsEl = document.createElement("div");
    chipsEl.className = "daychips";
    buildDayChips(chipsEl, g.days, v => {
      const current = g.days || [];
      const i = current.indexOf(v);
      const newDays = i > -1 ? current.filter(x => x !== v) : current.concat([v]);
      client.weeklyGoals = (client.weeklyGoals || []).map(x => x.id === g.id ? Object.assign({}, x, {days: newDays}) : x);
      scheduleClientSave(client);
      renderClientModeView();
    });
    daysRow.appendChild(chipsEl);
  }
  item.appendChild(daysRow);

  return item;
}

// Builds one collapsible top-level "pill" block for the client portal --
// a <details>/<summary> pair styled like the existing .taskpresets picker,
// with its open/closed state tracked externally (getOpen/setOpen) since
// renderClientModeView rebuilds the whole DOM on every render. `fill` gets
// called with the pill's body element to populate it. `extraClass` (e.g.
// "cmnestedpill") styles a pill nested inside another pill (Today's
// Agenda / Training Plan / Rehab living inside The Road Map) a little
// smaller/flatter than a top-level one.
function buildCmPill(title, getOpen, setOpen, fill, extraClass){
  const details = document.createElement("details");
  details.className = "cmpill" + (extraClass ? " " + extraClass : "");
  details.open = getOpen();
  details.addEventListener("toggle", () => { setOpen(details.open); });
  const summary = document.createElement("summary");
  summary.textContent = title;
  details.appendChild(summary);
  const body = document.createElement("div");
  body.className = "cmpillbody";
  fill(body);
  details.appendChild(body);
  return details;
}

function buildDailyAgenda(client, myPrograms){
  // No heading of its own -- this now lives inside the "Full Week View"
  // pill nested in Today's Agenda, whose own summary already says what it
  // is.
  const box = document.createElement("div");

  const tasks = client.tasks || [];
  const weeklyTasks = tasks.filter(t => t.freq === "weekly");
  const dayBoundTasks = tasks.filter(t => t.freq !== "weekly");
  const anyScheduled = Object.keys(client.trainingSchedule || {}).length > 0;
  // "Tasks for the Big Picture" isn't day-specific by default, but it's
  // linked in here too -- an "every day" goal (or one specifically pinned to
  // this weekday) shows on this day's card same as a "daily" coach task
  // would. Each day card ticks off its OWN date in g.completions, so ticking
  // a goal off here does not cross it out on any other day it also shows up
  // on (see setGoalCompletionEntry).
  const bigPictureGoals = currentWeekGoals(client);

  if(!tasks.length && !myPrograms.length && !bigPictureGoals.length){
    const p = document.createElement("div");
    p.className = "cmempty";
    p.textContent = "Nothing set by your coach yet.";
    box.appendChild(p);
    return box;
  }

  // Tasks assigned a set number of times per week aren't tied to any single
  // day, so they get their own small tally list up top -- same +/- control
  // as before -- rather than being forced onto one weekday.
  if(weeklyTasks.length){
    const wKey = weekStartKey();
    const weeklyWrap = document.createElement("div");
    weeklyWrap.className = "tasklist";
    weeklyWrap.style.marginBottom = "14px";
    weeklyTasks.forEach(t => {
      const target = t.target || 1;
      const done = (t.completions || {})[wKey] || 0;
      const row = document.createElement("div");
      row.className = "cmtask";
      const label = document.createElement("span");
      label.textContent = t.title || "Task";
      row.appendChild(label);
      const tally = document.createElement("div");
      tally.className = "cmweektally";
      tally.innerHTML = `<button type="button" data-act="minus">−</button><span>${done} / ${target} this week</span><button type="button" data-act="plus">+</button>`;
      tally.querySelector('[data-act="plus"]').addEventListener("click", () => {
        setTaskCompletionEntry(client, t.id, wKey, Math.min(target, ((t.completions || {})[wKey] || 0) + 1));
        scheduleClientSave(client);
        renderClientModeView();
      });
      tally.querySelector('[data-act="minus"]').addEventListener("click", () => {
        setTaskCompletionEntry(client, t.id, wKey, Math.max(0, ((t.completions || {})[wKey] || 0) - 1));
        scheduleClientSave(client);
        renderClientModeView();
      });
      row.appendChild(tally);
      weeklyWrap.appendChild(row);
    });
    box.appendChild(weeklyWrap);
  }

  if(!dayBoundTasks.length && !anyScheduled && !bigPictureGoals.length){
    return box;
  }

  // Which day is "today" now gets its own spotlight up in Tasks for the Big
  // Picture instead of being highlighted here -- these day cards are just a
  // plain, even week-at-a-glance view, so no per-day "today" styling/badge.
  currentWeekDates().forEach(wd => {
    const dayCard = document.createElement("div");
    dayCard.className = "agendaday";
    const applicable = dayBoundTasks.filter(t => t.freq === "days" ? (t.days || []).includes(wd.key) : true);
    const note = (client.agendaNotes || {})[wd.key];
    const scheduled = scheduledDayFor(myPrograms, client, wd.key);
    // A goal pinned to specific day(s) only shows on those days; one left at
    // the default (no days picked) still shows on every day, as before.
    const dayGoals = bigPictureGoals.filter(g => !g.days || !g.days.length || g.days.includes(wd.key));

    dayCard.innerHTML = `<div class="agendadayhead"><span class="agendadayname">${esc(wd.label)}</span></div>`
      + (note ? `<div class="agendanote"><div class="agendanotelabel">📝 Notes from Coach</div>${esc(note)}</div>` : "");

    if(!applicable.length && !scheduled && !dayGoals.length){
      const p = document.createElement("div");
      p.className = "cmempty";
      p.textContent = "Nothing scheduled.";
      dayCard.appendChild(p);
    }

    if(dayGoals.length){
      const bpWrap = document.createElement("div");
      bpWrap.className = "agendabigpicture";
      bpWrap.innerHTML = `<div class="agendabigpicturelabel">🎯 Tasks for the Big Picture</div>`;
      dayGoals.forEach(g => {
        // This same goal can show on several different day cards (every
        // day, or a specific set the client picked) -- each card ticks off
        // its OWN date, so checking it off on Monday no longer crosses it
        // out on Thursday too.
        const isDone = !!(g.completions || {})[wd.date];
        const row = document.createElement("div");
        row.className = "cmtask" + (isDone ? " done" : "");
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.checked = isDone;
        cb.addEventListener("change", () => {
          setGoalCompletionEntry(client, g.id, wd.date, cb.checked ? true : undefined);
          scheduleClientSave(client);
          renderClientModeView();
        });
        const label = document.createElement("span");
        label.textContent = g.text || "Goal";
        row.appendChild(cb);
        row.appendChild(label);
        bpWrap.appendChild(row);
      });
      dayCard.appendChild(bpWrap);
    }

    applicable.forEach(t => {
      const isDone = !!(t.completions || {})[wd.date];
      const row = document.createElement("div");
      row.className = "cmtask" + (isDone ? " done" : "");
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = isDone;
      cb.addEventListener("change", () => {
        setTaskCompletionEntry(client, t.id, wd.date, cb.checked ? true : undefined);
        scheduleClientSave(client);
        renderClientModeView();
      });
      const label = document.createElement("span");
      label.textContent = t.title || "Task";
      row.appendChild(cb);
      row.appendChild(label);
      dayCard.appendChild(row);
    });

    if(scheduled){
      const weeks = weeksCountFor(scheduled.program);
      const progWrap = document.createElement("div");
      progWrap.className = "agendaprogram";
      const progLabel = document.createElement("div");
      progLabel.className = "agendaprogramlabel";
      progLabel.textContent = "🏋️ " + (scheduled.program.name || "Program");
      progWrap.appendChild(progLabel);
      progWrap.appendChild(buildClientDayPill(scheduled.program, scheduled.day, client, weeks));
      dayCard.appendChild(progWrap);
    }

    box.appendChild(dayCard);
  });

  return box;
}

// Shared by buildTodayPanel (to decide its own empty state) and
// renderClientWeeklyGoals (to decide which prompt to show under the goal
// list -- see there for why that matters).
function todaysAgendaItems(client, myPrograms){
  const todaysKey = todayKey();
  const wd = currentWeekDates().find(d => d.date === todaysKey) || WEEKDAYS[0];
  const tasks = client.tasks || [];
  const applicable = tasks.filter(t => t.freq !== "weekly" && (t.freq === "days" ? (t.days || []).includes(wd.key) : true));
  const note = (client.agendaNotes || {})[wd.key];
  const scheduled = scheduledDayFor(myPrograms || [], client, wd.key);
  // Every goal that applies today shows here -- both ones pinned specifically
  // to today and ones left at the default "every day" -- the same rule a
  // "daily" (as opposed to "specific days") task already follows. A new
  // goal added right under this panel (see renderClientWeeklyGoals) should
  // visibly land here, not just in the full list further down.
  const todaysGoals = currentWeekGoals(client).filter(g => !g.days || !g.days.length || g.days.includes(wd.key));
  const isEmpty = !applicable.length && !scheduled && !todaysGoals.length;
  return {wd, applicable, note, scheduled, todaysGoals, isEmpty};
}

function buildTodayPanel(client, myPrograms){
  // The "which day is today" spotlight used to live in the Weekly Agenda
  // (a highlighted card with a "Today" badge, buried after 6 other days).
  // Per the coach's request, that emphasis now lives here instead, right at
  // the top of Tasks for the Big Picture, so today's notes/tasks/program are
  // the very first thing the client sees.
  const {wd, applicable, note, scheduled, todaysGoals, isEmpty} = todaysAgendaItems(client, myPrograms);

  const panel = document.createElement("div");
  panel.className = "agendatoday";
  panel.innerHTML = `<div class="agendadayhead"><span class="agendatodaybadge">Today</span><span class="agendadayname">${esc(wd.label)}</span></div>`
    + (note ? `<div class="agendanote"><div class="agendanotelabel">📝 Notes from Coach</div>${esc(note)}</div>` : "");

  if(isEmpty){
    const p = document.createElement("div");
    p.className = "cmempty";
    p.textContent = "Nothing scheduled for today.";
    panel.appendChild(p);
  }

  // A goal that applies today lives HERE and only here -- not also repeated
  // in the Tasks for the Big Picture list below (see renderClientWeeklyGoals)
  // -- so it gets the full editable row (day-picker + remove), not just a
  // bare checkbox, since this is now its one and only home while it applies.
  todaysGoals.forEach(g => {
    panel.appendChild(buildGoalItemRow(client, g, wd.date));
  });

  applicable.forEach(t => {
    const isDone = !!(t.completions || {})[wd.date];
    const row = document.createElement("div");
    row.className = "cmtask" + (isDone ? " done" : "");
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = isDone;
    cb.addEventListener("change", () => {
      setTaskCompletionEntry(client, t.id, wd.date, cb.checked ? true : undefined);
      scheduleClientSave(client);
      renderClientModeView();
    });
    const label = document.createElement("span");
    label.textContent = t.title || "Task";
    row.appendChild(cb);
    row.appendChild(label);
    panel.appendChild(row);
  });

  if(scheduled){
    const weeks = weeksCountFor(scheduled.program);
    const progWrap = document.createElement("div");
    progWrap.className = "agendaprogram";
    const progLabel = document.createElement("div");
    progLabel.className = "agendaprogramlabel";
    progLabel.textContent = "🏋️ " + (scheduled.program.name || "Program");
    progWrap.appendChild(progLabel);
    // Same toggle shown on a program card under Training Plan -- it's a
    // client-level setting, not a per-program one, but a client who only
    // ever opens today's scheduled day from the Agenda (never Training
    // Plan) had no way to find or turn it on before this.
    if(weeks > 1){
      progWrap.appendChild(buildSuggestWeightToggle(client));
    }
    // Same collapsible day pill shown under Training Plan, sharing its
    // open/closed state (cmTrainingDayPillOpenIds) -- expanding today's
    // training here keeps it expanded if the client also opens Training
    // Plan, and vice versa, per the coach's "should also correspond" spec.
    progWrap.appendChild(buildClientDayPill(scheduled.program, scheduled.day, client, weeks));
    panel.appendChild(progWrap);
  }

  return panel;
}

function renderClientWeeklyGoals(client, myPrograms){
  // Client-authored, client-editable: the client writes their own goals for
  // this week and ticks them off "daily or as they accomplish them" -- add
  // an item any time during the week, check it off whenever it's done.
  client.weeklyGoals = client.weeklyGoals || [];
  // No heading of its own -- this now lives directly inside the "Today's
  // Agenda" pill, whose own summary already says what it is.
  const box = document.createElement("div");
  const hint = document.createElement("div");
  hint.className = "statshint";
  hint.textContent = "Set a few things you want to get done this week and check them off as you go — pick from the suggestions below or type your own. The list clears out fresh each Monday, and anything still open shows up day-by-day in your Weekly Agenda too.";
  box.appendChild(hint);

  box.appendChild(buildTodayPanel(client, myPrograms));

  // A goal that applies today (every-day default, or specifically pinned to
  // today) now lives ONLY in the pink Today panel just above -- showing it
  // again here too was pure duplication ("it adds to the daily box and then
  // remains directly under the daily box"). This list is for goals pinned
  // to day(s) that DON'T include today; once today rolls around for one of
  // those, it'll move up into the Today panel on its own.
  const {wd: todayWd, isEmpty: todayIsEmpty} = todaysAgendaItems(client, myPrograms);
  const goals = currentWeekGoals(client);
  const otherDayGoals = goals.filter(g => g.days && g.days.length && !g.days.includes(todayWd.key));
  const list = document.createElement("div");
  list.className = "weeklygoallist";
  if(!otherDayGoals.length){
    const p = document.createElement("div");
    // The pink Today box right above already has something in it (a coach
    // note, a task, a scheduled program, or a goal that applies today) --
    // "no goals set" would read oddly next to a box that's clearly not
    // empty, so the prompt shifts to inviting one more, specifically for
    // today, instead. Genuinely nothing going on yet (today's box AND the
    // goal list are both empty) keeps the original wording.
    p.className = todayIsEmpty ? "cmempty" : "cmempty weeklygoalinvite";
    p.textContent = todayIsEmpty
      ? "No goals set for this week yet — add one below."
      : "Have another goal for today? Add here:";
    list.appendChild(p);
  } else {
    otherDayGoals.forEach(g => {
      list.appendChild(buildGoalItemRow(client, g, todayKey()));
    });
  }
  box.appendChild(list);

  // Suggested tasks & habit builders -- the same preset categories the
  // coach picks from, offered here so the client can self-serve a
  // ready-made habit onto their own big-picture list instead of only
  // typing something from scratch. Picking one just adds its title as a
  // plain weekly goal (same shape as typing it in) -- no frequency concept
  // here, matching how the rest of this list already works.
  const presetsDetails = document.createElement("details");
  presetsDetails.className = "taskpresets";
  presetsDetails.open = clientGoalPresetsOpen;
  presetsDetails.addEventListener("toggle", () => { clientGoalPresetsOpen = presetsDetails.open; });
  const presetsSummary = document.createElement("summary");
  presetsSummary.textContent = "Suggested tasks & habit builders";
  presetsDetails.appendChild(presetsSummary);
  Object.keys(TASK_PRESETS).forEach(category => {
    const catLabel = document.createElement("div");
    catLabel.className = "taskpresetcat";
    catLabel.textContent = category;
    presetsDetails.appendChild(catLabel);
    const pillRow = document.createElement("div");
    pillRow.className = "pills";
    TASK_PRESETS[category].forEach(preset => {
      const alreadyAdded = goals.some(g => g.text === preset.title);
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = "pill taskpresetpill" + (alreadyAdded ? " zero" : "");
      pill.textContent = (alreadyAdded ? "✓ " : "☐ ") + preset.title;
      if(alreadyAdded){
        pill.title = "Already on this week's list";
      } else {
        pill.title = "Add to this week's list";
        pill.addEventListener("click", () => {
          client.weeklyGoals = (client.weeklyGoals || []).concat([{id: rid(), text: preset.title, weekKey: weekStartKey(), completions: {}}]);
          scheduleClientSave(client);
          renderClientModeView();
        });
      }
      pillRow.appendChild(pill);
    });
    presetsDetails.appendChild(pillRow);
  });
  box.appendChild(presetsDetails);

  const addWrap = document.createElement("div");
  addWrap.className = "weeklygoaladdwrap";
  const addRow = document.createElement("div");
  addRow.className = "weeklygoaladdrow";
  addRow.innerHTML = `<input type="text" placeholder="e.g. Get to bed by 10:30 four nights this week" maxlength="140"><button type="button">+ Add Goal</button>`;
  const addInput = addRow.querySelector("input");
  const addBtn = addRow.querySelector("button");
  addInput.value = pendingGoalDraftText;
  addInput.addEventListener("input", e => { pendingGoalDraftText = e.target.value; });
  const commitAdd = () => {
    const text = addInput.value.trim();
    if(!text) return;
    client.weeklyGoals = (client.weeklyGoals || []).concat([{id: rid(), text, weekKey: weekStartKey(), completions: {}, days: pendingGoalDraftDays.slice()}]);
    pendingGoalDraftText = "";
    pendingGoalDraftDays = [];
    pendingGoalDaysEditorOpen = false;
    scheduleClientSave(client);
    renderClientModeView();
  };
  addBtn.addEventListener("click", commitAdd);
  addInput.addEventListener("keydown", e => { if(e.key === "Enter"){ e.preventDefault(); commitAdd(); } });
  addWrap.appendChild(addRow);

  // Optional day-picker for the goal about to be added -- collapsed by
  // default (most goals apply every day), expand to pin it to specific
  // weekday(s) instead, same picker used throughout for tasks.
  const addDaysToggle = document.createElement("button");
  addDaysToggle.type = "button";
  addDaysToggle.className = "goaldaystoggle";
  const addDaysSummary = !pendingGoalDraftDays.length
    ? "📅 Assign to specific day(s) (optional — defaults to every day)"
    : "📅 " + pendingGoalDraftDays.map(k => (WEEKDAYS.find(w => w.key === k) || {}).short || k).join(", ");
  addDaysToggle.textContent = addDaysSummary;
  addDaysToggle.addEventListener("click", () => {
    pendingGoalDaysEditorOpen = !pendingGoalDaysEditorOpen;
    renderClientModeView();
  });
  addWrap.appendChild(addDaysToggle);
  if(pendingGoalDaysEditorOpen){
    const addDaysChips = document.createElement("div");
    addDaysChips.className = "daychips";
    buildDayChips(addDaysChips, pendingGoalDraftDays, v => {
      const i = pendingGoalDraftDays.indexOf(v);
      pendingGoalDraftDays = i > -1 ? pendingGoalDraftDays.filter(x => x !== v) : pendingGoalDraftDays.concat([v]);
      renderClientModeView();
    });
    addWrap.appendChild(addDaysChips);
  }
  box.appendChild(addWrap);

  return box;
}

// Appends a dated snapshot to client.goalsLog whenever their stated goal
// actually changes -- skips a no-op save (same text, or newly blank) so the
// log only grows on real changes, giving both the client and the coach a
// running history of how the goal's been restated over time, not just
// whatever it currently says.
function appendGoalsLogEntry(client, newText){
  const trimmed = (newText || "").trim();
  const log = client.goalsLog || [];
  const last = log[log.length - 1];
  if(!trimmed || (last && last.text === trimmed)) return;
  client.goalsLog = log.concat([{id: rid(), text: trimmed, at: new Date().toISOString()}]);
}

// The collapsible "Past goals" list under a goals box -- shared by the
// client's own "Big Picture Goals" pill and the coach's Client Profile
// page, so both sides see the exact same history the exact same way.
function buildGoalsHistoryBox(client){
  const log = (client.goalsLog || []).slice().reverse();
  if(!log.length) return null;
  const hist = document.createElement("details");
  hist.className = "goalshistory";
  hist.open = cmGoalsHistoryOpenIds.has(client.id);
  hist.addEventListener("toggle", () => {
    if(hist.open) cmGoalsHistoryOpenIds.add(client.id); else cmGoalsHistoryOpenIds.delete(client.id);
  });
  const summary = document.createElement("summary");
  summary.textContent = `Past goals (${log.length})`;
  hist.appendChild(summary);
  log.forEach(entry => {
    const row = document.createElement("div");
    row.className = "goalshistoryrow";
    row.innerHTML = `<span class="goalshistorydate">${esc(fmtShortDate(entry.at))}</span><span>${esc(entry.text)}</span>`;
    hist.appendChild(row);
  });
  return hist;
}

// Coach-side only: every training day this client has finished and saved
// from their own view (see buildSessionSaveBox), gathered across every
// program they're assigned to and shown newest first. Read-only -- a
// client can't come back and edit a session once it's logged, so this is
// a genuine record, not another editable field.
function buildSessionLogHistoryBox(client){
  const myPrograms = programsCache.filter(p => programHasClient(p, client.id));
  const entries = [];
  myPrograms.forEach(p => {
    ((p.sessionLogsByClient && p.sessionLogsByClient[client.id]) || []).forEach(e => entries.push(e));
  });
  entries.sort((a, b) => (b.completedAt || "").localeCompare(a.completedAt || ""));
  if(!entries.length) return null;
  const hist = document.createElement("details");
  hist.className = "goalshistory";
  hist.open = cmSessionLogHistoryOpenIds.has(client.id);
  hist.addEventListener("toggle", () => {
    if(hist.open) cmSessionLogHistoryOpenIds.add(client.id); else cmSessionLogHistoryOpenIds.delete(client.id);
  });
  const summary = document.createElement("summary");
  summary.textContent = `Sessions logged (${entries.length})`;
  hist.appendChild(summary);
  entries.forEach(e => {
    const row = document.createElement("div");
    row.className = "goalshistoryrow";
    const where = [e.programName, e.dayLabel, e.weekLabel].filter(Boolean).join(" — ");
    const rpeTag = e.rpe ? `RPE ${e.rpe}` : "";
    const line = [where, rpeTag].filter(Boolean).join(" · ") + (e.notes ? ` — ${e.notes}` : "");
    row.innerHTML = `<span class="goalshistorydate">${esc(fmtDateTime(e.completedAt))}</span><span>${esc(line)}</span>`;
    hist.appendChild(row);
  });
  return hist;
}

function buildClientStatsView(client){
  // Reuses the exact same add/remove/unit-toggle stats box as the coach's
  // own client profile page -- the client can log a rep-max test they know
  // right from their own view, and it carries straight over to whatever
  // program the coach builds them (matching loads already show real
  // weight instead of just %1RM). Lives inside the "Personal Stats" pill
  // now, so just a labeled subsection rather than its own top-level
  // section.
  const box = document.createElement("div");
  const label = document.createElement("div");
  label.className = "field-label";
  label.textContent = "My Lifting Stats";
  box.appendChild(label);
  box.appendChild(buildStatsBox(null, client, renderClientModeView));
  return box;
}

// Body-metrics half of what used to be "My Info" -- age/sex/height/weight
// plus the weight-tracker log. Lives inside the "Personal Stats" pill.
// Split from the nutrition-preference half (buildClientNutritionPrefs,
// just below) so each has its own dedicated top-level pill per the
// coach's spec.
function buildClientBodyMetrics(client){
  const sec = document.createElement("div");

  const hint = document.createElement("div");
  hint.className = "statshint";
  hint.textContent = "Fill this in so your coach can build your program and nutrition plan around you — update it any time your stats change.";
  sec.appendChild(hint);

  const bmBox = document.createElement("div");
  bmBox.className = "bodymetricsbox";
  const wUnit = client.weightUnit || "kg";
  bmBox.innerHTML = `
    <div class="exfield narrow"><label>Age</label><input type="number" id="cmAge" min="1" max="120" value="${esc(client.age||"")}" placeholder="28"></div>
    <div class="exfield narrow"><label>Sex</label>
      <select id="cmSex">
        <option value="" ${!client.sex ? "selected" : ""}>—</option>
        <option value="female" ${client.sex === "female" ? "selected" : ""}>Female</option>
        <option value="male" ${client.sex === "male" ? "selected" : ""}>Male</option>
      </select>
    </div>
    <div class="exfield narrow"><label>Height</label><input type="number" id="cmHeight" min="0" value="${esc(client.heightValue||"")}" placeholder="${client.heightUnit === "in" ? "68" : "173"}"></div>
    <div class="exfield narrow"><label>Unit</label>
      <select id="cmHeightUnit">
        <option value="cm" ${client.heightUnit !== "in" ? "selected" : ""}>cm</option>
        <option value="in" ${client.heightUnit === "in" ? "selected" : ""}>in</option>
      </select>
    </div>
    <div class="exfield narrow"><label>Body Weight (${esc(wUnit)})</label><input type="number" id="cmWeight" min="0" step="0.1" value="${esc(client.bodyWeight||"")}" placeholder="70"></div>
  `;
  sec.appendChild(bmBox);

  sec.appendChild(buildBodyMetricsPill(client, renderClientModeView));

  sec.querySelector("#cmAge").addEventListener("input", e => { client.age = e.target.value; scheduleClientSave(client); });
  sec.querySelector("#cmSex").addEventListener("change", e => { client.sex = e.target.value; scheduleClientSave(client); renderClientModeView(); });
  sec.querySelector("#cmHeight").addEventListener("input", e => { client.heightValue = e.target.value; scheduleClientSave(client); });
  sec.querySelector("#cmHeightUnit").addEventListener("change", e => { client.heightUnit = e.target.value; scheduleClientSave(client); renderClientModeView(); });
  sec.querySelector("#cmWeight").addEventListener("input", e => { client.bodyWeight = e.target.value; scheduleClientSave(client); });

  return sec;
}

// Nutrition-preference half of what used to be "My Info" -- activity
// level, goal, free-text diet preferences, and the calculated targets.
// Lives inside the "Nutrition" pill, alongside whatever plan the coach has
// put together (see buildClientNutritionCard).
function buildClientNutritionPrefs(client){
  const sec = document.createElement("div");

  const hint = document.createElement("div");
  hint.className = "statshint";
  hint.textContent = "Set your preferences so your coach can build your nutrition plan around them — update any time they change.";
  sec.appendChild(hint);

  const prefsBoxWrap = document.createElement("div");
  prefsBoxWrap.className = "bodymetricsbox";
  prefsBoxWrap.innerHTML = `
    <div class="exfield"><label>Activity Level</label>
      <select id="cmActivity">
        ${Object.keys(ACTIVITY_LEVELS).map(k => `<option value="${k}" ${client.activityLevel === k ? "selected" : ""}>${esc(ACTIVITY_LEVELS[k].label)}</option>`).join("")}
      </select>
    </div>
    <div class="exfield"><label>Nutrition Goal</label>
      <select id="cmNutGoal">
        ${Object.keys(NUTRITION_GOALS).map(k => `<option value="${k}" ${client.nutritionGoal === k ? "selected" : ""}>${esc(NUTRITION_GOALS[k].label)}</option>`).join("")}
      </select>
    </div>
  `;
  sec.appendChild(prefsBoxWrap);

  const prefsLabel = document.createElement("div");
  prefsLabel.className = "field-label";
  prefsLabel.textContent = "Nutrition Preferences";
  sec.appendChild(prefsLabel);
  const prefsBox = document.createElement("textarea");
  prefsBox.className = "diagnosisbox";
  prefsBox.rows = 2;
  prefsBox.placeholder = "e.g. Vegetarian, dairy-free, dislikes mushrooms, prefers 4 meals a day.";
  prefsBox.value = client.dietPrefs || "";
  prefsBox.addEventListener("input", e => { client.dietPrefs = e.target.value; scheduleClientSave(client); });
  sec.appendChild(prefsBox);

  const calc = calcNutritionTargets(client);
  if(calc){
    const targetsLabel = document.createElement("div");
    targetsLabel.className = "field-label";
    targetsLabel.textContent = "My Nutrition Targets";
    sec.appendChild(targetsLabel);
    const targetsBox = document.createElement("div");
    targetsBox.className = "nutritiontargetsbox";
    targetsBox.innerHTML = `<div class="targetrow">
      <div class="targetstat"><b>${calc.calories}</b><span>Calories</span></div>
      <div class="targetstat"><b>${calc.proteinG}g</b><span>Protein</span></div>
      <div class="targetstat"><b>${calc.carbG}g</b><span>Carbs</span></div>
      <div class="targetstat"><b>${calc.fatG}g</b><span>Fat</span></div>
    </div>`;
    sec.appendChild(targetsBox);
    const scopeNote = document.createElement("div");
    scopeNote.className = "scopenote";
    scopeNote.textContent = "Estimated from standard formulas, not medical or dietetic advice — your coach will fine-tune this from here.";
    sec.appendChild(scopeNote);
  }

  sec.querySelector("#cmActivity").addEventListener("change", e => { client.activityLevel = e.target.value; scheduleClientSave(client); renderClientModeView(); });
  sec.querySelector("#cmNutGoal").addEventListener("change", e => { client.nutritionGoal = e.target.value; scheduleClientSave(client); renderClientModeView(); });

  return sec;
}

// Which week (0-based) of `program`'s progression the client sees by
// default. Nothing is saved for this until they actually pick a week
// (see setSelectedWeekIndex) -- until then, this guesses "the week they're
// on" by finding the last week that has ANY logged actual (reps or weight)
// anywhere in the program, and defaulting to the week right after it. A
// program nobody has logged anything for yet defaults to Week 1.
function getSelectedWeekIndex(program, clientId){
  const weeks = weeksCountFor(program);
  if(weeks <= 1) return 0;
  const saved = cmProgramWeekIndex[program.id];
  if(saved !== undefined) return Math.max(0, Math.min(weeks - 1, saved));
  let lastLogged = -1;
  (program.days || []).forEach(day => (day.exercises || []).forEach(ex => {
    if(Array.isArray(ex.progression)){
      ex.progression.forEach((wk, i) => {
        if(hasLoggedAnySetFor(program, clientId, ex, i)) lastLogged = Math.max(lastLogged, i);
      });
    }
  }));
  return Math.max(0, Math.min(weeks - 1, lastLogged + 1));
}

function setSelectedWeekIndex(program, idx){
  cmProgramWeekIndex[program.id] = idx;
}

// The "Viewing: Week N of M" dropdown -- one per program, lets the client
// jump their whole program's view to a different week. Only shown for
// multi-week programs; a single-week program has nothing to pick between.
function buildWeekSelector(program, clientId){
  const weeks = weeksCountFor(program);
  if(weeks <= 1) return null;
  const idx = getSelectedWeekIndex(program, clientId);
  const wrap = document.createElement("label");
  wrap.className = "cmweekselect";
  wrap.innerHTML = `Viewing:
    <select>
      ${Array.from({length: weeks}, (_, i) => `<option value="${i}" ${i === idx ? "selected" : ""}>Week ${i + 1} of ${weeks}</option>`).join("")}
    </select>`;
  wrap.querySelector("select").addEventListener("change", e => {
    setSelectedWeekIndex(program, parseInt(e.target.value, 10));
    renderClientModeView();
  });
  return wrap;
}

// The per-set entry rows for one exercise in one week -- one row per
// prescribed set (e.g. "3x9" prescribes 3 rows), each with its own reps and
// weight fields, plus a button to log a set beyond what was prescribed.
// Reads/writes through program.actualsByClient[clientId] (see
// ensureClientActualSets et al.) rather than the wk object itself, so this
// same shared prescription can be logged against independently by everyone
// assigned to a group program.
function buildClientSetRows(program, clientId, ex, weekIndex){
  const wrap = document.createElement("div");
  wrap.className = "cmsetrows";
  const wk = ex.progression[weekIndex];
  const actualSets = ensureClientActualSets(program, clientId, ex, weekIndex);
  actualSets.forEach((setEntry, si) => {
    const setRow = document.createElement("div");
    setRow.className = "cmsetrow";
    setRow.innerHTML = `
      <span class="cmsetnum">Set ${si + 1}</span>
      <input type="text" inputmode="decimal" data-sf="reps" value="${esc(setEntry.reps || "")}" placeholder="Reps">
      <input type="text" inputmode="decimal" data-sf="weight" value="${esc(setEntry.weight || "")}" placeholder="Weight">
    `;
    setRow.querySelectorAll("[data-sf]").forEach(inp => {
      inp.addEventListener("input", () => {
        const fresh = getClientActuals(program, clientId, ex, weekIndex).slice();
        fresh[si] = Object.assign({}, fresh[si], {[inp.dataset.sf]: inp.value});
        setClientActuals(program, clientId, ex, weekIndex, fresh);
        scheduleClientProgramActualsSave(program);
      });
    });
    wrap.appendChild(setRow);
  });
  const addBtn = document.createElement("button");
  addBtn.type = "button";
  addBtn.className = "cmaddsetbtn";
  addBtn.textContent = "+ Add Set";
  addBtn.addEventListener("click", () => {
    const withExtra = ensureClientActualSets(program, clientId, ex, weekIndex).concat([{reps: "", weight: ""}]);
    setClientActuals(program, clientId, ex, weekIndex, withExtra);
    scheduleClientProgramActualsSave(program);
    renderClientModeView();
  });
  wrap.appendChild(addBtn);
  return wrap;
}

// A small "Watch Demo" link, looked up from the live exercise library by
// exercise name -- a program's saved exercises don't carry their own
// demoUrl, so this looks it up fresh at render time the same way
// exerciseRole() already does via findLibraryRecord().
function appendWatchDemoLink(container, ex){
  const rec = findLibraryRecord(ex);
  if(!rec || !rec.demoUrl) return;
  const link = document.createElement("a");
  link.className = "demolink cmdemolink";
  link.href = rec.demoUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.title = "Search YouTube for a demo of this exercise";
  link.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Watch Demo';
  container.appendChild(link);
}

function buildClientExRow(ex, program, weeks, weekIndex, client){
  const clientId = client.id;
  const row = document.createElement("div");
  row.className = "cmexrow";
  if(!ex.id) ex.id = rid(); // safety net for any older exercise saved before ids were added

  // Per-set logging works the same whether this program has one week or
  // many -- progressionOf(ex, 1) just treats a single-week program as a
  // one-entry progression, so there's only ever one code path to maintain.
  const prog = progressionOf(ex, weeks);
  const i = Math.max(0, Math.min(weeks - 1, weekIndex || 0));
  const wk = prog[i] || (prog[i] = {});

  // A swap only ever applies to the exact week it was made in -- see
  // getClientSwap/setClientSwap above -- so this week might be swapped even
  // while other weeks of the same exercise are still whatever's prescribed.
  const swap = getClientSwap(program, clientId, ex, i);
  const displayEx = swap || ex;

  const head = document.createElement("div");
  head.className = "cmexhead";
  const nameWrap = document.createElement("div");
  const nameEl = document.createElement("div");
  nameEl.className = "cmexname";
  nameEl.textContent = displayEx.exercise;
  nameWrap.appendChild(nameEl);
  if(swap){
    const swapNote = document.createElement("div");
    swapNote.className = "cmswapnote";
    swapNote.textContent = "Swapped from " + ex.exercise + " for this week";
    nameWrap.appendChild(swapNote);
  }
  head.appendChild(nameWrap);
  appendWatchDemoLink(head, displayEx);

  const exActions = document.createElement("div");
  exActions.className = "exrow-actions";
  const swapBtn = document.createElement("button");
  swapBtn.type = "button";
  swapBtn.className = "exswap cmexswap";
  swapBtn.title = "Don't have access to this today? Swap it for something else, just for this week.";
  swapBtn.textContent = "⇄ Swap";
  exActions.appendChild(swapBtn);
  if(swap){
    const revertBtn = document.createElement("button");
    revertBtn.type = "button";
    revertBtn.className = "cmexrevert";
    revertBtn.title = "Revert to the originally programmed exercise";
    revertBtn.textContent = "↺ Revert";
    revertBtn.addEventListener("click", () => {
      setClientSwap(program, clientId, ex, i, null);
      scheduleClientProgramSwapsSave(program);
      renderClientModeView();
    });
    exActions.appendChild(revertBtn);
  }
  head.appendChild(exActions);
  row.appendChild(head);

  wireSwapButton(row, swapBtn, displayEx, m => {
    setClientSwap(program, clientId, ex, i, {
      exercise: m.exercise, group: m.group, sub: m.sub, plane: m.plane,
      pattern: m.pattern, joint: m.joint, primary: m.primary, secondary: m.secondary,
    });
    scheduleClientProgramSwapsSave(program);
    renderClientModeView();
  });

  const nowBox = document.createElement("div");
  nowBox.className = "cmweeknow";
  if(weeks > 1){
    const wkLabel = document.createElement("div");
    wkLabel.className = "cmwklabel";
    wkLabel.textContent = `Week ${i + 1} of ${weeks}`;
    nowBox.appendChild(wkLabel);
  }
  const rxLabel = document.createElement("div");
  rxLabel.className = "cmrx";
  rxLabel.textContent = `Target: ${wk.sets || "—"}×${wk.reps || "—"}${loadIntensityText(ex, wk)}`;
  nowBox.appendChild(rxLabel);

  // Opt-in suggestion (see the program card's toggle) -- never shown for
  // Week 1, since there's no previous week's performance to base it on.
  if(client.suggestWeightFromPrevious && i > 0){
    const suggestEl = document.createElement("div");
    suggestEl.className = "cmsuggest";
    const suggestion = suggestedWeightFor(program, clientId, ex, i, program.weightUnit || "kg");
    suggestEl.textContent = suggestion != null
      ? `💡 Suggested weight: ${suggestion}${program.weightUnit || "kg"} (based on last week)`
      : "💡 Log last week's weight and reps to get a suggestion here.";
    nowBox.appendChild(suggestEl);
  }

  nowBox.appendChild(buildClientSetRows(program, clientId, ex, i));
  row.appendChild(nowBox);

  if(ex.notes){
    const notesEl = document.createElement("div");
    notesEl.className = "cmexnotes";
    notesEl.textContent = ex.notes;
    row.appendChild(notesEl);
  }

  // Reference to earlier weeks -- read-only (this is "what did I do
  // before", not another place to edit it), and only shown when there's
  // actually an earlier week with something worth looking back at.
  if(weeks > 1){
    const earlierWeeks = prog
      .map((w, idx2) => Object.assign({}, w, {weekNum: idx2 + 1, weekIdx: idx2}))
      .slice(0, i)
      .filter(w => w.sets || w.reps || w.load || w.rir || w.rpe || hasLoggedAnySetFor(program, clientId, ex, w.weekIdx) || getClientSwap(program, clientId, ex, w.weekIdx));
    if(earlierWeeks.length){
      const hist = document.createElement("details");
      hist.className = "cmweekhistory";
      hist.open = cmWeekHistoryOpenIds.has(ex.id);
      hist.addEventListener("toggle", () => {
        if(hist.open) cmWeekHistoryOpenIds.add(ex.id); else cmWeekHistoryOpenIds.delete(ex.id);
      });
      const histSummary = document.createElement("summary");
      histSummary.textContent = "Earlier weeks";
      hist.appendChild(histSummary);
      earlierWeeks.slice().reverse().forEach(w => {
        const hr = document.createElement("div");
        hr.className = "cmweekhistoryrow";
        const rx = `${w.sets || "—"}×${w.reps || "—"}${loadIntensityText(ex, w)}`;
        const logged = summarizeLoggedSetsFor(program, clientId, ex, w.weekIdx);
        // The prescribed exercise never changes -- ex.exercise is always
        // what was programmed -- so a swap that week is called out as its
        // own note rather than shown as if that were the actual prescription.
        const wkSwap = getClientSwap(program, clientId, ex, w.weekIdx);
        const swapNote = wkSwap ? ` — swapped to ${wkSwap.exercise}` : "";
        hr.textContent = `Wk ${w.weekNum}: ${rx}${swapNote}` + (logged ? ` — ${logged}` : " — not logged");
        hist.appendChild(hr);
      });
      row.appendChild(hist);
    }
  }

  return row;
}

// The "finish and save" box at the bottom of a training day -- separate
// from per-exercise logging above (buildClientSetRows), this marks the
// WHOLE DAY as done: an overall RPE and optional notes, saved as a new
// dated entry (see addClientSessionLog) rather than a field that gets
// overwritten, since the same day can be completed more than once. Saving
// clears the RPE/notes back to blank (ready for next time) and shows a
// shuffled, upbeat confirmation so it's obvious the session actually
// registered.
function buildSessionSaveBox(program, day, client, weekIndex, weeks){
  const box = document.createElement("div");
  box.className = "cmsessionsave";

  const label = document.createElement("div");
  label.className = "field-label";
  label.textContent = "Finish This Session";
  box.appendChild(label);

  const rpeRow = document.createElement("label");
  rpeRow.className = "cmsessionrpe";
  rpeRow.innerHTML = `RPE (how hard did that feel?)
    <select>
      <option value="">—</option>
      ${Array.from({length: 10}, (_, n) => n + 1).map(n => `<option value="${n}">${n}</option>`).join("")}
    </select>`;
  box.appendChild(rpeRow);

  const notesBox = document.createElement("textarea");
  notesBox.className = "diagnosisbox cmsessionnotes";
  notesBox.rows = 2;
  notesBox.placeholder = "How did it go? Anything your coach should know…";
  box.appendChild(notesBox);

  const saveBtn = document.createElement("button");
  saveBtn.type = "button";
  saveBtn.className = "cmsessionsavebtn";
  saveBtn.textContent = "✓ Save Session";
  box.appendChild(saveBtn);

  const msgEl = document.createElement("div");
  msgEl.className = "cmsessionsavedmsg";
  msgEl.hidden = true;
  box.appendChild(msgEl);

  saveBtn.addEventListener("click", () => {
    const entry = {
      id: rid(), dayId: day.id, dayLabel: day.label || "Day",
      programId: program.id, programName: program.name || "Program",
      weekIndex, weekLabel: weeks > 1 ? `Week ${weekIndex + 1}` : "",
      rpe: rpeRow.querySelector("select").value || "",
      notes: notesBox.value.trim(),
      completedAt: new Date().toISOString(),
    };
    addClientSessionLog(program, client.id, entry);
    scheduleClientProgramSessionLogsSave(program);
    rpeRow.querySelector("select").value = "";
    notesBox.value = "";
    msgEl.textContent = "✓ " + randomSessionSavedMessage();
    msgEl.hidden = false;
  });

  return box;
}

// One training day as its own small collapsible pill -- used both under
// the Training Plan pill (one per program day) and, when that day is
// scheduled onto today's weekday, inside Today's Agenda too. Both places
// share cmTrainingDayPillOpenIds so expanding a day in one keeps it
// expanded in the other, per the coach's "should also correspond" spec.
function buildClientDayPill(program, day, client, weeks){
  const scheduledKey = (client.trainingSchedule || {})[day.id] || "";
  const scheduledLabel = scheduledKey ? (WEEKDAYS.find(w => w.key === scheduledKey) || {}).label || "" : "";

  const wrapper = document.createElement("details");
  wrapper.className = "cmdaypill";
  wrapper.open = cmTrainingDayPillOpenIds.has(day.id);
  wrapper.addEventListener("toggle", () => {
    if(wrapper.open) cmTrainingDayPillOpenIds.add(day.id); else cmTrainingDayPillOpenIds.delete(day.id);
  });

  const summary = document.createElement("summary");
  summary.innerHTML = `<span>${esc(day.label||"Day")}</span>` + (scheduledLabel ? `<span class="cmdaypillsched">${esc(scheduledLabel)}</span>` : "");
  wrapper.appendChild(summary);

  const body = document.createElement("div");
  body.className = "cmpillbody";

  const scheduleRow = document.createElement("label");
  scheduleRow.className = "cmdayschedule";
  scheduleRow.innerHTML = `Do this on:
    <select data-day-id="${esc(day.id)}">
      <option value="">— Not scheduled —</option>
      ${WEEKDAYS.map(wd => `<option value="${wd.key}" ${scheduledKey === wd.key ? "selected" : ""}>${wd.label}</option>`).join("")}
    </select>`;
  scheduleRow.querySelector("select").addEventListener("change", e => {
    const v = e.target.value;
    // Reassign rather than mutate in place -- client.trainingSchedule can
    // be a value straight from a frozen db snapshot.
    const next = Object.assign({}, client.trainingSchedule || {});
    if(v) next[day.id] = v; else delete next[day.id];
    client.trainingSchedule = next;
    scheduleClientSave(client);
    renderClientModeView();
  });
  body.appendChild(scheduleRow);

  const weekIndex = getSelectedWeekIndex(program, client.id);
  (day.exercises || []).forEach(ex => body.appendChild(buildClientExRow(ex, program, weeks, weekIndex, client)));
  if((day.exercises || []).length){
    body.appendChild(buildSessionSaveBox(program, day, client, weekIndex, weeks));
  }
  wrapper.appendChild(body);
  return wrapper;
}

// Shared by buildClientProgramCard (under Training Plan) and buildTodayPanel
// (under Today's Agenda) -- this is a client-level setting (client.
// suggestWeightFromPrevious), not tied to any one program, so it needs to be
// reachable from wherever the client actually looks at their training, not
// just from Training Plan. Before this, a client who only ever opened a
// scheduled day from their Agenda had no way to find or turn this on at all.
function buildSuggestWeightToggle(client){
  const suggestToggle = document.createElement("label");
  suggestToggle.className = "cmsuggesttogglelabel";
  suggestToggle.title = "When on, weeks after Week 1 show a suggested weight worked out from what was prescribed last week and what you actually logged. It's just a hint -- your coach's own prescription above it doesn't change.";
  suggestToggle.innerHTML = `<input type="checkbox" ${client.suggestWeightFromPrevious ? "checked" : ""}> Suggest weight used based on previously?`;
  suggestToggle.querySelector("input").addEventListener("change", e => {
    client.suggestWeightFromPrevious = e.target.checked;
    scheduleClientSave(client);
    renderClientModeView();
  });
  return suggestToggle;
}

function buildClientProgramCard(program, client){
  const card = document.createElement("div");
  card.className = "cmprogram";
  const weeks = weeksCountFor(program);
  // Program goal is coach-only now (see the editor's "Private" tag) -- it
  // used to show here as a note, but a shared/group program especially
  // shouldn't be handing every member the same private planning note.
  card.innerHTML = `<h4>${esc(program.name||"Program")}</h4>`;
  const weekSelector = buildWeekSelector(program, client.id);
  if(weekSelector) card.appendChild(weekSelector);

  // Only meaningful once there's a Week 2+ to suggest from -- a single-week
  // program has no "last week" to compare against.
  if(weeks > 1){
    card.appendChild(buildSuggestWeightToggle(client));
  }

  (program.days || []).forEach(day => {
    card.appendChild(buildClientDayPill(program, day, client, weeks));
  });
  return card;
}

function buildClientCaseCard(c){
  const card = document.createElement("div");
  card.className = "cmprogram";
  card.innerHTML = c.diagnosis ? `<div class="cmexnotes">${esc(c.diagnosis)}</div>` : "";
  (c.plan || []).forEach(ex => {
    const row = document.createElement("div");
    row.className = "cmexrow";
    row.innerHTML = `<div class="cmexname">${esc(ex.exercise)}</div><div>${esc(ex.sets||"—")} sets × ${esc(ex.reps||"—")} reps${ex.load ? " @ "+esc(ex.load) : ""}</div>${ex.notes ? `<div class="cmexnotes">${esc(ex.notes)}</div>` : ""}`;
    card.appendChild(row);
  });
  if(!(c.plan || []).length){
    const p = document.createElement("div");
    p.className = "cmempty";
    p.textContent = "No exercises added to this plan yet.";
    card.appendChild(p);
  }
  return card;
}

function buildClientNutritionCard(plan){
  const card = document.createElement("div");
  card.className = "cmprogram";
  const t = plan.targets || {};
  card.innerHTML = `<h4>${esc(plan.name||"Nutrition Plan")}</h4>`;
  if(t.calories || t.proteinG || t.carbG || t.fatG){
    const targetsEl = document.createElement("div");
    targetsEl.className = "nutritiontargetsbox";
    targetsEl.innerHTML = `<div class="targetrow">
      ${t.calories ? `<div class="targetstat"><b>${esc(t.calories)}</b><span>Calories</span></div>` : ""}
      ${t.proteinG ? `<div class="targetstat"><b>${esc(t.proteinG)}g</b><span>Protein</span></div>` : ""}
      ${t.carbG ? `<div class="targetstat"><b>${esc(t.carbG)}g</b><span>Carbs</span></div>` : ""}
      ${t.fatG ? `<div class="targetstat"><b>${esc(t.fatG)}g</b><span>Fat</span></div>` : ""}
    </div>`;
    card.appendChild(targetsEl);
  }
  (plan.meals || []).forEach(meal => {
    const mealEl = document.createElement("div");
    mealEl.className = "cmday";
    mealEl.innerHTML = `<h5>${esc(meal.name||"Meal")}</h5>`;
    (meal.items || []).forEach(item => {
      const row = document.createElement("div");
      row.className = "cmexrow";
      const macroBits = [];
      if(item.calories) macroBits.push(item.calories + " kcal");
      if(item.protein) macroBits.push("P " + item.protein + "g");
      if(item.carbs) macroBits.push("C " + item.carbs + "g");
      if(item.fat) macroBits.push("F " + item.fat + "g");
      row.innerHTML = `<div class="cmexname">${esc(item.food||"Item")}${item.qty ? " — " + esc(item.qty) : ""}</div>${macroBits.length ? `<div class="cmexnotes">${esc(macroBits.join(" · "))}</div>` : ""}`;
      mealEl.appendChild(row);
    });
    if(!(meal.items || []).length){
      const p = document.createElement("div");
      p.className = "cmempty";
      p.textContent = "Nothing logged for this meal yet.";
      mealEl.appendChild(p);
    }
    card.appendChild(mealEl);
  });
  if(plan.notes){
    const notesEl = document.createElement("div");
    notesEl.className = "cmexnotes";
    notesEl.style.marginTop = "10px";
    notesEl.textContent = plan.notes;
    card.appendChild(notesEl);
  }
  return card;
}

function renderClientModeView(){
  const host = document.getElementById("clientModeView");
  host.innerHTML = "";
  const client = clientSession;
  if(!client) return;

  // Same lazy-default pattern used on the coach's own client profile page,
  // so a client filling in their info first (before the coach ever opens
  // their profile) still gets sane defaults persisted rather than saving
  // "undefined" fields.
  let needsCmSave = false;
  if(!client.weeklyGoals){ client.weeklyGoals = []; needsCmSave = true; }
  if(client.heightUnit === undefined){ client.heightUnit = "cm"; needsCmSave = true; }
  if(client.activityLevel === undefined){ client.activityLevel = "moderate"; needsCmSave = true; }
  if(client.nutritionGoal === undefined){ client.nutritionGoal = "maintain"; needsCmSave = true; }
  if(!client.agendaNotes){ client.agendaNotes = {}; needsCmSave = true; }
  if(!client.trainingSchedule){ client.trainingSchedule = {}; needsCmSave = true; }
  if(!client.weightLog){ client.weightLog = []; needsCmSave = true; }
  if(!client.measurementLog){ client.measurementLog = []; needsCmSave = true; }
  // What this client can see under The Road Map -- set on their profile by
  // the coach (see renderClientProfile). Defaults to everything on so a
  // client from before this feature existed doesn't suddenly lose access to
  // something they could already see.
  if(!client.visibility){ client.visibility = {training: true, rehab: true, nutrition: true}; needsCmSave = true; }
  if(needsCmSave) scheduleClientSave(client);

  try{

  const header = document.createElement("div");
  header.className = "cmheader";
  header.innerHTML = `<h2>Welcome, ${esc(firstNameOf(client) || "there")}</h2><span class="savebadge" id="cmSaveStatus"></span><button class="cmlogout" id="cmLogoutBtn" type="button">Log out</button>`;
  host.appendChild(header);

  const trainingOn = client.visibility.training !== false;
  const rehabOn = client.visibility.rehab !== false;
  const nutritionOn = client.visibility.nutrition !== false;
  // Filtered down to nothing the instant a toggle is off, rather than just
  // hiding the section that lists them below -- this is what stops a
  // program the coach already scheduled onto a specific day from still
  // sneaking into Today's Agenda / the Full Week View further down while
  // Training Program is toggled off (scheduledDayFor only ever looks inside
  // whichever list it's handed).
  const myPrograms = trainingOn ? programsCache.filter(p => programHasClient(p, client.id)) : [];
  const myCases = rehabOn ? casesCache.filter(c => c.clientId === client.id) : [];
  const myNutrition = nutritionOn ? nutritionCache.filter(n => n.clientId === client.id) : [];

  // Personal Stats -- body metrics, weight tracker, and lifting stats, all
  // editable right from this one pill.
  host.appendChild(buildCmPill("Personal Stats", () => cmPersonalStatsOpen, v => { cmPersonalStatsOpen = v; }, body => {
    body.appendChild(buildClientBodyMetrics(client));
    body.appendChild(buildClientStatsView(client));
  }));

  // Big Picture Goals -- the client's own free-text goals, visible to the
  // coach too.
  host.appendChild(buildCmPill("Big Picture Goals", () => cmBigPictureGoalsOpen, v => { cmBigPictureGoalsOpen = v; }, body => {
    const hint = document.createElement("div");
    hint.className = "statshint";
    hint.textContent = "Your coach can see this too.";
    body.appendChild(hint);
    const goalsBox = document.createElement("textarea");
    goalsBox.className = "diagnosisbox";
    goalsBox.rows = 2;
    goalsBox.placeholder = "e.g. Build to a 140kg back squat by December; stay pain-free through preseason.";
    goalsBox.value = client.goals || "";
    goalsBox.addEventListener("input", e => { client.goals = e.target.value; scheduleClientSave(client); });
    // A dated log entry on blur, not every keystroke -- captures "what did
    // this goal say" each time it's actually changed and stepped away from,
    // not a new entry per character typed.
    goalsBox.addEventListener("blur", e => {
      appendGoalsLogEntry(client, e.target.value);
      scheduleClientSave(client);
    });
    body.appendChild(goalsBox);
    const hist = buildGoalsHistoryBox(client);
    if(hist) body.appendChild(hist);
  }));

  // The Road Map -- everything day-to-day lives nested inside here:
  // Today's Agenda (coach's notes for today, the shared tick list, and
  // today's scheduled training pinned right there too), Training Plan
  // (every program day as its own expandable pill), Rehab if the coach has
  // set up a case, and Nutrition -- all as their own small pill within this
  // one, same as Training Plan and Today's Agenda.
  host.appendChild(buildCmPill("The Road Map", () => cmRoadMapOpen, v => { cmRoadMapOpen = v; }, body => {

    body.appendChild(buildCmPill("Today's Agenda", () => cmTodaysAgendaOpen, v => { cmTodaysAgendaOpen = v; }, agendaBody => {
      agendaBody.appendChild(renderClientWeeklyGoals(client, myPrograms));
      agendaBody.appendChild(buildCmPill("Full Week View (all 7 days)", () => cmWeeklyAgendaOpen, v => { cmWeeklyAgendaOpen = v; }, weekBody => {
        weekBody.appendChild(buildDailyAgenda(client, myPrograms));
      }, "cmnestedpill"));
    }, "cmnestedpill"));

    // Each of these three is gated on its own visibility toggle -- when off,
    // the whole pill is left out entirely rather than shown empty, so there's
    // nothing here even hinting the section exists.
    if(trainingOn){
      body.appendChild(buildCmPill("Training Plan", () => cmTrainingPlanOpen, v => { cmTrainingPlanOpen = v; }, planBody => {
        if(!myPrograms.length){
          const p = document.createElement("div");
          p.className = "cmempty";
          p.textContent = "No program has been assigned yet — check back soon.";
          planBody.appendChild(p);
        } else {
          myPrograms.forEach(p => planBody.appendChild(buildClientProgramCard(p, client)));
        }
      }, "cmnestedpill"));
    }

    if(myCases.length){
      body.appendChild(buildCmPill("Rehab", () => cmRehabOpen, v => { cmRehabOpen = v; }, rehabBody => {
        myCases.forEach(c => rehabBody.appendChild(buildClientCaseCard(c)));
      }, "cmnestedpill"));
    }

    // Nutrition -- the client's own preferences, plus whatever plan the
    // coach has put together for them.
    if(nutritionOn){
      body.appendChild(buildCmPill("Nutrition", () => cmNutritionOpen, v => { cmNutritionOpen = v; }, nutritionBody => {
        nutritionBody.appendChild(buildClientNutritionPrefs(client));
        if(myNutrition.length){
          const planLabel = document.createElement("div");
          planLabel.className = "field-label";
          planLabel.textContent = "My Nutrition Plan";
          nutritionBody.appendChild(planLabel);
          myNutrition.forEach(n => nutritionBody.appendChild(buildClientNutritionCard(n)));
        }
      }, "cmnestedpill"));
    }
  }));

  // Messages -- a direct line to the coach, right in the app. No unread
  // count in the title unless there's something new, so the pill reads the
  // same as every other one until it actually needs attention.
  const myUnread = messagesCache.filter(m => m.clientId === client.id && m.sender === "coach" && !m.readByClient).length;
  host.appendChild(buildCmPill(myUnread ? `Messages (${myUnread} new)` : "Messages", () => cmMessagesOpen, v => {
    cmMessagesOpen = v;
    if(v) markClientMessagesRead(client);
  }, body => {
    body.appendChild(buildClientMessagesPanel(client));
  }));

  document.getElementById("cmLogoutBtn").addEventListener("click", () => {
    clientSession = null;
    stopClientMessagePolling();
    try{ localStorage.removeItem("mlClientSession"); }catch(e){ /* ignore */ }
    applyAccessGate();
  });

  }catch(err){
    console.error("[ClientModeViewRenderError]", err);
    host.innerHTML = '<div class="dbnote" style="margin:0;">Something went wrong showing your info ('
      + esc(err && err.message ? err.message : String(err))
      + '). Your saved data is safe -- try reloading the page, and let your coach know the message above if it keeps happening.</div>';
  }
}

// Coach-side collapsible pill for the Client Profile page (THE SQUAD tab) --
// same visual language as buildCmPill (the client's own "Road Map" pills),
// but keyed by client id + section rather than a single shared module-level
// boolean. renderClientProfile() rebuilds its whole DOM on nearly every
// edit (a select changing, a task being added), and this page shows one of
// several different clients over the course of a session -- without a key
// per client, opening "Access" for one client would leave it stuck open
// (or shut) for every other client too, and without persisting the state
// at all, that re-render would snap every open pill shut the moment she,
// say, changed a nutrition goal dropdown.
let clientProfilePillOpen = {}; // "<clientId>::<sectionKey>" -> true/false
function buildClientProfilePill(client, key, title, defaultOpen, fill, extraClass){
  const details = document.createElement("details");
  details.className = "cmpill" + (extraClass ? " " + extraClass : "");
  const stateKey = client.id + "::" + key;
  const isOpen = Object.prototype.hasOwnProperty.call(clientProfilePillOpen, stateKey)
    ? clientProfilePillOpen[stateKey]
    : !!defaultOpen;
  details.open = isOpen;
  details.addEventListener("toggle", () => { clientProfilePillOpen[stateKey] = details.open; });
  const summary = document.createElement("summary");
  summary.textContent = title;
  details.appendChild(summary);
  const body = document.createElement("div");
  body.className = "cmpillbody";
  fill(body);
  details.appendChild(body);
  return details;
}

function renderClientProfile(){
  const host = document.getElementById("clientHost");
  host.innerHTML = "";
  const client = currentClientId ? clientsCache.find(c => c.id === currentClientId) : null;
  if(!client){
    host.innerHTML = '<div class="empty">Select a client on the left, or create a new one, to see their info, goals, programs and rehab cases in one place.</div>';
    return;
  }
  // Clients created before the client portal existed won't have an access
  // code yet -- generate and persist one the first time their profile is
  // opened, same lazy-default pattern used elsewhere in this file.
  let needsSave = false;
  if(!client.accessCode){ client.accessCode = genAccessCode(); needsSave = true; }
  if(!client.tasks){ client.tasks = []; needsSave = true; }
  if(!client.weeklyGoals){ client.weeklyGoals = []; needsSave = true; }
  if(client.heightUnit === undefined){ client.heightUnit = "cm"; needsSave = true; }
  if(client.activityLevel === undefined){ client.activityLevel = "moderate"; needsSave = true; }
  if(client.nutritionGoal === undefined){ client.nutritionGoal = "maintain"; needsSave = true; }
  if(!client.agendaNotes){ client.agendaNotes = {}; needsSave = true; }
  if(!client.trainingSchedule){ client.trainingSchedule = {}; needsSave = true; }
  if(!client.weightLog){ client.weightLog = []; needsSave = true; }
  if(!client.measurementLog){ client.measurementLog = []; needsSave = true; }
  // Defaults to everything on -- see renderClientModeView for where these
  // three toggles actually take effect.
  if(!client.visibility){ client.visibility = {training: true, rehab: true, nutrition: true}; needsSave = true; }
  if(needsSave) scheduleClientSave(client);

  // Defensive: this function builds a lot of DOM (body metrics, nutrition
  // targets, stats, tasks, weekly goals, linked programs/cases/plans) from
  // whatever's actually stored on this client record. A malformed or
  // unexpected value anywhere in that data could throw mid-build -- and
  // since host.innerHTML was already cleared above, an uncaught throw here
  // would leave the whole panel blank with no visible error, which looks
  // exactly like "nothing happens" for anything below the point it broke
  // (Add Task included, since that button is built further down). Catching
  // it and showing what actually broke turns a silent, unreproducible
  // failure into an actionable one instead of a guess.
  try{

  const wrap = document.createElement("div");
  wrap.className = "editor";

  const head = document.createElement("div");
  head.className = "editor-head";
  // First/last name split so the client's own "Welcome" header can greet
  // them by first name only (see firstNameOf) -- a client added before this
  // split existed has no client.firstName/lastName yet, so these default to
  // however client.name (still the source of truth for every other display
  // site) splits on its first space, rather than showing blank inputs for
  // someone who already has a name on file.
  const nameParts = splitClientName(client);
  head.innerHTML = `
    <input class="proginput" id="clientFirstNameInput" value="${esc(client.firstName || nameParts.first)}" placeholder="First name">
    <input class="proginput" id="clientLastNameInput" value="${esc(client.lastName || nameParts.last)}" placeholder="Last name">
    <div class="editor-actions">
      <button class="iconbtn" id="previewClientBtn" type="button">👁 Preview Client View</button>
      <button class="iconbtn" id="delClientBtn" type="button">Delete</button>
    </div>
  `;
  wrap.appendChild(head);

  const clientMeta = document.createElement("div");
  clientMeta.className = "progmeta";
  clientMeta.innerHTML = `<span class="savebadge" id="clientSaveStatus"></span>`;
  wrap.appendChild(clientMeta);

  const contactPill = buildClientProfilePill(client, "contact", "Contact & Personal Info", true, body => {
  const contactBox = document.createElement("div");
    contactBox.className = "accesscodebox";
    contactBox.innerHTML = `
      <span>Email:</span>
      <input type="email" class="proginput" id="clientEmailInput" placeholder="client@example.com" value="${esc(client.email || "")}" style="max-width:220px;">
    `;
    body.appendChild(contactBox);

    const birthdayLabel = document.createElement("div");
    birthdayLabel.className = "field-label";
    birthdayLabel.textContent = "Birthday";
    body.appendChild(birthdayLabel);
    const birthdayHint = document.createElement("div");
    birthdayHint.className = "statshint";
    birthdayHint.textContent = "So it's on file for whenever you're sending birthday messages.";
    body.appendChild(birthdayHint);
    const birthdayBox = document.createElement("div");
    birthdayBox.className = "accesscodebox";
    birthdayBox.innerHTML = `<input type="date" class="proginput" id="clientBirthdayInput" value="${esc(client.birthday || "")}" style="max-width:180px;">`;
    body.appendChild(birthdayBox);

      const bmLabel = document.createElement("div");
      bmLabel.className = "field-label";
      bmLabel.textContent = "Body Metrics";
      body.appendChild(bmLabel);
      const bmHint = document.createElement("div");
      bmHint.className = "statshint";
      bmHint.textContent = client.name ? client.name + " can also fill this in themselves from their own view." : "The client can also fill this in themselves from their own view.";
      body.appendChild(bmHint);
      const bmBox = document.createElement("div");
      bmBox.className = "bodymetricsbox";
      const wUnit = client.weightUnit || "kg";
      bmBox.innerHTML = `
        <div class="exfield narrow"><label>Age</label><input type="number" id="bmAge" min="1" max="120" value="${esc(client.age||"")}" placeholder="28"></div>
        <div class="exfield narrow"><label>Sex</label>
          <select id="bmSex">
            <option value="" ${!client.sex ? "selected" : ""}>—</option>
            <option value="female" ${client.sex === "female" ? "selected" : ""}>Female</option>
            <option value="male" ${client.sex === "male" ? "selected" : ""}>Male</option>
          </select>
        </div>
        <div class="exfield narrow"><label>Height</label><input type="number" id="bmHeight" min="0" value="${esc(client.heightValue||"")}" placeholder="${client.heightUnit === "in" ? "68" : "173"}"></div>
        <div class="exfield narrow"><label>Unit</label>
          <select id="bmHeightUnit">
            <option value="cm" ${client.heightUnit !== "in" ? "selected" : ""}>cm</option>
            <option value="in" ${client.heightUnit === "in" ? "selected" : ""}>in</option>
          </select>
        </div>
        <div class="exfield narrow"><label>Body Weight (${esc(wUnit)})</label><input type="number" id="bmWeight" min="0" step="0.1" value="${esc(client.bodyWeight||"")}" placeholder="70"></div>
        <div class="exfield"><label>Activity Level</label>
          <select id="bmActivity">
            ${Object.keys(ACTIVITY_LEVELS).map(k => `<option value="${k}" ${client.activityLevel === k ? "selected" : ""}>${esc(ACTIVITY_LEVELS[k].label)}</option>`).join("")}
          </select>
        </div>
        <div class="exfield"><label>Nutrition Goal</label>
          <select id="bmGoal">
            ${Object.keys(NUTRITION_GOALS).map(k => `<option value="${k}" ${client.nutritionGoal === k ? "selected" : ""}>${esc(NUTRITION_GOALS[k].label)}</option>`).join("")}
          </select>
        </div>
      `;
      body.appendChild(bmBox);

      body.appendChild(buildBodyMetricsPill(client, renderClientProfile));

      const prefsLabel = document.createElement("div");
      prefsLabel.className = "field-label";
      prefsLabel.textContent = "Nutrition Preferences";
      body.appendChild(prefsLabel);
      const prefsBox = document.createElement("textarea");
      prefsBox.className = "diagnosisbox";
      prefsBox.rows = 2;
      prefsBox.placeholder = "e.g. Vegetarian, dairy-free, dislikes mushrooms, prefers 4 meals a day.";
      prefsBox.value = client.dietPrefs || "";
      prefsBox.addEventListener("input", e => { client.dietPrefs = e.target.value; scheduleClientSave(client); });
      body.appendChild(prefsBox);

      const targetsLabel = document.createElement("div");
      targetsLabel.className = "field-label";
      targetsLabel.textContent = "Nutrition Targets";
      body.appendChild(targetsLabel);
      const calc = calcNutritionTargets(client);
      const targetsBox = document.createElement("div");
      targetsBox.className = "nutritiontargetsbox";
      if(!calc){
        targetsBox.innerHTML = '<div class="emptyprogs">Add age, sex, height and body weight above to calculate calorie and macro targets.</div>';
      } else {
        targetsBox.innerHTML = `<div class="targetrow">
          <div class="targetstat"><b>${calc.bmr}</b><span>BMR</span></div>
          <div class="targetstat"><b>${calc.tdee}</b><span>TDEE</span></div>
          <div class="targetstat"><b>${calc.calories}</b><span>Calories</span></div>
          <div class="targetstat"><b>${calc.proteinG}g</b><span>Protein</span></div>
          <div class="targetstat"><b>${calc.carbG}g</b><span>Carbs</span></div>
          <div class="targetstat"><b>${calc.fatG}g</b><span>Fat</span></div>
        </div>`;
      }
      body.appendChild(targetsBox);
      const targetsScopeNote = document.createElement("div");
      targetsScopeNote.className = "scopenote";
      targetsScopeNote.textContent = "Estimated from standard formulas (Mifflin-St Jeor + activity level), not medical or dietetic advice — a starting point for the Nutrition tab, to adjust from how the client actually responds.";
      body.appendChild(targetsScopeNote);
  });

  const accessPill = buildClientProfilePill(client, "access", "Access", false, body => {
      const accessLabel = document.createElement("div");
      accessLabel.className = "field-label";
      accessLabel.textContent = "Client Access";
      body.appendChild(accessLabel);
      const accessBox = document.createElement("div");
      accessBox.className = "accesscodebox";
      accessBox.innerHTML = `
        <span>Access code:</span>
        <span class="accesscodeval" id="accessCodeVal">${esc(client.accessCode)}</span>
        <button class="accesscopybtn" id="copyAccessBtn" type="button">Copy</button>
        <button class="accessregenbtn" id="regenAccessBtn" type="button">Regenerate</button>
      `;
      body.appendChild(accessBox);
      const accessHint = document.createElement("div");
      accessHint.className = "statshint";
      accessHint.textContent = "Share this code with " + (client.name || "this client") + " along with the link to this page — they'll use it to log in to their own view of just their program, rehab plan, goals and tasks, without seeing anyone else's.";
      body.appendChild(accessHint);

      // Set automatically for anyone who joined via the Stripe payment link
      // (see api/stripe-webhook.js); editable here too, so a client added by
      // hand can also get their code emailed. The Resend button is the manual
      // safety net for whenever the automatic email doesn't land -- Resend
      // (or any email service) occasionally has a hiccup or a message gets
      // stuck in spam.
      const resendBox = document.createElement("div");
        resendBox.className = "accesscodebox";
        resendBox.innerHTML = `<button class="accesscopybtn" id="resendAccessEmailBtn" type="button">Resend access code by email</button>`;
        body.appendChild(resendBox);
      const resendStatus = document.createElement("div");
      resendStatus.className = "statshint";
      resendStatus.id = "resendAccessEmailStatus";
      body.appendChild(resendStatus);
      if(client.accessCodeEmailSent === false){
        const warn = document.createElement("div");
        warn.className = "gateerror";
        warn.style.marginTop = "0";
        warn.textContent = "⚠ The automatic welcome email didn't go out when they joined — use \"Resend access code by email\" above once you've checked their email address.";
        body.appendChild(warn);
      }

      const visLabel = document.createElement("div");
      visLabel.className = "field-label";
      visLabel.textContent = "Client View Access";
      body.appendChild(visLabel);
      const visHint = document.createElement("div");
      visHint.className = "statshint";
      visHint.textContent = "Choose what " + (client.name || "this client") + " can see under The Road Map in their own view. Turning something off hides it everywhere for them, including anything already scheduled into their agenda.";
      body.appendChild(visHint);
      const visBox = document.createElement("div");
      visBox.className = "visibilitytoggles";
      [
        {key: "training", label: "Training Program"},
        {key: "rehab", label: "Rehab"},
        {key: "nutrition", label: "Nutrition"},
      ].forEach(({key, label}) => {
        const row = document.createElement("label");
        row.className = "cmsuggesttogglelabel";
        row.innerHTML = `<input type="checkbox" ${client.visibility[key] !== false ? "checked" : ""}> ${esc(label)}`;
        row.querySelector("input").addEventListener("change", e => {
          // Cloned rather than mutated in place -- same reasoning as the
          // agendaNotes edits just below: keeps this a single, whole-object
          // reassignment so there's no ambiguity about what scheduleClientSave
          // is about to persist.
          client.visibility = Object.assign({}, client.visibility, {[key]: e.target.checked});
          scheduleClientSave(client);
        });
        visBox.appendChild(row);
      });
      body.appendChild(visBox);
  });

  const goalsPill = buildClientProfilePill(client, "goals", "Goals", false, body => {
      const goalsLabel = document.createElement("div");
      goalsLabel.className = "field-label";
      goalsLabel.textContent = "Goals";
      body.appendChild(goalsLabel);
      const goalsHint = document.createElement("div");
      goalsHint.className = "statshint";
      goalsHint.textContent = "Visible to " + (client.name || "this client") + " — they can also fill this in themselves from their own view.";
      body.appendChild(goalsHint);
      const goalsBox = document.createElement("textarea");
      goalsBox.className = "diagnosisbox";
      goalsBox.rows = 2;
      goalsBox.placeholder = "e.g. Build to a 140kg back squat by December; stay pain-free through preseason.";
      goalsBox.value = client.goals || "";
      goalsBox.addEventListener("input", e => { client.goals = e.target.value; scheduleClientSave(client); });
      goalsBox.addEventListener("blur", e => {
        appendGoalsLogEntry(client, e.target.value);
        scheduleClientSave(client);
      });
      body.appendChild(goalsBox);
      const goalsHist = buildGoalsHistoryBox(client);
      if(goalsHist) body.appendChild(goalsHist);

  });

  const notesPill = buildClientProfilePill(client, "notes", "Coach Notes (private)", false, body => {
      const notesLabel = document.createElement("div");
      notesLabel.className = "field-label";
      notesLabel.textContent = "Coach Notes (private)";
      body.appendChild(notesLabel);
      const notesHint = document.createElement("div");
      notesHint.className = "statshint";
      notesHint.textContent = "Only you can see this — it's never shown in " + (client.name || "this client") + "'s own view.";
      body.appendChild(notesHint);
      const notesBox = document.createElement("textarea");
      notesBox.className = "diagnosisbox";
      notesBox.rows = 2;
      notesBox.placeholder = "Anything worth remembering about this client — availability, equipment, preferences…";
      notesBox.value = client.notes || "";
      notesBox.addEventListener("input", e => { client.notes = e.target.value; scheduleClientSave(client); });
      body.appendChild(notesBox);
  });

  const sessionLogPill = buildClientProfilePill(client, "sessionlog", "Session Notes (from Client)", false, body => {
      const sessionLogLabel = document.createElement("div");
      sessionLogLabel.className = "field-label";
      sessionLogLabel.textContent = "Session Notes (from Client)";
      body.appendChild(sessionLogLabel);
      const sessionLogHint = document.createElement("div");
      sessionLogHint.className = "statshint";
      sessionLogHint.textContent = "What " + (client.name || "this client") + " logged when they saved a finished training session — RPE and any notes they added. Visible only to you.";
      body.appendChild(sessionLogHint);
      const sessionLogHist = buildSessionLogHistoryBox(client);
      if(sessionLogHist){
        body.appendChild(sessionLogHist);
      } else {
        const emptyEl = document.createElement("div");
        emptyEl.className = "cmempty";
        emptyEl.textContent = "No sessions logged yet.";
        body.appendChild(emptyEl);
      }

  });

  const tasksPill = buildClientProfilePill(client, "tasks", "Habit Builders", false, body => {
      const taskLabel = document.createElement("div");
      taskLabel.className = "field-label";
      taskLabel.textContent = "Assigned Tasks";
      body.appendChild(taskLabel);
      const taskHint = document.createElement("div");
      taskHint.className = "statshint";
      taskHint.innerHTML = "Tasks assigned so far — each becomes a real tick-box in <b>" + esc(client.name || "the client") + "'s own view</b> (open &#34;👁 Preview Client View&#34; above to see it). Use the panel below to add more.";
      body.appendChild(taskHint);
      const taskList = document.createElement("div");
      taskList.className = "tasklist";
      if(!client.tasks.length){
        taskList.innerHTML = '<div class="emptyprogs">No tasks assigned yet — add some below.</div>';
      } else {
        client.tasks.forEach(t => {
          const row = document.createElement("div");
          row.className = "taskrow";
          const freqIcon = t.freq === "weekly" ? "🔁" : (t.freq === "days" ? "📅" : "☐");
          row.innerHTML = `
            <span class="taskrowicon" title="Shows as a checkbox in the client's view">${freqIcon}</span>
            <input type="text" value="${esc(t.title||"")}" placeholder="e.g. Foam roll 10 min">
            <select>
              <option value="daily" ${(!t.freq || t.freq === "daily") ? "selected" : ""}>Daily</option>
              <option value="weekly" ${t.freq === "weekly" ? "selected" : ""}>Weekly</option>
              <option value="days" ${t.freq === "days" ? "selected" : ""}>Specific days</option>
            </select>
            ${t.freq === "weekly" ? `<span style="font-size:12px;color:var(--ink-dim);">×</span><input type="number" min="1" max="14" value="${t.target||3}"><span style="font-size:12px;color:var(--ink-dim);">/week</span>` : ""}
            <button class="taskrmbtn" type="button" title="Remove task">✕</button>
            ${t.freq === "days" ? '<div class="daychips" data-role="daychips"></div>' : ""}
          `;
          row.querySelector('input[type="text"]').addEventListener("input", e => { t.title = e.target.value; scheduleClientSave(client); });
          row.querySelector("select").addEventListener("change", e => {
            t.freq = e.target.value;
            if(t.freq === "weekly" && !t.target) t.target = 3;
            if(t.freq === "days" && !t.days) t.days = [];
            renderClientProfile();
            scheduleClientSave(client);
          });
          const targetInp = row.querySelector('input[type="number"]');
          if(targetInp){
            targetInp.addEventListener("input", e => { t.target = Math.max(1, parseInt(e.target.value, 10) || 1); scheduleClientSave(client); });
          }
          const dayChipsEl = row.querySelector('[data-role="daychips"]');
          if(dayChipsEl){
            buildDayChips(dayChipsEl, t.days, v => {
              const i = (t.days || []).indexOf(v);
              t.days = i > -1 ? t.days.filter(x => x !== v) : (t.days || []).concat([v]);
              scheduleClientSave(client);
              renderClientProfile();
            });
          }
          row.querySelector(".taskrmbtn").addEventListener("click", () => {
            client.tasks = client.tasks.filter(x => x.id !== t.id);
            renderClientProfile();
            scheduleClientSave(client);
          });
          taskList.appendChild(row);
        });
      }
      body.appendChild(taskList);

      // Adding tasks is a deliberate two-step "pick, then Save" flow: ticking a
      // suggestion or typing a custom task only queues it here -- nothing lands
      // on the client's real list, and nothing is saved, until Save is pressed.
      // That single, explicit confirmation moment (with a visible "Saved N
      // tasks" message right after) removes any doubt about whether an action
      // "took", multi-select falls out for free, and it matches how a lot of
      // people expect a "choose some things, then confirm" panel to work.
      if(pendingTasksClientId !== client.id){
        pendingTasksClientId = client.id;
        pendingPresetTitles = new Set();
        pendingCustomDrafts = [];
      }

      const addPanel = document.createElement("div");
      addPanel.className = "addtaskspanel";
      const addPanelLabel = document.createElement("div");
      addPanelLabel.className = "field-label";
      addPanelLabel.style.marginTop = "0";
      addPanelLabel.textContent = "Add Tasks";
      addPanel.appendChild(addPanelLabel);
      const addPanelHint = document.createElement("div");
      addPanelHint.className = "statshint";
      addPanelHint.textContent = "Tick any suggestions below and/or type your own — pick as many as you like, then hit Save to add them all to " + (client.name || "this client") + "'s list at once.";
      addPanel.appendChild(addPanelHint);

      const presetsDetails = document.createElement("details");
      presetsDetails.className = "taskpresets";
      presetsDetails.open = taskPresetsOpen;
      presetsDetails.addEventListener("toggle", () => { taskPresetsOpen = presetsDetails.open; });
      const presetsSummary = document.createElement("summary");
      presetsSummary.textContent = "Suggested tasks & habit builders";
      presetsDetails.appendChild(presetsSummary);
      Object.keys(TASK_PRESETS).forEach(category => {
        const catLabel = document.createElement("div");
        catLabel.className = "taskpresetcat";
        catLabel.textContent = category;
        presetsDetails.appendChild(catLabel);
        const pillRow = document.createElement("div");
        pillRow.className = "pills";
        TASK_PRESETS[category].forEach(preset => {
          const alreadyAdded = client.tasks.some(t => t.title === preset.title);
          const picked = pendingPresetTitles.has(preset.title);
          const pill = document.createElement("button");
          pill.type = "button";
          pill.className = "pill taskpresetpill" + (alreadyAdded ? " zero" : (picked ? " picked" : ""));
          pill.textContent = (alreadyAdded ? "✓ " : (picked ? "☑ " : "☐ ")) + preset.title + (preset.freq === "weekly" ? ` · ${preset.target}x/wk` : "");
          if(!alreadyAdded){
            pill.title = picked ? "Selected -- click to remove from this batch" : "Click to select, then hit Save below";
            pill.addEventListener("click", () => {
              if(pendingPresetTitles.has(preset.title)) pendingPresetTitles.delete(preset.title);
              else pendingPresetTitles.add(preset.title);
              renderClientProfile();
            });
          } else {
            pill.title = "Already on this client's task list";
          }
          pillRow.appendChild(pill);
        });
        presetsDetails.appendChild(pillRow);
      });
      addPanel.appendChild(presetsDetails);

      const customDraftsLabel = document.createElement("div");
      customDraftsLabel.className = "customdraftslabel";
      customDraftsLabel.textContent = "Custom tasks";
      addPanel.appendChild(customDraftsLabel);
      if(pendingCustomDrafts.length){
        const draftsList = document.createElement("div");
        draftsList.className = "tasklist";
        pendingCustomDrafts.forEach(d => {
          const row = document.createElement("div");
          row.className = "taskrow";
          row.innerHTML = `
            <input type="text" value="${esc(d.title||"")}" placeholder="e.g. Foam roll 10 min">
            <select>
              <option value="daily" ${(!d.freq || d.freq === "daily") ? "selected" : ""}>Daily</option>
              <option value="weekly" ${d.freq === "weekly" ? "selected" : ""}>Weekly</option>
              <option value="days" ${d.freq === "days" ? "selected" : ""}>Specific days</option>
            </select>
            ${d.freq === "weekly" ? `<span style="font-size:12px;color:var(--ink-dim);">×</span><input type="number" min="1" max="14" value="${d.target||3}"><span style="font-size:12px;color:var(--ink-dim);">/week</span>` : ""}
            <button class="taskrmbtn" type="button" title="Remove this draft">✕</button>
            ${d.freq === "days" ? '<div class="daychips" data-role="daychips"></div>' : ""}
          `;
          row.querySelector('input[type="text"]').addEventListener("input", e => { d.title = e.target.value; markTaskDraftDirty(client.id); refreshSaveTasksBtn(); });
          row.querySelector("select").addEventListener("change", e => {
            d.freq = e.target.value;
            if(d.freq === "weekly" && !d.target) d.target = 3;
            if(d.freq === "days" && !d.days) d.days = [];
            renderClientProfile();
          });
          const targetInp = row.querySelector('input[type="number"]');
          if(targetInp){
            targetInp.addEventListener("input", e => { d.target = Math.max(1, parseInt(e.target.value, 10) || 1); });
          }
          const dayChipsEl = row.querySelector('[data-role="daychips"]');
          if(dayChipsEl){
            buildDayChips(dayChipsEl, d.days, v => {
              const i = (d.days || []).indexOf(v);
              d.days = i > -1 ? d.days.filter(x => x !== v) : (d.days || []).concat([v]);
              renderClientProfile();
            });
          }
          row.querySelector(".taskrmbtn").addEventListener("click", () => {
            pendingCustomDrafts = pendingCustomDrafts.filter(x => x.id !== d.id);
            renderClientProfile();
          });
          draftsList.appendChild(row);
        });
        addPanel.appendChild(draftsList);
      }

      const addDraftBtn = document.createElement("button");
      addDraftBtn.className = "addtaskbtn";
      addDraftBtn.type = "button";
      addDraftBtn.textContent = "+ Add Custom Task";
      addDraftBtn.addEventListener("click", () => {
        pendingCustomDrafts.push({id: rid(), title: "", freq: "daily", target: null});
        renderClientProfile();
        requestAnimationFrame(() => {
          const rows = document.querySelectorAll(".addtaskspanel .taskrow input[type='text']");
          const last = rows[rows.length - 1];
          if(last) last.focus();
        });
      });
      addPanel.appendChild(addDraftBtn);

      // A live count so it's obvious, before saving, exactly how many things
      // are queued up -- this is what actually delivers "multi-select": tick
      // several suggestions and/or add several custom drafts, watch the count
      // climb, then Save them all in one action.
      function currentPendingCount(){
        return pendingPresetTitles.size + pendingCustomDrafts.filter(d => (d.title||"").trim()).length;
      }
      const saveTasksBtn = document.createElement("button");
      saveTasksBtn.className = "savetasksbtn";
      saveTasksBtn.type = "button";
      function refreshSaveTasksBtn(){
        const n = currentPendingCount();
        saveTasksBtn.disabled = n === 0;
        saveTasksBtn.textContent = n > 0
          ? `💾 Save ${n} Task${n === 1 ? "" : "s"} to ${client.name || "This Client"}'s List`
          : "💾 Save Tasks";
      }
      refreshSaveTasksBtn();
      saveTasksBtn.addEventListener("click", () => {
        // Belt-and-suspenders: re-fetch the client fresh from clientsCache by
        // id right here, instead of trusting the `client` this button's own
        // render closed over. clientsCache entries get replaced wholesale by
        // background snapshots, and if that ever slips past the protection
        // above (a case we haven't been able to pin down yet), pushing onto a
        // stale, detached copy would make Save look like it silently does
        // nothing -- exactly what's been reported. Falling back to the closure
        // value only if a fresh lookup somehow comes up empty keeps this from
        // ever being worse than before.
        const liveClient = clientsCache.find(c => c.id === client.id) || client;
        try{
          // Build the new rows in a fresh, plain local array and concat it onto
          // liveClient.tasks in ONE reassignment at the end, rather than
          // .push()-ing straight onto liveClient.tasks -- that array can come
          // straight from a db snapshot, and .push() throws on those
          // ("Attempted to assign to readonly property") because the real db
          // capability hands back frozen/read-only nested arrays. Reassigning
          // the whole property to a brand-new array is always safe.
          const newTasks = [];
          Object.keys(TASK_PRESETS).forEach(category => {
            TASK_PRESETS[category].forEach(preset => {
              if(pendingPresetTitles.has(preset.title) && !liveClient.tasks.some(t => t.title === preset.title)){
                newTasks.push({
                  id: rid(), title: preset.title, freq: preset.freq,
                  target: preset.freq === "weekly" ? (preset.target || 3) : null, completions: {},
                });
              }
            });
          });
          pendingCustomDrafts.forEach(d => {
            const title = (d.title || "").trim();
            if(!title) return;
            const newTask = {
              id: rid(), title, freq: d.freq || "daily",
              target: d.freq === "weekly" ? Math.max(1, d.target || 3) : null, completions: {},
            };
            if(d.freq === "days") newTask.days = (d.days || []).slice();
            newTasks.push(newTask);
          });
          if(newTasks.length) liveClient.tasks = (liveClient.tasks || []).concat(newTasks);
          const added = newTasks.length;
          pendingPresetTitles = new Set();
          pendingCustomDrafts = [];
          // No draft field is mid-keystroke anymore -- clear this right away
          // rather than waiting out its timer, so a background snapshot (e.g.
          // the real save we're about to kick off, landing) isn't held back
          // from showing the just-saved tasks.
          delete taskDraftDirtyIds[liveClient.id];
          clearTimeout(taskDraftDirtyTimers[liveClient.id]);
          // Always show SOMETHING after a Save click -- silence is exactly
          // what's been reported as "nothing happens", so even the (should be
          // rare/impossible given the button is disabled at 0) zero-added case
          // gets a visible, honest message instead of quietly doing nothing.
          const confirmMsg = added > 0
            ? `✓ Saved ${added} task${added === 1 ? "" : "s"} to ${liveClient.name || "this client"}'s list — they'll see ${added === 1 ? "it" : "them"} as tick-boxes in their own view.`
            : "Nothing new to save -- everything selected was already on the list.";
          renderClientProfile();
          scheduleClientSave(liveClient);
          showTaskSaveConfirmation(confirmMsg);
        }catch(err){
          // Diagnostic safety net, same idea as the render-level one above:
          // repeated reports of "I hit Save and nothing happens" with no
          // reproduction locally means something is throwing in a real
          // account's data that isn't caught anywhere else. Surface it loudly
          // instead of letting the click silently do nothing.
          console.error("[SaveTasksClickError]", err);
          showTaskSaveConfirmation("Something went wrong saving these tasks (" + (err && err.message ? err.message : String(err)) + "). Nothing was lost -- try again, and let your coach-tool developer know this message if it keeps happening.", true);
        }
      });
      addPanel.appendChild(saveTasksBtn);

      const taskSaveConfirm = document.createElement("div");
      taskSaveConfirm.className = "taskconfirm";
      taskSaveConfirm.id = "taskSaveConfirm";
      taskSaveConfirm.hidden = true;
      addPanel.appendChild(taskSaveConfirm);

      body.appendChild(addPanel);
  });

  const weeklyGoalsPill = buildClientProfilePill(client, "weeklygoals", "This Week's Goals (set by client)", false, body => {
      const wgLabel = document.createElement("div");
      wgLabel.className = "field-label";
      wgLabel.textContent = "This Week's Goals (set by client)";
      body.appendChild(wgLabel);
      const wgHint = document.createElement("div");
      wgHint.className = "statshint";
      wgHint.textContent = (client.name || "The client") + " sets and checks these off themselves from their own view — a fresh list each week.";
      body.appendChild(wgHint);
      const wgList = document.createElement("div");
      const weekGoals = currentWeekGoals(client);
      if(!weekGoals.length){
        wgList.innerHTML = '<div class="emptyprogs">No goals set for this week yet.</div>';
      } else {
        weekGoals.forEach(g => {
          const row = document.createElement("div");
          // Completion is now tracked per date (see setGoalCompletionEntry), not
          // as a single shared done flag, so a goal spanning several days shows
          // how many of ITS applicable days are ticked off so far this week
          // instead of one all-or-nothing checkmark.
          const weekDates = currentWeekDates();
          const applicableDates = weekDates.filter(wd => !g.days || !g.days.length || g.days.includes(wd.key));
          const completions = g.completions || {};
          const doneCount = applicableDates.filter(wd => completions[wd.date]).length;
          // A single-day goal is simply "done" or not, same as before. A goal
          // that spans several days (or every day) gets the strikethrough as
          // soon as the client has ticked it off at least once this week -- the
          // days-done count alongside it shows exactly how much progress that is.
          const hasProgress = doneCount > 0;
          row.className = "weeklygoalro" + (hasProgress ? " done" : "");
          const daysNote = (g.days && g.days.length)
            ? ` <span class="statscope">(${esc(g.days.map(k => (WEEKDAYS.find(w => w.key === k) || {}).short || k).join(", "))})</span>`
            : "";
          const progressNote = applicableDates.length > 1
            ? ` <span class="statscope">${doneCount}/${applicableDates.length} days done</span>`
            : "";
          row.innerHTML = `<span class="wgdot"></span><span>${esc(g.text||"")}</span>${daysNote}${progressNote}`;
          wgList.appendChild(row);
        });
      }
      body.appendChild(wgList);
  });

  const agendaNotesPill = buildClientProfilePill(client, "agendanotes", "Daily Agenda Notes", false, body => {
      client.agendaNotes = client.agendaNotes || {};
      const agendaNotesLabel = document.createElement("div");
      agendaNotesLabel.className = "field-label";
      agendaNotesLabel.textContent = "Daily Agenda Notes";
      body.appendChild(agendaNotesLabel);
      const agendaNotesHint = document.createElement("div");
      agendaNotesHint.className = "statshint";
      agendaNotesHint.textContent = "Shown to " + (client.name || "this client") + " on that day in their Daily Agenda — e.g. a reminder for a specific day, unlike the private notes above.";
      body.appendChild(agendaNotesHint);
      const agendaNotesBox = document.createElement("div");
      agendaNotesBox.className = "agendanoteseditor";
      WEEKDAYS.forEach(wd => {
        const row = document.createElement("div");
        row.className = "agendanoterow";
        row.innerHTML = `<span class="agendanotedaylabel">${wd.short}</span><input type="text" maxlength="200" value="${esc(client.agendaNotes[wd.key]||"")}" placeholder="e.g. Meal prep today">`;
        row.querySelector("input").addEventListener("input", e => {
          client.agendaNotes = Object.assign({}, client.agendaNotes || {});
          client.agendaNotes[wd.key] = e.target.value;
          scheduleClientSave(client);
        });
        agendaNotesBox.appendChild(row);
      });
      body.appendChild(agendaNotesBox);
  });

  const trainingPlanPill = buildClientProfilePill(client, "trainingplan", "Training Plan", false, body => {
      body.appendChild(buildClientProfilePill(client, "liftingstats", "Lifting Stats", true, body => {
          body.appendChild(buildStatsBox(null, client));
      }, "cmnestedpill"));

      body.appendChild(buildClientProfilePill(client, "programs", "Programs", true, body => {
          const linkedPrograms = programsCache.filter(p => programHasClient(p, client.id));
          const progLabel = document.createElement("div");
          progLabel.className = "field-label";
          progLabel.textContent = "Programs";
          body.appendChild(progLabel);
          const progList = document.createElement("div");
          progList.className = "clientlinklist";
          if(!linkedPrograms.length){
            progList.innerHTML = '<div class="emptyprogs">No programs linked yet — link this client from a program&#39;s Client picker in Program Builder.</div>';
          } else {
            linkedPrograms.forEach(p => {
              const days = p.days || [];
              const exCount = days.reduce((n, d) => n + (d.exercises ? d.exercises.length : 0), 0);
              const card = document.createElement("div");
              card.className = "clientlinkcard";
              card.innerHTML = `
                <div><b>${esc(p.name||"Untitled Program")}</b><span class="meta">${p.weeks > 1 ? fmtCount(p.weeks,"week") + " · " : ""}${fmtCount(days.length,"day")} · ${fmtCount(exCount,"exercise")}</span></div>
                <button class="openlinkbtn" type="button">Open in Program Builder →</button>
              `;
              card.querySelector(".openlinkbtn").addEventListener("click", () => openProgramFromClient(p));
              progList.appendChild(card);
            });
          }
          body.appendChild(progList);
      }, "cmnestedpill"));

      body.appendChild(buildClientProfilePill(client, "rehabcases", "Rehab Cases", true, body => {
          const linkedCases = casesCache.filter(c => c.clientId === client.id);
          const caseLabel = document.createElement("div");
          caseLabel.className = "field-label";
          caseLabel.textContent = "Rehab Cases";
          body.appendChild(caseLabel);
          const caseList = document.createElement("div");
          caseList.className = "clientlinklist";
          if(!linkedCases.length){
            caseList.innerHTML = '<div class="emptyprogs">No rehab cases linked yet — link this client from a case&#39;s Linked client field in Rehab.</div>';
          } else {
            linkedCases.forEach(c => {
              const areas = c.areaGroups || [];
              const card = document.createElement("div");
              card.className = "clientlinkcard";
              card.innerHTML = `
                <div><b>${esc(c.diagnosis ? (c.diagnosis.length > 60 ? c.diagnosis.slice(0,60) + "…" : c.diagnosis) : "Rehab case")}</b><span class="meta">${areas.length ? esc(areas.join(", ")) : "No area set"} · ${fmtCount((c.plan||[]).length,"exercise")}</span></div>
                <button class="openlinkbtn" type="button">Open in Rehab →</button>
              `;
              card.querySelector(".openlinkbtn").addEventListener("click", () => openCaseFromClient(c));
              caseList.appendChild(card);
            });
          }
          body.appendChild(caseList);
      }, "cmnestedpill"));

      body.appendChild(buildClientProfilePill(client, "nutritionplans", "Nutrition Plans", true, body => {
          const linkedNutrition = nutritionCache.filter(n => n.clientId === client.id);
          const nutLabel = document.createElement("div");
          nutLabel.className = "field-label";
          nutLabel.textContent = "Nutrition Plans";
          body.appendChild(nutLabel);
          const nutList = document.createElement("div");
          nutList.className = "clientlinklist";
          if(!linkedNutrition.length){
            nutList.innerHTML = '<div class="emptyprogs">No nutrition plans linked yet — link this client from a plan&#39;s Client picker in Nutrition.</div>';
          } else {
            linkedNutrition.forEach(n => {
              const card = document.createElement("div");
              card.className = "clientlinkcard";
              card.innerHTML = `
                <div><b>${esc(n.name||"Untitled Plan")}</b><span class="meta">${fmtCount((n.meals||[]).length,"meal")}</span></div>
                <button class="openlinkbtn" type="button">Open in Nutrition →</button>
              `;
              card.querySelector(".openlinkbtn").addEventListener("click", () => openNutritionFromClient(n));
              nutList.appendChild(card);
            });
          }
          body.appendChild(nutList);
      }, "cmnestedpill"));
  });

  wrap.appendChild(contactPill);
  wrap.appendChild(accessPill);
  const goalsNotesRow = document.createElement("div");
  goalsNotesRow.className = "clientprofilerow";
  goalsNotesRow.appendChild(goalsPill);
  goalsNotesRow.appendChild(notesPill);
  wrap.appendChild(goalsNotesRow);
  wrap.appendChild(sessionLogPill);
  wrap.appendChild(tasksPill);
  wrap.appendChild(weeklyGoalsPill);
  wrap.appendChild(agendaNotesPill);
  wrap.appendChild(trainingPlanPill);

  host.appendChild(wrap);

  const syncClientFullName = () => {
    // client.name stays the combined full name and stays in sync
    // automatically -- every other display site (client list, messages,
    // print, profile hints, etc.) reads client.name and none of them need
    // to change for this split to work.
    client.name = [client.firstName, client.lastName].filter(Boolean).join(" ");
    scheduleClientSave(client);
    renderClientList();
  };
  document.getElementById("clientFirstNameInput").addEventListener("input", e => {
    client.firstName = e.target.value;
    syncClientFullName();
  });
  document.getElementById("clientLastNameInput").addEventListener("input", e => {
    client.lastName = e.target.value;
    syncClientFullName();
  });
  document.getElementById("bmAge").addEventListener("input", e => { client.age = e.target.value; scheduleClientSave(client); });
  document.getElementById("bmSex").addEventListener("change", e => { client.sex = e.target.value; scheduleClientSave(client); renderClientProfile(); });
  document.getElementById("bmHeight").addEventListener("input", e => { client.heightValue = e.target.value; scheduleClientSave(client); });
  document.getElementById("bmHeightUnit").addEventListener("change", e => { client.heightUnit = e.target.value; scheduleClientSave(client); renderClientProfile(); });
  document.getElementById("bmWeight").addEventListener("input", e => { client.bodyWeight = e.target.value; scheduleClientSave(client); });
  document.getElementById("bmActivity").addEventListener("change", e => { client.activityLevel = e.target.value; scheduleClientSave(client); renderClientProfile(); });
  document.getElementById("bmGoal").addEventListener("change", e => { client.nutritionGoal = e.target.value; scheduleClientSave(client); renderClientProfile(); });
  document.getElementById("copyAccessBtn").addEventListener("click", () => {
    const btn = document.getElementById("copyAccessBtn");
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(client.accessCode).then(() => {
        btn.textContent = "Copied!";
        setTimeout(() => { btn.textContent = "Copy"; }, 1500);
      }).catch(() => {});
    }
  });
  document.getElementById("regenAccessBtn").addEventListener("click", () => {
    client.accessCode = genAccessCode();
    scheduleClientSave(client);
    renderClientProfile();
  });
  document.getElementById("clientEmailInput").addEventListener("input", e => {
    client.email = e.target.value.trim();
    scheduleClientSave(client);
  });
  document.getElementById("clientBirthdayInput").addEventListener("input", e => {
    client.birthday = e.target.value;
    scheduleClientSave(client);
  });
  document.getElementById("resendAccessEmailBtn").addEventListener("click", async () => {
    const btn = document.getElementById("resendAccessEmailBtn");
    const status = document.getElementById("resendAccessEmailStatus");
    if(!client.email){
      status.textContent = "Add an email address above first.";
      return;
    }
    btn.disabled = true;
    status.textContent = "Sending…";
    try{
      const resender = window.claude && window.claude.use ? await window.claude.use("resendAccessCode") : null;
      if(!resender){
        status.textContent = "Not available in this preview — open the published page itself.";
        return;
      }
      await resender.call(client.id);
      status.textContent = "✓ Sent to " + client.email;
    }catch(e){
      console.error("[resendAccessEmail]", e);
      status.textContent = "Couldn't send that (" + (e && e.code ? e.code : "error") + ") — check the email address and try again.";
    }finally{
      btn.disabled = false;
    }
  });
  document.getElementById("previewClientBtn").addEventListener("click", () => previewClientView(client));
  wireClientDeleteBtn(document.getElementById("delClientBtn"));

  }catch(err){
    console.error("[ClientProfileRenderError]", err);
    host.innerHTML = '<div class="dbnote" style="margin:0;">Something went wrong showing this client&#39;s profile ('
      + esc(err && err.message ? err.message : String(err))
      + '). Your data is safe -- switch to another client and back, or reload the page, and let your coach-tool developer know the message above if it keeps happening.</div>';
  }
}

/* ---------------------------------------------------------------------
   Load custom exercises (runs at startup, independent of which tab is
   active) so they're merged into DATA everywhere from the start.
   Named (not a fire-and-forget IIFE) and re-callable: getDb() above
   doesn't cache a null ("not signed in yet") result, and src/main.js
   calls window.retryDbInit() every time the coach's session changes --
   so signing in AFTER this first ran (no full page reload in between,
   e.g. signing out and straight back in with a code) gets picked up
   here instead of leaving the "preview, won't be saved" warning up
   forever with nothing actually wired up behind it.
--------------------------------------------------------------------- */
let dbInitDone = false;
async function initCustomExercises(){
  if(dbInitDone) return;
  db = await getDb();
  if(!db){
    flashNote("Custom exercises you add here won't be saved permanently in this preview — open the published page itself to keep them for good.", "dbnoteLibrary");
    flashNote("Saving isn't wired up in this preview, so clients you create here won't be kept — open the published page itself to save for real.", "dbnoteClients");
    return;
  }
  dbInitDone = true;
  // A real db just became available (possibly after the notes above were
  // already shown from an earlier attempt this same page load) -- clear
  // them so they don't linger once saving actually works.
  const libNote = document.getElementById("dbnoteLibrary");
  const clientsNote = document.getElementById("dbnoteClients");
  if(libNote) libNote.hidden = true;
  if(clientsNote) clientsNote.hidden = true;
  customCol = db.collection("customExercises");
  customCol.orderBy("createdAt", "desc").limit(500).onSnapshot(snap => {
    customExercises = snap.docs.map(d => Object.assign({id: d.id}, d.data()));
    mergeLibrary();
    if(tabPanels.library.classList.contains("active")) render();
    if(builderInited) renderProgramList();
    if(rehabInited) renderCaseList();
  }, err => {
    flashNote("Couldn't load custom exercises (" + err.code + "). Any you add during this visit may not be saved.", "dbnoteLibrary");
  });

  // Clients are shared between the Program Builder and Rehab tabs (a lifting
  // stat logged for a client on one program carries over to the next, and
  // the same person shows up the same way in both tabs) so they're loaded
  // once, eagerly, rather than lazily per tab like programs/rehab cases.
  clientsCol = db.collection("clients");
  clientsCol.orderBy("name", "asc").limit(500).onSnapshot(snap => {
    const freshCache = snap.docs.map(d => Object.assign({id: d.id}, d.data()));
    // A snapshot can arrive for any change to any client in the whole
    // collection. If the client currently open here has an edit that's
    // still debounced or mid-save (e.g. a task just added), keep our
    // local copy of just that one record instead of letting a snapshot
    // that predates it wipe the unsaved change back out.
    //
    // This also has to cover the "pick, then Save" task panel, which is a
    // real, previously-missed gap: renderClientProfile() looks the client
    // up fresh from clientsCache on every render (`clientsCache.find(...)`),
    // so the Save button's click handler closes over whatever object THAT
    // lookup returned. If an unrelated snapshot swaps clientsCache for a
    // new array of new objects while the coach is mid-selection -- before
    // scheduleClientSave has been called even once, so clientSavePendingIds
    // isn't set yet -- the Save button ends up pushing the queued tasks
    // onto an object that's no longer the one in clientsCache. The push
    // still happens, but the very next render reads the (unchanged) live
    // object and shows no new tasks: "I hit Save and nothing happens." The
    // fix is the same idea as the pending-save guard above, just covering
    // more cases: keep the SAME object reference (not a fresh copy from the
    // server) for any client with active, unsaved work in this panel --
    // an in-flight save, a draft field mid-keystroke, or queued-but-unsaved
    // picks/drafts sitting in the panel.
    const protectedIds = new Set(Object.keys(clientSavePendingIds).concat(Object.keys(taskDraftDirtyIds)));
    if(pendingTasksClientId && (pendingPresetTitles.size > 0 || pendingCustomDrafts.length > 0)){
      protectedIds.add(pendingTasksClientId);
    }
    Array.from(protectedIds).forEach(pendingId => {
      const idx = freshCache.findIndex(c => c.id === pendingId);
      const pendingLocal = clientsCache.find(c => c.id === pendingId);
      if(pendingLocal && idx > -1) freshCache[idx] = pendingLocal;
    });
    clientsCache = freshCache;
    if(builderInited) renderEditor();
    if(rehabInited) renderRehabEditor();
    if(nutritionInited) renderNutritionEditor();
    if(clientsTabInited) renderClientList();
    // Messages is inited eagerly at page load (see below), often BEFORE
    // this, clients' own eager load finishes -- without this, whichever of
    // the two happened to resolve first "won", and if messages' own
    // (empty-clientsCache) render won that race, the Messages tab got
    // permanently stuck showing "Add a client on THE SQUAD tab first" even
    // once clients had actually loaded, since nothing else ever re-rendered
    // that list afterward.
    renderMessageThreadList();
    safeRenderClientProfile();
    renderNotificationsList();
    if(clientSession){
      const fresh = clientsCache.find(x => x.id === clientSession.id);
      if(fresh){ clientSession = fresh; safeRenderClientModeView(); }
      else {
        // This client's record no longer exists (deleted by the coach) --
        // don't leave a logged-in session pointing at nothing.
        clientSession = null;
        try{ localStorage.removeItem("mlClientSession"); }catch(e){ /* ignore */ }
        applyAccessGate();
      }
    }
    // else: not currently previewing a client. This whole subscription
    // only ever runs inside the coach's own signed-in session (it needs a
    // real db from getDb(), which only a signed-in coach ever gets), so
    // there's no real client login to restore here -- that's handled once,
    // correctly, in resolveOwnerStatus() instead. Calling
    // tryRestoreClientSession() from here used to be the bug behind "every
    // refresh opens a client preview instead of my homepage": if this
    // browser had ever saved a client access code (e.g. from testing the
    // client login screen), every reload would silently log back into that
    // client and switch the whole app to client view.
  }, err => { /* clients just won't be pickable this visit */ });
}

initCustomExercises();
// Messages gets initialized eagerly here too (not just lazily on first
// visiting the Messages or THE SQUAD tab) so the unread badge on the
// Messages tab itself is already accurate the moment the coach's dashboard
// loads -- a real "you have a message" notification, not one that only
// appears once she happens to click into a tab that loads it.
messagesInited = true;
initMessages();
// Programs (and the session-log notes buried inside them) also get loaded
// eagerly here, for the same reason as Messages just above -- the
// Notifications tab's badge needs to be accurate the moment the dashboard
// loads, not just once the coach happens to open Program Builder or THE
// SQUAD first.
ensureBuilderInited();
// Enquiries ALSO gets initialized eagerly here now, for the same reason as
// Messages above, and to fix a real bug: it used to be purely lazy (only
// loaded on an actual click into the Enquiries tab, or via retryDbInit
// below firing from src/main.js's auth listener) -- but a coach who signs
// out to test the public Enquire form, submits it, then signs straight
// back in without ever clicking the Enquiries tab herself never triggered
// either path, so the tab silently never loaded a single enquiry, ever,
// even though every submission was saving to the database correctly the
// whole time. Loading it here, unconditionally, the same way Messages and
// Programs already do, means it's populated (and its unread badge is
// accurate) from the moment the dashboard appears, with no tab click or
// lucky auth-timing required.
enquiriesInited = true;
initEnquiries();
// Called from src/main.js's watchAuthState every time the coach's session
// changes (sign-in, sign-out, a code change) -- each is a no-op once it has
// actually succeeded once (dbInitDone / messagesDbInitDone / enquiriesDbInitDone
// guard above), so this safely covers the case where any of these were
// called before the coach's session had actually resolved yet.
window.retryDbInit = () => { initCustomExercises(); initMessages(); initEnquiries(); ensureBuilderInited(); };

resolveOwnerStatus();

/* ---------------------------------------------------------------------
   Messages -- an in-app chat between coach and client, so neither side
   ever needs the other's phone number.

   The coach's side gets true realtime, same as every other tab, via the
   firestoreShim subscription set up in initMessages(). A real client never
   holds a Supabase session (see the client-login block above), so their
   side instead polls window.__clientPortal.getMessagesForCode every
   CLIENT_MSG_POLL_MS while they're logged in (see startClientMessagePolling
   near loadClientPortalData). messagesCache is the single shared array
   both paths write into, exactly like programsCache/casesCache/
   nutritionCache already are.

   buildMessageBubble/fmtMsgTime are shared by both the coach's own thread
   view (renderMessageThread) and the client-facing pill
   (buildClientMessagesPanel) so a message always looks the same regardless
   of who's reading it -- only which side it's aligned to changes, via the
   `mineSender` parameter.
--------------------------------------------------------------------- */

// A client tucked into Archived shouldn't stay hidden if they actually need
// a reply -- if anything of theirs is still unread, bring them back to the
// active list automatically rather than risk it going unnoticed. Runs on
// every incoming snapshot, so a message that arrives after archiving (the
// whole point of archiving) surfaces the thread again right away, and it
// self-heals the rare case of archiving a thread with unread still pending.
function autoUnarchiveClientsWithUnread(){
  clientsCache.forEach(c => {
    if(!c.messagesArchived) return;
    const hasUnread = messagesCache.some(m => m.clientId === c.id && m.sender === "client" && !m.readByCoach);
    if(hasUnread){
      c.messagesArchived = false;
      scheduleClientSave(c);
    }
  });
}

// ---------------------------------------------------------------------
// Notifications -- session notes a client left after saving a finished
// training day (see buildSessionSaveBox's notes field), surfaced here so
// the coach doesn't have to open each client's own profile ("Session Notes
// (from Client)" pill, buildSessionLogHistoryBox) to catch them. No
// dedicated table or subscription of its own: this is derived straight
// from the same programsCache/clientsCache already loaded for Program
// Builder and THE SQUAD (see ensureBuilderInited(), called eagerly at the
// bottom of this file), so a new note shows up here live, same as
// everywhere else in the app.
function notificationEntries(){
  const out = [];
  programsCache.forEach(program => {
    const byClient = program.sessionLogsByClient || {};
    Object.keys(byClient).forEach(clientId => {
      (byClient[clientId] || []).forEach(entry => {
        if(!entry.notes) return; // notifications are specifically about left notes, not every saved session
        out.push({program, clientId, client: clientsCache.find(c => c.id === clientId), entry});
      });
    });
  });
  out.sort((a, b) => (b.entry.completedAt || "").localeCompare(a.entry.completedAt || ""));
  return out;
}

function updateNotificationsTabBadge(){
  const btn = tabBtns.notifications;
  if(!btn) return;
  const count = notificationEntries().filter(n => !n.entry.seenByCoach).length;
  let badge = btn.querySelector(".msgunreadbadge");
  if(count > 0){
    if(!badge){
      badge = document.createElement("span");
      badge.className = "msgunreadbadge";
      btn.appendChild(badge);
    }
    badge.textContent = count;
  } else if(badge){
    badge.remove();
  }
}

// Marks one note as read -- a narrow, targeted update (just this one
// entry's seenByCoach flag, inside just this one program's
// sessionLogsByClient) rather than a full program save, for the same
// reason scheduleClientProgramSessionLogsSave never saves the whole
// program doc: a client could be mid-save on their own actual sets/swaps
// for this exact program at the same moment, and a wider save here could
// clobber that.
async function markSessionNoteSeen(program, clientId, entryId){
  const list = (program.sessionLogsByClient && program.sessionLogsByClient[clientId]) || [];
  const idx = list.findIndex(e => e.id === entryId);
  if(idx === -1 || list[idx].seenByCoach) return;
  const updatedList = list.slice();
  updatedList[idx] = Object.assign({}, updatedList[idx], {seenByCoach: true});
  const byClient = Object.assign({}, program.sessionLogsByClient || {}, {[clientId]: updatedList});
  program.sessionLogsByClient = byClient;
  const cacheIdx = programsCache.findIndex(p => p.id === program.id);
  if(cacheIdx > -1) programsCache[cacheIdx] = Object.assign({}, programsCache[cacheIdx], {sessionLogsByClient: byClient});
  updateNotificationsTabBadge();
  if(programsCol && !String(program.id).startsWith("local-")){
    try{
      await programsCol.doc(program.id).update({sessionLogsByClient: byClient, updatedAt: new Date().toISOString()});
    }catch(e){
      console.error("[markSessionNoteSeen]", e);
      // Best-effort -- worst case an already-read note shows as new again
      // once a fresh snapshot lands, never a lost note.
    }
  }
}

function renderNotificationsList(){
  const el = document.getElementById("notificationListEl");
  if(!el) return;
  el.innerHTML = "";
  const entries = notificationEntries();
  updateNotificationsTabBadge();
  if(!entries.length){
    el.innerHTML = '<div class="emptyprogs">No session notes from clients yet — they\'ll show up here as soon as one is saved.</div>';
    return;
  }
  entries.forEach(({program, clientId, client, entry}) => {
    const row = document.createElement("div");
    row.className = "notificationrow" + (entry.seenByCoach ? "" : " unseen");
    const where = [entry.programName, entry.dayLabel, entry.weekLabel].filter(Boolean).join(" — ");
    const rpeTag = entry.rpe ? `RPE ${entry.rpe}` : "";
    const meta = [where, rpeTag].filter(Boolean).join(" · ");
    row.innerHTML = `
      <div class="notificationhead">
        <span class="notificationclient">${esc(client ? (client.name || "Unnamed client") : "Former client")}</span>
        <span class="notificationdate">${esc(fmtDateTime(entry.completedAt))}</span>
      </div>
      <div class="notificationmeta">${esc(meta)}</div>
      <div class="notificationnote">${esc(entry.notes)}</div>
    `;
    if(client){
      // Deliberately NOT stopping propagation -- the row's own click
      // handler just below also fires, so clicking the name both jumps to
      // the profile AND marks the note seen (clicking anywhere else on the
      // row does the latter only).
      row.querySelector(".notificationclient").addEventListener("click", () => {
        goToClientProfile(client.id);
      });
    }
    row.addEventListener("click", () => markSessionNoteSeen(program, clientId, entry.id));
    el.appendChild(row);
  });
}

// The little count badge next to the "Messages" tab itself -- the coach's
// equivalent of the "(N new)" a client sees on their own Messages pill.
// Independent of which tab is currently open, so it stays accurate whether
// she's looking at Messages right now or not.
function updateMessagesTabBadge(){
  const btn = tabBtns.messages;
  if(!btn) return;
  const count = messagesCache.filter(m => m.sender === "client" && !m.readByCoach).length;
  let badge = btn.querySelector(".msgunreadbadge");
  if(count > 0){
    if(!badge){
      badge = document.createElement("span");
      badge.className = "msgunreadbadge";
      btn.appendChild(badge);
    }
    badge.textContent = String(count);
  } else if(badge){
    badge.remove();
  }
}

async function initMessages(){
  if(messagesDbInitDone) return; // already subscribed -- avoid a duplicate realtime channel on retry
  db = await getDb();

  if(!db){
    flashNote("Saving isn't wired up in this preview, so messages you send here won't be kept — open the published page itself to message for real.", "dbnoteMessages");
    renderMessageThreadList();
    renderMessageThread();
    return;
  }

  messagesDbInitDone = true;
  // A real db just became available (possibly after the note above was
  // already shown from an earlier attempt this same page load, e.g. this
  // tab was opened right before sign-in finished) -- clear it so it
  // doesn't linger once sending/saving actually works. Same fix already
  // applied to initCustomExercises() above.
  const msgNote = document.getElementById("dbnoteMessages");
  if(msgNote) msgNote.hidden = true;
  messagesCol = db.collection("messages");
  messagesCol.orderBy("createdAt", "asc").limit(1000).onSnapshot(snap => {
    messagesCache = snap.docs.map(d => Object.assign({id: d.id}, d.data()));
    autoUnarchiveClientsWithUnread();
    renderMessageThreadList();
    renderMessageThread();
    updateMessagesTabBadge();
    // Keeps the coach's own "preview as this client" view (which shares
    // this same cache) showing new messages the instant they arrive too.
    safeRenderClientModeView();
  }, err => {
    flashNote("Couldn't load messages (" + err.code + ").", "dbnoteMessages");
  });
}

function buildMessageThreadRow({client, last, unread}){
  const div = document.createElement("div");
  div.className = "progitem" + (client.id === currentMessageClientId ? " active" : "");
  // Slice the raw text BEFORE escaping it, not after -- slicing an
  // already-escaped string risks cutting an HTML entity like "&amp;" in
  // half and leaving a broken, literal "&am" on the page.
  const rawPreview = last ? (last.sender === "coach" ? "You: " : "") + (last.body || "") : "No messages yet";
  const preview = esc(rawPreview.slice(0, 60));
  div.innerHTML = `${esc(client.name || "Client")}${unread ? `<span class="msgunreadbadge">${unread}</span>` : ""}<span class="meta">${preview}</span>`;
  div.onclick = () => {
    currentMessageClientId = client.id;
    renderMessageThreadList();
    renderMessageThread();
    markClientMessagesReadByCoach(client.id);
  };
  return div;
}

function renderMessageThreadList(){
  const el = document.getElementById("messageThreadListEl");
  if(!el) return;
  el.innerHTML = "";
  if(!clientsCache.length){
    el.innerHTML = '<div class="emptyprogs">Add a client on THE SQUAD tab first, then you can message them here.</div>';
    return;
  }
  const withLast = clientsCache.map(c => {
    const msgs = messagesCache.filter(m => m.clientId === c.id);
    const last = msgs.length ? msgs[msgs.length - 1] : null;
    const unread = msgs.filter(m => m.sender === "client" && !m.readByCoach).length;
    return {client: c, last, unread};
  });
  const byRecency = (a, b) => {
    if(a.last && b.last) return new Date(b.last.createdAt) - new Date(a.last.createdAt);
    if(a.last) return -1;
    if(b.last) return 1;
    return (a.client.name || "").localeCompare(b.client.name || "");
  };
  const active = withLast.filter(x => !x.client.messagesArchived).sort(byRecency);
  const archived = withLast.filter(x => x.client.messagesArchived).sort(byRecency);

  if(!active.length){
    const p = document.createElement("div");
    p.className = "emptyprogs";
    p.textContent = archived.length ? "No active conversations — see Archived below." : "Add a client on THE SQUAD tab first, then you can message them here.";
    el.appendChild(p);
  } else {
    active.forEach(x => el.appendChild(buildMessageThreadRow(x)));
  }

  // Archived conversations stay fully accessible -- tucked out of the way,
  // never deleted -- and jump back to the active list on their own the
  // moment a client sends something new (see autoUnarchiveClientsWithUnread).
  if(archived.length){
    const details = document.createElement("details");
    details.className = "msgarchive";
    details.open = msgArchiveOpen;
    details.addEventListener("toggle", () => { msgArchiveOpen = details.open; });
    const summary = document.createElement("summary");
    summary.textContent = `Archived (${archived.length})`;
    details.appendChild(summary);
    archived.forEach(x => details.appendChild(buildMessageThreadRow(x)));
    el.appendChild(details);
  }
}

async function markClientMessagesReadByCoach(clientId){
  if(!messagesCol) return;
  const unread = messagesCache.filter(m => m.clientId === clientId && m.sender === "client" && !m.readByCoach);
  if(!unread.length) return;
  // Clear the unread badge right away rather than waiting on a realtime
  // round-trip to confirm it -- same immediate-feedback pattern as sending.
  unread.forEach(m => { m.readByCoach = true; });
  renderMessageThreadList();
  updateMessagesTabBadge();
  for(const m of unread){
    try{ await messagesCol.doc(m.id).update({readByCoach: true}); }catch(e){ /* badge already cleared locally; a later snapshot will reconcile if this failed */ }
  }
}

function renderMessageThread(){
  const host = document.getElementById("messagesHost");
  if(!host) return;
  host.innerHTML = "";
  if(!currentMessageClientId){
    host.innerHTML = '<div class="emptyprogs">Pick a client on the left to see your conversation.</div>';
    return;
  }
  const client = clientsCache.find(c => c.id === currentMessageClientId);
  if(!client){
    host.innerHTML = '<div class="emptyprogs">This client no longer exists.</div>';
    return;
  }

  const wrap = document.createElement("div");
  wrap.className = "msgthread";

  const threadHead = document.createElement("div");
  threadHead.className = "msgthreadhead";
  const heading = document.createElement("h4");
  heading.className = "msgthreadclientlink";
  heading.textContent = client.name || "Client";
  heading.title = "Open " + (client.name || "this client") + "'s profile in THE SQUAD";
  heading.addEventListener("click", () => goToClientProfile(client.id));
  threadHead.appendChild(heading);

  const archiveBtn = document.createElement("button");
  archiveBtn.type = "button";
  archiveBtn.className = "msgarchivebtn";
  archiveBtn.textContent = client.messagesArchived ? "Unarchive" : "Archive";
  archiveBtn.title = client.messagesArchived
    ? "Move this conversation back to your active list"
    : "Tuck this conversation away -- it comes right back if they message you again";
  archiveBtn.addEventListener("click", () => {
    client.messagesArchived = !client.messagesArchived;
    scheduleClientSave(client);
    renderMessageThreadList();
    renderMessageThread();
  });
  threadHead.appendChild(archiveBtn);
  wrap.appendChild(threadHead);

  const scroller = document.createElement("div");
  scroller.className = "msgscroller";
  const msgs = messagesCache.filter(m => m.clientId === client.id);
  if(!msgs.length){
    const p = document.createElement("div");
    p.className = "emptyprogs";
    p.textContent = "No messages yet — say hello!";
    scroller.appendChild(p);
  } else {
    msgs.forEach(m => scroller.appendChild(buildMessageBubble(m, "coach")));
  }
  wrap.appendChild(scroller);

  const sendRow = document.createElement("div");
  sendRow.className = "msgsendrow";
  const textarea = document.createElement("textarea");
  textarea.rows = 2;
  textarea.maxLength = 4000;
  textarea.placeholder = "Message " + (client.name || "your client") + "…";
  const sendBtn = document.createElement("button");
  sendBtn.type = "button";
  sendBtn.textContent = "Send";
  sendRow.appendChild(textarea);
  sendRow.appendChild(sendBtn);
  wrap.appendChild(sendRow);

  host.appendChild(wrap);
  scroller.scrollTop = scroller.scrollHeight;

  const doSend = async () => {
    const text = textarea.value.trim();
    if(!text || !messagesCol) return;
    sendBtn.disabled = true;
    try{
      const body = text.slice(0, 4000);
      const ref = await messagesCol.add({clientId: client.id, sender: "coach", body, readByCoach: true, readByClient: false});
      // Show the bubble immediately rather than waiting for the realtime
      // subscription to report it back -- same add-then-render pattern
      // already used for a brand new program/case/nutrition plan elsewhere
      // in this file. The eventual snapshot (same id) reconciles this with
      // the server's exact timestamp; nothing gets duplicated.
      messagesCache = messagesCache.concat([{
        id: ref.id, clientId: client.id, sender: "coach", body,
        readByCoach: true, readByClient: false, createdAt: new Date().toISOString(),
      }]);
      textarea.value = "";
      renderMessageThreadList();
      renderMessageThread();
      safeRenderClientModeView();
    }catch(e){
      flashNote("Couldn't send that message (" + (e && e.code ? e.code : "error") + "). Try again.", "dbnoteMessages");
    }finally{
      sendBtn.disabled = false;
      const freshTa = document.querySelector("#messagesHost .msgsendrow textarea");
      if(freshTa) freshTa.focus();
    }
  };
  sendBtn.addEventListener("click", doSend);
  textarea.addEventListener("keydown", e => {
    if(e.key === "Enter" && !e.shiftKey){ e.preventDefault(); doSend(); }
  });
}

// Shared by the coach's thread view and the client-facing pill --
// `mineSender` is "coach" or "client" depending on who's looking at the
// screen, so the same message always ends up on the "sent by me" side for
// whoever is actually reading it.
function buildMessageBubble(m, mineSender){
  const row = document.createElement("div");
  row.className = "msgbubblerow " + (m.sender === mineSender ? "mine" : "theirs");
  const bubble = document.createElement("div");
  bubble.className = "msgbubble";
  bubble.textContent = m.body || "";
  row.appendChild(bubble);
  const time = document.createElement("div");
  time.className = "msgtime";
  time.textContent = fmtMsgTime(m.createdAt);
  row.appendChild(time);
  return row;
}

function fmtMsgTime(iso){
  if(!iso) return "";
  const d = new Date(iso);
  if(isNaN(d.getTime())) return "";
  const now = new Date();
  const sameDay = d.toDateString() === now.toDateString();
  const timeStr = d.toLocaleTimeString([], {hour: "numeric", minute: "2-digit"});
  if(sameDay) return timeStr;
  return d.toLocaleDateString([], {month: "short", day: "numeric"}) + " " + timeStr;
}

// -- Client-facing side. Shared as-is by a real client's own browser AND by
// the coach's own "preview as this client" button -- see the messagesCol
// vs. window.__clientPortal branch in each, same pattern scheduleClientSave
// already uses for every other client-editable field. --

async function markClientMessagesRead(client){
  const unread = messagesCache.filter(m => m.clientId === client.id && m.sender === "coach" && !m.readByClient);
  if(!unread.length) return;
  // Clear the "(N new)" badge on the pill right away -- don't make it wait
  // on a network round-trip (this runs from the pill's own toggle handler,
  // so push the rebuild to the next tick rather than replacing the details
  // element while its own toggle event is still being dispatched).
  unread.forEach(m => { m.readByClient = true; });
  setTimeout(() => { renderClientModeView(); }, 0);
  try{
    if(messagesCol){
      for(const m of unread){
        await messagesCol.doc(m.id).update({readByClient: true});
      }
    } else if(window.__clientPortal && client.accessCode){
      await window.__clientPortal.markCoachMessagesReadForCode(client.accessCode);
    }
  }catch(e){
    console.error("[markClientMessagesRead]", e);
    // Not fatal -- the badge is already cleared locally; a later snapshot/poll will reconcile if this failed.
  }
}

function buildClientMessagesPanel(client){
  const wrap = document.createElement("div");

  const scroller = document.createElement("div");
  scroller.className = "msgscroller";
  const msgs = messagesCache.filter(m => m.clientId === client.id);
  if(!msgs.length){
    const p = document.createElement("div");
    p.className = "cmempty";
    p.textContent = "No messages yet — send your coach a hello!";
    scroller.appendChild(p);
  } else {
    msgs.forEach(m => scroller.appendChild(buildMessageBubble(m, "client")));
  }
  wrap.appendChild(scroller);

  const sendRow = document.createElement("div");
  sendRow.className = "msgsendrow";
  const textarea = document.createElement("textarea");
  textarea.rows = 2;
  textarea.maxLength = 4000;
  textarea.placeholder = "Message your coach…";
  const sendBtn = document.createElement("button");
  sendBtn.type = "button";
  sendBtn.textContent = "Send";
  sendRow.appendChild(textarea);
  sendRow.appendChild(sendBtn);
  wrap.appendChild(sendRow);

  // renderClientModeView rebuilds this from scratch every call, so start
  // scrolled to the bottom every time, same as the coach's own thread view.
  setTimeout(() => { scroller.scrollTop = scroller.scrollHeight; }, 0);

  const doSend = async () => {
    const text = textarea.value.trim();
    if(!text) return;
    sendBtn.disabled = true;
    try{
      if(messagesCol){
        // The coach's own browser, previewing this client -- goes through
        // the same db shim every other pill saves through in preview.
        const body = text.slice(0, 4000);
        const ref = await messagesCol.add({clientId: client.id, sender: "client", body, readByCoach: false, readByClient: true});
        messagesCache = messagesCache.concat([{
          id: ref.id, clientId: client.id, sender: "client", body,
          readByCoach: false, readByClient: true, createdAt: new Date().toISOString(),
        }]);
        renderClientModeView(); // show it immediately rather than waiting on the realtime snapshot
        return;
      } else if(window.__clientPortal && client.accessCode){
        // A real client's browser -- no Supabase session, so this goes
        // through the access-code-checked RPC instead.
        const sent = await window.__clientPortal.sendMessageForCode(client.accessCode, text);
        if(sent) messagesCache = messagesCache.concat([sent]);
        renderClientModeView(); // no realtime subscription on this side -- show it immediately
        return;
      }
    }catch(e){
      console.error("[buildClientMessagesPanel/send]", e);
      flashNote("Couldn't send that message. Check your connection and try again.", "dbnoteMessages");
    }finally{
      sendBtn.disabled = false;
    }
  };
  sendBtn.addEventListener("click", doSend);
  textarea.addEventListener("keydown", e => {
    if(e.key === "Enter" && !e.shiftKey){ e.preventDefault(); doSend(); }
  });

  return wrap;
}

/* ---------------------------------------------------------------------
   Enquiries -- leads captured through the public ENQUIRE form on the
   launch screen (see submit_enquiry() in supabase/schema.sql, and the form
   handler near the top of this file). There's no "+ New" button here --
   a row only ever gets created by that public form, never by the coach
   directly, so this tab is read/update/delete only.
--------------------------------------------------------------------- */
let enquiriesCol = null;
let enquiriesCache = [];
let currentEnquiryId = null;
// enquiriesDbInitDone itself is declared up near the other tab-init flags,
// not here -- see the comment there for why (it has to exist before
// initEnquiries() is first called eagerly at page load).

async function initEnquiries(){
  if(enquiriesDbInitDone) return; // already subscribed -- avoid a duplicate realtime channel on retry
  db = await getDb();

  if(!db){
    flashNote("Saving isn't wired up in this preview, so enquiries won't show up here — open the published page itself to see real submissions.", "dbnoteEnquiries");
    renderEnquiryList();
    renderEnquiryHost();
    return;
  }

  enquiriesDbInitDone = true;
  // A real db just became available (possibly after the note above was
  // already shown from an earlier attempt this same page load, e.g. this
  // tab was opened right before sign-in finished) -- clear it, and see
  // retryDbInit below for why this can now succeed on a second try instead
  // of being stuck blank until a full page reload.
  const enqNote = document.getElementById("dbnoteEnquiries");
  if(enqNote) enqNote.hidden = true;
  enquiriesCol = db.collection("enquiries");
  enquiriesCol.orderBy("createdAt", "desc").limit(300).onSnapshot(snap => {
    enquiriesCache = snap.docs.map(d => Object.assign({id: d.id}, d.data()));
    renderEnquiryList();
    renderEnquiryHost();
    updateEnquiriesTabBadge();
  }, err => {
    flashNote("Couldn't load enquiries (" + err.code + ").", "dbnoteEnquiries");
  });
}

// Mirrors updateMessagesTabBadge's look exactly (same ".msgunreadbadge"
// pill) so a fresh enquiry catches your eye on the tab bar the same way an
// unread message does, independent of whichever tab you're currently on.
function updateEnquiriesTabBadge(){
  const btn = tabBtns.enquiries;
  if(!btn) return;
  const count = enquiriesCache.filter(e => (e.status || "new") === "new").length;
  let badge = btn.querySelector(".msgunreadbadge");
  if(count > 0){
    if(!badge){
      badge = document.createElement("span");
      badge.className = "msgunreadbadge";
      btn.appendChild(badge);
    }
    badge.textContent = String(count);
  } else if(badge){
    badge.remove();
  }
}

function enquiryStatusLabel(status){
  return {new: "New", contacted: "Contacted", converted: "Converted", archived: "Archived"}[status] || "New";
}

function fmtEnquiryDate(iso){
  if(!iso) return "";
  const d = new Date(iso);
  if(isNaN(d.getTime())) return "";
  return d.toLocaleDateString([], {month: "short", day: "numeric", year: "numeric"});
}

function renderEnquiryList(){
  const el = document.getElementById("enquiryListEl");
  if(!el) return;
  el.innerHTML = "";
  if(!enquiriesCache.length){
    el.innerHTML = '<div class="emptyprogs">No enquiries yet — they\'ll show up here the moment someone submits the Enquire form.</div>';
    return;
  }
  enquiriesCache.forEach(en => {
    const status = en.status || "new";
    const div = document.createElement("div");
    div.className = "progitem" + (en.id === currentEnquiryId ? " active" : "");
    div.innerHTML = `${esc(en.name || "Unnamed")}${status === "new" ? '<span class="msgunreadbadge">new</span>' : ""}<span class="meta">${esc(en.email || "")} · ${esc(fmtEnquiryDate(en.createdAt))} · ${esc(enquiryStatusLabel(status))}</span>`;
    div.onclick = () => {
      currentEnquiryId = en.id;
      renderEnquiryList();
      renderEnquiryHost();
    };
    el.appendChild(div);
  });
}

function scheduleEnquiryPatch(id, patch){
  const idx = enquiriesCache.findIndex(e => e.id === id);
  if(idx > -1) enquiriesCache[idx] = Object.assign({}, enquiriesCache[idx], patch);
  if(enquiriesCol){
    enquiriesCol.doc(id).update(patch).catch(e => {
      flashNote("Couldn't save that change (" + e.code + ").", "dbnoteEnquiries");
    });
  }
}

function renderEnquiryHost(){
  const host = document.getElementById("enquiryHost");
  if(!host) return;
  host.innerHTML = "";
  const en = enquiriesCache.find(e => e.id === currentEnquiryId);
  if(!en){
    host.innerHTML = '<div class="empty">Select an enquiry on the left to see the full details.</div>';
    return;
  }

  const wrap = document.createElement("div");
  wrap.className = "editor";

  const head = document.createElement("div");
  head.className = "editor-head";
  head.innerHTML = `<div class="proginput" style="display:flex;align-items:center;">${esc(en.name || "Unnamed")}</div>`;
  wrap.appendChild(head);

  const detail = document.createElement("div");
  detail.innerHTML = `
    <div class="detail"><b>Email</b>${esc(en.email || "—")}</div>
    <div class="detail"><b>Phone</b>${esc(en.phone || "—")}</div>
    <div class="detail"><b>Submitted</b>${esc(fmtEnquiryDate(en.createdAt))}</div>
    <div class="detail"><b>Goals</b>${esc(en.goals || "—")}</div>
    <div class="detail"><b>Experience</b>${esc(en.experience || "—")}</div>
  `;
  wrap.appendChild(detail);

  const statusRow = document.createElement("div");
  statusRow.className = "clientrow";
  const statusLabelEl = document.createElement("span");
  statusLabelEl.className = "clientrowlabel";
  statusLabelEl.textContent = "Status";
  statusRow.appendChild(statusLabelEl);
  const select = document.createElement("select");
  select.className = "unitbtn";
  ["new", "contacted", "converted", "archived"].forEach(s => {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = enquiryStatusLabel(s);
    if((en.status || "new") === s) opt.selected = true;
    select.appendChild(opt);
  });
  select.addEventListener("change", () => {
    scheduleEnquiryPatch(en.id, {status: select.value});
    renderEnquiryList();
  });
  statusRow.appendChild(select);
  wrap.appendChild(statusRow);

  const actions = document.createElement("div");
  actions.className = "editor-actions";
  actions.style.marginTop = "16px";
  const convertBtn = document.createElement("button");
  convertBtn.type = "button";
  convertBtn.className = "iconbtn";
  convertBtn.textContent = "→ Create client from this enquiry";
  convertBtn.addEventListener("click", () => convertEnquiryToClient(en));
  actions.appendChild(convertBtn);
  const delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.className = "iconbtn";
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", async () => {
    if(!window.confirm(`Delete this enquiry from ${en.name || "this person"}? This can't be undone.`)) return;
    try{
      if(enquiriesCol) await enquiriesCol.doc(en.id).delete();
      enquiriesCache = enquiriesCache.filter(e => e.id !== en.id);
      if(currentEnquiryId === en.id) currentEnquiryId = null;
      renderEnquiryList();
      renderEnquiryHost();
    }catch(e){
      flashNote("Couldn't delete that enquiry (" + e.code + ").", "dbnoteEnquiries");
    }
  });
  actions.appendChild(delBtn);
  wrap.appendChild(actions);

  host.appendChild(wrap);
}

// Turns an enquiry into a real client record in one click -- their name
// carries over, and their goals/experience answers go straight into the
// new client's Notes so nothing they already told you gets lost or has to
// be retyped by hand. Marks the enquiry "converted" and switches straight
// to the new profile on THE SQUAD tab.
async function convertEnquiryToClient(en){
  const now = new Date().toISOString();
  const noteParts = [];
  if(en.goals) noteParts.push("Goals (from enquiry): " + en.goals);
  if(en.experience) noteParts.push("Experience (from enquiry): " + en.experience);
  if(en.email) noteParts.push("Email: " + en.email);
  if(en.phone) noteParts.push("Phone: " + en.phone);
  const data = {
    name: en.name || "New Client", goals: "", notes: noteParts.join("\n\n"),
    liftStats: [], weightUnit: "kg", accessCode: genAccessCode(), tasks: [],
    createdAt: now, updatedAt: now,
  };
  try{
    let newId;
    if(clientsCol){
      const ref = await clientsCol.add(data);
      newId = ref.id;
      clientsCache.unshift(Object.assign({id: newId}, data));
    } else {
      newId = "local-" + rid();
      clientsCache.unshift(Object.assign({id: newId}, data));
    }
    scheduleEnquiryPatch(en.id, {status: "converted"});
    renderEnquiryList();
    currentClientId = newId;
    showTab("clients");
    renderClientList();
    renderClientProfile();
  }catch(e){
    flashNote("Couldn't create a client from this enquiry right now (" + e.code + ").", "dbnoteEnquiries");
  }
}
