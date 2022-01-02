import {Item, Menu} from './menu';
import {Treatment} from "./treatment";



export  let menuData: Menu[] = [
  new Menu('Patient', 'pi pi-fw pi-user-plus', 'patient', [new Item('add',

    'pi pi-fw pi-plus', 'patient/add'),
    new Item('Edit', 'pi pi-fw pi-pencil', 'patient/edit'),
    new Item('Appointment', 'pi pi-fw pi-pencil', 'patient/appointment'),
    new Item('View', 'pi pi-fw pi-pencil', 'patient/view'),
    new Item('Search', 'pi pi-fw pi-search', 'patient/search')
  ]),

  new Menu('Doctor', 'pi pi-fw pi-user-plus', 'doctor', [
    new Item('Add', 'pi pi-fw pi-plus', 'doctor/add'),
    new Item('Edit', 'pi pi-fw pi-pencil', 'doctor/edit'),
    new Item('Appointment', 'pi pi-fw pi-pencil', 'doctor/appointment'),
    new Item('Availability', 'pi pi-fw pi-search', 'doctor/availability'),
    new Item('Search', 'pi pi-fw pi-cog', 'doctor/search')

  ]),

  /* new Menu('Login', 'pi pi-fw pi-sign-in','Login',[ ] ),*/

  new Menu('Pharmacy', 'pi pi-fw pi-shopping-cart', 'pharmacy', [
    new Item('Add', 'pi pi-fw pi-plus', 'pharmacy/add'),
    new Item('Edit', 'pi pi-fw pi-pencil', 'pharmacy/edit'),
    new Item('Search', 'pi pi-fw pi-cog', 'pharmacy/search')

  ]),
  new Menu('Inventory', 'pi pi-fw pi-shopping-cart', 'inventory', [
    new Item('Add', 'pi pi-fw pi-plus', 'inventory/add'),
    new Item('Edit', 'pi pi-fw pi-pencil', 'inventory/edit'),
    new Item('Search', 'pi pi-fw pi-cog', 'inventory/search')

  ])

];


export let complaints:string[]=[
  "Teeth Grinding",
  "Swelling in Jaws",
  "Tooth Discoloration",
  "Bleeding Gums",
  "Difficulty in Chewing",
  "Difficulty in moving Jaws",
  "Swelling in Gums",
  "Bad Breath",
  "Sensitive Teeth",
  "Tooth Pain",
  "Tooth Decay",
  "Plaque"

];

