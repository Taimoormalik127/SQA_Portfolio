# QA Bug Report — ERP System

> **Note:** This report was produced during manual QA testing of a commercial Workforce/ERP
> management system under an NDA. All URLs, screenshots, and client-identifying details have
> been removed or redacted. Only the bug-tracking methodology, structure, and findings are
> shown here to demonstrate testing and documentation skills.

## Summary

- **Total bugs logged:** 88
- **Environment:** Staging
- **Status breakdown:** Not Resolved: 65, Improvement: 10, Verified: 9, Fixed: 2, Retesting: 1, Suggestion: 1
- **Severity breakdown:** Major: 48, Minor: 21, Trivial: 11, Critical: 8
- **Priority breakdown:** Medium: 39, High: 29, Low: 20

## Bug Log

| # | Module | Summary | Status | Priority | Severity |
|---|--------|---------|--------|----------|----------|
| 01 | Induction | Clicking Save button keeps loading after uploading a PDF file larger than 1MB even though the set limit is 10MB. It only saves when the file is 1MB or less. | Verified | High | Major |
| 02 | Induction | Employees do not receive any email after selecting “Notify all the employees via email” checkbox | Verified | Medium | Major |
| 03 | Forgot Password | Resend code option does not appear after the timer ends. | Not Resolved | High | Major |
| 04 | Manage Employees | Status doesn’t change to Inactive when adding or editing employee company details. After saving details and pressing the previous button, status still shows as Active on the dropdown. Employee does not move to the Inactive tab in the manage employee section after saving details. | Verified | High | Major |
| 05 | Add Employee > Personal Details | Personal details don’t save after uploading a profile image with large resolution even if the image is less than 5MB in size. | Verified | High | Major |
| 06 | Add Employee > Documents | Documents don’t save after uploading document image with large resolution even if the image is less than 5MB in size | Verified | High | Major |
| 07 | Roster | Roster is created with total required hours less than paid break | Not Resolved | Medium | Major |
| 09 | Roster | Error appears stating end date is required when the Full Day checkbox is unselected. End date option is not even available with unchecked Full Day option. | Fixed | Low | Minor |
| 10 | Roster | Bulk Schedule is not created with long message text (1000 words). | Verified | Low | Minor |
| 11 | Roster | Random error appeared while creating a bulk schedule. The time difference between start and end time shows wrong. This error appeared only once while testing. | Retesting | Low | Minor |
| 12 | Roster | Create bulk schedule with working days that don’t fall within start and end dates. Roster should not get created and validation error should shows. For Example: When start and end date have week days from monday-friday but working days are selected as saturday and sunday. Schedule doesn’t get created as it should but the creation validation still shows. | Not Resolved | Medium | Major |
| 13 | Roster | Shift gets assigned after leave is approved | Fixed | Medium | Major |
| 14 | Manage Attendance | Manual Attendance gets created with same check-in and check-out time | Not Resolved | Medium | Major |
| 15 | Manage Attendance | Manual Attendance gets created with break-in and break-out time same check-in and check-out time | Not Resolved | Medium | Major |
| 16 | Manage Attendance | Manual Attendance gets created with break-out time exceeding check-in time | Not Resolved | Medium | Major |
| 17 | Manage Attendance | Manual Attendance gets created with break-in time earlier than check-out time | Not Resolved | Medium | Major |
| 18 | Manage Attendance | Clicking on View Attendance button does not reveal complete attendance details of the employee. It only shows Break Details. | Verified | High | Major |
| 19 | Manage Attendance | Pending employees are present in Edit manual attendance section | Not Resolved | Medium | Minor |
| 20 | Attendance | Request >> Inactive employees are present when editing attendance requests. | Not Resolved | Medium | Minor |
| 21 | Attendance | Request >> Employees with pending registration are present when editing attendance requests. | Not Resolved | Medium | Minor |
| 22 | Attendance | Portal >> Attendance details are not correctly present. Some details are missing while other details are displayed as 0. | Verified | High | Major |
| 23 | Attendance | Portal >> Total hours spent are correctly displayed in the attendance stats on Portal page. | Verified | Medium | Major |
| 24 | Overtime | Pending employees are present when adding overtime. | Not Resolved | Medium | Minor |
| 25 | Overtime | Pending employees are present when editing overtime. | Not Resolved | Medium | Minor |
| 26 | Leave management > Request | Employees with pending registration are present in the edit leave request section | Not Resolved | Medium | Minor |
| 27 | Leave management > Request | Leave request gets created with end time earlier than start time | Not Resolved | Medium | Major |
| 28 | Leave management > Request | Leave request gets created with very long text (1000 words)  in Reason section | Improvement | Low | Trivial |
| 29 | Leave management > Request | Employee with pending registration are present when editing leave request | Not Resolved | Medium | Minor |
| 30 | Roster | Leave marker color should change after leave is accepted | Improvement | Low | Trivial |
| 31 | Leave Management > Packages | Leave Package gets created when number of leaves are set to 0 or a negative number | Not Resolved | Medium | Major |
| 32 | Roster | Leave Package should show to only selected employee roles in the Roster Section. However, It shows to other employee roles as well in roster | Not Resolved | High | Major |
| 33 | Leave Management > Holidays | Holiday gets created with required hours more than the difference between start and end date | Not Resolved | Medium | Major |
| 34 | Roster | Holiday does not appear on roster on set date | Not Resolved | High | Major |
| 35 | Payroll>Manage Pay Slip | Pay Slip cannot be generated when salary is set for less than a month | Not Resolved | High | Critical |
| 36 | Payroll>Manage Pay Slip | New Attendance in added in the attendance slip PDF file but it’s not added to the total salary | Not Resolved | High | Critical |
| 37 | Payroll>Manage Pay Slip | Paid Leave is not added to the salary | Not Resolved | High | Critical |
| 38 | Payroll>Manage Pay Slip | Unpaid Leave stays at 0. Unpaid Leaves are added to the paid leaves | Not Resolved | High | Critical |
| 39 | Payroll>Manage Pay Slip | There should be a separate section for Short Leave. Wrong Short Leave hours are added to the paid leaves. | Not Resolved | High | Critical |
| 40 | Payroll>Manage Pay Slip | Overtime always shows as 0. Overtime is not added to the salary | Not Resolved | High | Critical |
| 41 | Payroll>Manage Pay Slip | Overtime always shows as 0. | Not Resolved | High | Critical |
| 42 | Payroll>Manage Pay Slip | Correct Overtime details are not present on View Pay Slip Details page. Overtime is also not added to salary. | Not Resolved | High | Critical |
| 43 | WMS>Clients | Clients gets created with both short and long ABN. ABN (Australian Business Number) is a unique 11-digit number and must not be shorter or longer. | Not Resolved | Medium | Major |
| 44 | WMS>Client | Company logo image size requirement is 10MB. Client details do not get created after uploading a company logo image with large resolution even if the image is less than 10MB in size. Create button gets stuck on loading. Sometimes error appears on top-right corner of screen stating “Something went wrong” Image resolution: 4537x3360 Format: JPG Size: 1.77 MB | Not Resolved | High | Major |
| 45 | WMS>Client | Document image size requirement is 10MB. Document does not save after uploading an image with large resolution even if the image is less than 5MB in size.  Save button gets stuck on loading. Image resolution: 4537x3360 Format: JPG Size: 1.77 MB | Not Resolved | High | Major |
| 46 | WMS>Client | Document upload requirements like file size and type should be mentioned | Improvement | Low | Trivial |
| 47 | Subcontractors panel | Save button stuck on loading after uploading document | Not Resolved | High | Major |
| 48 | WMS>Subcontractors | Subcontractor can be created with both shorter and longer than 9-digits company name | Not Resolved | Medium | Major |
| 49 | WMS>Subcontractors | Company logo image size requirement is 10MB. Client details do not get created after uploading a company logo image with large resolution even if the image is less than 10MB in size. Create button gets stuck on loading. Sometimes error appears on top-right corner of screen stating “Something went wrong” Image resolution: 4537x3360 Format: JPG Size: 1.77 MB | Not Resolved | High | Major |
| 50 | WMS>Subcontractors | Subcontractor can be edited with both short and long ABN. ABN (Australian Business Number) is a unique 11-digit number and must not be shorter or longer. | Not Resolved | Medium | Major |
| 51 | Subcontractors Panel>Add Member | Work experience placeholder should be more clear. It should clearly express what type of experience is needed to be input. Any past experience, industry specific experience or a job/position specific experience? | Improvement | Low | Trivial |
| 52 | Subcontractors Panel>My Team | Profile image gets removed after update button is clicked in edit member page. After adding the member, navigate to the edit member page. With or without editing any details press the Update button at the bottom of the page. | Not Resolved | Medium | Major |
| 53 | Subcontractors Panel | Induction status should display as ‘Completed’ instead of ‘Approved’ | Improvement | Low | Trivial |
| 54 | Subcontractors | Document should show Inactive status after it’s status is changed to inactive | Improvement | Medium | Minor |
| 55 | WMS>Subcontractors | Inactive documents can be selected and approved. Document status also changes to approved in the Subcontractors panel. To select inactive document, click select all documents checkbox and then deselect active documents one by one. Only inactive document will remain selected. | Not Resolved | High | Major |
| 56 | WMS>Subcontractors | After selecting inactive document, reject button can be clicked. Description stating to enter rejection reason appears but reason text box is not visible. --	Inactive doc should not get selected at all. To select inactive document, click select all documents checkbox and then deselect active documents one by one. Only inactive document will remain selected. | Not Resolved | Medium | Major |
| 57 | Subcontractors panel | First approve all the documents then make some changes to the documents. After changes, documents status changes to Pending. But, the status description keeps showing approved and does not change to pending. | Not Resolved | Medium | Minor |
| 58 | Subcontractors Panel>My Team | On the add member page, select Visa holder option under Citizenship Status section. No file type, size or any upload requirements are mentioned.  --	After uploading a wrong file type a validation error appears that only shows which type of files are allowed. | Improvement | Low | Trivial |
| 59 | Subcontractors Panel>My Team | On the add member page, when uploading a 1MB PDF file under medical profile section, error appears “Something went wrong” 1MB is within the 10MB upload limit | Not Resolved | High | Major |
| 60 | Subcontractors Panel>My Team | On the add member page, Drag-and-drop area does not even highlight when hovering with a file under medical profile section. File does not get uploading with drag and drop feature | Not Resolved | Low | Minor |
| 61 | Subcontractors Panel>My Team | On the add member page, when uploading a 0KB file, file does not get uploaded as expected However, an error appears which shows wrong file types are allowed. According to the error, PDF file is not allowed to be uploaded. Pdf is actually allowed and error is wrong | Not Resolved | Low | Minor |
| 61 | Subcontractors Panel>My Team | On the add member page, no maximum file upload limit is mentioned. Limit appears to be 4. After uploading more than 4 files and clicking save, sometimes system gets stuck on loading and sometimes previously uploaded file gets replaced. | Not Resolved | Medium | Major |
| 62 | Subcontractors Panel>My Team | Required documents are not visible to subcontractor’s employees. | Not Resolved | High | Major |
| 63 | Subcontractors Panel>My Team | Induction documents are not visible to subcontractor’s employees. | Not Resolved | High | Major |
| 64 | Subcontractors Panel>My Team | Defects are not visible to subcontractor’s employees. | Not Resolved | High | Major |
| 65 | WMS>Subcontractors | Employee linked column shows 0 for all projects even when the project is assigned to a member | Not Resolved | Low | Minor |
| 66 | WMS>Subcontractors | Added employees are not present under Employees tab on View Subcontractor details page | Not Resolved | Medium | Major |
| 67 | Induction | The sign window of the document should not close for the employee. Or There should be sign requirements options that a company can Enter/Select for any document with both major and minor update. For example: A company can set a requirement that those employees will not be able to work who haven’t signed the document. | Suggestion | Low | Trivial |
| 68 | Subcontractor Panel | Change the subcontractor profile image. Changed image is only present on the subcontractor name drop down menu on top right corner of screen. Changed image is not present on the profile page | Not Resolved | Low | Trivial |
| 69 | WMS | Sites & Projects >> Site Defects > When multiple image files are uploaded at the time of defect creation, create button gets stuck on loading All files combined are less than the 10MB size limit. There should be a limit to how many image files can be uploaded in one defect | Not Resolved | Medium | Major |
| 70 | WMS | Sites & Projects >> Site Defects > More than one defects can be created with same name and details *Note: In the image below, Severity of the defects was changed after defects were created. Both defects have exactly the same details. | Not Resolved | Low | Minor |
| 71 | WMS | Sites & Projects >> Site Defects > WebP file is not mentioned as allowed. But, it is mentioned in the error as an allowed file. | Not Resolved | Low | Trivial |
| 72 | WMS | Sites & Projects >> Site Diaries > After equipment was deleted, equipment history does not show the deleted equipment history | Not Resolved | Medium | Minor |
| 73 | WMS | Safety & Compliance >> Incident Report > On the Step 4 on incident report, Video files do not save after upload. Upload a video file and press the save button to go to step 5. Then press back to come back to step 4 and the Video File will be gone. | Not Resolved | High | Major |
| 74 | WMS | Safety & Compliance >> Incident Report > When creating the investigation checklist, Inactive status is not getting selected. When Inactive option is clicked, Placeholder “Please Select an Option” is shown again | Not Resolved | Medium | Major |
| 75 | WMS | Safety & Compliance >> Incident Report > After checklist is created, there are no options to edit, delete or change status of existing checklist items | Improvement | Medium | Minor |
| 76 | WMS | Safety & Compliance >> Incident Report > On the View Incident Report page, when Generate PDF button is clicked, system keeps loading and PDF is not downloaded | Not Resolved | High | Major |
| 77 | WMS | Safety & Compliance >> Incident Report > On the Logs page, the placeholder for the Reference Number field is wrong. That field works with Incident Report Number and not with Reference number | Improvement | Low | Trivial |
| 78 | WMS | Safety & Compliance >> WHS Report > System saves and moves to next step with --	Finish Time before Start Time --	Finish Time same as Start Time On Step 2 of WHS Report | Not Resolved | Medium | Major |
| 79 | WMS | Safety & Compliance >> On any reports page, when download button is pressed, file opens in new tab instead of directly downloading as it should. This happens in these reports --	WHS --	SWMS --	Inspection --	WHSEQ | Improvement | Low | Minor |
| 80 | WMS | Safety & Compliance >> In both Inspection and WHSEQ report, System saves and moves on to step 2 with revision date earlier than issue date | Not Resolved | Medium | Major |
| 81 | WMS | Safety & Compliance >> Document Management> Report get created with Revision date before issue date | Not Resolved | Medium | Major |
| 82 | WMS | Safety & Compliance >> SWMS Report > On Step 5, under Hazard Risk section, with the “Other” option there is no field to specify the details | Not Resolved | Medium | Minor |
| 83 | WMS | Safety & Compliance >> WHS Report > On Step 4 of WHS Report, WebP is mentioned as allowed but when WebP is uploaded an error appears which does not mention WebP as allowed file format Error also show SVG is allowed but SVG is not mentioned in the Upload Section. | Not Resolved | Low | Trivial |
| 84 | WMS | Safety & Compliance >> WHS Report > On Step 4 of WHS Report, after uploading Gif file system keeps loading | Not Resolved | High | Major |
| 85 | WMS | Safety & Compliance >> WHS Report > Step 4 of WHS Report can be saved without filling “Level of Action” and “Position Responsibilities" fields which are marked required | Not Resolved | Medium | Major |
| 86 | WMS | Toolbox & Pre-start Meeting > When creating a Recurring Weekly meeting, those weekdays can be selected which don’t fall within the selected start and end date - Friday and Saturday were selected as Week days for this test - 28/04/2026 and 30/04/2026 were selected as Start and End Dates respectively for this test Meeting gets created | Not Resolved | Medium | Major |
| 87 | WMS | Help Desk > When creating Help desk ticket, Drag & Drop feature does not work in the File attachments section | Not Resolved | Low | Minor |
| 86 | WMS | Help Desk > Ticket gets created with WebP file but WebP is not mentioned in the attachments section below. Webp is shown as allowed in the validation error that appears when uploading any other file types Gif is allowed but after uploading a Gif file and pressing the Save button, System keeps loading. Sometimes error appears “Something went wrong” | Not Resolved | Medium | Major |