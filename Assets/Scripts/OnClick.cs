using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class OnClick : MonoBehaviour
{
    public Button[] Buttons;
    public Text IDtext;
    public Text Classtext;
    private Button button;

    // Start is called before the first frame update
    void Start()
    {
        var i = 0;
        foreach(Button button in Buttons)
        {
            Buttons[i] = GameObject.Find("Course01").GetComponent<Button>();

        }

    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