export let diagnosisType:string[]=[
  "0-Constricted Arch",
  "0-Scissor bite",
  "0-Deficient mandible",
  "0-Deficient maxilla",
  "0-Narrow Palate",
  "0-High palate",
  "0-Class III malocclusion",
  "0-Class II malocclusion",
  "0-Class I malocclusion",
  "0-Transposition",
  "0-Rotation",
  "0-Lower Midline Spacing",
  "0-Upper Midline Spacing",
  "0-Cross Bite Complete",
  "0-Cross bite partial",
  "0-Posterior Open bite",
  "0-Anterior Open bite",
  "0-Anterior Deep bite/Overbite",
  "0-Lower lingually placed tooth",
  "0-Upper lingually placed tooth",
  "0-Upper and lower anterior crowding",
  "0-Lower anterior crowding",
  "0-Upper anterior crowding",
  "0-Upper and lower generalized spacing",
  "0-Upper and lower posterior spacing",
  "0-Lower Posterior spacing",
  "0-Upper posterior spacing",
  "0-Upper and lower anterior spacing",
  "0-Lower anterior spacing",
  "0-Upper anterior spacing",
  "0-Upper and lower protrusion",
  "0-Lower protrusion/Overjet",
  "0-Upper protrusion/Overjet",
  "Dislocation Of Tooth",
  "Dislocation Of Jaw",
  "Fractures Of Other Skull & Facial bones(e.g. Alveolus & Palate)",
  "Multiple Fractures Involving Skull & Facial Bones",
  "Fructure Of Mandible",
  "Fructure Of Tooth",
  "Superficial Injury Of Lips & Oral Cavity",
  "Fissured Tongue",
  "Atrophy Of Tongue Papillae",
  "Hypertrophy Of Tongue Papilae(e.g Black Hairy Tongue)",
"Median rhomboid Glossitis",
"Geopraphic Tongue",
"Glossitis",
"Oral Submucous Fibrosis",
"Hairy Leukoplakia",
"Leukoplakia & Other Disturbances Of Oral Epithelium incl Tongue",
"Cheek & Lips biting",
"Diseases Of Lips (e.g. Cheilitis)",
"Cellulitis & Abscess Of Mouth(e.g.Floor or Submandibular)",
"Other Forms Of Stomatitis (e.g. Denture Stomatitis)",
"Recurrent Oral Aphthae",
"Disturbances Of Salivary Glands(e.g Xerostomia)",
"Mucocele Of Salivary Glands",
"Sialolitiasis(e.g Calculus Or Stone)",
"Fistula Of Salivary Glands",
"Abcess Of Salivary Glands",
"Sialoadenitis",
"Hypertrophy Of Salivary Glands",
"Atrophy Of Salivary Glands",
"Alveolitis Of Jaws(Dry Socket)",
"Inflammatory Condition Of Jaws(e.g Ostitis)",
"Giant Cell Grtanuloma, Central",
"Developmental Disorders Of Jaw(e.g. Stafine's Cyst. Torus)",
"Developmental Non Odntogenic Eysts(e.g. Incisive/Nasoplatine)",
"Developmental Odntogenic Eysts(e.g.Dentigerous,Eruption)",
"Retained Dental root",
"Atrophy Of Edentulous Alweolar Ridge",
"Loss Of Teeth Due To Accident, Extraction Or Local Perodontal Disease",
"Exfoliation Of Teeth Due To Systemic Causes",
"Temporomandibualr Joint Disorders",
"Dentofacial Functional Abnormalities",
"Malocclusion",
"Anomalies Of Tooth Position(e.g.Crowding/Diastema/Spacing)",
"Anomalies Of Dental Arch Relationship(e.g. X-bite or Open Bite)",
"Anomalies Of Jaw-Cranial Base Relationship(e.g.Asymmetry Of Jaw or Pro/Retrognathism)",
"Major Anomalies Of Jaw Size(e.g. Macrognathism)",
"Other Specified Disorder Of Gingiva & Edentulous Alvealar Ridge(e.g.Flabby ridge)",
"Gingival & Edentulous Ridge Lesions Associated With Trauma(e.g. Denture Hyperplasis)",
"Gingival Enlargement",
"Gingival Recession",
"Juvenile Periodontitis",
"Chronic Periodontitis(e.g. Pericornitis)",
"Acute Periodontitis",
"Chronic Gingivitis",
"Acute Gingivitis(Exc. ANUG or Herpes Simplex)",
"Radicular Cyst(Exe. Lateral Periodontal Cyst)",
"Periapical Abcess Without Sinus",
"Periapical Abcess With Sinus",
"Chronic Apical Periodontitis Of Pulpal Orgin",
"Acute Apical Periodontitis Of Pulpal Orgin",
"Pulp Degeneration(e.g.Denticles or Stones)",
"Pulp Necrosis",
"Pulpitis(e.g. Acute/Chronic)",
"Deposits On Teeth(e.g. Calculus or Ext. Staining0",
"Ankylosis Of Teeth",
"Hypercementosis",
"Pathological Resorption Of Teeth(Internal or External)",
"Erosion Of Teeth",
"Abrasion Of Teeth",
"Excessive Attrition Of Teeth",
"Arrested Dental Caries",
"Caries In Cemntum",
"Caries In Dentine",
"Enamel Caries (Initial Caries)",
"Impacted Teeth",
"Embeded Tooth(Failed To Erupt w/o Obstruction)",
"Other Disorders Of Tooth Development(e.g Intrinsic Staining)",
"Teething Syndrome",
"Disturbances In Tooth Eruption (e.g Natal Tooth or Premature Eruption Of Tooth/Retained Primary Toot",
"Hereditary Disturbaces In Tooth Structure (e.g Amelogenesis Imp.)",
"Disturbances In Tooth Formation",
"Mottled Teeth",
"Abnormalties Of Size & Form Of Teeth",
"Supermumary Teeth",
"Anodontia"]

export const treatmentData:any=[new Treatment(1,'Consultation',100),
  new Treatment(2,'X-Ray',200),
  new Treatment(3,'Muco Pain Gel',100),
  new Treatment(4,'Mouthwash',200),
  new Treatment(5,'Anterior Extraction',500),
  new Treatment(6,'Posterior Extraction',600),
  new Treatment(7,'8th Tooth Extractoin',800),
  new Treatment(8,'Impaction',800),
  new Treatment(9,'Scaling I',600),
  new Treatment(10,'Scaling II',700),
  new Treatment(11,'Scaling III',800),
  new Treatment(12,'Root Canal Treatment',2500),
  new Treatment(13,'Crown and Bridge',0),
  new Treatment(14,'Ortho Adult',19000),
  new Treatment(15,'Ortho Children',7000),
  new Treatment(16,'Filling Composite I',600),
  new Treatment(17,'Filling Composite II',800),
  new Treatment(18,'Filling Composite III',1000),
  new Treatment(19,'Tooth Whitening',0),
  new Treatment(20,'Complete Denture',0),
  new Treatment(21,'Partial Denture Veneer',0),
  new Treatment(22,'Implant',0),
  new Treatment(23,'Surgery',0),
  new Treatment(24,'Operculectomy',0),
  new Treatment(25,'Operculectomy',0)

];

export const medicineData:any[]=['Amox','Aug625','Auclopride','Zerodol','Pan40','Flagyl'];
export const dosageData:any[]=[];
export const frequencyData:any[]=['0-0-0','0-0-1','0-1-0','0-1-1','1-0-0','1-0-1','1-1-0','1-1-1'];
export const durationData:any[]=['1','2','3','4','5','6','7','8','9','10'];
export const medicineNotes:any[]=['Before Meal','After Meal'];
