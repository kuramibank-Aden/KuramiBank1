// Add current class
    jQuery(document).ready(function() {
      $("#navigation li").click(function(){
          $("#navigation li").removeClass('current');
          $(this).addClass("current");
      });


    });



    


    jQuery(document).ready(function() {
        $('input[name="travelConsent"]').on('change', function() {
            if ($('#travelConsentYes').is(':checked')) {
                $('#reason').prop('disabled', false);
            } else {
                $('#reason').prop('disabled', true);
            }
        });
    });

    $(function() {
        $("#design-tab-form").steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            // enableFinishButton: false,
            enablePagination: false,
            enableAllSteps: true,
            cssClass: "wizard pc-tab-control"
        });
    });
 



    

    $(function() {
        var form = $("#example-add");
        form.validate({
            errorPlacement: function errorPlacement(error, element) {
                element.after(error);
            },
            rules: {
                confirm: {
                    equalTo: "#password"
                },
                country_id: {
                  required: true
              },
              Education_country_id: {
                  required: true
              }
              ,
              trainaing_country_id: {
                  required: true
              },
              education_level_id:
              {
                  required:true
              }
              ,
              language_id:
              {
                  required:true
              },
  
              reading_level:
              {
                  required:true
              }
              ,
              writing_level:
              {
                  required:true
              },
  
              speaking_level:
              {
                  required:true
              }
              ,
              skill_level:
              {
                  required:true
              }
              ,
              work_field_id:
              {
                  required:true
              },
              work_with_us_period:
              {
                  required:true
              },
              starting_id:
              {
                  required:true
              }
              ,
              input_file:
              {
                  required:true
              } 
              ,
              file_name:
              {
                  required:true
              }
  
  
  
            } ,
            messages: {
              country_id: {
                  required: "هذا الحقل مطلوب"
              },
              Education_country_id: {
                  required: "هذا الحقل مطلوب"
              },
              trainaing_country_id: {
                  required: "هذا الحقل مطلوب"
              },
  
              education_level_id: {
                  required: "هذا الحقل مطلوب"
              }
              ,
              language_id: {
                  required: "هذا الحقل مطلوب"
              },
              reading_level: {
                  required: "هذا الحقل مطلوب"
              },
              writing_level: {
                  required: "هذا الحقل مطلوب"
              }
              ,
              speaking_level: {
                  required: "هذا الحقل مطلوب"
              },
  
              skill_level: {
                  required: "هذا الحقل مطلوب"
              }
              ,
  
              work_field_id: {
                  required: "هذا الحقل مطلوب"
              }
              ,
              work_with_us_period:
              
              {
                  required: "هذا الحقل مطلوب"
  
              },
              starting_id:
              
              {
                  required: "هذا الحقل مطلوب"
  
              }
              ,
              file_name:
              {
                  required: "هذا الحقل مطلوب"
                  
              }
              ,
              input_file:
              {
                  required: "هذا الحقل مطلوب"
  
              } 
  
            }
               
        });  
   /*      var storeUrl = "{{ route('CV.store') }}";

        form.children("div").steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            onStepChanging: function(event, currentIndex, newIndex) {
              //  form.validate().settings.ignore = ":disabled,:hidden";
                //return form.valid();
            },
            onFinishing: function(event, currentIndex) {
                form.validate().settings.ignore = ":disabled";
                return form.valid();
            },
            onFinished: function(event, currentIndex) {
                return form.submit(); // Submit the form
            }
        });
           */
           // Add a click handler to track when the "Next" button is clicked
   
  
  
  
    });







    $(function() {
        var form = $("#example-form-edit");
        form.validate({
            errorPlacement: function errorPlacement(error, element) {
                element.after(error);
            },
            rules: {
                confirm: {
                    equalTo: "#password"
                },
                country_id: {
                  required: true
              },
              Education_country_id: {
                  required: true
              }
              ,
              trainaing_country_id: {
                  required: true
              },
              education_level_id:
              {
                  required:true
              }
              ,
              language_id:
              {
                  required:true
              },
  
              reading_level:
              {
                  required:true
              }
              ,
              writing_level:
              {
                  required:true
              },
  
              speaking_level:
              {
                  required:true
              }
              ,
              skill_level:
              {
                  required:true
              }
              ,
              work_field_id:
              {
                  required:true
              },
              work_with_us_period:
              {
                  required:true
              },
              starting_id:
              {
                  required:true
              }
              ,
              input_file:
              {
                  required:true
              } 
              ,
              file_name:
              {
                  required:true
              }
  
  
  
            } ,
            messages: {
              country_id: {
                  required: "هذا الحقل مطلوب"
              },
              Education_country_id: {
                  required: "هذا الحقل مطلوب"
              },
              trainaing_country_id: {
                  required: "هذا الحقل مطلوب"
              },
  
              education_level_id: {
                  required: "هذا الحقل مطلوب"
              }
              ,
              language_id: {
                  required: "هذا الحقل مطلوب"
              },
              reading_level: {
                  required: "هذا الحقل مطلوب"
              },
              writing_level: {
                  required: "هذا الحقل مطلوب"
              }
              ,
              speaking_level: {
                  required: "هذا الحقل مطلوب"
              },
  
              skill_level: {
                  required: "هذا الحقل مطلوب"
              }
              ,
  
              work_field_id: {
                  required: "هذا الحقل مطلوب"
              }
              ,
              work_with_us_period:
              
              {
                  required: "هذا الحقل مطلوب"
  
              },
              starting_id:
              
              {
                  required: "هذا الحقل مطلوب"
  
              }
              ,
              file_name:
              {
                  required: "هذا الحقل مطلوب"
                  
              }
              ,
              input_file:
              {
                  required: "هذا الحقل مطلوب"
  
              } 
  
            }
               
        });  
     
      form.children("div").steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            onStepChanging: function(event, currentIndex, newIndex) {
                form.validate().settings.ignore = ":disabled,:hidden";
                return form.valid();
            },
            onFinishing: function(event, currentIndex) {
                form.validate().settings.ignore = ":disabled";
                return form.valid();
            },
            onFinished: function(event, currentIndex) {
              //  alert("Submitted!");
              return  form.submit();
            }
  
            
        });


        $("clearfix").on("click", ".wizard .steps a", function(event) {
            console.log('Tab clicked:');

            if ($(window).width() <= 767) { // 

                // Find the element with the class 'body current'
                var targetElement = $('.body.current');
                
            
                // If the target element is below the current scroll position
                if (targetElement > 0) {
                    $('html, body').animate({
                        scroll: targetElement.offset().dow
                    }, 1000); // Adjust the duration as needed
                }
             


 
        
            }
        });

       
  
  
  
    });


  


 







