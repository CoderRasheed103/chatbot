const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");


const MODEL_NAME = "models/chat-bison-001";
const API_KEY = "AIzaSyBLHcn5fWxtmSDCVHiWnRV14bZVg0yRl3E";

const client = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const context = "reply as a doctor , your answer should be in 4 parts. first part would be prediction of the diseases patient might be having with be risk percentage, 2nd part would consist the medicines required , 3rd part would consist of precautionary measures and lifestyle changes (if required ) , 4th keep it up to your choice. try to answer in brief and in points. also try to prescribe the medicines based on symptoms if possible try to give answer in as less words possible strictly don't answer any question other than related to medical field";
const examples = [
  {
    "input": {
      "content": " am having cold since two days and feling like having fever .also having the throat pain and unable to speek properly"
    },
    "output": {
      "content": "It sounds like you may have a viral infection, such as a cold or the flu. These are common illnesses that can cause a variety of symptoms, including fever, sore throat, and cough.\n\nIf you are experiencing these symptoms, it is important to rest and drink plenty of fluids. You may also want to take over-the-counter medications to help relieve your symptoms. If your symptoms are severe or do not improve after a few days, you should see a doctor.\n\nHere are some tips for treating a cold or the flu:\n\n* Get plenty of rest.\n* Drink plenty of fluids.\n* Take over-the-counter medications to help relieve your symptoms.\n* Use a humidifier or take a hot shower to help loosen mucus.\n* Gargle with salt water to help soothe a sore throat.\n* Avoid contact with people who are sick.\n* Wash your hands often with soap and water.\n* Clean and disinfect surfaces that may be contaminated with germs.\n\nIf you have a fever, you can take over-the-counter medications such as acetaminophen or ibuprofen. You can also try using a cool compress on your forehead or taking a cool bath or shower.\n\nIf you have a sore throat, you can gargle with salt water or take over-the-counter throat lozenges. You can also try drinking warm liquids, such as tea or soup.\n\nIf you have a cough, you can take over-the-counter cough suppressants or expectorants. You can also try drinking warm liquids, such as tea or soup, and using a humidifier.\n\nIf your symptoms are severe or do not improve after a few days, you should see a doctor."
    }
  },
  {
    "input": {
      "content": "my girlfriend is feeling like she is pregnant what should do what are the advices"
    },
    "output": {
      "content": "The first thing you should do is talk to your girlfriend about her concerns. It is important to be supportive and understanding, and to let her know that you are there for her no matter what.\n\nIf your girlfriend is pregnant, there are a few things you can do to help her. First, you can help her to find a doctor or midwife who can provide her with prenatal care. You can also help her to learn about pregnancy and childbirth, and to prepare for the arrival of the baby.\n\nIf your girlfriend is not pregnant, there are still a few things you can do to help her. First, you can help her to find out why she is feeling like she is pregnant. There are a number of possible causes, including stress, anxiety, and hormonal changes. Once you know the cause, you can work together to find a solution.\n\nYou can also help your girlfriend to cope with the emotional impact of feeling like she is pregnant. This can be a difficult time for her, and she may need your support. You can listen to her, offer her reassurance, and help her to feel loved and cared for.\n\nFinally, you can help your girlfriend to plan for the future. If she is pregnant, you can help her to prepare for the arrival of the baby. If she is not pregnant, you can help her to talk about her options and to make a plan for the future.\n\nThe most important thing is to be there for your girlfriend and to support her in whatever way she needs."
    }
  },
  {
    "input": {
      "content": "during pregnancy what are the things we should remember"
    },
    "output": {
      "content": "Pregnancy is a time of great change and excitement, but it can also be a time of anxiety and uncertainty. There are many things to remember during pregnancy, from taking care of your health to preparing for the arrival of your baby. Here are a few things to keep in mind:\n\n* **Eat a healthy diet.** This is important for both you and your baby. Make sure to eat plenty of fruits, vegetables, and whole grains. Avoid processed foods, sugary drinks, and excessive amounts of caffeine and alcohol.\n* **Get regular exercise.** Exercise is safe for most pregnant women and can help you stay healthy and fit. Aim for at least 30 minutes of moderate-intensity exercise most days of the week.\n* **Get enough sleep.** You'll need more sleep during pregnancy, so make sure to get at least 7-8 hours each night.\n* **See your doctor regularly.** Your doctor will monitor your health and make sure that you and your baby are healthy.\n* **Take care of yourself.** This means getting enough rest, eating healthy foods, and avoiding stress. It's also important to take care of your mental health. Talk to your doctor if you're feeling stressed, anxious, or depressed.\n* **Prepare for the arrival of your baby.** This includes things like setting up a nursery, buying baby supplies, and taking childbirth classes.\n\nPregnancy is a wonderful time, but it can also be a time of uncertainty. By following these tips, you can help ensure that you and your baby have a healthy and happy pregnancy."
    }
  },
  {
    "input": {
      "content": "my friend having the sugar what are the medicines he should consider"
    },
    "output": {
      "content": "There are many different types of medications that can be used to treat diabetes. The type of medication that is right for your friend will depend on a number of factors, including the severity of their diabetes, their other medical conditions, and their personal preferences.\n\nSome of the most common types of diabetes medications include:\n\n* **Insulin:** Insulin is a hormone that helps the body to use glucose for energy. People with type 1 diabetes need to take insulin injections, while people with type 2 diabetes may be able to take oral medications that help their bodies to produce more insulin or use insulin more effectively.\n* **Oral diabetes medications:** There are a number of different types of oral diabetes medications available. Some of these medications work by helping the body to produce more insulin, while others work by helping the body to use insulin more effectively.\n* **Thiazolidinediones (TZDs):** TZDs are a type of oral diabetes medication that helps the body to use insulin more effectively. TZDs can cause weight gain and fluid retention, so they are not usually recommended for people who are overweight or obese.\n* **Sulfonylureas:** Sulfonylureas are a type of oral diabetes medication that helps the body to produce more insulin. Sulfonylureas can cause low blood sugar levels, so it is important to monitor your blood sugar levels closely while taking these medications.\n* **Meglitinides:** Meglitinides are a type of oral diabetes medication that helps the body to produce more insulin. Meglitinides are short-acting medications, so they are usually taken before meals.\n* **DPP-4 inhibitors:** DPP-4 inhibitors are a type of oral diabetes medication that helps the body to use insulin more effectively. DPP-4 inhibitors are generally well-tolerated and do not cause weight gain or fluid retention.\n* **SGLT2 inhibitors:** SGLT2 inhibitors are a type of oral diabetes medication that helps the body to get rid of excess glucose through the urine. SGLT2 inhibitors can cause weight loss and urinary tract infections.\n* **GLP-1 agonists:** GLP-1 agonists are a type of injectable diabetes medication that helps the body to use insulin more effectively. GLP-1 agonists can cause weight loss and nausea.\n* **Insulin degludec:** Insulin degludec is a long-acting insulin that is injected once a day. Insulin degludec is a good option for people who need to take multiple injections of insulin each day.\n\nIt is important to talk to your doctor about the best type of medication for your friend's individual needs. Your doctor will also be able to help you to monitor your friend's blood sugar levels and to make sure that they are taking the correct dosage of medication."
    }
  },
  {
    "input": {
      "content": "i am having 100 degree fahrenheit  temperature also felling cough what should I do"
    },
    "output": {
      "content": "If you have a fever of 100 degrees Fahrenheit or higher, you should see a doctor to rule out any serious medical conditions. In the meantime, you can take over-the-counter medications such as acetaminophen or ibuprofen to help reduce your fever. You should also drink plenty of fluids and get plenty of rest.\n\nIf you are also experiencing a cough, you can take over-the-counter cough suppressants or expectorants. You should also drink plenty of fluids and use a humidifier to help loosen mucus.\n\nIf your symptoms do not improve after a few days, you should see a doctor.\n\nHere are some tips for treating a fever:\n\n* **Get plenty of rest.** This will help your body to fight off the infection that is causing your fever.\n* **Drink plenty of fluids.** This will help to prevent dehydration.\n* **Take over-the-counter medications.** Acetaminophen or ibuprofen can help to reduce your fever.\n* **Use a cool compress.** A cool compress can help to lower your body temperature.\n* **Avoid caffeine and alcohol.** These substances can dehydrate you and make your fever worse.\n* **See a doctor if your fever is high or does not improve after a few days.**\n\nHere are some tips for treating a cough:\n\n* **Get plenty of rest.** This will help your body to fight off the infection that is causing your cough.\n* **Drink plenty of fluids.** This will help to loosen mucus and prevent dehydration.\n* **Use a humidifier.** A humidifier can help to add moisture to the air, which can help to loosen mucus.\n* **Take over-the-counter medications.** Cough suppressants can help to reduce your cough. Expectorants can help to loosen mucus.\n* **Avoid smoking and secondhand smoke.** These substances can irritate your lungs and make your cough worse.\n* **See a doctor if your cough is severe or does not improve after a few weeks.**"
    }
  },
  {
    "input": {
      "content": "one of my friend tested HIV aids positive he is so affraid about his life what should he do"
    },
    "output": {
      "content": "I understand that your friend is feeling scared and uncertain about his future. It is important to remember that HIV is a manageable condition, and there are many resources available to help him live a long and healthy life.\n\nThe first thing your friend should do is talk to his doctor about his diagnosis and treatment options. There are a number of effective medications available to treat HIV, and your friend's doctor will be able to help him develop a treatment plan that is right for him.\n\nIn addition to medical treatment, there are a number of other things your friend can do to stay healthy and manage his HIV. He should eat a healthy diet, exercise regularly, and get enough sleep. He should also avoid alcohol and drugs, as these can make it more difficult for his body to fight off infection.\n\nYour friend should also talk to a counselor or therapist about his diagnosis. This can help him to deal with the emotional impact of HIV and to develop coping strategies.\n\nThere are also a number of support groups available for people living with HIV. These groups can provide your friend with emotional support, practical advice, and a sense of community.\n\nFinally, your friend should tell his close friends and family about his diagnosis. This can help him to feel supported and loved, and it can also help to reduce the stigma associated with HIV.\n\nLiving with HIV is a challenge, but it is possible to live a long and healthy life with the condition. With the right treatment and support, your friend can manage his HIV and live a full and productive life."
    }
  },
  {
    "input": {
      "content": "I having diabeties since longbut none of the medicines is working on me I have visited lot of doctors but no one is able to help me i have also tried the aurvedic medicines , now it is showing some result what should I do"
    },
    "output": {
      "content": "I understand that you are struggling with diabetes and that you have not been able to find a treatment that works for you. I am also aware that you have tried Ayurvedic medicine, which has shown some promise in treating diabetes.\n\nIt is important to remember that diabetes is a complex condition, and there is no one-size-fits-all treatment. What works for one person may not work for another. It is also important to be patient and to work with your doctor to find a treatment plan that is right for you.\n\nIf you are not satisfied with the treatment you are currently receiving, you may want to consider seeing a different doctor or trying a different type of medication. You may also want to consider joining a support group for people with diabetes. This can provide you with emotional support and practical advice from people who are going through the same thing as you.\n\nFinally, it is important to take care of yourself both physically and emotionally. Eat a healthy diet, exercise regularly, and get enough sleep. You should also avoid stress and alcohol. Taking care of yourself will help you to feel better and to manage your diabetes more effectively.\n\nI hope this information is helpful. Please let me know if you have any other questions."
    }
  }
];
const messages = [
  {
    "content": "i am having fever and cold since 2 days"
  },
  {
    "content": "It sounds like you may have a viral infection, such as a cold or the flu. These are common illnesses that can cause a variety of symptoms, including fever, sore throat, and cough.\n\nIf you are experiencing these symptoms, it is important to rest and drink plenty of fluids. You may also want to take over-the-counter medications to help relieve your symptoms. If your symptoms are severe or do not improve after a few days, you should see a doctor.\n\nHere are some tips for treating a cold or the flu:\n\n* Get plenty of rest.\n* Drink plenty of fluids.\n* Take over-the-counter medications to help relieve your symptoms.\n* Use a humidifier or take a hot shower to help loosen mucus.\n* Gargle with salt water to help soothe a sore throat.\n* Avoid contact with people who are sick.\n* Wash your hands often with soap and water.\n* Clean and disinfect surfaces that may be contaminated with germs.\n\nIf you have a fever, you can take over-the-counter medications such as acetaminophen or ibuprofen. You can also try using a cool compress on your forehead or taking a cool bath or shower.\n\nIf you have a sore throat, you can gargle with salt water or take over-the-counter throat lozenges. You can also try drinking warm liquids, such as tea or soup.\n\nIf you have a cough, you can take over-the-counter cough suppressants or expectorants. You can also try drinking warm liquids, such as tea or soup, and using a humidifier.\n\nIf your symptoms are severe or do not improve after a few days, you should see a doctor."
  },
  {
    "content": "what test can be preferred"
  },
  {
    "content": "There are a number of tests that can be used to diagnose a cold or the flu. The most common test is a rapid flu test, which can be done in a doctor's office or at a pharmacy. This test can detect the presence of the influenza virus in your body.\n\nIf your doctor suspects that you may have a bacterial infection, they may order a throat culture. This test can identify the bacteria that is causing your infection and help your doctor to choose the right antibiotic.\n\nIn some cases, your doctor may order a blood test to check for other possible causes of your symptoms, such as mononucleosis or Lyme disease.\n\nThe best test for you will depend on your symptoms and your doctor's assessment. If you are unsure about which test is right for you, talk to your doctor."
  }
];

messages.push({ "content": "NEXT REQUEST" });

client.generateMessage({
  // required, which model to use to generate the result
  model: MODEL_NAME,
  // optional, 0.0 always uses the highest-probability result
  temperature: 0.25,
  // optional, how many candidate results to generate
  candidateCount: 1,
  // optional, number of most probable tokens to consider for generation
  topK: 40,
  // optional, for nucleus sampling decoding strategy
  topP: 0.95,
  prompt: {
    // optional, sent on every request and prioritized over history
    context: context,
    // optional, examples to further finetune responses
    examples: examples,
    // required, alternating prompt/response messages
    messages: messages,
  },
}).then(result => {
  console.log(JSON.stringify(result, null, 2));
});