using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using CrudAng.Models;


namespace CrudAng.Controllers
{
    [System.Web.Http.RoutePrefix("Api/Device")]
    public class CURDAPIController : ApiController
    {
        CurdAngularEntities1 objEntity = new CurdAngularEntities1();

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("AllDeviceDetails")]

        public IQueryable<DeviceDetail> GetDevice()
        {
            try
            {
                return objEntity.DeviceDetails;
            }
            catch (Exception)
            {

                throw;
            }
        }



        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("GetDeviceDetailsById/{deviceId}")]

        public IHttpActionResult GetDeviceDetailById(string deviceId)
        {
            DeviceDetail objDev = new DeviceDetail();
            int id = Convert.ToInt32(deviceId);
            try
            {
                objDev = objEntity.DeviceDetails.Find(id);
                if (objDev == null)
                {
                    return NotFound();
                }
            }
            catch (Exception)
            {
                Console.WriteLine();
                throw;
            }

            return Ok(objDev);
        }



        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("InsertDeviceDetails")]
        public IHttpActionResult PostDevice(DeviceDetail data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                objEntity.DeviceDetails.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }

            return Ok(data);
        }

        //update
        [System.Web.Http.HttpPut]
        [System.Web.Http.Route("UpdateDeviceDetails")]
        public IHttpActionResult PutDeviceMaster(DeviceDetail device)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                DeviceDetail objDev = new DeviceDetail();
                objDev = objEntity.DeviceDetails.Find(device.id);
                if (objDev != null)
                {
                    objDev.Name = device.Name;
                    objDev.OsType = device.OsType;
                    objDev.Battery = device.Battery;
                    objDev.AvilableMemory = device.AvilableMemory;
                }

                int i = this.objEntity.SaveChanges();
            }
            catch (Exception)
            {
                //  Console.WriteLine();
                throw;
            }

            return Ok(device);
        }

        [System.Web.Http.HttpDelete]
        [System.Web.Http.Route("DeleteDeviceDetails")]
        public IHttpActionResult DeleteDeviceDelete(int id)
        {
       //     int id = Convert.ToInt32(deviceId);
            DeviceDetail device = objEntity.DeviceDetails.Find(id);
            if (device == null)
            {
                return NotFound();
            }

            objEntity.DeviceDetails.Remove(device);
            objEntity.SaveChanges();

            return Ok(device);

        }


    }
}