/* document.addEventListener('DOMContentLoaded', (event) => {
    const coverLetter = document.getElementById('coverLetter');
    const charCount = document.getElementById('charCount');
    const errorMessage = document.getElementById('errorMessage');

    coverLetter.addEventListener('input', () => {
        const charLength = coverLetter.value.length;
        charCount.textContent = `${charLength}/1250`;

        if (charLength < 250 || charLength > 1250) {
            errorMessage.textContent = 'يجب أن تكون رسالة طلب العمل بين 250 و 1250 حرفًا.';
        } else {
            errorMessage.textContent = '';
        }
    });

    coverLetter.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });

    document.getElementById('jobApplicationForm').addEventListener('submit', (e) => {
        const charLength = coverLetter.value.length;
        if (charLength <  1250) {
            e.preventDefault();
            errorMessage.textContent = 'يجب أن تكون رسالة طلب العمل    1250 حرفًا.';
        }
    });
});  



  
 */




 function confirmDelete(id) {
    Swal.fire({
        title: 'هل أنت متأكد؟',
        text: "لا يمكنك التراجع عن هذا الإجراء!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'نعم، احذف!',
        cancelButtonText: 'إلغاء'
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById('delete-form-' + id).submit();
        }
    });
}
 

    document.addEventListener("DOMContentLoaded", function() {
        var fileInput = document.getElementById('file_name_edit');
        var currentFileName = document.getElementById('current_file_name');
    
        if (currentFileName) {
            // Create a custom display for the file name
            var displayFileName = document.createElement('div');
            displayFileName.classList.add('form-control', 'bg-light');
            displayFileName.style.padding = '0.375rem 0.75rem';
            displayFileName.innerText = currentFileName.value;
            
            // Insert the custom display before the file input
            fileInput.parentNode.insertBefore(displayFileName, fileInput);
    
            // Hide the actual file input until a new file is selected
            fileInput.style.opacity = '0';
            fileInput.style.position = 'absolute';
            fileInput.style.zIndex = '-1';
    
            // Show the file input when a new file is selected
            fileInput.addEventListener('change', function() {
                if (fileInput.files.length > 0) {
                    displayFileName.innerText = fileInput.files[0].name;
                } else {
                    displayFileName.innerText = currentFileName.value;
                }
            });
        }
    });
    